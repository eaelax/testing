import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok MP3 Downloader - Extract High Quality Audio Free',
  description: 'Download original TikTok music, sounds, and speech in MP3 format. 100% free with no limits on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok MP3 Downloader - Extract High Quality Audio Free',
    description: 'Download original TikTok music, sounds, and speech in MP3 format. 100% free on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/tiktok-mp3-downloader',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-mp3-downloader',
  },
};

export default function AudioDownloaderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What audio format does Tik Profiles Viewer give me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The audio is saved directly as a clean MP3 file that plays on any phone, computer, or music player.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I download songs from dance videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can extract music, speech, and sound effects from any public video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the audio download free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free with no limits.',
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

        <Breadcrumbs items={[{ label: 'TikTok Audio MP3 Downloader' }]} />

        {/* Compact Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok MP3 Audio Downloader
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Extract and download MP3 music tracks and voice audio from any TikTok video for free.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* Audio Features Section */}
        <section className="mt-10 pt-8 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Clean Sound Quality</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Enjoy clear sound reproduction. Music and voice are preserved with original audio clarity.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Original Voice &amp; Music</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Works on official TikTok songs, user voiceovers, podcast clips, and comedy sounds.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">One-Click Save</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Save audio directly without downloading the full video. Save space and time on your device.
              </p>
            </div>
          </div>
        </section>

        {/* Audio FAQs */}
        <section className="mt-9 pt-7 border-t border-[var(--border-subtle)] mb-8">
          <div className="text-center max-w-xl mx-auto mb-5">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
              TikTok Audio FAQs
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