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
  ChevronDown,
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
import { useI18n } from '@/lib/i18n/context';

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
  titleKey?: string;
  subtitleKey?: string;
  heroVariant?: 'default' | 'workbench';
  breadcrumbs?: React.ReactNode;
  children?: React.ReactNode;
}

export default function TikTokProfileViewer({
  initialUsername = '',
  autoSearch = false,
  title,
  subtitle,
  titleKey,
  subtitleKey,
  heroVariant = 'default',
  breadcrumbs,
  children,
}: TikTokProfileViewerProps) {
  const { t, translateText } = useI18n();

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
  const [modalErrorMsg, setModalErrorMsg] = useState<string | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [highlightedVideoKey, setHighlightedVideoKey] = useState<string | null>(
    null
  );

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
  const resultsRef = useRef<HTMLDivElement | null>(null);
  const pendingScrollRef = useRef(false);
  const playbackFallbackStepRef = useRef<number>(0);
  const activeModalIdRef = useRef<string>('');
  const activeCardKeyRef = useRef<string>('');
  const lastDownloadedKeyRef = useRef<string>('');
  const videoCardRefs = useRef<Map<string, HTMLDivElement>>(new Map());
  const hasActiveResult = Boolean(authorProfile || videos.length > 0 || loading);

  const resolvedTitle = titleKey
    ? t(titleKey)
    : title
    ? translateText(title)
    : '';
  const resolvedSubtitle = subtitleKey
    ? t(subtitleKey)
    : subtitle
    ? translateText(subtitle)
    : '';

  const alignScrollToResults = useCallback(() => {
    if (typeof window === 'undefined' || !resultsRef.current) return;
    const headerEl = document.querySelector('header');
    const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 80;
    const rect = resultsRef.current.getBoundingClientRect();
    const targetTop = Math.max(0, Math.round(window.scrollY + rect.top - headerHeight));

    window.scrollTo({
      top: targetTop,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    if (!pendingScrollRef.current || loading || (!authorProfile && videos.length === 0)) {
      return;
    }

    pendingScrollRef.current = false;
    let frame2 = 0;
    const frame1 = requestAnimationFrame(() => {
      frame2 = requestAnimationFrame(() => {
        alignScrollToResults();
      });
    });

    return () => {
      cancelAnimationFrame(frame1);
      if (frame2) cancelAnimationFrame(frame2);
    };
  }, [authorProfile, videos.length, loading, alignScrollToResults]);

  const handleCopyProfileLink = () => {
    if (typeof window !== 'undefined' && authorProfile) {
      navigator.clipboard.writeText(
        `https://tikprofilesviewer.com/profile/${authorProfile.unique_id}`
      );
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadAvatar = () => {
    if (!authorProfile) return;
    lastDownloadedKeyRef.current = '';
    const avatarUrl =
      authorProfile.avatar ||
      `/api/avatar?username=${encodeURIComponent(authorProfile.unique_id)}`;
    const filename = `${authorProfile.unique_id}-avatar.jpg`;
    setCounterModalData({
      url: avatarUrl,
      filename,
      mediaType: 'avatar',
      title: `@${authorProfile.unique_id}`,
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
    setModalErrorMsg(null);
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
    pendingScrollRef.current = false;
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
            const headerEl = document.querySelector('header');
            const headerHeight = headerEl ? Math.ceil(headerEl.getBoundingClientRect().height) : 80;
            const rect = cardEl.getBoundingClientRect();
            const targetTop =
              window.scrollY +
              rect.top -
              Math.max(headerHeight + 16, (window.innerHeight - rect.height) / 2);
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
    async (usernameToSearch?: string, shouldScroll = true) => {
      const targetUser = sanitizeUsername(
        usernameToSearch !== undefined ? usernameToSearch : usernameInput
      );
      if (!targetUser) {
        setErrorMsg(t('search.errorEmpty'));
        return;
      }

      pendingScrollRef.current = shouldScroll;
      setLoading(true);
      setErrorMsg(null);
      setNextCursor(null);
      setHasMore(false);

      try {
        const result = await fetchProfileDirect(targetUser);

        if (!result || result.code !== 0 || !result.data) {
          pendingScrollRef.current = false;
          setErrorMsg(t('search.errorNotFound', { username: targetUser }));
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
          stats.heartCount = postVideos.reduce(
            (acc, v) => acc + (Number(v.digg_count) || 0),
            0
          );
        }

        setAuthorProfile(authorInfo);
        setProfileStats(stats);
        setVideos(postVideos);
        setNextCursor(result.data.cursor || null);
        setHasMore(Boolean(result.data.hasMore && result.data.cursor));

        if (authorInfo.status === 'private') {
          setErrorMsg(t('search.errorPrivate', { username: targetUser }));
        } else if (postVideos.length === 0) {
          setErrorMsg(t('search.errorNoVideos', { username: targetUser }));
        }
      } catch {
        pendingScrollRef.current = false;
        setErrorMsg(t('search.errorFailed'));
        setAuthorProfile(null);
        setProfileStats(null);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    },
    [usernameInput, t]
  );

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const onHeaderSearch = (event: Event) => {
      const customEvent = event as CustomEvent<{ username?: string }>;
      const target = customEvent.detail?.username;
      if (target) {
        setUsernameInput(target);
        void handleSearch(target, true);
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
        void handleSearch(initialUsername, false);
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
    const authorUser =
      video.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    activeModalIdRef.current = videoId;
    activeCardKeyRef.current = cardKey;
    playbackFallbackStepRef.current = 0;

    setModalErrorMsg(null);
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
    const authorUser =
      selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';

    if (step === 0) {
      playbackFallbackStepRef.current = 1;
      setVideoResolving(true);
      const resolved = await resolveVideoStreamDirect(videoId, authorUser);
      setVideoResolving(false);
      if (activeModalIdRef.current !== videoId) return;

      const candidate =
        resolved?.play || resolved?.wmplay || selectedVideo.wmplay || '';
      if (candidate && candidate !== activePlayUrl) {
        setActivePlayUrl(
          resolved?.needsProxy
            ? `/api/proxy?url=${encodeURIComponent(candidate)}`
            : candidate
        );
        return;
      }
    }

    if (
      step <= 1 &&
      activePlayUrl &&
      !activePlayUrl.startsWith('/api/proxy')
    ) {
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
    setModalErrorMsg(null);
    setDownloadingVideo(true);

    const authorUser =
      selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    const videoId = String(
      selectedVideo.video_id || selectedVideo.id || Date.now()
    );
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
        activeCardKeyRef.current ||
        String(selectedVideo.video_id || selectedVideo.id || '');
      setCounterModalData({
        url: directVideoUrl,
        filename,
        mediaType: 'video',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      setModalErrorMsg(t('modal.videoUnavailable'));
    }

    setDownloadingVideo(false);
  };

  const handleDownloadAudio = async () => {
    if (!selectedVideo || downloadingAudio) return;
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setModalErrorMsg(null);
    setDownloadingAudio(true);

    const authorUser =
      selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    const videoId = String(
      selectedVideo.video_id || selectedVideo.id || Date.now()
    );
    const filename = `${authorUser}-${videoId}.mp3`;

    let directAudioUrl =
      selectedVideo.music_info?.play || selectedVideo.music || '';
    if (!directAudioUrl) {
      const resolved = await resolveVideoStreamDirect(videoId, authorUser);
      directAudioUrl = resolved?.music || '';
    }

    if (directAudioUrl) {
      lastDownloadedKeyRef.current =
        activeCardKeyRef.current ||
        String(selectedVideo.video_id || selectedVideo.id || '');
      setCounterModalData({
        url: directAudioUrl,
        filename,
        mediaType: 'audio',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      setModalErrorMsg(t('modal.audioUnavailable'));
    }

    setDownloadingAudio(false);
  };

  const modalAuthorUser =
    selectedVideo?.author?.unique_id || authorProfile?.unique_id || 'creator';
  const modalAuthorAvatar =
    selectedVideo?.author?.avatar ||
    authorProfile?.avatar ||
    `/api/avatar?username=${encodeURIComponent(modalAuthorUser)}`;

  const renderSearchForm = () => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void handleSearch(undefined, true);
      }}
      className="tpv-search-shell relative flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-xl p-1.5"
    >
      <label htmlFor="tiktok-username-search" className="sr-only">
        {t('search.label')}
      </label>

      <div className="flex items-center flex-1 min-w-0 gap-2">
        <div
          aria-hidden="true"
          className="flex items-center justify-center w-10 h-10 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] font-mono font-bold text-sm select-none shrink-0 transition-colors"
        >
          @
        </div>

        <input
          id="tiktok-username-search"
          type="text"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          spellCheck={false}
          aria-label={t('search.label')}
          value={usernameInput}
          onChange={(e) => setUsernameInput(e.target.value)}
          placeholder={t('search.placeholder')}
          disabled={loading}
          className="w-full bg-transparent h-11 px-1.5 text-sm sm:text-[15px] text-[var(--ink-primary)] font-medium placeholder:text-[var(--ink-muted)] placeholder:font-normal focus:outline-none disabled:opacity-60 transition-colors"
        />

        {usernameInput && !loading && (
          <button
            type="button"
            onClick={() => setUsernameInput('')}
            aria-label={t('search.clear')}
            title={t('search.clear')}
            className="w-8 h-8 rounded-lg hover:bg-[var(--surface-canvas)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] flex items-center justify-center shrink-0 cursor-pointer transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="shrink-0 h-11 flex items-center justify-center gap-2 px-6 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold text-sm transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] disabled:cursor-not-allowed cursor-pointer"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-current" />
            <span>{t('search.searching')}</span>
          </>
        ) : (
          <>
            <Search className="w-4 h-4 text-current" />
            <span>{t('search.btn')}</span>
          </>
        )}
      </button>
    </form>
  );

  const renderPopularRow = () => (
    <div className="mt-3.5 flex flex-wrap items-center justify-center gap-2">
      <span className="text-xs font-semibold text-[var(--ink-secondary)] whitespace-nowrap">
        {t('search.popular')}
      </span>
      {FEATURED_SUGGESTIONS.map((item) => (
        <button
          key={item.username}
          type="button"
          data-no-translate="true"
          onClick={() => {
            setUsernameInput(item.username);
            void handleSearch(item.username, true);
          }}
          className="h-7 text-xs font-semibold px-3 rounded-full bg-[var(--surface-elevated)]/85 hover:bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--ink-primary)]/50 text-[var(--ink-primary)] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
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
        className="mt-4 p-3.5 rounded-xl bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)] text-[var(--ink-primary)] text-xs flex items-start gap-2.5 text-start"
      >
        <AlertCircle className="w-4 h-4 text-[var(--status-danger)] shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="font-semibold text-[var(--ink-primary)]">
            {t('search.noticeTitle')}
          </p>
          <p className="text-[var(--ink-secondary)] text-xs mt-0.5">{errorMsg}</p>
        </div>
      </div>
    ) : null;

  const isWorkbench = heroVariant === 'workbench';

  return (
    <div className="w-full flex flex-col items-center">
      {isWorkbench ? (
        <section className="w-full hero-studio-backdrop border-b border-[var(--border-subtle)] -mt-20 pt-28 pb-12 sm:pt-32 sm:pb-14">
          <MotionFadeIn className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col items-center text-center">
            {breadcrumbs && (
              <div className="w-full text-start mb-3">{breadcrumbs}</div>
            )}

            {resolvedTitle && (
              <h1 className="text-[length:var(--h1-size)] font-extrabold tracking-tight text-[var(--ink-primary)] leading-[1.15] max-w-3xl">
                {resolvedTitle}
              </h1>
            )}
            {resolvedSubtitle && (
              <p className="text-sm sm:text-base text-[var(--ink-secondary)] mt-3.5 leading-relaxed max-w-2xl">
                {resolvedSubtitle}
              </p>
            )}

            <div className="w-full max-w-2xl mt-7 text-start">
              <div className="flex items-center justify-between gap-2 mb-2 px-1">
                <span className="text-xs font-bold text-[var(--ink-primary)]">
                  {t('search.label')}
                </span>
                <span className="text-xs font-medium text-[var(--ink-muted)]">
                  {t('search.publicOnly')}
                </span>
              </div>

              {renderSearchForm()}
              {renderPopularRow()}
              {renderErrorNotice()}
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-x-4 gap-y-1.5 text-xs font-semibold text-[var(--ink-secondary)]">
              <span>{t('cap.hdVideo')}</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">
                •
              </span>
              <span>{t('cap.anonymous')}</span>
              <span aria-hidden="true" className="text-[var(--border-strong)]">
                •
              </span>
              <span>{t('cap.mp3Audio')}</span>
            </div>
          </MotionFadeIn>
        </section>
      ) : (
        <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-4 flex flex-col items-center text-center">
          {breadcrumbs && (
            <div className="w-full text-start mb-3">{breadcrumbs}</div>
          )}

          {(resolvedTitle || resolvedSubtitle) && (
            <div className="text-center max-w-2xl mx-auto mb-6">
              {resolvedTitle && (
                <h1 className="text-[length:var(--h1-size)] font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
                  {resolvedTitle}
                </h1>
              )}
              {resolvedSubtitle && (
                <p className="text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
                  {resolvedSubtitle}
                </p>
              )}
            </div>
          )}

          <section className="w-full max-w-2xl mx-auto mb-4 text-start">
            {renderSearchForm()}
            {!hasActiveResult && renderPopularRow()}
            {renderErrorNotice()}
          </section>
        </div>
      )}

      {/* Results Container (Profile + Videos Grid) */}
      {(authorProfile || (videos.length > 0 && !loading)) && (
        <div
          ref={resultsRef}
          className="w-full bg-[var(--surface-canvas)] scroll-mt-20"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
            {authorProfile && (
              <MotionFadeIn>
                <section className="w-full mb-8 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] rounded-2xl p-5 sm:p-6">
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5 text-center sm:text-start">
                    <div className="relative shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={
                          authorProfile.avatar ||
                          `/api/avatar?username=${encodeURIComponent(
                            authorProfile.unique_id
                          )}`
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
                          <h2
                            data-no-translate="true"
                            className="text-lg sm:text-xl font-bold text-[var(--ink-primary)] tracking-tight"
                          >
                            {authorProfile.nickname || authorProfile.unique_id}
                          </h2>

                          {authorProfile.verified && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] text-[var(--accent-cyan-text)] text-xs font-semibold">
                              {t('profile.verified')}
                            </span>
                          )}
                        </div>

                        <div className="flex items-center justify-center sm:justify-end gap-2 flex-wrap shrink-0">
                          <button
                            type="button"
                            onClick={handleDownloadAvatar}
                            className="h-9 px-3.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] text-xs font-semibold inline-flex items-center justify-center transition-colors whitespace-nowrap cursor-pointer"
                            title={t('profile.avatarTitle')}
                          >
                            {t('profile.avatar')}
                          </button>

                          <button
                            type="button"
                            onClick={handleCopyProfileLink}
                            className="h-9 px-3.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] text-xs font-semibold inline-flex items-center justify-center transition-colors whitespace-nowrap cursor-pointer"
                            title={t('profile.copyLinkTitle')}
                          >
                            {copiedLink
                              ? t('profile.copied')
                              : t('profile.copyLink')}
                          </button>

                          <a
                            href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                            target="_blank"
                            rel="noreferrer noopener"
                            referrerPolicy="no-referrer"
                            className="h-9 px-4 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] text-xs font-semibold inline-flex items-center justify-center transition-colors whitespace-nowrap"
                            title={t('profile.openTikTokTitle')}
                          >
                            {t('profile.openTikTok')}
                          </a>
                        </div>
                      </div>

                      <div className="mt-1.5 flex flex-col gap-1 items-center sm:items-start">
                        <div className="flex items-center justify-center sm:justify-start gap-2 text-xs text-[var(--ink-muted)] flex-wrap">
                          <span
                            data-no-translate="true"
                            className="font-mono text-[var(--ink-secondary)] font-semibold"
                          >
                            @{authorProfile.unique_id}
                          </span>
                          <span>•</span>
                          <span>{t('profile.publicCreator')}</span>
                        </div>

                        {authorProfile.signature && (
                          <p
                            data-no-translate="true"
                            className="text-xs sm:text-[13px] text-[var(--ink-secondary)] line-clamp-2 leading-relaxed mt-1 max-w-2xl"
                          >
                            {authorProfile.signature}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[var(--border-subtle)] my-5" />

                  {/* Profile Stat Tiles */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 items-stretch text-center sm:text-start">
                    <div className="rounded-xl px-3.5 py-2.5 bg-[var(--pastel-blue)]/65 border border-[var(--pastel-blue-border)] flex flex-col justify-center items-center sm:items-start">
                      <span className="text-[11px] font-semibold text-[var(--ink-secondary)] leading-none mb-1.5">
                        {t('profile.status')}
                      </span>
                      <span className="text-xs font-bold text-[var(--ink-primary)] leading-tight flex items-center gap-1.5">
                        <span
                          className={`w-2 h-2 rounded-full shrink-0 ${
                            authorProfile.status === 'private'
                              ? 'bg-[var(--status-warning)]'
                              : 'bg-[var(--accent-cyan)]'
                          }`}
                        />
                        <span>
                          {authorProfile.status === 'private'
                            ? t('profile.private')
                            : t('profile.active')}
                        </span>
                      </span>
                    </div>

                    <div className="rounded-xl px-3.5 py-2.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                      <span className="text-[11px] font-semibold text-[var(--ink-muted)] leading-none mb-1.5">
                        {t('profile.followers')}
                      </span>
                      <span className="text-sm font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                        {formatNumber(profileStats?.followerCount)}
                      </span>
                    </div>

                    <div className="rounded-xl px-3.5 py-2.5 bg-[var(--pastel-pink)]/65 border border-[var(--pastel-pink-border)] flex flex-col justify-center">
                      <span className="text-[11px] font-semibold text-[var(--ink-secondary)] leading-none mb-1.5">
                        {t('profile.totalLikes')}
                      </span>
                      <span className="text-sm font-bold text-[var(--accent-primary-text)] font-mono tabular-nums tracking-tight leading-tight truncate">
                        {formatNumber(profileStats?.heartCount)}
                      </span>
                    </div>

                    <div className="rounded-xl px-3.5 py-2.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                      <span className="text-[11px] font-semibold text-[var(--ink-muted)] leading-none mb-1.5">
                        {t('profile.following')}
                      </span>
                      <span className="text-sm font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                        {formatNumber(profileStats?.followingCount)}
                      </span>
                    </div>

                    <div className="rounded-xl px-3.5 py-2.5 bg-[var(--pastel-lavender)]/70 border border-[var(--pastel-lavender-border)] flex flex-col justify-center">
                      <span className="text-[11px] font-semibold text-[var(--ink-secondary)] leading-none mb-1.5">
                        {t('profile.videos')}
                      </span>
                      <span className="text-sm font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-tight truncate">
                        {formatNumber(profileStats?.videoCount ?? videos.length)}
                      </span>
                    </div>

                    <div className="rounded-xl px-3.5 py-2.5 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex flex-col justify-center">
                      <span className="text-[11px] font-semibold text-[var(--ink-muted)] leading-none mb-1.5">
                        {t('profile.accountType')}
                      </span>
                      <span className="text-xs font-bold text-[var(--ink-primary)] leading-tight truncate">
                        {authorProfile.verified
                          ? t('profile.verifiedCreator')
                          : t('profile.publicAccount')}
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
                        {t('profile.publishedVideos')}
                      </h3>
                      <span className="text-xs font-mono tabular-nums font-semibold px-2.5 py-0.5 rounded-full bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-[var(--ink-primary)]">
                        {t('profile.loaded', { count: videos.length })}
                      </span>
                    </div>
                    <div className="text-xs font-medium text-[var(--ink-muted)]">
                      {t('profile.selectVideoHint')}
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
                          className={`group relative aspect-[9/16] rounded-xl overflow-hidden bg-zinc-950 border cursor-pointer shadow-[var(--shadow-card)] hover:shadow-[0_14px_28px_-10px_rgba(15,23,42,0.38)] transition-[border-color,box-shadow] duration-300 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                            isHighlighted
                              ? 'border-[var(--accent-primary)] ring-2 ring-[var(--accent-primary)]/30'
                              : 'border-[var(--border-subtle)] hover:border-[var(--ink-primary)]/60 hover:ring-2 hover:ring-[var(--ink-primary)]/12'
                          }`}
                        >
                          {coverImg ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={coverImg}
                              alt={video.title || t('modal.defaultVideoTitle')}
                              referrerPolicy="no-referrer"
                              loading="lazy"
                              data-step="0"
                              className="w-full h-full object-cover bg-zinc-950 pointer-events-none transition-[filter] duration-300 ease-out group-hover:brightness-[1.06]"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                const step = target.getAttribute('data-step') || '0';

                                if (
                                  step === '0' &&
                                  video.origin_cover &&
                                  video.origin_cover !== coverImg
                                ) {
                                  target.setAttribute('data-step', '1');
                                  target.src = video.origin_cover;
                                  return;
                                }

                                if (step === '0' || step === '1') {
                                  target.setAttribute('data-step', '2');
                                  const rawCover =
                                    video.cover || video.origin_cover || '';
                                  if (
                                    rawCover &&
                                    !rawCover.startsWith('/api/proxy')
                                  ) {
                                    target.src = `/api/proxy?url=${encodeURIComponent(
                                      rawCover
                                    )}`;
                                    return;
                                  }
                                }

                                target.style.display = 'none';
                              }}
                            />
                          ) : null}

                          <div className="absolute inset-0 flex items-center justify-center bg-zinc-950/12 group-hover:bg-zinc-950/28 transition-colors duration-300 ease-out pointer-events-none">
                            <div className="w-11 h-11 rounded-full bg-zinc-950/70 backdrop-blur-xs border border-white/70 text-white flex items-center justify-center shadow-md opacity-90 group-hover:opacity-100 group-hover:bg-[var(--accent-primary)] group-hover:border-white group-hover:shadow-[0_0_0_6px_rgba(225,29,72,0.22)] transition-[background-color,border-color,box-shadow,opacity] duration-300 ease-out">
                              <Play className="w-4 h-4 fill-white text-white translate-x-0.5" />
                            </div>
                          </div>

                          <div className="absolute inset-x-0 top-0 p-2.5 flex justify-between items-start bg-gradient-to-b from-zinc-950/75 via-zinc-950/20 to-transparent pointer-events-none">
                            <span className="text-[11px] font-mono tabular-nums font-semibold px-2 py-0.5 rounded-md bg-zinc-950/75 group-hover:bg-zinc-950/90 text-white transition-colors duration-300">
                              #{index + 1}
                            </span>
                            {duration && (
                              <span className="text-[11px] font-mono tabular-nums font-semibold px-2 py-0.5 rounded-md bg-zinc-950/75 group-hover:bg-zinc-950/90 text-white transition-colors duration-300">
                                {duration}
                              </span>
                            )}
                          </div>

                          <div className="absolute inset-x-0 bottom-0 px-3 py-3 bg-gradient-to-t from-zinc-950/95 via-zinc-950/80 to-transparent flex flex-col gap-2 pointer-events-none text-start">
                            <p
                              data-no-translate="true"
                              className="text-xs text-white/95 line-clamp-2 font-medium leading-snug"
                            >
                              {video.title || t('profile.watchVideo')}
                            </p>

                            <div className="grid grid-cols-3 items-center gap-1 text-xs text-white font-mono tabular-nums font-semibold pt-2 border-t border-white/20 group-hover:border-white/35 transition-colors duration-300 w-full">
                              <span
                                className="flex items-center justify-start gap-1.5 min-w-0"
                                title={t('profile.viewsTitle', {
                                  count: video.play_count || 0,
                                })}
                              >
                                <Play className="w-3.5 h-3.5 fill-white text-white shrink-0" />
                                <span className="truncate">
                                  {formatNumber(video.play_count)}
                                </span>
                              </span>

                              <span
                                className="flex items-center justify-center gap-1.5 min-w-0"
                                title={t('profile.likesTitle', {
                                  count: video.digg_count || 0,
                                })}
                              >
                                <Heart className="w-3.5 h-3.5 fill-[var(--accent-primary)] text-[var(--accent-primary)] shrink-0" />
                                <span className="truncate">
                                  {formatNumber(video.digg_count)}
                                </span>
                              </span>

                              <span
                                className="flex items-center justify-end gap-1.5 min-w-0"
                                title={t('profile.sharesTitle', {
                                  count: video.share_count || 0,
                                })}
                              >
                                <Share2 className="w-3.5 h-3.5 shrink-0" />
                                <span className="truncate">
                                  {formatNumber(video.share_count)}
                                </span>
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
                        className="h-11 px-6 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] font-semibold text-xs tracking-wide uppercase flex items-center gap-2 transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                      >
                        {loadingMore ? (
                          <>
                            <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                            <span>{t('profile.loadingMore')}</span>
                          </>
                        ) : (
                          <>
                            <span>{t('profile.showMore')}</span>
                            <ChevronDown className="w-3.5 h-3.5 text-current/85" />
                          </>
                        )}
                      </button>
                      <p className="text-xs text-[var(--ink-muted)] mt-2 tabular-nums">
                        {t('profile.showingOf', {
                          shown: videos.length,
                          total: profileStats?.videoCount || videos.length,
                        })}
                      </p>
                    </div>
                  )}
                </section>
              </MotionFadeIn>
            )}
          </div>
        </div>
      )}

      {/* Video Player Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <MotionModalBackdrop
            onClick={closeModal}
            className="fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <MotionModalPanel
              ariaLabel={`@${modalAuthorUser}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-[440px] h-[580px] sm:h-[620px] max-h-[90vh] bg-[var(--surface-elevated)] rounded-2xl overflow-hidden border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] flex flex-col justify-between"
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
                        target.src = `/api/avatar?username=${encodeURIComponent(
                          modalAuthorUser
                        )}`;
                      }
                    }}
                  />
                  <div className="min-w-0 flex items-center gap-2">
                    <span
                      data-no-translate="true"
                      className="text-xs font-bold text-[var(--ink-primary)] truncate"
                    >
                      @{modalAuthorUser}
                    </span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-md bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] text-[var(--ink-primary)] text-[10px] font-bold uppercase tracking-wider shrink-0">
                      {t('modal.hdBadge')}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={closeModal}
                  className="w-8 h-8 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:bg-[var(--surface-sunken)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                  title={t('modal.close')}
                  aria-label={t('modal.close')}
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Video Viewport */}
              <div className="relative flex-1 min-h-0 bg-zinc-950 flex items-center justify-center w-full overflow-hidden">
                {videoResolving && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-2 bg-zinc-950/90 text-white">
                    <Loader2 className="w-7 h-7 animate-spin text-white" />
                    <span className="text-xs font-medium text-white/90">
                      {t('modal.loadingStream')}
                    </span>
                  </div>
                )}

                {!isVideoPlaying && !videoResolving && (
                  <button
                    type="button"
                    onClick={handleCustomPlayClick}
                    aria-label={t('modal.playVideo')}
                    className="absolute inset-0 m-auto z-20 w-14 h-14 rounded-full bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-white border-2 border-white/90 shadow-[var(--shadow-workbench)] flex items-center justify-center transition-colors duration-200 cursor-pointer"
                  >
                    <Play className="w-6 h-6 fill-white text-white translate-x-0.5" />
                  </button>
                )}

                <video
                  ref={modalVideoRef}
                  src={activePlayUrl || undefined}
                  poster={
                    selectedVideo.cover || selectedVideo.origin_cover || undefined
                  }
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
                <p
                  data-no-translate="true"
                  className="text-xs sm:text-[13px] font-semibold text-[var(--ink-primary)] line-clamp-2 leading-snug break-words text-start"
                >
                  {selectedVideo.title || t('modal.defaultVideoTitle')}
                </p>

                <div className="flex items-center justify-between text-xs sm:text-[13px] text-[var(--ink-secondary)] bg-[var(--surface-canvas)] px-4 py-2.5 rounded-xl border border-[var(--border-subtle)] font-mono tabular-nums font-bold">
                  <span className="flex items-center gap-1.5 text-[var(--ink-primary)]">
                    <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />
                    <span>{formatNumber(selectedVideo.play_count)}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[var(--accent-primary-text)]">
                    <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[var(--accent-primary)] text-[var(--accent-primary)]" />
                    <span>{formatNumber(selectedVideo.digg_count)}</span>
                  </span>
                  <span className="flex items-center gap-1.5 text-[var(--ink-secondary)]">
                    <Share2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span>{formatNumber(selectedVideo.share_count)}</span>
                  </span>
                  {selectedVideo.duration ? (
                    <span className="text-[var(--ink-muted)]">
                      {formatDuration(selectedVideo.duration)}
                    </span>
                  ) : null}
                </div>

                {modalErrorMsg && (
                  <div
                    role="alert"
                    className="p-2.5 rounded-lg bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)] text-xs font-medium text-[var(--ink-primary)] flex items-center gap-2"
                  >
                    <AlertCircle className="w-3.5 h-3.5 text-[var(--status-danger)] shrink-0" />
                    <span>{modalErrorMsg}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <button
                    type="button"
                    disabled={downloadingVideo || downloadingAudio}
                    onClick={() => void handleDownloadVideo()}
                    className="w-full h-10 px-4 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                  >
                    {downloadingVideo ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                        <span>{t('modal.preparing')}</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>{t('modal.downloadVideo')}</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    disabled={downloadingVideo || downloadingAudio}
                    onClick={() => void handleDownloadAudio()}
                    className="w-full h-10 px-4 rounded-lg bg-[var(--surface-canvas)] hover:bg-[var(--surface-sunken)] border border-[var(--border-strong)] text-[var(--ink-primary)] font-bold text-xs flex items-center justify-center gap-1.5 transition-colors disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] cursor-pointer"
                  >
                    {downloadingAudio ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-current" />
                        <span>{t('modal.preparing')}</span>
                      </>
                    ) : (
                      <>
                        <Music className="w-3.5 h-3.5" />
                        <span>{t('modal.downloadAudio')}</span>
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