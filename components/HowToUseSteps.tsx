'use client';

import { Search, Play, Download, Sparkles, Check, Music } from 'lucide-react';

export default function HowToUseSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow flex flex-col justify-between h-full">
        {/* Preview Window */}
        <div className="bg-[var(--surface-sunken)] rounded-lg border border-[var(--border-subtle)] p-3.5 mb-5 flex flex-col justify-between h-[196px] select-none">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-[var(--accent-primary-text)]" />
              <span>Search TikTok creator</span>
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent-primary)] text-[var(--accent-contrast)]">
              01
            </span>
          </div>

          <div className="my-auto py-1.5">
            <div className="p-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] flex items-center gap-1.5 shadow-xs">
              <span className="text-[var(--accent-primary-text)] text-xs font-black ps-1.5">@</span>
              <span className="text-xs font-semibold text-[var(--ink-primary)] flex-1 truncate">khaby.lame</span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-primary)] text-[var(--accent-contrast)] font-bold text-[10px]">
                Search
              </span>
            </div>

            <div className="mt-2.5 p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center text-xs font-black shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-bold text-[var(--ink-primary)] truncate">Khaby Lame</p>
                <p className="text-[11px] text-[var(--ink-secondary)] font-medium">162.8M followers • Verified</p>
              </div>
              <Check className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0" />
            </div>
          </div>

          <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-muted)] font-medium">
            <span>Instant profile lookup</span>
            <span className="font-bold text-[var(--accent-primary-text)]">No login</span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--accent-primary)] text-[var(--accent-contrast)] text-xs font-black tabular-nums">
              1
            </span>
            <h3 className="text-base font-extrabold text-[var(--ink-primary)]">
              Search Any Username
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Type any public TikTok username into the search box or pick a trending creator to open their full profile and video feed.
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-sunken)] rounded-lg border border-[var(--border-subtle)] p-3.5 mb-5 flex flex-col justify-between h-[196px] select-none">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-[var(--accent-primary-text)] fill-[var(--accent-primary-text)]" />
              <span>Pick a video</span>
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent-dark)] text-[var(--accent-contrast)]">
              02
            </span>
          </div>

          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="h-[78px] rounded-lg bg-[var(--accent-dark)] p-2 flex flex-col justify-between text-[var(--accent-contrast)]">
              <span className="text-[9px] font-mono font-bold bg-[var(--accent-dark-hover)] px-1.5 py-0.5 rounded w-fit">0:24</span>
              <span className="text-[9px] font-mono text-[var(--accent-cyan)]">1.2M</span>
            </div>

            <div className="h-[78px] rounded-lg bg-[var(--accent-primary)] p-2 flex flex-col justify-between text-[var(--accent-contrast)] shadow-sm">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[9px] font-mono font-bold bg-[var(--accent-dark)]/80 px-1 py-0.5 rounded">0:45</span>
                <span className="text-[8px] font-black uppercase bg-[var(--accent-contrast)] text-[var(--accent-primary-text)] px-1 rounded">Play</span>
              </div>
              <div className="w-6 h-6 rounded-md bg-[var(--accent-dark)] text-[var(--accent-contrast)] mx-auto flex items-center justify-center">
                <Play className="w-3 h-3 fill-[var(--accent-contrast)]" />
              </div>
              <span className="text-[9px] font-mono font-bold text-center">3.8M views</span>
            </div>

            <div className="h-[78px] rounded-lg bg-[var(--accent-cyan-text)] p-2 flex flex-col justify-between text-[var(--accent-contrast)]">
              <span className="text-[9px] font-mono font-bold bg-[var(--accent-dark)]/60 px-1.5 py-0.5 rounded w-fit">0:15</span>
              <span className="text-[9px] font-mono">850K</span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-muted)] font-medium">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[var(--accent-cyan-text)]" />
              <span>HD player modal</span>
            </span>
            <span className="font-bold text-[var(--ink-primary)]">30+ Videos</span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--accent-dark)] text-[var(--accent-contrast)] text-xs font-black tabular-nums">
              2
            </span>
            <h3 className="text-base font-extrabold text-[var(--ink-primary)]">
              Browse Videos &amp; Stats
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            Check creator followers, total likes, and uploaded clips. Click any video card to watch smoothly right in your browser.
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-card-hover)] transition-shadow flex flex-col justify-between h-full">
        <div className="bg-[var(--surface-sunken)] rounded-lg border border-[var(--border-subtle)] p-3.5 mb-5 flex flex-col justify-between h-[196px] select-none">
          <div className="flex items-center justify-between pb-2 border-b border-[var(--border-subtle)]">
            <span className="text-xs font-bold text-[var(--ink-primary)] flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
              <span>Clean HD export</span>
            </span>
            <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[var(--accent-cyan)] text-[var(--ink-primary)]">
              03
            </span>
          </div>

          <div className="my-auto py-1.5 flex flex-col gap-2">
            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[var(--ink-primary)]">1080p MP4 Video</p>
                <p className="text-[10px] text-[var(--accent-cyan-text)] font-bold">Watermark Free</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-cyan)] text-[var(--ink-primary)] font-bold text-[10px] flex items-center gap-1">
                <Check className="w-3 h-3" /> Save HD
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between">
              <div>
                <p className="text-xs font-bold text-[var(--ink-primary)]">Original Audio</p>
                <p className="text-[10px] text-[var(--ink-muted)] font-medium">Clean MP3 File</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-bold text-[10px] flex items-center gap-1">
                <Music className="w-3 h-3 text-[var(--accent-cyan)]" /> MP3
              </span>
            </div>
          </div>

          <div className="pt-1.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] text-[var(--ink-muted)] font-medium">
            <span>Direct browser save</span>
            <span className="font-bold text-[var(--accent-cyan-text)]">Ready</span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-[var(--accent-cyan)] text-[var(--ink-primary)] text-xs font-black tabular-nums">
              3
            </span>
            <h3 className="text-base font-extrabold text-[var(--ink-primary)]">
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