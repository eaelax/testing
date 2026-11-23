'use client';

import Link from 'next/link';
import {
  TrendingUp,
  Compass,
  Layers,
  CheckCircle2,
  ChevronRight,
  Music,
  ArrowUpRight,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { useI18n } from '@/lib/i18n/context';
import type { CreatorData } from '@/lib/creators-data';
import {
  type TikTokSongData,
  getLocalizedSongGenre,
} from '@/lib/songs-data';
import {
  type KeywordEntry,
  getKeywordCategoryLabel,
  getKeywordIntentLabel,
  getKeywordTrendLabel,
  getKeywordPopularityLabel,
  getKeywordDetailUiLabels,
  getLocalizedKeywordContent,
} from '@/lib/keywords-data';

interface KeywordDetailClientProps {
  entry: KeywordEntry;
  relatedKeywords: KeywordEntry[];
  matchingCreators: CreatorData[];
  matchingSongs: TikTokSongData[];
}

export default function KeywordDetailClient({
  entry,
  relatedKeywords,
  matchingCreators,
  matchingSongs,
}: KeywordDetailClientProps) {
  const { lang, t } = useI18n();
  const ui = getKeywordDetailUiLabels(lang);
  const localized = getLocalizedKeywordContent(entry, lang);

  return (
    <div className="w-full flex flex-col">
      {/* Header Band */}
      <section className="w-full hero-studio-backdrop border-b border-[var(--border-subtle)] -mt-20 pt-28 pb-10 sm:pt-32 sm:pb-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              {
                label: 'Keyword Trends',
                href: '/keywords',
                translationKey: 'breadcrumb.keywords',
              },
              { label: entry.keyword },
            ]}
          />

          <div className="mt-3 flex flex-col md:flex-row md:items-end justify-between gap-5">
            <div className="space-y-2.5 max-w-3xl">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--pastel-lavender)] border border-[var(--pastel-lavender-border)] text-[var(--ink-primary)] text-xs font-bold">
                  <Layers className="w-3.5 h-3.5" />
                  <span>{getKeywordCategoryLabel(entry.category, lang)}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/40 text-[var(--accent-cyan-text)] text-xs font-bold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{getKeywordTrendLabel(entry.trendDirection, lang)}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] text-xs font-semibold">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{getKeywordIntentLabel(entry.searchIntent, lang)}</span>
                </span>
              </div>

              <h1
                data-no-translate="true"
                className="text-[length:var(--h1-size)] font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight"
              >
                {entry.keyword}
              </h1>

              <p className="text-sm sm:text-base text-[var(--ink-secondary)] leading-relaxed">
                {localized.summary}
              </p>
            </div>

            <Link
              href={entry.recommendedToolHref}
              className="h-10 px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs font-bold inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
            >
              <span>{ui.openMatchingTool}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Structured Key Facts & Practical Angles */}
      <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight">
            {ui.overviewHeading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1">
                {ui.popularityLabel}
              </div>
              <div className="text-sm font-bold text-[var(--ink-primary)]">
                {getKeywordPopularityLabel(entry.popularityTier, lang)}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1">
                {ui.nicheLabel}
              </div>
              <div
                data-no-translate="true"
                className="text-sm font-bold text-[var(--ink-primary)]"
              >
                {entry.nicheTopic}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <div className="text-[11px] font-semibold text-[var(--ink-muted)] mb-1">
                {ui.lastReviewedLabel}
              </div>
              <div
                data-no-translate="true"
                className="text-sm font-bold text-[var(--ink-primary)]"
              >
                {entry.lastReviewed}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-5 p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                {ui.whyHeading}
              </h3>
              <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
                {localized.whyItMatters}
              </p>
            </div>

            <div className="lg:col-span-7 p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-3">
              <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                {ui.anglesHeading}
              </h3>
              <ul className="space-y-2.5">
                {localized.contentAngles.map((angle, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                    <span>{angle}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Live Viewer Workbench */}
      <section className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-10">
        <TikTokProfileViewer
          initialUsername={entry.defaultSearchHandle}
          autoSearch={false}
          heroVariant="default"
          title={ui.viewerHeading}
          subtitle={ui.viewerSubtitle}
        />
      </section>

      {/* Internal Linking Mesh: Creators, Songs, and Related Keywords */}
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

          {matchingSongs.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight mb-4">
                {ui.songsHeading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {matchingSongs.map((song) => (
                  <Link
                    key={song.slug}
                    href={`/songs/${song.slug}`}
                    className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-[var(--shadow-card)] transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-[var(--pastel-pink)] border border-[var(--pastel-pink-border)] text-[var(--accent-primary-text)] flex items-center justify-center shrink-0">
                        <Music className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <div
                          data-no-translate="true"
                          className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] truncate"
                        >
                          {song.title}
                        </div>
                        <div className="text-xs text-[var(--ink-muted)] truncate">
                          <span data-no-translate="true">{song.artist}</span>
                          <span> · </span>
                          <span>{getLocalizedSongGenre(song.genre, lang)}</span>
                        </div>
                      </div>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] rtl:rotate-180 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          {relatedKeywords.length > 0 && (
            <div>
              <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] tracking-tight mb-4">
                {ui.relatedHeading}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {relatedKeywords.map((rel) => (
                  <Link
                    key={rel.slug}
                    href={`/keywords/${rel.slug}`}
                    className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-[var(--shadow-card)] transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <div
                        data-no-translate="true"
                        className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] truncate"
                      >
                        {rel.keyword}
                      </div>
                      <div className="text-xs text-[var(--ink-muted)] mt-0.5 truncate">
                        {getKeywordCategoryLabel(rel.category, lang)}
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
            {localized.faqs.map((faq, idx) => (
              <div
                key={idx}
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
            {t('page.keywords.methodologyNote')}
          </p>
        </div>
      </section>
    </div>
  );
}