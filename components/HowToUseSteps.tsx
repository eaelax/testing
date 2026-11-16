'use client';

import { Search, Play, Download, Sparkles, Check, Music } from 'lucide-react';

export default function HowToUseSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-xl p-4 sm:p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between h-full">
        {/* Compact Mockup UI Window */}
        <div className="bg-[var(--surface-canvas)] rounded-lg border border-[var(--border-subtle)] p-3 mb-4 flex flex-col justify-between h-[188px] min-h-[188px] select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
            <span className="text-[11px] font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[var(--accent-primary-text)]" />
              <span>Search TikTok creator</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-[var(--accent-cyan-text)] animate-pulse" />
          </div>

          <div className="my-auto py-1.5">
            <div className="p-1.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center gap-1.5">
              <span className="text-[var(--ink-muted)] text-xs font-bold ps-1">@</span>
              <span className="text-xs font-semibold text-[var(--ink-primary)] flex-1 truncate">khaby.lame</span>
              <span className="px-2 py-0.5 rounded bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold text-[10px]">
                Search
              </span>
            </div>

            <div className="mt-2 p-2 rounded-md bg-[var(--accent-soft)] border border-[var(--accent-primary)]/35 flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center text-[11px] font-bold shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-[var(--ink-primary)] truncate">Khaby Lame</p>
                <p className="text-[10px] text-[var(--ink-secondary)] font-medium">162.8M followers • Verified</p>
              </div>
              <Check className="w-3.5 h-3.5 text-[var(--accent-primary-text)] shrink-0" />
            </div>
          </div>

          <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--ink-muted)]">
            <span>Instant profile lookup</span>
            <span className="font-bold text-[var(--accent-primary-text)]">Step 01</span>
          </div>
        </div>

        <div>
          <span className="text-[11px] font-black text-[var(--accent-primary-text)] uppercase tracking-widest block mb-0.5">
            Step 1
          </span>
          <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-1">
            Search or Paste Profile
          </h3>
          <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
            Type any public TikTok username into the search bar or choose one of the trending creators to inspect their full profile and video feed.
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-xl p-4 sm:p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-canvas)] rounded-lg border border-[var(--border-subtle)] p-3 mb-4 flex flex-col justify-between h-[188px] min-h-[188px] select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
            <span className="text-[11px] font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-[var(--accent-primary-text)] fill-[var(--accent-primary-text)]" />
              <span>Inspect &amp; select video</span>
            </span>
            <span className="text-[10px] font-bold text-[var(--ink-secondary)]">30+ Videos</span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="h-[72px] rounded-md bg-[var(--accent-dark)] p-1.5 flex flex-col justify-between text-[var(--accent-contrast)] relative overflow-hidden">
              <span className="text-[9px] font-bold bg-[var(--accent-dark-hover)] px-1 py-0.5 rounded w-fit">0:24</span>
              <div className="flex items-center justify-between text-[8px] text-[var(--accent-cyan)]">
                <span>▶ 1.2M</span>
              </div>
            </div>

            <div className="h-[72px] rounded-md bg-[var(--accent-primary-hover)] p-1.5 flex flex-col justify-between text-[var(--accent-contrast)] relative ring-2 ring-[var(--accent-primary)] ring-offset-1">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[9px] font-bold bg-[var(--accent-dark)]/80 px-1 py-0.5 rounded">0:45</span>
                <span className="text-[8px] font-black uppercase bg-[var(--accent-dark)] text-[var(--accent-contrast)] px-1 rounded">Pick</span>
              </div>
              <div className="w-5 h-5 rounded-md bg-[var(--accent-dark)] text-[var(--accent-contrast)] mx-auto flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-[var(--accent-contrast)]" />
              </div>
              <div className="flex items-center justify-between text-[8px] text-[var(--accent-contrast)] font-semibold">
                <span>▶ 3.8M</span>
                <span>♥ 740K</span>
              </div>
            </div>

            <div className="h-[72px] rounded-md bg-[var(--accent-cyan-text)] p-1.5 flex flex-col justify-between text-[var(--accent-contrast)] relative overflow-hidden">
              <span className="text-[9px] font-bold bg-[var(--accent-dark)]/60 px-1 py-0.5 rounded w-fit">0:15</span>
              <div className="flex items-center justify-between text-[8px] text-[var(--accent-contrast)]">
                <span>▶ 850K</span>
              </div>
            </div>
          </div>

          <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--ink-muted)]">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-[var(--accent-cyan-text)]" /> Click to open HD player
            </span>
            <span className="font-bold text-[var(--accent-primary-text)]">Step 02</span>
          </div>
        </div>

        <div>
          <span className="text-[11px] font-black text-[var(--accent-primary-text)] uppercase tracking-widest block mb-0.5">
            Step 2
          </span>
          <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-1">
            Browse Videos &amp; Stats
          </h3>
          <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
            Examine creator followers, engagement rates, and all published videos. Click any video tile to launch the smooth in-browser player.
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-xl p-4 sm:p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-canvas)] rounded-lg border border-[var(--border-subtle)] p-3 mb-4 flex flex-col justify-between h-[188px] min-h-[188px] select-none">
          <div className="flex items-center justify-between pb-1.5 border-b border-[var(--border-subtle)]">
            <span className="text-[11px] font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
              <span>Clean HD export</span>
            </span>
            <span className="text-[10px] font-bold text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] px-1.5 py-0.5 rounded border border-[var(--accent-cyan)]">
              Ready
            </span>
          </div>

          <div className="my-auto py-1.5 flex flex-col gap-1.5">
            <div className="p-2 rounded-md bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[var(--ink-primary)]">1080p MP4 Video</p>
                <p className="text-[10px] text-[var(--accent-cyan-text)] font-semibold">Watermark Free • Original HD</p>
              </div>
              <span className="px-2 py-1 rounded bg-[var(--accent-cyan)] text-[var(--ink-primary)] font-bold text-[10px] flex items-center gap-1">
                <Check className="w-3 h-3" /> Save HD
              </span>
            </div>

            <div className="p-2 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-[var(--ink-primary)]">Background Audio</p>
                <p className="text-[10px] text-[var(--ink-secondary)] font-medium">Clean 320kbps MP3 Audio</p>
              </div>
              <span className="px-2 py-1 rounded bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-bold text-[10px] flex items-center gap-1">
                <Music className="w-3 h-3 text-[var(--accent-cyan)]" /> Save MP3
              </span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[10px] text-[var(--ink-muted)]">
            <span>Fast direct browser download</span>
            <span className="font-bold text-[var(--accent-primary-text)]">Step 03</span>
          </div>
        </div>

        <div>
          <span className="text-[11px] font-black text-[var(--accent-primary-text)] uppercase tracking-widest block mb-0.5">
            Step 3
          </span>
          <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-1">
            Download in High Quality
          </h3>
          <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
            Click Download HD Video to automatically start saving watermark-free videos, or extract clean background music in MP3 format with one tap.
          </p>
        </div>
      </div>
    </div>
  );
}