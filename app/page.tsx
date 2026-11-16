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
import { CREATORS } from '@/lib/creators-data';

export const metadata: Metadata = {
  title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
  description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
  openGraph: {
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
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
    description: 'Free TikTok profile viewer, video player, and watermark-free HD video and MP3 audio downloader.',
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
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)] relative">
      <Navbar />

      <div className="relative w-full overflow-hidden flex-1 flex flex-col">
        {/* Subtle brand ambient tint behind hero */}
        <div
          className="absolute top-0 start-1/2 -translate-x-1/2 w-[900px] max-w-[120vw] h-[380px] pointer-events-none -z-10 blur-3xl opacity-65"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 38%, rgba(238, 29, 82, 0.08) 0%, rgba(105, 201, 208, 0.12) 48%, transparent 100%)',
          }}
        />

        <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 pt-5 sm:pt-7 pb-8 flex flex-col items-center">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          {/* Compact Hero Headline & Subtitle */}
          <div className="text-center max-w-2xl mx-auto mb-5">
            <h1 className="text-[length:var(--h1-size)] font-black tracking-tight text-[var(--ink-primary)] leading-[1.18]">
              View Any TikTok Profile &amp; Download Videos in HD
            </h1>

            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2 leading-relaxed max-w-xl mx-auto">
              Inspect public TikTok profiles anonymously, watch videos quickly without lag, and save watermark-free HD videos and MP3 audio for free.
            </p>
          </div>

          <div className="w-full">
            <TikTokProfileViewer initialUsername="" autoSearch={false}>
              <div className="w-full">
                {/* How to Use Section */}
                <section id="how-to-use" className="w-full mt-9 pt-7 border-t border-[var(--border-subtle)] scroll-mt-16">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
                        How to Use Tik Profiles Viewer
                      </h2>
                      <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                        Follow these simple steps to view and download any public video.
                      </p>
                    </div>
                    <Link
                      href="/how-to-use-tiktok-profile-viewer"
                      className="text-xs font-bold text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] flex items-center gap-1 transition-colors shrink-0"
                    >
                      <span>Full guide</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                  </div>

                  <HowToUseSteps />
                </section>

                {/* Explore Any TikTok Niche */}
                <ExploreNichesSection />

                {/* Trending Creators */}
                <section className="w-full mt-10 pt-8 border-t border-[var(--border-subtle)]">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
                        Trending TikTok Creators
                      </h2>
                      <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                        Popular creators you can inspect right now.
                      </p>
                    </div>
                    <Link
                      href="/creators"
                      className="text-xs font-bold text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] flex items-center gap-1 transition-colors shrink-0"
                    >
                      <span>View all creators</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {featuredCreators.map((creator) => (
                      <Link
                        key={creator.username}
                        href={`/profile/${creator.username}`}
                        className="group p-3.5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex items-center gap-3"
                      >
                        <div className="relative w-11 h-11 rounded-lg overflow-hidden bg-[var(--surface-sunken)] shrink-0 border border-[var(--border-subtle)]">
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
                          <h3 className="text-xs sm:text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate">
                            {creator.displayName}
                          </h3>
                          <p className="text-[11px] font-mono font-semibold text-[var(--ink-muted)] truncate">
                            @{creator.username}
                          </p>
                          <div className="flex items-center gap-1.5 text-[11px] text-[var(--ink-secondary)] font-medium mt-0.5">
                            <span className="tabular-nums">{creator.followers} followers</span>
                            <span>•</span>
                            <span className="truncate">{creator.category}</span>
                          </div>
                        </div>

                        <ChevronRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] transition-colors shrink-0 rtl:rotate-180" />
                      </Link>
                    ))}
                  </div>
                </section>

                {/* Free Tools Section */}
                <CreatorToolsSection />

                <AdSlot placement="footer" />

                {/* About Tik Profiles Viewer */}
                <section id="about" className="w-full mt-10 pt-8 border-t border-[var(--border-subtle)] scroll-mt-16">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
                        About Tik Profiles Viewer
                      </h2>
                      <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                        Free web service on TikProfilesViewer.com built for everyone.
                      </p>
                    </div>
                    <Link
                      href="/about-tiktok-profile-viewer"
                      className="text-xs font-bold text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] flex items-center gap-1 transition-colors shrink-0"
                    >
                      <span>Read more</span>
                      <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                        <Zap className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[var(--ink-primary)]">Fast Video Player</h3>
                      <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                        Play videos smoothly without lag. Videos start quickly with clear picture quality.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                        <Download className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[var(--ink-primary)]">100% Free Forever</h3>
                      <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                        No payments, no credit card, and no limits. Download as many videos as you want.
                      </p>
                    </div>

                    <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2">
                      <div className="w-8 h-8 rounded-lg bg-[var(--surface-canvas)] text-[var(--ink-primary)] border border-[var(--border-strong)] flex items-center justify-center">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-bold text-[var(--ink-primary)]">Private &amp; Anonymous</h3>
                      <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                        Nobody knows you viewed their profile. No sign up required, and your data stays private.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Frequently Asked Questions */}
                <FaqSection />
              </div>
            </TikTokProfileViewer>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}