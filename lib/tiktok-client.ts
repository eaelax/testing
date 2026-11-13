/**
 * Zero-bandwidth client-side media and API controller.
 * Direct TikWM + CDN streaming and direct client-side downloads using 'no-referrer' handling,
 * with automatic serverless fallback only when browser direct requests are blocked.
 */

export interface TikTokClientVideo {
  video_id: string;
  id: string;
  title: string;
  duration: number;
  cover: string;
  origin_cover: string;
  play: string;
  wmplay: string;
  music: string;
  music_info: {
    id: string;
    title: string;
    author: string;
    play: string;
    cover: string;
  };
  play_count: number;
  digg_count: number;
  comment_count: number;
  share_count: number;
  download_count: number;
  create_time: number;
  author: {
    id: string;
    unique_id: string;
    nickname: string;
    avatar: string;
    signature: string;
    verified: boolean;
  };
}

export interface TikTokProfileApiResponse {
  code: number;
  msg: string;
  data?: {
    user: {
      id: string;
      unique_id: string;
      nickname: string;
      avatar: string;
      signature: string;
      verified: boolean;
      status: 'active' | 'private' | 'not_found';
    };
    stats: {
      followerCount: number | null;
      followingCount: number | null;
      heartCount: number | null;
      videoCount: number;
    };
    videos: TikTokClientVideo[];
    cursor: string | null;
    hasMore: boolean;
  };
}

export interface TikTokMoreVideosResponse {
  code: number;
  msg: string;
  data?: {
    videos: TikTokClientVideo[];
    cursor: string | null;
    hasMore: boolean;
  };
}

const clientProfileCache = new Map<
  string,
  { response: TikTokProfileApiResponse; expiresAt: number }
>();

const CLIENT_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

export function sanitizeUsername(rawInput: string): string {
  let cleaned = (rawInput || '').trim();
  const urlMatch = cleaned.match(/tiktok\.com\/@?([a-zA-Z0-9._]+)/);
  if (urlMatch && urlMatch[1]) {
    cleaned = urlMatch[1];
  }
  return cleaned.replace(/^@+/, '').trim().toLowerCase();
}

function normalizeCdnUrl(url?: string): string {
  if (!url) return '';
  let cleaned = String(url).replace(/\\u0026/g, '&').replace(/\\u002F/g, '/').trim();
  if (cleaned.startsWith('/')) {
    cleaned = `https://www.tikwm.com${cleaned}`;
  }
  return cleaned;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function parseTikwmVideoItem(item: any, fallbackUsername: string): TikTokClientVideo {
  const m = item.music_info || item.music || {};
  const a = item.author || {};

  const playUrl = normalizeCdnUrl(item.play || item.hdplay || '');
  const wmPlayUrl = normalizeCdnUrl(item.wmplay || playUrl);
  const musicUrl = normalizeCdnUrl(
    typeof item.music === 'string' ? item.music : m.play || ''
  );

  return {
    video_id: String(item.video_id || item.id || ''),
    id: String(item.video_id || item.id || ''),
    title: String(item.title || ''),
    duration: Number(item.duration || 0),
    cover: normalizeCdnUrl(item.cover || item.origin_cover || ''),
    origin_cover: normalizeCdnUrl(item.origin_cover || item.cover || ''),
    play: playUrl,
    wmplay: wmPlayUrl,
    music: musicUrl,
    music_info: {
      id: String(m.id || ''),
      title: String(m.title || m.album || 'Original Sound'),
      author: String(m.author || a.nickname || fallbackUsername),
      play: musicUrl,
      cover: normalizeCdnUrl(m.cover || ''),
    },
    play_count: Number(item.play_count || 0),
    digg_count: Number(item.digg_count || 0),
    comment_count: Number(item.comment_count || 0),
    share_count: Number(item.share_count || 0),
    download_count: Number(item.download_count || item.collect_count || 0),
    create_time: Number(item.create_time || 0),
    author: {
      id: String(a.id || fallbackUsername),
      unique_id: String(a.unique_id || fallbackUsername),
      nickname: String(a.nickname || a.unique_id || fallbackUsername),
      avatar: normalizeCdnUrl(a.avatar || ''),
      signature: String(a.signature || ''),
      verified: Boolean(a.verified),
    },
  };
}

async function fetchTikwmPostsClient(
  username: string,
  cursor: string = '0',
  count: number = 30
): Promise<{
  ok: boolean;
  videos: TikTokClientVideo[];
  cursor: string | null;
  hasMore: boolean;
}> {
  const url = `https://www.tikwm.com/api/user/posts?unique_id=${encodeURIComponent(
    username
  )}&count=${count}&cursor=${encodeURIComponent(cursor)}`;

  const attemptFetch = async () => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 9000);
    try {
      const res = await fetch(url, {
        method: 'GET',
        mode: 'cors',
        referrerPolicy: 'no-referrer',
        credentials: 'omit',
        headers: {
          Accept: 'application/json',
        },
        signal: controller.signal,
      });
      clearTimeout(timeoutId);
      if (!res.ok) return null;
      return await res.json();
    } catch {
      clearTimeout(timeoutId);
      return null;
    }
  };

  let data = await attemptFetch();

  // Retry once after 1.15s if visitor's own IP hit TikWM 1 req/sec rate limit
  if (
    data &&
    data.code === -1 &&
    typeof data.msg === 'string' &&
    data.msg.toLowerCase().includes('limit')
  ) {
    await new Promise((r) => setTimeout(r, 1150));
    data = await attemptFetch();
  }

  if (data && data.code === 0 && data.data) {
    const rawList = Array.isArray(data.data.videos) ? data.data.videos : [];
    return {
      ok: true,
      videos: rawList.map((item: unknown) => parseTikwmVideoItem(item, username)),
      cursor: data.data.cursor ? String(data.data.cursor) : null,
      hasMore: Boolean(data.data.hasMore && data.data.cursor),
    };
  }

  return { ok: false, videos: [], cursor: null, hasMore: false };
}

