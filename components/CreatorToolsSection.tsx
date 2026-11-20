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
  },
  {
    href: '/tiktok-mp3-downloader',
    icon: Music,
    title: 'Audio MP3 Extractor',
    desc: 'Extract background audio and sounds in clean MP3.',
  },
  {
    href: '/tiktok-profile-viewer',
    icon: Users,
    title: 'Anonymous Viewer',
    desc: 'View profile data and follower counts anonymously.',
  },
  {
    href: '/tiktok-analytics',
    icon: LayoutGrid,
    title: 'Viral Analytics',
    desc: 'Check creator engagement and video statistics.',
  },
  {
    href: '/tiktok-story-downloader',
    icon: Clock,
    title: 'Story Downloader',
    desc: 'Save disappearing stories before they expire in 24h.',
  },
  {
    href: '/tiktok-photo-downloader',
    icon: ImageIcon,
    title: 'Photo & Slideshow',
    desc: 'Download full-res carousel slideshow photos in HD.',
  },
  {
    href: '/tiktok-money-calculator',
    icon: DollarSign,
    title: 'Money Calculator',
    desc: 'Estimate creator earnings and sponsored post rates.',
  },
  {
    href: '/tiktok-engagement-calculator',
    icon: Percent,
    title: 'Engagement Rate',
    desc: 'Compute interaction rates against viral benchmarks.',
  },
  {
    href: '/tiktok-caption-generator',
    icon: Hash,
    title: 'Caption Generator',
    desc: 'Generate viral hooks, captions, and FYP hashtags.',
  },
  {
    href: '/tiktok-watermark-remover',
    icon: ShieldCheck,
    title: 'Watermark Remover',
    desc: 'Remove TikTok logos for Instagram Reels & Shorts.',
  },
] as const;

export default function CreatorToolsSection() {
  return (
    <div id="tools" className="w-full scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-sm text-[var(--ink-secondary)] mt-2 leading-relaxed">
          Pick a free utility to download clean media, inspect public profiles, analyze creator growth, or remove watermarks.
        </p>
      </div>

      {/* Clean 10-Tool Pastel-Editorial Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {ALL_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--pastel-blue-border)] hover:shadow-[var(--shadow-card-hover)] transition-all flex flex-col justify-between min-h-[152px]"
            >
              <div>
                <div className="w-9 h-9 rounded-xl bg-[var(--pastel-lavender)]/60 border border-[var(--pastel-lavender-border)] text-[var(--ink-primary)] group-hover:bg-[var(--accent-dark)] group-hover:text-[var(--accent-contrast)] group-hover:border-[var(--accent-dark)] flex items-center justify-center shrink-0 transition-colors mb-3">
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-xs text-[var(--ink-secondary)] leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-3 border-t border-[var(--border-subtle)] text-xs font-semibold text-[var(--ink-secondary)] group-hover:text-[var(--ink-primary)] transition-colors">
                <span>Open tool</span>
                <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)] group-hover:text-[var(--ink-primary)] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}