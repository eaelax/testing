import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';
import {
  getUserSessionCookies,
  mergeCookieStrings,
  setUserSessionCookies,
} from '@/lib/tiktok-session';

interface TikTokUser {
  id: string;
  uniqueId: string;
  nickname: string;
  avatar: string;
  signature: string;
  verified: boolean;
  secUid: string;
  status: 'active' | 'private' | 'not_found';
}

interface TikTokStats {
  followerCount: number | null;
  followingCount: number | null;
  heartCount: number | null;
  videoCount: number;
}

interface VideoOutput {
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type RawItem = Record<string, any>;

interface ProfileCacheEntry {
  payload: {
    user: TikTokUser;
    stats: TikTokStats;
    videos: VideoOutput[];
    cursor: string | null;
    hasMore: boolean;
  };
  expiresAt: number;
}

const profileResponseCache = new Map<string, ProfileCacheEntry>();
const secUidCache = new Map<string, { secUid: string; user: TikTokUser; expiresAt: number }>();

const PROFILE_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const SECUID_CACHE_TTL_MS = 30 * 60 * 1000; // 30 minutes
const MIN_TIKTOK_CURSOR_MS = 1472706000000; // Sept 1, 2016

const DESKTOP_BROWSER_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="128", "Not;A=Brand";v="24", "Google Chrome";v="128"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1',
  'Cache-Control': 'max-age=0',
};

const API_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  Accept: 'application/json, text/plain, */*',
  'Accept-Language': 'en-US,en;q=0.9',
};

function generateDeviceId(): string {
  const prefix = 250 + Math.floor(Math.random() * 75);
  let suffix = '';
  for (let i = 0; i < 15; i++) {
    suffix += Math.floor(Math.random() * 10).toString();
  }
  return `7${prefix}${suffix}`;
}

function generateVerifyFp(): string {
  const hex = '0123456789abcdef';
  let out = 'verify_';
  for (let i = 0; i < 7; i++) {
    out += hex[Math.floor(Math.random() * hex.length)];
  }
  return out;
}

function extractSetCookies(headers: Headers): string[] {
  const headersWithGetSetCookie = headers as Headers & { getSetCookie?: () => string[] };
  if (typeof headersWithGetSetCookie.getSetCookie === 'function') {
    return headersWithGetSetCookie.getSetCookie();
  }
  const combined = headers.get('set-cookie');
  if (!combined) return [];
  return combined.split(/,(?=[^;]+?=)/g);
}

function extractAttrById(html: string, id: string, attr: string): string | null {
  const pattern1 = new RegExp(`<[^>]+id=["']${id}["'][^>]*${attr}=["']([^"']+)["']`, 'i');
  const pattern2 = new RegExp(`<[^>]+${attr}=["']([^"']+)["'][^>]*id=["']${id}["']`, 'i');
  const m = html.match(pattern1) || html.match(pattern2);
  return m && m[1] ? m[1] : null;
}

function solveTikTokWafChallenge(html: string): string[] {
  try {
    const csClass = extractAttrById(html, 'cs', 'class');
    const wciClass = extractAttrById(html, 'wci', 'class');
    if (!csClass || !wciClass) return [];

    const challengeJson = Buffer.from(`${csClass}===`, 'base64').toString('utf8');
    const challengeData = JSON.parse(challengeJson) as {
      v?: { a?: string; c?: string };
      d?: string;
    };

    if (!challengeData?.v?.a || !challengeData?.v?.c) return [];

    const expectedDigest = Buffer.from(challengeData.v.c, 'base64');
    const baseBytes = Buffer.from(challengeData.v.a, 'base64');
    const baseHash = crypto.createHash('sha256').update(baseBytes).digest();

    let solvedNonce = -1;
    for (let i = 0; i <= 1_000_000; i++) {
      const attempt = crypto
        .createHash('sha256')
        .update(baseHash)
        .update(String(i))
        .digest();
      if (attempt.equals(expectedDigest)) {
        solvedNonce = i;
        break;
      }
    }

    if (solvedNonce === -1) return [];

    challengeData.d = Buffer.from(String(solvedNonce), 'utf8').toString('base64');
    const wciValue = Buffer.from(JSON.stringify(challengeData), 'utf8').toString('base64');
    const cookies: string[] = [`${wciClass}=${wciValue}`];

    const rciClass = extractAttrById(html, 'rci', 'class');
    const rsClass = extractAttrById(html, 'rs', 'class');
    if (rciClass && rsClass) {
      cookies.push(`${rciClass}=${rsClass}`);
    }

    return cookies;
  } catch {
    return [];
  }
}

