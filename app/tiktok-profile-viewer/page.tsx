import type { Metadata } from 'next';
import { EyeOff, UserCheck, BarChart2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'Anonymous TikTok Profile Viewer - View Any Profile Without Account',
  description:
    'View TikTok profiles, follower counts, and videos anonymously without an account. Safe, free, and private on TikProfilesViewer.com.',
  openGraph: {
    title: 'Anonymous TikTok Profile Viewer - View Any Profile Without Account',
    description:
      'View TikTok profiles, follower counts, and videos anonymously without an account on TikProfilesViewer.com.',
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

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs items={[{ label: 'TikTok Profile Viewer' }]} />
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
          title="Anonymous TikTok Profile Viewer"
          subtitle="Search any public TikTok creator, see their follower stats, and watch videos anonymously without an account."
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Privacy Features */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Private, Fast Profile Inspection
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    Browse any public TikTok creator profile directly in your browser.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">100% Anonymous</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      Creators cannot see that you watched their videos or checked their follower count.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">No Account Needed</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      You never need to log in or share any email or password.
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <BarChart2 className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">Accurate Live Stats</h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      See real-time follower counts, total likes, and public video counts directly from TikTok.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: FAQs */}
            <section className="w-full bg-[var(--surface-canvas)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-6">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    Anonymous Viewer FAQs
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