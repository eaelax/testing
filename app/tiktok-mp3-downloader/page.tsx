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
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Audio MP3 Downloader' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            TikTok MP3 Audio Downloader
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 leading-relaxed max-w-xl mx-auto">
            Extract and download MP3 music tracks and voice audio from any TikTok video for free.
          </p>
        </div>

        {/* Interactive Downloader with empty input until user types */}
        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* Audio Features Section */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Clean Sound Quality</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enjoy clear sound reproduction. Music and voice are preserved with original audio clarity.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Original Voice &amp; Music</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Works on official TikTok songs, user voiceovers, podcast clips, and comedy sounds.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">One-Click Save</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save audio directly without downloading the full video. Save space and time on your device.
              </p>
            </div>
          </div>
        </section>

        {/* Audio FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              TikTok Audio FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs flex flex-col gap-1.5">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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