'use client';

import Link from 'next/link';
import {
  Utensils,
  Film,
  Flame,
  Music,
  Gamepad2,
  Dumbbell,
  ArrowRight,
  ShieldCheck,
  Layers,
  Zap,
  ChevronRight,
} from 'lucide-react';

const NICHES = [
  {
    icon: Flame,
    label: 'Comedy & Entertainment',
    desc: 'Viral sketches, parodies, and reaction creators.',
    href: '/category/comedy',
    count: '6 creators',
  },
  {
    icon: Utensils,
    label: 'Food & Cooking',
    desc: 'Quick recipes, restaurant dishes, and ASMR cooking.',
    href: '/category/food-cooking',
    count: '5 creators',
  },
  {
    icon: Film,
    label: 'Tech & AI',
    desc: 'Gadget reviews, AI workflows, and software guides.',
    href: '/category/tech-ai',
    count: '5 creators',
  },
  {
    icon: Gamepad2,
    label: 'Gaming & Esports',
    desc: 'Highlights, stream clips, and tournament moments.',
    href: '/category/gaming',
    count: '5 creators',
  },
  {
    icon: Dumbbell,
    label: 'Fitness & Sports',
    desc: 'Training routines, mobility drills, and athletic clips.',
    href: '/category/fitness-sports',
    count: '5 creators',
  },
  {
    icon: Music,
    label: 'Dance & Music',
    desc: 'Trending choreography and extractable MP3 sounds.',
    href: '/category/dance-music',
    count: '5 creators',
  },
];

export default function ExploreNichesSection() {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('#tiktok-username-search') as HTMLInputElement | null;
    input?.focus();
  };

  return (
    <div className="w-full flex flex-col">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-7">
        <div className="max-w-2xl">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
            Explore TikTok Niches &amp; Creator Formats
          </h2>
          <p className="text-sm text-[var(--ink-secondary)] mt-2 leading-relaxed">
            From cooking tutorials and tech reviews to comedy sketches, browse public accounts by topic and save clean HD videos with zero restrictions.
          </p>
        </div>

        <Link
          href="/categories"
          className="h-9 px-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
        >
          <span>All categories</span>
          <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)] rtl:rotate-180" />
        </Link>
      </div>

      {/* Clean 6-Niche Directory Grid (No decorative 3D illustration) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {NICHES.map((niche) => {
          const Icon = niche.icon;
          return (
            <Link
              key={niche.href}
              href={niche.href}
              className="group p-4 rounded-xl bg-[var(--surface-canvas)] hover:bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)]/40 hover:shadow-[var(--shadow-card-hover)] transition-all flex items-start gap-3.5"
            >
              <div className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] group-hover:text-[var(--accent-primary-text)] group-hover:border-[var(--accent-primary)]/30 flex items-center justify-center shrink-0 transition-colors">
                <Icon className="w-4 h-4" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate">
                    {niche.label}
                  </h3>
                  <span className="text-[11px] font-medium text-[var(--ink-muted)] shrink-0">
                    {niche.count}
                  </span>
                </div>
                <p className="text-xs text-[var(--ink-secondary)] mt-1 line-clamp-2 leading-relaxed">
                  {niche.desc}
                </p>
              </div>
            </Link>
          );
        })}
      </div>

      {/* Three Clean Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
        <div className="p-5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-start flex flex-col gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]/20 flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-[var(--ink-primary)] block mt-0.5">
            100% Anonymous Viewing
          </span>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            No TikTok account needed. Creators never see your name on their view list or profile history.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-start flex flex-col gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/20 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-sm font-bold text-[var(--ink-primary)] block mt-0.5">
            Every Public Category
          </span>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Search any creator in food, dance, gaming, fitness, comedy, beauty, and education worldwide.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-start flex flex-col gap-2">
          <div className="w-8 h-8 rounded-lg bg-[var(--surface-elevated)] text-[var(--ink-primary)] border border-[var(--border-subtle)] flex items-center justify-center">
            <Zap className="w-4 h-4 text-[var(--accent-primary)]" />
          </div>
          <span className="text-sm font-bold text-[var(--ink-primary)] block mt-0.5">
            Instant HD Downloads
          </span>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Get original full-resolution MP4 video and clean MP3 audio directly on your device.
          </p>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="mt-7 flex justify-center">
        <button
          type="button"
          onClick={scrollToSearch}
          className="h-10 inline-flex items-center gap-2 px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
        >
          <span>Search a creator in your favorite niche</span>
          <ArrowRight className="w-4 h-4 rtl:rotate-180" />
        </button>
      </div>
    </div>
  );
}