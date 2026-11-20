'use client';

import Link from 'next/link';

export default function Footer() {
  const handleGoHome = () => {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tpv:reset-home'));
    }
  };

  return (
    <footer className="w-full border-t border-[var(--border-subtle)] hero-studio-backdrop text-[var(--ink-secondary)] text-xs mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
        {/* Col 1: Brand & Overview */}
        <div className="lg:col-span-4 flex flex-col gap-3.5">
          <Link
            href="/"
            onClick={handleGoHome}
            className="flex items-center gap-2.5 text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] transition-colors font-bold text-sm select-none w-fit rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
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
            Free web utility to inspect public TikTok profiles anonymously, stream videos smoothly, and download clean HD MP4 videos and MP3 audio tracks.
          </p>

          <div className="flex items-center gap-2.5 text-xs pt-1 text-[var(--ink-secondary)]">
            <Link
              href="/about-tiktok-profile-viewer"
              className="px-2.5 py-1 rounded-full bg-[var(--surface-elevated)]/80 border border-[var(--border-subtle)] hover:text-[var(--ink-primary)] hover:border-[var(--border-strong)] font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/how-to-use-tiktok-profile-viewer"
              className="px-2.5 py-1 rounded-full bg-[var(--surface-elevated)]/80 border border-[var(--border-subtle)] hover:text-[var(--ink-primary)] hover:border-[var(--border-strong)] font-medium transition-colors"
            >
              How to use
            </Link>
            <Link
              href="/creators"
              className="px-2.5 py-1 rounded-full bg-[var(--surface-elevated)]/80 border border-[var(--border-subtle)] hover:text-[var(--ink-primary)] hover:border-[var(--border-strong)] font-medium transition-colors"
            >
              Top Creators
            </Link>
          </div>
        </div>

        {/* Col 2: Free Tools */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-primary)]">
            Free Downloader Tools
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--ink-secondary)]">
            <li>
              <Link href="/tiktok-video-downloader" className="hover:text-[var(--ink-primary)] transition-colors">
                HD Video Downloader
              </Link>
            </li>
            <li>
              <Link href="/tiktok-mp3-downloader" className="hover:text-[var(--ink-primary)] transition-colors">
                Audio MP3 Extractor
              </Link>
            </li>
            <li>
              <Link href="/tiktok-profile-viewer" className="hover:text-[var(--ink-primary)] transition-colors">
                Anonymous Profile Viewer
              </Link>
            </li>
            <li>
              <Link href="/tiktok-story-downloader" className="hover:text-[var(--ink-primary)] transition-colors">
                Story Downloader (24h)
              </Link>
            </li>
            <li>
              <Link href="/tiktok-photo-downloader" className="hover:text-[var(--ink-primary)] transition-colors">
                Photo &amp; Slideshow Downloader
              </Link>
            </li>
            <li>
              <Link href="/tiktok-watermark-remover" className="hover:text-[var(--ink-primary)] transition-colors">
                Watermark Remover
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Creator Calculators & Growth */}
        <div className="lg:col-span-2 flex flex-col gap-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-primary)]">
            Creator Growth
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-[var(--ink-secondary)]">
            <li>
              <Link href="/tiktok-analytics" className="hover:text-[var(--ink-primary)] transition-colors">
                Viral Analytics
              </Link>
            </li>
            <li>
              <Link href="/tiktok-money-calculator" className="hover:text-[var(--ink-primary)] transition-colors">
                Money Calculator
              </Link>
            </li>
            <li>
              <Link href="/tiktok-engagement-calculator" className="hover:text-[var(--ink-primary)] transition-colors">
                Engagement Rate
              </Link>
            </li>
            <li>
              <Link href="/tiktok-caption-generator" className="hover:text-[var(--ink-primary)] transition-colors">
                Caption Generator
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-[var(--ink-primary)] transition-colors">
                Content Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Policies */}
        <div className="lg:col-span-3 flex flex-col gap-3">
          <h4 className="text-[11px] font-semibold uppercase tracking-wider text-[var(--ink-primary)]">
            Legal &amp; Protection
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs text-[var(--ink-secondary)]">
            <Link href="/terms-of-service" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Disclaimer
            </Link>
            <Link href="/legal-notice" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Legal Notice
            </Link>
            <Link href="/copyright-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Copyright &amp; DMCA
            </Link>
            <Link href="/tiktok-independence-disclaimer" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Independence
            </Link>
            <Link href="/public-content-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Public Content
            </Link>
            <Link href="/content-removal-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Content Removal
            </Link>
            <Link href="/acceptable-use-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Acceptable Use
            </Link>
            <Link href="/security-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Security Policy
            </Link>
            <Link href="/service-availability-policy" className="hover:text-[var(--ink-primary)] transition-colors truncate">
              Availability
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Legal Strip */}
      <div className="border-t border-[var(--border-subtle)] bg-[var(--surface-elevated)]/70 backdrop-blur-xs py-4 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-[11px] text-[var(--ink-muted)]">
          <p className="text-[var(--ink-primary)] font-medium">
            © {new Date().getFullYear()} TikProfilesViewer.com. All rights reserved.
          </p>
          <p className="text-center md:text-end max-w-xl">
            Disclaimer: Tik Profiles Viewer is an independent web utility and is not affiliated with, endorsed by, or associated with TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}