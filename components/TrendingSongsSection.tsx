'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Music,
  Search,
  TrendingUp,
  Clock,
  ChevronRight,
} from 'lucide-react';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useI18n } from '@/lib/i18n/context';
import {
  TRENDING_SONGS,
  type SongGenreKey,
  type SongMomentumKey,
  getLocalizedSongGenre,
  getLocalizedSongMomentum,
  getLocalizedSongUsageTier,
  getLocalizedSongSummary,
  getSongDetailUiLabels,
} from '@/lib/songs-data';

const GENRE_FILTERS: SongGenreKey[] = [
  'pop',
  'dance',
  'hiphop',
  'chill',
  'cinematic',
  'comedy',
];

const MOMENTUM_FILTERS: SongMomentumKey[] = [
  'breakout',
  'rising',
  'steady',
  'evergreen',
];

interface TrendingSongsSectionProps {
  variant?: 'home' | 'hub';
  maxItems?: number;
}

export default function TrendingSongsSection({
  variant = 'home',
  maxItems = 6,
}: TrendingSongsSectionProps) {
  const { lang, t } = useI18n();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedGenre, setSelectedGenre] = useState<SongGenreKey | 'all'>(
    'all'
  );
  const [selectedMomentum, setSelectedMomentum] = useState<
    SongMomentumKey | 'all'
  >('all');

  const ui = getSongDetailUiLabels(lang);

  const filteredSongs = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    const list = TRENDING_SONGS.filter((song) => {
      const matchesGenre =
        selectedGenre === 'all' || song.genre === selectedGenre;
      const matchesMomentum =
        selectedMomentum === 'all' || song.momentum === selectedMomentum;
      if (!matchesGenre || !matchesMomentum) return false;
      if (!q) return true;

      const localizedGenre = getLocalizedSongGenre(
        song.genre,
        lang
      ).toLowerCase();
      return (
        song.title.toLowerCase().includes(q) ||
        song.artist.toLowerCase().includes(q) ||
        localizedGenre.includes(q) ||
        song.hashtags.some((tag) => tag.toLowerCase().includes(q))
      );
    });

    if (variant === 'home' && !q && selectedGenre === 'all' && selectedMomentum === 'all') {
      return list.slice(0, maxItems);
    }
    return list;
  }, [searchQuery, selectedGenre, selectedMomentum, lang, variant, maxItems]);

  const momentumBadgeClass = (momentum: SongMomentumKey): string => {
    if (momentum === 'breakout') {
      return 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border-[var(--accent-primary)]/30';
    }
    if (momentum === 'rising') {
      return 'bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border-[var(--accent-cyan)]/40';
    }
    return 'bg-[var(--surface-sunken)] text-[var(--ink-secondary)] border-[var(--border-subtle)]';
  };

  return (
    <div id="trending-songs" className="w-full scroll-mt-20">
      {variant === 'hub' && (
        <Breadcrumbs
          items={[
            {
              label: 'Trending Songs',
              translationKey: 'breadcrumb.songs',
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
              {t('page.songs.title')}
            </h1>
          ) : (
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
              {t('page.songs.title')}
            </h2>
          )}
          <p className="text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            {t('page.songs.subtitle')}
          </p>
        </div>

        {variant === 'home' && (
          <Link
            href="/trending-songs"
            className="h-9 px-4 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
          >
            <span>{t('page.songs.viewAll')}</span>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-secondary)] rtl:rotate-180" />
          </Link>
        )}
      </div>

      {/* Search & Filter Bar */}
      <div className="p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] mb-6 flex flex-col gap-3">
        <div className="flex flex-col md:flex-row items-stretch md:items-center gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-[var(--ink-muted)] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t('page.songs.searchPlaceholder')}
              aria-label={t('page.songs.searchPlaceholder')}
              className="w-full h-9 ps-9 pe-3 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-strong)] text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15"
            />
          </div>

          <select
            aria-label={t('page.songs.allTiers')}
            value={selectedMomentum}
            onChange={(e) =>
              setSelectedMomentum(e.target.value as SongMomentumKey | 'all')
            }
            className="h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-xs font-semibold text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
          >
            <option value="all">{t('page.songs.allTiers')}</option>
            {MOMENTUM_FILTERS.map((m) => (
              <option key={m} value={m}>
                {getLocalizedSongMomentum(m, lang)}
              </option>
            ))}
          </select>
        </div>

        {/* Genre Pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
          <button
            type="button"
            onClick={() => setSelectedGenre('all')}
            className={`h-8 px-3 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
              selectedGenre === 'all'
                ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:border-[var(--border-strong)]'
            }`}
          >
            {t('page.songs.allGenres')}
          </button>
          {GENRE_FILTERS.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setSelectedGenre(genre)}
              className={`h-8 px-3 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
                selectedGenre === genre
                  ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-[var(--accent-contrast)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:border-[var(--accent-primary)]'
              }`}
            >
              {getLocalizedSongGenre(genre, lang)}
            </button>
          ))}
        </div>
      </div>

      {/* Songs Grid */}
      {filteredSongs.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSongs.map((song) => {
            const localized = getLocalizedSongSummary(song, lang);
            return (
              <Link
                key={song.slug}
                href={`/songs/${song.slug}`}
                className="group p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] shadow-[var(--shadow-card)] transition-colors flex flex-col justify-between gap-3.5"
              >
                <div className="space-y-3">
                  <div className="flex items-start justify-between gap-2.5">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-[var(--pastel-pink)] text-[var(--accent-primary-text)] border border-[var(--pastel-pink-border)] flex items-center justify-center shrink-0">
                        <Music className="w-4 h-4" />
                      </div>
                      <div className="min-w-0">
                        <h3
                          data-no-translate="true"
                          className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate"
                        >
                          {song.title}
                        </h3>
                        <p
                          data-no-translate="true"
                          className="text-xs text-[var(--ink-muted)] font-medium truncate"
                        >
                          {song.artist}
                        </p>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-bold border shrink-0 ${momentumBadgeClass(
                        song.momentum
                      )}`}
                    >
                      <TrendingUp className="w-3 h-3" />
                      <span>{getLocalizedSongMomentum(song.momentum, lang)}</span>
                    </span>
                  </div>

                  <p className="text-xs text-[var(--ink-secondary)] line-clamp-2 leading-relaxed">
                    {localized.summary}
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-1.5 text-[11px]">
                    <span className="px-2 py-0.5 rounded-md bg-[var(--surface-canvas)] border border-[var(--border-subtle)] font-semibold text-[var(--ink-primary)]">
                      {getLocalizedSongGenre(song.genre, lang)}
                    </span>
                    <span className="px-2 py-0.5 rounded-md bg-[var(--pastel-blue)] border border-[var(--pastel-blue-border)] font-semibold text-[var(--accent-cyan-text)]">
                      {getLocalizedSongUsageTier(song.usageTier, lang)}
                    </span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-[var(--surface-canvas)] border border-[var(--border-subtle)] font-mono tabular-nums text-[var(--ink-secondary)]">
                      <Clock className="w-3 h-3" />
                      <span>{song.durationSec}s</span>
                    </span>
                  </div>

                  <div className="pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                    <span>
                      {song.soundType === 'original'
                        ? ui.soundTypeOriginal
                        : ui.soundTypeArtist}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <span>{t('page.songs.openPage')}</span>
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
            {t('page.songs.emptyTitle')}
          </p>
          <p className="text-xs text-[var(--ink-muted)] mt-1">
            {t('page.songs.emptySubtitle')}
          </p>
        </div>
      )}

      <p className="text-[11px] text-[var(--ink-muted)] mt-4 text-center sm:text-start">
        {t('page.songs.methodologyNote')}
      </p>
    </div>
  );
}