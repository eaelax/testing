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

export default function TikTokAnalyticsPage() {
  // Manual Calculator state
  const [calcLikes, setCalcLikes] = useState<string>('12500');
  const [calcComments, setCalcComments] = useState<string>('850');
  const [calcShares, setCalcShares] = useState<string>('1200');
  const [calcViews, setCalcViews] = useState<string>('150000');

  // Audit state
  const [auditUsername, setAuditUsername] = useState<string>('mrbeast');
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
    if (!clean) return;

    setAuditLoading(true);
    setAuditError(null);

    try {
      const res = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`);
      const data = await res.json();

      if (!data || data.code !== 0 || !data.data) {
        throw new Error(data?.msg || 'Creator not found or account is private.');
      }

      const videos = data.data.videos || [];
      const user = data.data.user || {};
      const stats = data.data.stats || {};

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

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'TikTok Analytics' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            TikTok Engagement Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Check engagement rates, average views, and video performance for any public creator.
          </p>
        </div>

        {/* Section 1: Live Creator Auditor */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Audit Any Creator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Enter a TikTok username to analyze their latest 30 videos and find their real engagement score.
          </p>

          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">@</span>
              <input
                type="text"
                value={auditUsername}
                onChange={(e) => setAuditUsername(e.target.value)}
                placeholder="TikTok username (e.g. mrbeast)"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
              />
            </div>
            <button
              type="submit"
              disabled={auditLoading}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
            >
              {auditLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Audit Creator</span>
                </>
              )}
            </button>
          </form>

          {auditError && (
            <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {auditError}
            </div>
          )}

          {auditResult && (
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-4 flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={auditResult.avatar}
                    alt={auditResult.nickname}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 bg-slate-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60';
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{auditResult.nickname}</h3>
                    <p className="text-xs text-slate-500 font-mono">@{auditResult.unique_id}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRating(auditResult.engagementRate).color}`}>
                    {getRating(auditResult.engagementRate).label}
                  </span>
                  <Link
                    href={`/profile/${auditResult.unique_id}`}
                    className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-900 hover:bg-black text-white transition-colors"
                  >
                    View All Videos
                  </Link>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Engagement Rate</span>
                <span className="text-2xl font-black text-slate-900 font-mono">
                  {auditResult.engagementRate}%
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Interactions / Views</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Avg. Views per Post</span>
                <span className="text-xl font-black text-slate-900 font-mono">
                  {auditResult.avgViews.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Recent 30 videos</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Avg. Likes per Post</span>
                <span className="text-xl font-black text-slate-900 font-mono">
                  {auditResult.avgLikes.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Average likes</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Avg. Shares per Post</span>
                <span className="text-xl font-black text-slate-900 font-mono">
                  {auditResult.avgShares.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Average shares</span>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Interactive Manual Calculator */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs mb-12">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Manual Engagement Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Type your views, likes, comments, and shares to calculate your score.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Form Inputs */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Video Views
                </label>
                <input
                  type="number"
                  value={calcViews}
                  onChange={(e) => setCalcViews(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Likes
                </label>
                <input
                  type="number"
                  value={calcLikes}
                  onChange={(e) => setCalcLikes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Comments Count
                </label>
                <input
                  type="number"
                  value={calcComments}
                  onChange={(e) => setCalcComments(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Shares Count
                </label>
                <input
                  type="number"
                  value={calcShares}
                  onChange={(e) => setCalcShares(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>
            </div>

            {/* Result Display Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Calculated Engagement
              </span>
              <div className="text-5xl font-black text-slate-900 font-mono">
                {manualEngagementRate.toFixed(2)}%
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${rating.color}`}>
                {rating.label}
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
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
