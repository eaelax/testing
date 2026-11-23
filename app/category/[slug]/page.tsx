'use client';

import { use } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import {
  getCategoryBySlug,
  CATEGORIES,
  getCreatorsByCategory,
} from '@/lib/creators-data';
import { useI18n } from '@/lib/i18n/context';
import {
  getLocalizedCategory,
  getLocalizedCreator,
} from '@/lib/i18n/creators-i18n';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default function CategoryDetailPage({ params }: Props) {
  const { slug } = use(params);
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const { lang, t } = useI18n();
  const loc = getLocalizedCategory(category, lang);
  const creatorsInNiche = getCreatorsByCategory(category.slug);
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: loc.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${loc.title} - Tik Profiles Viewer`}</title>
      <meta name="description" content={loc.seoDescription} />
      <link
        rel="canonical"
        href={`https://tikprofilesviewer.com/category/${slug}`}
      />

      <Navbar />

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs
            items={[
              {
                label: 'Categories',
                href: '/categories',
                translationKey: 'breadcrumb.categories',
              },
              { label: loc.name },
            ]}
          />
        </div>
      </div>

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
          heroVariant="workbench"
          title={loc.title}
          subtitle={loc.seoDescription}
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Featured Creators in this Niche & Tags */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-5">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                      {t('page.category.topHeading', { name: loc.name })}
                    </h2>
                    <p className="text-sm text-[var(--ink-secondary)] mt-1">
                      {t('page.category.topSubtitle')}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {loc.trendingTags.map((tag) => (
                      <span
                        key={tag}
                        data-no-translate="true"
                        className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-full bg-[var(--surface-elevated)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {creatorsInNiche.map((creator) => {
                    const cLoc = getLocalizedCreator(creator, lang);

                    return (
                      <Link
                        key={creator.username}
                        href={`/profile/${creator.username}`}
                        className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-primary)] hover:shadow-[var(--shadow-card-hover)] transition-all flex items-center gap-3.5 group"
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
                            alt={cLoc.displayName}
                            referrerPolicy="no-referrer"
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h3 className="text-sm font-extrabold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate">
                            {cLoc.displayName}
                          </h3>
                          <p
                            data-no-translate="true"
                            className="text-xs font-mono font-semibold text-[var(--ink-muted)] truncate"
                          >
                            @{creator.username}
                          </p>
                          <div className="flex items-center gap-1.5 text-xs text-[var(--ink-secondary)] font-medium mt-1 tabular-nums">
                            <span className="font-bold text-[var(--ink-primary)]">
                              <span data-no-translate="true">
                                {creator.followers}
                              </span>{' '}
                              <span>{t('page.creators.followers')}</span>
                            </span>
                            <span>•</span>
                            <span>
                              <span data-no-translate="true">{creator.likes}</span>{' '}
                              <span>{t('page.creators.likes')}</span>
                            </span>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] group-hover:translate-x-0.5 transition-all shrink-0 rtl:rotate-180" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>

            {/* Band 2: Category FAQs */}
            {loc.faqs.length > 0 && (
              <section className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
                <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                  <div className="text-center max-w-xl mx-auto mb-6">
                    <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                      {t('page.category.faqHeading', { name: loc.name })}
                    </h2>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {loc.faqs.map((faq, index) => (
                      <div
                        key={index}
                        className="p-5 rounded-xl bg-[var(--surface-sunken)] border border-[var(--border-subtle)] flex flex-col gap-1.5 shadow-[var(--shadow-card)]"
                      >
                        <h3 className="text-sm font-extrabold text-[var(--ink-primary)]">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Band 3: Explore Other Categories */}
            <section className="w-full bg-[var(--surface-canvas)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg sm:text-xl font-black text-[var(--ink-primary)] tracking-tight">
                    {t('page.category.otherHeading')}
                  </h2>
                  <Link
                    href="/categories"
                    className="text-xs font-bold text-[var(--accent-primary-text)] hover:underline"
                  >
                    {t('page.category.viewAll')}
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                  {otherCategories.map((c) => {
                    const otherLoc = getLocalizedCategory(c, lang);

                    return (
                      <Link
                        key={c.slug}
                        href={`/category/${c.slug}`}
                        className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--accent-primary)] text-xs sm:text-sm text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] transition-all flex items-center justify-between"
                      >
                        <span className="truncate font-bold">{otherLoc.name}</span>
                        <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] shrink-0 rtl:rotate-180" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          </div>
        </TikTokProfileViewer>
      </main>

      <Footer />
    </div>
  );
}