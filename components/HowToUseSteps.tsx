'use client';

import { Play } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export default function HowToUseSteps() {
  const { t } = useI18n();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-2xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between gap-5 h-full">
        <div className="bg-[var(--pastel-blue)]/55 rounded-xl border border-[var(--pastel-blue-border)] p-4 flex flex-col justify-between gap-3 flex-1 min-h-[204px] select-none">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[var(--pastel-blue-border)]">
            <span className="text-xs font-bold text-[var(--ink-primary)]">
              {t('steps.lookupProfile')}
            </span>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] shrink-0">
              {t('steps.step01')}
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            <div className="p-1.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-1.5">
              <span className="text-[var(--ink-muted)] text-xs font-mono font-bold ps-2">
                @
              </span>
              <span
                data-no-translate="true"
                className="text-xs font-semibold text-[var(--ink-primary)] flex-1 truncate"
              >
                khaby.lame
              </span>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-primary)] text-[var(--accent-contrast)] font-bold text-[11px] shrink-0">
                {t('search.btn')}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-full bg-[var(--pastel-lavender)] text-[var(--ink-primary)] border border-[var(--pastel-lavender-border)] flex items-center justify-center text-[11px] font-bold shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p
                  data-no-translate="true"
                  className="text-xs font-bold text-[var(--ink-primary)] truncate"
                >
                  Khaby Lame
                </p>
                <p className="text-[11px] text-[var(--ink-muted)]">
                  {t('home.followersLabel', { count: '162.8M' })}
                </p>
              </div>
              <span className="text-[10px] font-bold text-[var(--accent-cyan-text)] shrink-0">
                {t('profile.verified')}
              </span>
            </div>
          </div>

          <div className="pt-2.5 border-t border-[var(--pastel-blue-border)] flex items-center justify-between gap-2 text-[11px] text-[var(--ink-secondary)]">
            <span>{t('steps.publicLookup')}</span>
            <span className="font-bold text-[var(--ink-primary)] shrink-0">
              {t('steps.noLogin')}
            </span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] text-[var(--ink-primary)] text-xs font-bold tabular-nums shrink-0">
              1
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] tracking-tight">
              {t('steps.s1Title')}
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            {t('steps.s1Desc')}
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-2xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between gap-5 h-full">
        <div className="bg-[var(--pastel-lavender)]/55 rounded-xl border border-[var(--pastel-lavender-border)] p-4 flex flex-col justify-between gap-3 flex-1 min-h-[204px] select-none">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[var(--pastel-lavender-border)]">
            <span className="text-xs font-bold text-[var(--ink-primary)]">
              {t('steps.selectVideo')}
            </span>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] shrink-0">
              {t('steps.step02')}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="min-h-[82px] rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-2 flex flex-col justify-between text-[var(--ink-secondary)]">
              <span className="text-[10px] font-mono font-semibold text-[var(--ink-muted)]">
                0:24
              </span>
              <span className="text-[11px] font-mono font-bold text-[var(--ink-primary)]">
                1.2M
              </span>
            </div>

            <div className="min-h-[82px] rounded-lg bg-[var(--surface-elevated)] border border-[var(--accent-primary)]/50 p-2 flex flex-col justify-between text-[var(--accent-primary-text)]">
              <div className="flex items-center justify-between gap-1">
                <span className="text-[10px] font-mono font-semibold">0:45</span>
                <span className="text-[9px] font-bold uppercase px-1.5 rounded bg-[var(--accent-dark)] text-[var(--accent-contrast)]">
                  {t('modal.hdBadge')}
                </span>
              </div>
              <div className="w-6 h-6 rounded-full bg-[var(--accent-primary)] text-white mx-auto flex items-center justify-center">
                <Play className="w-2.5 h-2.5 fill-white translate-x-0.5" />
              </div>
              <span className="text-[10px] font-mono font-bold text-center text-[var(--ink-primary)]">
                3.8M
              </span>
            </div>

            <div className="min-h-[82px] rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-2 flex flex-col justify-between text-[var(--ink-secondary)]">
              <span className="text-[10px] font-mono font-semibold text-[var(--ink-muted)]">
                0:15
              </span>
              <span className="text-[11px] font-mono font-bold text-[var(--ink-primary)]">
                850K
              </span>
            </div>
          </div>

          <div className="pt-2.5 border-t border-[var(--pastel-lavender-border)] flex items-center justify-between gap-2 text-[11px] text-[var(--ink-secondary)]">
            <span>{t('steps.instantPlayer')}</span>
            <span className="font-bold text-[var(--ink-primary)] shrink-0">
              {t('steps.videosCount')}
            </span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--pastel-lavender)] border border-[var(--pastel-lavender-border)] text-[var(--ink-primary)] text-xs font-bold tabular-nums shrink-0">
              2
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] tracking-tight">
              {t('steps.s2Title')}
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            {t('steps.s2Desc')}
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-2xl p-5 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col justify-between gap-5 h-full">
        <div className="bg-[var(--pastel-pink)]/55 rounded-xl border border-[var(--pastel-pink-border)] p-4 flex flex-col justify-between gap-3 flex-1 min-h-[204px] select-none">
          <div className="flex items-center justify-between gap-2 pb-2.5 border-b border-[var(--pastel-pink-border)]">
            <span className="text-xs font-bold text-[var(--ink-primary)]">
              {t('steps.exportMedia')}
            </span>
            <span className="text-[11px] font-mono font-semibold px-2 py-0.5 rounded-md bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] shrink-0">
              {t('steps.step03')}
            </span>
          </div>

          <div className="flex flex-col gap-2">
            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-bold text-[var(--ink-primary)] truncate">
                  {t('steps.mp4Title')}
                </p>
                <p className="text-[11px] text-[var(--accent-cyan-text)] font-medium">
                  {t('steps.watermarkFree')}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-bold text-[11px] shrink-0">
                {t('steps.save')}
              </span>
            </div>

            <div className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex items-center justify-between gap-2">
              <div className="min-w-0">
                <p className="text-xs font-bold text-[var(--ink-primary)] truncate">
                  {t('steps.audioTitle')}
                </p>
                <p className="text-[11px] text-[var(--ink-muted)]">
                  {t('steps.cleanMp3')}
                </p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-[var(--ink-primary)] font-bold text-[11px] shrink-0">
                MP3
              </span>
            </div>
          </div>

          <div className="pt-2.5 border-t border-[var(--pastel-pink-border)] flex items-center justify-between gap-2 text-[11px] text-[var(--ink-secondary)]">
            <span>{t('steps.directSave')}</span>
            <span className="font-bold text-[var(--ink-primary)] shrink-0">
              {t('steps.ready')}
            </span>
          </div>
        </div>

        <div className="text-start">
          <div className="flex items-center gap-2.5 mb-1.5">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[var(--pastel-pink)] border border-[var(--pastel-pink-border)] text-[var(--ink-primary)] text-xs font-bold tabular-nums shrink-0">
              3
            </span>
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] tracking-tight">
              {t('steps.s3Title')}
            </h3>
          </div>
          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
            {t('steps.s3Desc')}
          </p>
        </div>
      </div>
    </div>
  );
}