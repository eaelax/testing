import type { Metadata } from 'next';
import Link from 'next/link';
import { Play, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CATEGORIES } from '@/lib/creators-data';

export const metadata: Metadata = {
  title: 'TikTok Categories Directory - Browse Top Creators',
  description: 'Explore top TikTok creator categories including Comedy, Food, Tech, Gaming, Fitness, and Dance on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Categories Directory - Browse Top Creators',
    description: 'Explore top TikTok creator categories including Comedy, Food, Tech, Gaming, Fitness, and Dance on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/categories',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/categories',
  },
};

export default function CategoriesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TikTok Categories Directory',
    description: 'Explore top TikTok creator categories.',
    url: 'https://tikprofilesviewer.com/categories',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <Breadcrumbs items={[{ label: 'Categories' }]} />

        {/* Compact Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-7">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            Explore TikTok by Category
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Browse creators and videos by their content topic.
          </p>
        </div>

        {/* Compact Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center group-hover:bg-[var(--accent-primary-hover)] transition-colors">
                    <Play className="w-4 h-4 fill-current translate-x-0.5" />
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] text-[var(--accent-cyan-text)] tabular-nums">
                    {cat.creatorUsernames.length} Creators
                  </span>
                </div>

                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                  {cat.name}
                </h2>
                <p className="text-xs text-[var(--ink-secondary)] mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] font-bold transition-colors">
                <span>Browse {cat.name}</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform rtl:rotate-180" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}