'use client';

import Link from 'next/link';
import {
  Music,
  TrendingUp,
  Clock,
  Activity,
  ChevronRight,
  Sparkles,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { useI18n } from '@/lib/i18n/context';
import type { CreatorData } from '@/lib/creators-data';
import {
  type TikTokSongData,
  getLocalizedSongGenre,
  getLocalizedSongMomentum,
  getLocalizedSongUsageTier,
  getLocalizedSongSummary,
  getSongDetailUiLabels,
} from '@/lib/songs-data';

interface SongDetailClientProps {
  song: TikTokSongData;
  relatedSongs: TikTokSongData[];
  matchingCreators: CreatorData[];
}

export default function SongDetailClient({
  song,
  relatedSongs,
  matchingCreators,
}: SongDetailClientProps) {
  const { lang, t } = useI18n();
  const ui = getSongDetailUiLabels(lang);
  const localized = getLocalizedSongSummary(song, lang);

  return (
    <div className="w-full flex flex-col">
      {/* Header Band */}
      <section className="w-full hero-studio-backdrop border-b border-[var(--border-subtle)] -mt-20 pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              {
                label: 'Trending Songs',
                href: '/trending-songs',
                translationKey: 'breadcrumb.songs',
              },
              { label: song.title },
            ]}
          />

          <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--pastel-pink)] border border-[var(--pastel-pink-border)] text-[var(--accent-primary-text)] text-xs font-bold">
                  <Music className="w-3.5 h-3.5" />
                  <span>{getLocalizedSongGenre(song.genre, lang)}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/40 text-[var(--accent-cyan-text)] text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{getLocalizedSongMomentum(song.momentum, lang)}</span>
                </span>
              </div>

              <h1
                data-no-translate="true"
                className="text-[length:var(--h1-size)] font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight"
              >
                {song.title}
              </h1>

              <p className="text-sm text-[var(--ink-secondary)] leading-relaxed">
                {t('page.songs.artistLabel')}:{' '}
                <strong
                  data-no-translate="true"
                  className="text-[var(--ink-primary)]"
                >
                  {song.artist}
                </strong>
              </p>

              <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                {localized.summary}
              </p>
            </div>

            <Link
              href="/tiktok-mp3-downloader"
              className="h-10 px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs font-bold inline-flex items-center gap-2 transition-colors shrink-0 w-fit"
            >
              <Music className="w-4 h-4" />
              <span>{ui.openMp3Tool}</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Specs & Key Facts */}
      <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight">
            {ui.keyFactsHeading}
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 tabular-nums">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1">
                {t('page.songs.usageLabel')}
              </div>
              <div className="text-sm font-bold text-[var(--ink-primary)]">
                {getLocalizedSongUsageTier(song.usageTier, lang)}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{t('page.songs.durationLabel')}</span>
              </div>
              <div className="text-sm font-bold font-mono text-[var(--ink-primary)]">
                {song.durationSec}s
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5" />
                <span>{ui.bpmLabel}</span>
              </div>
              <div className="text-sm font-bold font-mono text-[var(--ink-primary)]">
                {song.bpm} BPM
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1">
                {ui.soundTypeLabel}
              </div>
              <div className="text-sm font-bold text-[var(--ink-primary)]">
                {song.soundType === 'original'
                  ? ui.soundTypeOriginal
                  : ui.soundTypeArtist}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent-primary-text)]" />
                <span>{ui.useCaseHeading}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                {localized.useCaseGuide}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                <span>{ui.editTipHeading}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                {localized.editTip}
              </p>
            </div>
          </div>

          {/* Matching Hashtags */}
          <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <span className="text-xs font-bold text-[var(--ink-primary)]">
              {ui.hashtagsHeading}
            </span>
            <div className="flex flex-wrap gap-2">
              {song.hashtags.map((tag) => (
                <span
                  key={tag}
                  data-no-translate="true"
                  className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] text-[var(--accent-cyan-text)]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Viewer for Suggested Creator / Sound Extraction */}
      <section className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-10">
        <TikTokProfileViewer
          initialUsername={song.suggestedCreators[0] || ''}
          autoSearch={false}
          heroVariant="default"
          title={ui.tryViewerTitle}
          subtitle={ui.tryViewerSubtitle}
        />
      </section>

      {/* Matching Creators & Related Sounds */}
      <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          {matchingCreators.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight mb-4">
                {ui.creatorsHeading}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {matchingCreators.map((creator) => (
                  <Link
                    key={creator.username}
                    href={`/profile/${creator.username}`}
                    className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-[var(--shadow-card)] transition-colors flex items-center gap-3.5"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={
                        creator.avatar ||
                        `/api/avatar?username=${encodeURIComponent(
                          creator.username
                        )}`
                      }
                      alt={creator.displayName}
                      referrerPolicy="no-referrer"
                      className="w-11 h-11 rounded-xl object-cover border border-[var(--border-subtle)] bg-[var(--surface-sunken)] shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div
                        data-no-translate="true"
                        className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] truncate"
                      >
                        {creator.displayName}
                      </div>
                      <div
                        data-no-translate="true"
                        className="text-xs font-mono text-[var(--ink-muted)] truncate"
                      >
                        @{creator.username}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] rtl:rotate-180 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedSongs.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight mb-4">
                {ui.relatedHeading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedSongs.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/songs/${rel.slug}`}
                    className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-[var(--shadow-card)] transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div
                        data-no-translate="true"
                        className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] truncate"
                      >
                        {rel.title}
                      </div>
                      <div
                        data-no-translate="true"
                        className="text-xs text-[var(--ink-muted)] truncate mt-0.5"
                      >
                        {rel.artist}
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] rtl:rotate-180 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* FAQs */}
      <section className="w-full bg-[var(--surface-elevated)] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight mb-4">
            {ui.faqHeading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {localized.faqs.map((faq, i) => (
              <div
                key={i}
                className="p-5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] space-y-1.5"
              >
                <h3 className="text-sm font-bold text-[var(--ink-primary)]">
                  {faq.question}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          <p className="text-[11px] text-[var(--ink-muted)] mt-5">
            {t('page.songs.methodologyNote')}
          </p>
        </div>
      </section>
    </div>
  );
}