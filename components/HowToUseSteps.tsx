'use client';

import { Search, Play, Download, Sparkles, Check, Music } from 'lucide-react';

export default function HowToUseSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col justify-between h-full">
        {/* Mockup UI Window - Search TikTok creator */}
        <div className="bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#BE123C]" />
              <span>Search TikTok creator</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-[#0F766E] animate-pulse" />
          </div>

          {/* Mockup Search Bar */}
          <div className="my-auto py-2">
            <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#D1D5DB] flex items-center gap-2">
              <span className="text-[#5C6573] text-xs">@</span>
              <span className="text-xs font-semibold text-[#111827] flex-1 truncate">khaby.lame</span>
              <span className="px-2.5 py-1 rounded-md bg-[#D61C47] text-[#FFFFFF] font-bold text-[10px]">
                Search
              </span>
            </div>

            {/* Found Creator Quick Preview */}
            <div className="mt-2.5 p-2 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#111827] text-[#FFFFFF] flex items-center justify-center text-xs font-bold shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-[#111827] truncate">Khaby Lame</p>
                <p className="text-[10px] text-[#5C6573]">162.8M followers • Verified</p>
              </div>
              <Check className="w-4 h-4 text-[#0F766E] shrink-0" />
            </div>
          </div>

          {/* Mockup Bottom Status Bar */}
          <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[10px] text-[#5C6573]">
            <span>Instant profile lookup</span>
            <span className="font-semibold text-[#BE123C]">Step 01</span>
          </div>
        </div>

        {/* Step Text Content */}
        <div>
          <span className="text-xs font-black text-[#BE123C] uppercase tracking-widest block mb-1">
            Step 1
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-1">
            Search or Paste Profile
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Type any public TikTok username into the search bar or choose one of the trending creators to inspect their full profile and video feed.
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col justify-between h-full">
        {/* Mockup UI Window - Inspect & select video */}
        <div className="bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-[#D61C47] fill-[#D61C47]" />
              <span>Inspect &amp; select video</span>
            </span>
            <span className="text-[10px] font-bold text-[#5C6573]">30+ Videos</span>
          </div>

          {/* Mockup 3 Video Previews Grid */}
          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="h-20 rounded-lg bg-[#1F2937] p-1.5 flex flex-col justify-between text-white relative overflow-hidden">
              <span className="text-[9px] font-bold bg-[#111827]/85 px-1 py-0.5 rounded w-fit">0:24</span>
              <div className="flex items-center justify-between text-[8px] text-slate-200">
                <span>▶ 1.2M</span>
              </div>
            </div>

            {/* Selected Highlight Video */}
            <div className="h-20 rounded-lg bg-[#111827] p-1.5 flex flex-col justify-between text-white relative ring-2 ring-[#D61C47] ring-offset-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold bg-[#1F2937] px-1 py-0.5 rounded">0:45</span>
                <span className="text-[8px] font-black uppercase bg-[#D61C47] text-[#FFFFFF] px-1 rounded">Selected</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-[#FFFFFF] text-[#D61C47] mx-auto flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-[#D61C47] translate-x-0.2" />
              </div>
              <div className="flex items-center justify-between text-[8px] text-white">
                <span>▶ 3.8M</span>
                <span>♥ 740K</span>
              </div>
            </div>

            <div className="h-20 rounded-lg bg-[#334155] p-1.5 flex flex-col justify-between text-white relative overflow-hidden">
              <span className="text-[9px] font-bold bg-[#111827]/85 px-1 py-0.5 rounded w-fit">0:15</span>
              <div className="flex items-center justify-between text-[8px] text-slate-200">
                <span>▶ 850K</span>
              </div>
            </div>
          </div>

          {/* Mockup Bottom Controls */}
          <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[10px] text-[#5C6573]">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-[#BE123C]" /> Click to open HD player
            </span>
            <span className="font-semibold text-[#BE123C]">Step 02</span>
          </div>
        </div>

        {/* Step Text Content */}
        <div>
          <span className="text-xs font-black text-[#BE123C] uppercase tracking-widest block mb-1">
            Step 2
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-1">
            Browse Videos &amp; Stats
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Examine creator followers, engagement rates, and all published videos. Click any video tile to launch the smooth in-browser player.
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col justify-between h-full">
        {/* Mockup UI Window - Clean hd export */}
        <div className="bg-[#F8F9FA] rounded-xl border border-[#E5E7EB] p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-[#E5E7EB]">
            <span className="text-xs font-bold text-[#111827] flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[#0F766E]" />
              <span>Clean hd export</span>
            </span>
            <span className="text-[10px] font-bold text-[#0F766E] bg-[#F0FDFA] px-1.5 py-0.5 rounded border border-[#99F6E4]/70">
              Ready
            </span>
          </div>

          {/* Mockup Download Action Details */}
          <div className="my-auto py-2 flex flex-col gap-2">
            <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#111827]">1080p MP4 Video</p>
                <p className="text-[10px] text-[#0F766E] font-medium">Watermark Free • Original HD</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#D61C47] text-[#FFFFFF] font-bold text-[10px] flex items-center gap-1">
                <Check className="w-3 h-3" /> Save HD
              </span>
            </div>

            <div className="p-2 rounded-lg bg-[#FFFFFF] border border-[#E5E7EB] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[#111827]">Background Audio</p>
                <p className="text-[10px] text-[#5C6573] font-medium">Clean 320kbps MP3 Audio</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[#F0FDFA] text-[#0F766E] border border-[#99F6E4]/70 font-bold text-[10px] flex items-center gap-1">
                <Music className="w-3 h-3" /> Save MP3
              </span>
            </div>
          </div>

          {/* Mockup Bottom Controls */}
          <div className="pt-2 border-t border-[#E5E7EB] flex items-center justify-between text-[10px] text-[#5C6573]">
            <span>Fast direct browser download</span>
            <span className="font-semibold text-[#BE123C]">Step 03</span>
          </div>
        </div>

        {/* Step Text Content */}
        <div>
          <span className="text-xs font-black text-[#BE123C] uppercase tracking-widest block mb-1">
            Step 3
          </span>
          <h3 className="text-base sm:text-lg font-bold text-[#111827] mb-1">
            Download in High Quality
          </h3>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            Click Download HD Video to automatically start saving watermark-free videos, or extract clean background music in MP3 format with one tap.
          </p>
        </div>
      </div>
    </div>
  );
}
