'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { useI18n } from '@/lib/i18n/context';
import { getLocalizedLegalPolicy } from '@/lib/i18n/legal-content';

export const LEGAL_PAGES = [
  { href: '/terms-of-service', key: 'terms', title: 'Terms of Service' },
  { href: '/privacy-policy', key: 'privacy', title: 'Privacy Policy' },
  { href: '/cookie-policy', key: 'cookies', title: 'Cookie Policy' },
  { href: '/disclaimer', key: 'disclaimer', title: 'Disclaimer' },
  { href: '/legal-notice', key: 'notice', title: 'Legal Notice' },
  { href: '/copyright-policy', key: 'copyright', title: 'Copyright Policy' },
  {
    href: '/tiktok-independence-disclaimer',
    key: 'independence',
    title: 'TikTok Independence',
  },
  {
    href: '/public-content-policy',
    key: 'publicContent',
    title: 'Public Content Policy',
  },
  {
    href: '/content-removal-policy',
    key: 'removal',
    title: 'Content Removal Policy',
  },
  {
    href: '/acceptable-use-policy',
    key: 'acceptableUse',
    title: 'Acceptable Use Policy',
  },
  { href: '/security-policy', key: 'security', title: 'Security Policy' },
  {
    href: '/service-availability-policy',
    key: 'availability',
    title: 'Service Availability',
  },
];

interface LegalLayoutProps {
  title?: string;
  subtitle?: string;
  lastUpdated?: string;
  summary?: string;
  currentPath: string;
  children?: React.ReactNode;
}

export default function LegalLayout({
  title: propTitle,
  subtitle: propSubtitle,
  lastUpdated = 'November 2026',
  summary: propSummary,
  currentPath,
  children: propChildren,
}: LegalLayoutProps) {
  const { lang, t } = useI18n();

  const slug = currentPath.replace(/^\/+/, '');
  const policy = getLocalizedLegalPolicy(slug, lang);

  const title = propTitle || policy.title;
  const subtitle = propSubtitle || policy.subtitle;
  const summary = propSummary || policy.summary;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{`${title} - Tik Profiles Viewer`}</title>
      <meta name="description" content={subtitle} />
      <link rel="canonical" href={`https://tikprofilesviewer.com${currentPath}`} />

      <Navbar />

      {/* Unified Blurred Gradient Header */}
      <div className="w-full hero-studio-backdrop border-b border-[var(--border-subtle)] pt-10 pb-8 sm:pt-12 sm:pb-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <Breadcrumbs
            items={[
              {
                label: 'Legal Center',
                href: '/terms-of-service',
                translationKey: 'breadcrumb.legalCenter',
              },
              { label: title },
            ]}
          />

          <header className="mt-2">
            <h1 className="text-[length:var(--h1-size)] font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
              {title}
            </h1>

            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2 leading-relaxed max-w-2xl">
              {subtitle}
            </p>

            <div className="flex items-center gap-3 mt-3 text-[11px] text-[var(--ink-muted)] font-mono font-semibold flex-wrap">
              <span>{t('legal.effective')}</span>
              <span>•</span>
              <span>{t('legal.lastReviewed', { date: lastUpdated })}</span>
            </div>
          </header>

          {/* Summary Callout */}
          <div className="mt-5 p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
            <div className="text-[var(--ink-primary)] font-bold text-xs sm:text-sm mb-1">
              {t('legal.keySummary')}
            </div>
            <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
              {summary}
            </p>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-6xl w-full mx-auto px-4 sm:px-6 py-8 sm:py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-start">
          {/* Main Legal Document */}
          <article
            data-auto-translate="true"
            className="legal-prose lg:col-span-8 bg-[var(--surface-elevated)] p-6 sm:p-8 rounded-xl border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-6 text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)]"
          >
            {propChildren ? (
              propChildren
            ) : (
              <>
                {policy.sections.map((sec, idx) => (
                  <section key={idx} className="space-y-3">
                    <h2>{sec.heading}</h2>
                    {sec.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                    {sec.bullets && sec.bullets.length > 0 && (
                      <ul className="list-disc pl-5 space-y-2 text-[var(--ink-secondary)]">
                        {sec.bullets.map((b, bIdx) => {
                          const parts = b.includes(':') ? b.split(':') : null;
                          if (parts && parts.length === 2) {
                            return (
                              <li key={bIdx}>
                                <strong className="text-[var(--ink-primary)]">
                                  {parts[0]}:
                                </strong>
                                {parts[1]}
                              </li>
                            );
                          }
                          return <li key={bIdx}>{b}</li>;
                        })}
                      </ul>
                    )}
                    {sec.paragraphs_after &&
                      sec.paragraphs_after.map((pa, paIdx) => (
                        <p key={paIdx}>{pa}</p>
                      ))}
                    {sec.callout && (
                      <div className="p-4 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-xs space-y-1.5 font-mono text-[var(--ink-secondary)]">
                        {sec.callout.map((c, cIdx) => (
                          <div key={cIdx}>{c}</div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </>
            )}

            <div className="pt-6 border-t border-[var(--border-subtle)] mt-8">
              <h3 className="text-sm font-bold text-[var(--ink-primary)] mb-1.5">
                {t('legal.noticeHeading')}
              </h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
                {t('legal.noticeBody')}
              </p>
            </div>
          </article>

          {/* Sticky Sidebar Legal Navigation */}
          <aside className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-20">
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
              <h3 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)] mb-3">
                {t('legal.documentsHeading')}
              </h3>
              <nav
                aria-label={t('legal.documentsHeading')}
                className="flex flex-col space-y-1"
              >
                {LEGAL_PAGES.map((page) => {
                  const isActive = currentPath === page.href;
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors border ${
                        isActive
                          ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)]/30 text-[var(--accent-primary-text)]'
                          : 'border-transparent text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
                      }`}
                    >
                      <span className="truncate">
                        {t(`legal.nav.${page.key}`)}
                      </span>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 rtl:rotate-180 ${
                          isActive
                            ? 'text-[var(--accent-primary-text)]'
                            : 'text-[var(--ink-muted)]'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] text-xs text-[var(--ink-secondary)] leading-relaxed">
              <span className="font-bold text-[var(--ink-primary)] block mb-1">
                {t('legal.independentTitle')}
              </span>
              {t('legal.independentBody')}
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}