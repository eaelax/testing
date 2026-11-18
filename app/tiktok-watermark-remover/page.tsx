import type { Metadata } from 'next';
import { Eraser, Film, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Watermark Remover - Save Clean HD Videos Without Logo',
  description:
    'Remove the TikTok watermark and bouncing username logo from any video automatically. Save clean, lossless HD MP4 files on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Watermark Remover - Save Clean HD Videos Without Logo',
    description:
      'Get original unwatermarked TikTok videos directly without cropping or blurring the frame.',
    url: 'https://tikprofilesviewer.com/tiktok-watermark-remover',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-watermark-remover',
  },
};

export default function WatermarkRemoverPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does the TikTok watermark remover work without cropping?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Unlike screen recorders or blurring apps, our tool fetches the clean original video file directly before TikTok stamps the bouncing logo onto the playback stream.',
        },
      },
      {
        '@type': 'Question',
        name: 'Will removing the watermark reduce video resolution?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Because we retrieve the source video directly from TikTok CDN, you preserve 100% of the crisp original HD quality, frame rate, and clear stereo audio.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is it safe to use on iPhone, Android, and desktop?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Everything runs securely in your browser with zero software installs, browser extensions, or login requirements.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs items={[{ label: 'TikTok Watermark Remover' }]} />
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
          title="TikTok Watermark Remover"
          subtitle="Remove the bouncing TikTok logo and username watermark cleanly without cropping, blurring, or losing original HD quality."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Feature Highlights */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Clean Videos With Zero Logo Overlay
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    Save original unwatermarked streams ready for offline playback or editing.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                      <Eraser className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">No Blurring or Cropping</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Keep the full video screen clean and sharp without ugly blurred corners or cropped edges.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                      <Film className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Direct Clean HD MP4</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Stream and download pure MP4 files ready for editing or reposting on Instagram Reels and YouTube Shorts.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Fast &amp; 100% Free</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Unlimited clean watermark removals every day without paying fees or making an account.
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
                    Watermark Remover FAQs
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