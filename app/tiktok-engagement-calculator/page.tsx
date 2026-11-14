'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { Percent } from 'lucide-react';

export default function EngagementCalculatorPage() {
  const [followers, setFollowers] = useState<string>('250000');
  const [likes, setLikes] = useState<string>('18500');
  const [comments, setComments] = useState<string>('950');
  const [shares, setShares] = useState<string>('1200');

  const fNum = Math.max(1, Number(followers) || 0);
  const lNum = Number(likes) || 0;
  const cNum = Number(comments) || 0;
  const sNum = Number(shares) || 0;

  const totalInteractions = lNum + cNum + sNum;
  const engagementRate = ((totalInteractions / fNum) * 100);

  let rating = 'Good';
  let badgeColor = 'text-[#5EEAD4] border-[#5EEAD4]/40 bg-white/10';
  if (engagementRate < 3) {
    rating = 'Below Average (< 3%)';
    badgeColor = 'text-[#FDA4AF] border-[#FDA4AF]/40 bg-white/10';
  } else if (engagementRate >= 3 && engagementRate < 6) {
    rating = 'Average (3% - 6%)';
    badgeColor = 'text-[#D1D5DB] border-white/25 bg-white/10';
  } else if (engagementRate >= 6 && engagementRate < 12) {
    rating = 'High Engagement (6% - 12%)';
    badgeColor = 'text-[#5EEAD4] border-[#5EEAD4]/40 bg-white/10';
  } else {
    rating = 'Viral / Superstar (12%+)';
    badgeColor = 'text-[#5EEAD4] border-[#5EEAD4]/40 bg-white/10';
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Engagement Rate Calculator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            TikTok Engagement Rate Calculator
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] mt-3 leading-relaxed">
            Measure the engagement rate of any TikTok creator or campaign. Compare performance against industry benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 space-y-4">
            <h2 className="text-base font-bold text-[#111827] border-b border-[#E5E7EB] pb-3 flex items-center gap-2">
              <Percent className="w-4 h-4 text-[#D61C47]" />
              <span>Enter Video or Account Stats</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-[#111827] block mb-1">
                  Total Followers
                </label>
                <input
                  type="number"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] text-xs font-mono font-bold text-[#111827] focus:outline-none focus:border-[#D61C47]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#111827] block mb-1">
                  Likes Count
                </label>
                <input
                  type="number"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] text-xs font-mono font-bold text-[#111827] focus:outline-none focus:border-[#D61C47]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#111827] block mb-1">
                  Comments Count
                </label>
                <input
                  type="number"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] text-xs font-mono font-bold text-[#111827] focus:outline-none focus:border-[#D61C47]"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-[#111827] block mb-1">
                  Shares Count
                </label>
                <input
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] text-xs font-mono font-bold text-[#111827] focus:outline-none focus:border-[#D61C47]"
                />
              </div>
            </div>

            <p className="text-[11px] text-[#5C6573] pt-2">
              Formula: (Likes + Comments + Shares) / Followers × 100
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-[#111827] text-[#FFFFFF] rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-[#D1D5DB] uppercase tracking-wider block mb-1">
                Engagement Rate Result
              </span>
              <div className="text-4xl sm:text-5xl font-mono font-black text-[#FFFFFF]">
                {engagementRate.toFixed(2)}%
              </div>

              <div className={`mt-4 inline-block px-3 py-1.5 rounded-lg border text-xs font-bold ${badgeColor}`}>
                {rating}
              </div>

              <div className="mt-6 space-y-2 text-xs border-t border-white/15 pt-4">
                <div className="flex justify-between">
                  <span className="text-[#D1D5DB]">Total Interactions:</span>
                  <span className="font-mono font-bold text-[#FFFFFF]">{totalInteractions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#D1D5DB]">Audience Base:</span>
                  <span className="font-mono font-bold text-[#FFFFFF]">{fNum.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-[#D1D5DB] mt-6 leading-relaxed">
              Standard TikTok engagement typically ranges between 4% and 8%. Creators above 10% command premium sponsor pricing.
            </p>
          </div>
        </div>

        <AdSlot placement="above_grid" />

        {/* Benchmarks Table */}
        <section className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 my-8">
          <h2 className="text-base sm:text-lg font-bold text-[#111827] mb-4">
            TikTok Engagement Rate Benchmarks (By Account Size)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB]">
              <strong className="block text-[#111827]">Nano (1K - 10K)</strong>
              <span className="text-[#0F766E] font-bold font-mono text-sm">7% – 12%</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB]">
              <strong className="block text-[#111827]">Micro (10K - 100K)</strong>
              <span className="text-[#0F766E] font-bold font-mono text-sm">5% – 9%</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB]">
              <strong className="block text-[#111827]">Mid (100K - 500K)</strong>
              <span className="text-[#334155] font-bold font-mono text-sm">4% – 7%</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB]">
              <strong className="block text-[#111827]">Macro (500K+)</strong>
              <span className="text-[#BE123C] font-bold font-mono text-sm">3% – 5%</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
