import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import HowToUseSteps from '@/components/HowToUseSteps';
import ExploreNichesSection from '@/components/ExploreNichesSection';
import CreatorToolsSection from '@/components/CreatorToolsSection';
import FaqSection from '@/components/FaqSection';
import AdSlot from '@/components/AdSlot';
import { MotionFadeIn } from '@/components/MotionPrimitives';
import { CREATORS } from '@/lib/creators-data';

export const metadata: Metadata = {
  title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
  description:
    'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
  openGraph: {
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description:
      'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com',
  },
};

export default function HomePage() {
  const featuredCreators = CREATORS.slice(0, 6);

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
          title="View Any TikTok Profile & Download Videos in HD"
          subtitle="Inspect public TikTok profiles anonymously, watch videos smoothly without lag, and save watermark-free HD MP4 videos and MP3 audio for free."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: How to Use */}
            <section
              id="how-to-use"
              className="w-full pastel-mesh-band border-b border-[var(--border-subtle)] py-12 sm:py-16 scroll-mt-16"
            >
              <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                      How to Use Tik Profiles Viewer
                    </h2>
                    <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                      Follow these three simple steps to view any public profile and save HD media.
                    </p>
                  </div>
                  <Link
                    href="/how-to-use-tiktok-profile-viewer"
                    className="h-9 px-4 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] shadow-[var(--shadow-card)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
                  >
                    <span>Full guide</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)] rtl:rotate-180" />
                  </Link>
                </div>

                <HowToUseSteps />
              </MotionFadeIn>
            </section>

            {/* Band 2: Explore Niches */}
            <section className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-12 sm:py-16">
              <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
                <ExploreNichesSection />
              </MotionFadeIn>
            </section>

            {/* Band 3: Trending Creators */}
            <section className="w-full pastel-mesh-band border-b border-[var(--border-subtle)] py-12 sm:py-16">
              <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                      Trending TikTok Creators
                    </h2>
                    <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                      Popular public creators you can inspect and watch right now.
                    </p>
                  </div>
                  <Link
                    href="/creators"
                    className="h-9 px-4 rounded-full bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] shadow-[var(--shadow-card)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
                  >
                    <span>View all creators</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)] rtl:rotate-180" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {featuredCreators.map((creator) => (
                    <Link
                      key={creator.username}
                      href={`/profile/${creator.username}`}
                      className="group p-4 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] hover:border-[var(--pastel-blue-border)] hover:shadow-[var(--shadow-card-hover)] transition-all flex items-center gap-3.5"
                    >
                      <div className="relative w-12 h-12 rounded-2xl overflow-hidden bg-[var(--surface-sunken)] shrink-0 border border-[var(--border-subtle)]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={creator.avatar || `/api/avatar?username=${encodeURIComponent(creator.username)}`}
                          alt={creator.displayName}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate">
                          {creator.displayName}
                        </h3>
                        <p className="text-xs font-mono font-medium text-[var(--ink-muted)] truncate">
                          @{creator.username}
                        </p>
                        <div className="flex items-center gap-1.5 text-xs text-[var(--ink-secondary)] mt-1">
                          <span className="font-semibold text-[var(--ink-primary)] tabular-nums">
                            {creator.followers} followers
                          </span>
                          <span className="text-[var(--border-strong)]">•</span>
                          <span className="truncate text-[var(--ink-muted)]">{creator.category}</span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--ink-primary)] group-hover:translate-x-0.5 transition-all shrink-0 rtl:rotate-180" />
                    </Link>
                  ))}
                </div>
              </MotionFadeIn>
            </section>

            {/* Band 4: About Tik Profiles Viewer */}
            <section
              id="about"
              className="w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] py-12 sm:py-16 scroll-mt-16"
            >
              <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-7">
                  <div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                      About Tik Profiles Viewer
                    </h2>
                    <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                      Built on TikProfilesViewer.com for fast, private access to public TikTok profiles.
                    </p>
                  </div>
                  <Link
                    href="/about-tiktok-profile-viewer"
                    className="h-9 px-4 rounded-full bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] shadow-[var(--shadow-card)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1.5 transition-colors shrink-0 w-fit"
                  >
                    <span>Read more</span>
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--ink-muted)] rtl:rotate-180" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-2xl bg-[var(--pastel-blue)]/45 border border-[var(--pastel-blue-border)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-cyan-text)] border border-[var(--pastel-blue-border)] flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">Fast Video Player</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Play videos smoothly without lag. Clips start quickly with crisp picture quality.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[var(--pastel-pink)]/45 border border-[var(--pastel-pink-border)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] border border-[var(--pastel-pink-border)] flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">100% Free Forever</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      No payments, no credit card, and no daily caps. Download as many videos as you need.
                    </p>
                  </div>

                  <div className="p-5 rounded-2xl bg-[var(--pastel-lavender)]/45 border border-[var(--pastel-lavender-border)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-xl bg-[var(--surface-elevated)] text-[var(--ink-primary)] border border-[var(--pastel-lavender-border)] flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">Private &amp; Anonymous</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Nobody knows you viewed their profile. No sign-up required, and your activity stays private.
                    </p>
                  </div>
                </div>
              </MotionFadeIn>
            </section>

            {/* Band 5: Free Creator Tools */}
            <section className="w-full pastel-mesh-band border-b border-[var(--border-subtle)] py-12 sm:py-16">
              <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6">
                <CreatorToolsSection />
              </MotionFadeIn>
            </section>

            {/* Band 6: AdSlot & FAQ */}
            <section className="w-full bg-[var(--surface-elevated)] py-12 sm:py-16">
              <MotionFadeIn inView className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
                <AdSlot placement="footer" />
                <FaqSection />
              </MotionFadeIn>
            </section>
          </div>
        </TikTokProfileViewer>
      </main>

      <Footer />
    </div>
  );
}