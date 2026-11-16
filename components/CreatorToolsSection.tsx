'use client';

import Link from 'next/link';
import {
  Download,
  Music,
  Users,
  LayoutGrid,
  Clock,
  Image as ImageIcon,
  DollarSign,
  Percent,
  Hash,
  ShieldCheck,
  ChevronRight,
} from 'lucide-react';

const ALL_TOOLS = [
  {
    href: '/tiktok-video-downloader',
    icon: Download,
    title: 'HD Video Downloader',
    desc: 'Save original 1080p MP4 videos with no watermark.',
    variant: 'crimson',
  },
  {
    href: '/tiktok-mp3-downloader',
    icon: Music,
    title: 'Audio MP3 Extractor',
    desc: 'Extract background audio and sounds in clean MP3.',
    variant: 'cyan',
  },
  {
    href: '/tiktok-profile-viewer',
    icon: Users,
    title: 'Anonymous Viewer',
    desc: 'View profile data and follower counts anonymously.',
    variant: 'dark',
  },
  {
    href: '/tiktok-analytics',
    icon: LayoutGrid,
    title: 'Viral Analytics',
    desc: 'Check creator engagement and video statistics.',
    variant: 'cyan',
  },
  {
    href: '/tiktok-story-downloader',
    icon: Clock,
    title: 'Story Downloader',
    desc: 'Save disappearing stories before they expire in 24h.',
    variant: 'crimson',
  },
  {
    href: '/tiktok-photo-downloader',
    icon: ImageIcon,
    title: 'Photo & Slideshow',
    desc: 'Download full-res carousel slideshow photos in HD.',
    variant: 'dark',
  },
  {
    href: '/tiktok-money-calculator',
    icon: DollarSign,
    title: 'Money Calculator',
    desc: 'Estimate creator earnings and sponsored post rates.',
    variant: 'cyan',
  },
  {
    href: '/tiktok-engagement-calculator',
    icon: Percent,
    title: 'Engagement Rate',
    desc: 'Compute interaction rates against viral benchmarks.',
    variant: 'crimson',
  },
  {
    href: '/tiktok-caption-generator',
    icon: Hash,
    title: 'Caption Generator',
    desc: 'Generate viral hooks, captions, and FYP hashtags.',
    variant: 'dark',
  },
  {
    href: '/tiktok-watermark-remover',
    icon: ShieldCheck,
    title: 'Watermark Remover',
    desc: 'Remove TikTok logos for Instagram Reels & Shorts.',
    variant: 'cyan',
  },
] as const;

const ICON_VARIANT_STYLES = {
  crimson:
    'bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/35 group-hover:bg-[var(--accent-primary-hover)] group-hover:text-[var(--accent-contrast)]',
  cyan:
    'bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] group-hover:text-[var(--ink-primary)]',
  dark:
    'bg-[var(--surface-canvas)] text-[var(--ink-primary)] border border-[var(--border-strong)] group-hover:bg-[var(--accent-dark)] group-hover:text-[var(--accent-contrast)]',
} as const;

export default function CreatorToolsSection() {
  return (
    <section id="tools" className="w-full mt-10 pt-8 border-t border-[var(--border-subtle)] scroll-mt-16">
      <div className="text-center max-w-xl mx-auto mb-6">
        <h2 className="text-xl sm:text-2xl font-extrabold text-[var(--ink-primary)] tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] mt-1 leading-relaxed">
          Select a tool to download media, inspect profiles, analyze viral growth, and remove watermarks.
        </p>
      </div>

      {/* Compact 10-Tool Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {ALL_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between min-h-[128px]"
            >
              <div>
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-2.5 ${ICON_VARIANT_STYLES[tool.variant]}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-[13px] font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-[11px] text-[var(--ink-secondary)] leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-2.5 mt-2 border-t border-[var(--border-subtle)] text-[11px] font-bold text-[var(--ink-secondary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                <span>Use tool</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}