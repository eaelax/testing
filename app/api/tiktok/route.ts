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
  return url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/');
}

function parseItem(item: any, user: TikTokUser): VideoOutput {
  const v = item.video || {};
  const s = item.stats || item.statsV2 || {};
  const m = item.music || item.music_info || {};

  const directVideoPlay = normalizeDirectCdnUrl(
    item.play || item.hdplay || v.playAddr || v.downloadAddr || v.bitrateInfo?.[0]?.PlayAddr?.UrlList?.[0] || ''
  );
  const directVideoWm = normalizeDirectCdnUrl(
    item.wmplay || v.downloadAddr || v.playAddr || directVideoPlay
  );
  const directAudioPlay = normalizeDirectCdnUrl(
    item.music || m.playUrl || m.play || m.url || ''
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
      author: m.authorName || m.author || user.nickname,
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
      id: user.secUid || user.id,
      unique_id: user.uniqueId,
      nickname: user.nickname,
      avatar: user.avatar,
      signature: user.signature,
      verified: user.verified,
    },
  };
}

async function scrapeProfileHtml(username: string): Promise<{
  user: TikTokUser;
  stats: TikTokStats;
  itemList: any[];
} | null> {
  const profileUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}`;

  try {
    const res = await fetch(profileUrl, {
      headers: DESKTOP_BROWSER_HEADERS,
      cache: 'no-store',
    });

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
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 9000);

    // Primary: GET request
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
        return {
          videos: Array.isArray(data.data.videos) ? data.data.videos : [],
          cursor: data.data.cursor ? String(data.data.cursor) : null,
          hasMore: Boolean(data.data.hasMore),
        };
      }
    }
  } catch {
    // Try POST fallback
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const bodyParams = new URLSearchParams({
      unique_id: username,
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
        return {
          videos: Array.isArray(data.data.videos) ? data.data.videos : [],
          cursor: data.data.cursor ? String(data.data.cursor) : null,
          hasMore: Boolean(data.data.hasMore),
        };
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
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

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

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter.' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim().toLowerCase();

  try {
    // If this is pagination (cursor > 0), only fetch the next video batch
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

    // First load: Fetch profile details and videos in parallel
    const [scraped, tikwmPosts, tikwmInfo] = await Promise.all([
      scrapeProfileHtml(cleanUser),
      fetchTikwmPosts(cleanUser, '0', countParam),
      fetchTikwmUserInfo(cleanUser),
    ]);

    // Determine resolved user and stats
    const resolvedUser =
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

    const resolvedStats = scraped?.stats ||
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

    // Combine video items: prioritize TikWM posts with clean direct streams, fallback to scraped
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
          user: resolvedUser,
          stats: resolvedStats,
          videos: formattedVideos,
          cursor: tikwmPosts.cursor,
          hasMore: tikwmPosts.hasMore,
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