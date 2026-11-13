/**
 * Client-side media and API controller.
 * Uses /api/tiktok (TikTok public creator feed + SSR + embed) for fast profile & pagination loading,
 * direct browser TikWM calls for watermark-free video/MP3 streams (zero server bandwidth),
 * and /api/proxy fallback only when a CDN blocks direct browser playback or CORS downloads.
 */

export interface TikTokVideoItem {
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

export interface TikTokUserSummary {
  id: string;
  secUid?: string;
  unique_id: string;
  nickname: string;
  avatar: string;
  signature: string;
  verified: boolean;
  status: 'active' | 'private' | 'not_found';
}

export interface TikTokStatsSummary {
  followerCount: number | null;
  followingCount: number | null;
  heartCount: number | null;
  videoCount: number;
}

export interface TikTokProfileApiResponse {
  code: number;
  msg: string;
  data?: {
    user: TikTokUserSummary;
    stats: TikTokStatsSummary;
    videos: TikTokVideoItem[];
    cursor: string | null;
    hasMore: boolean;
  };
}

interface RawObj {
  [key: string]: unknown;
}

const profileCache = new Map<string, { data: TikTokProfileApiResponse; expiresAt: number }>();

function asObj(val: unknown): RawObj {
  return val && typeof val === 'object' ? (val as RawObj) : {};
}

function asStr(val: unknown, fallback = ''): string {
  if (typeof val === 'string') return val;
  if (typeof val === 'number') return String(val);
  return fallback;
}

function asNum(val: unknown, fallback = 0): number {
  if (typeof val === 'number' && !Number.isNaN(val)) return val;
  if (typeof val === 'string') {
    const parsed = Number(val);
    if (!Number.isNaN(parsed)) return parsed;
  }
  return fallback;
}

export function normalizeMediaUrl(url?: string, base = 'https://www.tikwm.com'): string {
  if (!url) return '';
  let cleaned = url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/').trim();
  if (!cleaned) return '';
  if (cleaned.startsWith('//')) {
    cleaned = `https:${cleaned}`;
  } else if (cleaned.startsWith('/')) {
    cleaned = `${base}${cleaned}`;
  } else if (cleaned.startsWith('http://')) {
    cleaned = cleaned.replace(/^http:\/\//i, 'https://');
  }
  return cleaned;
}

export function sanitizeUsername(rawInput: string): string {
  let cleaned = (rawInput || '').trim();
  const urlMatch = cleaned.match(/tiktok\.com\/@?([a-zA-Z0-9._]+)/);
  if (urlMatch && urlMatch[1]) {
    cleaned = urlMatch[1];
  }
  return cleaned.replace(/^@+/, '').trim().toLowerCase();
}

function mapTikwmVideo(raw: RawObj, fallbackUsername: string): TikTokVideoItem {
  const authorObj = asObj(raw.author);
  const musicObj = asObj(raw.music_info);

  const uniqueId = asStr(authorObj.unique_id, fallbackUsername) || fallbackUsername;
  const nickname = asStr(authorObj.nickname, uniqueId) || uniqueId;
  const avatar = normalizeMediaUrl(asStr(authorObj.avatar));

  const playUrl = normalizeMediaUrl(asStr(raw.hdplay) || asStr(raw.play) || asStr(raw.wmplay));
  const wmPlayUrl = normalizeMediaUrl(asStr(raw.wmplay) || playUrl);
  const musicPlayUrl = normalizeMediaUrl(asStr(musicObj.play) || asStr(raw.music));
  const coverUrl = normalizeMediaUrl(asStr(raw.cover) || asStr(raw.origin_cover));
  const originCoverUrl = normalizeMediaUrl(asStr(raw.origin_cover) || coverUrl);

  const videoId = asStr(raw.video_id) || asStr(raw.id);

  return {
    video_id: videoId,
    id: videoId,
    title: asStr(raw.title),
    duration: asNum(raw.duration),
    cover: coverUrl,
    origin_cover: originCoverUrl,
    play: playUrl,
    wmplay: wmPlayUrl,
    music: musicPlayUrl,
    music_info: {
      id: asStr(musicObj.id),
      title: asStr(musicObj.title, 'Original Sound'),
      author: asStr(musicObj.author, nickname),
      play: musicPlayUrl,
      cover: normalizeMediaUrl(asStr(musicObj.cover)),
    },
    play_count: asNum(raw.play_count),
    digg_count: asNum(raw.digg_count),
    comment_count: asNum(raw.comment_count),
    share_count: asNum(raw.share_count),
    download_count: asNum(raw.download_count || raw.collect_count),
    create_time: asNum(raw.create_time),
    author: {
      id: asStr(authorObj.id, uniqueId),
      unique_id: uniqueId,
      nickname,
      avatar,
      signature: '',
      verified: Boolean(authorObj.verified),
    },
  };
}

async function fetchSimplePostJson(
  url: string,
  params: Record<string, string>,
  timeoutMs = 5000
): Promise<RawObj | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams(params).toString(),
      referrerPolicy: 'no-referrer',
      signal: controller.signal,
    });

    clearTimeout(timer);
    if (!res.ok) return null;

    const text = await res.text();
    if (!text || !text.trim().startsWith('{')) return null;
    return JSON.parse(text) as RawObj;
  } catch {
    return null;
  }
}

