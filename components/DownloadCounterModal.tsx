'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Download, Loader2, Music, Film, Sparkles } from 'lucide-react';
import { useSiteSettings, SiteSettings } from '@/lib/settings-store';
import { executeDirectCdnDownload } from '@/lib/tiktok-client';
import { MotionModalBackdrop, MotionModalPanel, MotionFadeIn } from './MotionPrimitives';
import AdSlot from './AdSlot';

interface DownloadCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
  fileName: string;
  mediaType: 'video' | 'audio' | 'avatar';
  title?: string;
}

function ModalContent({
  initialSeconds,
  downloadUrl,
  fileName,
  mediaType,
  title,
  onClose,
  settings,
}: {
  initialSeconds: number;
  downloadUrl: string;
  fileName: string;
  mediaType: 'video' | 'audio' | 'avatar';
  title?: string;
  onClose: () => void;
  settings: SiteSettings;
}) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isReady, setIsReady] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const [hasTriggeredDownload, setHasTriggeredDownload] = useState(false);
  const [downloadError, setDownloadError] = useState<string | null>(null);

  const runDownload = useCallback(async () => {
    if (!downloadUrl) return;
    setIsDownloading(true);
    setDownloadError(null);
    try {
      await executeDirectCdnDownload(downloadUrl, fileName);
      setHasTriggeredDownload(true);
    } catch (err: unknown) {
      setDownloadError(err instanceof Error ? err.message : 'Download failed. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  }, [downloadUrl, fileName]);

  const handleManualDownloadClick = async () => {
    await runDownload();
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    let current = initialSeconds;
    const timer = setInterval(() => {
      current -= 1;
      setCounter(current);

      if (current <= 0) {
        clearInterval(timer);
        setIsReady(true);
        if (downloadUrl) {
          void runDownload();
        }
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [initialSeconds, downloadUrl, runDownload]);

  const progressPercent = Math.min(
    100,
    Math.round(((initialSeconds - counter) / initialSeconds) * 100)
  );

  return (
    <MotionModalPanel
      ariaLabel={mediaType === 'audio' ? 'Clean Audio Downloader' : 'Watermark-Free HD Downloader'}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-[410px] sm:max-w-[440px] h-[540px] sm:h-[580px] max-h-[90vh] bg-[var(--surface-elevated)] rounded-2xl border-2 border-[var(--ink-primary)] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Top Dual-Tone Accent Line */}
      <div className="w-full h-[3px] creator-split-bar shrink-0" aria-hidden="true" />

      {/* High-Contrast Light Header */}
      <div className="w-full bg-[var(--surface-canvas)] text-[var(--ink-primary)] px-4 py-3 border-b border-[var(--border-subtle)] flex items-center justify-between gap-2.5 shrink-0">
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className={`w-8 h-8 rounded-lg border flex items-center justify-center shrink-0 ${
              mediaType === 'audio'
                ? 'bg-[var(--accent-cyan-soft)] border-[var(--accent-cyan)] text-[var(--accent-cyan-text)]'
                : 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary-text)]'
            }`}
          >
            {mediaType === 'audio' ? (
              <Music className="w-4 h-4" />
            ) : (
              <Film className="w-4 h-4" />
            )}
          </div>
          <span className="text-xs sm:text-[13px] font-extrabold text-[var(--ink-primary)] truncate">
            {mediaType === 'audio' ? 'Clean Audio Downloader' : 'Watermark-Free HD Downloader'}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-9 h-9 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--accent-soft)] text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] border border-[var(--border-strong)] hover:border-[var(--accent-primary)] flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          aria-label="Close"
          title="Close and return to videos"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Body */}
      <div className="w-full flex-1 min-h-0 flex flex-col items-center justify-center p-4 sm:p-5 text-center overflow-y-auto bg-[var(--surface-elevated)]">
        {!isReady ? (
          <div className="flex flex-col items-center justify-center w-full max-w-sm">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[var(--border-subtle)]"
                  strokeWidth="7"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[var(--accent-primary)] transition-all duration-1000 ease-linear"
                  strokeWidth="7"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * progressPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl sm:text-4xl font-black text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-none">
                  {counter}
                </span>
                <span className="text-[10px] text-[var(--ink-muted)] font-bold uppercase tracking-wider mt-1">
                  Seconds
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-xs sm:text-[13px] font-extrabold text-[var(--ink-primary)] mb-1">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[var(--accent-primary)]" />
              <span>Preparing {mediaType.toUpperCase()} Stream</span>
            </div>

            <p className="text-xs text-[var(--ink-secondary)] max-w-xs leading-relaxed px-2">
              {settings.downloadPreparingText ||
                'Fetching original high quality stream and removing watermarks in background...'}
            </p>
          </div>
        ) : (
          <MotionFadeIn className="flex flex-col items-center justify-center w-full max-w-sm">
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border-2 border-[var(--accent-cyan)] flex items-center justify-center mb-3.5">
              {isDownloading ? (
                <Loader2 className="w-7 h-7 sm:w-8 sm:h-8 animate-spin text-[var(--accent-primary)]" />
              ) : (
                <CheckCircle2 className="w-8 h-8 sm:w-9 sm:h-9 text-[var(--accent-cyan-text)]" />
              )}
            </div>

            <h3 className="text-lg sm:text-xl font-black text-[var(--ink-primary)] tracking-tight">
              {isDownloading ? 'Saving File...' : 'Download is Ready!'}
            </h3>

            <p className="text-xs text-[var(--ink-secondary)] max-w-xs mt-1 leading-relaxed px-2">
              {downloadError
                ? downloadError
                : isDownloading
                ? 'Downloading stream directly to your device...'
                : hasTriggeredDownload
                ? 'Your file download has started. Click below if you want to save it again.'
                : 'Click the button below to save your clean file without watermarks.'}
            </p>

            <div className="mt-4 w-full max-w-xs flex flex-col gap-2.5">
              <button
                type="button"
                disabled={isDownloading || !downloadUrl}
                onClick={handleManualDownloadClick}
                className="w-full h-11 px-4 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] disabled:cursor-not-allowed text-[var(--accent-contrast)] font-bold text-xs sm:text-[13px] flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-current shrink-0" />
                    <span>Downloading File...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-4 h-4 text-current shrink-0" />
                    <span>
                      {hasTriggeredDownload
                        ? 'Download Again'
                        : mediaType === 'audio'
                        ? 'Download MP3 Audio'
                        : mediaType === 'avatar'
                        ? 'Download Avatar Image'
                        : 'Download HD Video Now'}
                    </span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full h-10 px-4 rounded-xl bg-[var(--surface-canvas)] hover:bg-[var(--surface-sunken)] border border-[var(--border-strong)] text-[var(--ink-primary)] font-bold text-xs transition-colors cursor-pointer"
              >
                Back to Profile Videos
              </button>
            </div>
          </MotionFadeIn>
        )}

        <AdSlot placement="modal" className="w-full mt-3 mb-0 shrink-0" />
      </div>

      {/* Bottom Aqua-Mist Metadata Bar */}
      <div className="w-full px-4 py-2.5 bg-[var(--surface-tint-aqua)] border-t border-[var(--border-subtle)] text-[11px] text-[var(--ink-primary)] flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5 truncate max-w-[210px] sm:max-w-[260px] text-start">
          <Sparkles className="w-3.5 h-3.5 text-[var(--accent-primary-text)] shrink-0" />
          <span className="truncate font-mono font-semibold text-[var(--ink-primary)]">
            {fileName || title || 'tiktok_clean_media'}
          </span>
        </div>
        <span className="font-extrabold text-[var(--accent-cyan-text)] shrink-0 uppercase tracking-wider text-[10px] ms-2 bg-[var(--surface-elevated)] border border-[var(--accent-cyan)] px-2 py-0.5 rounded-md">
          No Watermark HD
        </span>
      </div>
    </MotionModalPanel>
  );
}

export default function DownloadCounterModal({
  isOpen,
  onClose,
  downloadUrl,
  fileName,
  mediaType,
  title,
}: DownloadCounterModalProps) {
  const [settings] = useSiteSettings();
  const initialSeconds = Math.max(1, settings.downloadCounterSeconds || 5);

  return (
    <AnimatePresence>
      {isOpen && (
        <MotionModalBackdrop
          onClick={onClose}
          className="fixed inset-0 z-50 bg-[var(--ink-primary)]/60 flex items-center justify-center p-3 sm:p-4"
        >
          <ModalContent
            initialSeconds={initialSeconds}
            downloadUrl={downloadUrl}
            fileName={fileName}
            mediaType={mediaType}
            title={title}
            onClose={onClose}
            settings={settings}
          />
        </MotionModalBackdrop>
      )}
    </AnimatePresence>
  );
}