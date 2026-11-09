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
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 relative">
      <Navbar />

      {/* Top Section with ambient aurora gradient behind Text and Search Input */}
      <div className="relative w-full overflow-hidden flex-1 flex flex-col">
        {/* Soft multi-color aurora ambient glow behind Text and Search Input */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1150px] max-w-[140vw] h-[720px] pointer-events-none -z-10 blur-3xl opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 42%, rgba(254, 40, 88, 0.18) 0%, rgba(168, 85, 247, 0.14) 30%, rgba(245, 158, 11, 0.10) 54%, rgba(42, 240, 234, 0.15) 76%, transparent 100%)',
          }}
        />

        <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-8 flex flex-col items-center">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          {/* Hero Headline & Subtitle directly on top section gradient (container background removed) */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              View Any TikTok Profile &amp; Download Videos in HD
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Inspect public TikTok profiles anonymously, watch videos quickly without lag, and save watermark-free HD videos and MP3 audio for free.
            </p>
          </div>

          {/* Interactive TikTok Profile Viewer */}
          <div className="w-full">
            <TikTokProfileViewer initialUsername="" autoSearch={false}>
            <div className="w-full">
              {/* How to Use Section (Anchored for Navbar #how-to-use) */}
              <section id="how-to-use" className="w-full mt-12 pt-8 border-t border-slate-200 scroll-mt-20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      How to Use Tik Profiles Viewer
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Follow these simple steps to view and download any public video.
                    </p>
                  </div>
                  <Link
                    href="/how-to-use-tiktok-profile-viewer"
                    className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Full guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <HowToUseSteps />
              </section>

              {/* Section 1: Explore Any TikTok Niche & Creator Format (section-1.png) */}
              <ExploreNichesSection />

              {/* Trending Creators: Low to medium radius */}
              <section className="w-full mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Trending TikTok Creators
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Popular creators you can inspect right now.
                    </p>
                  </div>
                  <Link
                    href="/creators"
                    className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View all creators</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {featuredCreators.map((creator) => (
                    <Link
                      key={creator.username}
                      href={`/profile/${creator.username}`}
                      className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex items-center gap-3.5 shadow-xs"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
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
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors truncate">
                          {creator.displayName}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 truncate">
                          @{creator.username}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                          <span>{creator.followers} followers</span>
                          <span>•</span>
                          <span className="truncate">{creator.category}</span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Free Tools Section (10 Creator Tools) */}
              <CreatorToolsSection />

              <AdSlot placement="footer" />

              {/* About Tik Profiles Viewer (Anchored for Navbar #about) */}
              <section id="about" className="w-full mt-12 pt-8 border-t border-slate-200 scroll-mt-20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      About Tik Profiles Viewer
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Free web service on TikProfilesViewer.com built for everyone.
                    </p>
                  </div>
                  <Link
                    href="/about-tiktok-profile-viewer"
                    className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Read more</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Fast Video Player</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Play videos smoothly without lag. Videos start quickly with clear picture quality.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">100% Free Forever</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      No payments, no credit card, and no limits. Download as many videos as you want.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Private & Anonymous</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Nobody knows you viewed their profile. No sign up required, and your data stays private.
                    </p>
                  </div>
                </div>
              </section>

              {/* Frequently Asked Questions (Styled exactly based on frequently-asked-questions.png) */}
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
