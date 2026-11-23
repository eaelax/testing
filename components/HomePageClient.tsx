'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import HowToUseSteps from '@/components/HowToUseSteps';
import TrendingSongsSection from '@/components/TrendingSongsSection';
import KeywordDiscoverySection from '@/components/KeywordDiscoverySection';
import ExploreNichesSection from '@/components/ExploreNichesSection';
import CreatorToolsSection from '@/components/CreatorToolsSection';
import FaqSection from '@/components/FaqSection';
import AdSlot from '@/components/AdSlot';
import { MotionFadeIn } from '@/components/MotionPrimitives';
import { useI18n } from '@/lib/i18n/context';
import { CREATORS } from '@/lib/creators-data';

const CATEGORY_SLUG_TO_KEY: Record<string, string> = {
  comedy: 'niches.c1',
  'food-cooking': 'niches.c2',
  'tech-ai': 'niches.c3',
  gaming: 'niches.c4',
  'fitness-sports': 'niches.c5',
  'dance-music': 'niches.c6',
};

export default function HomePageClient() {
  const { t, translateText } = useI18n();
  const featuredCreators = CREATORS.slice(0, 6);

  return (
    <div className="w-full flex flex-col">
      {/* Band 1: How to Use */}
      <section
        id="how-to-use"
        className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-12 sm:py-16 scroll-mt-16"
      >
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                {t('steps.title')}
              </h2>
              <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                {t('steps.subtitle')}
              </p>
            </div>
            <Link
              href="/how-to-use-tiktok-profile-viewer"
              className="h-9 px-4 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
            >
              <span>{t('steps.fullGuide')}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-secondary)] rtl:rotate-180" />
            </Link>
          </div>

          <HowToUseSteps />
        </MotionFadeIn>
      </section>

      {/* Band 2: Trending TikTok Songs */}
      <section className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-12 sm:py-16">
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <TrendingSongsSection variant="home" maxItems={6} />
        </MotionFadeIn>
      </section>

      {/* Band 3: Trending Keywords & Search Trends */}
      <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-12 sm:py-16">
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <KeywordDiscoverySection variant="home" maxItems={6} />
        </MotionFadeIn>
      </section>

      {/* Band 4: Explore Niches */}
      <section className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-12 sm:py-16">
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <ExploreNichesSection />
        </MotionFadeIn>
      </section>

      {/* Band 5: Trending Creators */}
      <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-12 sm:py-16">
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                {t('home.trendingTitle')}
              </h2>
              <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                {t('home.trendingSubtitle')}
              </p>
            </div>
            <Link
              href="/creators"
              className="h-9 px-4 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
            >
              <span>{t('home.viewAllCreators')}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-secondary)] rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredCreators.map((creator) => {
              const catKey = CATEGORY_SLUG_TO_KEY[creator.categorySlug];
              const categoryLabel = catKey
                ? t(catKey)
                : translateText(creator.category);

              return (
                <Link
                  key={creator.username}
                  href={`/profile/${creator.username}`}
                  className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] shadow-[var(--shadow-card)] transition-colors flex items-center gap-3.5"
                >
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden bg-[var(--surface-sunken)] shrink-0 border border-[var(--border-subtle)]">
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
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3
                      data-no-translate="true"
                      className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate"
                    >
                      {creator.displayName}
                    </h3>
                    <p
                      data-no-translate="true"
                      className="text-xs font-mono font-medium text-[var(--ink-muted)] truncate"
                    >
                      @{creator.username}
                    </p>
                    <div className="flex items-center gap-1.5 text-xs text-[var(--ink-secondary)] mt-1">
                      <span className="font-semibold text-[var(--ink-primary)] tabular-nums">
                        <span data-no-translate="true">{creator.followers}</span>{' '}
                        <span>{t('home.followersShort')}</span>
                      </span>
                      <span className="text-[var(--border-strong)]">•</span>
                      <span className="truncate text-[var(--ink-muted)]">
                        {categoryLabel}
                      </span>
                    </div>
                  </div>

                  <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] transition-colors shrink-0 rtl:rotate-180" />
                </Link>
              );
            })}
          </div>
        </MotionFadeIn>
      </section>

      {/* Band 6: About Tik Profiles Viewer */}
      <section
        id="about"
        className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-12 sm:py-16 scroll-mt-16"
      >
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                {t('home.aboutTitle')}
              </h2>
              <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                {t('home.aboutSubtitle')}
              </p>
            </div>
            <Link
              href="/about-tiktok-profile-viewer"
              className="h-9 px-4 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-strong)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
            >
              <span>{t('home.readMore')}</span>
              <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-secondary)] rtl:rotate-180" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-[var(--pastel-blue)]/55 border border-[var(--pastel-blue-border)] flex flex-col gap-2">
              <h3 className="text-base font-bold text-[var(--ink-primary)]">
                {t('home.fastPlayerTitle')}
              </h3>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                {t('home.fastPlayerDesc')}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--pastel-pink)]/55 border border-[var(--pastel-pink-border)] flex flex-col gap-2">
              <h3 className="text-base font-bold text-[var(--ink-primary)]">
                {t('home.freeTitle')}
              </h3>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                {t('home.freeDesc')}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[var(--pastel-lavender)]/55 border border-[var(--pastel-lavender-border)] flex flex-col gap-2">
              <h3 className="text-base font-bold text-[var(--ink-primary)]">
                {t('home.privateTitle')}
              </h3>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                {t('home.privateDesc')}
              </p>
            </div>
          </div>
        </MotionFadeIn>
      </section>

      {/* Band 7: Free Creator Tools */}
      <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-12 sm:py-16">
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
          <CreatorToolsSection />
        </MotionFadeIn>
      </section>

      {/* Band 8: AdSlot & FAQ */}
      <section className="w-full bg-[var(--surface-elevated)] py-12 sm:py-16">
        <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
          <AdSlot placement="footer" />
          <FaqSection />
        </MotionFadeIn>
      </section>
    </div>
  );
}