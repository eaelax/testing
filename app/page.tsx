import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import HomePageClient from '@/components/HomePageClient';

export const metadata: Metadata = {
  title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
  description:
    'View any TikTok profile anonymously, watch videos, discover trending songs and keywords, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
  openGraph: {
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description:
      'View any TikTok profile anonymously, watch videos, discover trending songs and keywords, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com',
  },
};

export default function HomePage() {
  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Tik Profiles Viewer',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    description:
      'Free TikTok profile viewer, video player, and watermark-free HD video and MP3 audio downloader.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I download TikTok videos without watermark for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Type the creator username in the search box, click on the video you want, and click Download HD Video. The video will save directly to your device without any watermark.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I view TikTok profiles without an account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Tik Profiles Viewer is completely free and anonymous. You do not need to sign in or have a TikTok account to view profiles and watch videos.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I download only the audio or music from a video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Click on any video to open the player, then click the Download Audio (MP3) button. The audio track will save to your device as an MP3 file.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many videos can I see on a profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The first 30 videos load right away. You can click SHOW MORE VIDEOS at the bottom of the grid to load 15 more videos each time until you reach the very first video.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
          heroVariant="workbench"
          titleKey="hero.homeTitle"
          subtitleKey="hero.homeSubtitle"
          title="View Any TikTok Profile & Download Videos in HD"
          subtitle="Inspect public TikTok profiles anonymously, watch videos smoothly without lag, and save watermark-free HD MP4 videos and MP3 audio for free."
        >
          <HomePageClient />
        </TikTokProfileViewer>
      </main>

      <Footer />
    </div>
  );
}