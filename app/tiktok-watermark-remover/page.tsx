import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Watermark Remover - Remove TikTok Logo Online Free',
  description:
    'Remove TikTok watermark logo and creator username tag online. Download clean 1080p HD MP4 videos without watermark for Reels, Shorts, and offline use on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Watermark Remover - Remove TikTok Logo Online Free',
    description:
      'Remove TikTok watermark logo and creator username tag online. Download clean 1080p HD MP4 videos.',
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
        name: 'How does Tik Profiles Viewer remove TikTok watermarks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instead of blurring or cropping the screen, our engine accesses the raw original MP4 video stream directly from TikTok content delivery servers before the app applies the bouncing watermark logo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there any loss of video quality when removing the watermark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The video is downloaded in original 1080p / 720p resolution without re-compression or loss of fidelity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I repost watermark-free videos to Instagram Reels or YouTube Shorts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Both Instagram Reels and YouTube Shorts algorithms downrank videos with visible TikTok watermarks. Using Tik Profiles Viewer ensures your videos remain clean and eligible for maximum reach.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Watermark Remover' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Watermark Remover
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Extract pure, original HD MP4 videos without the bouncing TikTok watermark logo or end credit cards. 100% free with unlimited downloads.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername="mrbeast"
          autoSearch={true}
          title="Watermark Remover Engine"
          subtitle="Search any creator username to stream and download watermark-free HD videos"
        />

        {/* 3 Step Explanation */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Why Remove TikTok Watermarks?
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Repurpose short-form videos across all major platforms with maximum engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Boost Instagram Reels Reach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instagram officially penalizes clips with TikTok logos. Watermark-free clips receive full organic distribution.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">YouTube Shorts Monetization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eligible for YouTube Shorts Creator Fund and Ads revenue without third-party brand marks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Clean Portfolio Archiving</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save clean master copies of your original creative work in original 1080p resolution.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
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
