'use client';

import { useState, useEffect, useCallback } from 'react';
import { AnimatePresence } from 'motion/react';
import { X, CheckCircle2, Download, Loader2 } from 'lucide-react';
import { useSiteSettings, SiteSettings, DEFAULT_SETTINGS } from '@/lib/settings-store';
import { executeDirectCdnDownload } from '@/lib/tiktok-client';
import { useI18n } from '@/lib/i18n/context';
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
  const { t } = useI18n();
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
      setDownloadError(
        err instanceof Error ? err.message : t('modal.videoUnavailable')
      );
    } finally {
      setIsDownloading(false);
    }
  }, [downloadUrl, fileName, t]);

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

  const headerTitle =
    mediaType === 'audio' ? t('dl.audioTitle') : t('dl.videoTitle');

  const preparingDescription =
    settings.downloadPreparingText &&
    settings.downloadPreparingText !== DEFAULT_SETTINGS.downloadPreparingText
      ? settings.downloadPreparingText
      : t('dl.preparingDefault');

  return (
    <MotionModalPanel
      ariaLabel={headerTitle}
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-[420px] min-h-[460px] max-h-[90vh] bg-[var(--surface-elevated)] rounded-2xl border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] flex flex-col justify-between overflow-hidden select-none"
    >
      {/* Modal Header */}
      <div className="w-full bg-[var(--surface-elevated)] px-5 py-3.5 border-b border-[var(--border-subtle)] flex items-center justify-between gap-3 shrink-0">
        <span className="text-xs sm:text-sm font-bold text-[var(--ink-primary)] truncate">
          {headerTitle}
        </span>

        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:bg-[var(--surface-sunken)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] flex items-center justify-center transition-colors cursor-pointer shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          aria-label={t('modal.close')}
          title={t('modal.close')}
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Body */}
      <div className="w-full flex-1 min-h-0 flex flex-col items-center justify-center p-6 text-center overflow-y-auto bg-[var(--surface-canvas)]">
        {!isReady ? (
          <div className="flex flex-col items-center justify-center w-full max-w-xs">
            <div className="relative w-28 h-28 mb-5 flex items-center justify-center rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[var(--surface-sunken)]"
                  strokeWidth="6"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[var(--accent-primary)] transition-all duration-1000 ease-linear"
                  strokeWidth="6"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * progressPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-[var(--ink-primary)] font-mono tabular-nums tracking-tight leading-none">
                  {counter}
                </span>
                <span className="text-[10px] text-[var(--ink-muted)] font-semibold uppercase tracking-wider mt-1">
                  {t('dl.sec')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 text-sm font-bold text-[var(--ink-primary)] mb-1.5">
              <Loader2 className="w-3.5 h-3.5 animate-spin text-[var(--accent-primary)]" />
              <span>{t('dl.preparingStream', { type: mediaType.toUpperCase() })}</span>
            </div>

            <p className="text-xs text-[var(--ink-secondary)] max-w-xs leading-relaxed">
              {preparingDescription}
            </p>
          </div>
        ) : (
          <MotionFadeIn className="flex flex-col items-center justify-center w-full max-w-xs">
            <div className="w-12 h-12 rounded-xl bg-[var(--pastel-blue)] text-[var(--accent-cyan-text)] border border-[var(--pastel-blue-border)] flex items-center justify-center mb-4">
              {isDownloading ? (
                <Loader2 className="w-6 h-6 animate-spin text-[var(--accent-primary)]" />
              ) : (
                <CheckCircle2 className="w-6 h-6 text-[var(--accent-cyan-text)]" />
              )}
            </div>

            <h3 className="text-lg font-bold text-[var(--ink-primary)] tracking-tight">
              {isDownloading ? t('dl.savingFile') : t('dl.readyTitle')}
            </h3>

            <p className="text-xs text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
              {downloadError
                ? downloadError
                : isDownloading
                ? t('dl.downloadingMsg')
                : hasTriggeredDownload
                ? t('dl.startedMsg')
                : t('dl.clickMsg')}
            </p>

            <div className="mt-5 w-full flex flex-col gap-2">
              <button
                type="button"
                disabled={isDownloading || !downloadUrl}
                onClick={handleManualDownloadClick}
                className="w-full h-10 px-4 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] disabled:bg-[var(--state-disabled-bg)] disabled:text-[var(--state-disabled-ink)] disabled:cursor-not-allowed text-[var(--accent-contrast)] font-bold text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                {isDownloading ? (
                  <>
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-current shrink-0" />
                    <span>{t('dl.savingFile')}</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5 text-current shrink-0" />
                    <span>
                      {hasTriggeredDownload
                        ? t('dl.downloadAgain')
                        : mediaType === 'audio'
                        ? t('dl.btnAudio')
                        : mediaType === 'avatar'
                        ? t('dl.btnAvatar')
                        : t('dl.btnVideo')}
                    </span>
                  </>
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="w-full h-10 px-4 rounded-lg bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] border border-[var(--border-strong)] text-[var(--ink-primary)] font-semibold text-xs transition-colors cursor-pointer"
              >
                {t('dl.backToVideos')}
              </button>
            </div>
          </MotionFadeIn>
        )}

        <AdSlot placement="modal" className="w-full mt-4 mb-0 shrink-0" />
      </div>

      {/* Bottom File Metadata Bar */}
      <div className="w-full px-4 py-2.5 bg-[var(--surface-elevated)] border-t border-[var(--border-subtle)] text-[11px] text-[var(--ink-secondary)] flex items-center justify-between gap-2 shrink-0">
        <span
          data-no-translate="true"
          className="truncate font-mono text-[var(--ink-primary)] font-medium max-w-[230px] text-start"
        >
          {fileName || title || 'tiktok_clean_media'}
        </span>
        <span className="font-bold text-[var(--ink-primary)] shrink-0 text-[10px] bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] px-2.5 py-0.5 rounded-md">
          {t('dl.badge')}
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
          className="fixed inset-0 z-50 bg-zinc-950/60 backdrop-blur-xs flex items-center justify-center p-4"
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