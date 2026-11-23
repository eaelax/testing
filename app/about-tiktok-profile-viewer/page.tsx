'use client';

import Link from 'next/link';
import {
  Zap,
  Download,
  ShieldCheck,
  CheckCircle2,
  Users,
  Film,
  Music,
  ArrowRight,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useI18n } from '@/lib/i18n/context';

export default function AboutPage() {
  const { t } = useI18n();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: t('page.about.title'),
    description: t('page.about.subtitle'),
    url: 'https://tikprofilesviewer.com/about-tiktok-profile-viewer',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${t('page.about.title')} - Tik Profiles Viewer`}</title>
      <meta name="description" content={t('page.about.subtitle')} />
      <link rel="canonical" href="https://tikprofilesviewer.com/about-tiktok-profile-viewer" />

      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumbs
          items={[
            {
              label: 'About Tik Profiles Viewer',
              translationKey: 'page.about.crumb',
            },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto my-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            {t('page.about.title')}
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
            {t('page.about.subtitle')}
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
              {t('toolPage.about.fastTitle')}
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.about.fastDesc')}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
              {t('toolPage.about.hdTitle')}
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.about.hdDesc')}
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--surface-canvas)] text-[var(--ink-primary)] border border-[var(--border-strong)] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
              {t('toolPage.about.anonTitle')}
            </h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.about.anonDesc')}
            </p>
          </div>
        </div>

        {/* Detailed Mission and Capabilities */}
        <section className="bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] p-5 sm:p-7 space-y-6 my-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)] mb-2">
              {t('toolPage.about.whyTitle')}
            </h2>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.about.whyDesc')}
            </p>
          </div>

          <div className="border-t border-[var(--border-subtle)] pt-5">
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-3">
              {t('toolPage.about.whatHeading')}
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[var(--ink-primary)]">{t('toolPage.about.capSearch')}:</strong>{' '}
                  {t('toolPage.about.capSearchDesc')}
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[var(--ink-primary)]">{t('toolPage.about.capGrid')}:</strong>{' '}
                  {t('toolPage.about.capGridDesc')}
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[var(--ink-primary)]">{t('toolPage.about.capHd')}:</strong>{' '}
                  {t('toolPage.about.capHdDesc')}
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[var(--ink-primary)]">{t('toolPage.about.capMp3')}:</strong>{' '}
                  {t('toolPage.about.capMp3Desc')}
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[var(--ink-primary)]">{t('toolPage.about.capAvatar')}:</strong>{' '}
                  {t('toolPage.about.capAvatarDesc')}
                </span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[var(--ink-primary)]">{t('toolPage.about.capBrowser')}:</strong>{' '}
                  {t('toolPage.about.capBrowserDesc')}
                </span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[var(--border-subtle)] pt-5">
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-2">
              {t('toolPage.about.safetyTitle')}
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              {t('toolPage.about.safetyDesc')}
            </p>
          </div>
        </section>

        {/* Quick Links to Other Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 my-6">
          <Link
            href="/tiktok-video-downloader"
            className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                  {t('toolPage.about.cardVideoTitle')}
                </div>
                <div className="text-[11px] text-[var(--ink-muted)]">
                  {t('toolPage.about.cardVideoDesc')}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
          </Link>

          <Link
            href="/tiktok-mp3-downloader"
            className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                  {t('toolPage.about.cardMp3Title')}
                </div>
                <div className="text-[11px] text-[var(--ink-muted)]">
                  {t('toolPage.about.cardMp3Desc')}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
          </Link>

          <Link
            href="/creators"
            className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[var(--surface-canvas)] text-[var(--ink-primary)] border border-[var(--border-strong)] flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">
                  {t('toolPage.about.cardCreatorsTitle')}
                </div>
                <div className="text-[11px] text-[var(--ink-muted)]">
                  {t('toolPage.about.cardCreatorsDesc')}
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
          </Link>
        </div>

        {/* Compact CTA Section */}
        <div className="p-6 sm:p-7 rounded-xl bg-[var(--accent-dark)] text-[var(--accent-contrast)] text-center flex flex-col items-center gap-3 my-6 border border-[var(--accent-dark)]">
          <h2 className="text-lg sm:text-xl font-bold">
            {t('toolPage.about.ctaTitle')}
          </h2>
          <p className="text-xs sm:text-sm text-[var(--accent-contrast)]/85 max-w-lg">
            {t('toolPage.about.ctaDesc')}
          </p>
          <Link
            href="/"
            className="h-9 px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold text-xs inline-flex items-center justify-center transition-all cursor-pointer"
          >
            {t('toolPage.about.ctaBtn')}
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}