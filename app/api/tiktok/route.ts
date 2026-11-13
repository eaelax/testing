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

// Server-side in-memory caches to minimize external calls and bandwidth
const profileHtmlCache = new Map<
  string,
  {
    user: TikTokUser;
    stats: TikTokStats;
    itemList: any[];
    expiresAt: number;
  }
>();

const postsCache = new Map<
  string,
  {
    videos: any[];
    cursor: string | null;
    hasMore: boolean;
    expiresAt: number;
  }
>();

const PROFILE_CACHE_TTL_MS = 10 * 60 * 1000; // 10 minutes
const POSTS_CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes

// Server-side TikWM queue to strictly respect 1 request/second rate limit per server IP
let tikwmQueue: Promise<void> = Promise.resolve();
let lastTikwmRequestTime = 0;
const TIKWM_MIN_INTERVAL_MS = 1150;

function waitForTikwmSlot(): Promise<void> {
  const run = tikwmQueue.then(async () => {
    const now = Date.now();
    const elapsed = now - lastTikwmRequestTime;
    if (elapsed < TIKWM_MIN_INTERVAL_MS) {
      await new Promise((resolve) => setTimeout(resolve, TIKWM_MIN_INTERVAL_MS - elapsed));
    }
    lastTikwmRequestTime = Date.now();
  });
  tikwmQueue = run.catch(() => {});
  return run;
}

function pruneCache<T extends { expiresAt: number }>(cache: Map<string, T>, maxSize = 500) {
  if (cache.size <= maxSize) return;
  const now = Date.now();
  for (const [k, v] of cache.entries()) {
    if (v.expiresAt < now) cache.delete(k);
  }
  if (cache.size > maxSize) {
    const firstKey = cache.keys().next().value;
    if (firstKey) cache.delete(firstKey);
  }
}

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

function normalizeDirectCdnUrl(url?: string): string {
  if (!url) return '';
  let cleaned = url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/').trim();
  if (cleaned.startsWith('/')) {
    cleaned = `https://www.tikwm.com${cleaned}`;
  }
  return cleaned;
}

function parseItem(item: any, fallbackUser: TikTokUser): VideoOutput {
  const v = item.video || {};
  const s = item.stats || item.statsV2 || {};
  const m = item.music || item.music_info || {};
  const itemAuthor = item.author || {};

  const directVideoPlay = normalizeDirectCdnUrl(
    item.play ||
      item.hdplay ||
      v.playAddr ||
      v.downloadAddr ||
      v.bitrateInfo?.[0]?.PlayAddr?.UrlList?.[0] ||
      ''
  );
  const directVideoWm = normalizeDirectCdnUrl(
    item.wmplay || v.downloadAddr || v.playAddr || directVideoPlay
  );
  const directAudioPlay = normalizeDirectCdnUrl(
    item.music || m.playUrl || m.play || m.url || ''
  );

  const authorUniqueId = itemAuthor.unique_id || itemAuthor.uniqueId || fallbackUser.uniqueId;
  const authorNickname = itemAuthor.nickname || fallbackUser.nickname || authorUniqueId;
  const authorAvatar = normalizeDirectCdnUrl(
    itemAuthor.avatar || itemAuthor.avatarLarger || fallbackUser.avatar
  );

  return {
    video_id: String(item.video_id || item.id || v.id || ''),
    id: String(item.video_id || item.id || v.id || ''),
    title: item.title || item.desc || v.desc || '',
    duration: Number(item.duration || v.duration || 0),
    cover: normalizeDirectCdnUrl(
      item.cover || item.origin_cover || v.cover || v.originCover || v.dynamicCover || ''
    ),
    origin_cover: normalizeDirectCdnUrl(
      item.origin_cover || item.cover || v.originCover || v.cover || ''
    ),
    play: directVideoPlay,
    wmplay: directVideoWm,
    music: directAudioPlay,
    music_info: {
      id: String(m.id || ''),
      title: m.title || m.album || 'Original Sound',
      author: m.authorName || m.author || authorNickname,
      play: directAudioPlay,
      cover: normalizeDirectCdnUrl(m.coverLarge || m.coverMedium || m.coverThumb || m.cover || ''),
    },
    play_count: Number(item.play_count || s.playCount || 0),
    digg_count: Number(item.digg_count || s.diggCount || 0),
    comment_count: Number(item.comment_count || s.commentCount || 0),
    share_count: Number(item.share_count || s.shareCount || 0),
    download_count: Number(item.download_count || item.collect_count || s.collectCount || 0),
    create_time: Number(item.create_time || item.createTime || 0),
    author: {
      id: itemAuthor.id || fallbackUser.secUid || fallbackUser.id,
      unique_id: authorUniqueId,
      nickname: authorNickname,
      avatar: authorAvatar,
      signature: fallbackUser.signature,
      verified: typeof itemAuthor.verified === 'boolean' ? itemAuthor.verified : fallbackUser.verified,
    },
  };
}

