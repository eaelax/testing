'use client';

import { useRef, useState } from 'react';
import {
  Search,
  BarChart3,
  Users,
  Heart,
  Eye,
  MessageCircle,
  Share2,
  TrendingUp,
  Sparkles,
  AlertCircle,
  Play,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { fetchProfileDirect, sanitizeUsername } from '@/lib/tiktok-client';
import { useI18n } from '@/lib/i18n/context';

interface AnalyticsProfile {
  username: string;
  nickname: string;
  avatar: string;
  bio: string;
  verified: boolean;
  status: 'active' | 'private' | 'not_found';
  followers: number | null;
  following: number | null;
  likes: number | null;
  videosCount: number;
}

interface AnalyticsVideo {
  id: string;
  title: string;
  cover: string;
  originCover: string;
  plays: number;
  likes: number;
  comments: number;
  shares: number;
}

interface AnalyticsData {
  profile: AnalyticsProfile;
  videos: AnalyticsVideo[];
}

function formatNum(num: number | null | undefined): string {
  if (num === null || num === undefined || Number.isNaN(num)) return '-';
  if (num >= 1_000_000_000) return `${(num / 1_000_000_000).toFixed(1).replace(/\.0$/, '')}B`;
  if (num >= 1_000_000) return `${(num / 1_000_000).toFixed(1).replace(/\.0$/, '')}M`;
  if (num >= 1_000) return `${(num / 1_000).toFixed(1).replace(/\.0$/, '')}K`;
  return num.toString();
}

export default function AnalyticsPage() {
  const { t } = useI18n();
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AnalyticsData | null>(null);
  const requestSeqRef = useRef(0);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = sanitizeUsername(username);
    if (!clean) {
      setError(t('page.analytics.errEmpty'));
      return;
    }

    const reqId = ++requestSeqRef.current;
    setLoading(true);
    setError(null);
    setData(null);

    try {
      const result = await fetchProfileDirect(clean);
      if (reqId !== requestSeqRef.current) return;

      if (!result || result.code !== 0 || !result.data || !result.data.user) {
        setError(result?.msg || t('page.analytics.errNotFound'));
        return;
      }

      const { user, stats, videos } = result.data;
      const mappedVideos: AnalyticsVideo[] = (videos || []).map((v, idx) => ({
        id: String(v.video_id || v.id || idx),
        title: v.title || 'TikTok Video',
        cover: v.cover || v.origin_cover || '',
        originCover: v.origin_cover || v.cover || '',
        plays: Number(v.play_count) || 0,
        likes: Number(v.digg_count) || 0,
        comments: Number(v.comment_count) || 0,
        shares: Number(v.share_count) || 0,
      }));

      const totalVideoLikes = mappedVideos.reduce((acc, v) => acc + v.likes, 0);
      const heartCount =
        stats?.heartCount !== null && stats?.heartCount !== undefined
          ? stats.heartCount
          : mappedVideos.length > 0
          ? totalVideoLikes
          : null;

      const profileData: AnalyticsProfile = {
        username: user.unique_id || clean,
        nickname: user.nickname || user.unique_id || clean,
        avatar: user.avatar || `/api/avatar?username=${encodeURIComponent(user.unique_id || clean)}`,
        bio: user.signature || '',
        verified: Boolean(user.verified),
        status: user.status || 'active',
        followers: stats?.followerCount ?? null,
        following: stats?.followingCount ?? null,
        likes: heartCount,
        videosCount: stats?.videoCount ?? mappedVideos.length,
      };

      setData({
        profile: profileData,
        videos: mappedVideos,
      });

      if (profileData.status === 'private') {
        setError(t('page.analytics.errPrivate', { username: profileData.username }));
      } else if (mappedVideos.length === 0) {
        setError(t('page.analytics.errNoVideos', { username: profileData.username }));
      }
    } catch (err: unknown) {
      if (reqId !== requestSeqRef.current) return;
      const msg = err instanceof Error ? err.message : t('search.errorFailed');
      setError(msg);
    } finally {
      if (reqId === requestSeqRef.current) {
        setLoading(false);
      }
    }
  };

  const videos = data?.videos || [];
  const profile = data?.profile;

  const avgViews = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + v.plays, 0) / videos.length)
    : 0;
  const avgLikes = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + v.likes, 0) / videos.length)
    : 0;
  const avgComments = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + v.comments, 0) / videos.length)
    : 0;
  const avgShares = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + v.shares, 0) / videos.length)
    : 0;

  const engagementRate =
    avgViews > 0
      ? (((avgLikes + avgComments + avgShares) / avgViews) * 100).toFixed(2)
      : '0.00';

  const followerCountSafe = profile?.followers ?? 0;
  const estEarningsLow = followerCountSafe > 0 ? Math.round((followerCountSafe / 1000) * 1.2) : 0;
  const estEarningsHigh = followerCountSafe > 0 ? Math.round((followerCountSafe / 1000) * 3.5) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${t('page.analytics.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.analytics.subtitle')} />
      <link
        rel="canonical"
        href="https://tikprofilesviewer.com/tiktok-analytics"
      />

      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <Breadcrumbs
          items={[
            {
              label: 'TikTok Analytics',
              translationKey: 'page.analytics.crumb',
            },
          ]}
        />
        <AdSlot placement="header" />

        {/* Compact Header */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            {t('page.analytics.title')}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            {t('page.analytics.subtitle')}
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={(e) => void handleAnalyze(e)} className="max-w-lg mx-auto mb-7">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[var(--ink-muted)] absolute start-3.5 pointer-events-none" />
            <input
              type="text"
              aria-label="Enter TikTok username"
              placeholder={t('page.analytics.placeholder')}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              disabled={loading}
              className="w-full h-11 ps-10 pe-28 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--ink-primary)] text-xs sm:text-sm font-medium focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15 transition-all disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !username.trim()}
              className="absolute end-1.5 h-8 px-4 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] disabled:cursor-not-allowed text-[var(--accent-contrast)] font-bold text-xs transition-all cursor-pointer"
            >
              {loading ? t('page.analytics.analyzing') : t('page.analytics.btn')}
            </button>
          </div>
          {error && (
            <div
              role="alert"
              className="mt-2.5 p-2.5 rounded-lg bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)]/50 text-[var(--ink-primary)] text-xs font-semibold flex items-center gap-2"
            >
              <AlertCircle className="w-4 h-4 text-[var(--status-danger)] shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>

        {/* Results Dashboard */}
        {profile && (
          <div className="space-y-5 animate-in fade-in duration-300">
            {/* Creator Summary Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center gap-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.avatar}
                alt={profile.nickname}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  if (!target.src.includes('/api/avatar')) {
                    target.src = `/api/avatar?username=${encodeURIComponent(profile.username)}`;
                  }
                }}
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent-cyan)] bg-[var(--surface-sunken)] shrink-0"
              />
              <div className="flex-1 text-center sm:text-start min-w-0">
                <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                  <h2
                    data-no-translate="true"
                    className="text-base sm:text-lg font-extrabold text-[var(--ink-primary)] truncate"
                  >
                    {profile.nickname}
                  </h2>
                  {profile.verified && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]">
                      {t('profile.verified')}
                    </span>
                  )}
                </div>
                <p
                  data-no-translate="true"
                  className="text-xs text-[var(--ink-muted)] font-mono"
                >
                  @{profile.username}
                </p>
                {profile.bio && (
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 line-clamp-2 max-w-xl">
                    {profile.bio}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-5 border-t sm:border-t-0 sm:border-s border-[var(--border-subtle)] pt-3 sm:pt-0 sm:ps-5 tabular-nums">
                <div className="text-center">
                  <div
                    data-no-translate="true"
                    className="text-base font-black text-[var(--ink-primary)]"
                  >
                    {formatNum(profile.followers)}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)]">
                    {t('profile.followers')}
                  </div>
                </div>
                <div className="text-center">
                  <div
                    data-no-translate="true"
                    className="text-base font-black text-[var(--ink-primary)]"
                  >
                    {formatNum(profile.likes)}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)]">
                    {t('profile.totalLikes')}
                  </div>
                </div>
                <div className="text-center">
                  <div
                    data-no-translate="true"
                    className="text-base font-black text-[var(--ink-primary)]"
                  >
                    {formatNum(profile.videosCount)}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)]">
                    {t('profile.videos')}
                  </div>
                </div>
              </div>
            </div>

            {/* Core Analytics KPIs */}
            {videos.length > 0 && (
              <>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 tabular-nums">
                  <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                      <TrendingUp className="w-4 h-4 text-[var(--accent-primary-text)]" />
                      <span>{t('page.analytics.engagementRate')}</span>
                    </div>
                    <div
                      data-no-translate="true"
                      className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]"
                    >
                      {engagementRate}%
                    </div>
                    <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                      {Number(engagementRate) > 8
                        ? t('toolPage.analytics.evalViral')
                        : Number(engagementRate) > 4
                        ? t('toolPage.analytics.evalHealthy')
                        : t('toolPage.analytics.evalStandard')}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                      <Eye className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                      <span>{t('page.analytics.avgViews')}</span>
                    </div>
                    <div
                      data-no-translate="true"
                      className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]"
                    >
                      {formatNum(avgViews)}
                    </div>
                    <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                      {t('toolPage.analytics.basedOnLast', { count: videos.length })}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                      <Heart className="w-4 h-4 text-[var(--accent-primary-text)]" />
                      <span>{t('page.analytics.avgLikes')}</span>
                    </div>
                    <div
                      data-no-translate="true"
                      className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]"
                    >
                      {formatNum(avgLikes)}
                    </div>
                    <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                      <span data-no-translate="true">{formatNum(avgComments)}</span>{' '}
                      <span>{t('toolPage.analytics.commentsPerVideo')}</span>
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                      <Sparkles className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                      <span>{t('page.analytics.estSponsor')}</span>
                    </div>
                    <div
                      data-no-translate="true"
                      className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]"
                    >
                      {followerCountSafe > 0
                        ? `$${estEarningsLow.toLocaleString()} - $${estEarningsHigh.toLocaleString()}`
                        : 'N/A'}
                    </div>
                    <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                      {t('page.analytics.perPost')}
                    </p>
                  </div>
                </div>

                {/* Video Performance Breakdown */}
                <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between mb-3.5">
                    <h3 className="text-sm font-bold text-[var(--ink-primary)] flex items-center gap-2">
                      <BarChart3 className="w-4 h-4 text-[var(--accent-primary-text)]" />
                      <span>{t('page.analytics.recentBreakdown')}</span>
                    </h3>
                    <span className="text-[11px] font-semibold text-[var(--ink-muted)]">
                      {t('page.analytics.liveMetrics')}
                    </span>
                  </div>

                  <div className="space-y-2.5">
                    {videos.slice(0, 6).map((v) => (
                      <div
                        key={v.id}
                        className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors"
                      >
                        <div className="relative w-12 h-14 rounded-md overflow-hidden shrink-0 bg-[var(--surface-sunken)]">
                          {v.cover ? (
                            /* eslint-disable-next-line @next/next/no-img-element */
                            <img
                              src={v.cover}
                              alt={v.title}
                              referrerPolicy="no-referrer"
                              onError={(e) => {
                                const target = e.currentTarget as HTMLImageElement;
                                if (v.originCover && target.src !== v.originCover) {
                                  target.src = v.originCover;
                                  return;
                                }
                                target.style.display = 'none';
                              }}
                              className="w-full h-full object-cover"
                            />
                          ) : null}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-xs font-bold text-[var(--ink-primary)] truncate">
                            {v.title}
                          </p>
                          <div className="flex flex-wrap items-center gap-3.5 mt-1.5 text-[11px] text-[var(--ink-secondary)] font-medium tabular-nums">
                            <span
                              data-no-translate="true"
                              className="flex items-center gap-1"
                            >
                              <Play className="w-3 h-3 text-[var(--accent-cyan-text)]" />
                              {formatNum(v.plays)}
                            </span>
                            <span
                              data-no-translate="true"
                              className="flex items-center gap-1"
                            >
                              <Heart className="w-3 h-3 text-[var(--accent-primary-text)]" />
                              {formatNum(v.likes)}
                            </span>
                            <span
                              data-no-translate="true"
                              className="flex items-center gap-1"
                            >
                              <MessageCircle className="w-3 h-3 text-[var(--ink-muted)]" />
                              {formatNum(v.comments)}
                            </span>
                            <span
                              data-no-translate="true"
                              className="flex items-center gap-1"
                            >
                              <Share2 className="w-3 h-3 text-[var(--ink-muted)]" />
                              {formatNum(v.shares)}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        )}

        {/* Educational Content */}
        <section className="mt-10 pt-7 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <Users className="w-4 h-4 text-[var(--accent-cyan-text)] mb-1.5" />
            <h2 className="text-sm font-bold text-[var(--ink-primary)] mb-1">
              {t('toolPage.analytics.card1Title')}
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.analytics.card1Desc')}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <TrendingUp className="w-4 h-4 text-[var(--accent-primary-text)] mb-1.5" />
            <h2 className="text-sm font-bold text-[var(--ink-primary)] mb-1">
              {t('toolPage.analytics.card2Title')}
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.analytics.card2Desc')}
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <Sparkles className="w-4 h-4 text-[var(--accent-cyan-text)] mb-1.5" />
            <h2 className="text-sm font-bold text-[var(--ink-primary)] mb-1">
              {t('toolPage.analytics.card3Title')}
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.analytics.card3Desc')}
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}