'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { DollarSign, Sparkles, TrendingUp, Users, Eye, HelpCircle } from 'lucide-react';

export default function MoneyCalculatorPage() {
  const [followers, setFollowers] = useState<number>(500000);
  const [avgViews, setAvgViews] = useState<number>(120000);
  const [engagementRate, setEngagementRate] = useState<number>(6.5);

  // Earnings estimation algorithm based on industry creator sponsor rates and TikTok Creator Rewards RPM ($0.40 - $1.20 per 1k views)
  const creatorRewardsPerVideo = (avgViews / 1000) * 0.85; // RPM ~$0.85
  const sponsorRateMin = Math.round((followers * 0.0025 + avgViews * 0.004) * (1 + (engagementRate - 5) * 0.05));
  const sponsorRateMax = Math.round(sponsorRateMin * 1.8);
  const monthlyEstimatedMin = Math.round((creatorRewardsPerVideo * 12) + (sponsorRateMin * 3));
  const monthlyEstimatedMax = Math.round((creatorRewardsPerVideo * 18) + (sponsorRateMax * 4));

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Money Calculator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Money &amp; Earnings Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Calculate how much TikTok creators make per video and per sponsored brand deal based on followers, average views, and engagement rates.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#01ebe4]" />
              <span>Creator Metrics Inputs</span>
            </h2>

            {/* Slider 1: Followers */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Follower Count</span>
                </label>
                <span className="font-mono font-black text-sm text-slate-900">
                  {followers.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>10K</span>
                <span>1M</span>
                <span>10M+</span>
              </div>
            </div>

            {/* Slider 2: Average Views */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>Average Views per Video</span>
                </label>
                <span className="font-mono font-black text-sm text-slate-900">
                  {avgViews.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="3000000"
                step="5000"
                value={avgViews}
                onChange={(e) => setAvgViews(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5K</span>
                <span>500K</span>
                <span>3M+</span>
              </div>
            </div>

            {/* Slider 3: Engagement Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                  <span>Engagement Rate (%)</span>
                </label>
                <span className="font-mono font-black text-sm text-[#fe2858]">
                  {engagementRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="20.0"
                step="0.5"
                value={engagementRate}
                onChange={(e) => setEngagementRate(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1% (Low)</span>
                <span>5.5% (Average)</span>
                <span>15%+ (Viral)</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#01ebe4] uppercase tracking-wider mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Estimated Earnings</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Estimated Sponsored Deal
              </h3>
              <div className="my-5 p-4 rounded-xl bg-white/10 border border-white/10">
                <span className="text-xs text-slate-300 block mb-1">Per Sponsored Post:</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#01ebe4]">
                  ${sponsorRateMin.toLocaleString()} – ${sponsorRateMax.toLocaleString()}
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Creator Rewards Program:</span>
                  <span className="font-mono font-bold text-white">~${Math.round(creatorRewardsPerVideo).toLocaleString()} / video</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Estimated Monthly Total:</span>
                  <span className="font-mono font-bold text-emerald-400">${monthlyEstimatedMin.toLocaleString()} – ${monthlyEstimatedMax.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">
              *Estimates are calculated based on public influencer agency metrics and TikTok Creator Rewards program RPM benchmarks. Actual payments vary by niche and creator audience demographics.
            </p>
          </div>
        </div>

        <AdSlot placement="footer" />

        {/* Informative Guide Section */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs my-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            How Do TikTok Creators Earn Money?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block mb-1">Brand Sponsorships</strong>
              Brands pay creators to feature products, wear apparel, or integrate songs in viral videos.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block mb-1">Creator Rewards Program</strong>
              TikTok pays creators directly for videos longer than 1 minute based on qualified views and watch time.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block mb-1">Affiliate &amp; TikTok Shop</strong>
              Creators earn 5% to 20% commission on every product sold through their video showcase pins.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
