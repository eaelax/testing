'use client';

import Link from 'next/link';

export default function Footer() {
  const handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tpv:reset-home'));
    }
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--ink-secondary)] text-xs mt-auto">
      {/* Main Footer Columns */}
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 py-9 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-7">
        {/* Col 1: Brand, Logo & About */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          <Link
            href="/"
            onClick={handleGoHome}
            className="flex items-center gap-2.5 text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] transition-colors font-extrabold text-sm select-none w-fit rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-[var(--surface-tint-rose)] border border-[var(--border-subtle)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
                alt="Tik Profiles Viewer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span>Tik Profiles Viewer</span>
          </Link>

          <p className="text-[var(--ink-secondary)] leading-relaxed text-xs max-w-xs">
            Free web tool to view public TikTok profiles anonymously, watch videos smoothly, and save clean HD MP4 videos and MP3 audio tracks.
          </p>

          <div className="flex items-center gap-3 text-xs pt-1 text-[var(--ink-primary)]">
            <Link
              href="/about-tiktok-profile-viewer"
              className="hover:text-[var(--accent-primary-text)] font-bold transition-colors underline underline-offset-4 decoration-[var(--accent-cyan-hover)]"
            >
              About
            </Link>
            <span className="text-[var(--border-strong)]">•</span>
            <Link
              href="/how-to-use-tiktok-profile-viewer"
              className="hover:text-[var(--accent-primary-text)] font-bold transition-colors underline underline-offset-4 decoration-[var(--accent-cyan-hover)]"
            >
              How to use
            </Link>
            <span className="text-[var(--border-strong)]">•</span>
            <Link
              href="/creators"
              className="hover:text-[var(--accent-primary-text)] font-bold transition-colors underline underline-offset-4 decoration-[var(--accent-cyan-hover)]"
            >
              Top Creators
            </Link>
          </div>
        </div>

        {/* Col 2: Free Tools */}
        <div className="lg:col-span-3 flex flex-col gap-2.5">
          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--ink-primary)]">
            Free Downloader Tools
          </h4>
          <ul className="flex flex-col gap-1.5 text-xs text-[var(--ink-secondary)]">
            <li>
              <Link href="/tiktok-video-downloader" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                HD Video Downloader
              </Link>
            </li>
            <li>
              <Link href="/tiktok-mp3-downloader" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Audio MP3 Extractor
              </Link>
            </li>
            <li>
              <Link href="/tiktok-profile-viewer" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Anonymous Profile Viewer
              </Link>
            </li>
            <li>
              <Link href="/tiktok-story-downloader" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Story Downloader (24h)
              </Link>
            </li>
            <li>
              <Link href="/tiktok-photo-downloader" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Photo &amp; Slideshow Downloader
              </Link>
            </li>
            <li>
              <Link href="/tiktok-watermark-remover" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Watermark Remover
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Creator Calculators & Growth */}
        <div className="lg:col-span-2 flex flex-col gap-2.5">
          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--ink-primary)]">
            Creator Growth
          </h4>
          <ul className="flex flex-col gap-1.5 text-xs text-[var(--ink-secondary)]">
            <li>
              <Link href="/tiktok-analytics" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Viral Analytics
              </Link>
            </li>
            <li>
              <Link href="/tiktok-money-calculator" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Money Calculator
              </Link>
            </li>
            <li>
              <Link href="/tiktok-engagement-calculator" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Engagement Rate
              </Link>
            </li>
            <li>
              <Link href="/tiktok-caption-generator" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Caption Generator
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors">
                Content Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Policies */}
        <div className="lg:col-span-3 flex flex-col gap-2.5">
          <h4 className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--ink-primary)]">
            Legal &amp; Protection
          </h4>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1.5 text-xs text-[var(--ink-secondary)]">
            <Link href="/terms-of-service" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Disclaimer
            </Link>
            <Link href="/legal-notice" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Legal Notice
            </Link>
            <Link href="/copyright-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Copyright &amp; DMCA
            </Link>
            <Link href="/tiktok-independence-disclaimer" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Independence
            </Link>
            <Link href="/public-content-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Public Content
            </Link>
            <Link href="/content-removal-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Content Removal
            </Link>
            <Link href="/acceptable-use-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Acceptable Use
            </Link>
            <Link href="/security-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Security Policy
            </Link>
            <Link href="/service-availability-policy" className="hover:text-[var(--accent-primary-text)] font-medium transition-colors truncate">
              Availability
            </Link>
          </div>
        </div>
      </div>

      {/* Bright Aqua-Mist Bottom Legal Strip */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--surface-tint-aqua)] py-4 px-4 sm:px-6">
        <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-[var(--ink-secondary)] font-medium">
          <p className="text-[var(--ink-primary)] font-bold">
            © {new Date().getFullYear()} TikProfilesViewer.com. All rights reserved.
          </p>
          <p className="text-center md:text-end max-w-xl text-[var(--ink-muted)]">
            Disclaimer: Tik Profiles Viewer is an independent web utility and is not affiliated with, endorsed by, or associated with TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
