import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
  description: 'Download TikTok videos without watermark in HD MP4 quality. 100% free, fast, and no account needed on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
    description: 'Download TikTok videos without watermark in HD MP4 quality. 100% free and fast on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/tiktok-video-downloader',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-video-downloader',
  },
};

export default function VideoDownloaderPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download TikTok Videos Without Watermark',
    description: 'A 3-step guide to download watermark-free HD TikTok videos using Tik Profiles Viewer.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Search Creator Username',
        text: 'Type the TikTok username (e.g. khaby.lame) in the search bar and click Search.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Video',
        text: 'Click any video from the grid to open the video player.',
      },
      {
        '@type': 'HowToStep',
        name: 'Click Download HD Video',
        text: 'Click Download HD Video to save the clean MP4 file to your device.',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do downloaded videos have a TikTok watermark or logo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The video stream is saved directly before any watermark is added, giving you clean HD MP4 video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tik Profiles Viewer free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free with no subscription and no fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does it work on phones and computers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It works in any web browser on iPhone, Android, Mac, and Windows PC.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Video Downloader' }]} />

        {/* Compact Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok Video Downloader
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Download TikTok videos in original HD MP4 format without watermarks for free.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* How It Works 3-Step Guide */}
        <section className="mt-10 pt-8 border-t border-[var(--border-subtle)]">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
              How to Download TikTok Videos
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] mt-1">
              Save your favorite videos in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold flex items-center justify-center text-xs tabular-nums">
                1
              </div>
              <h3 className="text-sm font-bold text-[var(--ink-primary)]">Enter Username</h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Type the username of any public TikTok creator in the search bar.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent-cyan)] text-[var(--ink-primary)] font-bold flex items-center justify-center text-xs tabular-nums">
                2
              </div>
              <h3 className="text-sm font-bold text-[var(--ink-primary)]">Pick a Video</h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Click any video thumbnail from the grid to open the video player.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2">
              <div className="w-7 h-7 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-bold flex items-center justify-center text-xs tabular-nums">
                3
              </div>
              <h3 className="text-sm font-bold text-[var(--ink-primary)]">Download Video</h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Click Download HD Video to save the clean MP4 file directly to your device.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-9 pt-7 border-t border-[var(--border-subtle)] mb-8">
          <div className="text-center max-w-xl mx-auto mb-5">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {faqSchema.mainEntity.map((item, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1"
              >
                <h3 className="text-xs sm:text-[13px] font-bold text-[var(--ink-primary)]">{item.name}</h3>
                <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}