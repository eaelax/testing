/**
 * Zero-bandwidth client-side media and API controller.
 * Fetches video feeds directly from the user's browser using CORS-simple requests
 * (no preflight headers) + public CORS proxy fallbacks + server fallbacks.
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

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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

/**
 * Simple CORS GET without custom headers or cache: 'no-store' (avoids OPTIONS preflight).
 */
async function fetchSimpleGetJson(url: string, timeoutMs = 7000): Promise<RawObj | null> {
  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    const res = await fetch(url, {
      method: 'GET',
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
 * Simple CORS POST with application/x-www-form-urlencoded (avoids OPTIONS preflight).
 */
async function fetchSimplePostJson(
  url: string,
  params: Record<string, string>,
  timeoutMs = 7000
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
 * Fetches a TikWM GET URL directly first, then falls back through public CORS proxies
 * (each using a separate exit IP to bypass CORS restrictions and per-IP rate limits).
 */
async function fetchTikwmWithCorsFallback(
  endpointUrl: string,
  postParams?: Record<string, string>
): Promise<RawObj | null> {
  // 1. Direct POST (CORS simple request)
  if (postParams) {
    const directPost = await fetchSimplePostJson(endpointUrl.split('?')[0], postParams, 6500);
    if (directPost && directPost.code === 0 && directPost.data) {
      return directPost;
    }
  }

  // 2. Direct GET (CORS simple request)
  const directGet = await fetchSimpleGetJson(endpointUrl, 6500);
  if (directGet && directGet.code === 0 && directGet.data) {
    return directGet;
  }

  // 3. Public CORS proxy fallbacks (different exit IPs bypass 1 req/10s rate limits & firewall blocks)
  const proxyUrls = [
    `https://corsproxy.io/?url=${encodeURIComponent(endpointUrl)}`,
    `https://api.allorigins.win/raw?url=${encodeURIComponent(endpointUrl)}`,
    `https://api.codetabs.com/v1/proxy?quest=${encodeURIComponent(endpointUrl)}`,
  ];

  for (const proxyUrl of proxyUrls) {
    const proxied = await fetchSimpleGetJson(proxyUrl, 7500);
    if (proxied && proxied.code === 0 && proxied.data) {
      return proxied;
    }
  }

  return null;
}

function parsePostsPayload(
  json: RawObj | null,
  username: string
): {
  videos: TikTokVideoItem[];
  cursor: string | null;
  hasMore: boolean;
  userFromPosts: TikTokUserSummary | null;
} | null {
  if (!json || json.code !== 0 || !json.data) {
    return null;
  }

  const data = asObj(json.data);
  const rawVideos = Array.isArray(data.videos) ? data.videos : [];
  if (rawVideos.length === 0) {
    return null;
  }

  const videos = rawVideos.map((item) => mapTikwmVideo(asObj(item), username));
  const nextCursor = data.cursor ? asStr(data.cursor) : null;
  const hasMore = Boolean(data.hasMore && nextCursor);

  let userFromPosts: TikTokUserSummary | null = null;
  if (videos[0]?.author) {
    const a = videos[0].author;
    userFromPosts = {
      id: a.id || username,
      unique_id: a.unique_id || username,
      nickname: a.nickname || username,
      avatar: a.avatar || '',
      signature: '',
      verified: a.verified,
      status: 'active',
    };
  }

  return {
    videos,
    cursor: nextCursor,
    hasMore,
    userFromPosts,
  };
}

export async function fetchTikwmPostsClient(
  username: string,
  cursor = '0',
  count = 30,
  userId?: string
): Promise<{
  videos: TikTokVideoItem[];
  cursor: string | null;
  hasMore: boolean;
  userFromPosts: TikTokUserSummary | null;
} | null> {
  const queryParams: Record<string, string> = {
    unique_id: username,
    count: String(count),
    cursor: String(cursor),
  };

  const getUrl = `https://www.tikwm.com/api/user/posts?${new URLSearchParams(queryParams).toString()}`;
  const json = await fetchTikwmWithCorsFallback(getUrl, queryParams);
  const parsed = parsePostsPayload(json, username);
  if (parsed) return parsed;

  // Retry with numeric user_id if available
  if (userId && /^\d+$/.test(userId)) {
    const idParams: Record<string, string> = {
      user_id: userId,
      count: String(count),
      cursor: String(cursor),
    };
    const idGetUrl = `https://www.tikwm.com/api/user/posts?${new URLSearchParams(idParams).toString()}`;
    const idJson = await fetchTikwmWithCorsFallback(idGetUrl, idParams);
    const idParsed = parsePostsPayload(idJson, username);
    if (idParsed) return idParsed;
  }

  return null;
}

/**
 * Fallback via TikWM feed search filtered strictly to the target creator's username
 * (useful if /api/user/posts is temporarily rate-limited).
 */
async function fetchTikwmCreatorSearchFallback(
  username: string
): Promise<{
  videos: TikTokVideoItem[];
  cursor: string | null;
  hasMore: boolean;
  userFromPosts: TikTokUserSummary | null;
} | null> {
  const searchParams: Record<string, string> = {
    keywords: username,
    count: '35',
    cursor: '0',
    HD: '1',
  };
  const searchUrl = `https://www.tikwm.com/api/feed/search?${new URLSearchParams(searchParams).toString()}`;
  const json = await fetchTikwmWithCorsFallback(searchUrl, searchParams);
  if (!json || json.code !== 0 || !json.data) return null;

  const data = asObj(json.data);
  const rawVideos = Array.isArray(data.videos) ? data.videos : [];
  const mapped = rawVideos
    .map((item) => mapTikwmVideo(asObj(item), username))
    .filter((v) => v.author.unique_id.toLowerCase() === username.toLowerCase());

  if (mapped.length === 0) return null;

  const a = mapped[0].author;
  return {
    videos: mapped,
    cursor: null,
    hasMore: false,
    userFromPosts: {
      id: a.id || username,
      unique_id: a.unique_id || username,
      nickname: a.nickname || username,
      avatar: a.avatar || '',
      signature: '',
      verified: a.verified,
      status: 'active',
    },
  };
}

async function fetchTikwmUserInfoClient(
  username: string
): Promise<{ user: TikTokUserSummary; stats: TikTokStatsSummary } | null> {
  const url = `https://www.tikwm.com/api/user/info?unique_id=${encodeURIComponent(username)}`;
  const json = await fetchTikwmWithCorsFallback(url);
  if (!json || json.code !== 0 || !json.data) {
    return null;
  }

  const data = asObj(json.data);
  const u = asObj(data.user || data);
  const s = asObj(data.stats);

  const uniqueId = asStr(u.unique_id || u.uniqueId, username);
  const user: TikTokUserSummary = {
    id: asStr(u.id, uniqueId),
    unique_id: uniqueId,
    nickname: asStr(u.nickname, uniqueId),
    avatar: normalizeMediaUrl(asStr(u.avatarLarger || u.avatarMedium || u.avatar)),
    signature: asStr(u.signature),
    verified: Boolean(u.verified),
    status: Boolean(u.secret || u.privateAccount) ? 'private' : 'active',
  };

  const stats: TikTokStatsSummary = {
    followerCount:
      s.followerCount !== undefined ? asNum(s.followerCount) : u.follower_count !== undefined ? asNum(u.follower_count) : null,
    followingCount:
      s.followingCount !== undefined ? asNum(s.followingCount) : u.following_count !== undefined ? asNum(u.following_count) : null,
    heartCount:
      s.heartCount !== undefined ? asNum(s.heartCount) : u.total_favorited !== undefined ? asNum(u.total_favorited) : null,
    videoCount: asNum(s.videoCount || u.aweme_count),
  };

  return { user, stats };
}

/**
 * Fetch profile info + videos using direct browser calls + CORS proxy fallbacks + server fallback.
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

  // Run server-side SSR profile info scrape AND direct browser TikWM posts call in parallel
  const [serverInfoRes, initialClientPosts] = await Promise.all([
    fetch(`/api/tiktok?username=${encodeURIComponent(clean)}&infoOnly=1`, {
      method: 'GET',
      headers: { Accept: 'application/json' },
    })
      .then((r) => r.json() as Promise<TikTokProfileApiResponse>)
      .catch(() => null),
    fetchTikwmPostsClient(clean, '0', 30),
  ]);

  let resolvedUser = serverInfoRes?.data?.user || initialClientPosts?.userFromPosts || null;
  let resolvedStats = serverInfoRes?.data?.stats || null;
  let postsResult = initialClientPosts;

  // If account is private, return immediately without trying video fallbacks
  if (resolvedUser?.status === 'private') {
    return {
      code: 0,
      msg: 'User profile is private.',
      data: {
        user: resolvedUser,
        stats: resolvedStats || {
          followerCount: null,
          followingCount: null,
          heartCount: null,
          videoCount: 0,
        },
        videos: [],
        cursor: null,
        hasMore: false,
      },
    };
  }

  // Retry using numeric user_id from SSR metadata if initial unique_id lookup returned nothing
  if ((!postsResult || postsResult.videos.length === 0) && resolvedUser?.id && /^\d+$/.test(resolvedUser.id)) {
    postsResult = await fetchTikwmPostsClient(clean, '0', 30, resolvedUser.id);
  }

  // Fallback 1: Server-side /api/tiktok full fetch
  if (!postsResult || postsResult.videos.length === 0) {
    try {
      const fallbackRes = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`, {
        method: 'GET',
        headers: { Accept: 'application/json' },
      });
      if (fallbackRes.ok) {
        const fallbackJson = (await fallbackRes.json()) as TikTokProfileApiResponse;
        if (fallbackJson.code === 0 && fallbackJson.data && fallbackJson.data.videos.length > 0) {
          profileCache.set(clean, { data: fallbackJson, expiresAt: Date.now() + 120_000 });
          return fallbackJson;
        }
        if (!resolvedUser && fallbackJson.data?.user) {
          resolvedUser = fallbackJson.data.user;
        }
        if (!resolvedStats && fallbackJson.data?.stats) {
          resolvedStats = fallbackJson.data.stats;
        }
      }
    } catch {
      // Continue to feed search fallback
    }
  }

  // Fallback 2: Creator feed search fallback if /api/user/posts is unavailable
  if (!postsResult || postsResult.videos.length === 0) {
    postsResult = await fetchTikwmCreatorSearchFallback(clean);
  }

  // Fetch user info from TikWM only if SSR metadata didn't provide it
  if ((!resolvedUser || !resolvedStats || resolvedStats.followerCount === null) && postsResult) {
    await sleep(300);
    const tikwmInfo = await fetchTikwmUserInfoClient(clean);
    if (tikwmInfo) {
      resolvedUser = {
        ...tikwmInfo.user,
        avatar: resolvedUser?.avatar || tikwmInfo.user.avatar,
        signature: resolvedUser?.signature || tikwmInfo.user.signature,
      };
      resolvedStats = tikwmInfo.stats;
    }
  }

  if (!resolvedUser && postsResult?.userFromPosts) {
    resolvedUser = postsResult.userFromPosts;
  }

  if (!resolvedUser) {
    return {
      code: -1,
      msg: `TikTok profile @${clean} could not be resolved or does not exist.`,
    };
  }

  const finalVideos = postsResult?.videos || [];
  const finalStats: TikTokStatsSummary = resolvedStats || {
    followerCount: null,
    followingCount: null,
    heartCount: null,
    videoCount: finalVideos.length,
  };

  const response: TikTokProfileApiResponse = {
    code: 0,
    msg: 'success',
    data: {
      user: resolvedUser,
      stats: finalStats,
      videos: finalVideos,
      cursor: postsResult?.cursor || null,
      hasMore: Boolean(postsResult?.hasMore && postsResult?.cursor),
    },
  };

  if (finalVideos.length > 0) {
    profileCache.set(clean, { data: response, expiresAt: Date.now() + 120_000 });
  }

  return response;
}

/**
 * Paginates more videos directly from the browser first, falling back to /api/tiktok.
 */
export async function fetchMoreVideosDirect(
  username: string,
  cursor: string,
  count = 15
): Promise<{ videos: TikTokVideoItem[]; cursor: string | null; hasMore: boolean }> {
  const clean = sanitizeUsername(username);
  if (!clean || !cursor) {
    return { videos: [], cursor: null, hasMore: false };
  }

  const clientBatch = await fetchTikwmPostsClient(clean, cursor, count);
  if (clientBatch && clientBatch.videos.length > 0) {
    return {
      videos: clientBatch.videos,
      cursor: clientBatch.cursor,
      hasMore: clientBatch.hasMore,
    };
  }

  try {
    const res = await fetch(
      `/api/tiktok?username=${encodeURIComponent(clean)}&cursor=${encodeURIComponent(cursor)}&count=${count}`,
      {
        method: 'GET',
        headers: { Accept: 'application/json' },
      }
    );
    const data = (await res.json()) as TikTokProfileApiResponse;
    if (data && data.code === 0 && data.data) {
      return {
        videos: data.data.videos || [],
        cursor: data.data.cursor || null,
        hasMore: Boolean(data.data.hasMore && data.data.cursor),
      };
    }
  } catch {
    // Fall through
  }

  return { videos: [], cursor: null, hasMore: false };
}

/**
 * Resolves a fresh watermark-free stream URL and MP3 audio URL directly in the browser,
 * with CORS proxy + /api/resolve fallbacks.
 */
export async function resolveVideoStreamDirect(
  videoId: string,
  username: string
): Promise<{ play: string; wmplay: string; music: string; cover: string } | null> {
  if (!videoId) return null;
  const clean = sanitizeUsername(username) || 'tiktok';
  const tiktokVideoUrl = `https://www.tiktok.com/@${clean}/video/${videoId}`;
  const getUrl = `https://www.tikwm.com/api/?url=${encodeURIComponent(tiktokVideoUrl)}&hd=1`;

  const json = await fetchTikwmWithCorsFallback(getUrl, { url: tiktokVideoUrl, hd: '1' });
  if (json && json.code === 0 && json.data) {
    const d = asObj(json.data);
    const musicObj = asObj(d.music_info);
    return {
      play: normalizeMediaUrl(asStr(d.hdplay) || asStr(d.play) || asStr(d.wmplay)),
      wmplay: normalizeMediaUrl(asStr(d.wmplay) || asStr(d.play)),
      music: normalizeMediaUrl(asStr(musicObj.play) || asStr(d.music)),
      cover: normalizeMediaUrl(asStr(d.cover) || asStr(d.origin_cover)),
    };
  }

  try {
    const res = await fetch(
      `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(clean)}`
    );
    if (res.ok) {
      const data = await res.json();
      if (data?.success) {
        return {
          play: normalizeMediaUrl(data.play),
          wmplay: normalizeMediaUrl(data.wmplay),
          music: normalizeMediaUrl(data.music),
          cover: '',
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
