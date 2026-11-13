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

const TIKWM_HEADERS: Record<string, string> = {
  'User-Agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36',
  Accept: 'application/json, text/javascript, */*; q=0.01',
  'Accept-Language': 'en-US,en;q=0.9',
  Origin: 'https://www.tikwm.com',
  Referer: 'https://www.tikwm.com/',
  Cookie: 'current_language=en',
};

function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

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
  }
  return '';
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
      extractUrlField(v.downloadAddr) ||
      bitratePlayAddr
  );

  const directVideoWm = normalizeDirectCdnUrl(
    asStr(item.wmplay) ||
      extractUrlField(v.downloadAddr) ||
      extractUrlField(v.playAddr) ||
      directVideoPlay
  );

  const directAudioPlay = normalizeDirectCdnUrl(
    asStr(m.play) || asStr(item.music) || asStr(m.playUrl) || asStr(m.url)
  );

  const zoomCover = asObj(v.zoomCover);
  const coverUrl = normalizeDirectCdnUrl(
    asStr(item.cover) ||
      asStr(item.origin_cover) ||
      asStr(v.cover) ||
      asStr(v.originCover) ||
      asStr(v.dynamicCover) ||
      asStr(zoomCover['480']) ||
      asStr(zoomCover['720'])
  );

  const originCoverUrl = normalizeDirectCdnUrl(
    asStr(item.origin_cover) || asStr(item.cover) || asStr(v.originCover) || asStr(v.cover) || coverUrl
  );

  const videoId = asStr(item.video_id) || asStr(item.id) || asStr(v.id);

  const authorUniqueId = asStr(itemAuthor.unique_id || itemAuthor.uniqueId, user.uniqueId) || user.uniqueId;
  const authorNickname = asStr(itemAuthor.nickname, user.nickname) || user.nickname;
  const authorAvatar = normalizeDirectCdnUrl(asStr(itemAuthor.avatar)) || user.avatar;

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
        const data = JSON.parse(rehydrationMatch[1]) as JsonRecord;
        const defaultScope = asObj(data['__DEFAULT_SCOPE__']);
        const userDetail = asObj(defaultScope['webapp.user-detail']);
        const userInfo = asObj(userDetail.userInfo);

        if (userInfo.user) {
          const u = asObj(userInfo.user);
          const s = asObj(userInfo.stats);
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

          const videoDetail = asObj(defaultScope['webapp.video-detail']);
          const items = userDetail.itemList || videoDetail.itemList || [];
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
  cursor = '0',
  count = 30,
  userId?: string
): Promise<{ videos: unknown[]; cursor: string | null; hasMore: boolean }> {
  const paramSets: Array<Record<string, string>> = [
    { unique_id: username, count: String(count), cursor: String(cursor) },
  ];
  if (userId && /^\d+$/.test(userId)) {
    paramSets.push({ user_id: userId, count: String(count), cursor: String(cursor) });
  }

  for (const params of paramSets) {
    // Try POST first (official TikWM web client method)
    for (let attempt = 0; attempt < 2; attempt++) {
      try {
        const controller = new AbortController();
        const timeout = setTimeout(() => controller.abort(), 8500);

        const res = await fetch('https://www.tikwm.com/api/user/posts', {
          method: 'POST',
          headers: {
            ...TIKWM_HEADERS,
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          },
          body: new URLSearchParams(params).toString(),
          cache: 'no-store',
          signal: controller.signal,
        });

        clearTimeout(timeout);

        if (res.ok) {
          const text = await res.text();
          if (text.trim().startsWith('{')) {
            const data = JSON.parse(text) as JsonRecord;
            if (data && data.code === 0 && data.data) {
              const payload = asObj(data.data);
              const videos = Array.isArray(payload.videos) ? payload.videos : [];
              if (videos.length > 0) {
                return {
                  videos,
                  cursor: payload.cursor ? asStr(payload.cursor) : null,
                  hasMore: Boolean(payload.hasMore && payload.cursor),
                };
              }
            }
            const msg = asStr(data?.msg).toLowerCase();
            if (attempt === 0 && (data?.code === -1 || msg.includes('limit') || msg.includes('second'))) {
              await sleep(1150);
              continue;
            }
          }
        }
      } catch {
        if (attempt === 0) {
          await sleep(400);
          continue;
        }
      }
      break;
    }

    // Try GET fallback
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const getUrl = `https://www.tikwm.com/api/user/posts?${new URLSearchParams(params).toString()}`;

      const res = await fetch(getUrl, {
        headers: TIKWM_HEADERS,
        cache: 'no-store',
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (res.ok) {
        const text = await res.text();
        if (text.trim().startsWith('{')) {
          const data = JSON.parse(text) as JsonRecord;
          if (data && data.code === 0 && data.data) {
            const payload = asObj(data.data);
            const videos = Array.isArray(payload.videos) ? payload.videos : [];
            if (videos.length > 0) {
              return {
                videos,
                cursor: payload.cursor ? asStr(payload.cursor) : null,
                hasMore: Boolean(payload.hasMore && payload.cursor),
              };
            }
          }
        }
      }
    } catch {
      // Continue
    }
  }

  // Last server-side fallback for page 1: search feed filtered to this creator
  if (cursor === '0') {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);
      const searchBody = new URLSearchParams({
        keywords: username,
        count: '35',
        cursor: '0',
        HD: '1',
      });

      const res = await fetch('https://www.tikwm.com/api/feed/search', {
        method: 'POST',
        headers: {
          ...TIKWM_HEADERS,
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        },
        body: searchBody.toString(),
        cache: 'no-store',
        signal: controller.signal,
      });

      clearTimeout(timeout);

      if (res.ok) {
        const text = await res.text();
        if (text.trim().startsWith('{')) {
          const data = JSON.parse(text) as JsonRecord;
          if (data && data.code === 0 && data.data) {
            const payload = asObj(data.data);
            const allVideos = Array.isArray(payload.videos) ? payload.videos : [];
            const filtered = allVideos.filter((v) => {
              const author = asObj(asObj(v).author);
              return asStr(author.unique_id).toLowerCase() === username.toLowerCase();
            });
            if (filtered.length > 0) {
              return {
                videos: filtered,
                cursor: null,
                hasMore: false,
              };
            }
          }
        }
      }
    } catch {
      // Fail
    }
  }

  return { videos: [], cursor: null, hasMore: false };
}

