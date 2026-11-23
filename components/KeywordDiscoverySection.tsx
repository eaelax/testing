'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Search,
  TrendingUp,
  Compass,
  ChevronRight,
  Layers,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useI18n } from '@/lib/i18n/context';
import {
  TRENDING_KEYWORDS,
  KEYWORD_CATEGORIES,
  type KeywordCategoryKey,
  type KeywordTrendKey,
  getKeywordCategoryLabel,
  getKeywordIntentLabel,
  getKeywordTrendLabel,
  getKeywordPopularityLabel,
  getLocalizedKeywordContent,
} from '@/lib/keywords-data';

const TREND_FILTERS: KeywordTrendKey[] = ['breakout', 'rising', 'steady'];

interface KeywordDiscoverySectionProps {
  variant?: 'home' | 'hub';
  maxItems?: number;
}

export default function KeywordDiscoverySection({
  variant = 'home',
  maxItems = 6,
}: KeywordDiscoverySectionProps) {
  const { lang, t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<
    KeywordCategoryKey | 'all'
  >('all');
  const [selectedTrend, setSelectedTrend] = useState<KeywordTrendKey | 'all'>(
    'all'
  );

  const filteredKeywords = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = TRENDING_KEYWORDS.filter((entry) => {
      const matchesCat =
        selectedCategory === 'all' || entry.category === selectedCategory;
      const matchesTrend =
        selectedTrend === 'all' || entry.trendDirection === selectedTrend;
      if (!matchesCat || !matchesTrend) return false;
      if (!q) return true;

      const localizedCat = getKeywordCategoryLabel(
        entry.category,
        lang
      ).toLowerCase();
      return (
        entry.keyword.toLowerCase().includes(q) ||
        entry.nicheTopic.toLowerCase().includes(q) ||
        localizedCat.includes(q) ||
        entry.slug.toLowerCase().includes(q)
      );
    });

    if (
      variant === 'home' &&
      !q &&
      selectedCategory === 'all' &&
      selectedTrend === 'all'
    ) {
      return list.slice(0, maxItems);
    }
    return list;
  }, [searchQuery, selectedCategory, selectedTrend, lang, variant, maxItems]);

  const trendBadgeClass = (trend: KeywordTrendKey): string => {
    if (trend === 'breakout') {
      return 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border-[var(--accent-primary)]/30';
    }
    if (trend === 'rising') {
      return 'bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border-[var(--accent-cyan)]/40';
    }
    return 'bg-[var(--surface-sunken)] text-[var(--ink-secondary)] border-[var(--border-subtle)]';
  };

  return (
    <div id="keyword-trends" className="w-full scroll-mt-20">
      {variant === 'hub' && (
        <Breadcrumbs
          items={[
            {
              label: 'Keyword Trends',
              translationKey: 'breadcrumb.keywords',
            },
          ]}
        />
      )}

      {/* Header */}
      <div
        className={
          variant === 'hub'
            ? 'text-center max-w-2xl mx-auto mb-7'
            : 'flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6'
        }
      >
        <div>
          {variant === 'hub' ? (
            <h1 className="text-[length:var(--h1-size)] font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
              {t('page.keywords.title')}
            </h1>
          ) : (
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
              {t('page.keywords.title')}
            </h2>
          )}
          <p className="text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            {t('page.keywords.subtitle')}
          </p>
        </div>

        {variant === 'home' && (
          <Link
            href="/keywords"
            className="h-9 px-4 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-strong)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
          >
            <span>{t('page.keywords.viewAll')}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-secondary)] rtl:rotate-180" />
          </Link>
        )}
      </div>

      {/* Filter & 6-Category Discovery Bar */}
      <div className="p-3.5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] mb-6 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[var(--ink-muted)] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('page.keywords.searchPlaceholder')}
              aria-label={t('page.keywords.searchPlaceholder')}
              className="w-full h-9 ps-9 pe-3 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15"
            />
          </div>

          <select
            aria-label={t('page.keywords.trendLabel')}
            value={selectedTrend}
            onChange={(e) =>
              setSelectedTrend(e.target.value as KeywordTrendKey | 'all')
            }
            className="h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] text-xs font-semibold text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
          >
            <option value="all">{t('page.keywords.trendLabel')}</option>
            {TREND_FILTERS.map((tr) => (
              <option key={tr} value={tr}>
                {getKeywordTrendLabel(tr, lang)}
              </option>
            ))}
          </select>
        </div>

        {/* 6 Keyword Category Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setSelectedCategory('all')}
            className={`h-8 px-3 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
              selectedCategory === 'all'
                ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                : 'bg-[var(--surface-elevated)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:border-[var(--border-strong)]'
            }`}
          >
            {t('page.keywords.allGroups')}
          </button>
          {KEYWORD_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`h-8 px-3 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
                selectedCategory === cat
                  ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-[var(--accent-contrast)]'
                  : 'bg-[var(--surface-elevated)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:border-[var(--accent-primary)]'
              }`}
            >
              {getKeywordCategoryLabel(cat, lang)}
            </button>
          ))}
        </div>
      </div>

      {/* Keyword Cards Grid */}
      {filteredKeywords.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredKeywords.map((entry) => {
            const localized = getLocalizedKeywordContent(entry, lang);
            return (
              <Link
                key={entry.slug}
                href={`/keywords/${entry.slug}`}
                className="group p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-[var(--shadow-card)] transition-colors flex flex-col justify-between gap-3.5"
              >
                <div className="space-y-2.5">
                  <div className="flex items-start justify-between gap-2">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--pastel-lavender)] border border-[var(--pastel-lavender-border)] text-[11px] font-bold text-[var(--ink-primary)]">
                      <Layers className="w-3 h-3" />
                      <span>{getKeywordCategoryLabel(entry.category, lang)}</span>
                    </span>

                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold border shrink-0 ${trendBadgeClass(
                        entry.trendDirection
                      )}`}
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span>
                        {getKeywordTrendLabel(entry.trendDirection, lang)}
                      </span>
                    </span>
                  </div>

                  <h3
                    data-no-translate="true"
                    className="text-sm sm:text-base font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors leading-snug"
                  >
                    {entry.keyword}
                  </h3>

                  <p className="text-xs text-[var(--ink-secondary)] line-clamp-2 leading-relaxed">
                    {localized.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--surface-canvas)] border border-[var(--border-subtle)] font-semibold text-[var(--ink-secondary)]">
                      <Compass className="w-3 h-3 text-[var(--accent-cyan-text)]" />
                      <span>
                        {getKeywordIntentLabel(entry.searchIntent, lang)}
                      </span>
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] font-semibold text-[var(--accent-cyan-text)]">
                      {getKeywordPopularityLabel(entry.popularityTier, lang)}
                    </span>
                  </div>

                  <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                    <span
                      data-no-translate="true"
                      className="text-[11px] font-medium text-[var(--ink-muted)] truncate"
                    >
                      {entry.nicheTopic}
                    </span>
                    <span className="inline-flex items-center gap-1 shrink-0">
                      <span>{t('page.keywords.openGuide')}</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="p-8 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-center">
          <p className="text-sm font-bold text-[var(--ink-primary)]">
            {t('page.keywords.emptyTitle')}
          </p>
          <p className="text-xs text-[var(--ink-muted)] mt-1">
            {t('page.keywords.emptySubtitle')}
          </p>
        </div>
      )}

      <p className="text-[11px] text-[var(--ink-muted)] mt-4 text-center sm:text-start">
        {t('page.keywords.methodologyNote')}
      </p>
    </div>
  );
}