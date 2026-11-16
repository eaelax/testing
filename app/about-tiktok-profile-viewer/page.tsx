import type { Metadata } from 'next';
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

export const metadata: Metadata = {
  title: 'About Tik Profiles Viewer - Free TikTok Profile Viewer & Downloader',
  description:
    'Learn about Tik Profiles Viewer on TikProfilesViewer.com. Free, anonymous tool to inspect TikTok profiles, watch videos without lag, and download HD videos and MP3 sounds without watermark.',
  openGraph: {
    title: 'About Tik Profiles Viewer - Free TikTok Profile Viewer & Downloader',
    description:
      'Learn about Tik Profiles Viewer on TikProfilesViewer.com. Free, anonymous tool to inspect TikTok profiles and download HD videos without watermark.',
    url: 'https://tikprofilesviewer.com/about-tiktok-profile-viewer',
    siteName: 'Tik Profiles Viewer',
    type: 'article',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/about-tiktok-profile-viewer',
  },
};

export default function AboutPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'About Tik Profiles Viewer',
    description:
      'Information about Tik Profiles Viewer, an online tool for viewing TikTok profiles and downloading watermark-free videos.',
    url: 'https://tikprofilesviewer.com/about-tiktok-profile-viewer',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumbs items={[{ label: 'About Tik Profiles Viewer' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto my-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            About Tik Profiles Viewer
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
            Tik Profiles Viewer (TikProfilesViewer.com) is a free web service built to let anyone inspect public TikTok profiles, watch videos smoothly, and download original HD videos without watermarks.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center">
              <Zap className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">Fast Video Playback</h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Our player buffers videos instantly so you can watch content without stuttering, loading screens, or aggressive app popups.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/40 flex items-center justify-center">
              <Download className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">Clean HD Downloads</h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              Download any public TikTok video in crystal-clear MP4 format with zero TikTok logo watermark, completely free of charge.
            </p>
          </div>

          <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[var(--surface-canvas)] text-[var(--ink-primary)] border border-[var(--border-strong)] flex items-center justify-center">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">100% Anonymous &amp; Private</h2>
            <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
              You never need an account or login. Creators will never know you watched their videos, saved sounds, or checked their follower numbers.
            </p>
          </div>
        </div>

        {/* Detailed Mission and Capabilities */}
        <section className="bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] p-5 sm:p-7 space-y-6 my-6">
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)] mb-2">
              Why We Built TikProfilesViewer.com
            </h2>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              TikTok is one of the most vibrant creative platforms in the world, but browsing profiles often requires downloading mobile apps or creating accounts. We created Tik Profiles Viewer to give users an effortless, fast, and privacy-respecting way to view public profiles directly in any web browser.
            </p>
          </div>

          <div className="border-t border-[var(--border-subtle)] pt-5">
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-3">
              What You Can Do on Tik Profiles Viewer:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span><strong className="text-[var(--ink-primary)]">Search Any Profile:</strong> Find creators by username and see verified status, follower counts, and bio.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span><strong className="text-[var(--ink-primary)]">Continuous Video Grid:</strong> Load all public videos by clicking Show More Videos until you reach the very first upload.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span><strong className="text-[var(--ink-primary)]">HD Watermark-Free MP4:</strong> Save the original high-resolution video directly to your phone or computer.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span><strong className="text-[var(--ink-primary)]">MP3 Audio Extractor:</strong> Download trending sounds and original music tracks in clean MP3 format.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span><strong className="text-[var(--ink-primary)]">High-Resolution Avatar Saver:</strong> Download profile pictures in full resolution with one click.</span>
              </li>
              <li className="flex items-start gap-2 text-xs text-[var(--ink-secondary)]">
                <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
                <span><strong className="text-[var(--ink-primary)]">Universal Browser Support:</strong> Works smoothly on iPhone, iPad, Android, Windows, Mac, and Linux.</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-[var(--border-subtle)] pt-5">
            <h3 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] mb-2">
              Our Safety and Privacy Promise
            </h3>
            <p className="text-xs sm:text-sm text-[var(--ink-secondary)] leading-relaxed">
              We do not track your searches, store your browsing history, or require personal data. All profile data displayed is fetched directly from public information published on TikTok. We respect creator rights and only facilitate access to content that has been made publicly available.
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
                <div className="font-bold text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">HD Video Downloader</div>
                <div className="text-[11px] text-[var(--ink-muted)]">Save MP4 with no watermark</div>
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
                <div className="font-bold text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">Audio Downloader</div>
                <div className="text-[11px] text-[var(--ink-muted)]">Save original MP3 tracks</div>
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
                <div className="font-bold text-xs text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors">Browse Creators</div>
                <div className="text-[11px] text-[var(--ink-muted)]">Explore top TikTok stars</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-[var(--ink-muted)] group-hover:text-[var(--accent-primary-text)] group-hover:translate-x-0.5 transition-all rtl:rotate-180" />
          </Link>
        </div>

        {/* Compact CTA Section */}
        <div className="p-6 sm:p-7 rounded-xl bg-[var(--accent-dark)] text-[var(--accent-contrast)] text-center flex flex-col items-center gap-3 my-6 border border-[var(--accent-dark)]">
          <h2 className="text-lg sm:text-xl font-bold">
            Ready to view any TikTok profile?
          </h2>
          <p className="text-xs sm:text-sm text-[var(--accent-contrast)]/85 max-w-lg">
            Start right now. Search any username to view followers, watch videos, or save HD clips without watermarks.
          </p>
          <Link
            href="/"
            className="h-9 px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold text-xs inline-flex items-center justify-center transition-all"
          >
            Open Profile Viewer
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}