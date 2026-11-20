'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import {
  Search,
  Download,
  Play,
  Heart,
  Share2,
  X,
  Loader2,
  AlertCircle,
  Music,
  CheckCircle2,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
  Film,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import DownloadCounterModal from './DownloadCounterModal';
import AdSlot from './AdSlot';
import {
  MotionFadeIn,
  MotionModalBackdrop,
  MotionModalPanel,
} from './MotionPrimitives';
import {
  fetchProfileDirect,
  fetchMoreVideosDirect,
  resolveVideoStreamDirect,
  sanitizeUsername,
} from '@/lib/tiktok-client';

export interface Author {
  unique_id: string;
  nickname: string;
  avatar: string;
  secUid?: string;
  signature?: string;
  verified?: boolean;
  status?: 'active' | 'private' | 'not_found';
}

export interface TikTokVideo {
  video_id?: string;
  id?: string;
  title: string;
  cover: string;
  origin_cover?: string;
  play?: string;
  wmplay?: string;
  music?: string;
  music_info?: {
    id?: string;
    title?: string;
    play?: string;
    author?: string;
  };
  play_count?: number;
  digg_count?: number;
  comment_count?: number;
  share_count?: number;
  download_count?: number;
  duration?: number;
  create_time?: number;
  author?: Author;
}

export interface ProfileStats {
  followerCount: number | null;
  followingCount: number | null;
  heartCount: number | null;
  videoCount: number | null;
}

const FEATURED_SUGGESTIONS = [
  { username: 'khaby.lame', name: 'Khaby Lame' },
  { username: 'charlidamelio', name: "Charli D'Amelio" },
  { username: 'mrbeast', name: 'MrBeast' },
  { username: 'zachking', name: 'Zach King' },
];

function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined) return '0';
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 10_000) {
    return Math.round(num / 1_000) + 'K';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return String(num);
}

