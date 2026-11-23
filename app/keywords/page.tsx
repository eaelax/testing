import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import KeywordDiscoverySection from '@/components/KeywordDiscoverySection';
import { TRENDING_KEYWORDS } from '@/lib/keywords-data';

export const metadata: Metadata = {
  title: 'TikTok Keyword Trends & Search Discovery - Trending Topics Hub',
  description:
    'Explore rising TikTok search keywords, trending topics, related search queries, and active creator niches with structured guides on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Keyword Trends & Search Discovery - Trending Topics Hub',
    description:
      'Explore rising TikTok search keywords, trending topics, and creator niches.',
    url: 'https://tikprofilesviewer.com/keywords',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/keywords',
  },
};

export default function KeywordsHubPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TikTok Keyword Trends & Search Discovery Hub',
    description:
      'Curated directory of trending TikTok search queries, creator niches, and topic guides.',
    url: 'https://tikprofilesviewer.com/keywords',
    hasPart: TRENDING_KEYWORDS.map((k) => ({
      '@type': 'WebPage',
      name: k.keyword,
      description: k.summary,
      url: `https://tikprofilesviewer.com/keywords/${k.slug}`,
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <KeywordDiscoverySection variant="hub" />
      </main>

      <Footer />
    </div>
  );
}