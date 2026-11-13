'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Loader2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { fetchProfileDirect } from '@/lib/tiktok-client';

export default function TikTokAnalyticsPage() {
  // Manual Calculator state
  const [calcLikes, setCalcLikes] = useState<string>('12500');
  const [calcComments, setCalcComments] = useState<string>('850');
  const [calcShares, setCalcShares] = useState<string>('1200');
  const [calcViews, setCalcViews] = useState<string>('150000');

  // Audit state with empty search input by default
  const [auditUsername, setAuditUsername] = useState<string>('');
  const [auditLoading, setAuditLoading] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<{
    unique_id: string;
    nickname: string;
    avatar: string;
    followers: number;
    totalLikes: number;
    videoCount: number;
    avgViews: number;
    avgLikes: number;
    avgShares: number;
    engagementRate: number;
  } | null>(null);
  const [auditError, setAuditError] = useState<string | null>(null);

  // Manual calculation: ((Likes + Comments + Shares) / Views) * 100
  const likesNum = parseFloat(calcLikes) || 0;
  const commentsNum = parseFloat(calcComments) || 0;
  const sharesNum = parseFloat(calcShares) || 0;
  const viewsNum = parseFloat(calcViews) || 1;

  const totalInteractions = likesNum + commentsNum + sharesNum;
  const manualEngagementRate = viewsNum > 0 ? (totalInteractions / viewsNum) * 100 : 0;

  const getRating = (rate: number) => {
    if (rate >= 9) return { label: 'Top 1% Viral', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (rate >= 6) return { label: 'High Engagement', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (rate >= 3) return { label: 'Average Engagement', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'Low Engagement', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const handleAudit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = auditUsername.replace(/^@/, '').trim();
    if (!clean) {
      setAuditError('Please enter a TikTok username.');
      return;
    }

    setAuditLoading(true);
    setAuditError(null);

    try {
      const data = await fetchProfileDirect(clean);

      if (!data || data.code !== 0 || !data.data) {
        throw new Error(data?.msg || 'Creator not found or account is private.');
      }

      const videos = data.data.videos || [];
      const user = data.data.user;
      const stats = data.data.stats;

      if (videos.length === 0) {
        throw new Error('User has no public videos available to analyze.');
      }

      let totalPlay = 0;
      let totalDigg = 0;
      let totalShare = 0;

      for (const v of videos) {
        totalPlay += Number(v.play_count) || 0;
        totalDigg += Number(v.digg_count) || 0;
        totalShare += Number(v.share_count) || 0;
      }

      const sampleCount = videos.length;
      const avgViews = Math.round(totalPlay / sampleCount);
      const avgLikes = Math.round(totalDigg / sampleCount);
      const avgShares = Math.round(totalShare / sampleCount);
      const rate = totalPlay > 0 ? ((totalDigg + totalShare) / totalPlay) * 100 : 0;

      setAuditResult({
        unique_id: user.unique_id || clean,
        nickname: user.nickname || clean,
        avatar: user.avatar || '',
        followers: Number(stats.followerCount) || 0,
        totalLikes: Number(stats.heartCount) || totalDigg,
        videoCount: Number(stats.videoCount) || sampleCount,
        avgViews,
        avgLikes,
        avgShares,
        engagementRate: parseFloat(rate.toFixed(2)),
      });
    } catch (err: unknown) {
      setAuditError(err instanceof Error ? err.message : 'Audit failed.');
      setAuditResult(null);
    } finally {
      setAuditLoading(false);
    }
  };

  const rating = getRating(manualEngagementRate);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: 'TikTok Analytics' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            TikTok Engagement Calculator
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 leading-relaxed max-w-xl mx-auto">
            Check engagement rates, average views, and video performance for any public creator.
          </p>
        </div>

        {/* Section 1: Live Creator Auditor */}
        <div className="mb-8 p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Audit Any Creator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-4">
            Enter a TikTok username to analyze their latest public videos and calculate their real engagement score.
          </p>

          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-2.5 max-w-lg">
            <div className="relative flex-1">
              <span className="absolute left-3 top-2 text-slate-400 font-bold text-sm">@</span>
              <input
                type="text"
                value={auditUsername}
                onChange={(e) => setAuditUsername(e.target.value)}
                placeholder="TikTok username (e.g. mrbeast)"
                className="w-full pl-7 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500"
              />
            </div>
            <button
              type="submit"
              disabled={auditLoading}
              className="px-5 py-2 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-2xs disabled:opacity-50 cursor-pointer"
            >
              {auditLoading ? (
                <>
                  <Loader2 className="w-3.5 h-3.5 animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Search className="w-3.5 h-3.5" />
                  <span>Audit Creator</span>
                </>
              )}
            </button>
          </form>

          {auditError && (
            <div className="mt-3 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {auditError}
            </div>
          )}

          {auditResult && (
            <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-3.5">
              <div className="md:col-span-4 flex items-center justify-between flex-wrap gap-2.5 pb-2.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={auditResult.avatar || `/api/avatar?username=${encodeURIComponent(auditResult.unique_id)}`}
                    alt={auditResult.nickname}
                    referrerPolicy="no-referrer"
                    className="w-10 h-10 rounded-full object-cover border border-slate-200 bg-slate-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = `/api/avatar?username=${encodeURIComponent(auditResult.unique_id)}`;
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">{auditResult.nickname}</h3>
                    <p className="text-[11px] text-slate-500 font-mono">@{auditResult.unique_id}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-full text-xs font-semibold border ${getRating(auditResult.engagementRate).color}`}>
                    {getRating(auditResult.engagementRate).label}
                  </span>
                  <Link
                    href={`/profile/${auditResult.unique_id}`}
                    className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-900 hover:bg-black text-white transition-colors"
                  >
                    View All Videos
                  </Link>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-[11px] block">Engagement Rate</span>
                <span className="text-xl font-bold text-slate-900 font-mono">
                  {auditResult.engagementRate}%
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Interactions / Views</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-[11px] block">Avg. Views</span>
                <span className="text-base font-bold text-slate-900 font-mono">
                  {auditResult.avgViews.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Recent posts</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-[11px] block">Avg. Likes</span>
                <span className="text-base font-bold text-slate-900 font-mono">
                  {auditResult.avgLikes.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Average likes</span>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-[11px] block">Avg. Shares</span>
                <span className="text-base font-bold text-slate-900 font-mono">
                  {auditResult.avgShares.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-0.5">Average shares</span>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Interactive Manual Calculator */}
        <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs mb-8">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Manual Engagement Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-5">
            Type your views, likes, comments, and shares to calculate your score.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            {/* Form Inputs */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Video Views
                </label>
                <input
                  type="number"
                  value={calcViews}
                  onChange={(e) => setCalcViews(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Total Likes
                </label>
                <input
                  type="number"
                  value={calcLikes}
                  onChange={(e) => setCalcLikes(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Comments Count
                </label>
                <input
                  type="number"
                  value={calcComments}
                  onChange={(e) => setCalcComments(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Shares Count
                </label>
                <input
                  type="number"
                  value={calcShares}
                  onChange={(e) => setCalcShares(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>
            </div>

            {/* Result Display Box */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center gap-2">
              <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">
                Calculated Engagement
              </span>
              <div className="text-4xl font-black text-slate-900 font-mono">
                {manualEngagementRate.toFixed(2)}%
              </div>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${rating.color}`}>
                {rating.label}
              </span>
              <p className="text-[10px] text-slate-400 mt-0.5">
                Formula: ((Likes + Comments + Shares) / Views) x 100
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
