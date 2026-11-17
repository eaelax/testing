'use client';

import { useState } from 'react';
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

interface AnalyticsProfile {
  username: string;
  nickname: string;
  avatar: string;
  bio: string;
  verified: boolean;
  followers: number;
  following: number;
  likes: number;
  videosCount: number;
}

interface AnalyticsVideo {
  id: string;
  title: string;
  cover: string;
  plays: number;
  likes: number;
  comments: number;
  shares: number;
}

interface AnalyticsData {
  profile: AnalyticsProfile;
  videos: AnalyticsVideo[];
}

function formatNum(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
  if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
  return num.toString();
}

export default function AnalyticsPage() {
  const [username, setUsername] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<AnalyticsData | null>(null);

  const handleAnalyze = async (e: React.FormEvent) => {
    e.preventDefault();
    const clean = username.trim().replace(/^@/, '');
    if (!clean) return;

    setLoading(true);
    setError(null);
    setData(null);

    try {
      const res = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`);
      const json = await res.json();

      if (!res.ok || json.error) {
        setError(json.error || 'Could not fetch profile metrics.');
      } else {
        setData(json);
      }
    } catch {
      setError('Connection failed. Please verify the username and try again.');
    } finally {
      setLoading(false);
    }
  };

  const videos = data?.videos || [];
  const profile = data?.profile;

  const avgViews = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + (v.plays || 0), 0) / videos.length)
    : 0;
  const avgLikes = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + (v.likes || 0), 0) / videos.length)
    : 0;
  const avgComments = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + (v.comments || 0), 0) / videos.length)
    : 0;
  const avgShares = videos.length
    ? Math.round(videos.reduce((acc, v) => acc + (v.shares || 0), 0) / videos.length)
    : 0;

  const engagementRate =
    avgViews > 0
      ? (((avgLikes + avgComments + avgShares) / avgViews) * 100).toFixed(2)
      : '0.00';

  const estEarningsLow = profile ? Math.round((profile.followers / 1000) * 1.2) : 0;
  const estEarningsHigh = profile ? Math.round((profile.followers / 1000) * 3.5) : 0;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <Breadcrumbs items={[{ label: 'TikTok Analytics' }]} />
        <AdSlot placement="header" />

        {/* Compact Header */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok Profile Analytics
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Analyze any public creator account. View real-time engagement rates, average video views, and estimated creator earnings.
          </p>
        </div>

        {/* Search Input */}
        <form onSubmit={handleAnalyze} className="max-w-lg mx-auto mb-7">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-[var(--ink-muted)] absolute start-3.5 pointer-events-none" />
            <input
              type="text"
              aria-label="Enter TikTok username"
              placeholder="Enter TikTok username (e.g., khaby.lame or @mrbeast)"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full h-11 ps-10 pe-28 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--ink-primary)] text-xs sm:text-sm font-medium focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15 transition-all"
            />
            <button
              type="submit"
              disabled={loading || !username.trim()}
              className="absolute end-1.5 h-8 px-4 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] disabled:opacity-50 text-[var(--accent-contrast)] font-bold text-xs transition-all cursor-pointer"
            >
              {loading ? 'Analyzing...' : 'Analyze'}
            </button>
          </div>
          {error && (
            <div className="mt-2.5 p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-primary)] text-[var(--accent-primary-text)] text-xs font-semibold flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}
        </form>

        {/* Results Dashboard */}
        {profile && (
          <div className="space-y-5 animate-in fade-in duration-300">
            {/* Creator Summary Card */}
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row items-center gap-4">
              <img
                src={profile.avatar}
                alt={profile.nickname}
                className="w-16 h-16 rounded-full object-cover border-2 border-[var(--accent-cyan)] shrink-0"
              />
              <div className="flex-1 text-center sm:text-start">
                <div className="flex items-center justify-center sm:justify-start gap-2">
                  <h2 className="text-base sm:text-lg font-extrabold text-[var(--ink-primary)]">
                    {profile.nickname}
                  </h2>
                  {profile.verified && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]">
                      Verified
                    </span>
                  )}
                </div>
                <p className="text-xs text-[var(--ink-muted)] font-mono">@{profile.username}</p>
                {profile.bio && (
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 line-clamp-2 max-w-xl">
                    {profile.bio}
                  </p>
                )}
              </div>
              <div className="flex items-center gap-5 border-t sm:border-t-0 sm:border-s border-[var(--border-subtle)] pt-3 sm:pt-0 sm:ps-5 tabular-nums">
                <div className="text-center">
                  <div className="text-base font-black text-[var(--ink-primary)]">
                    {formatNum(profile.followers)}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)]">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-black text-[var(--ink-primary)]">
                    {formatNum(profile.likes)}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)]">Total Likes</div>
                </div>
                <div className="text-center">
                  <div className="text-base font-black text-[var(--ink-primary)]">
                    {formatNum(profile.videosCount)}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--ink-muted)]">Videos</div>
                </div>
              </div>
            </div>

            {/* Core Analytics KPIs */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 tabular-nums">
              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                  <TrendingUp className="w-4 h-4 text-[var(--accent-primary-text)]" />
                  <span>Engagement Rate</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]">
                  {engagementRate}%
                </div>
                <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                  {Number(engagementRate) > 8
                    ? 'Viral-grade engagement'
                    : Number(engagementRate) > 4
                    ? 'Healthy creator activity'
                    : 'Average interaction'}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                  <Eye className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                  <span>Avg. Video Views</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]">
                  {formatNum(avgViews)}
                </div>
                <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                  Based on last {videos.length} videos
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                  <Heart className="w-4 h-4 text-[var(--accent-primary-text)]" />
                  <span>Avg. Video Likes</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]">
                  {formatNum(avgLikes)}
                </div>
                <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                  {formatNum(avgComments)} comments / video
                </p>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--ink-secondary)] mb-1.5">
                  <Sparkles className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                  <span>Est. Sponsorship Value</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-[var(--ink-primary)]">
                  ${estEarningsLow.toLocaleString()} - ${estEarningsHigh.toLocaleString()}
                </div>
                <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                  Estimated per sponsored post
                </p>
              </div>
            </div>

            {/* Video Performance Breakdown */}
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="text-sm font-bold text-[var(--ink-primary)] flex items-center gap-2">
                  <BarChart3 className="w-4 h-4 text-[var(--accent-primary-text)]" />
                  <span>Recent Videos Performance Breakdown</span>
                </h3>
                <span className="text-[11px] font-semibold text-[var(--ink-muted)]">
                  Live feed metrics
                </span>
              </div>

              <div className="space-y-2.5">
                {videos.slice(0, 6).map((v) => (
                  <div
                    key={v.id}
                    className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] transition-colors"
                  >
                    <div className="relative w-12 h-14 rounded-md overflow-hidden shrink-0 bg-[var(--surface-sunken)]">
                      <img src={v.cover} alt={v.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold text-[var(--ink-primary)] truncate">
                        {v.title || 'TikTok Video'}
                      </p>
                      <div className="flex flex-wrap items-center gap-3.5 mt-1.5 text-[11px] text-[var(--ink-secondary)] font-medium tabular-nums">
                        <span className="flex items-center gap-1">
                          <Play className="w-3 h-3 text-[var(--accent-cyan-text)]" />
                          {formatNum(v.plays)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3 text-[var(--accent-primary-text)]" />
                          {formatNum(v.likes)}
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="w-3 h-3 text-[var(--ink-muted)]" />
                          {formatNum(v.comments)}
                        </span>
                        <span className="flex items-center gap-1">
                          <Share2 className="w-3 h-3 text-[var(--ink-muted)]" />
                          {formatNum(v.shares)}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Educational Content */}
        <section className="mt-10 pt-7 border-t border-[var(--border-subtle)] grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <Users className="w-4 h-4 text-[var(--accent-cyan-text)] mb-1.5" />
            <h2 className="text-sm font-bold text-[var(--ink-primary)] mb-1">Audience Quality Check</h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Spot fake followers by comparing follower count against real average views and comments per video.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <TrendingUp className="w-4 h-4 text-[var(--accent-primary-text)] mb-1.5" />
            <h2 className="text-sm font-bold text-[var(--ink-primary)] mb-1">Engagement Benchmarks</h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              High performing TikTok accounts maintain an engagement rate above 5% across recent short-form uploads.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <Sparkles className="w-4 h-4 text-[var(--accent-cyan-text)] mb-1.5" />
            <h2 className="text-sm font-bold text-[var(--ink-primary)] mb-1">Creator Monetization</h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Estimate creator sponsorship values based on verified follower tiers and active audience response.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}