'use client';

import { Clock, EyeOff, Film } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';
import { useI18n } from '@/lib/i18n/context';

export default function StoryDownloaderPage() {
  const { t } = useI18n();

  const faqItems = [
    {
      question: t('toolPage.storyDl.faq1Q'),
      answer: t('toolPage.storyDl.faq1A'),
    },
    {
      question: t('toolPage.storyDl.faq2Q'),
      answer: t('toolPage.storyDl.faq2A'),
    },
    {
      question: t('toolPage.storyDl.faq3Q'),
      answer: t('toolPage.storyDl.faq3A'),
    },
  ];

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${t('page.storyDl.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.storyDl.subtitle')} />
      <link
        rel="canonical"
        href="https://tikprofilesviewer.com/tiktok-story-downloader"
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
                  label: 'TikTok Story Downloader',
                  translationKey: 'page.storyDl.crumb',
                },
              ]}
            />
          }
          title={t('page.storyDl.title')}
          subtitle={t('page.storyDl.subtitle')}
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Story Feature Highlights */}
            <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                    {t('toolPage.storyDl.featHeading')}
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    {t('toolPage.storyDl.featSubtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pastel-pink)] text-[var(--accent-primary-text)] border border-[var(--pastel-pink-border)] flex items-center justify-center">
                      <Clock className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.storyDl.feat1Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.storyDl.feat1Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--pastel-blue)] text-[var(--accent-cyan-text)] border border-[var(--pastel-blue-border)] flex items-center justify-center">
                      <EyeOff className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.storyDl.feat2Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.storyDl.feat2Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <Film className="w-4 h-4 text-[var(--accent-contrast)]" />
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.storyDl.feat3Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.storyDl.feat3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: FAQs & AdSlot */}
            <section className="w-full bg-[var(--surface-elevated)] py-10 sm:py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-8">
                <AdSlot placement="header" />

                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight text-center mb-6">
                    {t('toolPage.storyDl.faqHeading')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {faqItems.map((faq, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                      >
                        <h3 className="text-sm font-bold text-[var(--ink-primary)]">
                          {faq.question}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
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