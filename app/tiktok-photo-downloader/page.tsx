import type { Metadata } from 'next';
import { Layers, ShieldCheck, Image as ImageIcon } from 'lucide-react';
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

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs items={[{ label: 'TikTok Photo Downloader' }]} />
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
          title="TikTok Photo & Slideshow Downloader"
          subtitle="Extract and download clean individual images from any TikTok photo slideshow in original HD quality with no watermark."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Feature Highlights */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Download Slideshow Photos in HD
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    Save clean carousel images directly in their original resolution.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                      <Layers className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Individual Slide Extraction</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Download single photos from multi-image carousel posts directly as clean JPG files.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">No Watermarks</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Every photo is fetched cleanly without TikTok corner usernames or overlay text.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <ImageIcon className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Full HD Resolution</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Preserve maximum clarity, colors, and crisp image detail for wallpapers or editing.
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
                    Photo Downloader FAQs
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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