async function scrapeProfileHtml(username: string): Promise<{
  user: TikTokUser;
  stats: TikTokStats;
  itemList: any[];
} | null> {
  const cached = profileHtmlCache.get(username);
  if (cached && cached.expiresAt > Date.now()) {
    return {
      user: cached.user,
      stats: cached.stats,
      itemList: cached.itemList,
    };
  }

  const profileUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(profileUrl, {
      headers: DESKTOP_BROWSER_HEADERS,
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return null;
    }

    const html = await res.text();

    // Pattern 1: __UNIVERSAL_DATA_FOR_REHYDRATION__
    const rehydrationMatch = html.match(
      /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
    );
    if (rehydrationMatch && rehydrationMatch[1]) {
      try {
        const data = JSON.parse(rehydrationMatch[1]);
        const defaultScope = data['__DEFAULT_SCOPE__'] || {};
        const userDetail = defaultScope['webapp.user-detail'];

        if (userDetail?.userInfo?.user) {
          const u = userDetail.userInfo.user;
          const s = userDetail.userInfo.stats || {};
          const isPrivate = Boolean(u.secret || u.privateAccount);

          const parsedUser: TikTokUser = {
            id: u.id || u.secUid || username,
            uniqueId: u.uniqueId || username,
            nickname: u.nickname || u.uniqueId || username,
            avatar: normalizeDirectCdnUrl(
              u.avatarLarger || u.avatarMedium || u.avatarThumb || ''
            ),
            signature: u.signature || '',
            verified: Boolean(u.verified),
            secUid: u.secUid || '',
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
          const result = {
            user: parsedUser,
            stats: parsedStats,
            itemList: Array.isArray(items) ? items : [],
          };

          profileHtmlCache.set(username, {
            ...result,
            expiresAt: Date.now() + PROFILE_CACHE_TTL_MS,
          });
          pruneCache(profileHtmlCache);

          return result;
        }
      } catch {
        // Fall through
      }
    }

    // Pattern 2: SIGI_STATE
    const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>([\s\S]*?)<\/script>/);
    if (sigiMatch && sigiMatch[1]) {
      try {
        const sigi = JSON.parse(sigiMatch[1]);
        const userModule = sigi.UserModule?.users || {};
        const userKey =
          Object.keys(userModule).find(
            (k) => k.toLowerCase() === username.toLowerCase()
          ) || Object.keys(userModule)[0];

        if (userKey && userModule[userKey]) {
          const u = userModule[userKey];
          const s = sigi.UserModule?.stats?.[userKey] || {};
          const isPrivate = Boolean(u.secret || u.privateAccount);

          const parsedUser: TikTokUser = {
            id: u.id || u.secUid || username,
            uniqueId: u.uniqueId || username,
            nickname: u.nickname || u.uniqueId || username,
            avatar: normalizeDirectCdnUrl(
              u.avatarLarger || u.avatarMedium || u.avatarThumb || ''
            ),
            signature: u.signature || '',
            verified: Boolean(u.verified),
            secUid: u.secUid || '',
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

          const itemModule = sigi.ItemModule || {};
          const items = Object.values(itemModule);

          const result = {
            user: parsedUser,
            stats: parsedStats,
            itemList: items,
          };

          profileHtmlCache.set(username, {
            ...result,
            expiresAt: Date.now() + PROFILE_CACHE_TTL_MS,
          });
          pruneCache(profileHtmlCache);

          return result;
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

async function fetchTikwmPosts(
  username: string,
  cursor: string = '0',
  count: number = 30
): Promise<{ videos: any[]; cursor: string | null; hasMore: boolean }> {
  const cacheKey = `${username}:${cursor}:${count}`;
  const cached = postsCache.get(cacheKey);
  if (cached && cached.expiresAt > Date.now()) {
    return {
      videos: cached.videos,
      cursor: cached.cursor,
      hasMore: cached.hasMore,
    };
  }

  // Attempt 1: GET request (respecting global 1 req/sec queue)
  try {
    await waitForTikwmSlot();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const getUrl = `https://www.tikwm.com/api/user/posts?unique_id=${encodeURIComponent(
      username
    )}&count=${count}&cursor=${encodeURIComponent(cursor)}`;

    const res = await fetch(getUrl, {
      headers: API_HEADERS,
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.code === 0 && data.data) {
        const result = {
          videos: Array.isArray(data.data.videos) ? data.data.videos : [],
          cursor: data.data.cursor ? String(data.data.cursor) : null,
          hasMore: Boolean(data.data.hasMore),
        };
        if (result.videos.length > 0) {
          postsCache.set(cacheKey, {
            ...result,
            expiresAt: Date.now() + POSTS_CACHE_TTL_MS,
          });
          pruneCache(postsCache);
        }
        return result;
      }
    }
  } catch {
    // Try POST fallback after slot wait
  }

  // Attempt 2: POST fallback with @username (after respecting 1 req/sec wait)
  try {
    await waitForTikwmSlot();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const bodyParams = new URLSearchParams({
      unique_id: username.startsWith('@') ? username : `@${username}`,
      count: String(count),
      cursor: String(cursor),
    });

    const res = await fetch('https://www.tikwm.com/api/user/posts', {
      method: 'POST',
      headers: {
        ...API_HEADERS,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyParams.toString(),
      cache: 'no-store',
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.code === 0 && data.data) {
        const result = {
          videos: Array.isArray(data.data.videos) ? data.data.videos : [],
          cursor: data.data.cursor ? String(data.data.cursor) : null,
          hasMore: Boolean(data.data.hasMore),
        };
        if (result.videos.length > 0) {
          postsCache.set(cacheKey, {
            ...result,
            expiresAt: Date.now() + POSTS_CACHE_TTL_MS,
          });
          pruneCache(postsCache);
        }
        return result;
      }
    }
  } catch {
    // Fail
  }

  return { videos: [], cursor: null, hasMore: false };
}

async function fetchTikwmUserInfo(
  username: string
): Promise<{ user: TikTokUser; stats: TikTokStats } | null> {
  try {
    await waitForTikwmSlot();

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    const res = await fetch(
      `https://www.tikwm.com/api/user/info?unique_id=${encodeURIComponent(username)}`,
      {
        headers: API_HEADERS,
        cache: 'no-store',
        signal: controller.signal,
      }
    );

    clearTimeout(timeout);

    if (res.ok) {
      const data = await res.json();
      if (data && data.code === 0 && data.data) {
        const u = data.data.user || data.data;
        const s = data.data.stats || {};

        const parsedUser: TikTokUser = {
          id: u.id || u.unique_id || username,
          uniqueId: u.unique_id || username,
          nickname: u.nickname || u.unique_id || username,
          avatar: normalizeDirectCdnUrl(u.avatarLarger || u.avatarMedium || u.avatar || ''),
          signature: u.signature || '',
          verified: Boolean(u.verified),
          secUid: u.secUid || '',
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
  const modeParam = searchParams.get('mode') || 'full';

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter.' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim().toLowerCase();

  try {
    // Lightweight profile-only mode (0 TikWM API calls from server; HTML metadata only)
    if (modeParam === 'profile') {
      const scraped = await scrapeProfileHtml(cleanUser);
      if (!scraped) {
        return NextResponse.json(
          { code: -1, msg: 'Profile HTML unavailable.' },
          { status: 200 }
        );
      }

      const formattedFromHtml = Array.isArray(scraped.itemList)
        ? scraped.itemList.map((item) => parseItem(item, scraped.user))
        : [];

      return NextResponse.json(
        {
          code: 0,
          msg: 'success',
          data: {
            user: {
              id: scraped.user.id,
              unique_id: scraped.user.uniqueId,
              nickname: scraped.user.nickname,
              avatar: scraped.user.avatar,
              signature: scraped.user.signature,
              verified: scraped.user.verified,
              status: scraped.user.status,
            },
            stats: scraped.stats,
            videos: formattedFromHtml,
            cursor: null,
            hasMore: false,
          },
        },
        {
          status: 200,
          headers: {
            'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=600',
          },
        }
      );
    }

    // Pagination request (cursor > 0)
    if (cursorParam && cursorParam !== '0') {
      const postsResult = await fetchTikwmPosts(cleanUser, cursorParam, countParam);
      const dummyUser: TikTokUser = {
        id: cleanUser,
        uniqueId: cleanUser,
        nickname: cleanUser,
        avatar: '',
        signature: '',
        verified: false,
        secUid: '',
        status: 'active',
      };

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

    // Full first load: Fetch TikTok profile HTML and TikWM posts in parallel (different domains, zero collision)
    const [scraped, tikwmPosts] = await Promise.all([
      scrapeProfileHtml(cleanUser),
      fetchTikwmPosts(cleanUser, '0', countParam),
    ]);

    // Only call TikWM user/info sequentially if HTML scraping failed
    const tikwmInfo = !scraped ? await fetchTikwmUserInfo(cleanUser) : null;

    const resolvedUser: TikTokUser | null =
      scraped?.user ||
      tikwmInfo?.user ||
      (tikwmPosts.videos.length > 0 && tikwmPosts.videos[0].author
        ? {
            id: tikwmPosts.videos[0].author.id || cleanUser,
            uniqueId: tikwmPosts.videos[0].author.unique_id || cleanUser,
            nickname: tikwmPosts.videos[0].author.nickname || cleanUser,
            avatar: normalizeDirectCdnUrl(tikwmPosts.videos[0].author.avatar || ''),
            signature: '',
            verified: Boolean(tikwmPosts.videos[0].author.verified),
            secUid: '',
            status: 'active' as const,
          }
        : null);

    const resolvedStats: TikTokStats = scraped?.stats ||
      tikwmInfo?.stats || {
        followerCount: null,
        followingCount: null,
        heartCount: null,
        videoCount: tikwmPosts.videos.length,
      };

    if (!resolvedUser) {
      return NextResponse.json(
        {
          code: -1,
          msg: `TikTok profile @${cleanUser} could not be resolved or does not exist.`,
        },
        { status: 404 }
      );
    }

    if (resolvedUser.status === 'private') {
      return NextResponse.json(
        {
          code: 0,
          msg: 'User profile is private.',
          data: {
            user: {
              id: resolvedUser.id,
              unique_id: resolvedUser.uniqueId,
              nickname: resolvedUser.nickname,
              avatar: resolvedUser.avatar,
              signature: resolvedUser.signature,
              verified: resolvedUser.verified,
              status: resolvedUser.status,
            },
            stats: resolvedStats,
            videos: [],
            cursor: null,
            hasMore: false,
          },
        },
        { status: 200 }
      );
    }

    let rawItems: any[] = [];
    if (tikwmPosts.videos && tikwmPosts.videos.length > 0) {
      rawItems = tikwmPosts.videos;
    } else if (scraped?.itemList && scraped.itemList.length > 0) {
      rawItems = scraped.itemList;
    }

    const formattedVideos = rawItems.map((item) => parseItem(item, resolvedUser));

    return NextResponse.json(
      {
        code: 0,
        msg: 'success',
        data: {
          user: {
            id: resolvedUser.id,
            unique_id: resolvedUser.uniqueId,
            nickname: resolvedUser.nickname,
            avatar: resolvedUser.avatar,
            signature: resolvedUser.signature,
            verified: resolvedUser.verified,
            status: resolvedUser.status,
          },
          stats: resolvedStats,
          videos: formattedVideos,
          cursor: tikwmPosts.cursor,
          hasMore: tikwmPosts.hasMore,
        },
      },
      {
        status: 200,
        headers: {
          'Cache-Control': 'public, s-maxage=120, stale-while-revalidate=600',
        },
      }
    );
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Serverless execution error.';
    return NextResponse.json({ code: -1, msg: message }, { status: 500 });
  }
}
