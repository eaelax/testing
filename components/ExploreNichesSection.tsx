'use client';

import Link from 'next/link';
import {
  Utensils,
  Film,
  ChefHat,
  Flame,
  Music,
  ArrowRight,
  ShieldCheck,
  Layers,
  Zap,
} from 'lucide-react';

const NICHES = [
  {
    icon: Utensils,
    label: 'Food & Mukbangs',
    href: '/category/food-cooking',
    className:
      'text-[var(--ink-primary)] bg-[var(--surface-sunken)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)]',
    iconClass: 'text-[var(--accent-primary-text)]',
  },
  {
    icon: Film,
    label: 'Tech & AI',
    href: '/category/tech-ai',
    className:
      'text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--ink-primary)]',
    iconClass: 'text-current',
  },
  {
    icon: ChefHat,
    label: 'Culinary & Recipes',
    href: '/category/food-cooking',
    className:
      'text-[var(--accent-primary-text)] bg-[var(--accent-soft)] border-[var(--accent-primary)]/40 hover:bg-[var(--accent-primary)] hover:text-[var(--accent-contrast)]',
    iconClass: 'text-current',
  },
  {
    icon: Flame,
    label: 'Comedy & Viral',
    href: '/category/comedy',
    className:
      'text-[var(--ink-primary)] bg-[var(--surface-sunken)] border-[var(--border-subtle)] hover:border-[var(--accent-primary)] hover:bg-[var(--accent-soft)]',
    iconClass: 'text-[var(--accent-primary-text)]',
  },
  {
    icon: Music,
    label: 'Dance & Music',
    href: '/category/dance-music',
    className:
      'text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan)] hover:text-[var(--ink-primary)]',
    iconClass: 'text-current',
  },
];

export default function ExploreNichesSection() {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    input?.focus();
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-6">
        <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight leading-tight">
          Explore Any TikTok Niche &amp; Creator Format
        </h2>

        <p className="text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed max-w-xl">
          From viral mukbangs and cooking tutorials to 3D animations and comedy sketches, Tik Profiles Viewer lets you browse any public account and save HD videos with zero restrictions.
        </p>

        {/* Interactive Niche Category Links */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
          {NICHES.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <Link
                key={i}
                href={niche.href}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors ${niche.className}`}
              >
                <Icon className={`w-3.5 h-3.5 ${niche.iconClass}`} />
                <span>{niche.label}</span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Direct Showcase Image without outer or inner container */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/assets/aistudio/section-1_3e8f1512.png"
        alt="Popular TikTok niches including Mukbang, 3D Animation, and Culinary Chef videos"
        referrerPolicy="no-referrer"
        loading="lazy"
        className="w-full max-w-3xl mx-auto h-auto block my-2"
      />

      {/* Three High-Contrast Value Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-6">
        <div className="p-5 rounded-xl bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-start flex flex-col gap-2">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <span className="text-sm font-extrabold text-[var(--ink-primary)] block">
            100% Anonymous Viewing
          </span>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            No TikTok account needed. Creators never see your name on their view list or profile history.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-start flex flex-col gap-2">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
            <Layers className="w-4 h-4" />
          </div>
          <span className="text-sm font-extrabold text-[var(--ink-primary)] block">
            Every Public Category
          </span>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Search any creator in food, dance, gaming, fitness, comedy, beauty, and education worldwide.
          </p>
        </div>

        <div className="p-5 rounded-xl bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-start flex flex-col gap-2">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
            <Zap className="w-4 h-4 text-[var(--accent-cyan)]" />
          </div>
          <span className="text-sm font-extrabold text-[var(--ink-primary)] block">
            Instant HD Downloads
          </span>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Get original full-resolution MP4 video and clean MP3 audio directly on your device.
          </p>
        </div>
      </div>

      {/* Bottom CTA Button */}
      <button
        type="button"
        onClick={scrollToSearch}
        className="mt-6 h-11 inline-flex items-center gap-2 px-6 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.98] text-[var(--accent-contrast)] text-xs sm:text-sm font-bold shadow-[var(--shadow-card)] transition-all cursor-pointer"
      >
        <span>Search a creator in your favorite niche</span>
        <ArrowRight className="w-4 h-4 rtl:rotate-180" />
      </button>
    </div>
  );
}