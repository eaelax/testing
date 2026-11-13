import crypto from 'node:crypto';
import { NextRequest, NextResponse } from 'next/server';

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

type JsonRecord = Record<string, unknown>;

const DESKTOP_BROWSER_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  Accept:
    'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Sec-Ch-Ua': '"Chromium";v="131", "Not_A Brand";v="24", "Google Chrome";v="131"',
  'Sec-Ch-Ua-Mobile': '?0',
  'Sec-Ch-Ua-Platform': '"Windows"',
  'Sec-Fetch-Dest': 'document',
  'Sec-Fetch-Mode': 'navigate',
  'Sec-Fetch-Site': 'none',
  'Sec-Fetch-User': '?1',
  'Upgrade-Insecure-Requests': '1',
};

const TIKWM_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  Accept: 'application/json, text/javascript, */*; q=0.01',
  'Accept-Language': 'en-US,en;q=0.9',
  Origin: 'https://www.tikwm.com',
  Referer: 'https://www.tikwm.com/',
  Cookie: 'current_language=en',
};

function asObj(val: unknown): JsonRecord {
  return val && typeof val === 'object' ? (val as JsonRecord) : {};
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

function normalizeDirectCdnUrl(url?: string, tikwmBase = 'https://www.tikwm.com'): string {
  if (!url) return '';
  let cleaned = url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/').trim();
  if (!cleaned) return '';
  if (cleaned.startsWith('//')) {
    cleaned = `https:${cleaned}`;
  } else if (cleaned.startsWith('/')) {
    cleaned = `${tikwmBase}${cleaned}`;
  } else if (cleaned.startsWith('http://')) {
    cleaned = cleaned.replace(/^http:\/\//i, 'https://');
  }
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
    if (typeof obj.src === 'string') {
      return obj.src;
    }
  }
  return '';
}

function extractSetCookies(headers: Headers): string[] {
  const anyHeaders = headers as Headers & { getSetCookie?: () => string[] };
  if (typeof anyHeaders.getSetCookie === 'function') {
    return anyHeaders.getSetCookie().map((c) => c.split(';')[0]).filter(Boolean);
  }
  const raw = headers.get('set-cookie');
  if (!raw) return [];
  return raw
    .split(/,(?=\s*[A-Za-z0-9_.-]+=)/)
    .map((c) => c.split(';')[0].trim())
    .filter(Boolean);
}

function randomDeviceId(): string {
  const min = 7250000000000000000n;
  const range = 75099899999994577n;
  const rand = BigInt(Math.floor(Math.random() * Number.MAX_SAFE_INTEGER)) % range;
  return (min + rand).toString();
}

function randomVerifyFp(): string {
  const chars = '0123456789abcdefABCDEF';
  let out = 'verify_';
  for (let i = 0; i < 7; i++) {
    out += chars[Math.floor(Math.random() * chars.length)];
  }
  return out;
}

/**
 * Solves TikTok's lightweight SHA-256 JS WAF challenge if returned on SSR HTML.
 */
function solveWafChallenge(html: string): string[] {
  try {
    const csMatch = html.match(/id=["']cs["'][^>]*class=["']([^"']+)["']/i) ||
      html.match(/class=["']([^"']+)["'][^>]*id=["']cs["']/i);
    const wciMatch = html.match(/id=["']wci["'][^>]*class=["']([^"']+)["']/i) ||
      html.match(/class=["']([^"']+)["'][^>]*id=["']wci["']/i);

    if (!csMatch?.[1] || !wciMatch?.[1]) return [];

    const challengeJson = JSON.parse(
      Buffer.from(`${csMatch[1]}===`, 'base64').toString('utf8')
    ) as JsonRecord;
    const vObj = asObj(challengeJson.v);
    const expectedB64 = asStr(vObj.c);
    const baseB64 = asStr(vObj.a);
    if (!expectedB64 || !baseB64) return [];

    const expectedDigest = Buffer.from(expectedB64, 'base64');
    const baseBytes = Buffer.from(baseB64, 'base64');

    let solvedD = '';
    for (let i = 0; i <= 1_000_000; i++) {
      const hash = crypto.createHash('sha256');
      hash.update(baseBytes);
      hash.update(String(i));
      if (hash.digest().equals(expectedDigest)) {
        solvedD = Buffer.from(String(i)).toString('base64');
        break;
      }
    }

    if (!solvedD) return [];
    challengeJson.d = solvedD;
    const cookieVal = Buffer.from(JSON.stringify(challengeJson)).toString('base64');
    const cookies = [`${wciMatch[1]}=${cookieVal}`];

    const rciMatch = html.match(/id=["']rci["'][^>]*class=["']([^"']+)["']/i);
    const rsMatch = html.match(/id=["']rs["'][^>]*class=["']([^"']+)["']/i);
    if (rciMatch?.[1] && rsMatch?.[1]) {
      cookies.push(`${rciMatch[1]}=${rsMatch[1]}`);
    }
    return cookies;
  } catch {
    return [];
  }
}

function parseItem(rawItem: unknown, user: TikTokUser): VideoOutput {
  const item = asObj(rawItem);
  const v = asObj(item.video);
  const s = asObj(item.stats || item.statsV2);
  const s2 = asObj(item.statsV2);
  const m = asObj(item.music_info || item.music);
  const itemAuthor = asObj(item.author);

  const bitrateArr = Array.isArray(v.bitrateInfo) ? v.bitrateInfo : [];
  const firstBitrate = asObj(bitrateArr[0]);
  const bitratePlayAddr = extractUrlField(firstBitrate.PlayAddr);

  const directVideoPlay = normalizeDirectCdnUrl(
    asStr(item.hdplay) ||
      asStr(item.play) ||
      extractUrlField(v.playAddr) ||
      bitratePlayAddr ||
      extractUrlField(v.downloadAddr)
  );

  const directVideoWm = normalizeDirectCdnUrl(
    asStr(item.wmplay) ||
      extractUrlField(v.downloadAddr) ||
      extractUrlField(v.playAddr) ||
      directVideoPlay
  );

  const directAudioPlay = normalizeDirectCdnUrl(
    asStr(m.play) || asStr(m.playUrl) || asStr(item.music) || asStr(m.url)
  );

  const zoomCover = asObj(v.zoomCover);
  const coversArr = Array.isArray(item.covers) ? item.covers : [];
  const coverUrl = normalizeDirectCdnUrl(
    asStr(item.cover) ||
      asStr(item.origin_cover) ||
      asStr(v.cover) ||
      asStr(v.originCover) ||
      asStr(v.dynamicCover) ||
      asStr(coversArr[0]) ||
      asStr(zoomCover['480']) ||
      asStr(zoomCover['720'])
  );

  const originCoverUrl = normalizeDirectCdnUrl(
    asStr(item.origin_cover) ||
      asStr(item.cover) ||
      asStr(v.originCover) ||
      asStr(v.cover) ||
      asStr(coversArr[1]) ||
      coverUrl
  );

  const videoId = asStr(item.video_id) || asStr(item.id) || asStr(v.id);

  const authorUniqueId = asStr(itemAuthor.unique_id || itemAuthor.uniqueId, user.uniqueId) || user.uniqueId;
  const authorNickname = asStr(itemAuthor.nickname, user.nickname) || user.nickname;
  const authorAvatar = normalizeDirectCdnUrl(asStr(itemAuthor.avatar || itemAuthor.avatarMedium)) || user.avatar;

  return {
    video_id: videoId,
    id: videoId,
    title: asStr(item.title) || asStr(item.desc) || asStr(v.desc),
    duration: asNum(item.duration || v.duration),
    cover: coverUrl,
    origin_cover: originCoverUrl,
    play: directVideoPlay,
    wmplay: directVideoWm,
    music: directAudioPlay,
    music_info: {
      id: asStr(m.id),
      title: asStr(m.title) || asStr(m.album) || 'Original Sound',
      author: asStr(m.authorName) || asStr(m.author) || authorNickname,
      play: directAudioPlay,
      cover: normalizeDirectCdnUrl(asStr(m.coverLarge) || asStr(m.coverMedium) || asStr(m.coverThumb) || asStr(m.cover)),
    },
    play_count: asNum(item.play_count ?? s.playCount ?? s2.playCount),
    digg_count: asNum(item.digg_count ?? s.diggCount ?? s2.diggCount),
    comment_count: asNum(item.comment_count ?? s.commentCount ?? s2.commentCount),
    share_count: asNum(item.share_count ?? s.shareCount ?? s2.shareCount),
    download_count: asNum(item.download_count ?? item.collect_count ?? s.collectCount ?? s2.collectCount),
    create_time: asNum(item.create_time ?? item.createTime),
    author: {
      id: user.secUid || user.id,
      unique_id: authorUniqueId,
      nickname: authorNickname,
      avatar: authorAvatar,
      signature: user.signature,
      verified: Boolean(itemAuthor.verified ?? user.verified),
    },
  };
}

async function scrapeProfileHtml(username: string): Promise<{
  user: TikTokUser;
  stats: TikTokStats;
  itemList: unknown[];
  cookies: string;
} | null> {
  const profileUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}`;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 7500);

    let res = await fetch(profileUrl, {
      headers: DESKTOP_BROWSER_HEADERS,
      cache: 'no-store',
      signal: controller.signal,
    });
    clearTimeout(timer);

    if (!res.ok) {
      return null;
    }

    let cookieList = extractSetCookies(res.headers);
    let html = await res.text();

    // Solve TikTok JS WAF challenge if present instead of universal data
    if (!html.includes('__UNIVERSAL_DATA_FOR_REHYDRATION__') && html.includes('id="cs"')) {
      const challengeCookies = solveWafChallenge(html);
      if (challengeCookies.length > 0) {
        const mergedCookies = [...cookieList, ...challengeCookies].join('; ');
        const retryController = new AbortController();
        const retryTimer = setTimeout(() => retryController.abort(), 7500);
        res = await fetch(profileUrl, {
          headers: {
            ...DESKTOP_BROWSER_HEADERS,
            Cookie: mergedCookies,
          },
          cache: 'no-store',
          signal: retryController.signal,
        });
        clearTimeout(retryTimer);
        if (res.ok) {
          cookieList = [...cookieList, ...extractSetCookies(res.headers)];
          html = await res.text();
        }
      }
    }

    const cookieHeader = cookieList.join('; ');

    // Pattern 1: __UNIVERSAL_DATA_FOR_REHYDRATION__
    const rehydrationMatch = html.match(
      /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
    );
    if (rehydrationMatch?.[1]) {
      try {
        const data = JSON.parse(rehydrationMatch[1]) as JsonRecord;
        const defaultScope = asObj(data['__DEFAULT_SCOPE__']);
        const userDetail = asObj(defaultScope['webapp.user-detail']);
        const userInfo = asObj(userDetail.userInfo);

        if (userInfo.user) {
          const u = asObj(userInfo.user);
          const s = asObj(userInfo.stats);
          const isPrivate = Boolean(u.secret || u.privateAccount || userDetail.statusCode === 10222);

          const parsedUser: TikTokUser = {
            id: asStr(u.id || u.secUid, username),
            uniqueId: asStr(u.uniqueId, username),
            nickname: asStr(u.nickname || u.uniqueId, username),
            avatar: normalizeDirectCdnUrl(
              asStr(u.avatarLarger) || asStr(u.avatarMedium) || asStr(u.avatarThumb)
            ),
            signature: asStr(u.signature),
            verified: Boolean(u.verified),
            secUid: asStr(u.secUid),
            status: isPrivate ? 'private' : 'active',
          };

          const parsedStats: TikTokStats = {
            followerCount: s.followerCount !== undefined ? asNum(s.followerCount) : null,
            followingCount: s.followingCount !== undefined ? asNum(s.followingCount) : null,
            heartCount:
              s.heart !== undefined
                ? asNum(s.heart)
                : s.heartCount !== undefined
                ? asNum(s.heartCount)
                : null,
            videoCount: asNum(s.videoCount),
          };

          const videoDetail = asObj(defaultScope['webapp.video-detail']);
          const items = userDetail.itemList || videoDetail.itemList || [];
          return {
            user: parsedUser,
            stats: parsedStats,
            itemList: Array.isArray(items) ? items : [],
            cookies: cookieHeader,
          };
        }
      } catch {
        // Fall through
      }
    }

    // Pattern 2: SIGI_STATE
    const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>([\s\S]*?)<\/script>/);
    if (sigiMatch?.[1]) {
      try {
        const sigi = JSON.parse(sigiMatch[1]) as JsonRecord;
        const userModuleWrap = asObj(sigi.UserModule);
        const userModule = asObj(userModuleWrap.users);
        const statsModule = asObj(userModuleWrap.stats);
        const userKey =
          Object.keys(userModule).find(
            (k) => k.toLowerCase() === username.toLowerCase()
          ) || Object.keys(userModule)[0];

        if (userKey && userModule[userKey]) {
          const u = asObj(userModule[userKey]);
          const s = asObj(statsModule[userKey]);
          const isPrivate = Boolean(u.secret || u.privateAccount);

          const parsedUser: TikTokUser = {
            id: asStr(u.id || u.secUid, username),
            uniqueId: asStr(u.uniqueId, username),
            nickname: asStr(u.nickname || u.uniqueId, username),
            avatar: normalizeDirectCdnUrl(
              asStr(u.avatarLarger) || asStr(u.avatarMedium) || asStr(u.avatarThumb)
            ),
            signature: asStr(u.signature),
            verified: Boolean(u.verified),
            secUid: asStr(u.secUid),
            status: isPrivate ? 'private' : 'active',
          };

          const parsedStats: TikTokStats = {
            followerCount: s.followerCount !== undefined ? asNum(s.followerCount) : null,
            followingCount: s.followingCount !== undefined ? asNum(s.followingCount) : null,
            heartCount:
              s.heart !== undefined
                ? asNum(s.heart)
                : s.heartCount !== undefined
                ? asNum(s.heartCount)
                : null,
            videoCount: asNum(s.videoCount),
          };

          const itemModule = asObj(sigi.ItemModule);
          const items = Object.values(itemModule);

          return {
            user: parsedUser,
            stats: parsedStats,
            itemList: items,
            cookies: cookieHeader,
          };
        }
      } catch {
        // Fall through
      }
    }
  } catch {
    // Scrape failed
  }

  return null;
}

/**
 * Fetches paginated creator video list directly from TikTok's /api/creator/item_list/
 * using the exact public parameters used by yt-dlp TikTokUserIE (no X-Gnarly / X-Bogus needed).
 */
async function fetchCreatorItemList(
  secUid: string,
  username: string,
  cursorMs: string,
  count = 15,
  cookies = ''
): Promise<{ videos: unknown[]; cursor: string | null; hasMore: boolean }> {
  if (!secUid) {
    return { videos: [], cursor: null, hasMore: false };
  }

  const numericCursor = cursorMs && cursorMs !== '0' ? Number(cursorMs) : Date.now();
  const effectiveCursor = Number.isFinite(numericCursor) && numericCursor > 0 ? numericCursor : Date.now();

  for (let attempt = 0; attempt < 2; attempt++) {
    try {
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
        count: String(Math.min(30, Math.max(10, count))),
        cursor: String(effectiveCursor),
        device_id: randomDeviceId(),
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
        verifyFp: randomVerifyFp(),
        webcast_language: 'en',
      });

      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 7500);

      const headers: Record<string, string> = {
        'User-Agent': DESKTOP_BROWSER_HEADERS['User-Agent'],
        Accept: 'application/json, text/plain, */*',
        'Accept-Language': 'en-US,en;q=0.9',
        Referer: `https://www.tiktok.com/@${encodeURIComponent(username)}`,
      };
      if (cookies) {
        headers.Cookie = cookies;
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

      if (!res.ok) {
        continue;
      }

      const text = await res.text();
      if (!text || !text.trim().startsWith('{')) {
        continue;
      }

      const json = JSON.parse(text) as JsonRecord;
      const itemList = Array.isArray(json.itemList) ? json.itemList : [];

      if (itemList.length === 0) {
        continue;
      }

      const lastItem = asObj(itemList[itemList.length - 1]);
      const lastCreateTime = asNum(lastItem.createTime ?? lastItem.create_time);
      let nextCursorNum = lastCreateTime > 0 ? lastCreateTime * 1000 : 0;
      if (!nextCursorNum || nextCursorNum === effectiveCursor) {
        nextCursorNum = effectiveCursor - 7 * 86_400_000;
      }

      const hasMorePrevious = Boolean(json.hasMorePrevious) && nextCursorNum >= 1472706000000;

      return {
        videos: itemList,
        cursor: hasMorePrevious ? String(nextCursorNum) : null,
        hasMore: hasMorePrevious,
      };
    } catch {
      // Retry with fresh device_id
    }
  }

  return { videos: [], cursor: null, hasMore: false };
}

/**
 * Fallback: extracts recent videos from TikTok's public embed page (/embed/@username).
 */
async function fetchEmbedVideos(username: string): Promise<{
  videos: unknown[];
  userInfo: Partial<TikTokUser> | null;
}> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6500);

    const res = await fetch(`https://www.tiktok.com/embed/@${encodeURIComponent(username)}`, {
      headers: DESKTOP_BROWSER_HEADERS,
      cache: 'no-store',
      signal: controller.signal,
    });
    clearTimeout(timeout);

    if (!res.ok) return { videos: [], userInfo: null };

    const html = await res.text();
    const match = html.match(
      /<script[^>]+id=["']__FRONTITY_CONNECT_STATE__["'][^>]*>([\s\S]*?)<\/script>/
    );
    if (!match?.[1]) return { videos: [], userInfo: null };

    const json = JSON.parse(match[1]) as JsonRecord;
    const source = asObj(json.source);
    const dataMap = asObj(source.data);
    const embedData = asObj(
      dataMap[`/embed/@${username}`] || dataMap[Object.keys(dataMap).find((k) => k.includes('/embed/@')) || '']
    );

    const videoList = Array.isArray(embedData.videoList) ? embedData.videoList : [];
    const userObj = asObj(embedData.userInfo || embedData.user);
    const userInfo: Partial<TikTokUser> | null = userObj.uniqueId
      ? {
          uniqueId: asStr(userObj.uniqueId, username),
          nickname: asStr(userObj.nickname, username),
          avatar: normalizeDirectCdnUrl(asStr(userObj.avatarMedium || userObj.avatarThumb)),
          verified: Boolean(userObj.verified),
        }
      : null;

    return { videos: videoList, userInfo };
  } catch {
    return { videos: [], userInfo: null };
  }
}

/**
 * Quick single-attempt TikWM fallback (short timeout to prevent hanging).
 */
async function fetchTikwmPostsQuick(
  username: string,
  cursor = '0',
  count = 30
): Promise<{ videos: unknown[]; cursor: string | null; hasMore: boolean }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 5000);

    const res = await fetch('https://www.tikwm.com/api/user/posts', {
      method: 'POST',
      headers: {
        ...TIKWM_HEADERS,
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams({
        unique_id: username,
        count: String(count),
        cursor: String(cursor),
      }).toString(),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);
    if (!res.ok) return { videos: [], cursor: null, hasMore: false };

    const text = await res.text();
    if (!text.trim().startsWith('{')) return { videos: [], cursor: null, hasMore: false };

    const data = JSON.parse(text) as JsonRecord;
    if (data && data.code === 0 && data.data) {
      const payload = asObj(data.data);
      const videos = Array.isArray(payload.videos) ? payload.videos : [];
      return {
        videos,
        cursor: payload.cursor ? asStr(payload.cursor) : null,
        hasMore: Boolean(payload.hasMore && payload.cursor),
      };
    }
  } catch {
    // Ignore
  }
  return { videos: [], cursor: null, hasMore: false };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');
  const cursorParam = searchParams.get('cursor') || '0';
  const secUidParam = searchParams.get('secUid') || '';
  const infoOnly = searchParams.get('infoOnly') === '1';
  const countParam = Math.min(30, Math.max(1, parseInt(searchParams.get('count') || '15', 10)));

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter.' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim().toLowerCase();

  try {
    // Metadata-only lookup
    if (infoOnly) {
      const scraped = await scrapeProfileHtml(cleanUser);
      if (scraped) {
        return NextResponse.json(
          {
            code: 0,
            msg: 'success',
            data: {
              user: {
                id: scraped.user.id,
                secUid: scraped.user.secUid,
                unique_id: scraped.user.uniqueId,
                nickname: scraped.user.nickname,
                avatar: scraped.user.avatar,
                signature: scraped.user.signature,
                verified: scraped.user.verified,
                status: scraped.user.status,
              },
              stats: scraped.stats,
              videos: [],
              cursor: null,
              hasMore: false,
            },
          },
          {
            status: 200,
            headers: {
              'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=300',
            },
          }
        );
      }

      return NextResponse.json(
        { code: -1, msg: 'Profile metadata unavailable from SSR.' },
        { status: 200 }
      );
    }

    // Pagination (Show More Videos)
    if (cursorParam && cursorParam !== '0') {
      let secUid = secUidParam;
      let cookies = '';

      if (!secUid) {
        const scraped = await scrapeProfileHtml(cleanUser);
        secUid = scraped?.user?.secUid || '';
        cookies = scraped?.cookies || '';
      }

      const dummyUser: TikTokUser = {
        id: cleanUser,
        uniqueId: cleanUser,
        nickname: cleanUser,
        avatar: '',
        signature: '',
        verified: false,
        secUid,
        status: 'active',
      };

      let postsResult = await fetchCreatorItemList(secUid, cleanUser, cursorParam, countParam, cookies);
      if (postsResult.videos.length === 0) {
        postsResult = await fetchTikwmPostsQuick(cleanUser, cursorParam, countParam);
      }

      const formattedVideos = postsResult.videos.map((item) => parseItem(item, dummyUser));

      return NextResponse.json(
        {
          code: 0,
          msg: 'success',
          data: {
            videos: formattedVideos,
            cursor: postsResult.cursor,
            hasMore: postsResult.hasMore,
          },
        },
        { status: 200 }
      );
    }

    // First page load: scrape profile info + secUid + cookies
    const scraped = await scrapeProfileHtml(cleanUser);

    if (scraped?.user?.status === 'private') {
      return NextResponse.json(
        {
          code: 0,
          msg: 'User profile is private.',
          data: {
            user: {
              id: scraped.user.id,
              secUid: scraped.user.secUid,
              unique_id: scraped.user.uniqueId,
              nickname: scraped.user.nickname,
              avatar: scraped.user.avatar,
              signature: scraped.user.signature,
              verified: scraped.user.verified,
              status: 'private',
            },
            stats: scraped.stats,
            videos: [],
            cursor: null,
            hasMore: false,
          },
        },
        { status: 200 }
      );
    }

    // Primary video source: TikTok /api/creator/item_list/ (supports full pagination)
    let feedResult = scraped?.user?.secUid
      ? await fetchCreatorItemList(
          scraped.user.secUid,
          cleanUser,
          String(Date.now()),
          countParam,
          scraped.cookies
        )
      : { videos: [], cursor: null, hasMore: false };

    // Secondary fallback: TikTok embed page + TikWM quick attempt in parallel if primary returned 0
    let embedUserFallback: Partial<TikTokUser> | null = null;
    if (feedResult.videos.length === 0) {
      const [embedRes, tikwmRes] = await Promise.all([
        fetchEmbedVideos(cleanUser),
        fetchTikwmPostsQuick(cleanUser, '0', 30),
      ]);

      embedUserFallback = embedRes.userInfo;

      if (tikwmRes.videos.length > 0) {
        feedResult = tikwmRes;
      } else if (scraped?.itemList && scraped.itemList.length > 0) {
        feedResult = { videos: scraped.itemList, cursor: null, hasMore: false };
      } else if (embedRes.videos.length > 0) {
        feedResult = { videos: embedRes.videos, cursor: null, hasMore: false };
      }
    }

    const firstVideoObj = asObj(feedResult.videos[0]);
    const firstVideoAuthor = asObj(firstVideoObj.author);

    const resolvedUser: TikTokUser | null =
      scraped?.user ||
      (embedUserFallback?.uniqueId
        ? {
            id: cleanUser,
            uniqueId: embedUserFallback.uniqueId,
            nickname: embedUserFallback.nickname || cleanUser,
            avatar: embedUserFallback.avatar || '',
            signature: '',
            verified: Boolean(embedUserFallback.verified),
            secUid: '',
            status: 'active',
          }
        : null) ||
      (feedResult.videos.length > 0 && firstVideoObj.author
        ? {
            id: asStr(firstVideoAuthor.id, cleanUser),
            uniqueId: asStr(firstVideoAuthor.unique_id || firstVideoAuthor.uniqueId, cleanUser),
            nickname: asStr(firstVideoAuthor.nickname, cleanUser),
            avatar: normalizeDirectCdnUrl(asStr(firstVideoAuthor.avatar)),
            signature: '',
            verified: Boolean(firstVideoAuthor.verified),
            secUid: '',
            status: 'active',
          }
        : null);

    if (!resolvedUser) {
      return NextResponse.json(
        {
          code: -1,
          msg: `TikTok profile @${cleanUser} could not be resolved or does not exist.`,
        },
        { status: 404 }
      );
    }

    const resolvedStats: TikTokStats = scraped?.stats || {
      followerCount: null,
      followingCount: null,
      heartCount: null,
      videoCount: feedResult.videos.length,
    };

    const formattedVideos = feedResult.videos.map((item) => parseItem(item, resolvedUser));

    return NextResponse.json(
      {
        code: 0,
        msg: 'success',
        data: {
          user: {
            id: resolvedUser.id,
            secUid: resolvedUser.secUid,
            unique_id: resolvedUser.uniqueId,
            nickname: resolvedUser.nickname,
            avatar: resolvedUser.avatar,
            signature: resolvedUser.signature,
            verified: resolvedUser.verified,
            status: resolvedUser.status,
          },
          stats: resolvedStats,
          videos: formattedVideos,
          cursor: feedResult.cursor,
          hasMore: feedResult.hasMore,
        },
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
