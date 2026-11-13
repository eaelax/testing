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
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        <Breadcrumbs items={[{ label: 'How to Use Tik Profiles Viewer' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto my-8">
          <h1 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            How to Use Tik Profiles Viewer
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-[#4B5563] mt-4 leading-relaxed">
            Follow this simple guide to search any public TikTok profile, stream videos without stutter, and download watermark-free HD videos on TikProfilesViewer.com.
          </p>
        </div>

        {/* 3-Step Visual Mockup Cards */}
        <div className="my-8">
          <HowToUseSteps />
        </div>

        {/* In-depth Steps Guide */}
        <div className="space-y-6 my-10">
          {/* Step 1 */}
          <div
            id="step-1"
            className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#FFFFFF] font-black text-base flex items-center justify-center shrink-0">
              1
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#D61C47]" />
                <h2 className="text-base sm:text-lg font-bold text-[#111827]">
                  Search Any TikTok Username
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Go to the homepage and locate the search bar. Enter any public TikTok username (for example, <code className="bg-[#F8F9FA] border border-[#E5E7EB] px-1.5 py-0.5 rounded text-[#111827] font-mono text-xs">khaby.lame</code> or <code className="bg-[#F8F9FA] border border-[#E5E7EB] px-1.5 py-0.5 rounded text-[#111827] font-mono text-xs">@charlidamelio</code>). Then click the <strong className="text-[#111827]">Search</strong> button.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="step-2"
            className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#FFFFFF] font-black text-base flex items-center justify-center shrink-0">
              2
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-[#334155]" />
                <h2 className="text-base sm:text-lg font-bold text-[#111827]">
                  Inspect Profile Details and Live Stats
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                The profile container displays the creator’s verified badge, bio, account status, follower count, total likes, following count, and total videos. You can also click <strong className="text-[#111827]">Avatar</strong> to save the creator’s high-resolution profile photo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            id="step-3"
            className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#FFFFFF] font-black text-base flex items-center justify-center shrink-0">
              3
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#D61C47]" />
                <h2 className="text-base sm:text-lg font-bold text-[#111827]">
                  Hover to Preview &amp; Click to Play
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Move your cursor over any video card to see the hover play button. Check the view count, likes, and shares separated by clear spacing. Click any card to launch the video player modal.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div
            id="step-4"
            className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#FFFFFF] font-black text-base flex items-center justify-center shrink-0">
              4
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-[#334155]" />
                <h2 className="text-base sm:text-lg font-bold text-[#111827]">
                  Click SHOW MORE VIDEOS to Fetch All Videos
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                The player initially displays the first batch of videos. Click the <strong className="text-[#111827] uppercase">SHOW MORE VIDEOS</strong> button at the bottom of the grid to load 15 more videos. You can continue clicking as many times as you like until every video from the account has been loaded.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div
            id="step-5"
            className="p-6 sm:p-8 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-[#111827] text-[#FFFFFF] font-black text-base flex items-center justify-center shrink-0">
              5
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-[#0F766E]" />
                <h2 className="text-base sm:text-lg font-bold text-[#111827]">
                  Download Watermark-Free HD Video or MP3 Audio
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Inside the player modal, click <strong className="text-[#111827]">Download HD Video</strong> to save the original MP4 video without any TikTok watermark logo. If you only want the background music or voice sound, click <strong className="text-[#111827]">Download Audio (MP3)</strong> to save it directly to your device.
              </p>
            </div>
          </div>
        </div>

        {/* Helpful Tips Section */}
        <section className="bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 my-8">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-[#111827]" />
            <h2 className="text-base sm:text-lg font-bold text-[#111827]">
              Helpful Tips for Best Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-[#4B5563]">
            <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span><strong className="text-[#111827]">No @ symbol needed:</strong> You can type the username with or without the @ sign. Both work equally fast.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span><strong className="text-[#111827]">Works on iPhone and Android:</strong> Videos will download directly to your Files or Downloads folder without special apps.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span><strong className="text-[#111827]">Full Screen Video:</strong> Use the fullscreen toggle in the bottom right of the video player to watch videos in full size.</span>
            </div>
            <div className="p-4 rounded-lg bg-[#F8F9FA] border border-[#E5E7EB] flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#0F766E] shrink-0 mt-0.5" />
              <span><strong className="text-[#111827]">Trending Profiles:</strong> Use the quick links right beneath the search bar to jump to popular creators in one click.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-xl bg-[#111827] text-[#FFFFFF] text-center flex flex-col items-center gap-4 my-8">
          <h2 className="text-xl sm:text-2xl font-bold text-[#FFFFFF]">
            Try Tik Profiles Viewer Now
          </h2>
          <p className="text-xs sm:text-sm text-[#D1D5DB] max-w-lg">
            Search any public TikTok account, stream videos instantly, and save HD videos without watermarks.
          </p>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg bg-[#D61C47] hover:bg-[#B9153B] text-[#FFFFFF] font-bold text-xs sm:text-sm transition-colors"
          >
            Start Viewing Profiles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}