/**
 * Fetch profile data using client-first zero-bandwidth strategy:
 * 1) Fetches video feed directly from TikWM in the visitor's browser (0 server bandwidth, visitor's IP).
 * 2) In parallel, fetches lightweight TikTok HTML profile metadata from `/api/tiktok?mode=profile` (0 TikWM calls on server).
 * 3) Falls back to full `/api/tiktok` only if browser-side TikWM fails/is blocked.
 */
export async function fetchProfileDirect(username: string): Promise<TikTokProfileApiResponse> {
  const clean = sanitizeUsername(username);
  if (!clean) {
    throw new Error('Please enter a valid TikTok username.');
  }

  const cached = clientProfileCache.get(clean);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.response;
  }

  const [clientPosts, profileMetaRes] = await Promise.all([
    fetchTikwmPostsClient(clean, '0', 30),
    fetch(`/api/tiktok?username=${encodeURIComponent(clean)}&mode=profile`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    })
      .then((r) => r.json() as Promise<TikTokProfileApiResponse>)
      .catch(() => null),
  ]);

  const metaValid = Boolean(profileMetaRes && profileMetaRes.code === 0 && profileMetaRes.data);
  const metaUser = metaValid ? profileMetaRes!.data!.user : null;
  const metaStats = metaValid ? profileMetaRes!.data!.stats : null;
  const metaVideos = metaValid ? profileMetaRes!.data!.videos || [] : [];

  // If account is private, return immediately
  if (metaUser?.status === 'private') {
    const privateRes: TikTokProfileApiResponse = {
      code: 0,
      msg: 'User profile is private.',
      data: {
        user: metaUser,
        stats: metaStats!,
        videos: [],
        cursor: null,
        hasMore: false,
      },
    };
    return privateRes;
  }

  // Case 1: Client-side TikWM returned videos cleanly
  if (clientPosts.ok && clientPosts.videos.length > 0) {
    const firstAuthor = clientPosts.videos[0]?.author;
    const resolvedUser = metaUser || {
      id: firstAuthor?.id || clean,
      unique_id: firstAuthor?.unique_id || clean,
      nickname: firstAuthor?.nickname || clean,
      avatar: firstAuthor?.avatar || '',
      signature: '',
      verified: Boolean(firstAuthor?.verified),
      status: 'active' as const,
    };

    const resolvedStats = metaStats || {
      followerCount: null,
      followingCount: null,
      heartCount: clientPosts.videos.reduce((acc, v) => acc + (v.digg_count || 0), 0),
      videoCount: clientPosts.videos.length,
    };

    const result: TikTokProfileApiResponse = {
      code: 0,
      msg: 'success',
      data: {
        user: resolvedUser,
        stats: resolvedStats,
        videos: clientPosts.videos,
        cursor: clientPosts.cursor,
        hasMore: clientPosts.hasMore,
      },
    };

    clientProfileCache.set(clean, {
      response: result,
      expiresAt: Date.now() + CLIENT_CACHE_TTL_MS,
    });
    return result;
  }

  // Case 2: Profile HTML already had videos or confirms 0 videos
  if (metaValid && (metaVideos.length > 0 || (metaStats && metaStats.videoCount === 0))) {
    const result: TikTokProfileApiResponse = {
      code: 0,
      msg: 'success',
      data: {
        user: metaUser!,
        stats: metaStats!,
        videos: metaVideos,
        cursor: null,
        hasMore: false,
      },
    };
    if (metaVideos.length > 0) {
      clientProfileCache.set(clean, {
        response: result,
        expiresAt: Date.now() + CLIENT_CACHE_TTL_MS,
      });
    }
    return result;
  }

  // Case 3: Browser-side TikWM failed or was blocked (e.g., CORS/ISP/adblocker) -> fallback to server `/api/tiktok`
  const fallbackRes = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
    cache: 'no-store',
  });

  const json: TikTokProfileApiResponse = await fallbackRes.json();
  if (json && json.code === 0 && json.data && json.data.videos.length > 0) {
    clientProfileCache.set(clean, {
      response: json,
      expiresAt: Date.now() + CLIENT_CACHE_TTL_MS,
    });
  }
  return json;
}

