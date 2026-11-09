import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-200 bg-white text-slate-600 text-xs mt-auto">
      {/* 1 Unified Footer Grid */}
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
        {/* Col 1: Brand, Logo & About (lg:col-span-4) */}
        <div className="lg:col-span-4 flex flex-col gap-3.5">
          <Link href="/" className="flex items-center gap-2.5 text-slate-900 font-bold text-base select-none">
            <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
                alt="Tik Profiles Viewer Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <span>Tik Profiles Viewer</span>
          </Link>

          <p className="text-slate-500 leading-relaxed text-xs max-w-sm">
            Free web service to view public TikTok profiles anonymously, watch videos without lag, and download watermark-free HD videos and MP3 sounds.
          </p>

          <div className="flex items-center gap-3 text-xs pt-1 text-slate-700">
            <Link href="/about-tiktok-profile-viewer" className="hover:text-slate-950 font-medium transition-colors underline underline-offset-2">
              About
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/how-to-use-tiktok-profile-viewer" className="hover:text-slate-950 font-medium transition-colors underline underline-offset-2">
              How to use
            </Link>
            <span className="text-slate-300">•</span>
            <Link href="/creators" className="hover:text-slate-950 font-medium transition-colors underline underline-offset-2">
              Top Creators
            </Link>
          </div>
        </div>

        {/* Col 2: Free Tools (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Free Downloader Tools
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-500">
            <li>
              <Link href="/tiktok-video-downloader" className="hover:text-slate-900 transition-colors">
                HD Video Downloader
              </Link>
            </li>
            <li>
              <Link href="/tiktok-mp3-downloader" className="hover:text-slate-900 transition-colors">
                Audio MP3 Extractor
              </Link>
            </li>
            <li>
              <Link href="/tiktok-profile-viewer" className="hover:text-slate-900 transition-colors">
                Anonymous Profile Viewer
              </Link>
            </li>
            <li>
              <Link href="/tiktok-story-downloader" className="hover:text-slate-900 transition-colors">
                Story Downloader (24h)
              </Link>
            </li>
            <li>
              <Link href="/tiktok-photo-downloader" className="hover:text-slate-900 transition-colors">
                Photo &amp; Slideshow Downloader
              </Link>
            </li>
            <li>
              <Link href="/tiktok-watermark-remover" className="hover:text-slate-900 transition-colors">
                Watermark Remover
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 3: Creator Calculators & Growth (lg:col-span-2) */}
        <div className="lg:col-span-2 flex flex-col gap-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Creator Growth
          </h4>
          <ul className="flex flex-col gap-2 text-xs text-slate-500">
            <li>
              <Link href="/tiktok-analytics" className="hover:text-slate-900 transition-colors">
                Viral Analytics
              </Link>
            </li>
            <li>
              <Link href="/tiktok-money-calculator" className="hover:text-slate-900 transition-colors">
                Money Calculator
              </Link>
            </li>
            <li>
              <Link href="/tiktok-engagement-calculator" className="hover:text-slate-900 transition-colors">
                Engagement Rate
              </Link>
            </li>
            <li>
              <Link href="/tiktok-caption-generator" className="hover:text-slate-900 transition-colors">
                Caption Generator
              </Link>
            </li>
            <li>
              <Link href="/categories" className="hover:text-slate-900 transition-colors">
                Content Categories
              </Link>
            </li>
          </ul>
        </div>

        {/* Col 4: Legal & Policies (lg:col-span-3) */}
        <div className="lg:col-span-3 flex flex-col gap-2.5">
          <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
            Legal &amp; Protection
          </h4>
          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-slate-500">
            <Link href="/terms-of-service" className="hover:text-slate-900 transition-colors truncate">
              Terms of Service
            </Link>
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors truncate">
              Privacy Policy
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-900 transition-colors truncate">
              Cookie Policy
            </Link>
            <Link href="/disclaimer" className="hover:text-slate-900 transition-colors truncate">
              Disclaimer
            </Link>
            <Link href="/legal-notice" className="hover:text-slate-900 transition-colors truncate">
              Legal Notice
            </Link>
            <Link href="/copyright-policy" className="hover:text-slate-900 transition-colors truncate">
              Copyright &amp; DMCA
            </Link>
            <Link href="/tiktok-independence-disclaimer" className="hover:text-slate-900 transition-colors truncate">
              Independence
            </Link>
            <Link href="/public-content-policy" className="hover:text-slate-900 transition-colors truncate">
              Public Content
            </Link>
            <Link href="/content-removal-policy" className="hover:text-slate-900 transition-colors truncate">
              Content Removal
            </Link>
            <Link href="/acceptable-use-policy" className="hover:text-slate-900 transition-colors truncate">
              Acceptable Use
            </Link>
            <Link href="/security-policy" className="hover:text-slate-900 transition-colors truncate">
              Security Policy
            </Link>
            <Link href="/service-availability-policy" className="hover:text-slate-900 transition-colors truncate">
              Availability
            </Link>
          </div>
        </div>
      </div>

      {/* Unified Bottom Bar */}
      <div className="border-t border-slate-100 py-6 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1080px] mx-auto flex flex-col md:flex-row items-center justify-between gap-3 text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} TikProfilesViewer.com. All rights reserved.</p>
          <p className="text-center md:text-right max-w-xl text-slate-400">
            Disclaimer: Tik Profiles Viewer is an independent web utility and is not affiliated with, endorsed by, or associated with TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  );
}