function normalizeDirectCdnUrl(url?: unknown): string {
  if (typeof url !== 'string' || !url) return '';
  return url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/');
}

function extractUrlField(val: unknown): string {
  if (!val) return '';
  if (typeof val === 'string') return normalizeDirectCdnUrl(val);
  if (Array.isArray(val)) {
    for (const entry of val) {
      if (typeof entry === 'string' && entry) return normalizeDirectCdnUrl(entry);
      if (entry && typeof entry === 'object') {
        const obj = entry as RawItem;
        const candidate = obj.src || obj.url || obj.UrlList?.[0] || obj.urlList?.[0];
        if (typeof candidate === 'string' && candidate) return normalizeDirectCdnUrl(candidate);
      }
    }
    return '';
  }
  if (typeof val === 'object') {
    const obj = val as RawItem;
    const candidate =
      obj.UrlList?.[0] || obj.urlList?.[0] || obj.src || obj.url || '';
    return normalizeDirectCdnUrl(candidate);
  }
  return '';
}

function extractBestBitrateUrl(bitrateInfo: unknown): string {
  if (!Array.isArray(bitrateInfo) || bitrateInfo.length === 0) return '';

  // Prefer standard H.264 streams over HEVC/bytevc1 so HTML5 <video> plays everywhere
  for (const entry of bitrateInfo) {
    const playAddr = entry?.PlayAddr;
    const urlKey = String(playAddr?.UrlKey || '');
    const urls: unknown = playAddr?.UrlList || playAddr?.urlList;
    if (
      Array.isArray(urls) &&
      urls.length > 0 &&
      !urlKey.includes('hvc1') &&
      !urlKey.includes('bytevc1') &&
      !urlKey.includes('bytevc2')
    ) {
      const candidate = normalizeDirectCdnUrl(urls[0]);
      if (candidate && !candidate.includes('/media-video-hvc1/')) {
        return candidate;
      }
    }
  }

  for (const entry of bitrateInfo) {
    const urls: unknown = entry?.PlayAddr?.UrlList || entry?.PlayAddr?.urlList;
    if (Array.isArray(urls) && urls.length > 0) {
      const candidate = normalizeDirectCdnUrl(urls[0]);
      if (candidate) return candidate;
    }
  }

  return '';
}

function parseItem(item: RawItem, user: TikTokUser): VideoOutput {
  const v: RawItem = item.video || {};
  const s: RawItem = item.stats || item.statsV2 || {};
  const m: RawItem = item.music || item.music_info || {};
  const imgPost: RawItem = item.imagePost || {};

  const directVideoPlay =
    normalizeDirectCdnUrl(item.play || item.hdplay) ||
    extractUrlField(v.playAddr) ||
    extractBestBitrateUrl(v.bitrateInfo) ||
    extractUrlField(v.downloadAddr) ||
    '';

  const directVideoWm =
    normalizeDirectCdnUrl(item.wmplay) ||
    extractUrlField(v.downloadAddr) ||
    directVideoPlay;

  const directAudioPlay =
    normalizeDirectCdnUrl(item.music) ||
    extractUrlField(m.playUrl) ||
    extractUrlField(m.play) ||
    extractUrlField(m.url) ||
    '';

  const coverUrl =
    normalizeDirectCdnUrl(item.cover || item.origin_cover) ||
    extractUrlField(v.cover) ||
    extractUrlField(v.originCover) ||
    extractUrlField(v.dynamicCover) ||
    extractUrlField(imgPost.cover?.imageURL) ||
    '';

  const originCoverUrl =
    normalizeDirectCdnUrl(item.origin_cover || item.cover) ||
    extractUrlField(v.originCover) ||
    extractUrlField(v.cover) ||
    coverUrl;

  return {
    video_id: String(item.video_id || item.id || v.id || ''),
    id: String(item.video_id || item.id || v.id || ''),
    title: String(item.title || item.desc || v.desc || ''),
    duration: Number(item.duration || v.duration || 0),
    cover: coverUrl,
    origin_cover: originCoverUrl,
    play: directVideoPlay,
    wmplay: directVideoWm,
    music: directAudioPlay,
    music_info: {
      id: String(m.id || ''),
      title: String(m.title || m.album || 'Original Sound'),
      author: String(m.authorName || m.author || user.nickname),
      play: directAudioPlay,
      cover:
        extractUrlField(m.coverLarge) ||
        extractUrlField(m.coverMedium) ||
        extractUrlField(m.coverThumb) ||
        normalizeDirectCdnUrl(m.cover) ||
        '',
    },
    play_count: Number(item.play_count || s.playCount || 0),
    digg_count: Number(item.digg_count || s.diggCount || 0),
    comment_count: Number(item.comment_count || s.commentCount || 0),
    share_count: Number(item.share_count || s.shareCount || 0),
    download_count: Number(item.download_count || item.collect_count || s.collectCount || 0),
    create_time: Number(item.create_time || item.createTime || 0),
    author: {
      id: user.secUid || user.id,
      unique_id: user.uniqueId,
      nickname: user.nickname,
      avatar: user.avatar,
      signature: user.signature,
      verified: user.verified,
    },
  };
}

