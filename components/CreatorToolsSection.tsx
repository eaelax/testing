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
    iconColor: 'bg-emerald-100 text-emerald-700 group-hover:bg-emerald-700 group-hover:text-white',
  },
  {
    href: '/tiktok-mp3-downloader',
    icon: Music,
    title: 'Audio MP3 Extractor',
    desc: 'Extract background audio and sounds in clean MP3.',
    iconColor: 'bg-sky-100 text-sky-700 group-hover:bg-sky-700 group-hover:text-white',
  },
  {
    href: '/tiktok-profile-viewer',
    icon: Users,
    title: 'Anonymous Viewer',
    desc: 'View profile data and follower counts anonymously.',
    iconColor: 'bg-purple-100 text-purple-700 group-hover:bg-purple-700 group-hover:text-white',
  },
  {
    href: '/tiktok-analytics',
    icon: LayoutGrid,
    title: 'Viral Analytics',
    desc: 'Check creator engagement and video statistics.',
    iconColor: 'bg-indigo-100 text-indigo-700 group-hover:bg-indigo-700 group-hover:text-white',
  },
  {
    href: '/tiktok-story-downloader',
    icon: Clock,
    title: 'Story Downloader',
    desc: 'Save disappearing stories before they expire in 24h.',
    iconColor: 'bg-amber-100 text-amber-800 group-hover:bg-amber-700 group-hover:text-white',
  },
  {
    href: '/tiktok-photo-downloader',
    icon: ImageIcon,
    title: 'Photo & Slideshow',
    desc: 'Download full-res carousel slideshow photos in HD.',
    iconColor: 'bg-rose-100 text-rose-700 group-hover:bg-[#e11d48] group-hover:text-white',
  },
  {
    href: '/tiktok-money-calculator',
    icon: DollarSign,
    title: 'Money Calculator',
    desc: 'Estimate creator earnings and sponsored post rates.',
    iconColor: 'bg-green-100 text-green-700 group-hover:bg-green-700 group-hover:text-white',
  },
  {
    href: '/tiktok-engagement-calculator',
    icon: Percent,
    title: 'Engagement Rate',
    desc: 'Compute interaction rates against viral benchmarks.',
    iconColor: 'bg-cyan-100 text-cyan-800 group-hover:bg-cyan-700 group-hover:text-white',
  },
  {
    href: '/tiktok-caption-generator',
    icon: Hash,
    title: 'Caption Generator',
    desc: 'Generate viral hooks, captions, and FYP hashtags.',
    iconColor: 'bg-fuchsia-100 text-fuchsia-700 group-hover:bg-fuchsia-700 group-hover:text-white',
  },
  {
    href: '/tiktok-watermark-remover',
    icon: ShieldCheck,
    title: 'Watermark Remover',
    desc: 'Remove TikTok logos for Instagram Reels & Shorts.',
    iconColor: 'bg-teal-100 text-teal-800 group-hover:bg-teal-700 group-hover:text-white',
  },
];

export default function CreatorToolsSection() {
  return (
    <section id="tools" className="w-full mt-14 pt-10 border-t border-slate-300/80 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 mt-1.5 leading-relaxed">
          Select a tool to download media, inspect profiles, analyze viral growth, and remove watermarks.
        </p>
      </div>

      {/* 10-Tool Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {ALL_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-4 rounded-xl bg-white border border-slate-300/80 hover:border-[#e11d48]/60 hover:shadow-md transition-all shadow-xs flex flex-col justify-between min-h-[144px]"
            >
              <div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-3 ${tool.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-950 group-hover:text-[#e11d48] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-[11px] text-slate-700 leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-200 text-[11px] font-bold text-slate-700 group-hover:text-[#e11d48] transition-colors">
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
