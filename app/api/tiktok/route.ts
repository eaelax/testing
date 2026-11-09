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

function normalizeDirectCdnUrl(url?: string): string {
  if (!url) return '';
  return url.replace(/\\u0026/g, '&').replace(/\\u002F/g, '/');
}

function parseItem(item: any, user: TikTokUser): VideoOutput {
  const v = item.video || {};
  const s = item.stats || item.statsV2 || {};
  const m = item.music || {};

  const directVideoPlay = normalizeDirectCdnUrl(
    v.playAddr || v.downloadAddr || v.bitrateInfo?.[0]?.PlayAddr?.UrlList?.[0] || item.play || ''
  );
  const directVideoWm = normalizeDirectCdnUrl(
    v.downloadAddr || v.playAddr || item.wmplay || directVideoPlay
  );
  const directAudioPlay = normalizeDirectCdnUrl(m.playUrl || m.url || item.music || '');

  return {
    video_id: String(item.id || item.video_id || ''),
    id: String(item.id || item.video_id || ''),
    title: item.desc || item.title || '',
    duration: Number(v.duration || item.duration || 0),
    cover: normalizeDirectCdnUrl(v.cover || v.originCover || v.dynamicCover || item.cover || ''),
    origin_cover: normalizeDirectCdnUrl(v.originCover || v.cover || item.origin_cover || ''),
    play: directVideoPlay,
    wmplay: directVideoWm,
    music: directAudioPlay,
    music_info: {
      id: String(m.id || ''),
      title: m.title || m.album || 'Original Sound',
      author: m.authorName || m.author || user.nickname,
      play: directAudioPlay,
      cover: normalizeDirectCdnUrl(m.coverLarge || m.coverMedium || m.coverThumb || ''),
    },
    play_count: Number(s.playCount || item.play_count || 0),
    digg_count: Number(s.diggCount || item.digg_count || 0),
    comment_count: Number(s.commentCount || item.comment_count || 0),
    share_count: Number(s.shareCount || item.share_count || 0),
    download_count: Number(s.collectCount || item.download_count || 0),
    create_time: Number(item.createTime || item.create_time || 0),
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

        const items = userDetail.itemList || defaultScope['webapp.video-detail']?.itemList || [];
        return {
          user: parsedUser,
          stats: parsedStats,
          itemList: Array.isArray(items) ? items : [],
        };
      }
    } catch {
      // Fall through to SIGI_STATE
    }
  }

  // Pattern 2: SIGI_STATE
  const sigiMatch = html.match(/<script id="SIGI_STATE"[^>]*>([\s\S]*?)<\/script>/);
  if (sigiMatch && sigiMatch[1]) {
    try {
      const sigi = JSON.parse(sigiMatch[1]);
      const userModule = sigi.UserModule?.users || {};
      const userKey = Object.keys(userModule).find(
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

  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter.' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim().toLowerCase();

  try {
    const scraped = await scrapeProfileHtml(cleanUser);

    if (!scraped) {
      return NextResponse.json(
        {
          code: -1,
          msg: `TikTok profile @${cleanUser} could not be resolved or does not exist.`,
        },
        { status: 404 }
      );
    }

    const { user, stats, itemList } = scraped;

    if (user.status === 'private') {
      return NextResponse.json(
        {
          code: 0,
          msg: 'User profile is private.',
          data: {
            user,
            stats,
            videos: [],
            cursor: null,
            hasMore: false,
          },
        },
        { status: 200 }
      );
    }

    const formattedVideos = itemList.map((item) => parseItem(item, user));

    return NextResponse.json(
      {
        code: 0,
        msg: 'success',
        data: {
          user,
          stats,
          videos: formattedVideos,
          cursor: null,
          hasMore: false,
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
    const message = err instanceof Error ? err.message : 'Serverless scrape execution error.';
    return NextResponse.json({ code: -1, msg: message }, { status: 500 });
  }
}