function parseProfileFromHtml(
  html: string,
  username: string
): {
  user: TikTokUser;
  stats: TikTokStats;
  itemList: RawItem[];
} | null {
  // Pattern 1: __UNIVERSAL_DATA_FOR_REHYDRATION__
  const rehydrationMatch = html.match(
    /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
  );
  if (rehydrationMatch && rehydrationMatch[1]) {
    try {
      const data = JSON.parse(rehydrationMatch[1]) as RawItem;
      const defaultScope: RawItem = data['__DEFAULT_SCOPE__'] || {};
      const userDetail: RawItem = defaultScope['webapp.user-detail'] || {};

      if (userDetail?.userInfo?.user) {
        const u: RawItem = userDetail.userInfo.user;
        const s: RawItem = userDetail.userInfo.stats || {};
        const isPrivate = Boolean(u.secret || u.privateAccount);

        const parsedUser: TikTokUser = {
          id: String(u.id || u.secUid || username),
          uniqueId: String(u.uniqueId || username),
          nickname: String(u.nickname || u.uniqueId || username),
          avatar: normalizeDirectCdnUrl(u.avatarLarger || u.avatarMedium || u.avatarThumb || ''),
          signature: String(u.signature || ''),
          verified: Boolean(u.verified),
          secUid: String(u.secUid || ''),
          status: isPrivate ? 'private' : 'active',
        };

        const parsedStats: TikTokStats = {
          followerCount: typeof s.followerCount === 'number' ? s.followerCount : null,
          followingCount: typeof s.followingCount === 'number' ? s.followingCount : null,
          heartCount:
            typeof s.heart === 'number'
              ? s.heart
              : typeof s.heartCount === 'number'
              ? s.heartCount
              : null,
          videoCount: Number(s.videoCount || 0),
        };

        const items =
          userDetail.itemList || defaultScope['webapp.video-detail']?.itemList || [];
        return {
          user: parsedUser,
          stats: parsedStats,
          itemList: Array.isArray(items) ? items : [],
        };
      }
    } catch {
      // Fall through
    }
  }

  // Pattern 2: SIGI_STATE
  const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>([\s\S]*?)<\/script>/);
  if (sigiMatch && sigiMatch[1]) {
    try {
      const sigi = JSON.parse(sigiMatch[1]) as RawItem;
      const userModule: RawItem = sigi.UserModule?.users || {};
      const userKey =
        Object.keys(userModule).find((k) => k.toLowerCase() === username.toLowerCase()) ||
        Object.keys(userModule)[0];

      if (userKey && userModule[userKey]) {
        const u: RawItem = userModule[userKey];
        const s: RawItem = sigi.UserModule?.stats?.[userKey] || {};
        const isPrivate = Boolean(u.secret || u.privateAccount);

        const parsedUser: TikTokUser = {
          id: String(u.id || u.secUid || username),
          uniqueId: String(u.uniqueId || username),
          nickname: String(u.nickname || u.uniqueId || username),
          avatar: normalizeDirectCdnUrl(u.avatarLarger || u.avatarMedium || u.avatarThumb || ''),
          signature: String(u.signature || ''),
          verified: Boolean(u.verified),
          secUid: String(u.secUid || ''),
          status: isPrivate ? 'private' : 'active',
        };

        const parsedStats: TikTokStats = {
          followerCount: typeof s.followerCount === 'number' ? s.followerCount : null,
          followingCount: typeof s.followingCount === 'number' ? s.followingCount : null,
          heartCount:
            typeof s.heart === 'number'
              ? s.heart
              : typeof s.heartCount === 'number'
              ? s.heartCount
              : null,
          videoCount: Number(s.videoCount || 0),
        };

        const itemModule: RawItem = sigi.ItemModule || {};
        const items = Object.values(itemModule) as RawItem[];

        return {
          user: parsedUser,
          stats: parsedStats,
          itemList: items,
        };
      }
    } catch {
      // Fall through
    }
  }

  return null;
}

