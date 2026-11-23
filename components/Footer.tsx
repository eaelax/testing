'use client';

import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function Footer() {
  const { t } = useI18n();

  const handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tpv:reset-home'));
    }
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--ink-secondary)] text-xs mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Col 1: Brand & Overview */}
        <div className="lg:col-span-4 flex flex-col gap-3.5">
          <Link
            href="/"
            onClick={handleGoHome}
            className="flex items-center gap-2.5 text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] transition-colors font-bold text-sm select-none w-fit rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
              alt={t('brand.name')}
              className="w-8 h-8 object-contain shrink-0"
            />
            <span>{t('brand.name')}</span>
          </Link>

          <p className="text-[var(--ink-secondary)] leading-relaxed text-xs max-w-xs">
            {t('footer.tagline')}
          </p>

          <div className="flex flex-wrap items-center gap-2 text-xs pt-1 text-[var(--ink-primary)]">
            <Link
              href="/trending-songs"
              className="px-3 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-semibold transition-colors"
            >
              {t('footer.trendingSongs')}
            </Link>
            <Link
              href="/keywords"
              className="px-3 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-semibold transition-colors"
            >
              {t('footer.keywordTrends')}
            </Link>
            <Link
              href="/creators"
              className="px-3 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-semibold transition-colors"
            >
              {t('footer.topCreators')}
            </Link>
            <Link
              href="/categories"
              className="px-3 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-semibold transition-colors"
            >
              {t('nav.categories')}
            </Link>
            <Link
              href="/about-tiktok-profile-viewer"
              className="px-3 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-semibold transition-colors"
            >
              {t('footer.aboutUs')}
            </Link>
            <Link
              href="/how-to-use-tiktok-profile-viewer"
              className="px-3 py-1 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] font-semibold transition-colors"
            >
              {t('footer.howToUse')}
            </Link>
          </div>
        </div>

        {/* Col 2: Free Tools */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-primary)]">
            {t('footer.freeTools')}
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--ink-secondary)]">
            <li>
              <Link
                href="/tiktok-video-downloader"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.video.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-mp3-downloader"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.mp3.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-profile-viewer"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.viewer.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-story-downloader"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.story.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-photo-downloader"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.photo.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-watermark-remover"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.watermark.label')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Creator Calculators & Discovery */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-primary)]">
            {t('footer.creatorGrowth')}
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--ink-secondary)]">
            <li>
              <Link
                href="/trending-songs"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.songs')}
              </Link>
            </li>
            <li>
              <Link
                href="/keywords"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.keywords')}
              </Link>
            </li>
            <li>
              <Link
                href="/creators"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.creators')}
              </Link>
            </li>
            <li>
              <Link
                href="/categories"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.categories')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-analytics"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.analytics.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-money-calculator"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.money.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-engagement-calculator"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.engagement.label')}
              </Link>
            </li>
            <li>
              <Link
                href="/tiktok-caption-generator"
                className="hover:text-[var(--accent-primary-text)] transition-colors"
              >
                {t('nav.tool.caption.label')}
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Policies */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h4 className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-primary)]">
            {t('footer.legalHeading')}
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-[var(--ink-secondary)]">
            <Link
              href="/terms-of-service"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.terms')}
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.privacy')}
            </Link>
            <Link
              href="/cookie-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.cookies')}
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.disclaimer')}
            </Link>
            <Link
              href="/legal-notice"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.notice')}
            </Link>
            <Link
              href="/copyright-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.copyright')}
            </Link>
            <Link
              href="/tiktok-independence-disclaimer"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.independence')}
            </Link>
            <Link
              href="/public-content-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.publicContent')}
            </Link>
            <Link
              href="/content-removal-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.removal')}
            </Link>
            <Link
              href="/acceptable-use-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.acceptableUse')}
            </Link>
            <Link
              href="/security-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.security')}
            </Link>
            <Link
              href="/service-availability-policy"
              className="hover:text-[var(--accent-primary-text)] transition-colors truncate"
            >
              {t('legal.nav.availability')}
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--surface-canvas)] py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-[var(--ink-muted)]">
          <p className="text-[var(--ink-primary)] font-semibold">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </p>
          <p className="text-center md:text-end max-w-xl">
            {t('footer.disclaimer')}
          </p>
        </div>
      </div>
    </footer>
  );
}