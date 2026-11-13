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
  children?: React.ReactNode;
}

export default function TikTokProfileViewer({
  initialUsername = '',
  autoSearch = false,
  title,
  subtitle,
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
    setDownloadingVideo(false);
    setDownloadingAudio(false);
    playbackFallbackStepRef.current = 0;
  }, []);

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
        modalVideoRef.current.play().catch(() => {});
      }
    }, 40);
  };

  const handleVideoPlayError = async () => {
    if (!selectedVideo) return;
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

  return (
    <div className="w-full flex flex-col items-center">
      {(title || subtitle) && (
        <div className="text-center max-w-2xl mx-auto mb-5 sm:mb-6">
          {title && (
            <h1 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-[#4B5563] mt-1.5 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Search Input Box */}
      <section className="w-full max-w-xl mx-auto mb-5">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            void handleSearch();
          }}
          className="relative flex items-center bg-[#FFFFFF] border border-[#D1D5DB] rounded-xl p-1.5 focus-within:border-[#D61C47] focus-within:ring-2 focus-within:ring-[#D61C47]/15 transition-all"
        >
          <div className="flex items-center pl-3 pr-1 text-[#5C6573] select-none pointer-events-none">
            <span className="font-bold text-sm sm:text-base text-[#5C6573]">@</span>
          </div>

          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            placeholder="Search TikTok username (e.g. khaby.lame)"
            disabled={loading}
            className="w-full bg-transparent py-2 sm:py-2.5 px-2 text-xs sm:text-sm text-[#111827] placeholder:text-[#5C6573] focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="shrink-0 flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-lg bg-[#D61C47] hover:bg-[#B9153B] active:scale-[0.98] text-[#FFFFFF] font-bold text-xs sm:text-sm transition-all disabled:opacity-60 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#FFFFFF]" />
                <span className="hidden sm:inline">Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4 text-[#FFFFFF]" />
                <span>Search</span>
              </>
            )}
          </button>
        </form>

        {!hasActiveResult && (
          <div className="flex items-center justify-center gap-2 mt-3.5 flex-wrap">
            <span className="text-xs text-[#5C6573] font-semibold whitespace-nowrap">
              Trending:
            </span>
            {FEATURED_SUGGESTIONS.map((item) => (
              <button
                key={item.username}
                type="button"
                onClick={() => {
                  setUsernameInput(item.username);
                  void handleSearch(item.username);
                }}
                className="text-xs font-semibold px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#D1D5DB] text-[#1F2937] hover:text-[#111827] hover:bg-[#F3F4F6] hover:border-[#9CA3AF] transition-colors whitespace-nowrap cursor-pointer"
              >
                @{item.username}
              </button>
            ))}
          </div>
        )}

        {errorMsg && (
          <div className="mt-3 p-3.5 rounded-xl bg-[#FDF2F4] border border-[#FECDD3] text-[#BE123C] text-xs flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-[#D61C47] shrink-0 mt-0.5" />
            <div className="flex-1">
              <p className="font-bold text-[#111827]">Profile lookup notice</p>
              <p className="text-[#BE123C] text-xs mt-0.5">{errorMsg}</p>
            </div>
          </div>
        )}
      </section>

      {/* Profile Details Container */}
      {authorProfile && (
        <section className="w-full mb-6 bg-[#FFFFFF] border border-[#E5E7EB] rounded-2xl p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-5">
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={authorProfile.avatar || `/api/avatar?username=${encodeURIComponent(authorProfile.unique_id)}`}
                alt={authorProfile.nickname || authorProfile.unique_id}
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl object-cover border border-[#E5E7EB] bg-[#F8F9FA]"
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
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-[#111827] tracking-tight">
                    {authorProfile.nickname || authorProfile.unique_id}
                  </h2>

                  <div className="flex items-center gap-1.5 ml-0.5">
                    <a
                      href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-lg bg-[#FFFFFF] hover:bg-[#F3F4F6] border border-[#D1D5DB] hover:border-[#9CA3AF] text-[#1F2937] flex items-center justify-center transition-colors"
                      title="Open TikTok Profile"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyProfileLink}
                      className="w-8 h-8 rounded-lg bg-[#FFFFFF] hover:bg-[#F3F4F6] border border-[#D1D5DB] hover:border-[#9CA3AF] text-[#1F2937] flex items-center justify-center transition-colors cursor-pointer"
                      title="Copy Profile Link"
                    >
                      {copiedLink ? (
                        <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                      ) : (
                        <Share2 className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-2 flex-nowrap shrink-0">
                  <button
                    type="button"
                    onClick={handleDownloadAvatar}
                    className="h-9 px-3.5 rounded-xl border border-[#D1D5DB] bg-[#FFFFFF] hover:bg-[#F3F4F6] hover:border-[#9CA3AF] active:scale-[0.98] text-[#1F2937] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer"
                    title="Download profile avatar"
                  >
                    <Download className="w-3.5 h-3.5 text-[#4B5563]" />
                    <span>Avatar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyProfileLink}
                    className="h-9 px-3.5 rounded-xl border border-[#D1D5DB] bg-[#FFFFFF] hover:bg-[#F3F4F6] hover:border-[#9CA3AF] active:scale-[0.98] text-[#1F2937] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all whitespace-nowrap cursor-pointer"
                    title="Copy profile link"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#0F766E]" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-[#4B5563]" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    referrerPolicy="no-referrer"
                    className="h-9 px-3.5 rounded-xl border border-[#D1D5DB] bg-[#FFFFFF] hover:bg-[#F3F4F6] hover:border-[#9CA3AF] active:scale-[0.98] text-[#1F2937] text-xs font-bold inline-flex items-center justify-center gap-1.5 transition-all whitespace-nowrap"
                    title="Open TikTok profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5 text-[#4B5563]" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>

              <div className="mt-1.5 flex flex-col gap-1 text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-1.5 text-xs text-[#5C6573] flex-wrap">
                  <span className="font-mono text-[#111827] font-bold">
                    @{authorProfile.unique_id}
                  </span>
                  <span className="text-[#9CA3AF]">•</span>
                  <span className="text-[#5C6573] font-medium">TikTok Public Creator</span>
                  {authorProfile.verified && (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#F0FDFA] border border-[#99F6E4]/70 text-[#0F766E] text-[11px] font-bold">
                      <CheckCircle2 className="w-3 h-3 text-[#0F766E] shrink-0" />
                      <span>Verified</span>
                    </span>
                  )}
                </div>

                {authorProfile.signature && (
                  <p className="text-xs sm:text-sm text-[#4B5563] line-clamp-2 leading-relaxed mt-0.5 max-w-xl">
                    {authorProfile.signature}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="border-t border-[#E5E7EB] my-3.5 sm:my-4" />

          {/* Metrics Row — Clean #F8F9FA boxes with #E5E7EB hairline borders */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 items-stretch">
            <div className="h-15 rounded-xl px-3.5 py-2 bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6573] leading-none mb-1">
                Status
              </span>
              {authorProfile.status === 'private' ? (
                <span className="text-xs sm:text-sm font-bold tracking-tight text-[#BE123C] leading-tight inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#FDF2F4] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#BE123C] shrink-0" />
                  <span>Private</span>
                </span>
              ) : (
                <span className="text-xs sm:text-sm font-bold tracking-tight text-[#0F766E] leading-tight inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#F0FDFA] w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0F766E] animate-pulse shrink-0" />
                  <span>Active</span>
                </span>
              )}
            </div>

            <div className="h-15 rounded-xl px-3.5 py-2 bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6573] leading-none mb-1">
                Followers
              </span>
              <span className="text-sm sm:text-base font-extrabold text-[#111827] font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.followerCount)}
              </span>
            </div>

            <div className="h-15 rounded-xl px-3.5 py-2 bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6573] leading-none mb-1">
                Total Likes
              </span>
              <span className="text-sm sm:text-base font-extrabold text-[#111827] font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.heartCount)}
              </span>
            </div>

            <div className="h-15 rounded-xl px-3.5 py-2 bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6573] leading-none mb-1">
                Following
              </span>
              <span className="text-sm sm:text-base font-extrabold text-[#111827] font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.followingCount)}
              </span>
            </div>

            <div className="h-15 rounded-xl px-3.5 py-2 bg-[#F8F9FA] border border-[#E5E7EB] flex flex-col justify-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#5C6573] leading-none mb-1">
                Videos
              </span>
              <span className="text-sm sm:text-base font-extrabold text-[#111827] font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.videoCount ?? videos.length)}
              </span>
            </div>

            <div className="h-15 rounded-xl px-3.5 py-2 bg-[#F8F9FA] border border-[#E5E7EB] f
