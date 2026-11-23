'use client';

import { EyeOff, UserCheck, BarChart2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { useI18n } from '@/lib/i18n/context';

export default function ProfileViewerPage() {
  const { t } = useI18n();

  const faqItems = [
    {
      question: t('toolPage.viewerPage.faq1Q'),
      answer: t('toolPage.viewerPage.faq1A'),
    },
    {
      question: t('toolPage.viewerPage.faq2Q'),
      answer: t('toolPage.viewerPage.faq2A'),
    },
    {
      question: t('toolPage.viewerPage.faq3Q'),
      answer: t('toolPage.viewerPage.faq3A'),
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${t('page.viewer.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.viewer.subtitle')} />
      <link
        rel="canonical"
        href="https://tikprofilesviewer.com/tiktok-profile-viewer"
      />

      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <TikTokProfileViewer
          initialUsername=""
          autoSearch={false}
          heroVariant="workbench"
          breadcrumbs={
            <Breadcrumbs
              items={[
                {
                  label: 'TikTok Profile Viewer',
                  translationKey: 'page.viewer.crumb',
                },
              ]}
            />
          }
          title={t('page.viewer.title')}
          subtitle={t('page.viewer.subtitle')}
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Privacy Features */}
            <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                    {t('toolPage.viewerPage.featHeading')}
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    {t('toolPage.viewerPage.featSubtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pastel-blue)] text-[var(--accent-cyan-text)] border border-[var(--pastel-blue-border)] flex items-center justify-center">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.viewerPage.feat1Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.viewerPage.feat1Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pastel-pink)] text-[var(--accent-primary-text)] border border-[var(--pastel-pink-border)] flex items-center justify-center">
                      <UserCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.viewerPage.feat2Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.viewerPage.feat2Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <BarChart2 className="w-4 h-4 text-[var(--accent-contrast)]" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.viewerPage.feat3Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.viewerPage.feat3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: FAQs */}
            <section className="w-full bg-[var(--surface-elevated)] py-10 sm:py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-6">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                    {t('toolPage.viewerPage.faqHeading')}
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {faqItems.map((item, idx) => (
                    <div
                      key={idx}
                      className="p-5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                    >
                      <h3 className="text-sm font-bold text-[var(--ink-primary)]">
                        {item.question}
                      </h3>
                      <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                        {item.answer}
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