async function scrapeProfileHtml(username: string): Promise<{
  user: TikTokUser;
  stats: TikTokStats;
  itemList: RawItem[];
  cookieHeader: string;
} | null> {
  const profileUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}`;
  let cookieHeader = getUserSessionCookies(username);

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const headers: Record<string, string> = { ...DESKTOP_BROWSER_HEADERS };
      if (cookieHeader) {
        headers['Cookie'] = cookieHeader;
      }

      const res = await fetch(profileUrl, {
        headers,
        cache: 'no-store',
      });

      const setCookies = extractSetCookies(res.headers);
      if (setCookies.length > 0) {
        cookieHeader = mergeCookieStrings(cookieHeader, setCookies);
      }

      if (!res.ok) {
        return null;
      }

      const html = await res.text();

      // Check for TikTok SHA-256 WAF challenge ("Please wait...")
      if (attempt === 0 && html.includes('id="cs"') && html.includes('id="wci"')) {
        const solvedCookies = solveTikTokWafChallenge(html);
        if (solvedCookies.length > 0) {
          cookieHeader = mergeCookieStrings(cookieHeader, solvedCookies);
          continue;
        }
      }

      const parsed = parseProfileFromHtml(html, username);
      if (parsed) {
        if (cookieHeader) {
          setUserSessionCookies(username, cookieHeader);
        }
        return {
          ...parsed,
          cookieHeader,
        };
      }
      break;
    } catch {
      break;
    }
  }

  return null;
}

async function fetchCreatorItemList(
  secUid: string,
  username: string,
  cursorMs: string,
  count: number,
  initialCookieHeader: string
): Promise<{
  videos: RawItem[];
  cursor: string | null;
  hasMore: boolean;
  cookieHeader: string;
}> {
  if (!secUid) {
    return { videos: [], cursor: null, hasMore: false, cookieHeader: initialCookieHeader };
  }

  let cookieHeader = initialCookieHeader || getUserSessionCookies(username);

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 9000);

      const params = new URLSearchParams({
        aid: '1988',
        app_language: 'en',
        app_name: 'tiktok_web',
        browser_language: 'en-US',
        browser_name: 'Mozilla',
        browser_online: 'true',
        browser_platform: 'Win32',
        browser_version: '5.0 (Windows)',
        channel: 'tiktok_web',
        cookie_enabled: 'true',
        count: String(Math.min(30, Math.max(1, count))),
        cursor: String(cursorMs),
        device_id: generateDeviceId(),
        device_platform: 'web_pc',
        focus_state: 'true',
        from_page: 'user',
        history_len: '2',
        is_fullscreen: 'false',
        is_page_visible: 'true',
        language: 'en',
        os: 'windows',
        priority_region: '',
        referer: '',
        region: 'US',
        screen_height: '1080',
        screen_width: '1920',
        secUid,
        type: '1',
        tz_name: 'UTC',
        verifyFp: generateVerifyFp(),
        webcast_language: 'en',
      });

      const headers: Record<string, string> = {
        ...API_HEADERS,
        Referer: `https://www.tiktok.com/@${encodeURIComponent(username)}`,
      };
      if (cookieHeader) {
        headers['Cookie'] = cookieHeader;
      }

      const res = await fetch(
        `https://www.tiktok.com/api/creator/item_list/?${params.toString()}`,
        {
          headers,
          cache: 'no-store',
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      const setCookies = extractSetCookies(res.headers);
      if (setCookies.length > 0) {
        cookieHeader = mergeCookieStrings(cookieHeader, setCookies);
        setUserSessionCookies(username, cookieHeader);
      }

      if (!res.ok) continue;

      const text = await res.text();
      if (!text || !text.trim()) continue;

      const data = JSON.parse(text) as {
        itemList?: RawItem[];
        hasMorePrevious?: boolean;
        hasMore?: boolean;
      };

      const items = Array.isArray(data.itemList) ? data.itemList : [];
      if (items.length === 0) continue;

      const lastItem = items[items.length - 1];
      const rawCreateTime = Number(lastItem?.createTime || lastItem?.create_time || 0);
      let nextCursorMs = rawCreateTime > 0 ? rawCreateTime * 1000 : 0;

      if (nextCursorMs > 0 && String(nextCursorMs) === String(cursorMs)) {
        nextCursorMs -= 7 * 86_400_000;
      }

      const hasMoreFlag = Boolean(data.hasMorePrevious ?? data.hasMore);
      const hasMore = Boolean(
        hasMoreFlag && nextCursorMs >= MIN_TIKTOK_CURSOR_MS
      );

      return {
        videos: items,
        cursor: nextCursorMs > 0 ? String(nextCursorMs) : null,
        hasMore,
        cookieHeader,
      };
    } catch {
      // Retry with rotated device_id on second attempt
    }
  }

  return { videos: [], cursor: null, hasMore: false, cookieHeader };
}

