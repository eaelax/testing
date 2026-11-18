import type { Metadata } from 'next';
import { Clock, EyeOff, Film } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Story Downloader - Download Stories Anonymously in HD',
  description:
    'Download and watch TikTok stories anonymously before they expire in 24 hours. Free, watermark-free HD story downloader on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Story Downloader - Download Stories Anonymously in HD',
    description:
      'Download and watch TikTok stories anonymously before they expire in 24 hours without watermark.',
    url: 'https://tikprofilesviewer.com/tiktok-story-downloader',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-story-downloader',
  },
};

export default function StoryDownloaderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you download a TikTok story anonymously?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. By searching the creator username on TikProfilesViewer.com, you can stream and download their public stories without logging in or appearing in their viewer list.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do TikTok stories expire after 24 hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, TikTok stories disappear from the app after 24 hours. Our downloader allows you to save the original HD MP4 video permanently to your device before it vanishes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a watermark on downloaded stories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All stories downloaded through our service are pure original video streams without any TikTok watermark logo.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs items={[{ label: 'TikTok Story Downloader' }]} />
        </div>
      </div>

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
          heroVariant="workbench"
          title="TikTok Story Downloader"
          subtitle="Download TikTok stories anonymously in original HD quality before they expire. Save clean MP4 videos with no watermarks and no login required."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Story Feature Highlights */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Save 24-Hour Stories Forever
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    Watch and archive public TikTok stories before they disappear.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Permanent Archive</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Save 24-hour disappearing stories to your gallery forever before they are removed.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Total Anonymity</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Watch stories without logging in. The creator never receives a notification or view count.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <Film className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Watermark-Free MP4</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Clean high definition MP4 video streams ready for editing, sharing, or offline viewing.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: FAQs & AdSlot */}
            <section className="w-full bg-[var(--surface-canvas)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-8">
                <AdSlot placement="header" />

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight text-center mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {faqSchema.mainEntity.map((faq, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                      >
                        <h3 className="text-sm font-extrabold text-[var(--ink-primary)]">{faq.name}</h3>
                        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                          {faq.acceptedAnswer.text}
                        </p>
                      </div>
                    ))}
                  </div>
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