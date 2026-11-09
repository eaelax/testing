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
  Sparkles,
} from 'lucide-react';

const ALL_TOOLS = [
  {
    href: '/tiktok-video-downloader',
    icon: Download,
    title: 'HD Video Downloader',
    desc: 'Save original 1080p MP4 videos with no watermark.',
    iconColor: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    href: '/tiktok-mp3-downloader',
    icon: Music,
    title: 'Audio MP3 Extractor',
    desc: 'Extract background audio and sounds in clean MP3.',
    iconColor: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
  },
  {
    href: '/tiktok-profile-viewer',
    icon: Users,
    title: 'Anonymous Viewer',
    desc: 'View profile data and follower counts anonymously.',
    iconColor: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    href: '/tiktok-analytics',
    icon: LayoutGrid,
    title: 'Viral Analytics',
    desc: 'Check creator engagement and video statistics.',
    iconColor: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    href: '/tiktok-story-downloader',
    icon: Clock,
    title: 'Story Downloader',
    desc: 'Save disappearing stories before they expire in 24h.',
    iconColor: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
  },
  {
    href: '/tiktok-photo-downloader',
    icon: ImageIcon,
    title: 'Photo & Slideshow',
    desc: 'Download full-res carousel slideshow photos in HD.',
    iconColor: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    href: '/tiktok-money-calculator',
    icon: DollarSign,
    title: 'Money Calculator',
    desc: 'Estimate creator earnings and sponsored post rates.',
    iconColor: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  },
  {
    href: '/tiktok-engagement-calculator',
    icon: Percent,
    title: 'Engagement Rate',
    desc: 'Compute interaction rates against viral benchmarks.',
    iconColor: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
  },
  {
    href: '/tiktok-caption-generator',
    icon: Hash,
    title: 'Caption Generator',
    desc: 'Generate viral hooks, captions, and FYP hashtags.',
    iconColor: 'bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white',
  },
  {
    href: '/tiktok-watermark-remover',
    icon: ShieldCheck,
    title: 'Watermark Remover',
    desc: 'Remove TikTok logos for Instagram Reels & Shorts.',
    iconColor: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
  },
];

export default function CreatorToolsSection() {
  return (
    <section id="tools" className="w-full mt-14 pt-10 border-t border-slate-200 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Select a tool to download media, inspect profiles, analyze viral growth, and remove watermarks.
        </p>
      </div>

      {/* Well-arranged 10-Tool Responsive Grid (5 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {ALL_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all shadow-2xs flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-3 ${tool.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-black transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-500 group-hover:text-slate-900">
                <span>Use tool</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