async function fetchEmbedProfileVideos(username: string): Promise<{
  videos: RawItem[];
  secUid: string;
}> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(`https://www.tiktok.com/embed/@${encodeURIComponent(username)}`, {
      headers: {
        ...DESKTOP_BROWSER_HEADERS,
        Referer: 'https://www.tiktok.com/',
      },
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);
    if (!res.ok) return { videos: [], secUid: '' };

    const html = await res.text();
    const stateMatch = html.match(
      /<script id="__FRONTITY_CONNECT_STATE__"[^>]*>([\s\S]*?)<\/script>/
    );
    if (!stateMatch || !stateMatch[1]) return { videos: [], secUid: '' };

    const json = JSON.parse(stateMatch[1]) as RawItem;
    const sourceData: RawItem = json?.source?.data || {};
    const targetKey =
      Object.keys(sourceData).find(
        (k) => k.toLowerCase() === `/embed/@${username.toLowerCase()}`
      ) || Object.keys(sourceData).find((k) => k.toLowerCase().startsWith('/embed/@'));

    if (!targetKey) return { videos: [], secUid: '' };

    const embedData: RawItem = sourceData[targetKey] || {};
    const videoList = Array.isArray(embedData.videoList) ? (embedData.videoList as RawItem[]) : [];

    let extractedSecUid = '';
    for (const item of videoList) {
      if (item.authorSecId || item.author?.secUid) {
        extractedSecUid = String(item.authorSecId || item.author?.secUid);
        break;
      }
    }

    return { videos: videoList, secUid: extractedSecUid };
  } catch {
    return { videos: [], secUid: '' };
  }
}

async function fetchTikwmPosts(
  username: string,
  cursor: string = '0',
  count: number = 30
): Promise<{ videos: RawItem[]; cursor: string | null; hasMore: boolean }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 7000);

    const getUrl = `https://www.tikwm.com/api/user/posts?unique_id=${encodeURIComponent(
      username
    )}&count=${count}&cursor=${encodeURIComponent(cursor)}`;

    const res = await fetch(getUrl, {
      headers: API_HEADERS,
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('json')) {
      const data = (await res.json()) as RawItem;
      if (data && data.code === 0 && data.data) {
        return {
          videos: Array.isArray(data.data.videos) ? data.data.videos : [],
          cursor: data.data.cursor ? String(data.data.cursor) : null,
          hasMore: Boolean(data.data.hasMore),
        };
      }
    }
  } catch {
    // Fall through
  }

  return { videos: [], cursor: null, hasMore: false };
}

