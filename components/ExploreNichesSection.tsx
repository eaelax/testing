'use client';

import { Utensils, Film, ChefHat, Flame, Music, ArrowRight } from 'lucide-react';

const NICHES = [
  {
    icon: Utensils,
    label: 'Food & Mukbangs',
    className: 'text-[var(--ink-primary)] bg-[var(--surface-elevated)] border-[var(--border-strong)]',
    iconClass: 'text-[var(--accent-primary-text)]',
  },
  {
    icon: Film,
    label: '3D & AI Animation',
    className: 'text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] border-[var(--accent-cyan)]',
    iconClass: 'text-[var(--accent-cyan-text)]',
  },
  {
    icon: ChefHat,
    label: 'Culinary & Recipes',
    className: 'text-[var(--accent-primary-text)] bg-[var(--accent-soft)] border-[var(--accent-primary)]/45',
    iconClass: 'text-[var(--accent-primary-text)]',
  },
  {
    icon: Flame,
    label: 'Viral FYP Challenges',
    className: 'text-[var(--ink-primary)] bg-[var(--surface-elevated)] border-[var(--border-strong)]',
    iconClass: 'text-[var(--accent-primary-text)]',
  },
  {
    icon: Music,
    label: 'Music & Sounds',
    className: 'text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] border-[var(--accent-cyan)]',
    iconClass: 'text-[var(--accent-cyan-text)]',
  },
];

export default function ExploreNichesSection() {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    input?.focus();
  };

  return (
    <section className="w-full mt-10 pt-8 border-t border-[var(--border-subtle)]">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
          Explore Any TikTok Niche &amp; Creator Format
        </h2>

        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] mt-2 leading-relaxed max-w-xl">
          From viral mukbangs and culinary tutorials to 3D character animations and comedy sketches, Tik Profiles Viewer lets you inspect any public account and save high-resolution media with zero restrictions.
        </p>

        {/* Niche Category Tags */}
        <div className="flex items-center justify-center gap-1.5 flex-wrap mt-3.5">
          {NICHES.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold border ${niche.className}`}
              >
                <Icon className={`w-3 h-3 ${niche.iconClass}`} />
                <span>{niche.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Compact Visual Showcase Card */}
      <div className="relative w-full rounded-xl overflow-hidden border border-[var(--border-subtle)] bg-[var(--surface-elevated)] p-4 sm:p-5 flex flex-col items-center">
        <div className="w-full max-w-3xl overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/aistudio/section-1_3e8f1512.png"
            alt="Popular TikTok niches including Mukbang, 3D Animation, and Culinary Chef videos"
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Three Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 w-full max-w-3xl mt-4 pt-4 border-t border-[var(--border-subtle)]">
          <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-start">
            <span className="text-xs font-extrabold text-[var(--ink-primary)] block mb-1">
              100% Anonymous Viewing
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              No TikTok account needed. Creators never see your name on their view list or profile history.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-start">
            <span className="text-xs font-extrabold text-[var(--ink-primary)] block mb-1">
              Every Public Category
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Search any creator in food, dance, gaming, fitness, comedy, beauty, and education worldwide.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-start">
            <span className="text-xs font-extrabold text-[var(--ink-primary)] block mb-1">
              Instant HD Downloads
            </span>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Get original full-resolution MP4 video and clean MP3 audio directly on your device.
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <button
          type="button"
          onClick={scrollToSearch}
          className="mt-4 h-9 inline-flex items-center gap-2 px-4 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.98] text-[var(--accent-contrast)] text-xs font-bold transition-all cursor-pointer"
        >
          <span>Search a creator in your favorite niche</span>
          <ArrowRight className="w-3.5 h-3.5 rtl:rotate-180" />
        </button>
      </div>
    </section>
  );
}