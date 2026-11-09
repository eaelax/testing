/**
 * Zero-bandwidth client-side media and API controller.
 * Direct CDN streaming and direct client-side downloads using 'no-referrer' handling.
 */

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
    videos: Array<{
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
    }>;
    cursor: string | null;
    hasMore: boolean;
  };
}

export function sanitizeUsername(rawInput: string): string {
  let cleaned = (rawInput || '').trim();
  const urlMatch = cleaned.match(/tiktok\.com\/@?([a-zA-Z0-9._]+)/);
  if (urlMatch && urlMatch[1]) {
    cleaned = urlMatch[1];
  }
  return cleaned.replace(/^@+/, '').trim().toLowerCase();
}

/**
 * Fetch profile data directly from the zero-bandwidth serverless endpoint.
 */
export async function fetchProfileDirect(username: string): Promise<TikTokProfileApiResponse> {
  const clean = sanitizeUsername(username);
  if (!clean) {
    throw new Error('Please enter a valid TikTok username.');
  }

  const response = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
    },
    cache: 'no-store',
  });

  const json: TikTokProfileApiResponse = await response.json();
  return json;
}

/**
 * Executes 100% direct client-side download from CDN without routing bytes through the server.
 * Uses no-referrer policies to avoid hotlink blocks and triggers native browser save.
 */
export async function executeDirectCdnDownload(cdnUrl: string, filename: string): Promise<void> {
  if (!cdnUrl) {
    throw new Error('Media URL is unavailable for download.');
  }

  // Attempt 1: In-browser direct fetch using 'no-referrer' to bypass CDN referrer verification
  try {
    const res = await fetch(cdnUrl, {
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
  directLink.href = cdnUrl;
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
  videoElement.src = directCdnUrl;
  videoElement.preload = 'metadata';
}