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
  executeDirectCdnDownload,
  sanitizeUsername,
} from '@/lib/tiktok-client';

export interface Author {
  unique_id: string;
  nickname: string;
  avatar: string;
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
  const [downloadingVideo, setDownloadingVideo] = useState(false);
  const [downloadingAudio, setDownloadingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

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
  const hasActiveResult = Boolean(authorProfile || videos.length > 0 || loading);

  const handleCopyProfileLink = () => {
    if (typeof window !== 'undefined' && authorProfile) {
      navigator.clipboard.writeText(`https://tikprofilesviewer.com/profile/${authorProfile.unique_id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadAvatar = () => {
    if (!authorProfile?.avatar) return;
    const filename = `${authorProfile.unique_id}-avatar.jpg`;
    setCounterModalData({
      url: authorProfile.avatar,
      filename,
      mediaType: 'avatar',
      title: `@${authorProfile.unique_id} Profile Photo`,
    });
    setCounterModalOpen(true);
  };

  const closeModal = useCallback(() => {
    setSelectedVideo(null);
    setActivePlayUrl('');
    setDownloadingVideo(false);
    setDownloadingAudio(false);
  }, []);

  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedVideo]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, closeModal]);

  const handleSearch = useCallback(
    async (usernameToSearch?: string) => {
      const targetUser = sanitizeUsername(usernameToSearch || usernameInput);
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
        const userObj = result.data.user || {};
        const statsObj = result.data.stats || {};

        const authorInfo: Author = {
          unique_id: userObj.unique_id || targetUser,
          nickname: userObj.nickname || targetUser,
          avatar: userObj.avatar || '',
          signature: userObj.signature || '',
          verified: !!userObj.verified,
          status: userObj.status || 'active',
        };

        const stats: ProfileStats = {
          followerCount: statsObj.followerCount ?? null,
          followingCount: statsObj.followingCount ?? null,
          heartCount: statsObj.heartCount ?? null,
          videoCount: statsObj.videoCount ?? postVideos.length,
        };

        if (stats.heartCount === null && postVideos.length > 0) {
          stats.heartCount = postVideos.reduce((acc, v) => acc + (Number(v.digg_count) || 0), 0);
        }

        setAuthorProfile(authorInfo);
        setProfileStats(stats);
        setVideos(postVideos);
        setNextCursor(result.data.cursor || null);
        setHasMore(Boolean(result.data.hasMore && result.data.cursor));

        if (postVideos.length === 0) {
          setErrorMsg(`@${targetUser} was found, but has 0 public videos.`);
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
        handleSearch(initialUsername);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [autoSearch, initialUsername, handleSearch]);

  const handleShowMoreVideos = async () => {
    if (!authorProfile?.unique_id || !nextCursor || loadingMore) return;
    setLoadingMore(true);

    try {
      const res = await fetch(
        `/api/tiktok?username=${encodeURIComponent(
          authorProfile.unique_id
        )}&cursor=${nextCursor}&count=15`
      );
      const data = await res.json();

      if (data && data.code === 0 && data.data?.videos && data.data.videos.length > 0) {
        const newBatch: TikTokVideo[] = data.data.videos;
        setVideos((prev) => {
          const seen = new Set(prev.map((v) => v.id || v.video_id));
          const appended = [...prev];
          for (const item of newBatch) {
            const key = item.id || item.video_id;
            if (!seen.has(key)) {
              appended.push(item);
              seen.add(key);
            }
          }
          return appended;
        });

        const nextC = data.data.cursor || null;
        setNextCursor(nextC);
        setHasMore(Boolean(data.data.hasMore && nextC));
      } else {
        setHasMore(false);
      }
    } catch {
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  const openModal = (video: TikTokVideo) => {
    setSelectedVideo(video);
    const directPlayableUrl = video.play || video.wmplay || '';
    setActivePlayUrl(directPlayableUrl);

    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.load();
        modalVideoRef.current.play().catch(() => {});
      }
    }, 20);
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
    const directVideoUrl = selectedVideo.play || selectedVideo.wmplay || activePlayUrl;

    if (directVideoUrl) {
      setCounterModalData({
        url: directVideoUrl,
        filename,
        mediaType: 'video',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      alert('Direct video stream URL is unavailable.');
    }

    setTimeout(() => {
      setDownloadingVideo(false);
    }, 500);
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
    const directAudioUrl = selectedVideo.music_info?.play || selectedVideo.music || '';

    if (directAudioUrl) {
      setCounterModalData({
        url: directAudioUrl,
        filename,
        mediaType: 'audio',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      alert('Direct audio stream URL is unavailable.');
    }

    setTimeout(() => {
      setDownloadingAudio(false);
    }, 500);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-6">
          {title && (
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Search Input Box */}
      <section className="w-full max-w-2xl mx-auto mb-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="relative flex items-center bg-white border border-slate-300 rounded-xl p-1.5 shadow-[0_4px_20px_rgb(0,0,0,0.05)] focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 transition-all"
        >
          <div className="flex items-center pl-3.5 pr-1 text-slate-400 select-none pointer-events-none">
            <span className="font-bold text-base text-slate-400">@</span>
          </div>

          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            placeholder="Search TikTok username (e.g. khaby.lame)"
            disabled={loading}
            className="w-full bg-transparent py-3 px-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="shrink-0 flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-[#01ebe4] hover:bg-[#00d7d0] active:scale-[0.98] text-[#000000] font-bold text-xs sm:text-sm shadow-xs transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#000000]" />
                <span className="hidden sm:inline">Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4 text-[#000000]" />
                <span>Search</span>
              </>
            )}
          </button>
        </form>

        {!hasActiveResult && (
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
              Trending:
            </span>
            {FEATURED_SUGGESTIONS.map((item) => (
              <button
                key={item.username}
                type="button"
                onClick={() => {
                  setUsernameInput(item.username);
                  handleSearch(item.username);
                }}
                className="text-xs font-medium px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                @{item.username}
              </button>
            ))}
          </div>
        )}

        {errorMsg && (
          <div className="mt-4 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">Profile lookup notice</p>
              <p className="text-red-700 text-xs mt-0.5">{errorMsg}</p>
            </div>
          </div>
        )}
      </section>

      {/* TikTok Profile Details Container */}
      {authorProfile && (
        <section className="w-full mb-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7">
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={authorProfile.avatar}
                alt={authorProfile.nickname || authorProfile.unique_id}
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl object-cover border-2 border-slate-200 bg-slate-100 shadow-sm"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60';
                }}
              />
            </div>

            <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {authorProfile.nickname || authorProfile.unique_id}
                  </h2>

                  <div className="flex items-center gap-1.5 ml-1">
                    <a
                      href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                      target="_blank"
                      rel="noreferrer noopener"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                      title="Open TikTok Profile"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyProfileLink}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                      title="Copy Profile Link"
                    >
                      {copiedLink ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-nowrap shrink-0">
                  <button
                    type="button"
                    onClick={handleDownloadAvatar}
                    className="h-9 px-3.5 sm:px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all whitespace-nowrap min-w-[85px] sm:min-w-[100px] cursor-pointer"
                    title="Download profile avatar"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                    <span>Avatar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyProfileLink}
                    className="h-9 px-3.5 sm:px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all whitespace-nowrap min-w-[85px] sm:min-w-[100px] cursor-pointer"
                    title="Copy profile link"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                    target="_blank"
                    rel="noreferrer noopener"
                    referrerPolicy="no-referrer"
                    className="h-9 px-3.5 sm:px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all whitespace-nowrap min-w-[85px] sm:min-w-[100px]"
                    title="Open TikTok profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>

              <div className="mt-2.5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 flex-wrap">
                  <span className="font-mono text-slate-900 font-bold">
                    @{authorProfile.unique_id}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-medium">TikTok Public Creator</span>
                </div>
                {authorProfile.signature && (
                  <p className="text-sm sm:text-base text-slate-700 line-clamp-3 leading-relaxed mt-0.5">
                    {authorProfile.signature}
                  </p>
                )}

                <div className="mt-2.5 flex items-center gap-2">
                  {authorProfile.verified ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>Verified</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium shadow-2xs">
                      <span>Not Verified</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-200 my-4 sm:my-5" />

          {/* Metrics Row */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-stretch">
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-emerald-50/90 border border-emerald-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 leading-none mb-1">
                Status
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-emerald-950 leading-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>{authorProfile.status === 'private' ? 'Private' : 'Active'}</span>
              </span>
            </div>

            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-sky-50/90 border border-sky-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-700 leading-none mb-1">
                Followers
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-sky-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.followerCount)}
              </span>
            </div>

            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-rose-50/90 border border-rose-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-700 leading-none mb-1">
                Total Likes
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-rose-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.heartCount)}
              </span>
            </div>

            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-purple-50/90 border border-purple-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-700 leading-none mb-1">
                Following
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-purple-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.followingCount)}
              </span>
            </div>

            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-amber-50/90 border border-amber-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-700 leading-none mb-1">
                Videos
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.videoCount ?? videos.length)}
              </span>
            </div>

            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-indigo-50/90 border border-indigo-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-700 leading-none mb-1">
                Account
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-indigo-950 leading-tight truncate">
                {authorProfile.verified ? 'Verified' : 'Public'}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Video Grid Section */}
      {videos.length > 0 && !loading && (
        <section className="w-full flex flex-col gap-4">
          <AdSlot placement="above_grid" />
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Videos
              </h3>
              <span className="text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-200 text-slate-800">
                {videos.length} videos
              </span>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Click any video to watch and download
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {videos.map((video, index) => {
              const coverImg = video.cover || video.origin_cover || '';
              const duration = formatDuration(video.duration);
              return (
                <div
                  key={video.video_id || video.id || index}
                  onClick={() => openModal(video)}
                  className="relative aspect-[9/16] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs group"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImg}
                    alt={video.title || 'TikTok video'}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover bg-slate-100 pointer-events-none"
                  />

                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#f7024e] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                    </div>
                  </div>

                  <div className="absolute inset-x-0 top-0 p-2.5 flex justify-between items-start bg-gradient-to-b from-black/75 via-black/25 to-transparent pointer-events-none">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/70 text-white shadow-xs">
                      #{index + 1}
                    </span>
                    {duration && (
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/70 text-white shadow-xs">
                        {duration}
                      </span>
                    )}
                  </div>

                  <div className="absolute inset-x-0 bottom-0 px-2 sm:px-2.5 py-2 sm:py-2.5 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col gap-1 pointer-events-none">
                    <p className="text-xs sm:text-sm text-white line-clamp-2 font-bold leading-snug drop-shadow-sm">
                      {video.title || 'Watch Video'}
                    </p>

                    <div className="grid grid-cols-3 items-center text-[10px] sm:text-[11px] text-white font-mono font-bold pt-1.5 border-t border-white/20 w-full">
                      <span className="flex items-center justify-start gap-1 text-slate-100 min-w-0" title={`${video.play_count || 0} views`}>
                        <Play className="w-3 h-3 fill-slate-100 text-slate-100 shrink-0" />
                        <span className="truncate">{formatNumber(video.play_count)}</span>
                      </span>

                      <span className="flex items-center justify-center gap-1 text-red-300 min-w-0" title={`${video.digg_count || 0} likes`}>
                        <Heart className="w-3 h-3 fill-red-400 text-red-400 shrink-0" />
                        <span className="truncate">{formatNumber(video.digg_count)}</span>
                      </span>

                      <span className="flex items-center justify-end gap-1 text-sky-200 min-w-0" title={`${video.share_count || 0} shares`}>
                        <Share2 className="w-3 h-3 text-sky-300 shrink-0" />
                        <span className="truncate">{formatNumber(video.share_count)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {hasMore && (
            <div className="flex flex-col items-center justify-center pt-6 pb-4">
              <button
                type="button"
                onClick={handleShowMoreVideos}
                disabled={loadingMore}
                className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer"
              >
                {loadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Loading more videos...</span>
                  </>
                ) : (
                  <>
                    <span>SHOW MORE VIDEOS</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
                Showing {videos.length} of {profileStats?.videoCount || 'all'} videos
              </p>
            </div>
          )}
        </section>
      )}

      {/* Video Player Modal */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[96vh] animate-in fade-in zoom-in-95 duration-200"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="relative bg-black flex items-center justify-center h-[54vh] sm:h-[60vh] max-h-[540px] min-h-[360px] w-full overflow-hidden shrink-0">
              <video
                ref={modalVideoRef}
                src={activePlayUrl || selectedVideo.play || selectedVideo.wmplay}
                controls
                playsInline
                autoPlay
                preload="metadata"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                className="w-full h-full object-contain"
              />
            </div>

            <div className="p-4 sm:p-6 flex flex-col gap-3.5 bg-white shrink-0">
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 line-clamp-2 leading-snug break-words">
                {selectedVideo.title || 'TikTok Video'}
              </p>

              <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 font-mono font-bold">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Play className="w-4 h-4 fill-slate-600 text-slate-600" />
                  <span>{formatNumber(selectedVideo.play_count)} views</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 text-red-500">
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  <span>{formatNumber(selectedVideo.digg_count)}</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 text-sky-600">
                  <Share2 className="w-4 h-4 text-sky-600" />
                  <span>{formatNumber(selectedVideo.share_count)}</span>
                </span>
                {selectedVideo.duration ? (
                  <span className="text-slate-500">{formatDuration(selectedVideo.duration)}</span>
                ) : null}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                <button
                  type="button"
                  disabled={downloadingVideo || downloadingAudio}
                  onClick={handleDownloadVideo}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer"
                >
                  {downloadingVideo ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download HD Video</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  disabled={downloadingVideo || downloadingAudio}
                  onClick={handleDownloadAudio}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-800 border border-slate-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer"
                >
                  {downloadingAudio ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-700" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Music className="w-4 h-4 text-slate-700" />
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
        onClose={() => setCounterModalOpen(false)}
        downloadUrl={counterModalData.url}
        fileName={counterModalData.filename}
        mediaType={counterModalData.mediaType}
        title={counterModalData.title}
      />
    </div>
  );
}