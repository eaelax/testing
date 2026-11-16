import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { getCategoryBySlug, CATEGORIES, getCreatorsByCategory } from '@/lib/creators-data';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found - Tik Profiles Viewer',
    };
  }

  return {
    title: `${category.title} - Tik Profiles Viewer`,
    description: category.seoDescription,
    openGraph: {
      title: `${category.title} - Tik Profiles Viewer`,
      description: category.seoDescription,
      url: `https://tikprofilesviewer.com/category/${slug}`,
    },
    alternates: {
      canonical: `https://tikprofilesviewer.com/category/${slug}`,
    },
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const creatorsInNiche = getCreatorsByCategory(category.slug);
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqs.map((faq) => ({
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
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category.name },
          ]}
        />

        {/* Compact Hero Header */}
        <div className="mb-6 p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            {category.title}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 max-w-2xl leading-relaxed">
            {category.seoDescription}
          </p>

          <div className="flex flex-wrap gap-1.5 mt-3">
            {category.trendingTags.map((tag) => (
              <span
                key={tag}
                className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Creators in this Niche */}
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
            <h2 className="text-sm sm:text-base font-extrabold text-[var(--ink-primary)]">
              Top {category.name} Creators
            </h2>
            <span className="text-xs text-[var(--ink-muted)] font-medium">
              Click any creator to view profile and download videos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {creatorsInNiche.map((creator) => (
              <Link
                key={creator.username}
                href={`/profile/${creator.username}`}
                className="p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-3 group"
              >
                <div className="relative w-11 h-11 rounded-full overflow-hidden bg-[var(--surface-sunken)] shrink-0 border border-[var(--border-strong)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={creator.avatar || `/api/avatar?username=${encodeURIComponent(creator.username)}`}
                    alt={creator.displayName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate">
                    {creator.displayName}
                  </h3>
                  <p className="text-[11px] font-mono font-semibold text-[var(--ink-muted)] truncate">
                    @{creator.username}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-[var(--ink-secondary)] font-medium mt-0.5 tabular-nums">
                    <span>{creator.followers} followers</span>
                    <span>•</span>
                    <span>{creator.likes} likes</span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] transition-colors shrink-0 rtl:rotate-180" />
              </Link>
            ))}
          </div>
        </section>

        {/* Search & Downloader inside this Niche */}
        <section className="mb-8 pt-6 border-t border-[var(--border-subtle)]">
          <div className="text-center mb-4">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
              Search Any {category.name} Creator
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] mt-1">
              Search any username to watch videos and download HD MP4 and MP3 audio.
            </p>
          </div>

          <TikTokProfileViewer
            initialUsername=""
            autoSearch={false}
          />
        </section>

        {/* Category FAQs */}
        {category.faqs.length > 0 && (
          <section className="mb-8 p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
            <h2 className="text-sm sm:text-base font-extrabold text-[var(--ink-primary)] mb-3">
              Frequently Asked Questions about {category.name}
            </h2>

            <div className="flex flex-col gap-2.5">
              {category.faqs.map((faq, index) => (
                <div key={index} className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)]">
                  <h3 className="text-xs sm:text-[13px] font-bold text-[var(--ink-primary)]">
                    {faq.question}
                  </h3>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Browse Other Niches */}
        <section className="pt-5 border-t border-[var(--border-subtle)]">
          <h3 className="text-[11px] font-extrabold text-[var(--ink-primary)] uppercase tracking-wider mb-2.5">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="p-2.5 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] transition-all flex items-center justify-between"
              >
                <span className="truncate font-semibold">{c.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)] shrink-0 rtl:rotate-180" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}