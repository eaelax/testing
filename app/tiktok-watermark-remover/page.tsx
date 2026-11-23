'use client';

import { Eraser, Film, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';
import { useI18n } from '@/lib/i18n/context';

export default function WatermarkRemoverPage() {
  const { t } = useI18n();

  const faqItems = [
    {
      question: t('toolPage.watermarkPage.faq1Q'),
      answer: t('toolPage.watermarkPage.faq1A'),
    },
    {
      question: t('toolPage.watermarkPage.faq2Q'),
      answer: t('toolPage.watermarkPage.faq2A'),
    },
    {
      question: t('toolPage.watermarkPage.faq3Q'),
      answer: t('toolPage.watermarkPage.faq3A'),
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
      <title>{`${t('page.watermark.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.watermark.subtitle')} />
      <link
        rel="canonical"
        href="https://tikprofilesviewer.com/tiktok-watermark-remover"
      />

      <Navbar />

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs
            items={[
              {
                label: 'TikTok Watermark Remover',
                translationKey: 'page.watermark.crumb',
              },
            ]}
          />
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
          title={t('page.watermark.title')}
          subtitle={t('page.watermark.subtitle')}
        >
          <div className="w-full flex flex-col">
            {/* Band 1: Feature Highlights */}
            <section className="w-full bg-[var(--surface-sunken)] border-b border-[var(--border-subtle)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
                <div className="text-center max-w-xl mx-auto mb-7">
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                    {t('toolPage.watermarkPage.featHeading')}
                  </h2>
                  <p className="text-sm text-[var(--ink-secondary)] mt-1.5">
                    {t('toolPage.watermarkPage.featSubtitle')}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                      <Eraser className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">
                      {t('toolPage.watermarkPage.feat1Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.watermarkPage.feat1Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                      <Film className="w-4 h-4" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">
                      {t('toolPage.watermarkPage.feat2Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.watermarkPage.feat2Desc')}
                    </p>
                  </div>

                  <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                      <Zap className="w-4 h-4 text-[var(--accent-cyan)]" />
                    </div>
                    <h3 className="text-base font-extrabold text-[var(--ink-primary)]">
                      {t('toolPage.watermarkPage.feat3Title')}
                    </h3>
                    <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                      {t('toolPage.watermarkPage.feat3Desc')}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Band 2: FAQs & AdSlot */}
            <section className="w-full bg-[var(--surface-canvas)] py-10 sm:py-12">
              <div className="max-w-[1120px] mx-auto px-4 sm:px-6 space-y-8">
                <AdSlot placement="header" />

                <div>
                  <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight text-center mb-6">
                    {t('toolPage.watermarkPage.faqHeading')}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {faqItems.map((faq, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                      >
                        <h3 className="text-sm font-extrabold text-[var(--ink-primary)]">
                          {faq.name}
                        </h3>
                        <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                          {faq.acceptedAnswer.text}
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