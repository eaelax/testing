import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
  description:
    'Download TikTok videos without watermark in HD MP4 quality. 100% free, fast, and no account needed on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
    description:
      'Download TikTok videos without watermark in HD MP4 quality. 100% free and fast on TikProfilesViewer.com.',
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
    description:
      'A 3-step guide to download watermark-free HD TikTok videos using Tik Profiles Viewer.',
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

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs items={[{ label: 'TikTok Video Downloader' }]} />
        </div>
      </div>

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
          heroVariant="workbench"
          title="TikTok Video Downloader"
          subtitle="Download TikTok videos in original HD MP4 format without watermarks for free."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: How It Works 3-Step Guide */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    How to Download TikTok Videos
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    Save your favorite videos in three easy steps.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-black flex items-center justify-center text-xs tabular-nums">
                      1
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Enter Username</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Type the username of any public TikTok creator in the search bar.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan)] text-[var(--ink-primary)] font-black flex items-center justify-center text-xs tabular-nums">
                      2
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Pick a Video</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Click any video thumbnail from the grid to open the video player.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-black flex items-center justify-center text-xs tabular-nums">
                      3
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Download Video</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Click Download HD Video to save the clean MP4 file directly to your device.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: FAQs */}
            <section className="w-full bg-[var(--surface-canvas)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Frequently Asked Questions
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {faqSchema.mainEntity.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                    >
                      <h3 className="text-sm font-extrabold text-[var(--ink-primary)]">{item.name}</h3>
                      <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                        {item.acceptedAnswer.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </TikTokProfileViewer>
      </main>

      <Footer />
    </div>
  );
}