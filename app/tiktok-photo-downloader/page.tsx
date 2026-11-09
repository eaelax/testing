import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Photo & Slideshow Downloader - Save Carousel Pictures in HD',
  description:
    'Download full resolution photos, image carousels, and slideshow pictures from TikTok without watermarks. Free tool on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Photo & Slideshow Downloader - Save Carousel Pictures in HD',
    description:
      'Download full resolution photos, image carousels, and slideshow pictures from TikTok without watermarks.',
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
        name: 'How do I download pictures from a TikTok slideshow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Search the creator username or open any photo carousel video. Click Download to save the high-resolution images directly to your device without any watermarks or compressed quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I download the background music attached to the photo carousel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can download both the high-resolution photos and the accompanying audio sound in clean 320kbps MP3 format.',
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

        <Breadcrumbs items={[{ label: 'TikTok Photo & Slideshow Downloader' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Photo &amp; Slideshow Downloader
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Extract and download full-resolution pictures, photo carousels, and slideshow albums from TikTok without watermarks or compression.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername="bellapoarch"
          autoSearch={true}
          title="Photo & Carousel Downloader"
          subtitle="Explore creators and download HD photos, thumbnails, and avatars"
        />

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
