import { NextRequest, NextResponse } from 'next/server';

interface CacheEntry {
  play: string;
  wmplay?: string;
  music: string;
  title: string;
  expiresAt: number;
}

// In-memory cache to prevent duplicate requests and eliminate latency (2-hour TTL)
const resolveCache = new Map<string, CacheEntry>();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('id');
  const username = searchParams.get('username') || 'tiktok';

  if (!videoId) {
    return NextResponse.json({ error: 'Missing video id' }, { status: 400 });
  }

  // Check cache first for 0ms instant response
  const cached = resolveCache.get(videoId);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json({
      success: true,
      play: cached.play,
      wmplay: cached.wmplay,
      music: cached.music,
      title: cached.title,
      fromCache: true,
    });
  }

  const tiktokUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}/video/${videoId}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const tikwmRes = await fetch(
      `https://www.tikwm.com/api/?url=${encodeURIComponent(tiktokUrl)}`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          Accept: 'application/json, text/plain, */*',
        },
        cache: 'no-store',
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (tikwmRes.ok) {
      const data = await tikwmRes.json();
      if (data && data.code === 0 && data.data) {
        const play = data.data.play || data.data.wmplay || '';
        const wmplay = data.data.wmplay || '';
        const music = data.data.music_info?.play || data.data.music || '';
        const title = data.data.title || '';

        // Cache for 2 hours (TikTok CDN tokens typically last 3-6 hours)
        resolveCache.set(videoId, {
          play,
          wmplay,
          music,
          title,
          expiresAt: Date.now() + 2 * 60 * 60 * 1000,
        });

        // Clean up cache if it gets too large
        if (resolveCache.size > 2000) {
          const now = Date.now();
          for (const [key, val] of resolveCache.entries()) {
            if (val.expiresAt < now) resolveCache.delete(key);
          }
        }

        return NextResponse.json({
          success: true,
          play,
          wmplay,
          music,
          title,
        });
      }
    }
  } catch (err) {
    console.warn('TikWM resolution fallback:', err);
  }

  return NextResponse.json({ success: false });
}
