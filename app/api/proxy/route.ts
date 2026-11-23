import { lookup } from 'node:dns/promises';
import net from 'node:net';
import { NextRequest, NextResponse } from 'next/server';
import { getUserSessionCookies } from '@/lib/tiktok-session';

const BLOCKED_HOSTNAMES = new Set([
  'localhost',
  'localhost.localdomain',
  'ip6-localhost',
  'ip6-loopback',
  'metadata.google.internal',
]);

function isPrivateOrReservedIpv4(ip: string): boolean {
  const parts = ip.split('.').map((p) => Number(p));
  if (parts.length !== 4 || parts.some((n) => !Number.isInteger(n) || n < 0 || n > 255)) {
    return true;
  }
  const [a, b, c] = parts;

  if (a === 0) return true; // 0.0.0.0/8
  if (a === 10) return true; // 10.0.0.0/8
  if (a === 100 && b >= 64 && b <= 127) return true; // 100.64.0.0/10 CGNAT
  if (a === 127) return true; // 127.0.0.0/8 loopback
  if (a === 169 && b === 254) return true; // 169.254.0.0/16 link-local / cloud metadata
  if (a === 172 && b >= 16 && b <= 31) return true; // 172.16.0.0/12 private
  if (a === 192 && b === 0 && (c === 0 || c === 2)) return true; // IETF / TEST-NET
  if (a === 192 && b === 168) return true; // 192.168.0.0/16 private
  if (a === 198 && (b === 18 || b === 19)) return true; // 198.18.0.0/15 benchmark
  if (a >= 224) return true; // multicast & reserved

  return false;
}

function isPrivateOrReservedIp(ip: string): boolean {
  const normalized = ip.trim().toLowerCase();
  const version = net.isIP(normalized);
  if (version === 4) {
    return isPrivateOrReservedIpv4(normalized);
  }
  if (version === 6) {
    if (normalized === '::' || normalized === '::1') return true;
    if (normalized.startsWith('::ffff:')) {
      const mapped = normalized.slice(7);
      if (net.isIP(mapped) === 4) {
        return isPrivateOrReservedIpv4(mapped);
      }
    }
    if (normalized.startsWith('fc') || normalized.startsWith('fd')) return true; // fc00::/7 unique local
    if (/^fe[89ab][0-9a-f]:/i.test(normalized) || normalized.startsWith('fe80')) return true; // fe80::/10 link-local
    if (normalized.startsWith('ff')) return true; // ff00::/8 multicast
    return false;
  }
  return true;
}

async function validatePublicHttpsUrl(rawUrl: string): Promise<URL | null> {
  let parsed: URL;
  try {
    parsed = new URL(rawUrl);
  } catch {
    return null;
  }

  if (parsed.protocol !== 'https:') {
    return null;
  }

  if (parsed.username || parsed.password) {
    return null;
  }

  if (parsed.port && parsed.port !== '443') {
    return null;
  }

  const hostname = parsed.hostname.toLowerCase().replace(/^\[|\]$/g, '');
  if (
    !hostname ||
    !hostname.includes('.') ||
    BLOCKED_HOSTNAMES.has(hostname) ||
    hostname.endsWith('.local') ||
    hostname.endsWith('.internal') ||
    hostname.endsWith('.localhost') ||
    hostname.endsWith('.arpa')
  ) {
    return null;
  }

  if (net.isIP(hostname) !== 0) {
    return isPrivateOrReservedIp(hostname) ? null : parsed;
  }

  try {
    const records = await lookup(hostname, { all: true });
    if (!records || records.length === 0) {
      return null;
    }
    for (const record of records) {
      if (isPrivateOrReservedIp(record.address)) {
        return null;
      }
    }
    return parsed;
  } catch {
    return null;
  }
}

async function fetchWithValidatedRedirects(
  initialUrl: string,
  headers: Record<string, string>,
  maxRedirects = 3
): Promise<Response | null> {
  let currentUrl = initialUrl;

  for (let hop = 0; hop <= maxRedirects; hop++) {
    const validUrl = await validatePublicHttpsUrl(currentUrl);
    if (!validUrl) {
      return null;
    }

    const res = await fetch(validUrl.toString(), {
      headers,
      redirect: 'manual',
      signal: AbortSignal.timeout(15000),
    });

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers.get('location');
      if (!location) return null;
      currentUrl = new URL(location, validUrl).toString();
      continue;
    }

    return res;
  }

  return null;
}

function sanitizeDownloadFilename(rawName: string | null, targetUrl: string): string {
  const fallback = targetUrl.includes('.mp3') ? 'audio.mp3' : 'video.mp4';
  if (!rawName) return fallback;
  const cleaned = rawName.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/^\.+/, '').slice(0, 120);
  return cleaned || fallback;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');
  const filename = searchParams.get('filename');
  const username = searchParams.get('user');
  const isAttachment = searchParams.get('download') === '1' || !!filename;

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing target url parameter.' }, { status: 400 });
  }

  try {
    const rangeHeader = req.headers.get('range');
    const upstreamHeaders: Record<string, string> = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
      Referer: 'https://www.tiktok.com/',
    };

    if (username) {
      const sessionCookie = getUserSessionCookies(username);
      if (sessionCookie) {
        upstreamHeaders['Cookie'] = sessionCookie;
      }
    }

    if (rangeHeader && /^bytes=\d*-\d*$/i.test(rangeHeader.trim())) {
      upstreamHeaders['Range'] = rangeHeader.trim();
    }

    const upstreamRes = await fetchWithValidatedRedirects(targetUrl, upstreamHeaders);
    if (!upstreamRes) {
      return NextResponse.json({ error: 'Invalid or blocked target URL.' }, { status: 400 });
    }

    if (!upstreamRes.ok && upstreamRes.status !== 206) {
      return NextResponse.json(
        { error: `Upstream error ${upstreamRes.status}` },
        { status: upstreamRes.status }
      );
    }

    const contentType =
      upstreamRes.headers.get('content-type') ||
      (targetUrl.includes('.mp3') ? 'audio/mpeg' : 'video/mp4');

    const headers: Record<string, string> = {
      'Content-Type': contentType,
      'X-Content-Type-Options': 'nosniff',
      'Access-Control-Allow-Origin': '*',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
    };

    const contentLength = upstreamRes.headers.get('content-length');
    if (contentLength) headers['Content-Length'] = contentLength;

    const contentRange = upstreamRes.headers.get('content-range');
    if (contentRange) headers['Content-Range'] = contentRange;

    if (isAttachment) {
      const safeFilename = sanitizeDownloadFilename(filename, targetUrl);
      headers['Content-Disposition'] = `attachment; filename="${safeFilename}"`;
    }

    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers,
    });
  } catch {
    return NextResponse.json({ error: 'Proxy fetch failed.' }, { status: 502 });
  }
}