/**
 * Fetches paginated videos ("SHOW MORE VIDEOS") directly from visitor's browser first,
 * falling back to `/api/tiktok` only if browser direct call fails.
 */
export async function fetchMoreVideosDirect(
  username: string,
  cursor: string,
  count: number = 15
): Promise<TikTokMoreVideosResponse> {
  const clean = sanitizeUsername(username);
  if (!clean || !cursor) {
    return { code: -1, msg: 'Missing username or cursor' };
  }

  const clientMore = await fetchTikwmPostsClient(clean, cursor, count);
  if (clientMore.ok && clientMore.videos.length > 0) {
    return {
      code: 0,
      msg: 'success',
      data: {
        videos: clientMore.videos,
        cursor: clientMore.cursor,
        hasMore: clientMore.hasMore,
      },
    };
  }

  // Server fallback
  const res = await fetch(
    `/api/tiktok?username=${encodeURIComponent(clean)}&cursor=${encodeURIComponent(
      cursor
    )}&count=${count}`,
    {
      method: 'GET',
      headers: { Accept: 'application/json' },
      cache: 'no-store',
    }
  );
  return (await res.json()) as TikTokMoreVideosResponse;
}

/**
 * Executes 100% direct client-side download from CDN without routing bytes through the server.
 * Uses no-referrer policies to avoid hotlink blocks and triggers native browser save.
 */
export async function executeDirectCdnDownload(cdnUrl: string, filename: string): Promise<void> {
  const normalizedUrl = normalizeCdnUrl(cdnUrl);
  if (!normalizedUrl) {
    throw new Error('Media URL is unavailable for download.');
  }

  // Attempt 1: In-browser direct fetch using 'no-referrer' to bypass CDN referrer verification
  try {
    const res = await fetch(normalizedUrl, {
      method: 'GET',
      mode: 'cors',
      referrerPolicy: 'no-referrer',
      credentials: 'omit',
    });

    if (res.ok) {
      const blob = await res.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const tempLink = document.createElement('a');
      tempLink.style.display = 'none';
      tempLink.href = objectUrl;
      tempLink.download = filename;
      tempLink.rel = 'noreferrer noopener';
      document.body.appendChild(tempLink);
      tempLink.click();

      setTimeout(() => {
        document.body.removeChild(tempLink);
        window.URL.revokeObjectURL(objectUrl);
      }, 1500);
      return;
    }
  } catch {
    // Fall back to direct link download if browser CORS prevents Blob instantiation
  }

  // Attempt 2: Direct anchor trigger with no-referrer
  const directLink = document.createElement('a');
  directLink.style.display = 'none';
  directLink.href = normalizedUrl;
  directLink.download = filename;
  directLink.target = '_blank';
  directLink.rel = 'noreferrer noopener';
  directLink.setAttribute('referrerpolicy', 'no-referrer');
  document.body.appendChild(directLink);
  directLink.click();

  setTimeout(() => {
    document.body.removeChild(directLink);
  }, 1000);
}

/**
 * Prepares direct HTML5 video playback without server proxying.
 */
export function configureDirectPlayback(
  videoElement: HTMLVideoElement,
  directCdnUrl: string
): void {
  if (!videoElement || !directCdnUrl) return;

  videoElement.setAttribute('referrerpolicy', 'no-referrer');
  videoElement.crossOrigin = 'anonymous';
  videoElement.src = normalizeCdnUrl(directCdnUrl);
  videoElement.preload = 'metadata';
}
