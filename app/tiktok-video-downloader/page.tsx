import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
  description: 'Download TikTok videos without watermark in HD MP4 quality. 100% free, fast, and no account needed on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
    description: 'Download TikTok videos without watermark in HD MP4 quality. 100% free and fast on TikProfilesViewer.com.',
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
    description: 'A 3-step guide to download watermark-free HD TikTok videos using Tik Profiles Viewer.',
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
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Video Downloader' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            TikTok Video Downloader
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Download TikTok videos in original HD MP4 format without watermarks for free.
          </p>
        </div>

        {/* Interactive Downloader */}
        <TikTokProfileViewer
          initialUsername="khaby.lame"
          autoSearch={true}
          title="Try Downloader Live"
          subtitle="Search any creator or use the demo profile below to test instant HD downloads"
        />

        {/* How It Works 3-Step Guide */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How to Download TikTok Videos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Save your favorite videos in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Enter Username</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Type the username of any public TikTok creator in the search bar.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Pick a Video</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click any video thumbnail from the grid to open the video player.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Download Video</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click Download HD Video to save the clean MP4 file directly to your device.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-14 pt-10 border-t border-slate-200 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
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
