import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Photo & Slideshow Downloader - Save HD Images No Watermark',
  description:
    'Download individual TikTok photos and full photo slideshows in crisp original HD JPG format without watermarks. Free online TikTok image downloader.',
  openGraph: {
    title: 'TikTok Photo & Slideshow Downloader - Save HD Images No Watermark',
    description:
      'Extract and download clean TikTok photo slideshows and images without watermark logos.',
    url: 'https://tikprofilesviewer.com/tiktok-photo-downloader',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-photo-downloader',
  },
};

export default function PhotoDownloaderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I download TikTok photo slideshows without watermark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Enter the creator username or paste the slideshow post link in the search bar above. All slides will load individually so you can download every HD JPG image directly.',
        },
      },
      {
        '@type': 'Question',
        name: 'What image resolution do downloaded photos have?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All images are retrieved directly in their native uploaded resolution (typically 1080p HD or higher) with zero compression.',
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

        <Breadcrumbs items={[{ label: 'TikTok Photo Downloader' }]} />
        <AdSlot placement="header" />

        {/* Compact Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok Photo &amp; Slideshow Downloader
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Extract and download clean individual images from any TikTok photo slideshow in original HD quality with no watermark.
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
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Individual Slide Extraction</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Download single photos from multi-image carousel posts directly as clean JPG files.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">No Watermarks</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Every photo is fetched cleanly without TikTok corner usernames or overlay text.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Full HD Resolution</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Preserve maximum clarity, colors, and crisp image detail for wallpapers or editing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-9 pt-7 border-t border-[var(--border-subtle)] mb-8">
          <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)] text-center mb-5">
            Photo Downloader FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
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