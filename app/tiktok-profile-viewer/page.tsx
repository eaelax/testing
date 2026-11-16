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
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Profile Viewer' }]} />

        {/* Compact Hero Section */}
        <div className="text-center max-w-xl mx-auto mb-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            Anonymous TikTok Profile Viewer
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Search any public TikTok creator, see their follower stats, and watch videos anonymously without an account.
          </p>
        </div>

        {/* Interactive Viewer */}
        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
        />

        {/* Privacy Features */}
        <section className="mt-10 pt-7 border-t border-[var(--border-subtle)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">100% Anonymous</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                Creators cannot see that you watched their videos or checked their follower count.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">No Account Needed</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                You never need to log in or share any email or password.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-1.5">
              <h2 className="text-sm font-bold text-[var(--ink-primary)]">Accurate Live Stats</h2>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                See real-time follower counts, total likes, and public video counts directly from TikTok.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-9 pt-7 border-t border-[var(--border-subtle)] mb-8">
          <div className="text-center max-w-xl mx-auto mb-5">
            <h2 className="text-lg sm:text-xl font-extrabold text-[var(--ink-primary)]">
              Anonymous Viewer FAQs
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