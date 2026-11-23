import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TrendingSongsSection from '@/components/TrendingSongsSection';
import { TRENDING_SONGS } from '@/lib/songs-data';

export const metadata: Metadata = {
  title: 'Trending TikTok Songs & Sounds - Viral Music & Audio Trends Directory',
  description:
    'Discover popular TikTok songs and trending sounds. Browse tracks by genre, tempo (BPM), and format tips with clean MP3 audio lookup on TikProfilesViewer.com.',
  openGraph: {
    title: 'Trending TikTok Songs & Sounds - Viral Music & Audio Trends Directory',
    description:
      'Discover popular TikTok songs and trending sounds with genre filters, timing tips, and MP3 audio lookups.',
    url: 'https://tikprofilesviewer.com/trending-songs',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/trending-songs',
  },
};

export default function TrendingSongsPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Trending TikTok Songs & Sounds Directory',
    description:
      'Directory of trending TikTok audio tracks, artist cuts, and creator sounds.',
    url: 'https://tikprofilesviewer.com/trending-songs',
    hasPart: TRENDING_SONGS.map((song) => ({
      '@type': 'MusicRecording',
      name: song.title,
      byArtist: {
        '@type': 'MusicGroup',
        name: song.artist,
      },
      url: `https://tikprofilesviewer.com/songs/${song.slug}`,
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

        <TrendingSongsSection variant="hub" />
      </main>

      <Footer />
    </div>
  );
}