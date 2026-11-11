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
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Story Downloader' }]} />
        <AdSlot placement="header" />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            TikTok Story Downloader
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 leading-relaxed max-w-xl mx-auto">
            Download TikTok stories anonymously in original HD quality before they expire. Save clean MP4 videos with no watermarks and no login required.
          </p>
        </div>

        {/* Interactive Viewer with empty input until user types */}
        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* Feature Highlights */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">Permanent Archive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save 24-hour disappearing stories to your gallery forever before they are removed.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">Total Anonymity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watch stories without logging in. The creator never receives a notification or viewer view.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm sm:text-base text-slate-900 mb-1">Watermark-Free MP4</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean high definition MP4 video streams ready for editing, sharing, or offline viewing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{faq.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}