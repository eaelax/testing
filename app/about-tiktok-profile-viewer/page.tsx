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
    <div className="min-h-screen flex flex-col bg-[#eef2f6] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />

        <Breadcrumbs items={[{ label: 'About Tik Profiles Viewer' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto my-8">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            About Tik Profiles Viewer
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 mt-4 leading-relaxed">
            Tik Profiles Viewer (TikProfilesViewer.com) is a free web service built to let anyone inspect public TikTok profiles, watch videos smoothly, and download original HD videos without watermarks.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 my-10">
          <div className="p-6 rounded-xl bg-white border border-slate-300/80 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950">Fast Video Playback</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Our player buffers videos instantly so you can watch content without stuttering, loading screens, or aggressive app popups.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-300/80 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-rose-100 text-[#e11d48] flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950">Clean HD Downloads</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Download any public TikTok video in crystal-clear MP4 format with zero TikTok logo watermark, completely free of charge.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-300/80 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950">100% Anonymous &amp; Private</h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              You never need an account or login. Creators will never know you watched their videos, saved sounds, or checked their follower numbers.
            </p>
          </div>
        </div>

        {/* Detailed Mission and Capabilities */}
        <section className="bg-white rounded-xl border border-slate-300/80 p-6 sm:p-10 shadow-xs space-y-8 my-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
              Why We Built TikProfilesViewer.com
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              TikTok is one of the most vibrant creative platforms in the world, but browsing profiles often requires downloading mobile apps or creating accounts. We created Tik Profiles Viewer to give users an effortless, fast, and privacy-respecting way to view public profiles directly in any web browser.
            </p>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-4">
              What You Can Do on Tik Profiles Viewer:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Search Any Profile:</strong> Find creators by username and see verified status, follower counts, and bio.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Continuous Video Grid:</strong> Load all public videos by clicking Show More Videos until you reach the very first upload.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>HD Watermark-Free MP4:</strong> Save the original high-resolution video directly to your phone or computer.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>MP3 Audio Extractor:</strong> Download trending sounds and original music tracks in clean MP3 format.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>High-Resolution Avatar Saver:</strong> Download profile pictures in full resolution with one click.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Universal Browser Support:</strong> Works smoothly on iPhone, iPad, Android, Windows, Mac, and Linux.</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-200 pt-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-3">
              Our Safety and Privacy Promise
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              We do not track your searches, store your browsing history, or require personal data. All profile data displayed is fetched directly from public information published on TikTok. We respect creator rights and only facilitate access to content that has been made publicly available.
            </p>
          </div>
        </section>

        {/* Quick Links to Other Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <Link
            href="/tiktok-video-downloader"
            className="p-5 rounded-xl bg-white border border-slate-300/80 hover:border-[#e11d48]/60 shadow-xs flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-rose-100 text-[#e11d48] flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-950 group-hover:text-[#e11d48] transition-colors">HD Video Downloader</div>
                <div className="text-[11px] text-slate-600">Save MP4 with no watermark</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#e11d48] group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/tiktok-mp3-downloader"
            className="p-5 rounded-xl bg-white border border-slate-300/80 hover:border-[#e11d48]/60 shadow-xs flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-950 group-hover:text-[#e11d48] transition-colors">Audio Downloader</div>
                <div className="text-[11px] text-slate-600">Save original MP3 tracks</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#e11d48] group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/creators"
            className="p-5 rounded-xl bg-white border border-slate-300/80 hover:border-[#e11d48]/60 shadow-xs flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-950 group-hover:text-[#e11d48] transition-colors">Browse Creators</div>
                <div className="text-[11px] text-slate-600">Explore top TikTok stars</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-500 group-hover:text-[#e11d48] group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-950 text-white text-center flex flex-col items-center gap-4 my-8 shadow-md border border-slate-800">
          <h2 className="text-xl sm:text-2xl font-bold">
            Ready to view any TikTok profile?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
            Start right now. Search any username to view followers, watch videos, or save HD clips without watermarks.
          </p>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-xl bg-[#e11d48] hover:bg-[#be123c] text-white font-bold text-xs sm:text-sm shadow-sm transition-all"
          >
            Open Profile Viewer
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
