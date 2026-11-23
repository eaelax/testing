'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { useI18n } from '@/lib/i18n/context';

export default function VideoDownloaderPage() {
  const { t } = useI18n();

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: t('toolPage.videoDl.howTitle'),
    description: t('toolPage.videoDl.howSubtitle'),
    step: [
      {
        '@type': 'HowToStep',
        name: t('toolPage.videoDl.step1Title'),
        text: t('toolPage.videoDl.step1Desc'),
      },
      {
        '@type': 'HowToStep',
        name: t('toolPage.videoDl.step2Title'),
        text: t('toolPage.videoDl.step2Desc'),
      },
      {
        '@type': 'HowToStep',
        name: t('toolPage.videoDl.step3Title'),
        text: t('toolPage.videoDl.step3Desc'),
      },
    ],
  };

  const faqItems = [
    {
      question: t('toolPage.videoDl.faq1Q'),
      answer: t('toolPage.videoDl.faq1A'),
    },
    {
      question: t('toolPage.videoDl.faq2Q'),
      answer: t('toolPage.videoDl.faq2A'),
    },
    {
      question: t('toolPage.videoDl.faq3Q'),
      answer: t('toolPage.videoDl.faq3A'),
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
      <title>{`${t('page.videoDl.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.videoDl.subtitle')} />
      <link
        rel="canonical"
        href="https://tikprofilesviewer.com/tiktok-video-downloader"
      />

      <Navbar />

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
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
                  label: 'TikTok Video Downloader',
                  translationKey: 'page.videoDl.crumb',
                },
              ]}
            />
          }
          title={t('page.videoDl.title')}
          subtitle={t('page.videoDl.subtitle')}
        >
          <div className="w-full flex flex-col">
            {/* Band 1: How It Works 3-Step Guide */}
            <section className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-6xl mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight">
                    {t('toolPage.videoDl.howTitle')}
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    {t('toolPage.videoDl.howSubtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-primary)] text-[var(--accent-contrast)] font-bold flex items-center justify-center text-xs tabular-nums">
                      1
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.videoDl.step1Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.videoDl.step1Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan)] text-[var(--accent-contrast)] font-bold flex items-center justify-center text-xs tabular-nums">
                      2
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.videoDl.step2Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.videoDl.step2Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-bold flex items-center justify-center text-xs tabular-nums">
                      3
                    </div>
                    <h3 className="text-base font-bold text-[var(--ink-primary)]">
                      {t('toolPage.videoDl.step3Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.videoDl.step3Desc')}
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
                    {t('toolPage.videoDl.faqHeading')}
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