async function fetchTikwmUserInfo(
  username: string
): Promise<{ user: TikTokUser; stats: TikTokStats } | null> {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const res = await fetch(
        `https://www.tikwm.com/api/user/info?unique_id=${encodeURIComponent(username)}`,
        {
          headers: TIKWM_HEADERS,
          cache: 'no-store',
          signal: controller.signal,
        }
      );

      clearTimeout(timeout);

      if (res.ok) {
        const text = await res.text();
        if (text.trim().startsWith('{')) {
          const data = JSON.parse(text) as JsonRecord;
          if (data && data.code === 0 && data.data) {
            const payload = asObj(data.data);
            const u = asObj(payload.user || payload);
            const s = asObj(payload.stats);

            const parsedUser: TikTokUser = {
              id: asStr(u.id || u.unique_id, username),
              uniqueId: asStr(u.unique_id, username),
              nickname: asStr(u.nickname || u.unique_id, username),
              avatar: normalizeDirectCdnUrl(asStr(u.avatarLarger) || asStr(u.avatarMedium) || asStr(u.avatar)),
              signature: asStr(u.signature),
              verified: Boolean(u.verified),
              secUid: asStr(u.secUid),
              status: u.secret || u.privateAccount ? 'private' : 'active',
            };

            const parsedStats: TikTokStats = {
              followerCount:
                s.followerCount !== undefined
                  ? asNum(s.followerCount)
                  : u.follower_count !== undefined
                  ? asNum(u.follower_count)
                  : null,
              followingCount:
                s.followingCount !== undefined
                  ? asNum(s.followingCount)
                  : u.following_count !== undefined
                  ? asNum(u.following_count)
                  : null,
              heartCount:
                s.heartCount !== undefined
                  ? asNum(s.heartCount)
                  : u.total_favorited !== undefined
                  ? asNum(u.total_favorited)
                  : null,
              videoCount: asNum(s.videoCount || u.aweme_count),
            };

            return { user: parsedUser, stats: parsedStats };
          }
          const msg = asStr(data?.msg).toLowerCase();
          if (attempt === 0 && (data?.code === -1 || msg.includes('limit') || msg.includes('second'))) {
            await sleep(1150);
            continue;
          }
        }
      }
    } catch {
      if (attempt === 0) {
        await sleep(500);
        continue;
      }
    }
  }
  return null;
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');
  const cursorParam = searchParams.get('cursor') || '0';
  const infoOnly = searchParams.get('infoOnly') === '1';
  const countParam = Math.min(35, Math.max(1, parseInt(searchParams.get('count') || '30', 10)));

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter.' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim().toLowerCase();

  try {
    // Fast metadata-only lookup (called by browser alongside direct client TikWM posts fetch)
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

    // Pagination fallback
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

    // Full server fallback: scrape SSR metadata first so we also have numeric user_id if needed
    const scraped = await scrapeProfileHtml(cleanUser);
    const scrapedUserId = scraped?.user?.id;
    const tikwmPosts =
      scraped?.user?.status === 'private'
        ? { videos: [], cursor: null, hasMore: false }
        : await fetchTikwmPosts(cleanUser, '0', countParam, scrapedUserId);

    let tikwmInfo: { user: TikTokUser; stats: TikTokStats } | null = null;
    if (!scraped) {
      await sleep(1150);
      tikwmInfo = await fetchTikwmUserInfo(cleanUser);
    }

    const firstVideoObj = asObj(tikwmPosts.videos[0]);
    const firstVideoAuthor = asObj(firstVideoObj.author);

    const resolvedUser: TikTokUser | null =
      scraped?.user ||
      tikwmInfo?.user ||
      (tikwmPosts.videos.length > 0 && firstVideoObj.author
        ? {
            id: asStr(firstVideoAuthor.id, cleanUser),
            uniqueId: asStr(firstVideoAuthor.unique_id, cleanUser),
            nickname: asStr(firstVideoAuthor.nickname, cleanUser),
            avatar: normalizeDirectCdnUrl(asStr(firstVideoAuthor.avatar)),
            signature: '',
            verified: Boolean(firstVideoAuthor.verified),
            secUid: '',
            status: 'active',
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

    const formattedUser = {
      id: resolvedUser.id,
      unique_id: resolvedUser.uniqueId,
      nickname: resolvedUser.nickname,
      avatar: resolvedUser.avatar,
      signature: resolvedUser.signature,
      verified: resolvedUser.verified,
      status: resolvedUser.status,
    };

    if (resolvedUser.status === 'private') {
      return NextResponse.json(
        {
          code: 0,
          msg: 'User profile is private.',
          data: {
            user: formattedUser,
            stats: resolvedStats,
            videos: [],
            cursor: null,
            hasMore: false,
          },
        },
        { status: 200 }
      );
    }

    let rawItems: unknown[] = [];
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
          user: formattedUser,
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
