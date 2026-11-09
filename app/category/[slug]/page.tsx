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
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

        {/* Hero Header: NO pill tag */}
        <div className="mb-8 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {category.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {category.seoDescription}
          </p>

          {/* Trending Tags */}
          <div className="flex flex-wrap gap-2 mt-4 pt-2">
            {category.trendingTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Creators in this Niche Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Top {category.name} Creators
            </h2>
            <span className="text-xs text-slate-500">
              Click any creator to view profile and download videos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {creatorsInNiche.map((creator) => (
              <Link
                key={creator.username}
                href={`/profile/${creator.username}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex items-center gap-3.5 group shadow-xs"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={creator.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60'}
                    alt={creator.displayName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors truncate">
                    {creator.displayName}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 truncate">
                    @{creator.username}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                    <span>{creator.followers} followers</span>
                    <span>•</span>
                    <span>{creator.likes} likes</span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Search & Downloader inside this Niche */}
        <section className="mb-14 pt-8 border-t border-slate-200">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Search Any {category.name} Creator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Search any username to watch videos and download HD MP4 and MP3 audio.
            </p>
          </div>

          <TikTokProfileViewer
            initialUsername={creatorsInNiche[0]?.username || ''}
            autoSearch={false}
          />
        </section>

        {/* Category FAQs */}
        {category.faqs.length > 0 && (
          <section className="mb-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions about {category.name}
            </h2>

            <div className="flex flex-col gap-4">
              {category.faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Browse Other Niches */}
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-900 shadow-sm transition-all flex items-center justify-between"
              >
                <span className="truncate">{c.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
