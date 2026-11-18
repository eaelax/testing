import type { Metadata } from 'next';
import { Music, Volume2, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok MP3 Downloader - Extract High Quality Audio Free',
  description:
    'Download original TikTok music, sounds, and speech in MP3 format. 100% free with no limits on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok MP3 Downloader - Extract High Quality Audio Free',
    description:
      'Download original TikTok music, sounds, and speech in MP3 format. 100% free on TikProfilesViewer.com.',
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

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs items={[{ label: 'TikTok Audio MP3 Downloader' }]} />
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
          title="TikTok MP3 Audio Downloader"
          subtitle="Extract and download MP3 music tracks and voice audio from any TikTok video for free."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Audio Features */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Extract Clean TikTok Audio
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    Save music tracks, sound effects, and voice clips in crisp MP3 format.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                      <Volume2 className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Clean Sound Quality</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Enjoy clear sound reproduction. Music and voice are preserved with original audio clarity.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                      <Music className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Original Voice &amp; Music</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Works on official TikTok songs, user voiceovers, podcast clips, and comedy sounds.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <Download className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">One-Click Save</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Save audio directly without downloading the full video. Save space and time on your device.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: Audio FAQs */}
            <section className="w-full bg-[var(--surface-canvas)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    TikTok Audio FAQs
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