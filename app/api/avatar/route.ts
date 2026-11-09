import { NextRequest, NextResponse } from 'next/server';

// In-memory cache for avatar image buffers and avatar URLs
const avatarCache = new Map<string, { buffer: ArrayBuffer; contentType: string; expiry: number }>();
const avatarUrlCache = new Map<string, { url: string; expiry: number }>();

function generateSvgAvatar(username: string): Response {
  const clean = username.replace(/^@/, '').trim() || 'TikTok';
  const initial = clean.charAt(0).toUpperCase();
  
  // Deterministic pleasant gradient colors based on username
  const colors = [
    ['#fe2858', '#ff6b8b'],
    ['#01ebe4', '#0099ff'],
    ['#8b5cf6', '#d946ef'],
    ['#f59e0b', '#ef4444'],
    ['#10b981', '#06b6d4'],
    ['#3b82f6', '#1d4ed8'],
  ];
  let hash = 0;
  for (let i = 0; i < clean.length; i++) hash = (hash << 5) - hash + clean.charCodeAt(i);
  const pair = colors[Math.abs(hash) % colors.length];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${pair[0]}"/>
      <stop offset="100%" stop-color="${pair[1]}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#g)"/>
  <text x="50%" y="54%" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="82" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${initial}</text>
</svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');

  if (!usernameParam) {
    return generateSvgAvatar('User');
  }

  const cleanUser = usernameParam.replace(/^@/, '').trim().toLowerCase();

  // Check buffer cache
  const cached = avatarCache.get(cleanUser);
  if (cached && Date.now() < cached.expiry) {
    return new Response(cached.buffer, {
      status: 200,
      headers: {
        'Content-Type': cached.contentType,
        'Cache-Control': 'public, max-age=43200, s-maxage=86400',
      },
    });
  }

  try {
    // 1. Get avatar URL
    let avatarUrl = '';
    const cachedUrl = avatarUrlCache.get(cleanUser);
    if (cachedUrl && Date.now() < cachedUrl.expiry) {
      avatarUrl = cachedUrl.url;
    } else {
      const profileRes = await fetch(`https://www.tiktok.com/@${encodeURIComponent(cleanUser)}`, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        cache: 'no-store',
      });

      if (profileRes.ok) {
        const html = await profileRes.text();
        const match = html.match(
          /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
        );
        if (match && match[1]) {
          const json = JSON.parse(match[1]);
          const u = json['__DEFAULT_SCOPE__']?.['webapp.user-detail']?.userInfo?.user;
          if (u) {
            avatarUrl = u.avatarMedium || u.avatarThumb || u.avatarLarger || '';
            if (avatarUrl) {
              avatarUrlCache.set(cleanUser, {
                url: avatarUrl,
                expiry: Date.now() + 1000 * 60 * 60 * 6, // 6 hours
              });
            }
          }
        }
      }
    }

    if (!avatarUrl) {
      return generateSvgAvatar(cleanUser);
    }

    // 2. Fetch avatar image bytes with TikTok referer
    const imgRes = await fetch(avatarUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://www.tiktok.com/',
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
      cache: 'force-cache',
    });

    if (!imgRes.ok) {
      return generateSvgAvatar(cleanUser);
    }

    const contentType = imgRes.headers.get('content-type') || 'image/jpeg';
    const buffer = await imgRes.arrayBuffer();

    // Cache the image buffer for 12 hours
    avatarCache.set(cleanUser, {
      buffer,
      contentType,
      expiry: Date.now() + 1000 * 60 * 60 * 12,
    });

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=43200, s-maxage=86400',
      },
    });
  } catch (err) {
    console.warn(`Failed to proxy avatar for ${cleanUser}:`, err);
    return generateSvgAvatar(cleanUser);
  }
}
