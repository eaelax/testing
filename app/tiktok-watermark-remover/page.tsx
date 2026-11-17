import type { Metadata } from 'next';
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

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Watermark Remover' }]} />
        <AdSlot placement="header" />

        {/* Compact Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok Watermark Remover
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Remove the bouncing TikTok logo and username watermark cleanly without cropping, blurring, or losing original HD quality.
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
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">No Blurring or Cropping</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Keep the full video screen clean and sharp without ugly blurred corners or cropped edges.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Direct Clean HD MP4</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Stream and download pure MP4 files ready for editing or reposting on Instagram Reels and YouTube Shorts.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Fast &amp; 100% Free</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Unlimited clean watermark removals every day without paying fees or making an account.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-9 pt-7 border-t border-[var(--border-subtle)] mb-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] text-center mb-5">
            Watermark Remover FAQs
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