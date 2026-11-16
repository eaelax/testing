import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  Eye,
  Play,
  Download,
  CheckCircle2,
  ChevronDown,
  HelpCircle,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import HowToUseSteps from '@/components/HowToUseSteps';

export const metadata: Metadata = {
  title: 'How to Use Tik Profiles Viewer - Easy Step-by-Step Guide',
  description:
    'Learn how to use Tik Profiles Viewer on TikProfilesViewer.com. Step-by-step guide to inspect TikTok profiles, watch videos without lag, and download watermark-free HD videos and MP3 music.',
  openGraph: {
    title: 'How to Use Tik Profiles Viewer - Easy Step-by-Step Guide',
    description:
      'Learn how to use Tik Profiles Viewer to inspect TikTok profiles anonymously and download watermark-free HD videos on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer',
    siteName: 'Tik Profiles Viewer',
    type: 'article',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer',
  },
};

export default function HowToUsePage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Use Tik Profiles Viewer to View and Download TikTok Content',
    description:
      'Follow these simple steps to view TikTok profiles anonymously and download watermark-free HD videos.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Enter Username',
        text: 'Type any public TikTok username into the search bar and click Search.',
        url: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer#step-1',
      },
      {
        '@type': 'HowToStep',
        name: 'Browse Profile and Videos',
        text: 'Inspect the creator follower count, likes, bio, and video thumbnail grid.',
        url: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer#step-2',
      },
      {
        '@type': 'HowToStep',
        name: 'Hover and Play Video',
        text: 'Hover over any video to see the play button, and click it to open the player modal.',
        url: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer#step-3',
      },
      {
        '@type': 'HowToStep',
        name: 'Load All Profile Videos',
        text: 'Click SHOW MORE VIDEOS at the bottom of the grid to load 15 more videos until reaching the last video.',
        url: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer#step-4',
      },
      {
        '@type': 'HowToStep',
        name: 'Download HD Video or MP3 Audio',
        text: 'Click Download HD Video to save the clean MP4 file without watermark, or Download Audio (MP3) to save the sound.',
        url: 'https://tikprofilesviewer.com/how-to-use-tiktok-profile-viewer#step-5',
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        <Breadcrumbs items={[{ label: 'How to Use Tik Profiles Viewer' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-2xl mx-auto my-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            How to Use Tik Profiles Viewer
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
            Follow this simple guide to search any public TikTok profile, stream videos without stutter, and download watermark-free HD videos on TikProfilesViewer.com.
          </p>
        </div>

        {/* 3-Step Visual Mockup Cards */}
        <div className="my-6">
          <HowToUseSteps />
        </div>

        {/* In-depth Steps Guide */}
        <div className="space-y-3.5 my-7">
          {/* Step 1 */}
          <div
            id="step-1"
            className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-black text-sm flex items-center justify-center shrink-0">
              1
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[var(--accent-primary-text)]" />
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Search Any TikTok Username
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                Go to the homepage and locate the search bar. Enter any public TikTok username (for example, <code className="bg-[var(--surface-canvas)] border border-[var(--border-subtle)] px-1.5 py-0.5 rounded text-[var(--ink-primary)] font-mono text-xs">khaby.lame</code> or <code className="bg-[var(--surface-canvas)] border border-[var(--border-subtle)] px-1.5 py-0.5 rounded text-[var(--ink-primary)] font-mono text-xs">@charlidamelio</code>). Then click the <strong className="text-[var(--accent-primary-text)]">Search</strong> button.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="step-2"
            className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-black text-sm flex items-center justify-center shrink-0">
              2
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Inspect Profile Details and Live Stats
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                The profile container displays the creator’s verified badge, bio, account status, follower count, total likes, following count, and total videos. You can also click <strong className="text-[var(--ink-primary)]">Avatar</strong> to save the creator’s high-resolution profile photo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            id="step-3"
            className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-black text-sm flex items-center justify-center shrink-0">
              3
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[var(--accent-primary-text)]" />
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Hover to Preview &amp; Click to Play
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                Move your cursor over any video card to see the play button, and click any card to launch the video player modal. Check the view count, likes, and shares separated clearly on each card.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div
            id="step-4"
            className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-black text-sm flex items-center justify-center shrink-0">
              4
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Click SHOW MORE VIDEOS to Fetch All Videos
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                The player initially displays the first batch of videos. Click the <strong className="text-[var(--ink-primary)] uppercase">SHOW MORE VIDEOS</strong> button at the bottom of the grid to load 15 more videos. You can continue clicking as many times as you like until every video from the account has been loaded.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div
            id="step-5"
            className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] flex flex-col sm:flex-row gap-4 items-start"
          >
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] font-black text-sm flex items-center justify-center shrink-0">
              5
            </div>
            <div className="flex-1 space-y-1.5">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Download Watermark-Free HD Video or MP3 Audio
                </h2>
              </div>
              <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                Inside the player modal, click <strong className="text-[var(--ink-primary)]">Download HD Video</strong> to save the original MP4 video without any TikTok watermark logo. If you only want the background music or voice sound, click <strong className="text-[var(--ink-primary)]">Download Audio (MP3)</strong> to save it directly to your device.
              </p>
            </div>
          </div>
        </div>

        {/* Helpful Tips Section */}
        <section className="bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] p-5 sm:p-6 my-6">
          <div className="flex items-center gap-2 mb-3.5">
            <HelpCircle className="w-4 h-4 text-[var(--accent-primary-text)]" />
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
              Helpful Tips for Best Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-[var(--ink-secondary)]">
            <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
              <span><strong className="text-[var(--ink-primary)]">No @ symbol needed:</strong> You can type the username with or without the @ sign. Both work equally fast.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
              <span><strong className="text-[var(--ink-primary)]">Works on iPhone and Android:</strong> Videos will download directly to your Files or Downloads folder without special apps.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
              <span><strong className="text-[var(--ink-primary)]">Full Screen Video:</strong> Use the fullscreen toggle in the bottom right of the video player to watch videos in full size.</span>
            </div>
            <div className="p-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0 mt-0.5" />
              <span><strong className="text-[var(--ink-primary)]">Trending Profiles:</strong> Use the quick links right beneath the search bar to jump to popular creators in one click.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-6 sm:p-7 rounded-xl bg-[var(--accent-dark)] text-[var(--accent-contrast)] text-center flex flex-col items-center gap-3 my-6 border border-[var(--accent-dark)]">
          <h2 className="text-lg sm:text-xl font-bold">
            Try Tik Profiles Viewer Now
          </h2>
          <p className="text-xs sm:text-sm text-[var(--accent-contrast)]/85 max-w-lg">
            Search any public TikTok account, stream videos instantly, and save HD videos without watermarks.
          </p>
          <Link
            href="/"
            className="h-9 px-5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold text-xs inline-flex items-center justify-center transition-all"
          >
            Start Viewing Profiles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}