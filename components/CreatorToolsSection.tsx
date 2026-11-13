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
    iconColor: 'bg-[#FDF2F4] text-[#BE123C] group-hover:bg-[#D61C47] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-mp3-downloader',
    icon: Music,
    title: 'Audio MP3 Extractor',
    desc: 'Extract background audio and sounds in clean MP3.',
    iconColor: 'bg-[#F0FDFA] text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-profile-viewer',
    icon: Users,
    title: 'Anonymous Viewer',
    desc: 'View profile data and follower counts anonymously.',
    iconColor: 'bg-[#F0FDFA] text-[#0F766E] group-hover:bg-[#0F766E] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-analytics',
    icon: LayoutGrid,
    title: 'Viral Analytics',
    desc: 'Check creator engagement and video statistics.',
    iconColor: 'bg-[#F1F5F9] text-[#334155] group-hover:bg-[#111827] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-story-downloader',
    icon: Clock,
    title: 'Story Downloader',
    desc: 'Save disappearing stories before they expire in 24h.',
    iconColor: 'bg-[#FDF2F4] text-[#BE123C] group-hover:bg-[#D61C47] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-photo-downloader',
    icon: ImageIcon,
    title: 'Photo & Slideshow',
    desc: 'Download full-res carousel slideshow photos in HD.',
    iconColor: 'bg-[#FDF2F4] text-[#BE123C] group-hover:bg-[#D61C47] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-money-calculator',
    icon: DollarSign,
    title: 'Money Calculator',
    desc: 'Estimate creator earnings and sponsored post rates.',
    iconColor: 'bg-[#F1F5F9] text-[#334155] group-hover:bg-[#111827] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-engagement-calculator',
    icon: Percent,
    title: 'Engagement Rate',
    desc: 'Compute interaction rates against viral benchmarks.',
    iconColor: 'bg-[#F1F5F9] text-[#334155] group-hover:bg-[#111827] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-caption-generator',
    icon: Hash,
    title: 'Caption Generator',
    desc: 'Generate viral hooks, captions, and FYP hashtags.',
    iconColor: 'bg-[#F1F5F9] text-[#334155] group-hover:bg-[#111827] group-hover:text-[#FFFFFF]',
  },
  {
    href: '/tiktok-watermark-remover',
    icon: ShieldCheck,
    title: 'Watermark Remover',
    desc: 'Remove TikTok logos for Instagram Reels & Shorts.',
    iconColor: 'bg-[#FDF2F4] text-[#BE123C] group-hover:bg-[#D61C47] group-hover:text-[#FFFFFF]',
  },
];

export default function CreatorToolsSection() {
  return (
    <section id="tools" className="w-full mt-14 pt-10 border-t border-[#E5E7EB] scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-xs sm:text-sm text-[#4B5563] mt-1 leading-relaxed">
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
              className="group p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#9CA3AF] transition-colors flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-3 ${tool.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-[#111827] transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-[11px] text-[#4B5563] leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-[#E5E7EB] text-[11px] font-semibold text-[#5C6573] group-hover:text-[#111827]">
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