/**
 * Fetches profile metadata + initial video feed quickly via /api/tiktok,
 * with a fast single-attempt browser TikWM fallback if server feed returns 0 videos.
 */
export async function fetchProfileDirect(username: string): Promise<TikTokProfileApiResponse> {
  const clean = sanitizeUsername(username);
  if (!clean) {
    throw new Error('Please enter a valid TikTok username.');
  }

  const cached = profileCache.get(clean);
  if (cached && cached.expiresAt > Date.now()) {
    return cached.data;
  }

  const serverRes = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`, {
    method: 'GET',
    headers: { Accept: 'application/json' },
  });

  const serverJson = (await serverRes.json()) as TikTokProfileApiResponse;

  // If server returned videos (or account is private), return immediately
  if (
    serverJson.code === 0 &&
    serverJson.data &&
    (serverJson.data.videos.length > 0 || serverJson.data.user.status === 'private')
  ) {
    if (serverJson.data.videos.length > 0) {
      profileCache.set(clean, { data: serverJson, expiresAt: Date.now() + 120_000 });
    }
    return serverJson;
  }

  // Fast single browser-side TikWM fallback (uses visitor's residential IP, 5s max timeout)
  const tikwmJson = await fetchSimplePostJson(
    'https://www.tikwm.com/api/user/posts',
    { unique_id: clean, count: '30', cursor: '0' },
    5000
  );

  if (tikwmJson && tikwmJson.code === 0 && tikwmJson.data) {
    const payload = asObj(tikwmJson.data);
    const rawVideos = Array.isArray(payload.videos) ? payload.videos : [];
    if (rawVideos.length > 0) {
      const mappedVideos = rawVideos.map((v) => mapTikwmVideo(asObj(v), clean));
      const existingUser = serverJson.data?.user;
      const firstAuthor = mappedVideos[0].author;

      const combined: TikTokProfileApiResponse = {
        code: 0,
        msg: 'success',
        data: {
          user: existingUser || {
            id: firstAuthor.id || clean,
            unique_id: firstAuthor.unique_id || clean,
            nickname: firstAuthor.nickname || clean,
            avatar: firstAuthor.avatar || '',
            signature: '',
            verified: firstAuthor.verified,
            status: 'active',
          },
          stats: serverJson.data?.stats || {
            followerCount: null,
            followingCount: null,
            heartCount: null,
            videoCount: mappedVideos.length,
          },
          videos: mappedVideos,
          cursor: payload.cursor ? asStr(payload.cursor) : null,
          hasMore: Boolean(payload.hasMore && payload.cursor),
        },
      };

      profileCache.set(clean, { data: combined, expiresAt: Date.now() + 120_000 });
      return combined;
    }
  }

  return serverJson;
}

/**
 * Paginates more videos cleanly using secUid + cursor via /api/tiktok.
 */
export async function fetchMoreVideosDirect(
  username: string,
  cursor: string,
  count = 15,
  secUid = ''
): Promise<{ videos: TikTokVideoItem[]; cursor: string | null; hasMore: boolean }> {
  const clean = sanitizeUsername(username);
  if (!clean || !cursor) {
    return { videos: [], cursor: null, hasMore: false };
  }

  try {
    const params = new URLSearchParams({
      username: clean,
      cursor,
      count: String(count),
    });
    if (secUid) {
      params.set('secUid', secUid);
    }

    const res = await fetch(`/api/tiktok?${params.toString()}`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      const data = (await res.json()) as TikTokProfileApiResponse;
      if (data && data.code === 0 && data.data) {
        return {
          videos: data.data.videos || [],
          cursor: data.data.cursor || null,
          hasMore: Boolean(data.data.hasMore && data.data.cursor),
        };
      }
    }
  } catch {
    // Fall through
  }

  return { videos: [], cursor: null, hasMore: false };
}

/**
 * Resolves a fresh watermark-free stream URL and MP3 audio URL directly in the browser first,
 * falling back immediately to /api/resolve.
 */
export async function resolveVideoStreamDirect(
  videoId: string,
  username: string
): Promise<{ play: string; wmplay: string; music: string; cover: string; needsProxy?: boolean } | null> {
  if (!videoId) return null;
  const clean = sanitizeUsername(username) || 'tiktok';
  const tiktokVideoUrl = `https://www.tiktok.com/@${clean}/video/${videoId}`;

  // 1. Try direct browser POST to TikWM (0 server bandwidth, unwatermarked HD MP4 + MP3)
  const tikwmJson = await fetchSimplePostJson(
    'https://www.tikwm.com/api/',
    { url: tiktokVideoUrl, hd: '1' },
    4500
  );

  if (tikwmJson && tikwmJson.code === 0 && tikwmJson.data) {
    const d = asObj(tikwmJson.data);
    const musicObj = asObj(d.music_info);
    const play = normalizeMediaUrl(asStr(d.hdplay) || asStr(d.play) || asStr(d.wmplay));
    if (play) {
      return {
        play,
        wmplay: normalizeMediaUrl(asStr(d.wmplay) || play),
        music: normalizeMediaUrl(asStr(musicObj.play) || asStr(d.music)),
        cover: normalizeMediaUrl(asStr(d.cover) || asStr(d.origin_cover)),
        needsProxy: false,
      };
    }
  }

  // 2. Fallback to server /api/resolve (TikWM + TikTok SSR video detail)
  try {
    const res = await fetch(
      `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(clean)}`
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.success && data.play) {
        return {
          play: normalizeMediaUrl(data.play),
          wmplay: normalizeMediaUrl(data.wmplay),
          music: normalizeMediaUrl(data.music),
          cover: '',
          needsProxy: Boolean(data.needsProxy),
        };
      }
    }
  } catch {
    // Ignore
  }

  return null;
}