async function fetchTikwmUserInfo(
  username: string
): Promise<{ user: TikTokUser; stats: TikTokStats } | null> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    const res = await fetch(
      `https://www.tikwm.com/api/user/info?unique_id=${encodeURIComponent(username)}`,
      {
        headers: API_HEADERS,
        cache: 'no-store',
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    const contentType = res.headers.get('content-type') || '';
    if (res.ok && contentType.includes('json')) {
      const data = (await res.json()) as RawItem;
      if (data && data.code === 0 && data.data) {
        const u: RawItem = data.data.user || data.data;
        const s: RawItem = data.data.stats || {};

        const parsedUser: TikTokUser = {
          id: String(u.id || u.unique_id || username),
          uniqueId: String(u.unique_id || username),
          nickname: String(u.nickname || u.unique_id || username),
          avatar: normalizeDirectCdnUrl(u.avatarLarger || u.avatarMedium || u.avatar || ''),
          signature: String(u.signature || ''),
          verified: Boolean(u.verified),
          secUid: String(u.secUid || ''),
          status: u.secret || u.privateAccount ? 'private' : 'active',
        };

        const parsedStats: TikTokStats = {
          followerCount:
            typeof s.followerCount === 'number'
              ? s.followerCount
              : typeof u.follower_count === 'number'
              ? u.follower_count
              : null,
          followingCount:
            typeof s.followingCount === 'number'
              ? s.followingCount
              : typeof u.following_count === 'number'
              ? u.following_count
              : null,
          heartCount:
            typeof s.heartCount === 'number'
              ? s.heartCount
              : typeof u.total_favorited === 'number'
              ? u.total_favorited
              : null,
          videoCount: Number(s.videoCount || u.aweme_count || 0),
        };

        return { user: parsedUser, stats: parsedStats };
      }
    }
  } catch {
    // Fail
  }
  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');
  const cursorParam = searchParams.get('cursor') || '0';
  const countParam = Math.min(35, Math.max(1, parseInt(searchParams.get('count') || '30', 10)));

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter.' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim().toLowerCase();

  try {
    // Pagination request (SHOW MORE VIDEOS)
    if (cursorParam && cursorParam !== '0') {
      let cachedSec = secUidCache.get(cleanUser);
      if (!cachedSec || cachedSec.expiresAt < Date.now()) {
        const scraped = await scrapeProfileHtml(cleanUser);
        if (scraped?.user?.secUid) {
          cachedSec = {
            secUid: scraped.user.secUid,
            user: scraped.user,
            expiresAt: Date.now() + SECUID_CACHE_TTL_MS,
          };
          secUidCache.set(cleanUser, cachedSec);
        }
      }

      const fallbackUser: TikTokUser = cachedSec?.user || {
        id: cleanUser,
        uniqueId: cleanUser,
        nickname: cleanUser,
        avatar: '',
        signature: '',
        verified: false,
        secUid: cachedSec?.secUid || '',
        status: 'active',
      };

      // If cursor looks like a millisecond timestamp (>= 1e12), use TikTok creator item_list first
      if (cachedSec?.secUid && Number(cursorParam) >= 1_000_000_000_000) {
        const creatorPage = await fetchCreatorItemList(
          cachedSec.secUid,
          cleanUser,
          cursorParam,
          countParam,
          getUserSessionCookies(cleanUser)
        );
        if (creatorPage.videos.length > 0) {
          return NextResponse.json(
            {
              code: 0,
              msg: 'success',
              data: {
                videos: creatorPage.videos.map((item) => parseItem(item, fallbackUser)),
                cursor: creatorPage.cursor,
                hasMore: creatorPage.hasMore,
              },
            },
            { status: 200 }
          );
        }
      }

      // Fallback pagination via TikWM
      const postsResult = await fetchTikwmPosts(cleanUser, cursorParam, countParam);
      return NextResponse.json(
        {
          code: 0,
          msg: 'success',
          data: {
            videos: postsResult.videos.map((item) => parseItem(item, fallbackUser)),
            cursor: postsResult.cursor,
            hasMore: postsResult.hasMore,
          },
        },
        { status: 200 }
      );
    }

    // Check short-lived cache for initial profile view
    const cachedProfile = profileResponseCache.get(cleanUser);
    if (cachedProfile && cachedProfile.expiresAt > Date.now()) {
      return NextResponse.json(
        {
          code: 0,
          msg: 'success',
          data: cachedProfile.payload,
        },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
          },
        }
      );
    }

    // Step 1: Scrape profile HTML + cookies + secUid
    const scraped = await scrapeProfileHtml(cleanUser);

    let resolvedUser: TikTokUser | null = scraped?.user || null;
    let resolvedStats: TikTokStats | null = scraped?.stats || null;
    let cookieHeader = scraped?.cookieHeader || '';

    if (resolvedUser?.status === 'private') {
      return NextResponse.json(
        {
          code: 0,
          msg: 'User profile is private.',
          data: {
            user: resolvedUser,
            stats: resolvedStats,
            videos: [],
            cursor: null,
            hasMore: false,
          },
        },
        { status: 200 }
      );
    }

    // Step 2: Fetch videos via Tier 1 (TikTok creator/item_list) -> Tier 2 (TikTok embed) -> Tier 3 (TikWM)
    let rawItems: RawItem[] = [];
    let nextCursor: string | null = null;
    let hasMore = false;

    if (resolvedUser?.secUid) {
      const creatorResult = await fetchCreatorItemList(
        resolvedUser.secUid,
        cleanUser,
        String(Date.now()),
        countParam,
        cookieHeader
      );
      if (creatorResult.videos.length > 0) {
        rawItems = creatorResult.videos;
        nextCursor = creatorResult.cursor;
        hasMore = creatorResult.hasMore;
        cookieHeader = creatorResult.cookieHeader;
      }
    }

    // Tier 2: TikTok official creator embed page fallback
    if (rawItems.length === 0) {
      const embedResult = await fetchEmbedProfileVideos(cleanUser);
      if (embedResult.videos.length > 0) {
        rawItems = embedResult.videos;
        if (!resolvedUser?.secUid && embedResult.secUid) {
          const retryCreator = await fetchCreatorItemList(
            embedResult.secUid,
            cleanUser,
            String(Date.now()),
            countParam,
            cookieHeader
          );
          if (retryCreator.videos.length > 0) {
            rawItems = retryCreator.videos;
            nextCursor = retryCreator.cursor;
            hasMore = retryCreator.hasMore;
          }
          if (resolvedUser) {
            resolvedUser.secUid = embedResult.secUid;
          }
        }
      }
    }

    // Tier 3: Scraped HTML itemList or TikWM fallback
    if (rawItems.length === 0 && scraped?.itemList && scraped.itemList.length > 0) {
      rawItems = scraped.itemList;
    }

    if (rawItems.length === 0) {
      const [tikwmPosts, tikwmInfo] = await Promise.all([
        fetchTikwmPosts(cleanUser, '0', countParam),
        !resolvedUser ? fetchTikwmUserInfo(cleanUser) : Promise.resolve(null),
      ]);

      if (!resolvedUser && tikwmInfo) {
        resolvedUser = tikwmInfo.user;
        resolvedStats = tikwmInfo.stats;
      }

      if (tikwmPosts.videos.length > 0) {
        rawItems = tikwmPosts.videos;
        nextCursor = tikwmPosts.cursor;
        hasMore = tikwmPosts.hasMore;

        if (!resolvedUser && tikwmPosts.videos[0]?.author) {
          const a = tikwmPosts.videos[0].author as RawItem;
          resolvedUser = {
            id: String(a.id || cleanUser),
            uniqueId: String(a.unique_id || cleanUser),
            nickname: String(a.nickname || cleanUser),
            avatar: normalizeDirectCdnUrl(a.avatar || ''),
            signature: '',
            verified: Boolean(a.verified),
            secUid: '',
            status: 'active',
          };
        }
      }
    }

    if (!resolvedUser) {
      return NextResponse.json(
        {
          code: -1,
          msg: `TikTok profile @${cleanUser} could not be resolved or does not exist.`,
        },
        { status: 404 }
      );
    }

    if (resolvedUser.secUid) {
      secUidCache.set(cleanUser, {
        secUid: resolvedUser.secUid,
        user: resolvedUser,
        expiresAt: Date.now() + SECUID_CACHE_TTL_MS,
      });
    }

    const finalStats: TikTokStats = resolvedStats || {
      followerCount: null,
      followingCount: null,
      heartCount: null,
      videoCount: rawItems.length,
    };

    const formattedVideos = rawItems.map((item) => parseItem(item, resolvedUser as TikTokUser));

    const payload = {
      user: resolvedUser,
      stats: finalStats,
      videos: formattedVideos,
      cursor: nextCursor,
      hasMore,
    };

    if (formattedVideos.length > 0) {
      profileResponseCache.set(cleanUser, {
        payload,
        expiresAt: Date.now() + PROFILE_CACHE_TTL_MS,
      });

      if (profileResponseCache.size > 300) {
        const now = Date.now();
        for (const [k, v] of profileResponseCache.entries()) {
          if (v.expiresAt < now) profileResponseCache.delete(k);
        }
      }
    }

    return NextResponse.json(
      {
        code: 0,
        msg: 'success',
        data: payload,
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
        },
      }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Serverless execution error.';
    return NextResponse.json({ code: -1, msg: message }, { status: 500 });
  }
}
