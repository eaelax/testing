import { NextRequest, NextResponse } from 'next/server';
import { getUserSessionCookies } from '@/lib/tiktok-session';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');
  const filename = searchParams.get('filename');
  const username = searchParams.get('user');
  const isAttachment = searchParams.get('download') === '1' || !!filename;

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing target url parameter' }, { status: 400 });
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

    if (rangeHeader) {
      upstreamHeaders['Range'] = rangeHeader;
    }

    const upstreamRes = await fetch(targetUrl, {
      headers: upstreamHeaders,
    });

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
      'Access-Control-Allow-Origin': '*',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
    };

    const contentLength = upstreamRes.headers.get('content-length');
    if (contentLength) headers['Content-Length'] = contentLength;

    const contentRange = upstreamRes.headers.get('content-range');
    if (contentRange) headers['Content-Range'] = contentRange;

    if (isAttachment) {
      const safeFilename = filename || (targetUrl.includes('.mp3') ? 'audio.mp3' : 'video.mp4');
      headers['Content-Disposition'] = `attachment; filename="${encodeURIComponent(safeFilename)}"`;
    }

    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Proxy fetch failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
