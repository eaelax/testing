import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SongDetailClient from '@/components/SongDetailClient';
import { CREATORS, type CreatorData } from '@/lib/creators-data';
import {
  TRENDING_SONGS,
  getSongBySlug,
  getRelatedSongs,
} from '@/lib/songs-data';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export function generateStaticParams() {
  return TRENDING_SONGS.map((song) => ({
    slug: song.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) {
    return {
      title: 'Trending Song Not Found - Tik Profiles Viewer',
    };
  }

  return {
    title: song.seoTitle,
    description: song.seoDescription,
    openGraph: {
      title: song.seoTitle,
      description: song.seoDescription,
      url: `https://tikprofilesviewer.com/songs/${slug}`,
      siteName: 'Tik Profiles Viewer',
      type: 'music.song',
    },
    twitter: {
      card: 'summary_large_image',
      title: song.seoTitle,
      description: song.seoDescription,
    },
    alternates: {
      canonical: `https://tikprofilesviewer.com/songs/${slug}`,
    },
  };
}

export default async function SongDetailPage({ params }: Props) {
  const { slug } = await params;
  const song = getSongBySlug(slug);

  if (!song) {
    notFound();
  }

  const relatedSongs = getRelatedSongs(song);
  const matchingCreators: CreatorData[] = song.suggestedCreators
    .map((handle) =>
      CREATORS.find((c) => c.username.toLowerCase() === handle.toLowerCase())
    )
    .filter((c): c is CreatorData => Boolean(c));

  const musicRecordingSchema = {
    '@context': 'https://schema.org',
    '@type': 'MusicRecording',
    name: song.title,
    byArtist: {
      '@type': 'MusicGroup',
      name: song.artist,
    },
    duration: `PT${song.durationSec}S`,
    genre: song.genre,
    url: `https://tikprofilesviewer.com/songs/${song.slug}`,
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: song.faqs.map((faq) => ({
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
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(musicRecordingSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <SongDetailClient
          song={song}
          relatedSongs={relatedSongs}
          matchingCreators={matchingCreators}
        />
      </main>

      <Footer />
    </div>
  );
}