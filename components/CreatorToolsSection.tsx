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
    'bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 group-hover:bg-[var(--accent-primary)] group-hover:text-[var(--accent-contrast)] group-hover:border-[var(--accent-primary)]',
  cyan:
    'bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] group-hover:bg-[var(--accent-cyan)] group-hover:text-[var(--ink-primary)]',
  dark:
    'bg-[var(--accent-dark)] text-[var(--accent-contrast)] border border-[var(--accent-dark)] group-hover:bg-[var(--accent-primary)] group-hover:border-[var(--accent-primary)]',
} as const;

export default function CreatorToolsSection() {
  return (
    <div id="tools" className="w-full scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-7">
        <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-sm text-[var(--ink-secondary)] mt-2 leading-relaxed">
          Pick a free tool to download clean media, inspect public profiles, check viral growth, or remove watermarks.
        </p>
      </div>

      {/* High-Contrast 10-Tool Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {ALL_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-primary)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between min-h-[146px]"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-3 ${ICON_VARIANT_STYLES[tool.variant]}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-xs text-[var(--ink-secondary)] leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[var(--border-subtle)] text-xs font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                <span>Open tool</span>
                <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}