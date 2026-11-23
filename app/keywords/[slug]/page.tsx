import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KeywordDetailClient from '@/components/KeywordDetailClient';
import { CREATORS, type CreatorData } from '@/lib/creators-data';
import { getSongBySlug, type TikTokSongData } from '@/lib/songs-data';
import {
  TRENDING_KEYWORDS,
  getKeywordBySlug,
  getRelatedKeywords,
} from '@/lib/keywords-data';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return TRENDING_KEYWORDS.map((entry) => ({
    slug: entry.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = getKeywordBySlug(slug);

  if (!entry) {
    return {
      title: 'Keyword Trend Not Found - Tik Profiles Viewer',
    };
  }

  return {
    title: entry.seoTitle,
    description: entry.seoDescription,
    openGraph: {
      title: entry.seoTitle,
      description: entry.seoDescription,
      url: `https://tikprofilesviewer.com/keywords/${slug}`,
      siteName: 'Tik Profiles Viewer',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: entry.seoTitle,
      description: entry.seoDescription,
    },
    alternates: {
      canonical: `https://tikprofilesviewer.com/keywords/${slug}`,
    },
  };
}

export default async function KeywordDetailPage({ params }: Props) {
  const { slug } = await params;
  const entry = getKeywordBySlug(slug);

  if (!entry) {
    notFound();
  }

  const relatedKeywords = getRelatedKeywords(entry);

  const matchingCreators: CreatorData[] = entry.recommendedCreators
    .map((handle) =>
      CREATORS.find((c) => c.username.toLowerCase() === handle.toLowerCase())
    )
    .filter((c): c is CreatorData => Boolean(c));

  const matchingSongs: TikTokSongData[] = entry.recommendedSongs
    .map((songSlug) => getSongBySlug(songSlug))
    .filter((s): s is TikTokSongData => Boolean(s));

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: entry.seoTitle,
    description: entry.seoDescription,
    mainEntityOfPage: `https://tikprofilesviewer.com/keywords/${entry.slug}`,
    datePublished: '2026-11-01',
    dateModified: '2026-11-06',
    publisher: {
      '@type': 'Organization',
      name: 'Tik Profiles Viewer',
      url: 'https://tikprofilesviewer.com',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entry.faqs.map((faq) => ({
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

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <KeywordDetailClient
          entry={entry}
          relatedKeywords={relatedKeywords}
          matchingCreators={matchingCreators}
          matchingSongs={matchingSongs}
        />
      </main>

      <Footer />
    </div>
  );
}