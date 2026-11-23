'use client';

import Link from 'next/link';
import { Play, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CATEGORIES } from '@/lib/creators-data';
import { useI18n } from '@/lib/i18n/context';
import { getLocalizedCategory } from '@/lib/i18n/creators-i18n';

export default function CategoriesPage() {
  const { lang, t } = useI18n();

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: t('page.categories.title'),
    description: t('page.categories.subtitle'),
    url: 'https://tikprofilesviewer.com/categories',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${t('page.categories.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.categories.subtitle')} />
      <link rel="canonical" href="https://tikprofilesviewer.com/categories" />

      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <Breadcrumbs
          items={[
            {
              label: 'Categories',
              translationKey: 'breadcrumb.categories',
            },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            {t('page.categories.title')}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            {t('page.categories.subtitle')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {CATEGORIES.map((cat) => {
            const loc = getLocalizedCategory(cat, lang);

            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between shadow-[var(--shadow-card)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center group-hover:bg-[var(--accent-primary-hover)] transition-colors">
                      <Play className="w-4 h-4 fill-current translate-x-0.5" />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] text-[var(--accent-cyan-text)] tabular-nums">
                      {t('page.categories.creatorsBadge', {
                        count: cat.creatorUsernames.length,
                      })}
                    </span>
                  </div>

                  <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                    {loc.name}
                  </h2>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1.5 line-clamp-2 leading-relaxed">
                    {loc.shortDescription}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] font-bold transition-colors">
                  <span>{t('page.categories.browse', { name: loc.name })}</span>
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
                </div>
              </Link>
            );
          })}
        </div>
      </main>

      <Footer />
    </div>
  );
}