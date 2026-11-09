'use client';

import { Sparkles, Utensils, Film, ChefHat, Flame, Music, ArrowRight } from 'lucide-react';

const NICHES = [
  { icon: Utensils, label: 'Food & Mukbangs', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { icon: Film, label: '3D & AI Animation', color: 'text-sky-600 bg-sky-50 border-sky-200' },
  { icon: ChefHat, label: 'Culinary & Recipes', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { icon: Flame, label: 'Viral FYP Challenges', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { icon: Music, label: 'Music & Sounds', color: 'text-purple-600 bg-purple-50 border-purple-200' },
];

export default function ExploreNichesSection() {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    input?.focus();
  };

  return (
    <section className="w-full mt-14 pt-10 border-t border-slate-200">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Explore Any TikTok Niche &amp; Creator Format
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 leading-relaxed max-w-2xl">
          From viral mukbangs and culinary tutorials to 3D character animations and comedy sketches, Tik Profiles Viewer lets you inspect any public account and save high-resolution media with zero restrictions.
        </p>

        {/* Niche Category Tags */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
          {NICHES.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-2xs ${niche.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{niche.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Visual Showcase Card using section-1.png without image hover effects */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white shadow-sm p-3 sm:p-5 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/aistudio/section-1_3e8f1512.png"
          alt="Popular TikTok niches including Mukbang, 3D Animation, and Culinary Chef videos"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full max-w-4xl h-auto rounded-xl object-contain shadow-xs"
        />

        {/* Three Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl mt-5 pt-4 border-t border-slate-100">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left">
            <span className="text-xs font-bold text-slate-900 block mb-1">
              100% Anonymous Viewing
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              No TikTok account needed. Creators never see your name on their view list or profile history.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left">
            <span className="text-xs font-bold text-slate-900 block mb-1">
              Every Public Category
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Search any creator in food, dance, gaming, fitness, comedy, beauty, and education worldwide.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left">
            <span className="text-xs font-bold text-slate-900 block mb-1">
              Instant HD Downloads
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get original full-resolution MP4 video and clean MP3 audio directly on your device.
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <button
          type="button"
          onClick={scrollToSearch}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Search a creator in your favorite niche</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
