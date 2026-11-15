'use client';

import { Search, Play, Download, Sparkles, Check, Music } from 'lucide-react';

export default function HowToUseSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-300/80 shadow-sm flex flex-col justify-between h-full">
        {/* Mockup UI Window - Search TikTok creator */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 shadow-2xs p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[#e11d48]" />
              <span>Search TikTok creator</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Mockup Search Bar */}
          <div className="my-auto py-2">
            <div className="p-2 rounded-lg bg-white border border-slate-300 flex items-center gap-2">
              <span className="text-slate-600 text-xs font-bold">@</span>
              <span className="text-xs font-semibold text-slate-950 flex-1 truncate">khaby.lame</span>
              <span className="px-2.5 py-1 rounded-md bg-[#e11d48] text-white font-bold text-[10px] shadow-2xs">
                Search
              </span>
            </div>

            {/* Found Creator Quick Preview */}
            <div className="mt-2.5 p-2 rounded-lg bg-rose-50 border border-rose-200 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-slate-950 truncate">Khaby Lame</p>
                <p className="text-[10px] text-slate-700 font-medium">162.8M followers • Verified</p>
              </div>
              <Check className="w-4 h-4 text-[#e11d48] shrink-0" />
            </div>
          </div>

          {/* Mockup Bottom Status Bar */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600">
            <span>Instant profile lookup</span>
            <span className="font-bold text-[#e11d48]">Step 01</span>
          </div>
        </div>

        {/* Step Text Content */}
        <div>
          <span className="text-xs font-black text-[#e11d48] uppercase tracking-widest block mb-1">
            Step 1
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1">
            Search or Paste Profile
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Type any public TikTok username into the search bar or choose one of the trending creators to inspect their full profile and video feed.
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-300/80 shadow-sm flex flex-col justify-between h-full">
        {/* Mockup UI Window - Inspect & select video */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 shadow-2xs p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-[#e11d48] fill-[#e11d48]" />
              <span>Inspect &amp; select video</span>
            </span>
            <span className="text-[10px] font-bold text-slate-700">30+ Videos</span>
          </div>

          {/* Mockup 3 Video Previews Grid */}
          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="h-20 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-950 p-1.5 flex flex-col justify-between text-white relative shadow-2xs overflow-hidden">
              <span className="text-[9px] font-bold bg-black/70 px-1 py-0.5 rounded w-fit">0:24</span>
              <div className="flex items-center justify-between text-[8px] text-slate-200">
                <span>▶ 1.2M</span>
              </div>
            </div>

            {/* Selected Highlight Video */}
            <div className="h-20 rounded-lg bg-gradient-to-tr from-rose-700 to-rose-500 p-1.5 flex flex-col justify-between text-white relative shadow-2xs ring-2 ring-[#e11d48] ring-offset-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold bg-black/60 px-1 py-0.5 rounded">0:45</span>
                <span className="text-[8px] font-black uppercase bg-slate-950 text-white px-1 rounded">Selected</span>
              </div>
              <div className="w-6 h-6 rounded-lg bg-[#e11d48] text-white ring-1 ring-white/70 mx-auto flex items-center justify-center shadow-sm">
                <Play className="w-3 h-3 fill-white translate-x-0.2" />
              </div>
              <div className="flex items-center justify-between text-[8px] text-white font-semibold">
                <span>▶ 3.8M</span>
                <span>♥ 740K</span>
              </div>
            </div>

            <div className="h-20 rounded-lg bg-gradient-to-tr from-sky-700 to-indigo-800 p-1.5 flex flex-col justify-between text-white relative shadow-2xs overflow-hidden">
              <span className="text-[9px] font-bold bg-black/70 px-1 py-0.5 rounded w-fit">0:15</span>
              <div className="flex items-center justify-between text-[8px] text-slate-100">
                <span>▶ 850K</span>
              </div>
            </div>
          </div>

          {/* Mockup Bottom Controls */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-amber-600" /> Click to open HD player
            </span>
            <span className="font-bold text-[#e11d48]">Step 02</span>
          </div>
        </div>

        {/* Step Text Content */}
        <div>
          <span className="text-xs font-black text-[#e11d48] uppercase tracking-widest block mb-1">
            Step 2
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1">
            Browse Videos &amp; Stats
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Examine creator followers, engagement rates, and all published videos. Click any video tile to launch the smooth in-browser player.
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-white border border-slate-300/80 shadow-sm flex flex-col justify-between h-full">
        {/* Mockup UI Window - Clean hd export */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 shadow-2xs p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-200">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-emerald-700" />
              <span>Clean HD export</span>
            </span>
            <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100 px-1.5 py-0.5 rounded border border-emerald-300">
              Ready
            </span>
          </div>

          {/* Mockup Download Action Details */}
          <div className="my-auto py-2 flex flex-col gap-2">
            <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-950">1080p MP4 Video</p>
                <p className="text-[10px] text-emerald-800 font-semibold">Watermark Free • Original HD</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-700 text-white font-bold text-[10px] shadow-2xs flex items-center gap-1">
                <Check className="w-3 h-3" /> Save HD
              </span>
            </div>

            <div className="p-2 rounded-lg bg-white border border-slate-300 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-950">Background Audio</p>
                <p className="text-[10px] text-slate-700 font-medium">Clean 320kbps MP3 Audio</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-900 text-white font-bold text-[10px] flex items-center gap-1">
                <Music className="w-3 h-3" /> Save MP3
              </span>
            </div>
          </div>

          {/* Mockup Bottom Controls */}
          <div className="pt-2 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-600">
            <span>Fast direct browser download</span>
            <span className="font-bold text-[#e11d48]">Step 03</span>
          </div>
        </div>

        {/* Step Text Content */}
        <div>
          <span className="text-xs font-black text-[#e11d48] uppercase tracking-widest block mb-1">
            Step 3
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-1">
            Download in High Quality
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            Click Download HD Video to automatically start saving watermark-free videos, or extract clean background music in MP3 format with one tap.
          </p>
        </div>
      </div>
    </div>
  );
}
