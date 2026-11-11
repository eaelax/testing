import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'Anonymous TikTok Profile Viewer - View Any Profile Without Account',
  description: 'View TikTok profiles, follower counts, and videos anonymously without an account. Safe, free, and private on TikProfilesViewer.com.',
  openGraph: {
    title: 'Anonymous TikTok Profile Viewer - View Any Profile Without Account',
    description: 'View TikTok profiles, follower counts, and videos anonymously without an account on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/tiktok-profile-viewer',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-profile-viewer',
  },
};

export default function ProfileViewerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can someone see that I viewed their TikTok profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. You do not need to log in to TikTok, so your name will never show up on anyone profile view list.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to install any app or extension?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Tik Profiles Viewer works directly in your web browser on your phone, tablet, or computer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I view private accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Only public accounts and public videos can be viewed.',
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

        <Breadcrumbs items={[{ label: 'TikTok Profile Viewer' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Anonymous TikTok Profile Viewer
          </h1>
          <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2 leading-relaxed max-w-xl mx-auto">
            Search any public TikTok creator, see their follower stats, and watch videos anonymously without an account.
          </p>
        </div>

        {/* Interactive Viewer with empty input until user types */}
        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* Privacy Features */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">100% Anonymous</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Creators cannot see that you watched their videos or checked their follower count.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">No Account Needed</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You never need to log in or share any email or password.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2">
              <h3 className="text-sm sm:text-base font-bold text-slate-900">Accurate Live Stats</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                See real-time follower counts, total likes, and public video counts directly from TikTok.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <div className="text-center max-w-2xl mx-auto mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Anonymous Viewer FAQs
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