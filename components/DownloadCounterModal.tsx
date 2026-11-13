'use client';

import { useState, useEffect, useCallback } from 'react';
import { X, CheckCircle2, Download, Loader2, Music, Film, Sparkles } from 'lucide-react';
import { useSiteSettings, SiteSettings } from '@/lib/settings-store';
import { executeDirectCdnDownload } from '@/lib/tiktok-client';
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
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-lg sm:max-w-xl bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 sm:p-7 flex flex-col justify-between items-center text-center overflow-hidden animate-in fade-in zoom-in-95 duration-200 select-none"
    >
      {/* Top Header Row with Status & Close Button */}
      <div className="w-full flex items-center justify-between pb-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          {mediaType === 'audio' ? (
            <Music className="w-4 h-4 text-purple-700" />
          ) : (
            <Film className="w-4 h-4 text-[#fe2858]" />
          )}
          <span className="text-xs sm:text-sm font-bold text-slate-900">
            {mediaType === 'audio' ? 'Clean Audio Downloader' : 'Watermark-Free HD Downloader'}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 border border-slate-200 text-slate-800 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
          title="Close and return to videos"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Body: Countdown OR Ready State */}
      <div className="w-full flex flex-col items-center justify-center py-6 sm:py-8">
        {!isReady ? (
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            {/* Circular Progress & Countdown Number */}
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mb-4 sm:mb-5 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-200/80"
                  strokeWidth="7"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#01ebe4] transition-all duration-1000 ease-linear"
                  strokeWidth="7"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * progressPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-black text-slate-950 font-mono tracking-tight leading-none">
                  {counter}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-600 font-bold uppercase tracking-wider mt-1">
                  Seconds
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-950 mb-1.5">
              <Loader2 className="w-4 h-4 animate-spin text-[#fe2858]" />
              <span>Preparing {mediaType.toUpperCase()} Stream</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm leading-relaxed px-2">
              {settings.downloadPreparingText ||
                'Fetching original high quality stream and removing watermarks in background...'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-300">
            {/* Success icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
              {isDownloading ? (
                <Loader2 className="w-9 h-9 sm:w-10 sm:h-10 animate-spin text-[#00b5af]" />
              ) : (
                <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
              )}
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-950 tracking-tight">
              {isDownloading ? 'Saving File...' : 'Download is Ready!'}
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 max-w-sm mt-1.5 leading-relaxed px-2">
              {downloadError
                ? downloadError
                : isDownloading
                ? 'Downloading stream directly to your device...'
                : hasTriggeredDownload
                ? 'Your file download has started. Click below if you want to save it again.'
                : 'Click the button below to save your clean file without watermarks.'}
            </p>

            {/* Primary Download Button */}
            <div className="mt-5 w-full max-w-xs sm:max-w-sm flex flex-col gap-2.5">
              <button
                type="button"
                disabled={isDownloading || !downloadUrl}
                onClick={handleManualDownloadClick}
                className="w-full py-3.5 px-6 rounded-xl bg-[#01ebe4] hover:bg-[#00d7d0] active:scale-[0.98] disabled:opacity-60 text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin text-slate-950 shrink-0" />
                    <span>Downloading File...</span>
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 text-slate-950 shrink-0" />
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
                className="w-full py-2.5 px-5 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 border border-slate-300 font-bold text-xs sm:text-sm transition-all cursor-pointer"
              >
                Back to Profile Videos
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modal Ad Slot */}
      <AdSlot placement="modal" className="w-full my-1 shrink-0" />

      {/* Bottom Metadata Info Card */}
      <div className="w-full p-2.5 sm:p-3 rounded-xl bg-slate-100/80 border border-slate-200 text-[11px] sm:text-xs text-slate-700 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5 truncate max-w-[260px] sm:max-w-[340px] text-left">
          <Sparkles className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span className="truncate font-mono font-semibold text-slate-800">
            {fileName || title || 'tiktok_clean_media'}
          </span>
        </div>
        <span className="font-extrabold text-emerald-800 shrink-0 uppercase tracking-wider text-[10px] ml-2 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-200">
          No Watermark HD
        </span>
      </div>
    </div>
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

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
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
    </div>
  );
}
