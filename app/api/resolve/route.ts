import { NextRequest, NextResponse } from 'next/server';

interface CacheEntry {
  play: string;
  wmplay: string;
  music: string;
  title: string;
  needsProxy: boolean;
  expiresAt: number;
}

type JsonRecord = Record<string, unknown>;

// In-memory cache to prevent duplicate requests and eliminate latency (2-hour TTL)
const resolveCache = new Map<string, CacheEntry>();

function asObj(val: unknown): JsonRecord {
  return val && typeof val === 'object' ? (val as JsonRecord) : {};
}

function asStr(val: unknown, fallback = ''): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  return fallback;
}

function normalizeUrl(url?: string, base = 'https://www.tikwm.com'): string {
  if (!url) return '';
  let cleaned = url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/').trim();
  if (!cleaned) return '';
  if (cleaned.startsWith('//')) cleaned = `https:${cleaned}`;
  else if (cleaned.startsWith('/')) cleaned = `${base}${cleaned}`;
  else if (cleaned.startsWith('http://')) cleaned = cleaned.replace(/^http:\/\//i, 'https://');
  return cleaned;
}

function extractUrlField(val: unknown): string {
  if (typeof val === 'string') return val;
  if (val && typeof val === 'object') {
    const obj = val as JsonRecord;
    if (Array.isArray(obj.UrlList) && typeof obj.UrlList[0] === 'string') {
      return obj.UrlList[0];
    }
    if (Array.isArray(obj.urlList) && typeof obj.urlList[0] === 'string') {
      return obj.urlList[0];
    }
  }
  return '';
}

async function resolveFromTikwm(tiktokUrl: string): Promise<Omit<CacheEntry, 'expiresAt'> | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const res = await fetch('https://www.tikwm.com/api/', {
      method: 'POST',
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        Accept: 'application/json, text/javascript, */*; q=0.01',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        Origin: 'https://www.tikwm.com',
        Referer: 'https://www.tikwm.com/',
        Cookie: 'current_language=en',
      },
      body: new URLSearchParams({ url: tiktokUrl, hd: '1' }).toString(),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (res.ok) {
      const text = await res.text();
      if (text.trim().startsWith('{')) {
        const json = JSON.parse(text) as JsonRecord;
        if (json && json.code === 0 && json.data) {
          const d = asObj(json.data);
          const musicInfo = asObj(d.music_info);
          const play = normalizeUrl(asStr(d.hdplay) || asStr(d.play) || asStr(d.wmplay));
          const wmplay = normalizeUrl(asStr(d.wmplay) || play);
          const music = normalizeUrl(asStr(musicInfo.play) || asStr(d.music));
          const title = asStr(d.title);

          if (play) {
            return { play, wmplay, music, title, needsProxy: false };
          }
        }
      }
    }
  } catch {
    // Fall through to GET / TikTok SSR fallback
  }

  return null;
}

async function resolveFromTikTokPage(tiktokUrl: string): Promise<Omit<CacheEntry, 'expiresAt'> | null> {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 7000);

    const res = await fetch(tiktokUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Accept-Language': 'en-US,en;q=0.9',
      },
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    if (!res.ok) return null;

    const html = await res.text();
    const match = html.match(
      /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
    );
    if (!match?.[1]) return null;

    const json = JSON.parse(match[1]) as JsonRecord;
    const defaultScope = asObj(json['__DEFAULT_SCOPE__']);
    const videoDetail = asObj(defaultScope['webapp.video-detail']);
    const itemInfo = asObj(videoDetail.itemInfo);
    const itemStruct = asObj(itemInfo.itemStruct);
    if (!itemStruct.id && !itemStruct.video) return null;

    const v = asObj(itemStruct.video);
    const m = asObj(itemStruct.music);
    const bitrateArr = Array.isArray(v.bitrateInfo) ? v.bitrateInfo : [];
    const firstBitrate = asObj(bitrateArr[0]);
    const bitrateUrl = extractUrlField(firstBitrate.PlayAddr);

    const play = normalizeUrl(extractUrlField(v.playAddr) || bitrateUrl || extractUrlField(v.downloadAddr));
    const wmplay = normalizeUrl(extractUrlField(v.downloadAddr) || play);
    const music = normalizeUrl(asStr(m.playUrl) || asStr(m.play));
    const title = asStr(itemStruct.desc);

    if (!play) return null;
    return { play, wmplay, music, title, needsProxy: true };
  } catch {
    return null;
  }
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('id');
  const username = searchParams.get('username') || 'tiktok';

  if (!videoId) {
    return NextResponse.json({ error: 'Missing video id' }, { status: 400 });
  }

  const cached = resolveCache.get(videoId);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json({
      success: true,
      play: cached.play,
      wmplay: cached.wmplay,
      music: cached.music,
      title: cached.title,
      needsProxy: cached.needsProxy,
      fromCache: true,
    });
  }

  const tiktokUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}/video/${encodeURIComponent(videoId)}`;

  const resolved =
    (await resolveFromTikwm(tiktokUrl)) ||
    (await resolveFromTikTokPage(tiktokUrl));

  if (resolved) {
    resolveCache.set(videoId, {
      ...resolved,
      expiresAt: Date.now() + 2 * 60 * 60 * 1000,
    });

    if (resolveCache.size > 2000) {
      const now = Date.now();
      for (const [key, val] of resolveCache.entries()) {
        if (val.expiresAt < now) resolveCache.delete(key);
      }
    }

    return NextResponse.json({
      success: true,
      play: resolved.play,
      wmplay: resolved.wmplay,
      music: resolved.music,
      title: resolved.title,
      needsProxy: resolved.needsProxy,
    });
  }

  return NextResponse.json({ success: false });
}
