import type { Metadata } from 'next';
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

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Story Downloader' }]} />
        <AdSlot placement="header" />

        {/* Compact Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok Story Downloader
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Download TikTok stories anonymously in original HD quality before they expire. Save clean MP4 videos with no watermarks and no login required.
          </p>
        </div>

        {/* Interactive Viewer */}
        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* Feature Highlights */}
        <section className="mt-10 pt-7 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Permanent Archive</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Save 24-hour disappearing stories to your gallery forever before they are removed.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Total Anonymity</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Watch stories without logging in. The creator never receives a notification or view count.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Watermark-Free MP4</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Clean high definition MP4 video streams ready for editing, sharing, or offline viewing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-9 pt-7 border-t border-[var(--border-subtle)] mb-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] text-center mb-5">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {faqSchema.mainEntity.map((faq, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1"
              >
                <h3 className="text-xs sm:text-[13px] font-bold text-[var(--ink-primary)]">{faq.name}</h3>
                <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}