function triggerBlobSave(blob: Blob, filename: string): void {
  const objectUrl = window.URL.createObjectURL(blob);
  const tempLink = document.createElement('a');
  tempLink.style.display = 'none';
  tempLink.href = objectUrl;
  tempLink.download = filename;
  tempLink.rel = 'noreferrer noopener';
  document.body.appendChild(tempLink);
  tempLink.click();

  setTimeout(() => {
    if (tempLink.parentNode) {
      tempLink.parentNode.removeChild(tempLink);
    }
    window.URL.revokeObjectURL(objectUrl);
  }, 2000);
}

/**
 * Executes direct client-side Blob download from CDN (zero server bandwidth).
 * Falls back to /api/proxy ONLY when CDN blocks browser CORS.
 */
export async function executeDirectCdnDownload(cdnUrl: string, filename: string): Promise<void> {
  const normalizedUrl = normalizeMediaUrl(cdnUrl);
  if (!normalizedUrl) {
    throw new Error('Media URL is unavailable for download.');
  }

  const corsFriendlyUrl = normalizedUrl.includes('p16-va-default.akamaized.net')
    ? normalizedUrl.replace('p16-va-default.akamaized.net', 'p16.tiktokcdn.com')
    : normalizedUrl;

  // Attempt 1: Zero-bandwidth direct browser CORS fetch -> local Blob save
  try {
    const res = await fetch(corsFriendlyUrl, {
      method: 'GET',
      mode: 'cors',
      referrerPolicy: 'no-referrer',
      credentials: 'omit',
    });

    if (res.ok) {
      const blob = await res.blob();
      if (blob.size > 0) {
        triggerBlobSave(blob, filename);
        return;
      }
    }
  } catch {
    // Fall back to proxy if CDN blocks CORS
  }

  // Attempt 2: Proxy download fallback (guarantees file saves instead of opening a blocked tab)
  const proxyDownloadUrl = `/api/proxy?url=${encodeURIComponent(
    normalizedUrl
  )}&filename=${encodeURIComponent(filename)}&download=1`;

  try {
    const proxyRes = await fetch(proxyDownloadUrl);
    if (proxyRes.ok) {
      const blob = await proxyRes.blob();
      if (blob.size > 0) {
        triggerBlobSave(blob, filename);
        return;
      }
    }
  } catch {
    // Fall through to direct browser download link
  }

  const directLink = document.createElement('a');
  directLink.style.display = 'none';
  directLink.href = proxyDownloadUrl;
  directLink.download = filename;
  document.body.appendChild(directLink);
  directLink.click();

  setTimeout(() => {
    if (directLink.parentNode) {
      directLink.parentNode.removeChild(directLink);
    }
  }, 1500);
}

/**
 * Prepares direct HTML5 video playback without server proxying.
 * Does NOT set crossOrigin="anonymous" so non-CORS CDN streams play cleanly.
 */
export function configureDirectPlayback(
  videoElement: HTMLVideoElement,
  directCdnUrl: string
): void {
  if (!videoElement || !directCdnUrl) return;

  videoElement.setAttribute('referrerpolicy', 'no-referrer');
  videoElement.removeAttribute('crossorigin');
  videoElement.src = normalizeMediaUrl(directCdnUrl);
  videoElement.preload = 'metadata';
}
