/**
 * Zero-bandwidth client-side media and API controller.
 * Direct CDN streaming and direct client-side downloads using 'no-referrer' handling,
 * with automatic proxy fallback only when CDN tokens require session cookies.
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

export function requiresSessionProxy(cdnUrl: string): boolean {
  if (!cdnUrl) return false;
  return (
    cdnUrl.includes('tk=tt_chain_token') ||
    cdnUrl.includes('webapp-prime.tiktok.com')
  );
}

export function buildProxyUrl(
  targetUrl: string,
  username?: string,
  filename?: string,
  isDownload?: boolean
): string {
  const params = new URLSearchParams({ url: targetUrl });
  if (username) params.set('user', username);
  if (filename) params.set('filename', filename);
  if (isDownload) params.set('download', '1');
  return `/api/proxy?${params.toString()}`;
}

/**
 * Fetch profile data from the cached serverless endpoint.
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
 * Resolves a direct watermark-free CDN URL on demand when user watches or downloads.
 */
export async function resolvePlayableMedia(
  videoId: string,
  username: string
): Promise<{ play: string; wmplay: string; music: string } | null> {
  if (!videoId) return null;
  try {
    const res = await fetch(
      `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(username)}`
    );
    if (!res.ok) return null;
    const data = (await res.json()) as {
      success?: boolean;
      play?: string;
      wmplay?: string;
      music?: string;
    };
    if (data?.success && (data.play || data.wmplay || data.music)) {
      return {
        play: data.play || '',
        wmplay: data.wmplay || '',
        music: data.music || '',
      };
    }
  } catch {
    // Fall back to already-fetched stream URLs
  }
  return null;
}

function triggerBrowserAnchorDownload(href: string, filename: string, openBlank = false): void {
  const link = document.createElement('a');
  link.style.display = 'none';
  link.href = href;
  link.download = filename;
  if (openBlank) {
    link.target = '_blank';
  }
  link.rel = 'noreferrer noopener';
  link.setAttribute('referrerpolicy', 'no-referrer');
  document.body.appendChild(link);
  link.click();
  setTimeout(() => {
    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }
  }, 1500);
}

/**
 * Executes direct client-side download from CDN without routing bytes through the server
 * whenever possible, falling back to the session proxy only when CDN tokens block direct access.
 */
export async function executeDirectCdnDownload(
  cdnUrl: string,
  filename: string,
  fallbackProxyUrl?: string
): Promise<void> {
  if (!cdnUrl && !fallbackProxyUrl) {
    throw new Error('Media URL is unavailable for download.');
  }

  // If the URL explicitly requires TikTok's session cookie (tt_chain_token), use proxy directly
  if (cdnUrl && requiresSessionProxy(cdnUrl) && fallbackProxyUrl) {
    triggerBrowserAnchorDownload(fallbackProxyUrl, filename, false);
    return;
  }

  // Attempt 1: In-browser direct fetch using 'no-referrer' (0 server bandwidth)
  if (cdnUrl) {
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
        triggerBrowserAnchorDownload(objectUrl, filename, false);
        setTimeout(() => {
          window.URL.revokeObjectURL(objectUrl);
        }, 2000);
        return;
      }
    } catch {
      // Browser CORS blocked Blob fetch; try proxy attachment if available or direct anchor
    }
  }

  // Attempt 2: Proxy attachment download if provided (ensures Content-Disposition: attachment)
  if (fallbackProxyUrl) {
    triggerBrowserAnchorDownload(fallbackProxyUrl, filename, false);
    return;
  }

  // Attempt 3: Direct anchor trigger with no-referrer
  triggerBrowserAnchorDownload(cdnUrl, filename, true);
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
