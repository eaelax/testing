'use client';

import { Search, Play, Download, Check, Music } from 'lucide-react';

export default function HowToUseSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-canvas)] rounded-lg border border-[var(--border-subtle)] p-4 mb-5 flex flex-col justify-between h-[184px] select-none">
          <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-semibold text-[var(--ink-secondary)] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Lookup profile</span>
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--surface-sunken)] text-[var(--ink-muted)]">
              Step 01
            </span>
          </div>

          <div className="my-auto py-1">
            <div className="p-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-1.5">
              <span className="text-[var(--ink-muted)] text-xs font-mono font-semibold ps-1.5">@</span>
              <span className="text-xs font-medium text-[var(--ink-primary)] flex-1 truncate">khaby.lame</span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-primary)] text-[var(--accent-contrast)] font-semibold text-[10px]">
                Search
              </span>
            </div>

            <div className="mt-2.5 p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-md bg-[var(--surface-sunken)] text-[var(--ink-primary)] border border-[var(--border-subtle)] flex items-center justify-center text-[11px] font-bold shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-semibold text-[var(--ink-primary)] truncate">Khaby Lame</p>
                <p className="text-[11px] text-[var(--ink-muted)]">162.8M followers</p>
              </div>
              <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)] shrink-0" />
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
            <span>Public profile lookup</span>
            <span className="font-medium text-[var(--ink-secondary)]">No login</span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--accent-soft)] text-[var(--accent-primary-text)] text-xs font-bold tabular-nums">
              1
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] tracking-tight">
              Search Any Username
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Type any public TikTok username into the search box or pick a trending creator to open their full profile and video feed.
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-canvas)] rounded-lg border border-[var(--border-subtle)] p-4 mb-5 flex flex-col justify-between h-[184px] select-none">
          <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-semibold text-[var(--ink-secondary)] flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-[var(--accent-primary)]" />
              <span>Select video</span>
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--surface-sunken)] text-[var(--ink-muted)]">
              Step 02
            </span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="h-[76px] rounded-lg bg-[var(--surface-sunken)] border border-[var(--border-subtle)] p-2 flex flex-col justify-between text-[var(--ink-secondary)]">
              <span className="text-[9px] font-mono font-semibold text-[var(--ink-muted)]">0:24</span>
              <span className="text-[10px] font-mono font-semibold text-[var(--ink-primary)]">1.2M</span>
            </div>

            <div className="h-[76px] rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-primary)]/30 p-2 flex flex-col justify-between text-[var(--accent-primary-text)]">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[9px] font-mono font-semibold">0:45</span>
                <span className="text-[8px] font-bold uppercase px-1 rounded bg-[var(--accent-primary)] text-[var(--accent-contrast)]">
                  HD
                </span>
              </div>
              <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] text-white mx-auto flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white translate-x-0.5" />
              </div>
              <span className="text-[9px] font-mono font-semibold text-center">3.8M</span>
            </div>

            <div className="h-[76px] rounded-lg bg-[var(--surface-sunken)] border border-[var(--border-subtle)] p-2 flex flex-col justify-between text-[var(--ink-secondary)]">
              <span className="text-[9px] font-mono font-semibold text-[var(--ink-muted)]">0:15</span>
              <span className="text-[10px] font-mono font-semibold text-[var(--ink-primary)]">850K</span>
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
            <span>Instant stream player</span>
            <span className="font-medium text-[var(--ink-secondary)]">30+ Videos</span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-[var(--ink-primary)] text-xs font-bold tabular-nums">
              2
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] tracking-tight">
              Browse Videos &amp; Stats
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Check creator followers, total likes, and uploaded clips. Click any video card to watch smoothly right in your browser.
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-canvas)] rounded-lg border border-[var(--border-subtle)] p-4 mb-5 flex flex-col justify-between h-[184px] select-none">
          <div className="flex items-center justify-between pb-2.5 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-semibold text-[var(--ink-secondary)] flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
              <span>Export media</span>
            </span>
            <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-[var(--surface-sunken)] text-[var(--ink-muted)]">
              Step 03
            </span>
          </div>

          <div className="my-auto py-1 flex flex-col gap-2">
            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[var(--ink-primary)]">1080p MP4 Video</p>
                <p className="text-[10px] text-[var(--accent-cyan-text)] font-medium">Watermark Free</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]/25 font-semibold text-[10px] flex items-center gap-1">
                <Check className="w-3 h-3" /> Save
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-[var(--ink-primary)]">Original Audio</p>
                <p className="text-[10px] text-[var(--ink-muted)]">Clean MP3 Track</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-[var(--ink-primary)] font-semibold text-[10px] flex items-center gap-1">
                <Music className="w-3 h-3 text-[var(--ink-muted)]" /> MP3
              </span>
            </div>
          </div>

          <div className="pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-muted)]">
            <span>Direct browser save</span>
            <span className="font-medium text-[var(--accent-cyan-text)]">Ready</span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] text-xs font-bold tabular-nums">
              3
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] tracking-tight">
              Download in High Quality
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Click Download HD Video to save clean MP4 files with no watermark, or click Download Audio to save MP3 music with one tap.
          </p>
        </div>
      </div>
    </div>
  );
}