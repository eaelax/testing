'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
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
  { username: 'charlidamelio', name: "Charli D'Amelio" },
  { username: 'khaby.lame', name: 'Khaby Lame' },
  { username: 'mrbeast', name: 'MrBeast' },
  { username: 'bellapoarch', name: 'Bella Poarch' },
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
      lastDownloadedKeyRef.current = activeCardKeyRef.current || String(selectedVideo.video_id || selectedVideo.id || '');
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
      lastDownloadedKeyRef.current = activeCardKeyRef.current || String(selectedVideo.video_id || selectedVideo.id || '');
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

  const renderSearchForm = (isWorkbenchMode: boolean) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void handleSearch();
      }}
      className={`relative flex items-center rounded-xl p-1.5 transition-all ${
        isWorkbenchMode
          ? 'bg-[var(--surface-canvas)] border border-[var(--border-strong)] focus-within:bg-[var(--surface-elevated)] focus-within:border-[var(--accent-primary)] focus-within:ring-2 focus-within:ring-[var(--accent-primary)]/20'
          : 'bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] focus-within:border-[var(--accent-primary)] focus-within:ring-2 focus-within:ring-[var(--accent-primary)]/15'
      }`}
    >
      <div className="flex items-center ps-3 pe-1.5 text-[var(--ink-muted)] select-none pointer-events-none">
        <span className="font-black text-base text-[var(--accent-primary-text)]">@</span>
      </div>

      <input
        type="text"
        aria-label="TikTok username"
        value={usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="Enter TikTok username (e.g. khaby.lame)"
        disabled={loading}
        className="w-full bg-transparent py-2 px-1.5 text-sm text-[var(--ink-primary)] font-semibold placeholder:text-[var(--ink-muted)] placeholder:font-normal focus:outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="shrink-0 h-10 flex items-center justify-center gap-2 px-4 sm:px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.98] text-[var(--accent-contrast)] font-bold text-xs sm:text-sm transition-all disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-current" />
            <span>Searching...</span>
          </>
        ) : (
          <>
            <Search className="w-4 h-4 text-current" />
            <span>Search</span>
          </>
        )}
      </button>
    </form>
  );

  const renderTrendingButtons = () => (
    <div className="flex items-center gap-1.5 flex-wrap mt-3">
      <span className="text-xs text-[var(--ink-muted)] font-bold whitespace-nowrap me-1">
        Popular:
      </span>
      {FEATURED_SUGGESTIONS.map((item) => (
        <button
          key={item.username}
          type="button"
          onClick={() => {
            setUsernameInput(item.username);
            void handleSearch(item.username);
          }}
          className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] hover:bg-[var(--accent-soft)] hover:border-[var(--accent-primary)] transition-colors whitespace-nowrap cursor-pointer"
        >
          @{item.username}
        </button>
      ))}
    </div>
  );

  const renderErrorNotice = () =>
    errorMsg ? (
      <div
        role="alert"
        className="mt-3 p-3 rounded-xl bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)]/50 text-[var(--ink-primary)] text-xs flex items-start gap-2.5"
      >
        <AlertCircle className="w-4 h-4 text-[var(--status-danger)] shrink-0 mt-0.5" />
        <div className="flex-1 text-start">
          <p className="font-bold text-[var(--ink-primary)]">Profile lookup notice</p>
          <p className="text-[var(--ink-secondary)] text-xs mt-0.5">{errorMsg}</p>
        </div>
      </div>
    ) : null;

  const isWorkbench = heroVariant === 'workbench';

  return (
    <div className="w-full flex flex-col items-center">
      {isWorkbench ? (
        <section className="w-full bg-[var(--surface-hero)] text-[var(--accent-contrast)] border-b border-[var(--surface-hero-border)] py-8 sm:py-12">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-7 lg:gap-10 items-center">
            {/* Left Column: High-Contrast Headline, Plain English Value & Key Capabilities */}
            <div className="lg:col-span-6 text-start">
              {title && (
                <h1 className="text-[length:var(--h1-size)] font-black tracking-tight text-[var(--accent-contrast)] leading-[1.15]">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed max-w-xl">
                  {subtitle}
                </p>
              )}

              <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-5 border-t border-[var(--surface-hero-border)]">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Film className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                  <span>No-Watermark HD</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <ShieldCheck className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                  <span>100% Anonymous</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Zap className="w-4 h-4 text-[var(--accent-cyan)] shrink-0" />
                  <span>MP4 &amp; MP3 Free</span>
                </div>
              </div>
            </div>

            {/* Right Column: Bright Elevated Search Workbench Card */}
            <div className="lg:col-span-6">
              <div className="bg-[var(--surface-elevated)] text-[var(--ink-primary)] rounded-xl p-4 sm:p-6 border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)]">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs sm:text-sm font-extrabold text-[var(--ink-primary)]">
                    Find a Public TikTok Profile
                  </span>
                  <span className="text-[11px] font-bold text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] px-2.5 py-0.5 rounded-md border border-[var(--accent-cyan)]/60">
                    Free &amp; Instant
                  </span>
                </div>

                {renderSearchForm(true)}
                {renderTrendingButtons()}
                {renderErrorNotice()}
              </div>
            </div>
          </div>
        </section>
      ) : (
        <>
          {(title || subtitle) && (
            <div className="text-center max-w-xl mx-auto mb-5">
              {title && (
                <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
                  {title}
                </h1>
              )}
              {subtitle && (
                <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
                  {subtitle}
                </p>
              )}
            </div>
          )}

          {/* Standard Search Input Box */}
          <section className="w-full max-w-xl mx-auto mb-5">
            {renderSearchForm(false)}
            {!hasActiveResult && (
              <div className="flex justify-center">{renderTrendingButtons()}</div>
            )}
            {renderErrorNotice()}
          </section>
        </>
      )}

      {/* Results Container (Profile + Videos Grid) */}
      {(authorProfile || (videos.length > 0 && !loading)) && (
        <div
          className={
            isWorkbench
              ? 'w-full max-w-[1120px] mx-auto px-4 sm:px-6 py-7 sm:py-9'
              : 'w-full'
          }
        >
          {/* Profile Details Container */}
          {authorProfile && (
            <section className="w-full mb-6 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] rounded-xl p-4 sm:p-6 shadow-[var(--shadow-card)]">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                <div className="relative shrink-0">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={authorProfile.avatar || `/api/avatar?username=${encodeURIComponent(authorProfile.unique_id)}`}
                    alt={authorProfile.nickname || authorProfile.unique_id}
                    referrerPolicy="no-referrer"
                    className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl object-cover border border-[var(--accent-cyan)] bg-[var(--surface-sunken)]"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      const fallbackSrc = `/api/avatar?username=${encodeURIComponent(authorProfile.unique_id)}`;
                      if (!target.src.includes('/api/avatar')) {
                        target.src = fallbackSrc;
                      }
                    }}
                  />
                </div>

                <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 flex-wrap">
                      <h2 className="text-lg sm:text-xl font-black text-[var(--ink-primary)] tracking-tight">
                        {authorProfile.nickname || authorProfile.unique_id}
                      </h2>

                      <div className="flex items-center gap-1 ms-0.5">
                        <a
                          href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                          target="_blank"
                          rel="noreferrer noopener"
                          referrerPolicy="no-referrer"
                          className="w-8 h-8 rounded-lg bg-[var(--surface-canvas)] hover:bg-[var(--surface-interactive)] border border-[var(--border-subtle)] text-[var(--ink-primary)] flex items-center justify-center transition-colors"
                          title="Open TikTok Profile"
                          aria-label="Open TikTok Profile"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyProfileLink}
                          className="w-8 h-8 rounded-lg bg-[var(--surface-canvas)] hover:bg-[var(--surface-interactive)] border border-[var(--border-subtle)] text-[var(--ink-primary)] flex items-center justify-center transition-colors cursor-pointer"
                          title="Copy Profile Link"
                          aria-label="Copy Profile Link"
                        >
                          {copiedLink ? (
                            <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                          ) : (
                            <Share2 className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center justify-center sm:justify-end gap-1.5 flex-nowrap shrink-0">
                      <button
                        type="button"
                        onClick={handleDownloadAvatar}
                        className="h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)] active:scale-[0.98] text-[var(--ink-primary)] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer"
                        title="Download profile avatar"
                      >
                        <Download className="w-3.5 h-3.5 text-[var(--ink-primary)]" />
                        <span>Avatar</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleCopyProfileLink}
                        className="h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)] active:scale-[0.98] text-[var(--ink-primary)] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer"
                        title="Copy profile link"
                      >
                        {copiedLink ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                            <span>Copied</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5 text-[var(--ink-primary)]" />
                            <span>Copy</span>
                          </>
                        )}
                      </button>

                      <a
                        href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                        target="_blank"
                        rel="noreferrer noopener"
                        referrerPolicy="no-referrer"
                        className="h-9 px-3 rounded-lg border border-[var(--accent-dark)] bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] active:scale-[0.98] text-[var(--accent-contrast)] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
                        title="Open TikTok profile"
                      >
                        <ExternalLink className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                        <span>TikTok</span>
                      </a>
                    </div>
                  </div>

                  <div className="mt-1 flex flex-col gap-1 text-center sm:text-start">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[var(--ink-secondary)] flex-wrap">
                      <span className="font-mono text-[var(--ink-primary)] font-bold">
                        @{authorProfile.unique_id}
                      </span>
                      <span className="text-[var(--border-strong)]">•</span>
                      <span className="text-[var(--ink-muted)] font-medium">TikTok Public Creator</span>
                      {authorProfile.verified && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] text-[var(--accent-cyan-text)] text-[10px] font-bold">
                          <CheckCircle2 className="w-3 h-3 text-[var(--accent-cyan-text)] shrink-0" />
                          <span>Verified</span>
                        </span>
                      )}
                    </div>

                    {authorProfile.signature && (
                      <p className="text-xs text-[var(--ink-secondary)] line-clamp-2 leading-relaxed mt-0.5 max-w-xl">
                        {authorProfile.signature}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-[var(--border-subtle)] my-3.5" />

              {/* High-Contrast Metrics Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 items-stretch">
                <div className="min-h-[54px] rounded-lg px-3 py-2 bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-cyan-text)] leading-none mb-1">
                    Status
                  </span>
                  <span className="text-xs font-extrabold tracking-tight text-[var(--ink-primary)] leading-tight flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[var(--accent-cyan-text)] animate-pulse shrink-0" />
                    <span>{authorProfile.status === 'private' ? 'Private' : 'Active'}</span>
                  </span>
                </div>

                <div className="min-h-[54px] rounded-lg px-3 py-2 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)] leading-none mb-1">
                    Followers
                  </span>
                  <span className="text-sm font-extrabold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                    {formatNumber(profileStats?.followerCount)}
                  </span>
                </div>

                <div className="min-h-[54px] rounded-lg px-3 py-2 bg-[var(--accent-soft)] border border-[var(--accent-primary)]/40 flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-primary-text)] leading-none mb-1">
                    Total Likes
                  </span>
                  <span className="text-sm font-extrabold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                    {formatNumber(profileStats?.heartCount)}
                  </span>
                </div>

                <div className="min-h-[54px] rounded-lg px-3 py-2 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)] leading-none mb-1">
                    Following
                  </span>
                  <span className="text-sm font-extrabold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                    {formatNumber(profileStats?.followingCount)}
                  </span>
                </div>

                <div className="min-h-[54px] rounded-lg px-3 py-2 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)] leading-none mb-1">
                    Videos
                  </span>
                  <span className="text-sm font-extrabold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                    {formatNumber(profileStats?.videoCount ?? videos.length)}
                  </span>
                </div>

                <div className="min-h-[54px] rounded-lg px-3 py-2 bg-[var(--accent-dark)] border border-[var(--accent-dark)] flex flex-col justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--accent-cyan)] leading-none mb-1">
                    Account
                  </span>
                  <span className="text-xs font-extrabold tracking-tight text-[var(--accent-contrast)] leading-tight truncate">
                    {authorProfile.verified ? 'Verified' : 'Public'}
                  </span>
                </div>
              </div>
            </section>
          )}

          {/* Video Grid Section */}
          {videos.length > 0 && !loading && (
            <section className="w-full flex flex-col gap-3.5 my-1.5">
              <AdSlot placement="above_grid" />
              <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2.5">
                <div className="flex items-center gap-2">
                  <h3 className="text-sm sm:text-base font-extrabold text-[var(--ink-primary)]">
                    Videos
                  </h3>
                  <span className="text-xs font-mono tabular-nums font-bold px-2.5 py-0.5 rounded bg-[var(--accent-dark)] text-[var(--accent-contrast)]">
                    {videos.length} loaded
                  </span>
                </div>
                <div className="text-xs font-semibold text-[var(--ink-muted)]">
                  Click any video to watch and download
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
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
                      className={`relative aspect-[9/16] rounded-lg overflow-hidden bg-[var(--accent-dark)] border cursor-pointer shadow-[var(--shadow-card)] group transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                        isHighlighted
                          ? 'border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)] ring-offset-2'
                          : 'border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:shadow-[var(--shadow-card-hover)]'
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
                          className="w-full h-full object-cover bg-[var(--accent-dark)] pointer-events-none"
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

                      <div className="absolute inset-0 flex items-center justify-center bg-[var(--accent-dark)]/35 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                        <div className="w-11 h-11 rounded-xl bg-[var(--accent-primary)]/95 text-[var(--accent-contrast)] flex items-center justify-center shadow-lg ring-2 ring-[var(--accent-contrast)]/70 transform transition-transform group-hover:scale-105">
                          <Play className="w-4 h-4 fill-[var(--accent-contrast)] text-[var(--accent-contrast)] translate-x-0.5" />
                        </div>
                      </div>

                      <div className="absolute inset-x-0 top-0 p-1.5 flex justify-between items-start bg-gradient-to-b from-[var(--accent-dark)]/80 via-[var(--accent-dark)]/25 to-transparent pointer-events-none">
                        <span className="text-[10px] font-mono tabular-nums font-bold px-1.5 py-0.5 rounded bg-[var(--accent-dark)]/85 text-[var(--accent-contrast)]">
                          #{index + 1}
                        </span>
                        {duration && (
                          <span className="text-[10px] font-mono tabular-nums font-bold px-1.5 py-0.5 rounded bg-[var(--accent-dark)]/85 text-[var(--accent-contrast)]">
                            {duration}
                          </span>
                        )}
                      </div>

                      <div className="absolute inset-x-0 bottom-0 px-2 py-2 bg-gradient-to-t from-[var(--accent-dark)]/95 via-[var(--accent-dark)]/75 to-transparent flex flex-col gap-1 pointer-events-none">
                        <p className="text-[11px] text-[var(--accent-contrast)] line-clamp-2 font-semibold leading-tight">
                          {video.title || 'Watch Video'}
                        </p>

                        <div className="grid grid-cols-3 items-center text-[10px] text-[var(--accent-contrast)] font-mono tabular-nums font-bold pt-1 border-t border-[var(--accent-contrast)]/25 w-full">
                          <span className="flex items-center justify-start gap-1 text-[var(--accent-contrast)] min-w-0" title={`${video.play_count || 0} views`}>
                            <Play className="w-2.5 h-2.5 fill-[var(--accent-contrast)] text-[var(--accent-contrast)] shrink-0" />
                            <span className="truncate">{formatNumber(video.play_count)}</span>
                          </span>

                          <span className="flex items-center justify-center gap-1 text-[var(--accent-contrast)] min-w-0" title={`${video.digg_count || 0} likes`}>
                            <Heart className="w-2.5 h-2.5 fill-[var(--accent-primary)] text-[var(--accent-primary)] shrink-0" />
                            <span className="truncate">{formatNumber(video.digg_count)}</span>
                          </span>

                          <span className="flex items-center justify-end gap-1 text-[var(--accent-contrast)] min-w-0" title={`${video.share_count || 0} shares`}>
                            <Share2 className="w-2.5 h-2.5 text-[var(--accent-cyan)] shrink-0" />
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
                    className="h-11 px-7 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.98] text-[var(--accent-contrast)] font-bold text-xs tracking-wide uppercase flex items-center gap-2 transition-all disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                  >
                    {loadingMore ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                        <span>Loading more videos...</span>
                      </>
                    ) : (
                      <>
                        <span>SHOW MORE VIDEOS</span>
                        <ChevronDown className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-[var(--ink-muted)] font-semibold mt-2 tabular-nums">
                    Showing {videos.length} of {profileStats?.videoCount || 'all'} videos
                  </p>
                </div>
              )}
            </section>
          )}
        </div>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-[var(--accent-dark)]/75 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4"
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`Video player for @${modalAuthorUser}`}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-[400px] sm:max-w-[430px] h-[540px] sm:h-[580px] max-h-[90vh] bg-[var(--surface-elevated)] rounded-xl overflow-hidden shadow-2xl border border-[var(--border-strong)] flex flex-col justify-between animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Dark Modal Header */}
            <div className="bg-[var(--accent-dark)] text-[var(--accent-contrast)] px-3.5 py-2.5 border-b border-[var(--ink-secondary)] flex items-center justify-between gap-2.5 shrink-0">
              <div className="flex items-center gap-2 min-w-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={modalAuthorAvatar}
                  alt={modalAuthorUser}
                  referrerPolicy="no-referrer"
                  className="w-6 h-6 rounded-full object-cover border border-[var(--accent-cyan)] bg-[var(--accent-dark-hover)] shrink-0"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    if (!target.src.includes('/api/avatar')) {
                      target.src = `/api/avatar?username=${encodeURIComponent(modalAuthorUser)}`;
                    }
                  }}
                />
                <div className="min-w-0 flex items-center gap-1.5">
                  <span className="text-xs font-bold text-[var(--accent-contrast)] truncate">
                    @{modalAuthorUser}
                  </span>
                  <span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-[var(--accent-cyan)]/20 border border-[var(--accent-cyan)]/60 text-[var(--accent-cyan)] text-[10px] font-bold uppercase tracking-wider shrink-0">
                    <Film className="w-2.5 h-2.5" />
                    <span>HD</span>
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-[var(--accent-contrast)]/15 hover:bg-[var(--accent-primary)] text-[var(--accent-contrast)] flex items-center justify-center transition-all active:scale-95 cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-cyan)]"
                title="Close modal (Esc)"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Cinema Video Viewport */}
            <div className="relative flex-1 min-h-0 bg-[var(--accent-dark)] flex items-center justify-center w-full overflow-hidden">
              {videoResolving && (
                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-[var(--accent-dark)]/85 text-[var(--accent-contrast)]">
                  <Loader2 className="w-7 h-7 animate-spin text-[var(--accent-primary)]" />
                  <span className="text-xs font-semibold text-[var(--accent-contrast)]">Loading HD stream...</span>
                </div>
              )}

              {!isVideoPlaying && !videoResolving && (
                <button
                  type="button"
                  onClick={handleCustomPlayClick}
                  aria-label="Play video"
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-14 h-14 rounded-xl bg-[var(--accent-primary)]/95 hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] ring-4 ring-[var(--accent-contrast)]/35 shadow-xl flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer"
                >
                  <Play className="w-6 h-6 fill-[var(--accent-contrast)] text-[var(--accent-contrast)] translate-x-0.5" />
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
            <div className="p-3.5 sm:p-4 flex flex-col gap-2.5 bg-[var(--surface-elevated)] border-t border-[var(--border-subtle)] shrink-0">
              <p className="text-xs font-bold text-[var(--ink-primary)] line-clamp-2 leading-snug break-words">
                {selectedVideo.title || 'TikTok Video'}
              </p>

              <div className="flex items-center justify-between text-[11px] text-[var(--ink-primary)] bg-[var(--surface-canvas)] px-3 py-2 rounded-lg border border-[var(--border-subtle)] font-mono tabular-nums font-bold">
                <span className="flex items-center gap-1 text-[var(--ink-primary)]">
                  <Play className="w-3 h-3 fill-[var(--ink-primary)] text-[var(--ink-primary)]" />
                  <span>{formatNumber(selectedVideo.play_count)}</span>
                </span>
                <span className="flex items-center gap-1 text-[var(--accent-primary-text)]">
                  <Heart className="w-3 h-3 fill-[var(--accent-primary)] text-[var(--accent-primary)]" />
                  <span>{formatNumber(selectedVideo.digg_count)}</span>
                </span>
                <span className="flex items-center gap-1 text-[var(--accent-cyan-text)]">
                  <Share2 className="w-3 h-3 text-[var(--accent-cyan-text)]" />
                  <span>{formatNumber(selectedVideo.share_count)}</span>
                </span>
                {selectedVideo.duration ? (
                  <span className="text-[var(--ink-muted)]">{formatDuration(selectedVideo.duration)}</span>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-0.5">
                <button
                  type="button"
                  disabled={downloadingVideo || downloadingAudio}
                  onClick={() => void handleDownloadVideo()}
                  className="w-full h-10 px-3.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.99] text-[var(--accent-contrast)] font-bold text-xs flex items-center justify-center gap-1.5 transition-all disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
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
                  className="w-full h-10 px-3.5 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] active:scale-[0.99] text-[var(--accent-contrast)] font-bold text-xs flex items-center justify-center gap-1.5 transition-all disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                >
                  {downloadingAudio ? (
                    <>
                      <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                      <span>Preparing...</span>
                    </>
                  ) : (
                    <>
                      <Music className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                      <span>Download Audio (MP3)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

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