function formatDuration(seconds?: number): string {
  if (!seconds) return '';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function isTikTokCookieCdn(url: string): boolean {
  return /tiktok\.com|tiktokv\.com|tiktokcdn/i.test(url);
}

interface TikTokProfileViewerProps {
  initialUsername?: string;
  autoSearch?: boolean;
  title?: string;
  subtitle?: string;
  heroVariant?: 'default' | 'workbench';
  children?: React.ReactNode;
}

export default function TikTokProfileViewer({
  initialUsername = '',
  autoSearch = false,
  title,
  subtitle,
  heroVariant = 'default',
  children,
}: TikTokProfileViewerProps) {
  const [usernameInput, setUsernameInput] = useState(initialUsername);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const [authorProfile, setAuthorProfile] = useState<Author | null>(null);
  const [profileStats, setProfileStats] = useState<ProfileStats | null>(null);
  const [videos, setVideos] = useState<TikTokVideo[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  const [selectedVideo, setSelectedVideo] = useState<TikTokVideo | null>(null);
  const [activePlayUrl, setActivePlayUrl] = useState<string>('');
  const [videoResolving, setVideoResolving] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [downloadingVideo, setDownloadingVideo] = useState(false);
  const [downloadingAudio, setDownloadingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);
  const [highlightedVideoKey, setHighlightedVideoKey] = useState<string | null>(null);

  const [counterModalOpen, setCounterModalOpen] = useState(false);
  const [counterModalData, setCounterModalData] = useState<{
    url: string;
    filename: string;
    mediaType: 'video' | 'audio' | 'avatar';
    title?: string;
  }>({
    url: '',
    filename: '',
    mediaType: 'video',
    title: '',
  });

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const playbackFallbackStepRef = useRef<number>(0);
  const activeModalIdRef = useRef<string>('');
  const activeCardKeyRef = useRef<string>('');
  const lastDownloadedKeyRef = useRef<string>('');
  const videoCardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const hasActiveResult = Boolean(authorProfile || videos.length > 0 || loading);

  const handleCopyProfileLink = () => {
    if (typeof window !== 'undefined' && authorProfile) {
      navigator.clipboard.writeText(`https://tikprofilesviewer.com/profile/${authorProfile.unique_id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadAvatar = () => {
    if (!authorProfile) return;
    lastDownloadedKeyRef.current = '';
    const avatarUrl =
      authorProfile.avatar || `/api/avatar?username=${encodeURIComponent(authorProfile.unique_id)}`;
    const filename = `${authorProfile.unique_id}-avatar.jpg`;
    setCounterModalData({
      url: avatarUrl,
      filename,
      mediaType: 'avatar',
      title: `@${authorProfile.unique_id} Profile Photo`,
    });
    setCounterModalOpen(true);
  };

  const closeModal = useCallback(() => {
    activeModalIdRef.current = '';
    setSelectedVideo(null);
    setActivePlayUrl('');
    setVideoResolving(false);
    setIsVideoPlaying(false);
    setDownloadingVideo(false);
    setDownloadingAudio(false);
    playbackFallbackStepRef.current = 0;
  }, []);

  const handleResetHome = useCallback(() => {
    closeModal();
    setCounterModalOpen(false);
    setUsernameInput('');
    setLoading(false);
    setLoadingMore(false);
    setErrorMsg(null);
    setAuthorProfile(null);
    setProfileStats(null);
    setVideos([]);
    setNextCursor(null);
    setHasMore(false);
    setHighlightedVideoKey(null);
    lastDownloadedKeyRef.current = '';
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [closeModal]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    window.addEventListener('tpv:reset-home', handleResetHome);
    return () => {
      window.removeEventListener('tpv:reset-home', handleResetHome);
    };
  }, [handleResetHome]);

  const handleCloseCounterModal = useCallback(() => {
    setCounterModalOpen(false);
    closeModal();

    const targetKey = lastDownloadedKeyRef.current;
    if (targetKey) {
      setHighlightedVideoKey(targetKey);
      setTimeout(() => {
        setHighlightedVideoKey((prev) => (prev === targetKey ? null : prev));
      }, 1800);

      requestAnimationFrame(() => {
        setTimeout(() => {
          const cardEl = videoCardRefs.current.get(targetKey);
          if (cardEl) {
            const rect = cardEl.getBoundingClientRect();
            const targetTop =
              window.scrollY + rect.top - Math.max(84, (window.innerHeight - rect.height) / 2);
            window.scrollTo({
              top: Math.max(0, targetTop),
              behavior: 'smooth',
            });
          }
        }, 50);
      });
    }
  }, [closeModal]);

  useEffect(() => {
    if (selectedVideo || counterModalOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
      if (modalVideoRef.current) {
        modalVideoRef.current.setAttribute('referrerpolicy', 'no-referrer');
      }
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedVideo, counterModalOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (counterModalOpen) {
          handleCloseCounterModal();
        } else if (selectedVideo) {
          closeModal();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, counterModalOpen, closeModal, handleCloseCounterModal]);

  const handleSearch = useCallback(
    async (usernameToSearch?: string) => {
      const targetUser = sanitizeUsername(usernameToSearch !== undefined ? usernameToSearch : usernameInput);
      if (!targetUser) {
        setErrorMsg('Please enter a TikTok username.');
        return;
      }

      setLoading(true);
      setErrorMsg(null);
      setNextCursor(null);
      setHasMore(false);

      try {
        const result = await fetchProfileDirect(targetUser);

        if (!result || result.code !== 0 || !result.data) {
          const errorText = result?.msg || `User @${targetUser} was not found or is private.`;
          setErrorMsg(errorText);
          setAuthorProfile(null);
          setProfileStats(null);
          setVideos([]);
          return;
        }

        const postVideos: TikTokVideo[] = result.data.videos || [];
        const userObj = result.data.user;
        const statsObj = result.data.stats;

        const authorInfo: Author = {
          unique_id: userObj?.unique_id || targetUser,
          nickname: userObj?.nickname || targetUser,
          avatar: userObj?.avatar || '',
          secUid: userObj?.secUid || '',
          signature: userObj?.signature || '',
          verified: Boolean(userObj?.verified),
          status: userObj?.status || 'active',
        };

        const stats: ProfileStats = {
          followerCount: statsObj?.followerCount ?? null,
          followingCount: statsObj?.followingCount ?? null,
          heartCount: statsObj?.heartCount ?? null,
          videoCount: statsObj?.videoCount ?? postVideos.length,
        };

        if (stats.heartCount === null && postVideos.length > 0) {
          stats.heartCount = postVideos.reduce((acc, v) => acc + (Number(v.digg_count) || 0), 0);
        }

        setAuthorProfile(authorInfo);
        setProfileStats(stats);
        setVideos(postVideos);
        setNextCursor(result.data.cursor || null);
        setHasMore(Boolean(result.data.hasMore && result.data.cursor));

        if (authorInfo.status === 'private') {
          setErrorMsg(`@${targetUser} is a private TikTok account.`);
        } else if (postVideos.length === 0) {
          setErrorMsg(`@${targetUser} has no public videos available or the feed is temporarily unavailable.`);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Failed to retrieve profile data.';
        setErrorMsg(msg);
        setAuthorProfile(null);
        setProfileStats(null);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    },
    [usernameInput]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onHeaderSearch = (event: Event) => {
      const customEvent = event as CustomEvent<{ username?: string }>;
      const target = customEvent.detail?.username;
      if (target) {
        setUsernameInput(target);
        void handleSearch(target);
      }
    };
    window.addEventListener('tpv:search-username', onHeaderSearch);
    return () => {
      window.removeEventListener('tpv:search-username', onHeaderSearch);
    };
  }, [handleSearch]);

  const searchedRef = useRef(false);
  useEffect(() => {
    if (autoSearch && initialUsername && !searchedRef.current) {
      searchedRef.current = true;
      const timer = setTimeout(() => {
        void handleSearch(initialUsername);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [autoSearch, initialUsername, handleSearch]);

  const handleShowMoreVideos = async () => {
    if (!authorProfile?.unique_id || !nextCursor || loadingMore) return;
    setLoadingMore(true);

    try {
      const batch = await fetchMoreVideosDirect(
        authorProfile.unique_id,
        nextCursor,
        15,
        authorProfile.secUid || ''
      );

      if (batch.videos.length > 0) {
        setVideos((prev) => {
          const seen = new Set(prev.map((v) => v.id || v.video_id));
          const appended = [...prev];
          for (const item of batch.videos) {
            const key = item.id || item.video_id;
            if (!seen.has(key)) {
              appended.push(item);
              seen.add(key);
            }
          }
          return appended;
        });

        setNextCursor(batch.cursor);
        setHasMore(batch.hasMore);
      } else {
        setHasMore(false);
      }
    } catch {
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  const openModal = async (video: TikTokVideo, cardKey: string) => {
    const videoId = String(video.video_id || video.id || '');
    const authorUser = video.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    activeModalIdRef.current = videoId;
    activeCardKeyRef.current = cardKey;
    playbackFallbackStepRef.current = 0;

    setIsVideoPlaying(false);
    setSelectedVideo(video);
    const existingUrl = video.play || video.wmplay || '';

    if (!existingUrl || isTikTokCookieCdn(existingUrl)) {
      setActivePlayUrl('');
      setVideoResolving(true);

      const resolved = await resolveVideoStreamDirect(videoId, authorUser);
      if (activeModalIdRef.current !== videoId) return;

      if (resolved?.play) {
        const finalStream = resolved.needsProxy
          ? `/api/proxy?url=${encodeURIComponent(resolved.play)}`
          : resolved.play;

        setActivePlayUrl(finalStream);
        setSelectedVideo((prev) =>
          prev
            ? {
                ...prev,
                play: resolved.play,
                wmplay: resolved.wmplay || prev.wmplay,
                music: resolved.music || prev.music,
                music_info: {
                  ...prev.music_info,
                  play: resolved.music || prev.music_info?.play,
                },
              }
            : prev
        );
      } else if (existingUrl) {
        setActivePlayUrl(`/api/proxy?url=${encodeURIComponent(existingUrl)}`);
      }
      setVideoResolving(false);
    } else {
      setActivePlayUrl(existingUrl);
      setVideoResolving(false);
    }

    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.setAttribute('referrerpolicy', 'no-referrer');
        modalVideoRef.current.load();
        modalVideoRef.current.play().catch(() => {
          setIsVideoPlaying(false);
        });
      }
    }, 40);
  };

  const handleCustomPlayClick = () => {
    if (!modalVideoRef.current) return;
    modalVideoRef.current.play().catch(() => {});
  };

  const handleVideoPlayError = async () => {
    if (!selectedVideo) return;
    setIsVideoPlaying(false);
    const step = playbackFallbackStepRef.current;
    const videoId = String(selectedVideo.video_id || selectedVideo.id || '');
    const authorUser = selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';

    if (step === 0) {
      playbackFallbackStepRef.current = 1;
      setVideoResolving(true);
      const resolved = await resolveVideoStreamDirect(videoId, authorUser);
      setVideoResolving(false);
      if (activeModalIdRef.current !== videoId) return;

      const candidate = resolved?.play || resolved?.wmplay || selectedVideo.wmplay || '';
      if (candidate && candidate !== activePlayUrl) {
        setActivePlayUrl(
          resolved?.needsProxy ? `/api/proxy?url=${encodeURIComponent(candidate)}` : candidate
        );
        return;
      }
    }

    if (step <= 1 && activePlayUrl && !activePlayUrl.startsWith('/api/proxy')) {
      playbackFallbackStepRef.current = 2;
      const rawUrl = selectedVideo.play || selectedVideo.wmplay || activePlayUrl;
      if (rawUrl) {
        setActivePlayUrl(`/api/proxy?url=${encodeURIComponent(rawUrl)}`);
      }
    }
  };

  const handleDownloadVideo = async () => {
    if (!selectedVideo || downloadingVideo) return;
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setDownloadingVideo(true);

    const authorUser = selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    const videoId = String(selectedVideo.video_id || selectedVideo.id || Date.now());
    const filename = `${authorUser}-${videoId}.mp4`;

    let directVideoUrl = selectedVideo.play || selectedVideo.wmplay || '';
    if (!directVideoUrl || isTikTokCookieCdn(directVideoUrl)) {
      const resolved = await resolveVideoStreamDirect(videoId, authorUser);
      if (resolved?.play) {
        directVideoUrl = resolved.play;
      }
    }

    if (directVideoUrl) {
      lastDownloadedKeyRef.current =
        activeCardKeyRef.current || String(selectedVideo.video_id || selectedVideo.id || '');
      setCounterModalData({
        url: directVideoUrl,
        filename,
        mediaType: 'video',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      alert('Direct video stream URL is unavailable right now. Please try another video.');
    }

    setDownloadingVideo(false);
  };

  const handleDownloadAudio = async () => {
    if (!selectedVideo || downloadingAudio) return;
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setDownloadingAudio(true);

    const authorUser = selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    const videoId = String(selectedVideo.video_id || selectedVideo.id || Date.now());
    const filename = `${authorUser}-${videoId}.mp3`;

    let directAudioUrl = selectedVideo.music_info?.play || selectedVideo.music || '';
    if (!directAudioUrl) {
      const resolved = await resolveVideoStreamDirect(videoId, authorUser);
      directAudioUrl = resolved?.music || '';
    }

    if (directAudioUrl) {
      lastDownloadedKeyRef.current =
        activeCardKeyRef.current || String(selectedVideo.video_id || selectedVideo.id || '');
      setCounterModalData({
        url: directAudioUrl,
        filename,
        mediaType: 'audio',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      alert('Direct audio stream URL is unavailable for this video.');
    }

    setDownloadingAudio(false);
  };

  const modalAuthorUser = selectedVideo?.author?.unique_id || authorProfile?.unique_id || 'creator';
  const modalAuthorAvatar =
    selectedVideo?.author?.avatar ||
    authorProfile?.avatar ||
    `/api/avatar?username=${encodeURIComponent(modalAuthorUser)}`;

  const renderSearchForm = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void handleSearch();
      }}
      className="relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl sm:rounded-full p-1.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] focus-within:bg-[var(--surface-elevated)] focus-within:border-[var(--accent-dark)] focus-within:ring-4 focus-within:ring-[var(--pastel-blue)]/70 transition-all"
    >
      <div className="flex items-center flex-1 min-w-0">
        <div
          aria-hidden="true"
          className="flex items-center justify-center ms-1.5 me-1 px-3 h-8 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-muted)] font-mono font-semibold text-xs select-none shrink-0"
        >
          @
        </div>

        <input
          id="tiktok-username-search"
          type="text"
          aria-label="TikTok username or profile link"
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          placeholder="Enter TikTok username or profile URL (e.g. khaby.lame)"
          disabled={loading}
          className="w-full bg-transparent h-11 px-2.5 text-sm text-[var(--ink-primary)] font-medium placeholder:text-[var(--ink-muted)] placeholder:font-normal focus:outline-none disabled:opacity-60"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="shrink-0 h-11 flex items-center justify-center gap-2 px-6 rounded-full bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] font-semibold text-sm transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-current" />
            <span>Searching...</span>
          </>
        ) : (
          <>
            <Search className="w-4 h-4 text-current" />
            <span>View Profile</span>
          </>
        )}
      </button>
    </form>
  );

  const renderPopularRow = () => (
    <div className="mt-4 pt-3.5 border-t border-[var(--border-subtle)] flex flex-col sm:flex-row items-center justify-center gap-2">
      <span className="text-[11px] font-medium text-[var(--ink-muted)] whitespace-nowrap shrink-0">
        Try searching:
      </span>
      <div className="w-full sm:w-auto flex items-center justify-center flex-nowrap gap-1.5 overflow-x-auto pb-0.5 sm:pb-0">
        {FEATURED_SUGGESTIONS.map((item) => (
          <button
            key={item.username}
            type="button"
            onClick={() => {
              setUsernameInput(item.username);
              void handleSearch(item.username);
            }}
            className="text-[11px] font-medium px-3 py-1 rounded-full bg-[var(--surface-sunken)] hover:bg-[var(--pastel-blue)] border border-[var(--border-subtle)] hover:border-[var(--pastel-blue-border)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
          >
            @{item.username}
          </button>
        ))}
      </div>
    </div>
  );

  const renderErrorNotice = () =>
    errorMsg ? (
      <div
        role="alert"
        className="mt-4 p-3.5 rounded-2xl bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)] text-[var(--ink-primary)] text-xs flex items-start gap-2.5 text-start"
      >
        <AlertCircle className="w-4 h-4 text-[var(--status-danger)] shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-[var(--ink-primary)]">Profile lookup notice</p>
          <p className="text-[var(--ink-secondary)] text-xs mt-0.5">{errorMsg}</p>
        </div>
      </div>
    ) : null;

  const isWorkbench = heroVariant === 'workbench';

  return (
    <div className="w-full flex flex-col items-center">
      {isWorkbench ? (
        <section className="w-full hero-studio-backdrop border-b border-[var(--border-subtle)] pt-8 pb-12 sm:pt-12 sm:pb-16">
          <MotionFadeIn className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[var(--surface-elevated)]/90 border border-[var(--border-subtle)] shadow-[var(--shadow-card)] text-[11px] font-medium text-[var(--ink-secondary)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]" aria-hidden="true" />
              <span>Anonymous TikTok Viewer &amp; HD Downloader</span>
            </div>

            {title && (
              <h1 className="text-[length:var(--h1-size)] font-extrabold tracking-tight text-[var(--ink-primary)] leading-[1.15] max-w-3xl">
                {title}
              </h1>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base text-[var(--ink-secondary)] mt-3.5 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}

            {/* Elevated Search Workbench Card */}
            <div className="w-full max-w-2xl mt-8 bg-[var(--surface-elevated)]/95 backdrop-blur-sm rounded-3xl p-4 sm:p-6 border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)]">
              <div className="flex items-center justify-between gap-2 mb-3">
                <label
                  htmlFor="tiktok-username-search"
                  className="text-xs font-semibold text-[var(--ink-primary)]"
                >
                  Search TikTok Creator
                </label>
                <span className="text-[11px] font-semibold text-[var(--ink-primary)] bg-[var(--pastel-blue)] px-3 py-0.5 rounded-full border border-[var(--pastel-blue-border)]">
                  No Login Required
                </span>
              </div>

              {renderSearchForm()}
              {renderPopularRow()}
              {renderErrorNotice()}
            </div>

            {/* Subtle Capability Indicators */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-[var(--ink-secondary)]">
              <div className="flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 text-[var(--accent-primary)] shrink-0" />
                <span>Clean HD MP4 Video</span>
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[var(--accent-cyan-text)] shrink-0" />
                <span>100% Anonymous Viewing</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-[var(--ink-primary)] shrink-0" />
                <span>Direct MP3 Audio Save</span>
              </div>
            </div>
          </MotionFadeIn>
        </section>
      ) : (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-col items-center text-center">
          {(title || subtitle) && (
            <div className="text-center max-w-2xl mx-auto mb-6">
              {title && (
                <h1 className="text-[length:var(--h1-size)] font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          <section className="w-full max-w-2xl mx-auto mb-4 bg-[var(--surface-elevated)] rounded-3xl p-4 sm:p-6 border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)]">
            {renderSearchForm()}
            {!hasActiveResult && renderPopularRow()}
            {renderErrorNotice()}
          </section>
        </div>
      )}

      {/* Results Container (Profile + Videos Grid) */}
      {(authorProfile || (videos.length > 0 && !loading)) && (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
          {authorProfile && (
            <MotionFadeIn>
              <section className="w-full mb-8 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] rounded-2xl p-5 sm:p-6">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-start">
                  <div className="relative shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        authorProfile.avatar ||
                        `/api/avatar?username=${encodeURIComponent(authorProfile.unique_id)}`
                      }
                      alt={authorProfile.nickname || authorProfile.unique_id}
                      referrerPolicy="no-referrer"
                      className="w-20 h-20 rounded-2xl object-cover border border-[var(--border-subtle)] bg-[var(--surface-sunken)]"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        const fallbackSrc = `/api/avatar?username=${encodeURIComponent(
                          authorProfile.unique_id
                        )}`;
                        if (!target.src.includes('/api/avatar')) {
                          target.src = fallbackSrc;
                        }
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                      <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)] tracking-tight">
                          {authorProfile.nickname || authorProfile.unique_id}
                        </h2>

                        {authorProfile.verified && (
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] text-[var(--accent-cyan-text)] text-[11px] font-semibold">
                            <CheckCircle2 className="w-3 h-3 shrink-0" />
                            <span>Verified</span>
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap shrink-0">
                        <button
                          type="button"
                          onClick={handleDownloadAvatar}
                          className="h-9 px-3.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
                          title="Download profile avatar"
                        >
                          <Download className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
                          <span>Avatar</span>
                        </button>

                        <button
                          type="button"
                          onClick={handleCopyProfileLink}
                          className="h-9 px-3.5 rounded-full border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] text-xs font-medium inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap cursor-pointer"
                          title="Copy profile link"
                        >
                          {copiedLink ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                              <span>Copied</span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
                              <span>Copy Link</span>
                            </>
                          )}
                        </button>

                        <a
                          href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="no-referrer"
                          className="h-9 px-4 rounded-full bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] text-xs font-semibold inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                          title="Open TikTok profile"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Open TikTok</span>
                        </a>
                      </div>
                    </div>

                    <div className="mt-1.5 flex flex-col gap-1 items-center sm:items-start">
                      <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[var(--ink-muted)] flex-wrap">
                        <span className="font-mono text-[var(--ink-secondary)] font-medium">
                          @{authorProfile.unique_id}
                        </span>
                        <span>•</span>
                        <span>Public Creator Profile</span>
                      </div>

                      {authorProfile.signature && (
                        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] line-clamp-2 leading-relaxed mt-1 max-w-2xl">
                          {authorProfile.signature}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--border-subtle)] my-5" />

                {/* Soft Pastel-Tinted Metric Tiles */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch text-center sm:text-start">
                  <div className="rounded-2xl px-3.5 py-2.5 bg-[var(--pastel-blue)]/65 border border-[var(--pastel-blue-border)] flex flex-col justify-center items-center sm:items-start">
                    <span className="text-[11px] font-medium text-[var(--ink-secondary)] leading-none mb-1.5">
                      Status
                    </span>
                    <span className="text-xs font-semibold text-[var(--ink-primary)] leading-tight flex items-center gap-1.5">
                      <span
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          authorProfile.status === 'private'
                            ? 'bg-[var(--status-warning)]'
                            : 'bg-[var(--accent-cyan)]'
                        }`}
                      />
                      <span>{authorProfile.status === 'private' ? 'Private' : 'Active'}</span>
                    </span>
                  </div>

                  <div className="rounded-2xl px-3.5 py-2.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                    <span className="text-[11px] font-medium text-[var(--ink-muted)] leading-none mb-1.5">
                      Followers
                    </span>
                    <span className="text-sm font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                      {formatNumber(profileStats?.followerCount)}
                    </span>
                  </div>

                  <div className="rounded-2xl px-3.5 py-2.5 bg-[var(--pastel-pink)]/65 border border-[var(--pastel-pink-border)] flex flex-col justify-center">
                    <span className="text-[11px] font-medium text-[var(--ink-secondary)] leading-none mb-1.5">
                      Total Likes
                    </span>
                    <span className="text-sm font-bold text-[var(--accent-primary-text)] font-mono tabular-nums tracking-tight leading-tight truncate">
                      {formatNumber(profileStats?.heartCount)}
                    </span>
                  </div>

                  <div className="rounded-2xl px-3.5 py-2.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                    <span className="text-[11px] font-medium text-[var(--ink-muted)] leading-none mb-1.5">
                      Following
                    </span>
                    <span className="text-sm font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                      {formatNumber(profileStats?.followingCount)}
                    </span>
                  </div>

                  <div className="rounded-2xl px-3.5 py-2.5 bg-[var(--pastel-lavender)]/70 border border-[var(--pastel-lavender-border)] flex flex-col justify-center">
                    <span className="text-[11px] font-medium text-[var(--ink-secondary)] leading-none mb-1.5">
                      Videos
                    </span>
                    <span className="text-sm font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                      {formatNumber(profileStats?.videoCount ?? videos.length)}
                    </span>
                  </div>

                  <div className="rounded-2xl px-3.5 py-2.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                    <span className="text-[11px] font-medium text-[var(--ink-muted)] leading-none mb-1.5">
                      Account Type
                    </span>
                    <span className="text-xs font-semibold text-[var(--ink-primary)] leading-tight truncate">
                      {authorProfile.verified ? 'Verified Creator' : 'Public Account'}
                    </span>
                  </div>
                </div>
              </section>
            </MotionFadeIn>
          )}

          {/* Video Grid Section */}
          {videos.length > 0 && !loading && (
            <MotionFadeIn delay={0.04}>
              <section className="w-full flex flex-col gap-5">
                <AdSlot placement="above_grid" />
                <div className="flex flex-col sm:flex-row items-center justify-between gap-2 border-b border-[var(--border-subtle)] pb-3 text-center sm:text-start">
                  <div className="flex items-center justify-center sm:justify-start gap-2.5">
                    <h3 className="text-base font-bold text-[var(--ink-primary)] tracking-tight">
                      Published Videos
                    </h3>
                    <span className="text-[11px] font-mono tabular-nums font-semibold px-2.5 py-0.5 rounded-full bg-[var(--pastel-lavender)] border border-[var(--pastel-lavender-border)] text-[var(--ink-primary)]">
                      {videos.length} loaded
                    </span>
                  </div>
                  <div className="text-xs text-[var(--ink-muted)]">
                    Select any video to watch or download in HD
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                  {videos.map((video, index) => {
                    const videoKey = String(video.video_id || video.id || index);
                    const coverImg = video.cover || video.origin_cover || '';
                    const duration = formatDuration(video.duration);
                    const isHighlighted = highlightedVideoKey === videoKey;

                    return (
                      <div
                        key={videoKey}
                        ref={(el) => {
                          if (el) {
                            videoCardRefs.current.set(videoKey, el);
                          } else {
                            videoCardRefs.current.delete(videoKey);
                          }
                        }}
                        onClick={() => void openModal(video, videoKey)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            void openModal(video, videoKey);
                          }
                        }}
                        className={`group relative aspect-[9/16] rounded-2xl overflow-hidden bg-zinc-950 border cursor-pointer shadow-[var(--shadow-card)] transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                          isHighlighted
                            ? 'border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/30'
                            : 'border-[var(--border-subtle)] hover:border-[var(--accent-dark)] hover:shadow-[var(--shadow-card-hover)]'
                        }`}
                      >
                        {coverImg ? (
                          /* eslint-disable-next-line @next/next/no-img-element */
                          <img
                            src={coverImg}
                            alt={video.title || 'TikTok video'}
                            referrerPolicy="no-referrer"
                            loading="lazy"
                            data-step="0"
                            className="w-full h-full object-cover bg-zinc-950 pointer-events-none"
                            onError={(e) => {
                              const target = e.currentTarget as HTMLImageElement;
                              const step = target.getAttribute('data-step') || '0';

                              if (step === '0' && video.origin_cover && video.origin_cover !== coverImg) {
                                target.setAttribute('data-step', '1');
                                target.src = video.origin_cover;
                                return;
                              }

                              if (step === '0' || step === '1') {
                                target.setAttribute('data-step', '2');
                                const rawCover = video.cover || video.origin_cover || '';
                                if (rawCover && !rawCover.startsWith('/api/proxy')) {
                                  target.src = `/api/proxy?url=${encodeURIComponent(rawCover)}`;
                                  return;
                                }
                              }

                              target.style.display = 'none';
                            }}
                          />
                        ) : null}

                        {/* Clean Center Play Trigger */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                          <div className="w-10 h-10 rounded-full bg-zinc-950/65 group-hover:bg-[var(--accent-dark)] border border-white/40 text-white flex items-center justify-center transition-colors">
                            <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                          </div>
                        </div>

                        <div className="absolute inset-x-0 top-0 p-2.5 flex justify-between items-start bg-gradient-to-b from-zinc-950/75 via-zinc-950/20 to-transparent pointer-events-none">
                          <span className="text-[10px] font-mono tabular-nums font-semibold px-2 py-0.5 rounded-full bg-zinc-950/70 text-white">
                            #{index + 1}
                          </span>
                          {duration && (
                            <span className="text-[10px] font-mono tabular-nums font-semibold px-2 py-0.5 rounded-full bg-zinc-950/70 text-white">
                              {duration}
                            </span>
                          )}
                        </div>

                        <div className="absolute inset-x-0 bottom-0 px-3 py-3 bg-gradient-to-t from-zinc-950/95 via-zinc-950/75 to-transparent flex flex-col gap-1.5 pointer-events-none text-start">
                          <p className="text-[11px] text-white/95 line-clamp-2 font-medium leading-snug">
                            {video.title || 'Watch Video'}
                          </p>

                          <div className="grid grid-cols-3 items-center text-[10px] text-white/90 font-mono tabular-nums font-semibold pt-1.5 border-t border-white/15 w-full">
                            <span className="flex items-center justify-start gap-1 min-w-0" title={`${video.play_count || 0} views`}>
                              <Play className="w-2.5 h-2.5 fill-white text-white shrink-0" />
                              <span className="truncate">{formatNumber(video.play_count)}</span>
                            </span>

                            <span className="flex items-center justify-center gap-1 min-w-0" title={`${video.digg_count || 0} likes`}>
                              <Heart className="w-2.5 h-2.5 fill-[var(--accent-primary)] text-[var(--accent-primary)] shrink-0" />
                              <span className="truncate">{formatNumber(video.digg_count)}</span>
                            </span>

                            <span className="flex items-center justify-end gap-1 min-w-0" title={`${video.share_count || 0} shares`}>
                              <Share2 className="w-2.5 h-2.5 shrink-0" />
                              <span className="truncate">{formatNumber(video.share_count)}</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {hasMore && (
                  <div className="flex flex-col items-center justify-center pt-5 pb-1">
                    <button
                      type="button"
                      onClick={() => void handleShowMoreVideos()}
                      disabled={loadingMore}
                      className="h-10 px-6 rounded-full bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] font-semibold text-xs tracking-wide uppercase flex items-center gap-2 transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer shadow-[var(--shadow-card)]"
                    >
                      {loadingMore ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                          <span>Loading more videos...</span>
                        </>
                      ) : (
                        <>
                          <span>SHOW MORE VIDEOS</span>
                          <ChevronDown className="w-3.5 h-3.5 text-current/80" />
                        </>
                      )}
                    </button>
                    <p className="text-xs text-[var(--ink-muted)] mt-2 tabular-nums">
                      Showing {videos.length} of {profileStats?.videoCount || 'all'} videos
                    </p>
                  </div>
                )}
              </section>
            </MotionFadeIn>
          )}
        </div>
      )}

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <MotionModalBackdrop
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-zinc-950/55 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <MotionModalPanel
              ariaLabel={`Video player for @${modalAuthorUser}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[430px] h-[560px] sm:h-[600px] max-h-[90vh] bg-[var(--surface-elevated)] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] flex flex-col justify-between"
            >
              {/* Modal Header */}
              <div className="bg-[var(--surface-elevated)] text-[var(--ink-primary)] px-4 py-3 border-b border-[var(--border-subtle)] flex items-center justify-between gap-2.5 shrink-0">
                <div className="flex items-center gap-2.5 min-w-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={modalAuthorAvatar}
                    alt={modalAuthorUser}
                    referrerPolicy="no-referrer"
                    className="w-7 h-7 rounded-full object-cover border border-[var(--border-subtle)] bg-[var(--surface-sunken)] shrink-0"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      if (!target.src.includes('/api/avatar')) {
                        target.src = `/api/avatar?username=${encodeURIComponent(modalAuthorUser)}`;
                      }
                    }}
                  />
                  <div className="min-w-0 flex items-center gap-2">
                    <span className="text-xs font-semibold text-[var(--ink-primary)] truncate">
                      @{modalAuthorUser}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] text-[var(--ink-primary)] text-[10px] font-semibold uppercase tracking-wider shrink-0">
                      HD
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-[var(--surface-sunken)] hover:bg-[var(--surface-interactive)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                  title="Close modal (Esc)"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Viewport */}
              <div className="relative flex-1 min-h-0 bg-zinc-950 flex items-center justify-center w-full overflow-hidden">
                {videoResolving && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-zinc-950/90 text-white">
                    <Loader2 className="w-7 h-7 animate-spin text-white" />
                    <span className="text-xs font-medium text-white/90">Loading HD stream...</span>
                  </div>
                )}

                {!isVideoPlaying && !videoResolving && (
                  <button
                    type="button"
                    onClick={handleCustomPlayClick}
                    aria-label="Play video"
                    className="absolute inset-0 m-auto z-20 w-13 h-13 rounded-full bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-white border-2 border-white/80 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                  </button>
                )}

                <video
                  ref={modalVideoRef}
                  src={activePlayUrl || undefined}
                  poster={selectedVideo.cover || selectedVideo.origin_cover || undefined}
                  controls
                  playsInline
                  autoPlay
                  preload="metadata"
                  onPlay={() => setIsVideoPlaying(true)}
                  onPause={() => setIsVideoPlaying(false)}
                  onEnded={() => setIsVideoPlaying(false)}
                  onCanPlay={() => setVideoResolving(false)}
                  onError={() => void handleVideoPlayError()}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Bottom Info & Action Panel */}
              <div className="p-4 flex flex-col gap-3 bg-[var(--surface-elevated)] border-t border-[var(--border-subtle)] shrink-0">
                <p className="text-xs font-medium text-[var(--ink-primary)] line-clamp-2 leading-snug break-words text-start">
                  {selectedVideo.title || 'TikTok Video'}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[var(--ink-secondary)] bg-[var(--surface-canvas)] px-3.5 py-2 rounded-xl border border-[var(--border-subtle)] font-mono tabular-nums font-semibold">
                  <span className="flex items-center gap-1.5 text-[var(--ink-primary)]">
                    <Play className="w-3 h-3 fill-current" />
                    <span>{formatNumber(selectedVideo.play_count)}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[var(--accent-primary-text)]">
                    <Heart className="w-3 h-3 fill-[var(--accent-primary)] text-[var(--accent-primary)]" />
                    <span>{formatNumber(selectedVideo.digg_count)}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[var(--ink-secondary)]">
                    <Share2 className="w-3 h-3" />
                    <span>{formatNumber(selectedVideo.share_count)}</span>
                  </span>
                  {selectedVideo.duration ? (
                    <span className="text-[var(--ink-muted)]">{formatDuration(selectedVideo.duration)}</span>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <button
                    type="button"
                    disabled={downloadingVideo || downloadingAudio}
                    onClick={() => void handleDownloadVideo()}
                    className="w-full h-10 px-3.5 rounded-full bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                  >
                    {downloadingVideo ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                        <span>Preparing...</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Download HD Video</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    disabled={downloadingVideo || downloadingAudio}
                    onClick={() => void handleDownloadAudio()}
                    className="w-full h-10 px-3.5 rounded-full bg-[var(--surface-sunken)] hover:bg-[var(--pastel-blue)] border border-[var(--border-subtle)] hover:border-[var(--pastel-blue-border)] text-[var(--ink-primary)] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                  >
                    {downloadingAudio ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                        <span>Preparing...</span>
                      </>
                    ) : (
                      <>
                        <Music className="w-3.5 h-3.5" />
                        <span>Download Audio (MP3)</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </MotionModalPanel>
          </MotionModalBackdrop>
        )}
      </AnimatePresence>

      {!hasActiveResult && children}

      <DownloadCounterModal
        isOpen={counterModalOpen}
        onClose={handleCloseCounterModal}
        downloadUrl={counterModalData.url}
        fileName={counterModalData.filename}
        mediaType={counterModalData.mediaType}
        title={counterModalData.title}
      />
    </div>
  );
}