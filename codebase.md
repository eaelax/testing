# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792640685440_e8dd4cf2.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792642072548_a4f89038.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792642082570_2741ccee.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792642091097_0afd0891.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792728305181_5f9d7540.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792729210316_afa645d3.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1792729283403_2ecae8ac.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793759531628_b8994947.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793759537560_962bfbfe.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793759542836_30fb87f2.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793759548507_f8b92a45.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793759553176_80fcd550.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793986979792_2cc94871.jpg

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793988585649_c0b85374.jpg

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793988597356_c9af2d2c.png

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793988607741_447adc6f.jpg

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793999161971_d1cea36e.jpg

This is a binary file of the type: Image

# .aistudio\artifacts\brain\61c8909e-de2e-43a3-b4f6-c0eceb3a08b6\.tempmediaStorage\media_1793999173355_2bae3e06.png

This is a binary file of the type: Image

# .eslintrc.json

```json
{
  "extends": "next"
}

```

# .gitignore

```
node_modules/
.next/
coverage/
.DS_Store
*.log
.env*
!.env.example

```

# app\about-tiktok-profile-viewer\page.tsx

```tsx
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
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
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
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
            Tik Profiles Viewer (TikProfilesViewer.com) is a free web service built to let anyone inspect public TikTok profiles, watch videos smoothly, and download original HD videos without watermarks.
          </p>
        </div>

        {/* Core Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 my-10">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#01ebe4]/20 text-slate-900 flex items-center justify-center">
              <Zap className="w-5 h-5 text-slate-900" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950">Fast Video Playback</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Our player buffers videos instantly so you can watch content without stuttering, loading screens, or aggressive app popups.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#fe2858]/15 text-[#fe2858] flex items-center justify-center">
              <Download className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950">Clean HD Downloads</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Download any public TikTok video in crystal-clear MP4 format with zero TikTok logo watermark, completely free of charge.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h2 className="text-base sm:text-lg font-bold text-slate-950">100% Anonymous &amp; Private</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              You never need an account or login. Creators will never know you watched their videos, saved sounds, or checked their follower numbers.
            </p>
          </div>
        </div>

        {/* Detailed Mission and Capabilities */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-10 shadow-xs space-y-8 my-8">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-950 mb-3">
              Why We Built TikProfilesViewer.com
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              TikTok is one of the most vibrant creative platforms in the world, but browsing profiles often requires downloading mobile apps or creating accounts. We created Tik Profiles Viewer to give users an effortless, fast, and privacy-respecting way to view public profiles directly in any web browser.
            </p>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-4">
              What You Can Do on Tik Profiles Viewer:
            </h3>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Search Any Profile:</strong> Find creators by username and see verified status, follower counts, and bio.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Continuous Video Grid:</strong> Load all public videos by clicking Show More Videos until you reach the very first upload.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>HD Watermark-Free MP4:</strong> Save the original high-resolution video directly to your phone or computer.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>MP3 Audio Extractor:</strong> Download trending sounds and original music tracks in clean MP3 format.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>High-Resolution Avatar Saver:</strong> Download profile pictures in full resolution with one click.</span>
              </li>
              <li className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Universal Browser Support:</strong> Works smoothly on iPhone, iPad, Android, Windows, Mac, and Linux.</span>
              </li>
            </ul>
          </div>

          <div className="border-t border-slate-100 pt-6">
            <h3 className="text-base sm:text-lg font-bold text-slate-950 mb-3">
              Our Safety and Privacy Promise
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We do not track your searches, store your browsing history, or require personal data. All profile data displayed is fetched directly from public information published on TikTok. We respect creator rights and only facilitate access to content that has been made publicly available.
            </p>
          </div>
        </section>

        {/* Quick Links to Other Tools */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-8">
          <Link
            href="/tiktok-video-downloader"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                <Film className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900">HD Video Downloader</div>
                <div className="text-[11px] text-slate-500">Save MP4 with no watermark</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/tiktok-mp3-downloader"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                <Music className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900">Audio Downloader</div>
                <div className="text-[11px] text-slate-500">Save original MP3 tracks</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
          </Link>

          <Link
            href="/creators"
            className="p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 shadow-xs flex items-center justify-between group transition-all"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                <Users className="w-4 h-4" />
              </div>
              <div>
                <div className="font-bold text-xs sm:text-sm text-slate-900">Browse Creators</div>
                <div className="text-[11px] text-slate-500">Explore top TikTok stars</div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-0.5 transition-all" />
          </Link>
        </div>

        {/* CTA Section */}
        <div className="p-8 sm:p-10 rounded-xl bg-slate-900 text-white text-center flex flex-col items-center gap-4 my-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold">
            Ready to view any TikTok profile?
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
            Start right now. Search any username to view followers, watch videos, or save HD clips without watermarks.
          </p>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg bg-[#01ebe4] hover:bg-[#00d7d0] text-black font-bold text-xs sm:text-sm transition-all"
          >
            Open Profile Viewer
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

# app\acceptable-use-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy - Tik Profiles Viewer',
  description:
    'Acceptable Use Policy for Tik Profiles Viewer on TikProfilesViewer.com. Outlines prohibited conduct, network etiquette, anti-abuse rules, and scraping restrictions.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/acceptable-use-policy',
  },
};

export default function AcceptableUsePolicyPage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      subtitle="The rules of conduct, ethical standards, and prohibited technical practices required of all visitors on TikProfilesViewer.com."
      summary="Tik Profiles Viewer is engineered for peaceful, respectful, and lawful exploration of public social media content. We strictly prohibit harassment, stalking, automated scraping, denial-of-service abuse, and malicious activities."
      currentPath="/acceptable-use-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Purpose and Scope</h2>
        <p>
          This Acceptable Use Policy (&quot;AUP&quot;) governs all interactions with <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>). It applies to all users, automated systems, and network connections interacting with our web application, APIs, or infrastructure.
        </p>
        <p>
          Our mission is to maintain a safe, reliable, and respectful environment for creators and visitors alike. Violations of this policy may result in immediate IP banning, firewall rate-limiting, and referral to law enforcement where criminal misconduct occurs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Prohibited Personal Conduct</h2>
        <p>When utilizing our Service, you agree that you will NOT engage in any of the following activities:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Harassment &amp; Cyberbullying:</strong> Using our viewer to stalk, intimidate, bully, threaten, dox, or harass any individual creator or private person.
          </li>
          <li>
            <strong>Impersonation &amp; Deception:</strong> Impersonating another person, brand, or entity, or falsely representing that you are authorized to act on behalf of a public figure or company.
          </li>
          <li>
            <strong>Dissemination of Hate Speech:</strong> Downloading, repackaging, or redistributing content to promote violence, discrimination, or hate speech against protected classes.
          </li>
          <li>
            <strong>Child Exploitation:</strong> Accessing, searching for, or attempting to distribute any material depicting the sexual exploitation or abuse of minors. We maintain zero tolerance and immediately report such incidents to NCMEC and international law enforcement.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Prohibited Technical and Infrastructure Activities</h2>
        <p>To safeguard the stability, speed, and availability of our web service for everyone, you agree that you will NOT:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Aggressive Scraping:</strong> Deploy headless browsers, automated bots, scrapers, spider scripts, or high-frequency automated tools to harvest media, usernames, or metrics without our explicit written permission.
          </li>
          <li>
            <strong>Denial-of-Service (DoS/DDoS):</strong> Flood our servers with excessive network requests, execute stress testing, or take any action that overburdens or disables our cloud infrastructure.
          </li>
          <li>
            <strong>Vulnerability Exploitation:</strong> Probe, scan, or test the vulnerability of our application, servers, proxies, or networks, or breach security or authentication controls.
          </li>
          <li>
            <strong>Reverse Engineering:</strong> Decompile, reverse engineer, or attempt to extract the source code of our backend proxy routing mechanisms.
          </li>
          <li>
            <strong>Ad-Fraud and Bot Traffic:</strong> Generate simulated impressions, fraudulent clicks, or artificial traffic across any advertising placements hosted on the Website.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Monitoring and Enforcement</h2>
        <p>
          We employ automated edge firewall filters, Web Application Firewalls (WAF), and heuristic anomaly detection to monitor traffic patterns for malicious behavior.
        </p>
        <p>
          We reserve the right to temporarily or permanently block any IP address, subnet, or autonomous system number (ASN) that demonstrates activity violating this policy, without prior warning or liability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Reporting Abuse</h2>
        <p>
          If you observe any user or technical activity that violates this Acceptable Use Policy, please report it immediately to our security operations team at <strong>legal@tikprofilesviewer.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\admintiktok\page.tsx

```tsx
'use client';

import { useState, useEffect } from 'react';
import {
  Settings,
  Clock,
  Layout,
  Plus,
  Trash2,
  Check,
  RotateCcw,
  ExternalLink,
  Code2,
  Save,
  Eye,
  Megaphone,
  Lock,
  Unlock,
  LogOut,
  ShieldAlert,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import {
  useSiteSettings,
  SiteSettings,
  AdPlacement,
  DEFAULT_SETTINGS,
} from '@/lib/settings-store';
import DownloadCounterModal from '@/components/DownloadCounterModal';

const ADMIN_PASSWORD_DEFAULT = 'tiktok2026';
const ADMIN_STORAGE_KEY = 'tpv_admin_session_auth';

const PLACEMENT_OPTIONS = [
  { value: 'modal', label: 'Download Modal (Inside)' },
  { value: 'header', label: 'Header Top Banner' },
  { value: 'above_grid', label: 'Above Videos Grid' },
  { value: 'in_grid', label: 'In Video Grid (Card)' },
  { value: 'footer', label: 'Footer Top Banner' },
  { value: 'sidebar', label: 'Sidebar / Utility' },
];

const DIMENSION_OPTIONS = [
  { value: 'responsive', label: 'Responsive (Auto fluid)' },
  { value: '728x90', label: '728 x 90 (Leaderboard)' },
  { value: '300x250', label: '300 x 250 (Medium Rectangle)' },
  { value: '336x280', label: '336 x 280 (Large Rectangle)' },
  { value: '320x100', label: '320 x 100 (Mobile Banner)' },
  { value: '300x600', label: '300 x 600 (Half Page / Tower)' },
];

const SAMPLE_TEMPLATES = {
  adsense: `<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX" crossorigin="anonymous"></script>
<!-- TikProfiles Responsive Ad -->
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
     data-ad-slot="1234567890"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>`,
  banner: `<div style="background:#0f172a;color:#fff;border-radius:10px;padding:14px;text-align:center;">
  <span style="font-size:10px;background:#01ebe4;color:#000;padding:2px 8px;border-radius:4px;font-weight:700;">SPONSORED</span>
  <h4 style="margin:6px 0 2px;font-size:13px;font-weight:700;">Download TikTok Videos in Full 4K Quality</h4>
  <p style="margin:0;font-size:11px;color:#94a3b8;">Fast, unlimited, no watermark.</p>
</div>`,
};

export default function AdminTikTokPage() {
  const [settings, saveSettings] = useSiteSettings();
  const [localSettings, setLocalSettings] = useState<SiteSettings>(settings);
  const [activeTab, setActiveTab] = useState<'counter' | 'ads' | 'general'>('counter');
  const [savedToast, setSavedToast] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);

  // Authentication state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
    // Check session authentication on client mount
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined') {
        const isAuth = sessionStorage.getItem(ADMIN_STORAGE_KEY) === 'true';
        setIsAuthenticated(isAuth);
      }
      setCheckingAuth(false);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD_DEFAULT) {
      sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setAuthError(null);
      setPasswordInput('');
    } else {
      setAuthError('Incorrect administrator password. Please try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  // Handle Save
  const handleSave = () => {
    saveSettings(localSettings);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  // Reset to Defaults
  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
      setLocalSettings(DEFAULT_SETTINGS);
      saveSettings(DEFAULT_SETTINGS);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    }
  };

  // Add new ad
  const handleAddAd = () => {
    const newAd: AdPlacement = {
      id: `ad-${Date.now()}`,
      name: `Ad Slot ${localSettings.ads.length + 1}`,
      placement: 'modal',
      dimension: '300x250',
      code: SAMPLE_TEMPLATES.banner,
      enabled: true,
      notes: 'New ad placement',
    };
    setLocalSettings((prev) => ({
      ...prev,
      ads: [...prev.ads, newAd],
    }));
  };

  // Delete ad
  const handleDeleteAd = (id: string) => {
    setLocalSettings((prev) => ({
      ...prev,
      ads: prev.ads.filter((a) => a.id !== id),
    }));
  };

  // Update specific ad
  const handleUpdateAd = (id: string, updates: Partial<AdPlacement>) => {
    setLocalSettings((prev) => ({
      ...prev,
      ads: prev.ads.map((a) => (a.id === id ? { ...a, ...updates } : a)),
    }));
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fafbfc]">
        <div className="w-8 h-8 rounded-full border-2 border-slate-900 border-t-transparent animate-spin" />
      </div>
    );
  }

  // Password Protection Gate
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
        <Navbar />

        <main className="flex-1 max-w-md w-full mx-auto px-4 py-16 flex flex-col items-center justify-center">
          <div className="w-full bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8">
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center mb-4 mx-auto shadow-sm">
              <Lock className="w-6 h-6" />
            </div>

            <h1 className="text-xl sm:text-2xl font-black text-center text-slate-950 tracking-tight">
              Admin Access Protected
            </h1>

            <p className="text-xs sm:text-sm text-center text-slate-500 mt-1.5 leading-relaxed">
              Enter the administrator password to access Tik Profiles Viewer settings and ad controls.
            </p>

            <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Admin Password
                </label>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter administrator password..."
                  required
                  autoFocus
                  className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 bg-slate-50 text-slate-900 text-sm focus:outline-none focus:ring-2 focus:ring-[#01ebe4] focus:border-transparent transition-all"
                />
              </div>

              {authError && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-700 text-xs flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Admin Panel</span>
              </button>

              <div className="text-center pt-2">
                <span className="text-[11px] text-slate-400">
                  Default password: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono text-slate-700 font-bold">{ADMIN_PASSWORD_DEFAULT}</code>
                </span>
              </div>
            </form>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Admin Control Panel' }]} />

        {/* Top Header with Logout */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-6 pb-6 border-b border-slate-200">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-slate-900 text-white">
                <Settings className="w-5 h-5" />
              </span>
              <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                Website Admin Panel
              </h1>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Configure ads code &amp; placements and customize the download modal countdown.
            </p>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              type="button"
              onClick={handleReset}
              className="px-3.5 py-2 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="px-4 py-2 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-bold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3.5 py-2 rounded-xl border border-rose-200 bg-rose-50 hover:bg-rose-100 text-rose-700 font-semibold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Log out of admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>
        </div>

        {/* Save Toast */}
        {savedToast && (
          <div className="my-4 p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs sm:text-sm font-semibold flex items-center gap-2 shadow-xs animate-in fade-in duration-200">
            <Check className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Settings saved successfully! The live website is updated.</span>
          </div>
        )}

        {/* Navigation Tabs (PSEO tab removed) */}
        <div className="flex items-center gap-2 mt-6 border-b border-slate-200 overflow-x-auto pb-px">
          <button
            type="button"
            onClick={() => setActiveTab('counter')}
            className={`px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'counter'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Clock className="w-4 h-4" />
            <span>Download Modal &amp; Counter</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ads')}
            className={`px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'ads'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Layout className="w-4 h-4" />
            <span>Ads Placements &amp; Codes</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-700 font-mono">
              {localSettings.ads.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`px-4 py-2.5 font-bold text-xs sm:text-sm border-b-2 flex items-center gap-2 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'general'
                ? 'border-slate-900 text-slate-900'
                : 'border-transparent text-slate-500 hover:text-slate-900'
            }`}
          >
            <Megaphone className="w-4 h-4" />
            <span>General &amp; Brand</span>
          </button>
        </div>

        {/* TAB 1: Counter & Modal Settings */}
        {activeTab === 'counter' && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-5">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Download Counter Duration (Seconds)
                </h3>
                <p className="text-xs text-slate-500 mt-0.5 leading-relaxed">
                  How many seconds the countdown circle waits before the file download starts in the browser.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={localSettings.downloadCounterSeconds}
                  onChange={(e) =>
                    setLocalSettings((prev) => ({
                      ...prev,
                      downloadCounterSeconds: parseInt(e.target.value, 10) || 5,
                    }))
                  }
                  className="w-64 h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900"
                />
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-100 font-mono font-bold text-slate-900 text-sm">
                  <span>{localSettings.downloadCounterSeconds}</span>
                  <span className="text-xs text-slate-500">sec</span>
                </div>
              </div>

              {/* Quick Select Buttons */}
              <div className="flex items-center gap-2 pt-1 flex-wrap">
                {[2, 3, 5, 7, 10, 15].map((sec) => (
                  <button
                    key={sec}
                    type="button"
                    onClick={() =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        downloadCounterSeconds: sec,
                      }))
                    }
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      localSettings.downloadCounterSeconds === sec
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                    }`}
                  >
                    {sec} seconds
                  </button>
                ))}
              </div>
            </div>

            {/* Modal Text Customization */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Modal Custom Messages
              </h3>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Waiting / Preparing Message
                  </label>
                  <input
                    type="text"
                    value={localSettings.downloadPreparingText}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        downloadPreparingText: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Ready Message
                  </label>
                  <input
                    type="text"
                    value={localSettings.downloadSuccessText}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        downloadSuccessText: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>

              {/* Preview Button */}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => setTestModalOpen(true)}
                  className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 active:scale-[0.98] text-slate-800 text-xs font-bold flex items-center gap-2 cursor-pointer transition-all"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Preview Download Modal with current settings</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Ads Placements & Codes */}
        {activeTab === 'ads' && (
          <div className="mt-6 space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-base font-bold text-slate-900">
                  Active Ad Slots &amp; Banners
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Insert Google AdSense, direct banner HTML, or ad network scripts. Placements with empty code are automatically hidden.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddAd}
                className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Ad Placement</span>
              </button>
            </div>

            {/* List of Ads */}
            <div className="space-y-4">
              {localSettings.ads.map((ad) => (
                <div
                  key={ad.id}
                  className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
                    <div className="flex items-center gap-2.5">
                      <input
                        type="checkbox"
                        checked={ad.enabled}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, { enabled: e.target.checked })
                        }
                        id={`toggle-${ad.id}`}
                        className="w-4 h-4 rounded text-slate-900 accent-slate-900 cursor-pointer"
                      />
                      <label
                        htmlFor={`toggle-${ad.id}`}
                        className="text-sm font-bold text-slate-900 cursor-pointer"
                      >
                        {ad.name}
                      </label>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
                          ad.enabled
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-slate-100 text-slate-500 border border-slate-200'
                        }`}
                      >
                        {ad.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteAd(ad.id)}
                      className="text-xs text-rose-600 hover:text-rose-800 flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>

                  {/* Form fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Placement Location
                      </label>
                      <select
                        value={ad.placement}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, {
                            placement: e.target.value as AdPlacement['placement'],
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                      >
                        {PLACEMENT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Dimensions
                      </label>
                      <select
                        value={ad.dimension}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, {
                            dimension: e.target.value as AdPlacement['dimension'],
                          })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium bg-white focus:outline-none focus:ring-2 focus:ring-slate-900"
                      >
                        {DIMENSION_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Slot Name / Label
                      </label>
                      <input
                        type="text"
                        value={ad.name}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, { name: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-xl border border-slate-300 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                      />
                    </div>
                  </div>

                  {/* Code editor textarea */}
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-[11px] font-bold text-slate-700 uppercase tracking-wider">
                        HTML / JavaScript Ad Code
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateAd(ad.id, { code: SAMPLE_TEMPLATES.adsense })
                          }
                          className="text-[10px] text-blue-600 hover:underline cursor-pointer"
                        >
                          Insert AdSense template
                        </button>
                        <span className="text-slate-300">•</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateAd(ad.id, { code: SAMPLE_TEMPLATES.banner })
                          }
                          className="text-[10px] text-blue-600 hover:underline cursor-pointer"
                        >
                          Insert HTML banner template
                        </button>
                      </div>
                    </div>
                    <textarea
                      rows={4}
                      value={ad.code}
                      onChange={(e) =>
                        handleUpdateAd(ad.id, { code: e.target.value })
                      }
                      placeholder="Paste ad script, Google AdSense tag, or HTML banner here..."
                      className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: General & Brand */}
        {activeTab === 'general' && (
          <div className="mt-6 space-y-6">
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-4">
              <h3 className="text-base font-bold text-slate-900">
                Brand &amp; Domain Information
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Web Service Name
                  </label>
                  <input
                    type="text"
                    value={localSettings.siteName}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        siteName: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                    Domain Name
                  </label>
                  <input
                    type="text"
                    value={localSettings.domainName}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        domainName: e.target.value,
                      }))
                    }
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs sm:text-sm font-medium focus:outline-none focus:ring-2 focus:ring-slate-900"
                  />
                </div>
              </div>
            </div>

            {/* Custom Head Code (e.g. Analytics, Meta Verification) */}
            <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-3">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-slate-700" />
                <h3 className="text-base font-bold text-slate-900">
                  Custom Head Scripts &amp; Analytics
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">
                Add Google Tag Manager, Google Analytics, or verification meta tags.
              </p>
              <textarea
                rows={4}
                value={localSettings.customHeadCode || ''}
                onChange={(e) =>
                  setLocalSettings((prev) => ({
                    ...prev,
                    customHeadCode: e.target.value,
                  }))
                }
                placeholder="<!-- Paste Google Tag Manager or Google Analytics code here -->"
                className="w-full px-3 py-2 rounded-xl border border-slate-300 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-slate-900 bg-slate-50"
              />
            </div>
          </div>
        )}

        {/* Floating Test Modal */}
        <DownloadCounterModal
          isOpen={testModalOpen}
          onClose={() => setTestModalOpen(false)}
          downloadUrl=""
          fileName="sample_tiktok_video.mp4"
          mediaType="video"
          title="Preview TikTok Video"
        />
      </main>

      <Footer />
    </div>
  );
}

```

# app\api\avatar\route.ts

```ts
import { NextRequest, NextResponse } from 'next/server';

// In-memory cache for avatar image buffers and avatar URLs
const avatarCache = new Map<string, { buffer: ArrayBuffer; contentType: string; expiry: number }>();
const avatarUrlCache = new Map<string, { url: string; expiry: number }>();

function generateSvgAvatar(username: string): Response {
  const clean = username.replace(/^@/, '').trim() || 'TikTok';
  const initial = clean.charAt(0).toUpperCase();
  
  // Deterministic pleasant gradient colors based on username
  const colors = [
    ['#fe2858', '#ff6b8b'],
    ['#01ebe4', '#0099ff'],
    ['#8b5cf6', '#d946ef'],
    ['#f59e0b', '#ef4444'],
    ['#10b981', '#06b6d4'],
    ['#3b82f6', '#1d4ed8'],
  ];
  let hash = 0;
  for (let i = 0; i < clean.length; i++) hash = (hash << 5) - hash + clean.charCodeAt(i);
  const pair = colors[Math.abs(hash) % colors.length];

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${pair[0]}"/>
      <stop offset="100%" stop-color="${pair[1]}"/>
    </linearGradient>
  </defs>
  <rect width="200" height="200" rx="100" fill="url(#g)"/>
  <text x="50%" y="54%" font-family="system-ui, -apple-system, sans-serif" font-weight="800" font-size="82" fill="#ffffff" text-anchor="middle" dominant-baseline="middle">${initial}</text>
</svg>`;

  return new Response(svg, {
    status: 200,
    headers: {
      'Content-Type': 'image/svg+xml',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');

  if (!usernameParam) {
    return generateSvgAvatar('User');
  }

  const cleanUser = usernameParam.replace(/^@/, '').trim().toLowerCase();

  // Check buffer cache
  const cached = avatarCache.get(cleanUser);
  if (cached && Date.now() < cached.expiry) {
    return new Response(cached.buffer, {
      status: 200,
      headers: {
        'Content-Type': cached.contentType,
        'Cache-Control': 'public, max-age=43200, s-maxage=86400',
      },
    });
  }

  try {
    // 1. Get avatar URL
    let avatarUrl = '';
    const cachedUrl = avatarUrlCache.get(cleanUser);
    if (cachedUrl && Date.now() < cachedUrl.expiry) {
      avatarUrl = cachedUrl.url;
    } else {
      const profileRes = await fetch(`https://www.tiktok.com/@${encodeURIComponent(cleanUser)}`, {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml',
          'Accept-Language': 'en-US,en;q=0.9',
        },
        cache: 'no-store',
      });

      if (profileRes.ok) {
        const html = await profileRes.text();
        const match = html.match(
          /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
        );
        if (match && match[1]) {
          const json = JSON.parse(match[1]);
          const u = json['__DEFAULT_SCOPE__']?.['webapp.user-detail']?.userInfo?.user;
          if (u) {
            avatarUrl = u.avatarMedium || u.avatarThumb || u.avatarLarger || '';
            if (avatarUrl) {
              avatarUrlCache.set(cleanUser, {
                url: avatarUrl,
                expiry: Date.now() + 1000 * 60 * 60 * 6, // 6 hours
              });
            }
          }
        }
      }
    }

    if (!avatarUrl) {
      return generateSvgAvatar(cleanUser);
    }

    // 2. Fetch avatar image bytes with TikTok referer
    const imgRes = await fetch(avatarUrl, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: 'https://www.tiktok.com/',
        Accept: 'image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8',
      },
      cache: 'force-cache',
    });

    if (!imgRes.ok) {
      return generateSvgAvatar(cleanUser);
    }

    const contentType = imgRes.headers.get('content-type') || 'image/jpeg';
    const buffer = await imgRes.arrayBuffer();

    // Cache the image buffer for 12 hours
    avatarCache.set(cleanUser, {
      buffer,
      contentType,
      expiry: Date.now() + 1000 * 60 * 60 * 12,
    });

    return new Response(buffer, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=43200, s-maxage=86400',
      },
    });
  } catch (err) {
    console.warn(`Failed to proxy avatar for ${cleanUser}:`, err);
    return generateSvgAvatar(cleanUser);
  }
}

```

# app\api\proxy\route.ts

```ts
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const targetUrl = searchParams.get('url');
  const filename = searchParams.get('filename');
  const isAttachment = searchParams.get('download') === '1' || !!filename;

  if (!targetUrl) {
    return NextResponse.json({ error: 'Missing target url parameter' }, { status: 400 });
  }

  try {
    const rangeHeader = req.headers.get('range');
    const upstreamHeaders: Record<string, string> = {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Referer: 'https://www.tiktok.com/',
    };

    if (rangeHeader) {
      upstreamHeaders['Range'] = rangeHeader;
    }

    const upstreamRes = await fetch(targetUrl, {
      headers: upstreamHeaders,
    });

    if (!upstreamRes.ok && upstreamRes.status !== 206) {
      return NextResponse.json(
        { error: `Upstream error ${upstreamRes.status}` },
        { status: upstreamRes.status }
      );
    }

    const contentType =
      upstreamRes.headers.get('content-type') ||
      (targetUrl.includes('.mp3') ? 'audio/mpeg' : 'video/mp4');

    const headers: Record<string, string> = {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Accept-Ranges': 'bytes',
      'Cache-Control': 'public, max-age=3600',
    };

    const contentLength = upstreamRes.headers.get('content-length');
    if (contentLength) headers['Content-Length'] = contentLength;

    const contentRange = upstreamRes.headers.get('content-range');
    if (contentRange) headers['Content-Range'] = contentRange;

    if (isAttachment) {
      const safeFilename = filename || (targetUrl.includes('.mp3') ? 'audio.mp3' : 'video.mp4');
      headers['Content-Disposition'] = `attachment; filename="${encodeURIComponent(safeFilename)}"`;
    }

    return new Response(upstreamRes.body, {
      status: upstreamRes.status,
      headers,
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Proxy fetch failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

```

# app\api\resolve\route.ts

```ts
import { NextRequest, NextResponse } from 'next/server';

interface CacheEntry {
  play: string;
  wmplay?: string;
  music: string;
  title: string;
  expiresAt: number;
}

// In-memory cache to prevent duplicate requests and eliminate latency (2-hour TTL)
const resolveCache = new Map<string, CacheEntry>();

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const videoId = searchParams.get('id');
  const username = searchParams.get('username') || 'tiktok';

  if (!videoId) {
    return NextResponse.json({ error: 'Missing video id' }, { status: 400 });
  }

  // Check cache first for 0ms instant response
  const cached = resolveCache.get(videoId);
  if (cached && cached.expiresAt > Date.now()) {
    return NextResponse.json({
      success: true,
      play: cached.play,
      wmplay: cached.wmplay,
      music: cached.music,
      title: cached.title,
      fromCache: true,
    });
  }

  const tiktokUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}/video/${videoId}`;

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000);

    const tikwmRes = await fetch(
      `https://www.tikwm.com/api/?url=${encodeURIComponent(tiktokUrl)}`,
      {
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
          Accept: 'application/json, text/plain, */*',
        },
        cache: 'no-store',
        signal: controller.signal,
      }
    );

    clearTimeout(timeoutId);

    if (tikwmRes.ok) {
      const data = await tikwmRes.json();
      if (data && data.code === 0 && data.data) {
        const play = data.data.play || data.data.wmplay || '';
        const wmplay = data.data.wmplay || '';
        const music = data.data.music_info?.play || data.data.music || '';
        const title = data.data.title || '';

        // Cache for 2 hours (TikTok CDN tokens typically last 3-6 hours)
        resolveCache.set(videoId, {
          play,
          wmplay,
          music,
          title,
          expiresAt: Date.now() + 2 * 60 * 60 * 1000,
        });

        // Clean up cache if it gets too large
        if (resolveCache.size > 2000) {
          const now = Date.now();
          for (const [key, val] of resolveCache.entries()) {
            if (val.expiresAt < now) resolveCache.delete(key);
          }
        }

        return NextResponse.json({
          success: true,
          play,
          wmplay,
          music,
          title,
        });
      }
    }
  } catch (err) {
    console.warn('TikWM resolution fallback:', err);
  }

  return NextResponse.json({ success: false });
}

```

# app\api\tiktok\route.ts

```ts
import { NextRequest, NextResponse } from 'next/server';

interface TikTokScrapedUser {
  uniqueId: string;
  nickname: string;
  avatar: string;
  signature: string;
  verified: boolean;
  secUid: string;
}

interface TikTokScrapedStats {
  followerCount: number | null;
  followingCount: number | null;
  heartCount: number | null;
  videoCount: number;
}

// Scrape profile metadata directly from TikTok web rehydration state
async function scrapeTikTokUserProfile(username: string): Promise<{
  user: TikTokScrapedUser;
  stats: TikTokScrapedStats;
} | null> {
  const profileUrl = `https://www.tiktok.com/@${encodeURIComponent(username)}`;
  const res = await fetch(profileUrl, {
    headers: {
      'User-Agent':
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
      Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
    cache: 'no-store',
  });

  if (!res.ok) return null;
  const html = await res.text();

  const match = html.match(
    /<script id="__UNIVERSAL_DATA_FOR_REHYDRATION__"[^>]*>([\s\S]*?)<\/script>/
  );
  if (!match || !match[1]) return null;

  try {
    const json = JSON.parse(match[1]);
    const userDetail = json['__DEFAULT_SCOPE__']?.['webapp.user-detail'];
    if (!userDetail || !userDetail.userInfo || !userDetail.userInfo.user) {
      return null;
    }

    const u = userDetail.userInfo.user;
    const s = userDetail.userInfo.stats || {};

    return {
      user: {
        uniqueId: u.uniqueId || username,
        nickname: u.nickname || u.uniqueId || username,
        avatar: u.avatarLarger || u.avatarMedium || u.avatarThumb || '',
        signature: u.signature || '',
        verified: !!u.verified,
        secUid: u.secUid || '',
      },
      stats: {
        followerCount: s.followerCount ?? null,
        followingCount: s.followingCount ?? null,
        heartCount: s.heart ?? (s.heartCount > 0 ? s.heartCount : null),
        videoCount: s.videoCount ?? 0,
      },
    };
  } catch (e) {
    console.error('Error parsing universal data rehydration JSON:', e);
    return null;
  }
}

// Fetch batch of videos using TikTok web creator item_list API
async function fetchTikTokVideoBatch(
  secUid: string,
  username: string,
  cursor: number,
  count = 15
): Promise<any[]> {
  try {
    const query = new URLSearchParams({
      aid: '1988',
      app_language: 'en',
      app_name: 'tiktok_web',
      browser_language: 'en-US',
      browser_name: 'Mozilla',
      browser_online: 'true',
      browser_platform: 'Win32',
      browser_version: '5.0 (Windows)',
      channel: 'tiktok_web',
      cookie_enabled: 'true',
      count: String(count),
      cursor: String(cursor),
      device_id: '7312345678901234567',
      device_platform: 'web_pc',
      focus_state: 'true',
      from_page: 'user',
      history_len: '2',
      is_fullscreen: 'false',
      is_page_visible: 'true',
      language: 'en',
      os: 'windows',
      region: 'US',
      screen_height: '1080',
      screen_width: '1920',
      secUid: secUid,
      type: '1',
      tz_name: 'UTC',
      verifyFp: 'verify_1234567',
      webcast_language: 'en',
    });

    const url = `https://www.tiktok.com/api/creator/item_list/?${query.toString()}`;
    const res = await fetch(url, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        Referer: `https://www.tiktok.com/@${encodeURIComponent(username)}`,
        Accept: 'application/json, text/plain, */*',
      },
      cache: 'no-store',
    });

    if (!res.ok) return [];
    const data = await res.json();
    return data.itemList || [];
  } catch (err) {
    console.warn('Batch fetch error:', err);
    return [];
  }
}

function mapItemToVideo(item: any, user: TikTokScrapedUser) {
  const v = item.video || {};
  const s = item.stats || {};
  const m = item.music || {};
  return {
    video_id: item.id,
    id: item.id,
    title: item.desc || '',
    duration: v.duration || 0,
    cover: v.cover || v.originCover || v.dynamicCover || '',
    origin_cover: v.originCover || v.cover || '',
    play: v.playAddr || v.downloadAddr || '',
    wmplay: v.downloadAddr || v.playAddr || '',
    music: m.playUrl || '',
    music_info: {
      id: m.id || '',
      title: m.title || '',
      author: m.authorName || '',
      play: m.playUrl || '',
      cover: m.coverLarge || m.coverMedium || '',
    },
    play_count: s.playCount || 0,
    digg_count: s.diggCount || 0,
    comment_count: s.commentCount || 0,
    share_count: s.shareCount || 0,
    download_count: s.collectCount || 0,
    create_time: item.createTime || 0,
    author: {
      id: user.secUid,
      unique_id: user.uniqueId,
      nickname: user.nickname,
      avatar: user.avatar,
      signature: user.signature,
      verified: user.verified,
    },
  };
}

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const usernameParam = searchParams.get('username');
  const cursorParam = searchParams.get('cursor');
  const countParam = searchParams.get('count');

  if (!usernameParam) {
    return NextResponse.json(
      { code: -1, msg: 'Missing username parameter' },
      { status: 400 }
    );
  }

  const cleanUser = usernameParam.replace(/^@+/, '').trim();

  try {
    const profileData = await scrapeTikTokUserProfile(cleanUser);
    if (!profileData) {
      return NextResponse.json(
        {
          code: -1,
          msg: `User @${cleanUser} not found or account is private.`,
        },
        { status: 404 }
      );
    }

    const { user, stats } = profileData;

    // Check if pagination was requested
    if (cursorParam) {
      const cursorNum = Number(cursorParam);
      const batch = await fetchTikTokVideoBatch(user.secUid, user.uniqueId, cursorNum, 15);
      const formatted = batch.map((item) => mapItemToVideo(item, user));
      
      let nextCursor: number | null = null;
      if (batch.length > 0) {
        const minTime = Math.min(...batch.map((i: any) => i.createTime || 0));
        if (minTime > 0) {
          const candidate = minTime * 1000;
          // Ensure cursor moves strictly backward in time to avoid repeating items or getting stuck
          nextCursor = candidate < cursorNum ? candidate : cursorNum - 1000;
        }
      }

      // Continuous pagination: keep hasMore true as long as items were returned and nextCursor is valid
      const hasMoreVideos = batch.length > 0 && nextCursor !== null && nextCursor > 0;

      return NextResponse.json({
        code: 0,
        msg: 'success',
        data: {
          videos: formatted,
          cursor: nextCursor,
          hasMore: hasMoreVideos,
        },
      });
    }

    // Initial load: fetch 30 videos (2 batches of 15)
    const batch1 = await fetchTikTokVideoBatch(user.secUid, user.uniqueId, Date.now(), 15);
    const allItems = [...batch1];
    let nextCursor: number | null = null;

    if (batch1.length > 0) {
      const minTime1 = Math.min(...batch1.map((i: any) => i.createTime || 0));
      if (minTime1 > 0) {
        const batch2 = await fetchTikTokVideoBatch(user.secUid, user.uniqueId, minTime1 * 1000, 15);
        if (batch2.length > 0) {
          const seen = new Set(batch1.map((i: any) => i.id));
          for (const item of batch2) {
            if (!seen.has(item.id)) {
              allItems.push(item);
              seen.add(item.id);
            }
          }
          const minTime2 = Math.min(...batch2.map((i: any) => i.createTime || 0));
          if (minTime2 > 0) {
            nextCursor = minTime2 * 1000;
          }
        } else {
          nextCursor = minTime1 * 1000;
        }
      }
    }

    const formattedVideos = allItems.map((item) => mapItemToVideo(item, user));

    // Initial load hasMore: true if we have items and a valid nextCursor
    const initialHasMore = allItems.length > 0 && nextCursor !== null && nextCursor > 0;

    return NextResponse.json({
      code: 0,
      msg: 'success',
      data: {
        videos: formattedVideos,
        user: {
          id: user.secUid,
          unique_id: user.uniqueId,
          nickname: user.nickname,
          avatar: user.avatar,
          signature: user.signature,
          verified: user.verified,
        },
        stats: stats,
        cursor: nextCursor,
        hasMore: initialHasMore,
      },
    });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : 'Failed to retrieve profile data.';
    return NextResponse.json({ code: -1, msg: message }, { status: 500 });
  }
}

```

# app\categories\page.tsx

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { Play, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CATEGORIES } from '@/lib/creators-data';

export const metadata: Metadata = {
  title: 'TikTok Categories Directory - Browse Top Creators',
  description: 'Explore top TikTok creator categories including Comedy, Food, Tech, Gaming, Fitness, and Dance on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Categories Directory - Browse Top Creators',
    description: 'Explore top TikTok creator categories including Comedy, Food, Tech, Gaming, Fitness, and Dance on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/categories',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/categories',
  },
};

export default function CategoriesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TikTok Categories Directory',
    description: 'Explore top TikTok creator categories.',
    url: 'https://tikprofilesviewer.com/categories',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <Breadcrumbs items={[{ label: 'Categories' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Explore TikTok by Category
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Browse creators and videos by their content topic.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group p-6 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 group-hover:bg-slate-900 group-hover:text-white transition-all">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                    {cat.creatorUsernames.length} Creators
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-black transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 line-clamp-2 leading-relaxed">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-900 font-medium">
                <span>Browse {cat.name}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

# app\category\[slug]\page.tsx

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { getCategoryBySlug, CATEGORIES, getCreatorsByCategory } from '@/lib/creators-data';

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {
      title: 'Category Not Found - Tik Profiles Viewer',
    };
  }

  return {
    title: `${category.title} - Tik Profiles Viewer`,
    description: category.seoDescription,
    openGraph: {
      title: `${category.title} - Tik Profiles Viewer`,
      description: category.seoDescription,
      url: `https://tikprofilesviewer.com/category/${slug}`,
    },
    alternates: {
      canonical: `https://tikprofilesviewer.com/category/${slug}`,
    },
  };
}

export default async function CategoryDetailPage({ params }: Props) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const creatorsInNiche = getCreatorsByCategory(category.slug);
  const otherCategories = CATEGORIES.filter((c) => c.slug !== category.slug).slice(0, 4);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: category.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs
          items={[
            { label: 'Categories', href: '/categories' },
            { label: category.name },
          ]}
        />

        {/* Hero Header: NO pill tag */}
        <div className="mb-8 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            {category.title}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2 max-w-3xl leading-relaxed">
            {category.seoDescription}
          </p>

          {/* Trending Tags */}
          <div className="flex flex-wrap gap-2 mt-4 pt-2">
            {category.trendingTags.map((tag) => (
              <span
                key={tag}
                className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Creators in this Niche Grid */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-base sm:text-lg font-bold text-slate-900">
              Top {category.name} Creators
            </h2>
            <span className="text-xs text-slate-500">
              Click any creator to view profile and download videos
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {creatorsInNiche.map((creator) => (
              <Link
                key={creator.username}
                href={`/profile/${creator.username}`}
                className="p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex items-center gap-3.5 group shadow-xs"
              >
                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={creator.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60'}
                    alt={creator.displayName}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <h3 className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors truncate">
                    {creator.displayName}
                  </h3>
                  <p className="text-xs font-mono text-slate-500 truncate">
                    @{creator.username}
                  </p>
                  <div className="flex items-center gap-3 text-[11px] text-slate-500 mt-1">
                    <span>{creator.followers} followers</span>
                    <span>•</span>
                    <span>{creator.likes} likes</span>
                  </div>
                </div>

                <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors" />
              </Link>
            ))}
          </div>
        </section>

        {/* Search & Downloader inside this Niche */}
        <section className="mb-14 pt-8 border-t border-slate-200">
          <div className="text-center mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Search Any {category.name} Creator
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Search any username to watch videos and download HD MP4 and MP3 audio.
            </p>
          </div>

          <TikTokProfileViewer
            initialUsername={creatorsInNiche[0]?.username || ''}
            autoSearch={false}
          />
        </section>

        {/* Category FAQs */}
        {category.faqs.length > 0 && (
          <section className="mb-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions about {category.name}
            </h2>

            <div className="flex flex-col gap-4">
              {category.faqs.map((faq, index) => (
                <div key={index} className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                  <h3 className="text-sm font-bold text-slate-900">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Browse Other Niches */}
        <section className="pt-6 border-t border-slate-200">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4">
            Explore Other Categories
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {otherCategories.map((c) => (
              <Link
                key={c.slug}
                href={`/category/${c.slug}`}
                className="p-3 rounded-2xl bg-white border border-slate-200 hover:border-slate-300 text-xs text-slate-700 hover:text-slate-900 shadow-sm transition-all flex items-center justify-between"
              >
                <span className="truncate">{c.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\content-removal-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Content Review & Removal Policy - Tik Profiles Viewer',
  description:
    'Content removal policy and submission guidelines for Tik Profiles Viewer on TikProfilesViewer.com. Learn how creators and rights holders can request profile exclusion or content removal.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/content-removal-policy',
  },
};

export default function ContentRemovalPolicyPage() {
  return (
    <LegalLayout
      title="Content Review &amp; Removal Policy"
      subtitle="Clear, fair, and accessible procedures for content creators, rights owners, and individuals requesting content review or exclusion."
      summary="We provide an open, transparent pathway for creators and individuals to request that their profiles, videos, or personal information be excluded from Tik Profiles Viewer search results and proxy indexes."
      currentPath="/content-removal-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Our Commitment to Fair Digital Removal</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong>, we believe every creator and individual should have a clear, uncomplicated mechanism to control how their public information is reflected on third-party viewer portals.
        </p>
        <p>
          While our platform only indexes media that is already publicly available on the internet, we honor legitimate requests to exclude profiles or remove specific video identifiers from our search index.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Valid Grounds for Removal Requests</h2>
        <p>We review and process removal requests based on the following legitimate grounds:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Creator Profile Exclusion:</strong> If you are the owner of a public TikTok account and do not wish your profile to be searchable on our website.
          </li>
          <li>
            <strong>Copyright &amp; Intellectual Property Infringement:</strong> Requests submitted by copyright owners pursuant to our <a href="/copyright-policy" className="text-blue-600 hover:underline">Copyright &amp; DMCA Policy</a>.
          </li>
          <li>
            <strong>Privacy &amp; Safety Concerns:</strong> Content involving minors, non-consensual media, inadvertent exposure of private addresses, phone numbers, or confidential personal data.
          </li>
          <li>
            <strong>Court Orders &amp; Regulatory Injunctions:</strong> Formal orders issued by courts of competent jurisdiction or recognized regulatory authorities.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. How to Submit a Removal Request</h2>
        <p>
          To expedite processing, please send your removal request to our compliance department at <strong>legal@tikprofilesviewer.com</strong> with the following details:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li><strong>Your TikTok Username / Handle:</strong> (e.g., <code>@yourcreatorname</code>) or specific video URL(s).</li>
          <li><strong>Verification of Ownership:</strong> Proof that you own or manage the account (such as sending the email from an address listed in the public bio, or confirming via a temporary unique phrase added to the profile bio).</li>
          <li><strong>Reason for Request:</strong> A brief explanation of the nature of the request (e.g., personal privacy, profile exclusion, copyright infringement).</li>
          <li><strong>Your Contact Information:</strong> Full name and contact email address for confirmation.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Processing Timelines and Resolution</h2>
        <p>
          Our team reviews removal requests on a daily basis. Most verified requests are processed within <strong>24 to 48 business hours</strong>.
        </p>
        <p>
          Once approved, your username or video ID is added to our system exclusion blocklist. Future searches for that username on TikProfilesViewer.com will return an unavailable status, preventing the display of avatars, bio details, and video media streams.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Important Technical Clarification</h2>
        <p>
          Excluding your profile from Tik Profiles Viewer removes access via our website, but does <strong>not</strong> delete your videos or account from the underlying TikTok platform or other third-party websites. To permanently remove your content from the internet, you must delete the video or adjust your privacy settings directly on TikTok.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\cookie-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy - Tik Profiles Viewer',
  description:
    'Comprehensive Cookie Policy for Tik Profiles Viewer on TikProfilesViewer.com. Learn about technical cookies, local storage preferences, and how to control your tracking settings.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Complete transparency on how cookies, local storage, and tracking technologies operate on TikProfilesViewer.com."
      summary="Tik Profiles Viewer uses essential technical cookies and browser local storage to preserve your language preferences and maintain site security. We do not use intrusive tracking cookies, and you can control cookie settings at any time."
      currentPath="/cookie-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies and Local Storage?</h2>
        <p>
          Cookies are small text files placed on your computer, tablet, or smartphone by web servers when you browse online. They help web applications remember your preferences, keep you logged into secure areas, and analyze how visitors interact with web pages.
        </p>
        <p>
          In addition to standard cookies, modern web technologies also employ <strong>LocalStorage</strong> and <strong>SessionStorage</strong>. These are browser-managed key-value storage mechanisms that store user choices directly on your physical device without transferring data automatically on every network request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Categories of Cookies We Utilize</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong>, we categorize browser storage into the following defined groups:
        </p>

        <div className="space-y-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">A. Strictly Necessary &amp; Functional Cookies</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              These cookies are essential for our website to operate correctly. They enable fundamental capabilities such as page navigation, language selection (English, Arabic, French, German, Spanish, etc.), security rate-limiting, and CDN server routing. The Website cannot function properly without these items.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">B. Preference &amp; UI State Storage (LocalStorage)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We utilize browser LocalStorage to remember custom UI configurations, such as your countdown seconds preference and search filter states. This data is strictly stored locally in your browser sandbox and is never uploaded to remote tracking servers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">C. Performance &amp; Diagnostic Analytics</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We may utilize privacy-preserving, aggregated technical telemetry to measure page loading speeds, monitor server latency, and diagnose technical errors across various device types. No personal identity information is recorded or combined with third-party tracking databases.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">D. Third-Party Advertising Cookies</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To keep our tools completely free without paywalls, our website may display banner ads from verified ad partners (such as Google AdSense). These third-party vendors may use cookies to serve ads based on your visit to this and other websites. You may opt out of personalized advertising by visiting Google Ads Settings.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. How to Manage and Disable Cookies</h2>
        <p>
          You have full control over cookie storage. Most web browsers allow you to modify your cookie settings to refuse cookies, delete specific cookies, or notify you whenever a cookie is set. Below are links to management guides for common browsers:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
          <li><strong>Apple Safari (iOS &amp; macOS):</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
          <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and Site Permissions</li>
        </ul>
        <p className="text-xs text-slate-500">
          Please note that disabling strictly necessary cookies may impact the proper visual layout and language localization of the Website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Policy Revisions</h2>
        <p>
          We may amend this Cookie Policy periodically to reflect technological adjustments or regulatory guidance. Any modifications will be posted here with an updated review date.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\copyright-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Copyright & DMCA Policy - Tik Profiles Viewer',
  description:
    'Copyright and Digital Millennium Copyright Act (DMCA) policy for Tik Profiles Viewer on TikProfilesViewer.com. Learn our intellectual property policies and how to submit copyright notices.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/copyright-policy',
  },
};

export default function CopyrightPolicyPage() {
  return (
    <LegalLayout
      title="Copyright &amp; DMCA Policy"
      subtitle="Our intellectual property principles, respect for creator ownership, and formal procedures for submitting copyright infringement notices."
      summary="Tik Profiles Viewer respects creator intellectual property rights. We do not host media on our own storage servers. If you are a copyright owner and wish to request removal of content from our search index, follow our formal DMCA procedure below."
      currentPath="/copyright-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Statement of Principle</h2>
        <p>
          <strong>Tik Profiles Viewer</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) strongly respects the intellectual property rights of content creators, authors, musicians, and rights holders worldwide. It is our strict policy to respond promptly to clear, valid notices of alleged copyright infringement in compliance with the Digital Millennium Copyright Act (DMCA, 17 U.S.C. § 512), the European Union Copyright Directive, and international intellectual property treaties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Technical Nature of Our Service (No File Hosting)</h2>
        <p>
          To understand our copyright framework, please note our technical architecture:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Tik Profiles Viewer operates as an automated index, client-side player, and public proxy tool.</li>
          <li>We do <strong>not</strong> maintain permanent file storage, media servers, or video databases hosting creator media on our servers.</li>
          <li>All videos, audio tracks, and images previewed or downloaded through the Website originate from third-party public content delivery networks (CDNs) where the content was published by the original TikTok user.</li>
          <li>When a video is deleted or set to private on TikTok by its original author, it naturally becomes inaccessible through our tool once CDN caches expire.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Requirements for Submitting a Formal DMCA Takedown Notice</h2>
        <p>
          If you are the copyright owner, or an authorized agent designated to act on behalf of the owner of an exclusive right, and you believe that content accessible through TikProfilesViewer.com infringes upon your copyright, you may submit a formal written notice to our Designated Copyright Agent at <strong>legal@tikprofilesviewer.com</strong>.
        </p>
        <p>To be effective under 17 U.S.C. § 512(c)(3), your notice must include ALL of the following:</p>
        <ol className="list-decimal pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Physical or Electronic Signature:</strong> A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive copyright right that is allegedly infringed.
          </li>
          <li>
            <strong>Identification of the Copyrighted Work:</strong> A clear description of the copyrighted work claimed to have been infringed (or if multiple works are covered by a single notification, a representative list of such works).
          </li>
          <li>
            <strong>Identification of the Infringing Material:</strong> Specific URLs or precise identifiers on TikProfilesViewer.com or TikTok that allow our technical team to locate and verify the material in question.
          </li>
          <li>
            <strong>Contact Information:</strong> Information reasonably sufficient to permit us to contact you, such as your full legal name, physical address, telephone number, and official email address.
          </li>
          <li>
            <strong>Good Faith Statement:</strong> A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law (such as fair use).
          </li>
          <li>
            <strong>Accuracy and Perjury Statement:</strong> A statement made under penalty of perjury that the information in the notification is accurate, and that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Processing and Response Timelines</h2>
        <p>
          Upon receipt of a substantially compliant DMCA notice, our legal team will:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Review the request within 24 to 48 business hours.</li>
          <li>Block or remove the identified URLs from our search indexing and caching layers.</li>
          <li>Provide written confirmation of the action taken to the notifying rights holder.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Designated Copyright Agent Contact</h2>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1.5 text-slate-700">
          <p><strong>Designated Agent:</strong> Copyright &amp; IP Compliance Officer</p>
          <p><strong>Service:</strong> Tik Profiles Viewer</p>
          <p><strong>Email Address:</strong> <a href="mailto:legal@tikprofilesviewer.com" className="text-blue-600 font-semibold hover:underline">legal@tikprofilesviewer.com</a></p>
          <p><strong>Subject Line Requirement:</strong> Please format the email subject as <code>[DMCA Notice] - Copyright Claim - &lt;Title/URL&gt;</code></p>
        </div>
      </section>
    </LegalLayout>
  );
}

```

# app\creators\page.tsx

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CREATORS, CATEGORIES } from '@/lib/creators-data';

export default function CreatorsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCreators = CREATORS.filter((c) => {
    const matchesCategory =
      selectedCategory === 'all' || c.categorySlug === selectedCategory;
    const matchesSearch =
      c.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Top Creators' }]} />

        {/* Hero Header: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Top TikTok Creators
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Browse the most followed TikTok creators. View their profiles and download videos without watermarks.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white border border-slate-200 p-4 rounded-xl shadow-xs">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creator name or @username..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-sky-500"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                selectedCategory === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors cursor-pointer ${
                  selectedCategory === cat.slug
                    ? 'bg-slate-900 text-white'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {filteredCreators.map((creator, index) => (
            <Link
              key={creator.username}
              href={`/profile/${creator.username}`}
              className="group p-5 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={creator.avatar || `/api/avatar?username=${encodeURIComponent(creator.username)}`}
                      alt={creator.displayName}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = `/api/avatar?username=${encodeURIComponent(creator.username)}`;
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
                        #{index + 1}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {creator.country}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-black transition-colors truncate mt-1">
                      {creator.displayName}
                    </h3>
                    <p className="text-xs font-mono text-slate-500 truncate">
                      @{creator.username}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mt-3 line-clamp-2 leading-relaxed">
                  {creator.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-slate-400 block text-[10px]">Followers</span>
                    <strong className="text-slate-900 font-mono">{creator.followers}</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">Likes</span>
                    <strong className="text-slate-900 font-mono">{creator.likes}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-900 font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>View</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            <p className="text-base">No creators found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-400 mt-1">
              Try searching a different name or browse all categories.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}

```

# app\disclaimer\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Disclaimer - Tik Profiles Viewer',
  description:
    'General and technical disclaimer for Tik Profiles Viewer on TikProfilesViewer.com. Important notice regarding data accuracy, third-party availability, and informational usage.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="General Disclaimer"
      subtitle="Important legal clarification regarding information accuracy, metrics estimates, and third-party platform limitations."
      summary="All profile data, follower counts, and video metrics displayed on Tik Profiles Viewer are retrieved from public endpoints for informational purposes only. We cannot guarantee real-time accuracy, completeness, or uninterrupted availability."
      currentPath="/disclaimer"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Informational Purpose Only</h2>
        <p>
          The information and utility services provided by <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>) are intended exclusively for general informational, educational, and personal archival purposes.
        </p>
        <p>
          Nothing contained on this Website constitutes professional social media marketing consulting, investment advice, brand endorsement, or binding contractual guarantees of creator reach, earnings, or performance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Accuracy and Timeliness of Public Data</h2>
        <p>
          The metrics displayed on our Website including follower tallies, following numbers, aggregate like counts, video titles, view counts, and engagement percentages are retrieved from publicly accessible third-party network endpoints.
        </p>
        <p>Because social media metrics fluctuate continuously and can be affected by API caching cycles, algorithm adjustments, or third-party rate limits:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Statistics may occasionally be delayed, estimated, rounded, or temporarily inaccurate compared to real-time mobile app telemetry.</li>
          <li>Accounts that have recently switched privacy settings, changed usernames, or been suspended by the platform may return cached or blank results.</li>
          <li>Calculated engagement rates and creator earnings figures represent mathematical estimates based on industry benchmarks, not audited financial records.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Non-Affiliation and Independence</h2>
        <p>
          Tik Profiles Viewer is an independent online web utility. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, or any of their subsidiaries or corporate affiliates.
        </p>
        <p>
          The official TikTok website is accessible at <code>www.tiktok.com</code>. The name &quot;TikTok&quot; as well as related names, marks, emblems, and logos are registered trademarks of their respective owners.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Third-Party Content and Copyright Responsibility</h2>
        <p>
          Tik Profiles Viewer does not own, produce, monitor, or claim copyright over third-party videos, photographs, audio tracks, or captions displayed via our service.
        </p>
        <p>
          All intellectual property rights in published media remain with the respective creators and content owners. Users of our service are solely responsible for ensuring that their downloading, viewing, and personal use of any media complies with applicable local and international copyright regulations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. &quot;Use at Your Own Risk&quot; Clause</h2>
        <p>
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF TIK PROFILES VIEWER IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE PROMPTLY CORRECTED.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\globals.css

```css
@import "tailwindcss";

```

# app\how-to-use-tiktok-profile-viewer\page.tsx

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Search,
  Eye,
  Play,
  Download,
  Music,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
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
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />

        <Breadcrumbs items={[{ label: 'How to Use Tik Profiles Viewer' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto my-8">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            How to Use Tik Profiles Viewer
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-4 leading-relaxed">
            Follow this simple guide to search any public TikTok profile, stream videos without stutter, and download watermark-free HD videos on TikProfilesViewer.com.
          </p>
        </div>

        {/* 3-Step Visual Mockup Cards (Steps.png Design) */}
        <div className="my-8">
          <HowToUseSteps />
        </div>

        {/* In-depth Steps Guide */}
        <div className="space-y-6 my-10">
          {/* Step 1 */}
          <div
            id="step-1"
            className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center shrink-0">
              1
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4 text-[#01ebe4]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-950">
                  Search Any TikTok Username
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Go to the homepage and locate the search bar. Enter any public TikTok username (for example, <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">khaby.lame</code> or <code className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-900 font-mono text-xs">@charlidamelio</code>). Then click the teal <strong className="text-slate-900">Search</strong> button.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div
            id="step-2"
            className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center shrink-0">
              2
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-purple-600" />
                <h2 className="text-base sm:text-lg font-bold text-slate-950">
                  Inspect Profile Details and Live Stats
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The profile container displays the creator’s verified badge, bio, account status, follower count, total likes, following count, and total videos. You can also click <strong>Download avatar</strong> to save the creator’s high-resolution profile photo.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div
            id="step-3"
            className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center shrink-0">
              3
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Play className="w-4 h-4 text-[#f7024e]" />
                <h2 className="text-base sm:text-lg font-bold text-slate-950">
                  Hover to Preview &amp; Click to Play
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Move your cursor over any video card to see the hover play button in color <strong className="text-[#f7024e]">#f7024e</strong>. Check the view count, likes, and shares separated by clear spacing. Click any card to launch the video player modal.
              </p>
            </div>
          </div>

          {/* Step 4 */}
          <div
            id="step-4"
            className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center shrink-0">
              4
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <ChevronDown className="w-4 h-4 text-blue-600" />
                <h2 className="text-base sm:text-lg font-bold text-slate-950">
                  Click SHOW MORE VIDEOS to Fetch All Videos
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                The player initially displays the first batch of videos. Click the <strong className="text-slate-900 uppercase">SHOW MORE VIDEOS</strong> button at the bottom of the grid to load 15 more videos. You can continue clicking as many times as you like until every video from the account has been loaded.
              </p>
            </div>
          </div>

          {/* Step 5 */}
          <div
            id="step-5"
            className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row gap-5 items-start"
          >
            <div className="w-12 h-12 rounded-xl bg-slate-900 text-white font-black text-base flex items-center justify-center shrink-0">
              5
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-emerald-600" />
                <h2 className="text-base sm:text-lg font-bold text-slate-950">
                  Download Watermark-Free HD Video or MP3 Audio
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Inside the player modal, click <strong>Download HD Video</strong> to save the original MP4 video without any TikTok watermark logo. If you only want the background music or voice sound, click <strong>Download Audio (MP3)</strong> to save it directly to your device.
              </p>
            </div>
          </div>
        </div>

        {/* Helpful Tips Section */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs my-8">
          <div className="flex items-center gap-2 mb-4">
            <HelpCircle className="w-5 h-5 text-slate-900" />
            <h2 className="text-base sm:text-lg font-bold text-slate-950">
              Helpful Tips for Best Experience
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-600">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>No @ symbol needed:</strong> You can type the username with or without the @ sign. Both work equally fast.</span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Works on iPhone and Android:</strong> Videos will download directly to your Files or Downloads folder without special apps.</span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Full Screen Video:</strong> Use the fullscreen toggle in the bottom right of the video player to watch videos in full size.</span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span><strong>Trending Profiles:</strong> Use the quick links right beneath the search bar to jump to popular creators in one click.</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <div className="p-8 sm:p-10 rounded-xl bg-slate-900 text-white text-center flex flex-col items-center gap-4 my-8 shadow-xs">
          <h2 className="text-xl sm:text-2xl font-bold">
            Try Tik Profiles Viewer Now
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-lg">
            Search any public TikTok account, stream videos instantly, and save HD videos without watermarks.
          </p>
          <Link
            href="/"
            className="px-6 py-2.5 rounded-lg bg-[#01ebe4] hover:bg-[#00d7d0] text-black font-bold text-xs sm:text-sm transition-all"
          >
            Start Viewing Profiles
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

# app\layout.tsx

```tsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
  description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio on TikProfilesViewer.com.',
  referrer: 'no-referrer',
  openGraph: {
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio on TikProfilesViewer.com.',
  },
  icons: {
    icon: '/assets/aistudio/tik-profiles-viewer-logo_c4487561.png',
    shortcut: '/assets/aistudio/tik-profiles-viewer-logo_c4487561.png',
    apple: '/assets/aistudio/tik-profiles-viewer-logo_c4487561.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
        <link rel="icon" type="image/png" href="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png" />
        <link rel="apple-touch-icon" href="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png" />
      </head>
      <body className="min-h-screen bg-[#fafbfc] text-slate-900 antialiased selection:bg-rose-100 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}


```

# app\legal-notice\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Legal Notice (Impressum) - Tik Profiles Viewer',
  description:
    'Legal Notice and operator disclosures for Tik Profiles Viewer on TikProfilesViewer.com. Provider identification, corporate information, and contact details.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/legal-notice',
  },
};

export default function LegalNoticePage() {
  return (
    <LegalLayout
      title="Legal Notice"
      subtitle="Statutory provider identification, editorial responsibility, and official contact information for TikProfilesViewer.com."
      summary="Official legal notice and corporate identification for Tik Profiles Viewer, outlining service ownership, technical hosting, designated legal representatives, and contact avenues."
      currentPath="/legal-notice"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Service Provider Identification</h2>
        <p>
          Information provided pursuant to international electronic commerce and digital services disclosure standards:
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-700">
          <p><strong>Web Service Name:</strong> Tik Profiles Viewer</p>
          <p><strong>Official Domain:</strong> <a href="https://tikprofilesviewer.com" className="text-blue-600 hover:underline">https://tikprofilesviewer.com</a></p>
          <p><strong>Nature of Service:</strong> Free online utility and anonymous viewer for publicly available social media profile information and content.</p>
          <p><strong>Primary Contact Email:</strong> <a href="mailto:support@tikprofilesviewer.com" className="text-blue-600 hover:underline">support@tikprofilesviewer.com</a></p>
          <p><strong>Legal &amp; DMCA Inquiries:</strong> <a href="mailto:legal@tikprofilesviewer.com" className="text-blue-600 hover:underline">legal@tikprofilesviewer.com</a></p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Technical Hosting and Infrastructure</h2>
        <p>
          Tik Profiles Viewer is deployed across globally distributed cloud hosting infrastructure and edge content delivery networks (CDNs). Cloud hosting providers maintain physical server hardware in secure, ISO/IEC 27001-certified data center facilities across North America and Europe.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Editorial and Content Responsibility</h2>
        <p>
          As an automated technical search index and proxy service, Tik Profiles Viewer does not create, originate, edit, or curate third-party video uploads or creator profile biographies. All published media displayed on the service is retrieved on-demand from publicly accessible content distribution networks in direct response to user queries.
        </p>
        <p>
          The original creators who choose to publish their content publicly on third-party networks retain full editorial, civil, and criminal responsibility for their publications under applicable national laws.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Dispute Resolution and Contact Procedures</h2>
        <p>
          We are committed to resolving any legal concerns, copyright notices, or questions in a prompt and cooperative manner. If you believe any aspect of our service infringes your rights or violates applicable standards, please reach out directly:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>General Inquiries:</strong> <code>support@tikprofilesviewer.com</code></li>
          <li><strong>Copyright &amp; DMCA Takedown:</strong> <code>legal@tikprofilesviewer.com</code></li>
          <li><strong>Content Removal Requests:</strong> Submit via our <a href="/content-removal-policy" className="text-blue-600 hover:underline font-semibold">Content Removal Policy</a> channel.</li>
        </ul>
        <p className="text-xs text-slate-500">
          Our administrative compliance team aims to review and respond to formal legal correspondence within 24 to 48 business hours.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\page.tsx

```tsx
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Download,
  ChevronRight,
  ShieldCheck,
  Zap,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import HowToUseSteps from '@/components/HowToUseSteps';
import ExploreNichesSection from '@/components/ExploreNichesSection';
import CreatorToolsSection from '@/components/CreatorToolsSection';
import FaqSection from '@/components/FaqSection';
import AdSlot from '@/components/AdSlot';
import { CREATORS } from '@/lib/creators-data';

export const metadata: Metadata = {
  title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
  description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
  openGraph: {
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio for free on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com',
  },
};

export default function HomePage() {
  const featuredCreators = CREATORS.slice(0, 6);

  const webAppSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'Tik Profiles Viewer',
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'All',
    description: 'Free TikTok profile viewer, video player, and watermark-free HD video and MP3 audio downloader.',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I download TikTok videos without watermark for free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Type the creator username in the search box, click on the video you want, and click Download HD Video. The video will save directly to your device without any watermark.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I view TikTok profiles without an account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Tik Profiles Viewer is completely free and anonymous. You do not need to sign in or have a TikTok account to view profiles and watch videos.',
        },
      },
      {
        '@type': 'Question',
        name: 'How do I download only the audio or music from a video?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Click on any video to open the player, then click the Download Audio (MP3) button. The audio track will save to your device as an MP3 file.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many videos can I see on a profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The first 30 videos load right away. You can click SHOW MORE VIDEOS at the bottom of the grid to load 15 more videos each time until you reach the very first video.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900 relative">
      <Navbar />

      {/* Top Section with ambient aurora gradient behind Text and Search Input */}
      <div className="relative w-full overflow-hidden flex-1 flex flex-col">
        {/* Soft multi-color aurora ambient glow behind Text and Search Input */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1150px] max-w-[140vw] h-[720px] pointer-events-none -z-10 blur-3xl opacity-90"
          style={{
            background:
              'radial-gradient(ellipse 75% 65% at 50% 42%, rgba(254, 40, 88, 0.18) 0%, rgba(168, 85, 247, 0.14) 30%, rgba(245, 158, 11, 0.10) 54%, rgba(42, 240, 234, 0.15) 76%, transparent 100%)',
          }}
        />

        <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-14 pb-8 flex flex-col items-center">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />

          {/* Hero Headline & Subtitle directly on top section gradient (container background removed) */}
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-slate-950 leading-[1.12]">
              View Any TikTok Profile &amp; Download Videos in HD
            </h1>

            <p className="text-sm sm:text-base md:text-lg text-slate-600 mt-3 sm:mt-4 leading-relaxed max-w-2xl mx-auto font-normal">
              Inspect public TikTok profiles anonymously, watch videos quickly without lag, and save watermark-free HD videos and MP3 audio for free.
            </p>
          </div>

          {/* Interactive TikTok Profile Viewer */}
          <div className="w-full">
            <TikTokProfileViewer initialUsername="" autoSearch={false}>
            <div className="w-full">
              {/* How to Use Section (Anchored for Navbar #how-to-use) */}
              <section id="how-to-use" className="w-full mt-12 pt-8 border-t border-slate-200 scroll-mt-20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      How to Use Tik Profiles Viewer
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Follow these simple steps to view and download any public video.
                    </p>
                  </div>
                  <Link
                    href="/how-to-use-tiktok-profile-viewer"
                    className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Full guide</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <HowToUseSteps />
              </section>

              {/* Section 1: Explore Any TikTok Niche & Creator Format (section-1.png) */}
              <ExploreNichesSection />

              {/* Trending Creators: Low to medium radius */}
              <section className="w-full mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      Trending TikTok Creators
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Popular creators you can inspect right now.
                    </p>
                  </div>
                  <Link
                    href="/creators"
                    className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>View all creators</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                  {featuredCreators.map((creator) => (
                    <Link
                      key={creator.username}
                      href={`/profile/${creator.username}`}
                      className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all flex items-center gap-3.5 shadow-xs"
                    >
                      <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={creator.avatar || `/api/avatar?username=${encodeURIComponent(creator.username)}`}
                          alt={creator.displayName}
                          referrerPolicy="no-referrer"
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>

                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-bold text-slate-900 group-hover:text-black transition-colors truncate">
                          {creator.displayName}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 truncate">
                          @{creator.username}
                        </p>
                        <div className="flex items-center gap-2 text-[11px] text-slate-500 mt-0.5">
                          <span>{creator.followers} followers</span>
                          <span>•</span>
                          <span className="truncate">{creator.category}</span>
                        </div>
                      </div>

                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-slate-800 transition-colors shrink-0" />
                    </Link>
                  ))}
                </div>
              </section>

              {/* Free Tools Section (10 Creator Tools) */}
              <CreatorToolsSection />

              <AdSlot placement="footer" />

              {/* About Tik Profiles Viewer (Anchored for Navbar #about) */}
              <section id="about" className="w-full mt-12 pt-8 border-t border-slate-200 scroll-mt-20">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                      About Tik Profiles Viewer
                    </h2>
                    <p className="text-xs sm:text-sm text-slate-600 mt-0.5">
                      Free web service on TikProfilesViewer.com built for everyone.
                    </p>
                  </div>
                  <Link
                    href="/about-tiktok-profile-viewer"
                    className="text-xs font-semibold text-slate-900 hover:text-slate-700 flex items-center gap-1 transition-colors"
                  >
                    <span>Read more</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <Zap className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Fast Video Player</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Play videos smoothly without lag. Videos start quickly with clear picture quality.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <Download className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">100% Free Forever</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      No payments, no credit card, and no limits. Download as many videos as you want.
                    </p>
                  </div>

                  <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
                    <div className="w-9 h-9 rounded-lg bg-slate-100 text-slate-900 flex items-center justify-center">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-slate-900">Private & Anonymous</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      Nobody knows you viewed their profile. No sign up required, and your data stays private.
                    </p>
                  </div>
                </div>
              </section>

              {/* Frequently Asked Questions (Styled exactly based on frequently-asked-questions.png) */}
              <FaqSection />
            </div>
          </TikTokProfileViewer>
        </div>
      </main>
    </div>

    <Footer />
  </div>
);
}

```

# app\privacy-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Tik Profiles Viewer',
  description:
    'Read the official Privacy Policy of Tik Profiles Viewer on TikProfilesViewer.com. We prioritize user anonymity and do not collect, harvest, or store personal visitor data.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Tik Profiles Viewer protects user privacy, ensures complete anonymity, and handles technical data."
      summary="We respect your privacy. Tik Profiles Viewer does not require user registration, does not collect personal identity information, does not record TikTok viewing histories, and operates as an anonymous viewer platform."
      currentPath="/privacy-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Overview and Core Philosophy</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>), visitor privacy is our foundational priority. Unlike conventional platforms, our service was specifically built to provide an anonymous and barrier-free utility for exploring public social media content.
        </p>
        <p>
          We do not require account sign-ups, email submissions, passwords, or credit card details. When you visit our Website, your session remains private and unlinked to any personal profile.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Information We Do NOT Collect</h2>
        <p>To provide full transparency, we explicitly confirm that we do NOT collect, harvest, store, or sell:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Personal Identifiers:</strong> We do not collect names, residential addresses, telephone numbers, or email addresses.</li>
          <li><strong>Account Credentials:</strong> We never request or store TikTok usernames, passwords, or login access tokens.</li>
          <li><strong>Private Viewing Histories:</strong> We do not log which creator profiles you search for or which specific video files you download.</li>
          <li><strong>Biometric Data:</strong> We do not capture or process facial geometry, voice signatures, or device biometric sensors.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Technical Server Logs and Telemetry</h2>
        <p>
          Like virtually all web applications running modern cloud infrastructure, our web servers automatically generate standard, ephemeral technical log entries for network routing and security protection. These logs may temporarily record:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Internet Protocol (IP) address (truncated or anonymized where applicable for rate-limiting protection).</li>
          <li>Browser user agent string, operating system version, and device viewport specifications.</li>
          <li>Referring URLs, requested resource paths, and standard HTTP response status codes.</li>
          <li>Date, time, and duration of incoming network requests.</li>
        </ul>
        <p>
          These technical logs are strictly utilized for preventing denial-of-service (DDoS) abuse, mitigating malicious traffic, diagnosing server crashes, and maintaining optimal bandwidth capacity. These logs are automatically purged on a scheduled rolling cycle.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Third-Party Networks and External CDNs</h2>
        <p>
          When you request public TikTok media via our interface, our system coordinates with public content delivery networks (CDNs) to fetch the requested public stream. Third-party content hosts may independently receive standard network requests generated when your browser plays or downloads video streams.
        </p>
        <p>
          We strongly advise reviewing the independent privacy policies of any third-party services you engage with across the web to understand their individual data handling standards.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Advertising Partners and Analytics</h2>
        <p>
          To maintain Tik Profiles Viewer as a 100% free service for everyone without charging subscription fees, our Website may display advertisements configured through reputable advertising networks such as Google AdSense.
        </p>
        <p>
          These advertising partners may use non-sensitive identifiers, standard cookies, or web beacons to deliver non-personalized or personalized advertisements based on your browsing interests in accordance with industry-standard privacy frameworks (such as IAB TCF and Google Privacy Controls). You have the right to disable personalized advertising through your browser settings or via the Digital Advertising Alliance consumer choice portal.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Local Storage and Client-Side Preferences</h2>
        <p>
          We utilize standard web browser LocalStorage exclusively for client-side user preferences, such as remembering your chosen language, selected dark/light visual settings, and administrator dashboard preferences. This data remains on your physical device and is never transmitted to our backend databases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">7. Protection of Minors (COPPA Compliance)</h2>
        <p>
          Our Website is a general-audience utility service and is not directed to children under the age of 13. We do not knowingly solicit, collect, or store personal information from children under 13 years of age. If you become aware that a child has provided us with personal information, please notify us immediately at <strong>legal@tikprofilesviewer.com</strong> so we can take prompt corrective action.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">8. User Rights (GDPR &amp; CCPA/CPRA)</h2>
        <p>
          Depending on your geographical jurisdiction (including the European Economic Area, United Kingdom, and California), you may be entitled to certain statutory privacy rights:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Right to Know / Access:</strong> Since we do not collect personal identifiers, we hold no user profiles or identifiable visitor data.</li>
          <li><strong>Right to Deletion:</strong> You may clear your browser cookies and LocalStorage at any time to remove all local website preferences.</li>
          <li><strong>Right to Opt-Out:</strong> We do not sell personal information as defined under the California Consumer Privacy Act (CCPA).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">9. Privacy Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time to maintain compliance with relevant data protection statutes and emerging technical requirements. Any updates will be published directly on this page with a revised date stamp.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\profile\[username]\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { getCreatorByUsername } from '@/lib/creators-data';

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const decodedUsername = decodeURIComponent(username).replace(/^@/, '');
  const creator = getCreatorByUsername(decodedUsername);

  const title = creator
    ? `${creator.displayName} (@${creator.username}) TikTok Profile - Tik Profiles Viewer`
    : `@${decodedUsername} TikTok Profile & Videos - Tik Profiles Viewer`;

  const description = creator
    ? `Watch and download @${creator.username}'s TikTok videos in HD MP4 without watermarks. View ${creator.followers} followers and MP3 audio tracks on TikProfilesViewer.com.`
    : `Watch and download @${decodedUsername}'s TikTok videos in watermark-free HD MP4 and MP3 audio on TikProfilesViewer.com.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://tikprofilesviewer.com/profile/${decodedUsername}`,
      images: creator?.avatar ? [{ url: creator.avatar, alt: creator.displayName }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://tikprofilesviewer.com/profile/${decodedUsername}`,
    },
  };
}

export default async function CreatorProfilePage({ params }: Props) {
  const { username } = await params;
  const decodedUsername = decodeURIComponent(username).replace(/^@/, '');
  const creator = getCreatorByUsername(decodedUsername);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: creator ? creator.displayName : decodedUsername,
      alternateName: `@${decodedUsername}`,
      identifier: decodedUsername,
      description: creator?.bio || `TikTok creator @${decodedUsername}`,
      interactionStatistic: [
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/FollowAction',
          userInteractionCount: creator?.followerCount || 0,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I download @${decodedUsername}'s TikTok videos without watermark?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Click any video in @${decodedUsername}'s grid above and click Download HD Video. The video saves directly to your device without watermark.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I download audio tracks from @${decodedUsername} in MP3?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Open any video and click Download Audio (MP3) to save the audio file.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is viewing @${decodedUsername}'s profile anonymous?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, 100% anonymous. You do not need a TikTok account, and the creator will never know you viewed their profile.`,
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        {/* Breadcrumb Navigation */}
        <Breadcrumbs
          items={[
            { label: 'Creators', href: '/creators' },
            { label: `@${decodedUsername}` },
          ]}
        />

        {/* Interactive TikTok Viewer Pre-Loaded with this Username */}
        <TikTokProfileViewer
          initialUsername={decodedUsername}
          autoSearch={true}
        />
      </main>

      <Footer />
    </div>
  );
}

```

# app\public-content-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Public Content Policy - Tik Profiles Viewer',
  description:
    'Our public content policy explaining how Tik Profiles Viewer accesses and displays only publicly available social media data without circumventing privacy controls.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/public-content-policy',
  },
};

export default function PublicContentPolicyPage() {
  return (
    <LegalLayout
      title="Public Content Policy"
      subtitle="How Tik Profiles Viewer identifies, accesses, and displays only publicly available social media data."
      summary="Tik Profiles Viewer strictly interacts with content that creators have chosen to make publicly accessible to the open internet. We do not bypass private accounts, age-gates, or digital security barriers."
      currentPath="/public-content-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Principle of Public Domain Availability</h2>
        <p>
          The architecture of <strong>Tik Profiles Viewer</strong> is grounded in the foundational internet principle of open accessibility. When social media creators configure their user accounts as &quot;Public&quot; and publish videos, captions, and profile photos to the web, that content is indexed and made accessible to web browsers globally without requiring account creation.
        </p>
        <p>
          Our service functions as an open web browser proxy and viewer interface that reads this publicly reachable information on-demand when a user initiates a search.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Strict Limitations on Content Access</h2>
        <p>We enforce strict technical boundaries regarding what our tools can and cannot access:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Private Accounts:</strong> If a creator has designated their TikTok account as &quot;Private&quot;, our system cannot, does not, and will never attempt to access, decrypt, or display their media or statistics.
          </li>
          <li>
            <strong>Deleted Content:</strong> Once a creator deletes a video or removes an account, our tools can no longer resolve the stream once third-party edge caches refresh.
          </li>
          <li>
            <strong>Friends-Only and Restricted Media:</strong> We cannot access posts shared exclusively with approved mutual followers or direct messages.
          </li>
          <li>
            <strong>No Circumvention:</strong> We never bypass, crack, or interfere with digital rights management (DRM), authentication tokens, or access controls.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Respect for Creator Privacy Choices</h2>
        <p>
          We firmly believe that creators retain ultimate control over their digital footprint. If you are a content creator and wish to prevent your public content from appearing in our web index, you have two simple options:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li>Switch your TikTok account settings to &quot;Private&quot; within the official TikTok application. This immediately blocks our service from retrieving your media.</li>
          <li>Submit an exclusion request to our compliance team under our <a href="/content-removal-policy" className="text-blue-600 hover:underline font-semibold">Content Removal Policy</a> to have your profile handle added to our internal blocklist.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Policy Contact</h2>
        <p>
          For questions regarding our public data handling or our technical indexing methodology, please reach out to <strong>legal@tikprofilesviewer.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\robots.ts

```ts
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.APP_URL || 'https://tikprofilesviewer.com';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

```

# app\security-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Security Policy - Tik Profiles Viewer',
  description:
    'Security Policy and data protection overview for Tik Profiles Viewer on TikProfilesViewer.com. Learn about our SSL/TLS encryption, WAF architecture, and vulnerability response standards.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/security-policy',
  },
};

export default function SecurityPolicyPage() {
  return (
    <LegalLayout
      title="Security Policy"
      subtitle="The technical standards, encryption protocols, and administrative controls implemented to protect our web platform and users."
      summary="Tik Profiles Viewer prioritizes user security and system resilience. We employ modern HTTPS/TLS encryption, cloud DDoS mitigation, and regular security reviews to maintain a secure, safe environment."
      currentPath="/security-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Security Overview</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>), we recognize the critical importance of cybersecurity in maintaining a trustworthy web utility. Our security strategy incorporates defense-in-depth principles, combining transport encryption, perimeter defense, and strict client-side data boundaries.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Transport Layer Encryption (HTTPS/TLS)</h2>
        <p>
          All network communications between your web browser and our application are encrypted using <strong>Transport Layer Security (TLS 1.3 / TLS 1.2)</strong> with modern, high-grade cryptographic cipher suites.
        </p>
        <p>
          We enforce <strong>HTTP Strict Transport Security (HSTS)</strong> to guarantee that your browser never transmits data over unencrypted HTTP channels, protecting against man-in-the-middle (MitM) eavesdropping, packet sniffing, and unauthorized network tampering.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Cloud Edge Defense &amp; DDoS Mitigation</h2>
        <p>Our web application is protected by enterprise-tier edge security services that feature:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Distributed Denial-of-Service (DDoS) Shielding:</strong> Continuous network traffic analysis to absorb multi-gigabit volumetric attacks at edge points of presence.</li>
          <li><strong>Web Application Firewall (WAF):</strong> Automated inspection of incoming HTTP payloads to intercept SQL injection, cross-site scripting (XSS), and malicious payload anomalies.</li>
          <li><strong>Rate Limiting &amp; Bot Management:</strong> Heuristic throttling mechanisms that protect backend compute nodes against brute-force automated scraping.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Minimal Attack Surface &amp; Zero Personal Storage</h2>
        <p>
          The most effective method of safeguarding visitor data is simply not retaining it. By deliberate architectural design:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>We do not operate user account databases that could be subject to credential-stuffing attacks or data leaks.</li>
          <li>We do not store passwords, financial accounts, or payment card details on our infrastructure.</li>
          <li>Client preferences are stored exclusively on your local device via standard browser LocalStorage.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Continuous Vulnerability Management &amp; Patching</h2>
        <p>
          Our technical stack runs on modern Next.js and Node.js frameworks that receive automated dependency vulnerability scanning via automated continuous integration (CI) tools. Security patches, kernel updates, and runtime packages are regularly reviewed and deployed to mitigate emerging Common Vulnerabilities and Exposures (CVEs).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Responsible Vulnerability Disclosure</h2>
        <p>
          We welcome responsible security researchers who discover potential vulnerabilities in our website. If you identify a security issue, we ask that you adhere to responsible disclosure principles:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li>Email details of the finding to <strong>legal@tikprofilesviewer.com</strong> with the subject <code>[Security Vulnerability Report]</code>.</li>
          <li>Provide reproducible steps, technical proofs-of-concept, and impacted endpoints.</li>
          <li>Allow us reasonable time to investigate, remediate, and patch the issue before making any public disclosures.</li>
          <li>Do not access or modify data belonging to other users or disrupt service operations during testing.</li>
        </ol>
      </section>
    </LegalLayout>
  );
}

```

# app\service-availability-policy\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Service Availability Policy - Tik Profiles Viewer',
  description:
    'Service Availability and Uptime policy for Tik Profiles Viewer on TikProfilesViewer.com. Explains technical maintenance windows, third-party network limitations, and service continuity.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/service-availability-policy',
  },
};

export default function ServiceAvailabilityPolicyPage() {
  return (
    <LegalLayout
      title="Service Availability Policy"
      subtitle="Information regarding technical uptime objectives, scheduled maintenance, and external dependency factors affecting availability."
      summary="We strive to provide dependable, round-the-clock uptime. However, because our service relies on external public network endpoints, temporary interruptions or rate limits may occur beyond our direct control."
      currentPath="/service-availability-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Service Availability Objectives</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>), our engineering team strives to deliver consistent, uninterrupted access to our viewer tools and profile analytics 24 hours a day, 7 days a week, 365 days a year.
        </p>
        <p>
          We employ containerized cloud deployments and geographically distributed Content Delivery Networks to achieve high availability. However, as a free utility service, we do not provide a legally binding Service Level Agreement (SLA) with financial credits for downtime.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. External Dependencies and Third-Party Limitations</h2>
        <p>
          Unlike closed platforms that generate all data internally, Tik Profiles Viewer depends on live public network connections to external social media platforms and third-party media delivery infrastructure. Consequently, service availability may be impacted by factors outside our direct operational control:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Third-Party API &amp; Web Changes:</strong> Changes to TikTok&apos;s public web layout, response headers, video compression formats, or CDN endpoints may temporarily prevent our parser from resolving media streams until our engineers deploy compatible updates.
          </li>
          <li>
            <strong>Platform Rate Limiting &amp; Anti-Bot Protections:</strong> During periods of heavy global traffic, third-party networks may temporarily throttle incoming requests from specific IP ranges, causing profile lookups to return delayed or unavailable responses.
          </li>
          <li>
            <strong>Regional Content Restrictions:</strong> Certain creator accounts or videos may be restricted by the platform in specific geographic jurisdictions due to local regulations or licensing agreements.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Scheduled Maintenance and System Upgrades</h2>
        <p>
          To ensure platform performance, security hardening, and database optimization, we periodically perform scheduled system maintenance.
        </p>
        <p>
          Whenever feasible, maintenance operations are scheduled during low-traffic hours and executed with rolling container deployments designed to eliminate or minimize noticeable downtime. In rare instances where brief maintenance windows are unavoidable, we work to restore full functionality as quickly as possible.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Force Majeure and Network Outages</h2>
        <p>
          We shall not be liable or responsible for any failure or delay in the performance of our service arising from events beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, telecommunications carrier failures, undersea cable breaks, power grid disruptions, widespread internet routing outages, or catastrophic cloud host failures.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Troubleshooting and Support</h2>
        <p>
          If you encounter an issue accessing a profile or downloading media:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Double-check that the creator username is spelled correctly and that the TikTok account is set to &quot;Public&quot;.</li>
          <li>Wait a few moments and try your request again, as temporary platform rate limits frequently clear within minutes.</li>
          <li>If an issue persists across multiple accounts, report the technical glitch to our engineering team at <strong>support@tikprofilesviewer.com</strong>.</li>
        </ul>
      </section>
    </LegalLayout>
  );
}

```

# app\sitemap.ts

```ts
import type { MetadataRoute } from 'next';
import { CATEGORIES, CREATORS } from '@/lib/creators-data';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.APP_URL || 'https://tikprofilesviewer.com';
  const currentDate = new Date();

  // Core static & tool pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tiktok-video-downloader`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.95,
    },
    {
      url: `${baseUrl}/tiktok-mp3-downloader`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok-profile-viewer`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok-analytics`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/creators`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tiktok-story-downloader`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok-photo-downloader`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tiktok-money-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tiktok-engagement-calculator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tiktok-caption-generator`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.85,
    },
    {
      url: `${baseUrl}/tiktok-watermark-remover`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-tiktok-profile-viewer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/how-to-use-tiktok-profile-viewer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    // Legal & Protection Pages
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/legal-notice`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/copyright-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/tiktok-independence-disclaimer`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/public-content-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/content-removal-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/acceptable-use-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/security-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/service-availability-policy`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  // Programmatic Category pages
  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((cat) => ({
    url: `${baseUrl}/category/${cat.slug}`,
    lastModified: currentDate,
    changeFrequency: 'daily',
    priority: 0.8,
  }));

  // Programmatic Profile pages
  const profilePages: MetadataRoute.Sitemap = CREATORS.map((creator) => ({
    url: `${baseUrl}/profile/${creator.username}`,
    lastModified: currentDate,
    changeFrequency: 'hourly',
    priority: 0.85,
  }));

  return [...staticPages, ...categoryPages, ...profilePages];
}

```

# app\terms-of-service\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - Tik Profiles Viewer',
  description:
    'Terms of Service and conditions for using Tik Profiles Viewer on TikProfilesViewer.com. Learn your rights and obligations when using our anonymous TikTok profile viewer and downloader.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The binding terms, rules, and conditions governing access to and use of Tik Profiles Viewer on TikProfilesViewer.com."
      summary="By accessing or using Tik Profiles Viewer, you agree to these Terms of Service. Our service allows users to inspect public creator profiles and download public media for personal, non-commercial use in compliance with applicable laws."
      currentPath="/terms-of-service"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p>
          Welcome to Tik Profiles Viewer, accessible at <strong>TikProfilesViewer.com</strong> (&quot;Website&quot;, &quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and the operators of Tik Profiles Viewer.
        </p>
        <p>
          By visiting, accessing, browsing, or utilizing any features of our Website, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms of Service, as well as our Privacy Policy, Cookie Policy, Acceptable Use Policy, and Copyright Policy. If you do not agree to all terms and conditions set forth herein, you must immediately cease all access and use of the Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Description of the Service</h2>
        <p>
          Tik Profiles Viewer is a web-based educational and utility platform designed to allow visitors to view publicly accessible information from the TikTok social media network. The features offered on the Website include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Viewing publicly available creator profile avatars, display names, bios, follower figures, following statistics, and total likes.</li>
          <li>Streaming publicly published short-form video content without logging into an account.</li>
          <li>Saving original high-definition video files (MP4) and audio sound tracks (MP3) for personal, offline, and archival use.</li>
          <li>Accessing creator tools such as engagement rate estimators and video metrics calculators.</li>
        </ul>
        <p>
          Our Service only indexes and proxies data that is already publicly visible on the open internet. We do not provide access to private accounts, deleted videos, geo-restricted media, or content behind account authentication walls.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Permitted and Non-Commercial Use</h2>
        <p>
          You are granted a limited, revocable, non-exclusive, non-transferable license to access and use the Website solely for personal, non-commercial, and lawful purposes. You agree that any videos, audios, images, or metrics retrieved through our Service will not be resold, repackaged, redistributed, broadcast, or commercially exploited in violation of third-party intellectual property rights.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. User Covenants and Prohibited Activities</h2>
        <p>When using Tik Profiles Viewer, you expressly warrant and agree that you will not:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Use the Service for any unlawful, fraudulent, defamatory, harassing, or malicious purpose.</li>
          <li>Attempt to bypass, disable, circumvent, or compromise the technical infrastructure, rate limits, or security controls of the Website.</li>
          <li>Deploy automated scrapers, bots, crawlers, or high-concurrency request engines that disrupt server performance or impose an unreasonable load on our infrastructure.</li>
          <li>Download or distribute copyright-protected media for commercial monetization without explicit authorization from the original content owner.</li>
          <li>Impersonate any person or entity, or falsely claim affiliation with TikTok, ByteDance, or Tik Profiles Viewer.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Intellectual Property Rights and Ownership</h2>
        <p>
          All trademarks, logos, brand names, service marks, software code, site layout, designs, text, and graphics created by Tik Profiles Viewer are the exclusive intellectual property of Tik Profiles Viewer.
        </p>
        <p>
          All TikTok trademarks, logos, sound recordings, and creator videos displayed or streamed via the Website remain the property of their respective creators and ByteDance Ltd. We do not claim any proprietary rights over content published by third parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Third-Party Links, APIs, and External Infrastructure</h2>
        <p>
          The Service may retrieve information from third-party networks and APIs. We have no direct control over the content, uptime, availability, privacy policies, or practices of third-party platforms. You acknowledge that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused by your interaction with external third-party services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">7. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, OR VIRUS-FREE.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">8. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL TIK PROFILES VIEWER, ITS OPERATORS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, DATA LOSS, OR SYSTEM DAMAGE ARISING FROM YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">9. Modifications to the Service and Terms</h2>
        <p>
          We reserve the right to modify, alter, suspend, or discontinue any aspect of the Service at our sole discretion without prior notice. We may update these Terms of Service periodically to reflect changes in our legal obligations, service enhancements, or regulatory requirements. Continued use of the Website after any revision constitutes your full acceptance of the updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">10. Governing Law and Severability</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with applicable general commercial laws, without regard to conflict of law principles. If any provision of these Terms is determined by a court of competent jurisdiction to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall continue in full force and effect.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\tiktok-analytics\page.tsx

```tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  Search,
  Loader2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export default function TikTokAnalyticsPage() {
  // Manual Calculator state
  const [calcLikes, setCalcLikes] = useState<string>('12500');
  const [calcComments, setCalcComments] = useState<string>('850');
  const [calcShares, setCalcShares] = useState<string>('1200');
  const [calcViews, setCalcViews] = useState<string>('150000');

  // Audit state
  const [auditUsername, setAuditUsername] = useState<string>('mrbeast');
  const [auditLoading, setAuditLoading] = useState<boolean>(false);
  const [auditResult, setAuditResult] = useState<{
    unique_id: string;
    nickname: string;
    avatar: string;
    followers: number;
    totalLikes: number;
    videoCount: number;
    avgViews: number;
    avgLikes: number;
    avgShares: number;
    engagementRate: number;
  } | null>(null);
  const [auditError, setAuditError] = useState<string | null>(null);

  // Manual calculation: ((Likes + Comments + Shares) / Views) * 100
  const likesNum = parseFloat(calcLikes) || 0;
  const commentsNum = parseFloat(calcComments) || 0;
  const sharesNum = parseFloat(calcShares) || 0;
  const viewsNum = parseFloat(calcViews) || 1;

  const totalInteractions = likesNum + commentsNum + sharesNum;
  const manualEngagementRate = viewsNum > 0 ? (totalInteractions / viewsNum) * 100 : 0;

  const getRating = (rate: number) => {
    if (rate >= 9) return { label: 'Top 1% Viral', color: 'text-emerald-700 bg-emerald-50 border-emerald-200' };
    if (rate >= 6) return { label: 'High Engagement', color: 'text-blue-700 bg-blue-50 border-blue-200' };
    if (rate >= 3) return { label: 'Average Engagement', color: 'text-amber-700 bg-amber-50 border-amber-200' };
    return { label: 'Low Engagement', color: 'text-rose-700 bg-rose-50 border-rose-200' };
  };

  const handleAudit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const clean = auditUsername.replace(/^@/, '').trim();
    if (!clean) return;

    setAuditLoading(true);
    setAuditError(null);

    try {
      const res = await fetch(`/api/tiktok?username=${encodeURIComponent(clean)}`);
      const data = await res.json();

      if (!data || data.code !== 0 || !data.data) {
        throw new Error(data?.msg || 'Creator not found or account is private.');
      }

      const videos = data.data.videos || [];
      const user = data.data.user || {};
      const stats = data.data.stats || {};

      if (videos.length === 0) {
        throw new Error('User has no public videos available to analyze.');
      }

      let totalPlay = 0;
      let totalDigg = 0;
      let totalShare = 0;

      for (const v of videos) {
        totalPlay += Number(v.play_count) || 0;
        totalDigg += Number(v.digg_count) || 0;
        totalShare += Number(v.share_count) || 0;
      }

      const sampleCount = videos.length;
      const avgViews = Math.round(totalPlay / sampleCount);
      const avgLikes = Math.round(totalDigg / sampleCount);
      const avgShares = Math.round(totalShare / sampleCount);
      const rate = totalPlay > 0 ? ((totalDigg + totalShare) / totalPlay) * 100 : 0;

      setAuditResult({
        unique_id: user.unique_id || clean,
        nickname: user.nickname || clean,
        avatar: user.avatar || '',
        followers: Number(stats.followerCount) || 0,
        totalLikes: Number(stats.heartCount) || totalDigg,
        videoCount: Number(stats.videoCount) || sampleCount,
        avgViews,
        avgLikes,
        avgShares,
        engagementRate: parseFloat(rate.toFixed(2)),
      });
    } catch (err: unknown) {
      setAuditError(err instanceof Error ? err.message : 'Audit failed.');
      setAuditResult(null);
    } finally {
      setAuditLoading(false);
    }
  };

  const rating = getRating(manualEngagementRate);

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'TikTok Analytics' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            TikTok Engagement Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Check engagement rates, average views, and video performance for any public creator.
          </p>
        </div>

        {/* Section 1: Live Creator Auditor */}
        <div className="mb-12 p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Audit Any Creator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Enter a TikTok username to analyze their latest 30 videos and find their real engagement score.
          </p>

          <form onSubmit={handleAudit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
            <div className="relative flex-1">
              <span className="absolute left-3.5 top-2.5 text-slate-400 font-bold">@</span>
              <input
                type="text"
                value={auditUsername}
                onChange={(e) => setAuditUsername(e.target.value)}
                placeholder="TikTok username (e.g. mrbeast)"
                className="w-full pl-8 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500"
              />
            </div>
            <button
              type="submit"
              disabled={auditLoading}
              className="px-6 py-2.5 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-sm disabled:opacity-50 cursor-pointer"
            >
              {auditLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Auditing...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4" />
                  <span>Audit Creator</span>
                </>
              )}
            </button>
          </form>

          {auditError && (
            <div className="mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-700">
              {auditError}
            </div>
          )}

          {auditResult && (
            <div className="mt-8 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-4 flex items-center justify-between flex-wrap gap-3 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={auditResult.avatar}
                    alt={auditResult.nickname}
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full object-cover border border-slate-200 bg-slate-100"
                    onError={(e) => {
                      const target = e.currentTarget as HTMLImageElement;
                      target.src = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=60';
                    }}
                  />
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">{auditResult.nickname}</h3>
                    <p className="text-xs text-slate-500 font-mono">@{auditResult.unique_id}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getRating(auditResult.engagementRate).color}`}>
                    {getRating(auditResult.engagementRate).label}
                  </span>
                  <Link
                    href={`/profile/${auditResult.unique_id}`}
                    className="text-xs font-semibold px-3 py-1 rounded-xl bg-slate-900 hover:bg-black text-white transition-colors"
                  >
                    View All Videos
                  </Link>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Engagement Rate</span>
                <span className="text-2xl font-black text-slate-900 font-mono">
                  {auditResult.engagementRate}%
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Interactions / Views</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Avg. Views per Post</span>
                <span className="text-xl font-black text-slate-900 font-mono">
                  {auditResult.avgViews.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Recent 30 videos</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Avg. Likes per Post</span>
                <span className="text-xl font-black text-slate-900 font-mono">
                  {auditResult.avgLikes.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Average likes</span>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100">
                <span className="text-slate-500 text-xs block">Avg. Shares per Post</span>
                <span className="text-xl font-black text-slate-900 font-mono">
                  {auditResult.avgShares.toLocaleString()}
                </span>
                <span className="text-[10px] text-slate-400 block mt-1">Average shares</span>
              </div>
            </div>
          )}
        </div>

        {/* Section 2: Interactive Manual Calculator */}
        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-xs mb-12">
          <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
            Manual Engagement Calculator
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mb-6">
            Type your views, likes, comments, and shares to calculate your score.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            {/* Form Inputs */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Video Views
                </label>
                <input
                  type="number"
                  value={calcViews}
                  onChange={(e) => setCalcViews(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Total Likes
                </label>
                <input
                  type="number"
                  value={calcLikes}
                  onChange={(e) => setCalcLikes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Comments Count
                </label>
                <input
                  type="number"
                  value={calcComments}
                  onChange={(e) => setCalcComments(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1.5">
                  Shares Count
                </label>
                <input
                  type="number"
                  value={calcShares}
                  onChange={(e) => setCalcShares(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:border-sky-500 font-mono"
                />
              </div>
            </div>

            {/* Result Display Box */}
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col items-center justify-center text-center gap-3">
              <span className="text-xs uppercase tracking-wider font-semibold text-slate-500">
                Calculated Engagement
              </span>
              <div className="text-5xl font-black text-slate-900 font-mono">
                {manualEngagementRate.toFixed(2)}%
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-bold border ${rating.color}`}>
                {rating.label}
              </span>
              <p className="text-[11px] text-slate-400 mt-1">
                Formula: ((Likes + Comments + Shares) / Views) x 100
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-caption-generator\page.tsx

```tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { Hash, Copy, Check, Sparkles, RefreshCw } from 'lucide-react';

const PRESET_HOOKS = [
  'Wait until the end to see what happened...',
  'Tell me you do this too without actually telling me 💀',
  'Stop scrolling if you need this today!',
  'I tested this TikTok life hack so you don’t have to...',
  'Why did nobody tell me about this earlier?!',
  'The secret nobody wants to talk about 👀',
  'Here is what happened when I tried this for 7 days:',
  'Save this video before TikTok takes it down!',
];

const PRESET_TAGS: Record<string, string[]> = {
  Viral: ['#fyp', '#foryou', '#viral', '#trending', '#tiktok', '#explore', '#foryoupage'],
  Comedy: ['#funny', '#comedy', '#lol', '#humor', '#meme', '#sketch', '#relatable'],
  Food: ['#foodtiktok', '#recipe', '#easyrecipe', '#cheflife', '#foodie', '#delicious'],
  Tech: ['#techtok', '#techreview', '#gadgets', '#apple', '#ai', '#productivity'],
  Fitness: ['#gymtok', '#workout', '#fitnesstips', '#calisthenics', '#bodybuilding'],
  Dance: ['#dancetrend', '#dance', '#choreography', '#music', '#trendingdance'],
};

export default function CaptionGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [niche, setNiche] = useState('Viral');
  const [generatedHook, setGeneratedHook] = useState(PRESET_HOOKS[0]);
  const [copied, setCopied] = useState(false);

  const generateNewHook = () => {
    const random = PRESET_HOOKS[Math.floor(Math.random() * PRESET_HOOKS.length)];
    setGeneratedHook(random);
  };

  const currentTags = PRESET_TAGS[niche] || PRESET_TAGS.Viral;
  const fullCaption = `${topic ? topic + ' — ' : ''}${generatedHook}\n\n${currentTags.join(' ')}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCaption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Caption & Hashtag Generator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Caption &amp; Hashtag Generator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Generate viral hooks, punchy video captions, and high-reach hashtags designed to boost your FYP views and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#01ebe4]" />
              <span>Choose Your Topic &amp; Niche</span>
            </h2>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Video Topic (Optional)
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. 3 Morning habits that changed my life"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs text-slate-900 focus:outline-slate-900"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Content Niche
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(PRESET_TAGS).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNiche(cat)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      niche === cat
                        ? 'bg-slate-900 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={generateNewHook}
              className="w-full py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-800 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Generate Another Viral Hook</span>
            </button>
          </div>

          {/* Output Preview Column */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Ready-to-Paste Caption
                </span>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#01ebe4]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Caption'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-900 whitespace-pre-wrap leading-relaxed select-all">
                {fullCaption}
              </div>

              {/* Hashtags list */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentTags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-purple-50 text-purple-700 font-semibold border border-purple-100"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-4">
              Tip: Keep your video caption under 150 characters to ensure the hook is visible on mobile before the user expands the text.
            </p>
          </div>
        </div>

        <AdSlot placement="footer" />
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-engagement-calculator\page.tsx

```tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { Percent, CheckCircle2, TrendingUp, HelpCircle } from 'lucide-react';

export default function EngagementCalculatorPage() {
  const [followers, setFollowers] = useState<string>('250000');
  const [likes, setLikes] = useState<string>('18500');
  const [comments, setComments] = useState<string>('950');
  const [shares, setShares] = useState<string>('1200');

  const fNum = Math.max(1, Number(followers) || 0);
  const lNum = Number(likes) || 0;
  const cNum = Number(comments) || 0;
  const sNum = Number(shares) || 0;

  const totalInteractions = lNum + cNum + sNum;
  const engagementRate = ((totalInteractions / fNum) * 100);

  let rating = 'Good';
  let badgeColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
  if (engagementRate < 3) {
    rating = 'Below Average (< 3%)';
    badgeColor = 'text-amber-400 border-amber-500/40 bg-amber-500/10';
  } else if (engagementRate >= 3 && engagementRate < 6) {
    rating = 'Average (3% - 6%)';
    badgeColor = 'text-sky-400 border-sky-500/40 bg-sky-500/10';
  } else if (engagementRate >= 6 && engagementRate < 12) {
    rating = 'High Engagement (6% - 12%)';
    badgeColor = 'text-emerald-400 border-emerald-500/40 bg-emerald-500/10';
  } else {
    rating = 'Viral / Superstar (12%+)';
    badgeColor = 'text-[#01ebe4] border-[#01ebe4]/40 bg-[#01ebe4]/10';
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Engagement Rate Calculator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Engagement Rate Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Measure the engagement rate of any TikTok creator or campaign. Compare performance against industry benchmarks.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Inputs Column */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-4">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <Percent className="w-4 h-4 text-[#fe2858]" />
              <span>Enter Video or Account Stats</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Total Followers
                </label>
                <input
                  type="number"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs font-mono font-bold text-slate-900 focus:outline-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Likes Count
                </label>
                <input
                  type="number"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs font-mono font-bold text-slate-900 focus:outline-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Comments Count
                </label>
                <input
                  type="number"
                  value={comments}
                  onChange={(e) => setComments(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs font-mono font-bold text-slate-900 focus:outline-slate-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Shares Count
                </label>
                <input
                  type="number"
                  value={shares}
                  onChange={(e) => setShares(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-white text-xs font-mono font-bold text-slate-900 focus:outline-slate-900"
                />
              </div>
            </div>

            <p className="text-[11px] text-slate-400 pt-2">
              Formula: (Likes + Comments + Shares) / Followers × 100
            </p>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                Engagement Rate Result
              </span>
              <div className="text-4xl sm:text-5xl font-mono font-black text-[#01ebe4]">
                {engagementRate.toFixed(2)}%
              </div>

              <div className={`mt-4 inline-block px-3 py-1.5 rounded-lg border text-xs font-bold ${badgeColor}`}>
                {rating}
              </div>

              <div className="mt-6 space-y-2 text-xs border-t border-white/10 pt-4">
                <div className="flex justify-between">
                  <span className="text-slate-400">Total Interactions:</span>
                  <span className="font-mono font-bold">{totalInteractions.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Audience Base:</span>
                  <span className="font-mono font-bold">{fNum.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">
              Standard TikTok engagement typically ranges between 4% and 8%. Creators above 10% command premium sponsor pricing.
            </p>
          </div>
        </div>

        <AdSlot placement="above_grid" />

        {/* Benchmarks Table */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs my-8">
          <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-4">
            TikTok Engagement Rate Benchmarks (By Account Size)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900">Nano (1K - 10K)</strong>
              <span className="text-emerald-600 font-bold font-mono text-sm">7% – 12%</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900">Micro (10K - 100K)</strong>
              <span className="text-emerald-600 font-bold font-mono text-sm">5% – 9%</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900">Mid (100K - 500K)</strong>
              <span className="text-sky-600 font-bold font-mono text-sm">4% – 7%</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <strong className="block text-slate-900">Macro (500K+)</strong>
              <span className="text-purple-600 font-bold font-mono text-sm">3% – 5%</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-independence-disclaimer\page.tsx

```tsx
import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'TikTok Independence Disclaimer - Tik Profiles Viewer',
  description:
    'Official statement of non-affiliation and independence regarding TikTok Inc., ByteDance Ltd., and third-party trademarks on TikProfilesViewer.com.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-independence-disclaimer',
  },
};

export default function TikTokIndependenceDisclaimerPage() {
  return (
    <LegalLayout
      title="TikTok Independence Disclaimer"
      subtitle="Clear and unambiguous disclosure regarding our autonomous operational status and lack of corporate affiliation with ByteDance or TikTok."
      summary="Tik Profiles Viewer is an entirely independent web platform. We are not owned, operated, authorized, endorsed, sponsored, or affiliated with TikTok Inc., ByteDance Ltd., or any of their global subsidiaries."
      currentPath="/tiktok-independence-disclaimer"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Formal Statement of Independence</h2>
        <p>
          <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>) is an autonomous web service engineered and maintained by an independent group of web developers and enthusiasts.
        </p>
        <p>
          We explicitly affirm that our Website, software, brand identity, and operations are <strong>not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with TikTok Inc., ByteDance Ltd., Musical.ly, or any of their subsidiary corporate entities</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Trademark and Brand Ownership</h2>
        <p>
          The word mark &quot;TikTok&quot;, the stylized music note logo, and all related brand assets, trade dress, product names, and company emblems are registered trademarks owned exclusively by ByteDance Ltd. and its affiliates.
        </p>
        <p>
          Any use of the word &quot;TikTok&quot; on TikProfilesViewer.com is made strictly for <strong>descriptive, nominative, and identification purposes</strong> to truthfully indicate the third-party platform whose publicly accessible profile information our utility is engineered to display. Such nominative usage constitutes protected fair use and does not suggest any corporate partnership, sponsorship, or licensing arrangement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Official Channels and Inquiries</h2>
        <p>
          For official TikTok customer support, safety inquiries, creator program enrollment, advertising accounts, or to download the official mobile apps, please consult the official TikTok platforms:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Official Website:</strong> <code>https://www.tiktok.com</code></li>
          <li><strong>Official Newsroom:</strong> <code>https://newsroom.tiktok.com</code></li>
          <li><strong>Help &amp; Support Portal:</strong> <code>https://support.tiktok.com</code></li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Consumer Clarity</h2>
        <p>
          By using Tik Profiles Viewer, you confirm your understanding that you are using an independent third-party web tool. If you have questions regarding our operational independence or this disclosure, please contact our legal team at <strong>legal@tikprofilesviewer.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}

```

# app\tiktok-money-calculator\page.tsx

```tsx
'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { DollarSign, Sparkles, TrendingUp, Users, Eye, HelpCircle } from 'lucide-react';

export default function MoneyCalculatorPage() {
  const [followers, setFollowers] = useState<number>(500000);
  const [avgViews, setAvgViews] = useState<number>(120000);
  const [engagementRate, setEngagementRate] = useState<number>(6.5);

  // Earnings estimation algorithm based on industry creator sponsor rates and TikTok Creator Rewards RPM ($0.40 - $1.20 per 1k views)
  const creatorRewardsPerVideo = (avgViews / 1000) * 0.85; // RPM ~$0.85
  const sponsorRateMin = Math.round((followers * 0.0025 + avgViews * 0.004) * (1 + (engagementRate - 5) * 0.05));
  const sponsorRateMax = Math.round(sponsorRateMin * 1.8);
  const monthlyEstimatedMin = Math.round((creatorRewardsPerVideo * 12) + (sponsorRateMin * 3));
  const monthlyEstimatedMax = Math.round((creatorRewardsPerVideo * 18) + (sponsorRateMax * 4));

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Money Calculator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Money &amp; Earnings Calculator
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Calculate how much TikTok creators make per video and per sponsored brand deal based on followers, average views, and engagement rates.
          </p>
        </div>

        {/* Interactive Calculator Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Controls Column */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs space-y-6">
            <h2 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3 flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#01ebe4]" />
              <span>Creator Metrics Inputs</span>
            </h2>

            {/* Slider 1: Followers */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-slate-500" />
                  <span>Follower Count</span>
                </label>
                <span className="font-mono font-black text-sm text-slate-900">
                  {followers.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="10000"
                max="10000000"
                step="10000"
                value={followers}
                onChange={(e) => setFollowers(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>10K</span>
                <span>1M</span>
                <span>10M+</span>
              </div>
            </div>

            {/* Slider 2: Average Views */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-slate-500" />
                  <span>Average Views per Video</span>
                </label>
                <span className="font-mono font-black text-sm text-slate-900">
                  {avgViews.toLocaleString()}
                </span>
              </div>
              <input
                type="range"
                min="5000"
                max="3000000"
                step="5000"
                value={avgViews}
                onChange={(e) => setAvgViews(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>5K</span>
                <span>500K</span>
                <span>3M+</span>
              </div>
            </div>

            {/* Slider 3: Engagement Rate */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs">
                <label className="font-bold text-slate-700 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-slate-500" />
                  <span>Engagement Rate (%)</span>
                </label>
                <span className="font-mono font-black text-sm text-[#fe2858]">
                  {engagementRate.toFixed(1)}%
                </span>
              </div>
              <input
                type="range"
                min="1.0"
                max="20.0"
                step="0.5"
                value={engagementRate}
                onChange={(e) => setEngagementRate(Number(e.target.value))}
                className="w-full accent-slate-900 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                <span>1% (Low)</span>
                <span>5.5% (Average)</span>
                <span>15%+ (Viral)</span>
              </div>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold text-[#01ebe4] uppercase tracking-wider mb-2">
                <DollarSign className="w-4 h-4" />
                <span>Estimated Earnings</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black">
                Estimated Sponsored Deal
              </h3>
              <div className="my-5 p-4 rounded-xl bg-white/10 border border-white/10">
                <span className="text-xs text-slate-300 block mb-1">Per Sponsored Post:</span>
                <span className="text-2xl sm:text-3xl font-mono font-black text-[#01ebe4]">
                  ${sponsorRateMin.toLocaleString()} – ${sponsorRateMax.toLocaleString()}
                </span>
              </div>

              <div className="space-y-2.5 text-xs">
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Creator Rewards Program:</span>
                  <span className="font-mono font-bold text-white">~${Math.round(creatorRewardsPerVideo).toLocaleString()} / video</span>
                </div>
                <div className="flex justify-between py-1.5 border-b border-white/10">
                  <span className="text-slate-400">Estimated Monthly Total:</span>
                  <span className="font-mono font-bold text-emerald-400">${monthlyEstimatedMin.toLocaleString()} – ${monthlyEstimatedMax.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 mt-6 leading-relaxed">
              *Estimates are calculated based on public influencer agency metrics and TikTok Creator Rewards program RPM benchmarks. Actual payments vary by niche and creator audience demographics.
            </p>
          </div>
        </div>

        <AdSlot placement="footer" />

        {/* Informative Guide Section */}
        <section className="bg-white rounded-xl border border-slate-200 p-6 sm:p-8 shadow-xs my-8 space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            How Do TikTok Creators Earn Money?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm text-slate-600">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block mb-1">Brand Sponsorships</strong>
              Brands pay creators to feature products, wear apparel, or integrate songs in viral videos.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block mb-1">Creator Rewards Program</strong>
              TikTok pays creators directly for videos longer than 1 minute based on qualified views and watch time.
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-100">
              <strong className="text-slate-900 block mb-1">Affiliate &amp; TikTok Shop</strong>
              Creators earn 5% to 20% commission on every product sold through their video showcase pins.
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-mp3-downloader\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok MP3 Downloader - Extract High Quality Audio Free',
  description: 'Download original TikTok music, sounds, and speech in MP3 format. 100% free with no limits on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok MP3 Downloader - Extract High Quality Audio Free',
    description: 'Download original TikTok music, sounds, and speech in MP3 format. 100% free on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/tiktok-mp3-downloader',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-mp3-downloader',
  },
};

export default function AudioDownloaderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What audio format does Tik Profiles Viewer give me?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The audio is saved directly as a clean MP3 file that plays on any phone, computer, or music player.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I download songs from dance videos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. You can extract music, speech, and sound effects from any public video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is the audio download free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free with no limits.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Audio MP3 Downloader' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            TikTok MP3 Audio Downloader
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Extract and download MP3 music tracks and voice audio from any TikTok video for free.
          </p>
        </div>

        {/* Interactive Downloader */}
        <TikTokProfileViewer
          initialUsername="bellapoarch"
          autoSearch={true}
          title="Extract Audio Live"
          subtitle="Select any video below and click 'Download Audio (MP3)'"
        />

        {/* Audio Features Section */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-slate-900">Clean Sound Quality</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enjoy clear sound reproduction. Music and voice are preserved with original audio clarity.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-slate-900">Original Voice & Music</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Works on official TikTok songs, user voiceovers, podcast clips, and comedy sounds.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-slate-900">One-Click Save</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Save audio directly without downloading the full video. Save space and time on your device.
              </p>
            </div>
          </div>
        </section>

        {/* Audio FAQs */}
        <section className="mt-14 pt-10 border-t border-slate-200 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              TikTok Audio FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-photo-downloader\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Photo & Slideshow Downloader - Save Carousel Pictures in HD',
  description:
    'Download full resolution photos, image carousels, and slideshow pictures from TikTok without watermarks. Free tool on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Photo & Slideshow Downloader - Save Carousel Pictures in HD',
    description:
      'Download full resolution photos, image carousels, and slideshow pictures from TikTok without watermarks.',
    url: 'https://tikprofilesviewer.com/tiktok-photo-downloader',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-photo-downloader',
  },
};

export default function PhotoDownloaderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I download pictures from a TikTok slideshow?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Search the creator username or open any photo carousel video. Click Download to save the high-resolution images directly to your device without any watermarks or compressed quality.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I download the background music attached to the photo carousel?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! You can download both the high-resolution photos and the accompanying audio sound in clean 320kbps MP3 format.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Photo & Slideshow Downloader' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Photo &amp; Slideshow Downloader
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Extract and download full-resolution pictures, photo carousels, and slideshow albums from TikTok without watermarks or compression.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername="bellapoarch"
          autoSearch={true}
          title="Photo & Carousel Downloader"
          subtitle="Explore creators and download HD photos, thumbnails, and avatars"
        />

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{faq.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-profile-viewer\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'Anonymous TikTok Profile Viewer - View Any Profile Without Account',
  description: 'View TikTok profiles, follower counts, and videos anonymously without an account. Safe, free, and private on TikProfilesViewer.com.',
  openGraph: {
    title: 'Anonymous TikTok Profile Viewer - View Any Profile Without Account',
    description: 'View TikTok profiles, follower counts, and videos anonymously without an account on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/tiktok-profile-viewer',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-profile-viewer',
  },
};

export default function ProfileViewerPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can someone see that I viewed their TikTok profile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. You do not need to log in to TikTok, so your name will never show up on anyone profile view list.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to install any app or extension?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Tik Profiles Viewer works directly in your web browser on your phone, tablet, or computer.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I view private accounts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. Only public accounts and public videos can be viewed.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Profile Viewer' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            Anonymous TikTok Profile Viewer
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Search any public TikTok creator, see their follower stats, and watch videos anonymously without an account.
          </p>
        </div>

        {/* Interactive Viewer */}
        <TikTokProfileViewer
          initialUsername="zachking"
          autoSearch={true}
          title="Anonymous Viewer Demo"
          subtitle="Explore any public TikTok profile privately"
        />

        {/* Privacy Features */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-slate-900">100% Anonymous</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Creators cannot see that you watched their videos or checked their follower count.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-slate-900">No Account Needed</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                You never need to log in or share any email or password.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <h3 className="text-base font-bold text-slate-900">Accurate Live Stats</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                See real-time follower counts, total likes, and public video counts directly from TikTok.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-14 pt-10 border-t border-slate-200 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Anonymous Viewer FAQs
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-story-downloader\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Story Downloader - Download Stories Anonymously in HD',
  description:
    'Download and watch TikTok stories anonymously before they expire in 24 hours. Free, watermark-free HD story downloader on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Story Downloader - Download Stories Anonymously in HD',
    description:
      'Download and watch TikTok stories anonymously before they expire in 24 hours without watermark.',
    url: 'https://tikprofilesviewer.com/tiktok-story-downloader',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-story-downloader',
  },
};

export default function StoryDownloaderPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Can you download a TikTok story anonymously?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. By searching the creator username on TikProfilesViewer.com, you can stream and download their public stories without logging in or appearing in their viewer list.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do TikTok stories expire after 24 hours?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, TikTok stories disappear from the app after 24 hours. Our downloader allows you to save the original HD MP4 video permanently to your device before it vanishes.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there a watermark on downloaded stories?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. All stories downloaded through our service are pure original video streams without any TikTok watermark logo.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Story Downloader' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Story Downloader
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Download TikTok stories anonymously in original HD quality before they expire. Save clean MP4 videos with no watermarks and no login required.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername="khaby.lame"
          autoSearch={true}
          title="Story & Video Downloader"
          subtitle="Search any creator to view stories and download uploads in HD"
        />

        {/* Feature Highlights */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Permanent Archive</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save 24-hour disappearing stories to your gallery forever before they are removed.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Total Anonymity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Watch stories without logging in. The creator never receives a notification or viewer view.
              </p>
            </div>
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Watermark-Free MP4</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Clean high definition MP4 video streams ready for editing, sharing, or offline viewing.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{faq.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-video-downloader\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';

export const metadata: Metadata = {
  title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
  description: 'Download TikTok videos without watermark in HD MP4 quality. 100% free, fast, and no account needed on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Video Downloader Without Watermark - Free HD MP4',
    description: 'Download TikTok videos without watermark in HD MP4 quality. 100% free and fast on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/tiktok-video-downloader',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-video-downloader',
  },
};

export default function VideoDownloaderPage() {
  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Download TikTok Videos Without Watermark',
    description: 'A 3-step guide to download watermark-free HD TikTok videos using Tik Profiles Viewer.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Search Creator Username',
        text: 'Type the TikTok username (e.g. khaby.lame) in the search bar and click Search.',
      },
      {
        '@type': 'HowToStep',
        name: 'Select Video',
        text: 'Click any video from the grid to open the video player.',
      },
      {
        '@type': 'HowToStep',
        name: 'Click Download HD Video',
        text: 'Click Download HD Video to save the clean MP4 file to your device.',
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Do downloaded videos have a TikTok watermark or logo?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The video stream is saved directly before any watermark is added, giving you clean HD MP4 video.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is Tik Profiles Viewer free to use?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, 100% free with no subscription and no fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'Does it work on phones and computers?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. It works in any web browser on iPhone, Android, Mac, and Windows PC.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f0f4f9] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Video Downloader' }]} />

        {/* Hero Section: NO pill tag */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight">
            TikTok Video Downloader
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Download TikTok videos in original HD MP4 format without watermarks for free.
          </p>
        </div>

        {/* Interactive Downloader */}
        <TikTokProfileViewer
          initialUsername="khaby.lame"
          autoSearch={true}
          title="Try Downloader Live"
          subtitle="Search any creator or use the demo profile below to test instant HD downloads"
        />

        {/* How It Works 3-Step Guide */}
        <section className="mt-16 pt-10 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              How to Download TikTok Videos
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Save your favorite videos in three easy steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                1
              </div>
              <h3 className="text-base font-bold text-slate-900">Enter Username</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Type the username of any public TikTok creator in the search bar.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                2
              </div>
              <h3 className="text-base font-bold text-slate-900">Pick a Video</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click any video thumbnail from the grid to open the video player.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-slate-900 text-white font-bold flex items-center justify-center text-sm">
                3
              </div>
              <h3 className="text-base font-bold text-slate-900">Download Video</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Click Download HD Video to save the clean MP4 file directly to your device.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-14 pt-10 border-t border-slate-200 mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {faqSchema.mainEntity.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col gap-2">
                <h3 className="text-sm font-bold text-slate-900">{item.name}</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.acceptedAnswer.text}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# app\tiktok-watermark-remover\page.tsx

```tsx
import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import AdSlot from '@/components/AdSlot';

export const metadata: Metadata = {
  title: 'TikTok Watermark Remover - Remove TikTok Logo Online Free',
  description:
    'Remove TikTok watermark logo and creator username tag online. Download clean 1080p HD MP4 videos without watermark for Reels, Shorts, and offline use on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Watermark Remover - Remove TikTok Logo Online Free',
    description:
      'Remove TikTok watermark logo and creator username tag online. Download clean 1080p HD MP4 videos.',
    url: 'https://tikprofilesviewer.com/tiktok-watermark-remover',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-watermark-remover',
  },
};

export default function WatermarkRemoverPage() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How does Tik Profiles Viewer remove TikTok watermarks?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Instead of blurring or cropping the screen, our engine accesses the raw original MP4 video stream directly from TikTok content delivery servers before the app applies the bouncing watermark logo.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is there any loss of video quality when removing the watermark?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The video is downloaded in original 1080p / 720p resolution without re-compression or loss of fidelity.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I repost watermark-free videos to Instagram Reels or YouTube Shorts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Both Instagram Reels and YouTube Shorts algorithms downrank videos with visible TikTok watermarks. Using Tik Profiles Viewer ensures your videos remain clean and eligible for maximum reach.',
        },
      },
    ],
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <Breadcrumbs items={[{ label: 'TikTok Watermark Remover' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Watermark Remover
          </h1>
          <p className="text-sm sm:text-base text-slate-600 mt-3 leading-relaxed">
            Extract pure, original HD MP4 videos without the bouncing TikTok watermark logo or end credit cards. 100% free with unlimited downloads.
          </p>
        </div>

        <TikTokProfileViewer
          initialUsername="mrbeast"
          autoSearch={true}
          title="Watermark Remover Engine"
          subtitle="Search any creator username to stream and download watermark-free HD videos"
        />

        {/* 3 Step Explanation */}
        <section className="mt-14 pt-8 border-t border-slate-200">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h2 className="text-xl font-bold text-slate-900">
              Why Remove TikTok Watermarks?
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              Repurpose short-form videos across all major platforms with maximum engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Boost Instagram Reels Reach</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Instagram officially penalizes clips with TikTok logos. Watermark-free clips receive full organic distribution.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">YouTube Shorts Monetization</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Eligible for YouTube Shorts Creator Fund and Ads revenue without third-party brand marks.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
              <h3 className="font-bold text-sm text-slate-900 mb-1">Clean Portfolio Archiving</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Save clean master copies of your original creative work in original 1080p resolution.
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mt-12 pt-8 border-t border-slate-200 mb-10">
          <h2 className="text-xl font-bold text-slate-900 text-center mb-6">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">{faq.name}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

```

# components\AdSlot.tsx

```tsx
'use client';

import { useSiteSettings, AdPlacement } from '@/lib/settings-store';
import { useEffect, useRef } from 'react';

interface AdSlotProps {
  placement: AdPlacement['placement'];
  className?: string;
}

export default function AdSlot({ placement, className = '' }: AdSlotProps) {
  const [settings] = useSiteSettings();
  const containerRef = useRef<HTMLDivElement>(null);

  const ad = settings.ads?.find((a) => a.placement === placement && a.enabled);

  useEffect(() => {
    if (!ad || !ad.code || !containerRef.current) return;

    // Check if the code contains <script> tags and execute them safely
    const container = containerRef.current;
    container.innerHTML = ad.code;

    const scripts = container.getElementsByTagName('script');
    for (let i = 0; i < scripts.length; i++) {
      const script = scripts[i];
      const newScript = document.createElement('script');
      Array.from(script.attributes).forEach((attr) => {
        newScript.setAttribute(attr.name, attr.value);
      });
      newScript.appendChild(document.createTextNode(script.innerHTML));
      script.parentNode?.replaceChild(newScript, script);
    }
  }, [ad]);

  // Only render if ad exists, is enabled, and has real custom ad code
  if (
    !ad ||
    !ad.enabled ||
    !ad.code ||
    !ad.code.trim() ||
    ad.code.includes('ad-placeholder')
  ) {
    return null;
  }

  // Dimension sizing classes
  const dimensionClasses: Record<AdPlacement['dimension'], string> = {
    '728x90': 'w-[728px] max-w-full h-[90px]',
    '300x250': 'w-[300px] max-w-full h-[250px]',
    '336x280': 'w-[336px] max-w-full h-[280px]',
    '320x100': 'w-[320px] max-w-full h-[100px]',
    '300x600': 'w-[300px] max-w-full h-[600px]',
    responsive: 'w-full min-h-[60px]',
  };

  const dimClass = dimensionClasses[ad.dimension] || 'w-full';

  return (
    <div className={`flex flex-col items-center justify-center my-3 select-none ${className}`}>
      <div className="flex items-center gap-1.5 text-[10px] uppercase font-bold text-slate-400 tracking-wider mb-1">
        <span>Sponsored</span>
        <span className="text-slate-300">•</span>
        <span className="font-mono text-[9px] text-slate-400">{ad.dimension}</span>
      </div>

      <div
        className={`relative overflow-hidden rounded-xl border border-slate-200/90 bg-white/70 backdrop-blur-xs flex items-center justify-center shadow-2xs ${dimClass}`}
      >
        {ad.code ? (
          <div
            ref={containerRef}
            className="w-full h-full flex items-center justify-center overflow-hidden"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-4 text-center">
            <span className="text-[11px] font-bold text-slate-700">{ad.name}</span>
            <span className="text-[10px] text-slate-400 mt-0.5">
              Configure this ad in <strong className="text-slate-600">/admintiktok</strong>
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

```

# components\Breadcrumbs.tsx

```tsx
'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://tikprofilesviewer.com/',
    },
    ...items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: item.label,
      ...(item.href ? { item: `https://tikprofilesviewer.com${item.href}` } : {}),
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className="w-full mb-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-slate-500">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-slate-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5 text-slate-500" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3 h-3 text-slate-400" />
              {isLast || !item.href ? (
                <span className="text-slate-900 font-medium truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="hover:text-slate-900 transition-colors truncate max-w-[200px] sm:max-w-none"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

```

# components\CreatorToolsSection.tsx

```tsx
'use client';

import Link from 'next/link';
import {
  Download,
  Music,
  Users,
  LayoutGrid,
  Clock,
  Image as ImageIcon,
  DollarSign,
  Percent,
  Hash,
  ShieldCheck,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

const ALL_TOOLS = [
  {
    href: '/tiktok-video-downloader',
    icon: Download,
    title: 'HD Video Downloader',
    desc: 'Save original 1080p MP4 videos with no watermark.',
    iconColor: 'bg-emerald-50 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white',
  },
  {
    href: '/tiktok-mp3-downloader',
    icon: Music,
    title: 'Audio MP3 Extractor',
    desc: 'Extract background audio and sounds in clean MP3.',
    iconColor: 'bg-sky-50 text-sky-600 group-hover:bg-sky-600 group-hover:text-white',
  },
  {
    href: '/tiktok-profile-viewer',
    icon: Users,
    title: 'Anonymous Viewer',
    desc: 'View profile data and follower counts anonymously.',
    iconColor: 'bg-purple-50 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
  },
  {
    href: '/tiktok-analytics',
    icon: LayoutGrid,
    title: 'Viral Analytics',
    desc: 'Check creator engagement and video statistics.',
    iconColor: 'bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white',
  },
  {
    href: '/tiktok-story-downloader',
    icon: Clock,
    title: 'Story Downloader',
    desc: 'Save disappearing stories before they expire in 24h.',
    iconColor: 'bg-amber-50 text-amber-600 group-hover:bg-amber-600 group-hover:text-white',
  },
  {
    href: '/tiktok-photo-downloader',
    icon: ImageIcon,
    title: 'Photo & Slideshow',
    desc: 'Download full-res carousel slideshow photos in HD.',
    iconColor: 'bg-rose-50 text-rose-600 group-hover:bg-rose-600 group-hover:text-white',
  },
  {
    href: '/tiktok-money-calculator',
    icon: DollarSign,
    title: 'Money Calculator',
    desc: 'Estimate creator earnings and sponsored post rates.',
    iconColor: 'bg-green-50 text-green-600 group-hover:bg-green-600 group-hover:text-white',
  },
  {
    href: '/tiktok-engagement-calculator',
    icon: Percent,
    title: 'Engagement Rate',
    desc: 'Compute interaction rates against viral benchmarks.',
    iconColor: 'bg-cyan-50 text-cyan-600 group-hover:bg-cyan-600 group-hover:text-white',
  },
  {
    href: '/tiktok-caption-generator',
    icon: Hash,
    title: 'Caption Generator',
    desc: 'Generate viral hooks, captions, and FYP hashtags.',
    iconColor: 'bg-fuchsia-50 text-fuchsia-600 group-hover:bg-fuchsia-600 group-hover:text-white',
  },
  {
    href: '/tiktok-watermark-remover',
    icon: ShieldCheck,
    title: 'Watermark Remover',
    desc: 'Remove TikTok logos for Instagram Reels & Shorts.',
    iconColor: 'bg-teal-50 text-teal-600 group-hover:bg-teal-600 group-hover:text-white',
  },
];

export default function CreatorToolsSection() {
  return (
    <section id="tools" className="w-full mt-14 pt-10 border-t border-slate-200 scroll-mt-20">
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Free Creator Tools
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
          Select a tool to download media, inspect profiles, analyze viral growth, and remove watermarks.
        </p>
      </div>

      {/* Well-arranged 10-Tool Responsive Grid (5 columns on desktop, 2 on tablet, 1 on mobile) */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4">
        {ALL_TOOLS.map((tool) => {
          const Icon = tool.icon;
          return (
            <Link
              key={tool.href}
              href={tool.href}
              className="group p-4 rounded-xl bg-white border border-slate-200 hover:border-slate-300 hover:shadow-sm transition-all shadow-2xs flex flex-col justify-between min-h-[140px]"
            >
              <div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 transition-colors mb-3 ${tool.iconColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-black transition-colors line-clamp-1">
                  {tool.title}
                </h3>
                <p className="text-[11px] text-slate-500 leading-snug line-clamp-2 mt-1">
                  {tool.desc}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 mt-2 border-t border-slate-100 text-[11px] font-semibold text-slate-500 group-hover:text-slate-900">
                <span>Use tool</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

```

# components\DownloadCounterModal.tsx

```tsx
'use client';

import { useState, useEffect } from 'react';
import { X, CheckCircle2, Download, Loader2, Music, Film, Sparkles } from 'lucide-react';
import { useSiteSettings, SiteSettings } from '@/lib/settings-store';
import AdSlot from './AdSlot';

interface DownloadCounterModalProps {
  isOpen: boolean;
  onClose: () => void;
  downloadUrl: string;
  fileName: string;
  mediaType: 'video' | 'audio' | 'avatar';
  title?: string;
}

function ModalContent({
  initialSeconds,
  downloadUrl,
  fileName,
  mediaType,
  title,
  onClose,
  settings,
}: {
  initialSeconds: number;
  downloadUrl: string;
  fileName: string;
  mediaType: 'video' | 'audio' | 'avatar';
  title?: string;
  onClose: () => void;
  settings: SiteSettings;
}) {
  const [counter, setCounter] = useState(initialSeconds);
  const [isReady, setIsReady] = useState(false);
  const [hasClickedDownload, setHasClickedDownload] = useState(false);

  const triggerDownload = () => {
    if (!downloadUrl) return;
    const a = document.createElement('a');
    a.href = downloadUrl;
    a.download = fileName;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const handleManualDownloadClick = () => {
    triggerDownload();
    setHasClickedDownload(true);
    setTimeout(() => {
      onClose();
    }, 1200);
  };

  useEffect(() => {
    let current = initialSeconds;
    const timer = setInterval(() => {
      current -= 1;
      setCounter(current);

      if (current <= 0) {
        clearInterval(timer);
        setIsReady(true);
        // Trigger background browser download
        if (downloadUrl) {
          try {
            const a = document.createElement('a');
            a.href = downloadUrl;
            a.download = fileName;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
          } catch {
            // Fallback
          }
        }
        // As requested: Close modal automatically once file download starts on browser
        setTimeout(() => {
          onClose();
        }, 1200);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [initialSeconds, downloadUrl, fileName, onClose]);

  const progressPercent = Math.min(
    100,
    Math.round(((initialSeconds - counter) / initialSeconds) * 100)
  );

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl aspect-square max-h-[92vh] bg-white rounded-2xl border border-slate-200 shadow-2xl p-5 sm:p-7 md:p-8 flex flex-col justify-between items-center text-center overflow-hidden animate-in fade-in zoom-in-95 duration-200 select-none"
    >
      {/* Top Header Row with Status & Close Button */}
      <div className="w-full flex items-center justify-between pb-2 border-b border-slate-100">
        <div className="flex items-center gap-2">
          {mediaType === 'audio' ? (
            <Music className="w-4 h-4 text-purple-600" />
          ) : (
            <Film className="w-4 h-4 text-[#fe2858]" />
          )}
          <span className="text-xs sm:text-sm font-bold text-slate-800">
            {mediaType === 'audio' ? 'Clean Audio Downloader' : 'Watermark-Free HD Downloader'}
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close"
          title="Close"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Center Body: Countdown OR Ready State */}
      <div className="flex-1 w-full flex flex-col items-center justify-center py-2 sm:py-4">
        {!isReady ? (
          <div className="flex flex-col items-center justify-center w-full max-w-md">
            {/* Circular Progress & Countdown Number */}
            <div className="relative w-28 h-28 sm:w-36 sm:h-36 mb-4 sm:mb-5 flex items-center justify-center">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-slate-100"
                  strokeWidth="7"
                  fill="transparent"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="42"
                  className="stroke-[#01ebe4] transition-all duration-1000 ease-linear"
                  strokeWidth="7"
                  strokeDasharray={264}
                  strokeDashoffset={264 - (264 * progressPercent) / 100}
                  strokeLinecap="round"
                  fill="transparent"
                />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-4xl sm:text-5xl font-black text-slate-900 font-mono tracking-tight leading-none">
                  {counter}
                </span>
                <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider mt-1">
                  Seconds
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-900 mb-1.5">
              <Loader2 className="w-4 h-4 animate-spin text-[#fe2858]" />
              <span>Preparing {mediaType.toUpperCase()} Stream</span>
            </div>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm leading-relaxed px-2">
              {settings.downloadPreparingText ||
                'Fetching original high quality stream and removing watermarks in background...'}
            </p>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full max-w-md animate-in fade-in duration-300">
            {/* Success icon */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-100 flex items-center justify-center mb-3 sm:mb-4 shadow-xs">
              <CheckCircle2 className="w-10 h-10 sm:w-12 sm:h-12" />
            </div>

            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
              Download is Ready!
            </h3>

            <p className="text-xs sm:text-sm text-slate-500 max-w-sm mt-1.5 leading-relaxed px-2">
              {hasClickedDownload
                ? 'Your file download has started. If it did not begin, click the button again.'
                : 'Click the button below to download your clean file without watermarks.'}
            </p>

            {/* Prominent Download Button that stays until clicked */}
            <button
              type="button"
              onClick={handleManualDownloadClick}
              className="mt-4 sm:mt-5 w-full max-w-xs sm:max-w-sm py-3.5 px-6 rounded-xl bg-[#01ebe4] hover:bg-[#00d7d0] active:scale-[0.98] text-slate-950 font-extrabold text-sm sm:text-base flex items-center justify-center gap-2.5 shadow-md transition-all cursor-pointer"
            >
              <Download className="w-5 h-5 text-slate-950 shrink-0" />
              <span>
                {hasClickedDownload
                  ? 'Download Triggered ✓ (Click to retry)'
                  : mediaType === 'audio'
                  ? 'Download MP3 Audio'
                  : 'Download HD Video Now'}
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Modal Ad Slot (Only renders if an ad is explicitly configured and enabled in Admin Panel) */}
      <AdSlot placement="modal" className="w-full my-1 shrink-0" />

      {/* Bottom Metadata Info Card */}
      <div className="w-full p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-100 text-[11px] sm:text-xs text-slate-500 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5 truncate max-w-[260px] sm:max-w-[340px] text-left">
          <Sparkles className="w-3.5 h-3.5 text-amber-500 shrink-0" />
          <span className="truncate font-mono font-medium text-slate-700">
            {fileName || title || 'tiktok_clean_media'}
          </span>
        </div>
        <span className="font-extrabold text-emerald-600 shrink-0 uppercase tracking-wider text-[10px] ml-2 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
          No Watermark HD
        </span>
      </div>
    </div>
  );
}

export default function DownloadCounterModal({
  isOpen,
  onClose,
  downloadUrl,
  fileName,
  mediaType,
  title,
}: DownloadCounterModalProps) {
  const [settings] = useSiteSettings();
  const initialSeconds = Math.max(1, settings.downloadCounterSeconds || 5);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
    >
      <ModalContent
        initialSeconds={initialSeconds}
        downloadUrl={downloadUrl}
        fileName={fileName}
        mediaType={mediaType}
        title={title}
        onClose={onClose}
        settings={settings}
      />
    </div>
  );
}

```

# components\ExploreNichesSection.tsx

```tsx
'use client';

import { Sparkles, Utensils, Film, ChefHat, Flame, Music, ArrowRight } from 'lucide-react';

const NICHES = [
  { icon: Utensils, label: 'Food & Mukbangs', color: 'text-amber-600 bg-amber-50 border-amber-200' },
  { icon: Film, label: '3D & AI Animation', color: 'text-sky-600 bg-sky-50 border-sky-200' },
  { icon: ChefHat, label: 'Culinary & Recipes', color: 'text-rose-600 bg-rose-50 border-rose-200' },
  { icon: Flame, label: 'Viral FYP Challenges', color: 'text-orange-600 bg-orange-50 border-orange-200' },
  { icon: Music, label: 'Music & Sounds', color: 'text-purple-600 bg-purple-50 border-purple-200' },
];

export default function ExploreNichesSection() {
  const scrollToSearch = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const input = document.querySelector('input[type="text"]') as HTMLInputElement | null;
    input?.focus();
  };

  return (
    <section className="w-full mt-14 pt-10 border-t border-slate-200">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Explore Any TikTok Niche &amp; Creator Format
        </h2>

        <p className="text-xs sm:text-sm md:text-base text-slate-600 mt-2.5 leading-relaxed max-w-2xl">
          From viral mukbangs and culinary tutorials to 3D character animations and comedy sketches, Tik Profiles Viewer lets you inspect any public account and save high-resolution media with zero restrictions.
        </p>

        {/* Niche Category Tags */}
        <div className="flex items-center justify-center gap-2 flex-wrap mt-4">
          {NICHES.map((niche, i) => {
            const Icon = niche.icon;
            return (
              <span
                key={i}
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border shadow-2xs ${niche.color}`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{niche.label}</span>
              </span>
            );
          })}
        </div>
      </div>

      {/* Visual Showcase Card using section-1.png without image hover effects */}
      <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200/90 bg-gradient-to-b from-slate-50 to-white shadow-sm p-3 sm:p-5 flex flex-col items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/aistudio/section-1_3e8f1512.png"
          alt="Popular TikTok niches including Mukbang, 3D Animation, and Culinary Chef videos"
          referrerPolicy="no-referrer"
          loading="lazy"
          className="w-full max-w-4xl h-auto rounded-xl object-contain shadow-xs"
        />

        {/* Three Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-4 w-full max-w-4xl mt-5 pt-4 border-t border-slate-100">
          <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left">
            <span className="text-xs font-bold text-slate-900 block mb-1">
              100% Anonymous Viewing
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              No TikTok account needed. Creators never see your name on their view list or profile history.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left">
            <span className="text-xs font-bold text-slate-900 block mb-1">
              Every Public Category
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Search any creator in food, dance, gaming, fitness, comedy, beauty, and education worldwide.
            </p>
          </div>

          <div className="p-3.5 rounded-xl bg-white border border-slate-200/70 shadow-2xs text-left">
            <span className="text-xs font-bold text-slate-900 block mb-1">
              Instant HD Downloads
            </span>
            <p className="text-xs text-slate-500 leading-relaxed">
              Get original full-resolution MP4 video and clean MP3 audio directly on your device.
            </p>
          </div>
        </div>

        {/* Bottom CTA Button */}
        <button
          type="button"
          onClick={scrollToSearch}
          className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs sm:text-sm font-bold shadow-xs transition-all cursor-pointer"
        >
          <span>Search a creator in your favorite niche</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}

```

# components\FaqSection.tsx

```tsx
'use client';

import { useState } from 'react';
import { Plus, X, Mail } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Is Tik Profiles Viewer 100% free to use?',
    answer:
      'Yes, Tik Profiles Viewer is completely free to use. There are no paid plans, no subscription fees, and no download limits. You can view as many profiles and download as many videos as you want at any time.',
  },
  {
    question: 'Can I view profiles and watch videos completely anonymously?',
    answer:
      'Yes. You do not need to log into TikTok or create an account. The creator will never receive any notification or view record indicating that you checked their profile or downloaded their content.',
  },
  {
    question: 'How does the video downloader remove TikTok watermarks?',
    answer:
      'Our engine connects directly to the public content delivery network to retrieve the original high-resolution video stream before the platform adds bouncing logo watermarks and creator text overlays.',
  },
  {
    question: 'Can I extract and download the background music or audio (MP3)?',
    answer:
      'Yes. Every video card has a dedicated Download Audio button that lets you extract and save the clean original sound in standard MP3 format with one click.',
  },
  {
    question: 'Which devices and browsers are supported?',
    answer:
      'Tik Profiles Viewer works smoothly in all modern web browsers including Safari on iPhone and iPad, Google Chrome on Android and PC, Mozilla Firefox, Microsoft Edge, and macOS browsers.',
  },
  {
    question: 'How do I download a profile avatar picture in high quality?',
    answer:
      'Search for any creator username, then click the Download avatar button right in the profile details box. The full-size original profile picture will save directly to your device.',
  },
];

export default function FaqSection() {
  // All questions closed by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full mt-14 pt-10 border-t border-slate-200 scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading, Subtitle & Contact Us Button */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-[1.1]">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>

          <p className="text-sm sm:text-base text-slate-500 mt-4 leading-relaxed max-w-sm">
            Find answers to frequently asked questions about viewing profiles and saving watermark-free media.
          </p>

          <a
            href="mailto:support@tikprofilesviewer.com"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#18181b] hover:bg-black active:scale-[0.98] text-white text-xs sm:text-sm font-semibold transition-all shadow-xs cursor-pointer"
          >
            <Mail className="w-4 h-4 text-slate-300" />
            <span>Contact us</span>
          </a>
        </div>

        {/* Right Column: Accordion Cards Stack with Lower Height matching reference */}
        <div className="lg:col-span-7 flex flex-col space-y-2.5 sm:space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 shadow-2xs transition-all hover:border-slate-300 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 py-3 sm:py-3.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-slate-900 tracking-tight">
                    {item.question}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-slate-50 group-hover:bg-slate-100 border border-slate-200/80 flex items-center justify-center text-slate-500 shrink-0 transition-colors">
                    {isOpen ? (
                      <X className="w-3.5 h-3.5 text-slate-900" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-slate-600" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

```

# components\Footer.tsx

```tsx
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

```

# components\HowToUseSteps.tsx

```tsx
'use client';

import { Search, Play, Download, Sparkles, X, Check, Music } from 'lucide-react';

export default function HowToUseSteps() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 items-stretch">
      {/* Step 1 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#edf4ff] via-[#f5f9ff] to-white border border-[#cfe1fd] shadow-xs flex flex-col justify-between h-full">
        {/* Mockup UI Window - Search TikTok creator */}
        <div className="bg-white rounded-xl border border-[#d6e5fb] shadow-2xs p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Search className="w-3.5 h-3.5 text-blue-600" />
              <span>Search TikTok creator</span>
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          </div>

          {/* Mockup Search Bar */}
          <div className="my-auto py-2">
            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2">
              <span className="text-slate-400 text-xs">@</span>
              <span className="text-xs font-semibold text-slate-900 flex-1 truncate">khaby.lame</span>
              <span className="px-2.5 py-1 rounded-md bg-[#01ebe4] text-slate-950 font-extrabold text-[10px] shadow-2xs">
                Search
              </span>
            </div>

            {/* Found Creator Quick Preview */}
            <div className="mt-2.5 p-2 rounded-lg bg-blue-50/70 border border-blue-100 flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                KL
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-[11px] font-bold text-slate-900 truncate">Khaby Lame</p>
                <p className="text-[10px] text-slate-500">162.8M followers • Verified</p>
              </div>
              <Check className="w-4 h-4 text-blue-600 shrink-0" />
            </div>
          </div>

          {/* Mockup Bottom Status Bar */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span>Instant profile lookup</span>
            <span className="font-semibold text-blue-600">Step 01</span>
          </div>
        </div>

        {/* Step Text Content (No Pill Tags) */}
        <div>
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">
            Step 1
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Search or Paste Profile
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Type any public TikTok username into the search bar or choose one of the trending creators to inspect their full profile and video feed.
          </p>
        </div>
      </div>

      {/* Step 2 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#edf4ff] via-[#f5f9ff] to-white border border-[#cfe1fd] shadow-xs flex flex-col justify-between h-full">
        {/* Mockup UI Window - Inspect & select video */}
        <div className="bg-white rounded-xl border border-[#d6e5fb] shadow-2xs p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Play className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
              <span>Inspect &amp; select video</span>
            </span>
            <span className="text-[10px] font-bold text-slate-500">30+ Videos</span>
          </div>

          {/* Mockup 3 Video Previews Grid */}
          <div className="my-auto grid grid-cols-3 gap-2 py-1">
            <div className="h-20 rounded-lg bg-gradient-to-tr from-slate-800 to-slate-950 p-1.5 flex flex-col justify-between text-white relative shadow-2xs overflow-hidden">
              <span className="text-[9px] font-bold bg-black/60 px-1 py-0.5 rounded w-fit">0:24</span>
              <div className="flex items-center justify-between text-[8px] text-slate-300">
                <span>▶ 1.2M</span>
              </div>
            </div>

            {/* Selected Highlight Video */}
            <div className="h-20 rounded-lg bg-gradient-to-tr from-rose-600 to-pink-500 p-1.5 flex flex-col justify-between text-white relative shadow-2xs ring-2 ring-blue-500 ring-offset-1">
              <div className="flex items-center justify-between">
                <span className="text-[9px] font-bold bg-black/50 px-1 py-0.5 rounded">0:45</span>
                <span className="text-[8px] font-black uppercase bg-blue-600 text-white px-1 rounded">Selected</span>
              </div>
              <div className="w-5 h-5 rounded-full bg-white/90 text-[#f7024e] mx-auto flex items-center justify-center shadow-xs">
                <Play className="w-2.5 h-2.5 fill-[#f7024e] translate-x-0.2" />
              </div>
              <div className="flex items-center justify-between text-[8px] text-white">
                <span>▶ 3.8M</span>
                <span>♥ 740K</span>
              </div>
            </div>

            <div className="h-20 rounded-lg bg-gradient-to-tr from-cyan-600 to-blue-700 p-1.5 flex flex-col justify-between text-white relative shadow-2xs overflow-hidden">
              <span className="text-[9px] font-bold bg-black/60 px-1 py-0.5 rounded w-fit">0:15</span>
              <div className="flex items-center justify-between text-[8px] text-slate-200">
                <span>▶ 850K</span>
              </div>
            </div>
          </div>

          {/* Mockup Bottom Controls */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span className="flex items-center gap-1 font-medium">
              <Sparkles className="w-3 h-3 text-amber-500" /> Click to open HD player
            </span>
            <span className="font-semibold text-blue-600">Step 02</span>
          </div>
        </div>

        {/* Step Text Content (No Pill Tags) */}
        <div>
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">
            Step 2
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Browse Videos &amp; Stats
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Examine creator followers, engagement rates, and all published videos. Click any video tile to launch the smooth in-browser player.
          </p>
        </div>
      </div>

      {/* Step 3 Card */}
      <div className="rounded-2xl p-5 sm:p-6 bg-gradient-to-b from-[#edf4ff] via-[#f5f9ff] to-white border border-[#cfe1fd] shadow-xs flex flex-col justify-between h-full">
        {/* Mockup UI Window - Clean hd export */}
        <div className="bg-white rounded-xl border border-[#d6e5fb] shadow-2xs p-4 mb-5 flex flex-col justify-between h-[210px] min-h-[210px] select-none">
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-2 border-b border-slate-100">
            <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
              <Download className="w-3.5 h-3.5 text-emerald-600" />
              <span>Clean hd export</span>
            </span>
            <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
              Ready
            </span>
          </div>

          {/* Mockup Download Action Details */}
          <div className="my-auto py-2 flex flex-col gap-2">
            <div className="p-2 rounded-lg bg-emerald-50/60 border border-emerald-200 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-900">1080p MP4 Video</p>
                <p className="text-[10px] text-emerald-700 font-medium">Watermark Free • Original HD</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white font-bold text-[10px] shadow-2xs flex items-center gap-1">
                <Check className="w-3 h-3" /> Save HD
              </span>
            </div>

            <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 flex items-center justify-between">
              <div>
                <p className="text-[11px] font-bold text-slate-900">Background Audio</p>
                <p className="text-[10px] text-slate-500 font-medium">Clean 320kbps MP3 Audio</p>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-200 text-slate-800 font-bold text-[10px] flex items-center gap-1">
                <Music className="w-3 h-3" /> Save MP3
              </span>
            </div>
          </div>

          {/* Mockup Bottom Controls */}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
            <span>Fast direct browser download</span>
            <span className="font-semibold text-blue-600">Step 03</span>
          </div>
        </div>

        {/* Step Text Content (No Pill Tags) */}
        <div>
          <span className="text-xs font-black text-blue-600 uppercase tracking-widest block mb-1">
            Step 3
          </span>
          <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-1">
            Download in High Quality
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            Click Download HD Video to automatically start saving watermark-free videos, or extract clean background music in MP3 format with one tap.
          </p>
        </div>
      </div>
    </div>
  );
}

```

# components\LegalLayout.tsx

```tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, FileText, Lock, Scale, AlertTriangle, HelpCircle, Mail, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';

export const LEGAL_PAGES = [
  { href: '/terms-of-service', title: 'Terms of Service', icon: FileText },
  { href: '/privacy-policy', title: 'Privacy Policy', icon: Lock },
  { href: '/cookie-policy', title: 'Cookie Policy', icon: HelpCircle },
  { href: '/disclaimer', title: 'Disclaimer', icon: AlertTriangle },
  { href: '/legal-notice', title: 'Legal Notice', icon: Scale },
  { href: '/copyright-policy', title: 'Copyright Policy', icon: ShieldCheck },
  { href: '/tiktok-independence-disclaimer', title: 'TikTok Independence', icon: AlertTriangle },
  { href: '/public-content-policy', title: 'Public Content Policy', icon: FileText },
  { href: '/content-removal-policy', title: 'Content Removal Policy', icon: Scale },
  { href: '/acceptable-use-policy', title: 'Acceptable Use Policy', icon: ShieldCheck },
  { href: '/security-policy', title: 'Security Policy', icon: Lock },
  { href: '/service-availability-policy', title: 'Service Availability', icon: HelpCircle },
];

interface LegalLayoutProps {
  title: string;
  subtitle: string;
  lastUpdated?: string;
  summary: string;
  currentPath: string;
  children: React.ReactNode;
}

export default function LegalLayout({
  title,
  subtitle,
  lastUpdated = 'November 6, 2026',
  summary,
  currentPath,
  children,
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-[#fafbfc] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Legal Center', href: '/terms-of-service' },
            { label: title },
          ]}
        />

        {/* Page Header */}
        <header className="mt-6 pb-8 border-b border-slate-200">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed max-w-3xl">
            {subtitle}
          </p>

          <div className="flex items-center gap-4 mt-4 text-xs text-slate-500 font-mono">
            <span>Effective: November 2026</span>
            <span>•</span>
            <span>Last reviewed: {lastUpdated}</span>
          </div>
        </header>

        {/* Executive Summary Card */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-2xs">
          <div className="flex items-center gap-2 text-slate-900 font-bold text-sm mb-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Key Summary</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Content Layout with Legal Sidebar on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Legal Text */}
          <article className="lg:col-span-8 bg-white p-6 sm:p-8 md:p-10 rounded-2xl border border-slate-200 shadow-xs space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
            {children}

            {/* Official Support & Inquiries Box */}
            <div className="pt-8 border-t border-slate-200 mt-10">
              <h3 className="text-base font-bold text-slate-900 mb-2">
                Questions or Official Requests?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                If you have questions regarding this policy, or wish to submit an inquiry, request content review, or report a concern, please contact our legal team directly.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:legal@tikprofilesviewer.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-semibold shadow-2xs transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-300" />
                  <span>legal@tikprofilesviewer.com</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 flex flex-col gap-5 sticky top-24">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900 mb-3">
                All Legal Documents
              </h3>
              <nav className="flex flex-col space-y-1">
                {LEGAL_PAGES.map((page) => {
                  const isActive = currentPath === page.href;
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`px-3 py-2 rounded-xl text-xs font-semibold flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-slate-900 text-white'
                          : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{page.title}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed">
              <span className="font-bold text-slate-700 block mb-1">Independent Notice</span>
              Tik Profiles Viewer operates independently on TikProfilesViewer.com and is not associated with, sponsored by, or affiliated with TikTok Inc., ByteDance Ltd., or any of their affiliates.
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

```

# components\Navbar.tsx

```tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Check } from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English', isDefault: true },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'zh', name: 'Chinese', native: '中文' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'he', name: 'Hebrew', native: 'עברית' },
  { code: 'hi', name: 'Hindu', native: 'हिन्दी' },
];

const TOOLS = [
  {
    href: '/tiktok-video-downloader',
    label: 'HD Video Downloader',
    desc: 'Download videos without watermark',
  },
  {
    href: '/tiktok-mp3-downloader',
    label: 'Audio MP3 Downloader',
    desc: 'Save original audio sound',
  },
  {
    href: '/tiktok-profile-viewer',
    label: 'Profile Viewer',
    desc: 'Check profiles and view count',
  },
  {
    href: '/tiktok-analytics',
    label: 'Viral Analytics',
    desc: 'See engagement and growth metrics',
  },
  {
    href: '/tiktok-story-downloader',
    label: 'Story Downloader',
    desc: 'Save stories before they expire',
  },
  {
    href: '/tiktok-photo-downloader',
    label: 'Photo & Slideshow',
    desc: 'Download carousel images in HD',
  },
  {
    href: '/tiktok-money-calculator',
    label: 'Money Calculator',
    desc: 'Estimate creator earnings & rates',
  },
  {
    href: '/tiktok-engagement-calculator',
    label: 'Engagement Calculator',
    desc: 'Calculate campaign engagement rate',
  },
  {
    href: '/tiktok-caption-generator',
    label: 'Caption Generator',
    desc: 'Generate viral hooks & hashtags',
  },
  {
    href: '/tiktok-watermark-remover',
    label: 'Watermark Remover',
    desc: 'Remove TikTok logo for Reels',
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState('English');
  const pathname = usePathname();

  const toolsRef = useRef<HTMLDivElement>(null);
  const langRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Website Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-slate-900 select-none shrink-0 group"
        >
          <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
              alt="Tik Profiles Viewer Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-base tracking-tight text-slate-900 leading-none">
              Tik Profiles Viewer
            </span>
            <span className="text-[10px] text-slate-500 font-medium tracking-wide">
              TikProfilesViewer.com
            </span>
          </div>
        </Link>

        {/* Nav Items aligned to the right, pill container removed */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-medium transition-colors ${
              pathname === '/'
                ? 'text-slate-950 font-semibold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about-tiktok-profile-viewer"
            className={`text-sm font-medium transition-colors ${
              pathname === '/about-tiktok-profile-viewer'
                ? 'text-slate-950 font-semibold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            About
          </Link>

          {/* How to use */}
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            className={`text-sm font-medium transition-colors ${
              pathname === '/how-to-use-tiktok-profile-viewer'
                ? 'text-slate-950 font-semibold'
                : 'text-slate-600 hover:text-slate-950'
            }`}
          >
            How to use
          </Link>

          {/* Tools Dropdown */}
          <div className="relative" ref={toolsRef}>
            <button
              type="button"
              onClick={() => {
                setToolsDropdownOpen(!toolsDropdownOpen);
                setLangDropdownOpen(false);
              }}
              className={`text-sm font-medium px-2 py-1 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                toolsDropdownOpen
                  ? 'bg-slate-100 text-slate-950'
                  : 'text-slate-600 hover:text-slate-950'
              }`}
            >
              <span>Tools</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  toolsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {toolsDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 max-h-[420px] overflow-y-auto rounded-xl bg-white border border-slate-200 shadow-xl p-1.5 z-50 flex flex-col gap-0.5">
                {TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setToolsDropdownOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-50 text-slate-700 hover:text-slate-950 transition-colors"
                  >
                    <div className="font-semibold text-xs text-slate-900">{tool.label}</div>
                    <div className="text-[11px] text-slate-500 mt-0.5">{tool.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Languages Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setToolsDropdownOpen(false);
              }}
              className={`text-sm font-medium px-3 py-1.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border ${
                langDropdownOpen
                  ? 'bg-slate-50 border-slate-300 text-slate-950 shadow-xs'
                  : 'border-slate-200 bg-white text-slate-700 hover:text-slate-950 hover:border-slate-300'
              }`}
            >
              <span>{selectedLang}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-52 rounded-xl bg-white border border-slate-200 shadow-xl p-1.5 z-50 flex flex-col gap-0.5">
                {LANGUAGES.map((lang) => {
                  const isSelected = selectedLang === lang.name;
                  return (
                    <button
                      key={lang.code}
                      type="button"
                      onClick={() => {
                        setSelectedLang(lang.name);
                        setLangDropdownOpen(false);
                      }}
                      className={`w-full px-2.5 py-1.5 rounded-lg text-xs flex items-center justify-between text-left transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-slate-100 text-slate-950 font-semibold'
                          : 'text-slate-700 hover:bg-slate-50 hover:text-slate-950'
                      }`}
                    >
                      <span>
                        {lang.name} <span className="text-slate-400 font-normal">({lang.native})</span>
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-slate-900" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Actions: Language & Hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Quick Language Toggle on Mobile */}
          <button
            type="button"
            onClick={() => {
              setLangDropdownOpen(!langDropdownOpen);
              setMobileMenuOpen(false);
            }}
            className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 flex items-center gap-1 cursor-pointer"
          >
            <span>{selectedLang}</span>
            <ChevronDown className="w-3 h-3 text-slate-500" />
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setLangDropdownOpen(false);
            }}
            className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Language Dropdown popup */}
      {langDropdownOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white px-4 py-3 shadow-lg">
          <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
            Select Language
          </p>
          <div className="grid grid-cols-2 gap-1.5">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setSelectedLang(lang.name);
                  setLangDropdownOpen(false);
                }}
                className={`px-3 py-2 rounded-lg text-xs text-left flex items-center justify-between ${
                  selectedLang === lang.name
                    ? 'bg-slate-900 text-white font-medium'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100'
                }`}
              >
                <span>{lang.name}</span>
                {selectedLang === lang.name && <Check className="w-3 h-3 text-white" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-4 flex flex-col gap-2.5 shadow-lg">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Home
          </Link>
          <Link
            href="/about-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            About
          </Link>
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            How to use
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 hover:bg-slate-100"
          >
            Browse Top Creators
          </Link>

          <div className="pt-2 border-t border-slate-100">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider block px-3 mb-1">
              Tools
            </span>
            <div className="flex flex-col gap-1">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-100 flex items-center justify-between"
                >
                  <span>{tool.label}</span>
                  <span className="text-[10px] text-slate-400">{tool.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

```

# components\TikTokProfileViewer.tsx

```tsx
'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import {
  Search,
  Download,
  Play,
  Heart,
  Share2,
  X,
  Loader2,
  AlertCircle,
  Music,
  CheckCircle2,
  ChevronDown,
  Copy,
  Check,
  ExternalLink,
} from 'lucide-react';
import DownloadCounterModal from './DownloadCounterModal';
import AdSlot from './AdSlot';

export interface Author {
  unique_id: string;
  nickname: string;
  avatar: string;
  signature?: string;
  verified?: boolean;
}

export interface TikTokVideo {
  video_id?: string;
  id?: string;
  title: string;
  cover: string;
  origin_cover?: string;
  play?: string;
  wmplay?: string;
  music?: string;
  music_info?: {
    id?: string;
    title?: string;
    play?: string;
    author?: string;
  };
  play_count?: number;
  digg_count?: number;
  comment_count?: number;
  share_count?: number;
  download_count?: number;
  duration?: number;
  create_time?: number;
  author?: Author;
}

export interface ProfileStats {
  followerCount: number | null;
  followingCount: number | null;
  heartCount: number | null;
  videoCount: number | null;
}

// Exactly 5 trending profiles in one row
const FEATURED_SUGGESTIONS = [
  { username: 'charlidamelio', name: "Charli D'Amelio" },
  { username: 'khaby.lame', name: 'Khaby Lame' },
  { username: 'mrbeast', name: 'MrBeast' },
  { username: 'bellapoarch', name: 'Bella Poarch' },
  { username: 'zachking', name: 'Zach King' },
];

function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined) return '0';
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (num >= 10_000) {
    return Math.round(num / 1_000) + 'K';
  }
  if (num >= 1_000) {
    return (num / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return String(num);
}

function formatDuration(seconds?: number): string {
  if (!seconds) return '';
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function sanitizeUsername(input: string): string {
  return input.trim().replace(/^@/, '');
}

interface TikTokProfileViewerProps {
  initialUsername?: string;
  autoSearch?: boolean;
  title?: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function TikTokProfileViewer({
  initialUsername = '',
  autoSearch = false,
  title,
  subtitle,
  children,
}: TikTokProfileViewerProps) {
  const [usernameInput, setUsernameInput] = useState(initialUsername);
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Profile data
  const [authorProfile, setAuthorProfile] = useState<Author | null>(null);
  const [profileStats, setProfileStats] = useState<ProfileStats | null>(null);
  const [videos, setVideos] = useState<TikTokVideo[]>([]);
  const [nextCursor, setNextCursor] = useState<string | null>(null);
  const [hasMore, setHasMore] = useState(false);

  // Modal & Video Playback state
  const [selectedVideo, setSelectedVideo] = useState<TikTokVideo | null>(null);
  const [activePlayUrl, setActivePlayUrl] = useState<string>('');
  const [resolvedMusicUrl, setResolvedMusicUrl] = useState<string>('');
  const [resolvingVideo, setResolvingVideo] = useState<boolean>(false);
  const [downloadingVideo, setDownloadingVideo] = useState(false);
  const [downloadingAudio, setDownloadingAudio] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  // Download Counter Modal state
  const [counterModalOpen, setCounterModalOpen] = useState(false);
  const [counterModalData, setCounterModalData] = useState<{
    url: string;
    filename: string;
    mediaType: 'video' | 'audio' | 'avatar';
    title?: string;
  }>({
    url: '',
    filename: '',
    mediaType: 'video',
    title: '',
  });

  const modalVideoRef = useRef<HTMLVideoElement | null>(null);
  const streamCache = useRef<Map<string, { play: string; music: string }>>(new Map());

  const hasActiveResult = Boolean(authorProfile || videos.length > 0 || loading);

  const handleCopyProfileLink = () => {
    if (typeof window !== 'undefined' && authorProfile) {
      navigator.clipboard.writeText(`https://tikprofilesviewer.com/profile/${authorProfile.unique_id}`);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const handleDownloadAvatar = () => {
    if (!authorProfile?.avatar) return;
    const filename = `${authorProfile.unique_id}-avatar.jpg`;
    setCounterModalData({
      url: authorProfile.avatar,
      filename,
      mediaType: 'avatar',
      title: `@${authorProfile.unique_id} Profile Photo`,
    });
    setCounterModalOpen(true);
  };

  // Background preloading on card hover for fast playback
  const preloadVideo = useCallback(
    async (video: TikTokVideo) => {
      const videoId = String(video.video_id || video.id || '');
      if (!videoId || streamCache.current.has(videoId)) return;
      const authorUser = video.author?.unique_id || authorProfile?.unique_id || 'tiktok';

      try {
        const resolveRes = await fetch(
          `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(authorUser)}`
        );
        if (resolveRes.ok) {
          const resData = await resolveRes.json();
          if (resData.success && resData.play) {
            streamCache.current.set(videoId, {
              play: resData.play,
              music: resData.music || '',
            });
          }
        }
      } catch {
        // Silent
      }
    },
    [authorProfile?.unique_id]
  );

  const resetToHome = useCallback(() => {
    setAuthorProfile(null);
    setProfileStats(null);
    setVideos([]);
    setNextCursor(null);
    setHasMore(false);
    setErrorMsg(null);
    setUsernameInput('');
  }, []);

  const closeModal = useCallback(() => {
    setSelectedVideo(null);
    setActivePlayUrl('');
    setResolvedMusicUrl('');
    setResolvingVideo(false);
    setDownloadingVideo(false);
    setDownloadingAudio(false);
  }, []);

  // Disable website scrolling behind video modal
  useEffect(() => {
    if (selectedVideo) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [selectedVideo]);

  // Close modal when pressing Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && selectedVideo) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedVideo, closeModal]);

  // Search handler
  const handleSearch = useCallback(
    async (usernameToSearch?: string) => {
      const targetUser = sanitizeUsername(usernameToSearch || usernameInput);
      if (!targetUser) {
        setErrorMsg('Please enter a TikTok username.');
        return;
      }

      setLoading(true);
      setErrorMsg(null);
      setNextCursor(null);
      setHasMore(false);

      try {
        const res = await fetch(`/api/tiktok?username=${encodeURIComponent(targetUser)}`);
        const contentType = res.headers.get('content-type') || '';

        if (!contentType.includes('application/json')) {
          throw new Error('Received unexpected response. Please try again.');
        }

        const data = await res.json();

        if (!data || data.code !== 0 || !data.data) {
          const errorText = data?.msg || `User @${targetUser} was not found or is private.`;
          setErrorMsg(errorText);
          setAuthorProfile(null);
          setProfileStats(null);
          setVideos([]);
          return;
        }

        const postVideos: TikTokVideo[] = data.data.videos || [];
        const userObj = data.data.user || {};
        const statsObj = data.data.stats || {};

        const authorInfo: Author = {
          unique_id: userObj.unique_id || targetUser,
          nickname: userObj.nickname || targetUser,
          avatar: userObj.avatar || '',
          signature: userObj.signature || '',
          verified: !!userObj.verified,
        };

        const stats: ProfileStats = {
          followerCount: statsObj.followerCount ?? null,
          followingCount: statsObj.followingCount ?? null,
          heartCount: statsObj.heartCount ?? null,
          videoCount: statsObj.videoCount ?? postVideos.length,
        };

        if (stats.heartCount === null && postVideos.length > 0) {
          stats.heartCount = postVideos.reduce((acc, v) => acc + (Number(v.digg_count) || 0), 0);
        }

        setAuthorProfile(authorInfo);
        setProfileStats(stats);
        setVideos(postVideos);
        setNextCursor(data.data.cursor || null);
        setHasMore(!!data.data.hasMore && !!data.data.cursor);

        if (postVideos.length === 0) {
          setErrorMsg(`@${targetUser} was found, but has 0 public videos.`);
        }
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : 'Failed to get profile data.';
        setErrorMsg(msg);
        setAuthorProfile(null);
        setProfileStats(null);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    },
    [usernameInput]
  );

  // Auto search on mount if requested
  const searchedRef = useRef(false);
  useEffect(() => {
    if (autoSearch && initialUsername && !searchedRef.current) {
      searchedRef.current = true;
      const timer = setTimeout(() => {
        handleSearch(initialUsername);
      }, 0);
      return () => clearTimeout(timer);
    }
  }, [autoSearch, initialUsername, handleSearch]);

  // Show more videos (loads 15 more until end reached)
  const handleShowMoreVideos = async () => {
    if (!authorProfile?.unique_id || !nextCursor || loadingMore) return;

    setLoadingMore(true);

    try {
      const res = await fetch(
        `/api/tiktok?username=${encodeURIComponent(
          authorProfile.unique_id
        )}&cursor=${nextCursor}&count=15`
      );
      const data = await res.json();

      if (data && data.code === 0 && data.data?.videos && data.data.videos.length > 0) {
        const newBatch: TikTokVideo[] = data.data.videos;
        setVideos((prev) => {
          const seen = new Set(prev.map((v) => v.id || v.video_id));
          const appended = [...prev];
          for (const item of newBatch) {
            const key = item.id || item.video_id;
            if (!seen.has(key)) {
              appended.push(item);
              seen.add(key);
            }
          }
          return appended;
        });

        const nextC = data.data.cursor || null;
        setNextCursor(nextC);
        setHasMore(Boolean(data.data.hasMore && nextC));
      } else {
        setHasMore(false);
      }
    } catch {
      setHasMore(false);
    } finally {
      setLoadingMore(false);
    }
  };

  // Open video player modal
  const openModal = async (video: TikTokVideo) => {
    setSelectedVideo(video);
    const videoId = String(video.video_id || video.id);
    const authorUser = video.author?.unique_id || authorProfile?.unique_id || 'tiktok';

    const cached = streamCache.current.get(videoId);
    if (cached && cached.play) {
      setActivePlayUrl(cached.play);
      if (cached.music) setResolvedMusicUrl(cached.music);
      setResolvingVideo(false);
      setTimeout(() => {
        if (modalVideoRef.current) {
          modalVideoRef.current.load();
          modalVideoRef.current.play().catch(() => {});
        }
      }, 20);
      return;
    }

    setResolvingVideo(true);
    setActivePlayUrl('');

    let playableUrl = '';
    let musicUrl = '';

    try {
      const resolveRes = await fetch(
        `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(authorUser)}`
      );
      if (resolveRes.ok) {
        const resData = await resolveRes.json();
        if (resData.success && resData.play) {
          playableUrl = resData.play;
          musicUrl = resData.music || '';
          streamCache.current.set(videoId, { play: playableUrl, music: musicUrl });
          if (musicUrl) setResolvedMusicUrl(musicUrl);
        }
      }
    } catch {
      // Fallback
    }

    if (!playableUrl) {
      playableUrl = video.play || video.wmplay || '';
    }

    setActivePlayUrl(playableUrl);
    setResolvingVideo(false);

    setTimeout(() => {
      if (modalVideoRef.current) {
        modalVideoRef.current.load();
        modalVideoRef.current.play().catch(() => {});
      }
    }, 20);
  };

  // Video playback error fallback
  const handleVideoError = () => {
    if (activePlayUrl && !activePlayUrl.startsWith('/api/proxy')) {
      const proxied = `/api/proxy?url=${encodeURIComponent(activePlayUrl)}`;
      setActivePlayUrl(proxied);
      if (modalVideoRef.current) {
        modalVideoRef.current.load();
        modalVideoRef.current.play().catch(() => {});
      }
    }
  };

  // Client-side file downloader
  const downloadFile = async (url: string, filename: string) => {
    try {
      const res = await fetch(url, { referrerPolicy: 'no-referrer' });
      if (res.ok) {
        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(blobUrl);
        }, 2000);
        return;
      }
    } catch {
      // Fallback
    }

    try {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      a.target = '_blank';
      a.rel = 'noreferrer';
      document.body.appendChild(a);
      a.click();
      setTimeout(() => {
        document.body.removeChild(a);
      }, 1000);
      return;
    } catch {
      // Fallback
    }

    const proxyDownloadUrl = `/api/proxy?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(
      filename
    )}&download=1`;
    const a = document.createElement('a');
    a.href = proxyDownloadUrl;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
    }, 1000);
  };

  // Download HD Video (In-button "Downloading...")
  const handleDownloadVideo = async () => {
    if (!selectedVideo || downloadingVideo) return;
    // Pause video playback immediately as requested
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setDownloadingVideo(true);

    const authorUser = selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    const videoId = String(selectedVideo.video_id || selectedVideo.id || Date.now());
    const filename = `${authorUser}-${videoId}.mp4`;

    let videoUrl =
      streamCache.current.get(videoId)?.play ||
      activePlayUrl ||
      selectedVideo.play ||
      selectedVideo.wmplay ||
      '';

    if (!videoUrl || videoUrl.startsWith('/api/proxy')) {
      try {
        const resolveRes = await fetch(
          `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(authorUser)}`
        );
        if (resolveRes.ok) {
          const resolveData = await resolveRes.json();
          if (resolveData.success && resolveData.play) {
            videoUrl = resolveData.play;
            streamCache.current.set(videoId, {
              play: resolveData.play,
              music: resolveData.music || '',
            });
          }
        }
      } catch {
        // Fallback
      }
    }

    if (videoUrl) {
      const proxyDownloadUrl = `/api/proxy?url=${encodeURIComponent(videoUrl)}&filename=${encodeURIComponent(
        filename
      )}&download=1`;
      setCounterModalData({
        url: proxyDownloadUrl,
        filename,
        mediaType: 'video',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      alert('Video download URL is unavailable.');
    }

    setTimeout(() => {
      setDownloadingVideo(false);
    }, 500);
  };

  // Download Audio Only (MP3)
  const handleDownloadAudio = async () => {
    if (!selectedVideo || downloadingAudio) return;
    // Pause video playback immediately as requested
    if (modalVideoRef.current) {
      modalVideoRef.current.pause();
    }
    setDownloadingAudio(true);

    const authorUser = selectedVideo.author?.unique_id || authorProfile?.unique_id || 'tiktok';
    const videoId = String(selectedVideo.video_id || selectedVideo.id || Date.now());
    const filename = `${authorUser}-${videoId}.mp3`;

    let audioUrl =
      streamCache.current.get(videoId)?.music ||
      resolvedMusicUrl ||
      selectedVideo.music_info?.play ||
      selectedVideo.music ||
      '';

    if (!audioUrl) {
      try {
        const resolveRes = await fetch(
          `/api/resolve?id=${encodeURIComponent(videoId)}&username=${encodeURIComponent(authorUser)}`
        );
        if (resolveRes.ok) {
          const resolveData = await resolveRes.json();
          if (resolveData.success && resolveData.music) {
            audioUrl = resolveData.music;
            setResolvedMusicUrl(audioUrl);
            streamCache.current.set(videoId, {
              play: resolveData.play || '',
              music: audioUrl,
            });
          }
        }
      } catch {
        // Fallback
      }
    }

    if (audioUrl) {
      const proxyDownloadUrl = `/api/proxy?url=${encodeURIComponent(audioUrl)}&filename=${encodeURIComponent(
        filename
      )}&download=1`;
      setCounterModalData({
        url: proxyDownloadUrl,
        filename,
        mediaType: 'audio',
        title: selectedVideo.title,
      });
      setCounterModalOpen(true);
    } else {
      alert('Audio download URL is unavailable.');
    }

    setTimeout(() => {
      setDownloadingAudio(false);
    }, 500);
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Title & Subtitle */}
      {(title || subtitle) && (
        <div className="text-center max-w-3xl mx-auto mb-6">
          {title && (
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
              {title}
            </h1>
          )}
          {subtitle && (
            <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}


      {/* Search input with lowered width */}
      <section className="w-full max-w-2xl mx-auto mb-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
          className="relative flex items-center bg-white border border-slate-300 rounded-xl p-1.5 shadow-[0_4px_20px_rgb(0,0,0,0.05)] focus-within:border-sky-500 focus-within:ring-2 focus-within:ring-sky-500/20 transition-all"
        >
          <div className="flex items-center pl-3.5 pr-1 text-slate-400 select-none pointer-events-none">
            <span className="font-bold text-base text-slate-400">@</span>
          </div>

          <input
            type="text"
            value={usernameInput}
            onChange={(e) => setUsernameInput(e.target.value)}
            placeholder="Search TikTok username (e.g. khaby.lame)"
            disabled={loading}
            className="w-full bg-transparent py-3 px-2 text-sm sm:text-base text-slate-900 placeholder:text-slate-400 focus:outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="shrink-0 flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 rounded-lg bg-[#01ebe4] hover:bg-[#00d7d0] active:scale-[0.98] text-[#000000] font-bold text-xs sm:text-sm shadow-xs transition-all disabled:opacity-50 cursor-pointer"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#000000]" />
                <span className="hidden sm:inline">Searching...</span>
              </>
            ) : (
              <>
                <Search className="w-4 h-4 text-[#000000]" />
                <span>Search</span>
              </>
            )}
          </button>
        </form>

        {/* 5. Trending profiles under search bar */}
        {!hasActiveResult && (
          <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
            <span className="text-xs text-slate-500 font-medium whitespace-nowrap">
              Trending:
            </span>
            {FEATURED_SUGGESTIONS.map((item) => (
              <button
                key={item.username}
                type="button"
                onClick={() => {
                  setUsernameInput(item.username);
                  handleSearch(item.username);
                }}
                className="text-xs font-medium px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-700 hover:text-slate-950 hover:border-slate-300 shadow-xs transition-colors whitespace-nowrap cursor-pointer"
              >
                @{item.username}
              </button>
            ))}
          </div>
        )}

        {/* Error Alert Box */}
        {errorMsg && (
          <div className="mt-4 p-3.5 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-red-900">Profile not found</p>
              <p className="text-red-700 text-xs mt-0.5">{errorMsg}</p>
            </div>
          </div>
        )}
      </section>

      {/* 2. TikTok Profile Details Container with increased size and visibility */}
      {authorProfile && (
        <section className="w-full mb-8 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Top section: Avatar on left, Title + Circular actions + Right bordered buttons */}
          <div className="flex flex-col sm:flex-row items-start gap-5 sm:gap-7">
            {/* Square avatar with increased size */}
            <div className="relative shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={authorProfile.avatar}
                alt={authorProfile.nickname || authorProfile.unique_id}
                referrerPolicy="no-referrer"
                className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-xl object-cover border-2 border-slate-200 bg-slate-100 shadow-sm"
                onError={(e) => {
                  const target = e.currentTarget as HTMLImageElement;
                  target.src =
                    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=60';
                }}
              />
            </div>

            {/* Profile Info & Header Actions */}
            <div className="flex-1 min-w-0 w-full flex flex-col justify-between">
              {/* Row 1: Name + Circular icons + Right-aligned Action Buttons */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                <div className="flex items-center gap-2.5 flex-wrap">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
                    {authorProfile.nickname || authorProfile.unique_id}
                  </h2>

                  {/* Circular action buttons */}
                  <div className="flex items-center gap-1.5 ml-1">
                    <a
                      href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors"
                      title="Open TikTok Profile"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                    <button
                      type="button"
                      onClick={handleCopyProfileLink}
                      className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-colors cursor-pointer"
                      title="Copy Profile Link"
                    >
                      {copiedLink ? (
                        <Check className="w-4 h-4 text-emerald-600" />
                      ) : (
                        <Share2 className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Buttons: same size, in one line, short text */}
                <div className="flex items-center gap-2 flex-nowrap shrink-0">
                  <button
                    type="button"
                    onClick={handleDownloadAvatar}
                    className="h-9 px-3.5 sm:px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all whitespace-nowrap min-w-[85px] sm:min-w-[100px] cursor-pointer"
                    title="Download profile avatar"
                  >
                    <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                    <span>Avatar</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleCopyProfileLink}
                    className="h-9 px-3.5 sm:px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all whitespace-nowrap min-w-[85px] sm:min-w-[100px] cursor-pointer"
                    title="Copy profile link"
                  >
                    {copiedLink ? (
                      <>
                        <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-600" />
                        <span>Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>

                  <a
                    href={`https://www.tiktok.com/@${authorProfile.unique_id}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-9 px-3.5 sm:px-4 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 text-xs sm:text-sm font-semibold inline-flex items-center justify-center gap-1.5 shadow-2xs transition-all whitespace-nowrap min-w-[85px] sm:min-w-[100px]"
                    title="Open TikTok profile"
                  >
                    <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-slate-600" />
                    <span>TikTok</span>
                  </a>
                </div>
              </div>

              {/* Sub-line: username & bio with larger font */}
              <div className="mt-2.5 flex flex-col gap-1.5">
                <div className="flex items-center gap-2 text-sm sm:text-base text-slate-600 flex-wrap">
                  <span className="font-mono text-slate-900 font-bold">
                    @{authorProfile.unique_id}
                  </span>
                  <span className="text-slate-300">•</span>
                  <span className="text-slate-500 font-medium">TikTok Public Creator</span>
                </div>
                {authorProfile.signature && (
                  <p className="text-sm sm:text-base text-slate-700 line-clamp-3 leading-relaxed mt-0.5">
                    {authorProfile.signature}
                  </p>
                )}

                {/* Verified or Not Verified tag under description */}
                <div className="mt-2.5 flex items-center gap-2">
                  {authorProfile.verified ? (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-sky-700 text-xs font-bold shadow-2xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                      <span>Verified</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-xs font-medium shadow-2xs">
                      <span>Not Verified</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Divider line */}
          <div className="border-t border-slate-200 my-4 sm:my-5" />

          {/* Bottom row: Separate containers with unique colors, same size, low height */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 sm:gap-3 items-stretch">
            {/* 1. Status Container (Emerald) */}
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-emerald-50/90 border border-emerald-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-emerald-700 leading-none mb-1">
                Status
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-emerald-950 leading-tight flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
                <span>Active</span>
              </span>
            </div>

            {/* 2. Followers Container (Sky Blue) */}
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-sky-50/90 border border-sky-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-sky-700 leading-none mb-1">
                Followers
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-sky-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.followerCount)}
              </span>
            </div>

            {/* 3. Total Likes Container (Rose Pink) */}
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-rose-50/90 border border-rose-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rose-700 leading-none mb-1">
                Total Likes
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-rose-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.heartCount)}
              </span>
            </div>

            {/* 4. Following Container (Purple) */}
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-purple-50/90 border border-purple-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-700 leading-none mb-1">
                Following
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-purple-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.followingCount)}
              </span>
            </div>

            {/* 5. Videos Container (Amber) */}
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-amber-50/90 border border-amber-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-amber-700 leading-none mb-1">
                Videos
              </span>
              <span className="text-base sm:text-lg md:text-xl font-black text-amber-950 font-mono tracking-tight leading-tight truncate">
                {formatNumber(profileStats?.videoCount ?? videos.length)}
              </span>
            </div>

            {/* 6. Account Type Container (Indigo) */}
            <div className="h-[68px] sm:h-[72px] rounded-xl px-3 py-2 bg-indigo-50/90 border border-indigo-200/80 flex flex-col justify-center shadow-2xs">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-indigo-700 leading-none mb-1">
                Account
              </span>
              <span className="text-sm sm:text-base font-extrabold tracking-tight text-indigo-950 leading-tight truncate">
                {authorProfile.verified ? 'Verified' : 'Public'}
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Video Grid Section with enhanced details visibility */}
      {videos.length > 0 && !loading && (
        <section className="w-full flex flex-col gap-4">
          <AdSlot placement="above_grid" />
          <div className="flex items-center justify-between border-b border-slate-200 pb-3">
            <div className="flex items-center gap-2.5">
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900">
                Videos
              </h3>
              <span className="text-xs sm:text-sm font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-200 text-slate-800">
                {videos.length} videos
              </span>
            </div>
            <div className="text-xs sm:text-sm text-slate-500 font-medium">
              Click any video to watch and download
            </div>
          </div>

          {/* Video Grid: 5 videos per row on desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {videos.map((video, index) => {
              const coverImg = video.cover || video.origin_cover || '';
              const duration = formatDuration(video.duration);
              return (
                <div
                  key={video.video_id || video.id || index}
                  onClick={() => openModal(video)}
                  onMouseEnter={() => preloadVideo(video)}
                  className="relative aspect-[9/16] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 cursor-pointer shadow-xs group"
                >
                  {/* Thumbnail Cover Image - STATIC NO ZOOM */}
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={coverImg}
                    alt={video.title || 'TikTok video'}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    className="w-full h-full object-cover bg-slate-100 pointer-events-none"
                  />

                  {/* Centered Play Button (Triangle) on Hover in #f7024e */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-12 h-12 rounded-full bg-[#f7024e] text-white flex items-center justify-center shadow-lg transform transition-transform group-hover:scale-110">
                      <Play className="w-5 h-5 fill-white text-white translate-x-0.5" />
                    </div>
                  </div>

                  {/* Top Scrim & Duration with larger badges */}
                  <div className="absolute inset-x-0 top-0 p-2.5 flex justify-between items-start bg-gradient-to-b from-black/75 via-black/25 to-transparent pointer-events-none">
                    <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/70 text-white shadow-xs">
                      #{index + 1}
                    </span>
                    {duration && (
                      <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-md bg-black/70 text-white shadow-xs">
                        {duration}
                      </span>
                    )}
                  </div>

                  {/* Bottom Stats Overlay with fully visible shares metric */}
                  <div className="absolute inset-x-0 bottom-0 px-2 sm:px-2.5 py-2 sm:py-2.5 bg-gradient-to-t from-black/95 via-black/75 to-transparent flex flex-col gap-1 pointer-events-none">
                    <p className="text-xs sm:text-sm text-white line-clamp-2 font-bold leading-snug drop-shadow-sm">
                      {video.title || 'Watch Video'}
                    </p>

                    <div className="grid grid-cols-3 items-center text-[10px] sm:text-[11px] text-white font-mono font-bold pt-1.5 border-t border-white/20 w-full">
                      <span className="flex items-center justify-start gap-1 text-slate-100 min-w-0" title={`${video.play_count || 0} views`}>
                        <Play className="w-3 h-3 fill-slate-100 text-slate-100 shrink-0" />
                        <span className="truncate">{formatNumber(video.play_count)}</span>
                      </span>

                      <span className="flex items-center justify-center gap-1 text-red-300 min-w-0" title={`${video.digg_count || 0} likes`}>
                        <Heart className="w-3 h-3 fill-red-400 text-red-400 shrink-0" />
                        <span className="truncate">{formatNumber(video.digg_count)}</span>
                      </span>

                      <span className="flex items-center justify-end gap-1 text-sky-200 min-w-0" title={`${video.share_count || 0} shares`}>
                        <Share2 className="w-3 h-3 text-sky-300 shrink-0" />
                        <span className="truncate">{formatNumber(video.share_count)}</span>
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* SHOW MORE VIDEOS Button at end of grid */}
          {hasMore && (
            <div className="flex flex-col items-center justify-center pt-6 pb-4">
              <button
                type="button"
                onClick={handleShowMoreVideos}
                disabled={loadingMore}
                className="px-8 py-3 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.98] text-white font-bold text-xs sm:text-sm tracking-wide uppercase flex items-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer"
              >
                {loadingMore ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-white" />
                    <span>Loading more videos...</span>
                  </>
                ) : (
                  <>
                    <span>SHOW MORE VIDEOS</span>
                    <ChevronDown className="w-4 h-4" />
                  </>
                )}
              </button>
              <p className="text-xs sm:text-sm text-slate-500 font-medium mt-2">
                Showing {videos.length} of {profileStats?.videoCount || 'all'} videos
              </p>
            </div>
          )}
        </section>
      )}

      {/* Video Player & Downloader Modal with enhanced data size and visibility */}
      {selectedVideo && (
        <div
          onClick={closeModal}
          className="fixed inset-0 z-50 bg-black/65 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl border border-slate-200 flex flex-col max-h-[96vh] animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Floating Close Button */}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center shadow-md transition-all active:scale-95 cursor-pointer"
              title="Close modal (Esc)"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Video Player Viewport */}
            <div className="relative bg-black flex items-center justify-center h-[54vh] sm:h-[60vh] max-h-[540px] min-h-[360px] w-full overflow-hidden shrink-0">
              {resolvingVideo ? (
                <div className="flex flex-col items-center justify-center gap-2 text-slate-300 py-16">
                  <Loader2 className="w-8 h-8 text-sky-400 animate-spin" />
                  <span className="text-xs sm:text-sm font-medium">Loading video...</span>
                </div>
              ) : (
                <video
                  ref={modalVideoRef}
                  src={activePlayUrl || selectedVideo.play || selectedVideo.wmplay}
                  controls
                  playsInline
                  autoPlay
                  preload="auto"
                  onError={handleVideoError}
                  className="w-full h-full object-contain"
                />
              )}
            </div>

            {/* Video Details & Meta with enhanced font size and visibility */}
            <div className="p-4 sm:p-6 flex flex-col gap-3.5 bg-white shrink-0">
              {/* Video Title */}
              <p className="text-sm sm:text-base md:text-lg font-bold text-slate-900 line-clamp-2 leading-snug break-words">
                {selectedVideo.title || 'TikTok Video'}
              </p>

              {/* Stats Bar */}
              <div className="flex items-center justify-between text-xs sm:text-sm md:text-base text-slate-700 bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 font-mono font-bold">
                <span className="flex items-center gap-1.5 sm:gap-2">
                  <Play className="w-4 h-4 fill-slate-600 text-slate-600" />
                  <span>{formatNumber(selectedVideo.play_count)} views</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 text-red-500">
                  <Heart className="w-4 h-4 fill-red-500 text-red-500" />
                  <span>{formatNumber(selectedVideo.digg_count)}</span>
                </span>
                <span className="flex items-center gap-1.5 sm:gap-2 text-sky-600">
                  <Share2 className="w-4 h-4 text-sky-600" />
                  <span>{formatNumber(selectedVideo.share_count)}</span>
                </span>
                {selectedVideo.duration ? (
                  <span className="text-slate-500">{formatDuration(selectedVideo.duration)}</span>
                ) : null}
              </div>

              {/* Action Buttons: in-button "Downloading..." */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                {/* Button 1: Download HD Video */}
                <button
                  type="button"
                  disabled={downloadingVideo || downloadingAudio}
                  onClick={handleDownloadVideo}
                  className="w-full py-3 px-4 rounded-xl bg-slate-900 hover:bg-black active:scale-[0.99] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer"
                >
                  {downloadingVideo ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-white" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      <span>Download HD Video</span>
                    </>
                  )}
                </button>

                {/* Button 2: Download Audio Only (MP3) */}
                <button
                  type="button"
                  disabled={downloadingVideo || downloadingAudio}
                  onClick={handleDownloadAudio}
                  className="w-full py-3 px-4 rounded-xl bg-white hover:bg-slate-50 active:scale-[0.99] text-slate-800 border border-slate-300 font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-xs transition-all disabled:opacity-50 cursor-pointer"
                >
                  {downloadingAudio ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-slate-700" />
                      <span>Downloading...</span>
                    </>
                  ) : (
                    <>
                      <Music className="w-4 h-4 text-slate-700" />
                      <span>Download Audio (MP3)</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Pages and Sections (Displayed on Home, NOT in Search Result) */}
      {!hasActiveResult && children}

      {/* Download Counter Modal with Ads & Background Stream Preparation */}
      <DownloadCounterModal
        isOpen={counterModalOpen}
        onClose={() => setCounterModalOpen(false)}
        downloadUrl={counterModalData.url}
        fileName={counterModalData.filename}
        mediaType={counterModalData.mediaType}
        title={counterModalData.title}
      />
    </div>
  );
}

```

# eslint.config.mjs

```mjs
import { defineConfig } from "eslint/config";
import next from "eslint-config-next";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig([{
    extends: [...next],
}]);

```

# hooks\use-mobile.ts

```ts
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false
  })

  React.useEffect(() => {
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    mql.addEventListener("change", onChange)
    return () => mql.removeEventListener("change", onChange)
  }, [])

  return !!isMobile
}

```

# lib\creators-data.ts

```ts
export interface CreatorData {
  username: string;
  displayName: string;
  category: string;
  categorySlug: string;
  followers: string;
  followerCount: number;
  likes: string;
  heartCount: number;
  bio: string;
  verified: boolean;
  avatar: string;
  country: string;
}

export interface CategoryData {
  slug: string;
  name: string;
  title: string;
  iconName: string;
  shortDescription: string;
  seoDescription: string;
  creatorUsernames: string[];
  trendingTags: string[];
  faqs: { question: string; answer: string }[];
}

export const CATEGORIES: CategoryData[] = [
  {
    slug: 'comedy',
    name: 'Comedy & Entertainment',
    title: 'Top TikTok Comedians & Viral Sketch Creators',
    iconName: 'Laugh',
    shortDescription: 'Discover the funniest TikTok creators, viral parodies, and life-hack debunkers.',
    seoDescription: 'Explore trending TikTok comedy creators, view engagement stats, and download funny clips in HD watermark-free MP4 and MP3 audio.',
    creatorUsernames: ['khaby.lame', 'zachking', 'mrbeast', 'spencerx', 'jasonderulo', 'charlidamelio'],
    trendingTags: ['#funny', '#comedy', '#humor', '#meme', '#sketch', '#lol'],
    faqs: [
      {
        question: 'Who is the most followed comedy creator on TikTok?',
        answer: 'Khaby Lame (@khaby.lame) is the most followed comedy creator on TikTok with over 160 million followers, famous for his signature silent reactions to overcomplicated life hacks.'
      },
      {
        question: 'Can I download TikTok comedy clips without watermarks?',
        answer: 'Yes! Using TikVault, you can download any public TikTok comedy video in original HD MP4 quality without the bouncing TikTok watermark logo.'
      },
      {
        question: 'How do TikTok comedians achieve high engagement rates?',
        answer: 'Comedy creators typically maintain 8-15% engagement rates because humorous short-form content drives high rewatch rates, comment arguments, and cross-platform shares.'
      }
    ]
  },
  {
    slug: 'food-cooking',
    name: 'Food & Cooking',
    title: 'Best TikTok Chefs, Foodies & Recipe Creators',
    iconName: 'Utensils',
    shortDescription: 'Watch mouthwatering culinary creations, quick 15-minute recipes, and restaurant reviews.',
    seoDescription: 'Browse the top culinary and recipe creators on TikTok. View follower counts, stream recipes without watermarks, and save audio tracks.',
    creatorUsernames: ['cznburak', 'gordonramsayofficial', 'the_pastaqueen', 'bayashi.tiktok', 'albert_cancook'],
    trendingTags: ['#foodtiktok', '#recipe', '#easyrecipe', '#cheflife', '#foodie', '#delicious'],
    faqs: [
      {
        question: 'How do I download TikTok recipe videos to cook later?',
        answer: 'Search any food creator on TikVault (like @gordonramsayofficial or @cznburak) and click Download HD Video to save the cooking tutorial directly to your device.'
      },
      {
        question: 'Who are the top chefs on TikTok?',
        answer: 'Notable chefs on TikTok include Gordon Ramsay (@gordonramsayofficial), Burak Özdemir (@cznburak), Bayashi (@bayashi.tiktok), and Albert Cancook (@albert_cancook).'
      }
    ]
  },
  {
    slug: 'tech-ai',
    name: 'Tech & AI',
    title: 'Top TikTok Tech Reviewers, AI Hacks & Gadget Creators',
    iconName: 'Cpu',
    shortDescription: 'Stay ahead of the curve with AI tools, smartphone reviews, PC setups, and software tricks.',
    seoDescription: 'Discover premier tech and AI creators on TikTok. View stats, download tutorial videos without watermarks, and analyze engagement metrics.',
    creatorUsernames: ['mkbhd', 'supersaf', 'urfavtechguy', 'andruhils', 'charlie_green'],
    trendingTags: ['#techtok', '#gadgets', '#apple', '#techreview', '#ai', '#productivity'],
    faqs: [
      {
        question: 'Can I download TikTok tech tutorials to watch offline?',
        answer: 'Yes, TikVault allows instant watermark-free MP4 downloads so you can reference software tutorials, coding tips, and hardware guides offline.'
      },
      {
        question: 'What is the best way to analyze a tech creator on TikTok?',
        answer: 'Use TikVault’s TikTok Analytics tool to calculate average view counts, engagement percentage, and total likes across their public posts.'
      }
    ]
  },
  {
    slug: 'gaming',
    name: 'Gaming & Esports',
    title: 'Best TikTok Gamers, Streamers & Esports Highlights',
    iconName: 'Gamepad2',
    shortDescription: 'Watch intense gaming clips, speedruns, funny glitches, and esports tournament highlights.',
    seoDescription: 'Explore top TikTok gaming personalities. Stream clips without watermarks, download sound effects in MP3, and view gamer profile statistics.',
    creatorUsernames: ['ninja', 'pokimane', 'timthetatman', 'tfue', 'sypherpk'],
    trendingTags: ['#gaming', '#gamer', '#gamertok', '#esports', '#fortnite', '#minecraft'],
    faqs: [
      {
        question: 'How do I extract TikTok gaming sound clips in MP3 format?',
        answer: 'Open the gamer profile on TikVault, select any video card, and click Download Audio Only (MP3) to save the background music or audio meme.'
      },
      {
        question: 'Can I view gamer TikTok profiles without having an account?',
        answer: 'Yes! TikVault is 100% anonymous and free—no TikTok login, app installation, or personal account is required.'
      }
    ]
  },
  {
    slug: 'fitness-sports',
    name: 'Fitness & Sports',
    title: 'Top TikTok Fitness Coaches, Athletes & Workout Routines',
    iconName: 'Dumbbell',
    shortDescription: 'Get inspired by gym workout routines, calisthenics, mobility drills, and athletic stunts.',
    seoDescription: 'Find leading fitness coaches and athletes on TikTok. Download workout tutorials in watermark-free HD to follow along at the gym.',
    creatorUsernames: ['demibagby', 'leanbeefpatty', 'chris_heria', 'joesthetics', 'hybridcalisthenics'],
    trendingTags: ['#gymtok', '#fitnesstips', '#workout', '#calisthenics', '#bodybuilding', '#health'],
    faqs: [
      {
        question: 'How can I save TikTok workout videos to my phone gallery?',
        answer: 'Enter the fitness creator username on TikVault, tap on the workout routine video, and click Download HD Video. The MP4 saves directly to your device storage.'
      },
      {
        question: 'Are fitness videos downloaded with watermarks?',
        answer: 'No. All videos downloaded through TikVault are 100% clean, high-definition streams with zero watermark or creator overlays.'
      }
    ]
  },
  {
    slug: 'dance-music',
    name: 'Dance & Music',
    title: 'Trending TikTok Dancers, Choreographers & Musical Artists',
    iconName: 'Music',
    shortDescription: 'Learn viral dance trends, watch choreography, and extract trending sound tracks.',
    seoDescription: 'Discover viral TikTok dance creators and musicians. Download HD choreography videos and extract original trending audio files in MP3 format.',
    creatorUsernames: ['charlidamelio', 'bellapoarch', 'addisonre', 'michael.le', 'dixiedamelio'],
    trendingTags: ['#dance', '#dancetrend', '#music', '#choreography', '#trendingdance', '#pop'],
    faqs: [
      {
        question: 'How do I download the original sound from a viral TikTok dance?',
        answer: 'Select the dance video in TikVault and click Download Audio Only (MP3) to download the high-fidelity 320kbps audio file directly.'
      },
      {
        question: 'Who are the biggest dance influencers on TikTok?',
        answer: 'Charli D’Amelio (@charlidamelio), Addison Rae (@addisonre), and Michael Le (@michael.le) are among the most famous dance influencers in TikTok history.'
      }
    ]
  }
];

export const CREATORS: CreatorData[] = [
  {
    username: 'khaby.lame',
    displayName: 'Khaby Lame',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '162.8M',
    followerCount: 162800000,
    likes: '2.5B',
    heartCount: 2500000000,
    bio: 'If you want to laugh, you are in the right place! Italian-Senegalese creator known for silent life-hack debunking.',
    verified: true,
    avatar: '/api/avatar?username=khaby.lame',
    country: 'Italy'
  },
  {
    username: 'charlidamelio',
    displayName: 'Charli D’Amelio',
    category: 'Dance & Music',
    categorySlug: 'dance-music',
    followers: '155.4M',
    followerCount: 155400000,
    likes: '11.6B',
    heartCount: 11600000000,
    bio: 'All smiles here :) Viral dancer, creator, and entrepreneur from Connecticut.',
    verified: true,
    avatar: '/api/avatar?username=charlidamelio',
    country: 'United States'
  },
  {
    username: 'mrbeast',
    displayName: 'MrBeast',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '104.2M',
    followerCount: 104200000,
    likes: '1.1B',
    heartCount: 1100000000,
    bio: 'I want to make the world a better place before I die. Philanthropist and creator of high-stakes challenges.',
    verified: true,
    avatar: '/api/avatar?username=mrbeast',
    country: 'United States'
  },
  {
    username: 'bellapoarch',
    displayName: 'Bella Poarch',
    category: 'Dance & Music',
    categorySlug: 'dance-music',
    followers: '94.1M',
    followerCount: 94100000,
    likes: '2.3B',
    heartCount: 2300000000,
    bio: 'Navy veteran, singer, and creator of the most liked video in TikTok history (M to the B).',
    verified: true,
    avatar: '/api/avatar?username=bellapoarch',
    country: 'United States'
  },
  {
    username: 'addisonre',
    displayName: 'Addison Rae',
    category: 'Dance & Music',
    categorySlug: 'dance-music',
    followers: '88.5M',
    followerCount: 88500000,
    likes: '5.9B',
    heartCount: 5900000000,
    bio: 'Pop singer, actress, and dance icon from Louisiana.',
    verified: true,
    avatar: '/api/avatar?username=addisonre',
    country: 'United States'
  },
  {
    username: 'zachking',
    displayName: 'Zach King',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '82.3M',
    followerCount: 82300000,
    likes: '1.2B',
    heartCount: 1200000000,
    bio: 'Bringing a little more wonder into the world. Master of digital sleight of hand and illusion videos.',
    verified: true,
    avatar: '/api/avatar?username=zachking',
    country: 'United States'
  },
  {
    username: 'cznburak',
    displayName: 'Burak Özdemir (CznBurak)',
    category: 'Food & Cooking',
    categorySlug: 'food-cooking',
    followers: '75.2M',
    followerCount: 75200000,
    likes: '1.5B',
    heartCount: 1500000000,
    bio: 'Smiley chef preparing giant kebabs, burgers, and Turkish feasts with a constant smile.',
    verified: true,
    avatar: '/api/avatar?username=cznburak',
    country: 'Turkey'
  },
  {
    username: 'gordonramsayofficial',
    displayName: 'Gordon Ramsay',
    category: 'Food & Cooking',
    categorySlug: 'food-cooking',
    followers: '40.6M',
    followerCount: 40600000,
    likes: '620M',
    heartCount: 620000000,
    bio: 'Always judging your cooking. Multi-Michelin starred chef and TV personality.',
    verified: true,
    avatar: '/api/avatar?username=gordonramsayofficial',
    country: 'United Kingdom'
  },
  {
    username: 'spencerx',
    displayName: 'Spencer X',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '55.3M',
    followerCount: 55300000,
    likes: '1.3B',
    heartCount: 1300000000,
    bio: 'One-man beatbox powerhouse producing mind-blowing tracks entirely with his mouth.',
    verified: true,
    avatar: '/api/avatar?username=spencerx',
    country: 'United States'
  },
  {
    username: 'jasonderulo',
    displayName: 'Jason Derulo',
    category: 'Comedy & Entertainment',
    categorySlug: 'comedy',
    followers: '60.4M',
    followerCount: 60400000,
    likes: '1.4B',
    heartCount: 1400000000,
    bio: 'Savage Love! Singer, entertainer, and creator of viral culinary and dance skits.',
    verified: true,
    avatar: '/api/avatar?username=jasonderulo',
    country: 'United States'
  },
  {
    username: 'demibagby',
    displayName: 'Demi Bagby',
    category: 'Fitness & Sports',
    categorySlug: 'fitness-sports',
    followers: '14.5M',
    followerCount: 14500000,
    likes: '340M',
    heartCount: 340000000,
    bio: 'Crossfit athlete, stunt enthusiast, and calisthenics adventurer spreading positive energy.',
    verified: true,
    avatar: '/api/avatar?username=demibagby',
    country: 'United States'
  },
  {
    username: 'ninja',
    displayName: 'Tyler Blevins (Ninja)',
    category: 'Gaming & Esports',
    categorySlug: 'gaming',
    followers: '19.2M',
    followerCount: 19200000,
    likes: '180M',
    heartCount: 180000000,
    bio: 'World famous gaming streamer, competitive battle royale pioneer, and content creator.',
    verified: true,
    avatar: '/api/avatar?username=ninja',
    country: 'United States'
  },
  {
    username: 'pokimane',
    displayName: 'Imane Anys (Pokimane)',
    category: 'Gaming & Esports',
    categorySlug: 'gaming',
    followers: '6.7M',
    followerCount: 6700000,
    likes: '85M',
    heartCount: 85000000,
    bio: 'Gaming enthusiast, variety streamer, and co-founder of RTS talent agency.',
    verified: true,
    avatar: '/api/avatar?username=pokimane',
    country: 'Canada'
  },
  {
    username: 'mkbhd',
    displayName: 'Marques Brownlee (MKBHD)',
    category: 'Tech & AI',
    categorySlug: 'tech-ai',
    followers: '3.8M',
    followerCount: 3800000,
    likes: '68M',
    heartCount: 68000000,
    bio: 'Crisp tech reviews, smartphone blind camera tests, and deep dives into the future of technology.',
    verified: true,
    avatar: '/api/avatar?username=mkbhd',
    country: 'United States'
  },
  {
    username: 'bayashi.tiktok',
    displayName: 'Bayashi',
    category: 'Food & Cooking',
    categorySlug: 'food-cooking',
    followers: '54.8M',
    followerCount: 54800000,
    likes: '1.6B',
    heartCount: 1600000000,
    bio: 'ASMR fast-paced cooking tutorials featuring deep-fried cheeses, meats, and delicious comfort food.',
    verified: true,
    avatar: '/api/avatar?username=bayashi.tiktok',
    country: 'Japan'
  }
];

export function getCreatorByUsername(username: string): CreatorData | undefined {
  const clean = username.toLowerCase().replace(/^@/, '').trim();
  return CREATORS.find((c) => c.username.toLowerCase() === clean);
}

export function getCategoryBySlug(slug: string): CategoryData | undefined {
  return CATEGORIES.find((c) => c.slug.toLowerCase() === slug.toLowerCase());
}

export function getCreatorsByCategory(categorySlug: string): CreatorData[] {
  return CREATORS.filter((c) => c.categorySlug === categorySlug);
}

```

# lib\settings-store.ts

```ts
'use client';


export interface AdPlacement {
  id: string;
  name: string;
  placement: 'modal' | 'header' | 'above_grid' | 'in_grid' | 'footer' | 'sidebar';
  dimension: 'responsive' | '728x90' | '300x250' | '336x280' | '320x100' | '300x600';
  code: string;
  enabled: boolean;
  notes?: string;
}

export interface SiteSettings {
  siteName: string;
  domainName: string;
  downloadCounterSeconds: number; // e.g. 5
  downloadPreparingText: string;
  downloadSuccessText: string;
  announcementEnabled: boolean;
  announcementText: string;
  announcementLink?: string;
  customHeadCode?: string;
  ads: AdPlacement[];
}

export const DEFAULT_SETTINGS: SiteSettings = {
  siteName: 'Tik Profiles Viewer',
  domainName: 'TikProfilesViewer.com',
  downloadCounterSeconds: 5,
  downloadPreparingText: 'Preparing clean HD video stream in background...',
  downloadSuccessText: 'Your download is ready! Starting download...',
  announcementEnabled: false,
  announcementText: '🔥 New: High-speed HD Video & MP3 Audio Downloader without watermarks!',
  announcementLink: '/tiktok-video-downloader',
  customHeadCode: '',
  ads: [
    {
      id: 'ad-modal-1',
      name: 'Download Modal Sponsored Banner',
      placement: 'modal',
      dimension: '300x250',
      code: '',
      enabled: false,
      notes: 'Shown inside the countdown download modal while preparing the video.',
    },
    {
      id: 'ad-header-1',
      name: 'Header Top Leaderboard',
      placement: 'header',
      dimension: '728x90',
      code: '',
      enabled: false,
      notes: 'Displayed on top of pages under navigation.',
    },
    {
      id: 'ad-above-grid-1',
      name: 'Above Videos Grid Banner',
      placement: 'above_grid',
      dimension: 'responsive',
      code: '',
      enabled: false,
      notes: 'Placed above the TikTok videos grid for high engagement.',
    },
    {
      id: 'ad-footer-1',
      name: 'Footer Leaderboard Banner',
      placement: 'footer',
      dimension: '728x90',
      code: '',
      enabled: false,
      notes: 'Placed directly above the main footer columns.',
    },
  ],
};

const SETTINGS_KEY = 'tpv_site_settings_v1';
const SETTINGS_CHANGE_EVENT = 'tpv_settings_updated';

export function getStoredSettings(): SiteSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  try {
    const raw = localStorage.getItem(SETTINGS_KEY);
    if (!raw) return DEFAULT_SETTINGS;
    const parsed = JSON.parse(raw);
    const cleanedAds = Array.isArray(parsed.ads)
      ? parsed.ads.map((ad: AdPlacement) => {
          // If ad code was the previous placeholder, clean it out
          if (ad.code && ad.code.includes('ad-placeholder')) {
            return { ...ad, code: '', enabled: false };
          }
          return ad;
        })
      : DEFAULT_SETTINGS.ads;

    return {
      ...DEFAULT_SETTINGS,
      ...parsed,
      ads: cleanedAds,
    };
  } catch (err) {
    console.warn('Failed to parse stored settings:', err);
    return DEFAULT_SETTINGS;
  }
}

export function saveStoredSettings(settings: SiteSettings) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
    window.dispatchEvent(new CustomEvent(SETTINGS_CHANGE_EVENT, { detail: settings }));
  } catch (err) {
    console.error('Failed to save settings:', err);
  }
}

import { useSyncExternalStore } from 'react';

let memoryCache: SiteSettings | null = null;
let lastRaw: string | null = null;

function subscribe(callback: () => void) {
  if (typeof window === 'undefined') return () => {};
  window.addEventListener(SETTINGS_CHANGE_EVENT, callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener(SETTINGS_CHANGE_EVENT, callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): SiteSettings {
  if (typeof window === 'undefined') return DEFAULT_SETTINGS;
  const raw = localStorage.getItem(SETTINGS_KEY);
  if (raw === lastRaw && memoryCache) return memoryCache;
  lastRaw = raw;
  memoryCache = getStoredSettings();
  return memoryCache;
}

function getServerSnapshot(): SiteSettings {
  return DEFAULT_SETTINGS;
}

export function useSiteSettings(): [SiteSettings, (newSettings: SiteSettings) => void] {
  const settings = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const update = (newSettings: SiteSettings) => {
    saveStoredSettings(newSettings);
  };

  return [settings, update];
}

```

# lib\utils.ts

```ts
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

```

# metadata.json

```json
{
  "name": "TikTok Profile Viewer & Downloader",
  "description": "Free TikTok profile viewer, video player, and watermark-free HD video and MP3 audio downloader powered by TikWM.",
  "requestFramePermissions": [],
  "majorCapabilities": ["MAJOR_CAPABILITY_SERVER_SIDE_GEMINI_API"]
}

```

# next-env.d.ts

```ts
/// <reference types="next" />
/// <reference types="next/image-types/global" />
/// <reference path="./.next/types/routes.d.ts" />

// NOTE: This file should not be edited
// see https://nextjs.org/docs/app/api-reference/config/typescript for more information.

```

# next.config.ts

```ts
import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: false,
  },
  // Allow access to remote image placeholder.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**', // This allows any path under the hostname
      },
    ],
  },
  output: 'standalone',
  transpilePackages: ['motion'],
  webpack: (config, {dev}) => {
    // HMR is disabled in AI Studio via DISABLE_HMR env var.
    // Do not modify—file watching is disabled to prevent flickering during agent edits.
    if (dev && process.env.DISABLE_HMR === 'true') {
      config.watchOptions = {
        ignored: /.*/,
      };
    }
    return config;
  },
};

export default nextConfig;

```

# package.json

```json
{
  "name": "ai-studio-applet",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint .",
    "clean": "next clean"
  },
  "dependencies": {
    "@google/genai": "^2.4.0",
    "@hookform/resolvers": "^5.2.1",
    "autoprefixer": "^10.4.21",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.553.0",
    "motion": "^12.23.24",
    "next": "^15.4.9",
    "postcss": "^8.5.6",
    "react": "^19.2.1",
    "react-dom": "^19.2.1",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "@tailwindcss/postcss": "4.1.11",
    "@tailwindcss/typography": "^0.5.19",
    "@types/node": "^20",
    "@types/react": "^19",
    "@types/react-dom": "^19",
    "eslint": "9.39.1",
    "eslint-config-next": "16.0.8",
    "firebase-tools": "^15.0.0",
    "tailwindcss": "4.1.11",
    "tw-animate-css": "^1.4.0",
    "typescript": "5.9.3"
  }
}

```

# postcss.config.mjs

```mjs
/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};

export default config;

```

# public\assets\aistudio\frequently-asked-questions_6e35cb08.png

This is a binary file of the type: Image

# public\assets\aistudio\image_3e4ac7ad.png

This is a binary file of the type: Image

# public\assets\aistudio\image_17e1a1d6.png

This is a binary file of the type: Image

# public\assets\aistudio\image_794df7a2.png

This is a binary file of the type: Image

# public\assets\aistudio\image_111253a3.png

This is a binary file of the type: Image

# public\assets\aistudio\image_c7aa501c.png

This is a binary file of the type: Image

# public\assets\aistudio\image_da7f4e51.png

This is a binary file of the type: Image

# public\assets\aistudio\image_ef102bb9.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-10-23_030009_18d68a32.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-10-23_030016_c751cae4.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-10-23_041501_d69b15c6.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-04_032416_2a9eb02e.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_014105_63323172.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_020427_0a878ad6.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_020440_2892c6ad.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_162419_54cf7999.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_173449_f834bc39.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_173829_e8759901.png

This is a binary file of the type: Image

# public\assets\aistudio\Screenshot_2026-11-06_210318_f8d31438.png

This is a binary file of the type: Image

# public\assets\aistudio\section-1_3e8f1512.png

This is a binary file of the type: Image

# public\assets\aistudio\section-2_62cdbcf1.png

This is a binary file of the type: Image

# public\assets\aistudio\Steps_b892d118.png

This is a binary file of the type: Image

# public\assets\aistudio\tik-profiles-viewer-logo_c4487561.png

This is a binary file of the type: Image

# public\assets\aistudio\web_design_style_3a9fffbd.webp

This is a binary file of the type: Image

# public\favicon.ico

This is a binary file of the type: Binary

# public\icon.png

This is a binary file of the type: Image

# public\index.html

```html
<!DOCTYPE html>
<html lang="en" class="dark">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="referrer" content="no-referrer" />
  <title>TikTok Profile Viewer & Downloader | 100% Free HD No-Watermark</title>
  <meta name="description" content="View TikTok profiles and download HD videos with no watermark and MP3 audio for free." />
  
  <!-- Tailwind CSS CDN -->
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      darkMode: 'class',
      theme: {
        extend: {
          colors: {
            brand: {
              50: '#fff1f2',
              500: '#f43f5e',
              600: '#e11d48',
              700: '#be123c',
            },
            dark: {
              bg: '#090d16',
              surface: '#0f172a',
              card: '#1e293b',
              border: '#334155'
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
          }
        }
      }
    }
  </script>

  <!-- Lucide Icons CDN -->
  <script src="https://unpkg.com/lucide@latest"></script>

  <style>
    /* Custom scrollbar */
    ::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #090d16;
    }
    ::-webkit-scrollbar-thumb {
      background: #334155;
      border-radius: 4px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: #475569;
    }
  </style>
</head>
<body class="bg-[#090d16] text-slate-100 min-h-screen flex flex-col antialiased selection:bg-rose-500/30 selection:text-rose-200">

  <!-- Top Navigation Bar -->
  <header class="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#090d16]/90 backdrop-blur-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
      <!-- Brand Title -->
      <a href="#" class="flex items-center gap-2.5 text-lg font-bold tracking-tight text-white whitespace-nowrap">
        <div class="w-8 h-8 rounded-lg bg-gradient-to-tr from-rose-600 via-pink-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-rose-500/20">
          <i data-lucide="play" class="w-4 h-4 fill-white"></i>
        </div>
        <span>Tik<span class="text-rose-500">Vault</span></span>
      </a>

      <!-- Center status/badge -->
      <div class="hidden md:flex items-center gap-2 text-xs text-slate-400">
        <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800/80 border border-slate-700/60 font-medium text-emerald-400">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          100% Free · No API Key
        </span>
        <span class="text-slate-500">|</span>
        <span>HD Video & MP3 Downloader</span>
      </div>

      <!-- Action Button -->
      <div class="flex items-center gap-3">
        <button id="quick-clear-btn" class="hidden text-xs font-medium text-slate-400 hover:text-white px-2.5 py-1.5 rounded-md hover:bg-slate-800 transition-colors">
          Clear
        </button>
      </div>
    </div>
  </header>

  <!-- Main Content Container -->
  <main class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col gap-8">

    <!-- Search Section -->
    <section class="w-full max-w-2xl mx-auto flex flex-col items-center gap-4 text-center">
      <div class="space-y-1.5">
        <h1 class="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          TikTok Profile Viewer & Downloader
        </h1>
        <p class="text-sm text-slate-400 max-w-md mx-auto">
          Explore any creator's latest posts, watch watermark-free HD streams, and download MP4 or MP3 directly.
        </p>
      </div>

      <!-- Search Input Box -->
      <form id="search-form" class="w-full relative mt-2">
        <div class="relative flex items-center shadow-2xl rounded-xl bg-slate-900 border border-slate-700/80 focus-within:border-rose-500 focus-within:ring-2 focus-within:ring-rose-500/20 transition-all">
          <!-- Pinned Fixed Non-Editable @ Symbol -->
          <div class="absolute left-0 top-0 bottom-0 pl-4 pr-1 flex items-center justify-center pointer-events-none select-none text-slate-400 font-semibold text-lg">
            @
          </div>

          <!-- Raw Username Input -->
          <input
            id="username-input"
            type="text"
            autocomplete="off"
            spellcheck="false"
            placeholder="username (e.g. charlidamelio)"
            class="w-full pl-9 pr-28 py-3.5 bg-transparent text-white placeholder-slate-500 font-medium text-sm sm:text-base focus:outline-none"
          />

          <!-- Search Button -->
          <button
            type="submit"
            id="search-btn"
            class="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-lg bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 text-white font-medium text-sm flex items-center gap-1.5 shadow-md shadow-rose-600/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
          >
            <span id="search-btn-icon"><i data-lucide="search" class="w-4 h-4"></i></span>
            <span id="search-btn-text">Search</span>
          </button>
        </div>
      </form>

      <!-- Quick Pick Suggestions -->
      <div class="flex items-center flex-wrap justify-center gap-1.5 text-xs text-slate-400">
        <span class="text-slate-500 mr-1">Popular creators:</span>
        <button type="button" class="quick-chip px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:text-rose-400 transition-colors cursor-pointer" data-user="charlidamelio">@charlidamelio</button>
        <button type="button" class="quick-chip px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:text-rose-400 transition-colors cursor-pointer" data-user="khaby.lame">@khaby.lame</button>
        <button type="button" class="quick-chip px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:text-rose-400 transition-colors cursor-pointer" data-user="zachking">@zachking</button>
        <button type="button" class="quick-chip px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:text-rose-400 transition-colors cursor-pointer" data-user="bellapoarch">@bellapoarch</button>
        <button type="button" class="quick-chip px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:text-rose-400 transition-colors cursor-pointer" data-user="mrbeast">@mrbeast</button>
        <button type="button" class="quick-chip px-2.5 py-1 rounded-md bg-slate-800/70 hover:bg-slate-800 border border-slate-700/60 hover:text-rose-400 transition-colors cursor-pointer" data-user="sssniperwolf">@sssniperwolf</button>
      </div>

      <!-- Alert / Error Banner -->
      <div id="error-alert" class="hidden w-full p-4 rounded-xl bg-rose-950/40 border border-rose-800/60 text-rose-200 text-sm text-left flex items-start gap-3">
        <i data-lucide="alert-circle" class="w-5 h-5 text-rose-400 shrink-0 mt-0.5"></i>
        <div class="flex-1">
          <p id="error-message" class="font-medium text-rose-100">User not found or account is private.</p>
          <p class="text-xs text-rose-300/80 mt-0.5">Please check the TikTok username and ensure the account has public videos.</p>
        </div>
        <button id="dismiss-error" class="text-rose-400 hover:text-rose-200 cursor-pointer">
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Loading State -->
      <div id="loading-spinner" class="hidden flex-col items-center justify-center py-12 gap-3">
        <div class="w-10 h-10 border-3 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
        <p class="text-sm font-medium text-slate-300">Retrieving profile and video streams...</p>
        <p class="text-xs text-slate-500">Connecting to public feed engine</p>
      </div>
    </section>

    <!-- Compact Profile Information Container -->
    <section id="profile-container" class="hidden w-full max-w-4xl mx-auto rounded-2xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-xl">
      <div class="flex flex-col sm:flex-row items-center sm:items-start gap-5">
        <!-- Avatar -->
        <div class="relative shrink-0">
          <img
            id="profile-avatar"
            src=""
            alt="Profile Avatar"
            referrerPolicy="no-referrer"
            class="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-2 border-rose-500 shadow-md shadow-rose-500/10 bg-slate-800"
            onerror="this.src='https://ui-avatars.com/api/?name=User&background=1e293b&color=f43f5e'"
          />
          <div id="verified-badge" class="hidden absolute bottom-0 right-0 bg-blue-500 text-white p-1 rounded-full border-2 border-slate-900 shadow">
            <i data-lucide="check" class="w-3 h-3 stroke-[3]"></i>
          </div>
        </div>

        <!-- Identity & Bio -->
        <div class="flex-1 text-center sm:text-left min-w-0">
          <div class="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3">
            <h2 id="profile-nickname" class="text-lg sm:text-xl font-bold text-white truncate"></h2>
            <div class="flex items-center justify-center sm:justify-start gap-2">
              <span id="profile-username" class="text-xs sm:text-sm font-mono text-rose-400 font-medium"></span>
              <a
                id="profile-tiktok-link"
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center gap-1 text-xs text-slate-400 hover:text-white px-2 py-0.5 rounded bg-slate-800/80 hover:bg-slate-700 transition-colors"
                title="Open on TikTok"
              >
                <span>TikTok</span>
                <i data-lucide="external-link" class="w-3 h-3"></i>
              </a>
            </div>
          </div>

          <p id="profile-bio" class="text-xs sm:text-sm text-slate-300 mt-2 line-clamp-2 sm:line-clamp-3 leading-relaxed"></p>

          <!-- 4-Column Compact Stat Metrics -->
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 mt-4 pt-4 border-t border-slate-800/80">
            <!-- Followers -->
            <div class="bg-slate-800/50 rounded-xl p-2.5 text-center border border-slate-800">
              <div id="stat-followers" class="text-base sm:text-lg font-bold text-white font-mono tracking-tight">-</div>
              <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Followers</div>
            </div>
            <!-- Following -->
            <div class="bg-slate-800/50 rounded-xl p-2.5 text-center border border-slate-800">
              <div id="stat-following" class="text-base sm:text-lg font-bold text-white font-mono tracking-tight">-</div>
              <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Following</div>
            </div>
            <!-- Total Likes -->
            <div class="bg-slate-800/50 rounded-xl p-2.5 text-center border border-slate-800">
              <div id="stat-likes" class="text-base sm:text-lg font-bold text-rose-400 font-mono tracking-tight">-</div>
              <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Total Likes</div>
            </div>
            <!-- Video Count -->
            <div class="bg-slate-800/50 rounded-xl p-2.5 text-center border border-slate-800">
              <div id="stat-videos" class="text-base sm:text-lg font-bold text-white font-mono tracking-tight">-</div>
              <div class="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Videos</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Video Grid Section -->
    <section id="videos-section" class="hidden w-full flex flex-col gap-4">
      <div class="flex items-center justify-between border-b border-slate-800/80 pb-3">
        <div class="flex items-center gap-2">
          <i data-lucide="film" class="w-4 h-4 text-rose-500"></i>
          <h3 class="text-sm font-semibold text-slate-200 uppercase tracking-wider">User Posts</h3>
          <span id="posts-count-badge" class="text-xs font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300">0 videos</span>
        </div>
        <div class="text-xs text-slate-400 flex items-center gap-1.5">
          <i data-lucide="tv" class="w-3.5 h-3.5"></i>
          <span>Click any video to watch & download</span>
        </div>
      </div>

      <!-- 1. Strictly 5 columns on desktop, NO zooming or changing shapes on hover -->
      <div
        id="video-grid"
        class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4"
      >
        <!-- Dynamic Video Cards inserted here -->
      </div>

      <!-- 7. SHOW MORE VIDEOS Button at end of grid -->
      <div id="show-more-container" class="hidden flex-col items-center justify-center pt-6 pb-4">
        <button
          type="button"
          id="show-more-btn"
          class="px-8 py-3.5 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 active:scale-[0.98] text-white font-bold text-sm tracking-wide uppercase flex items-center gap-2.5 shadow-lg shadow-rose-600/20 transition-all cursor-pointer disabled:opacity-50"
        >
          <span id="show-more-text">SHOW MORE VIDEOS</span>
          <i id="show-more-icon" data-lucide="chevron-down" class="w-4 h-4"></i>
        </button>
        <p id="show-more-counter" class="text-xs text-slate-500 mt-2"></p>
      </div>
    </section>

    <!-- Empty State / Welcome Placeholder -->
    <section id="welcome-placeholder" class="w-full max-w-xl mx-auto py-12 text-center flex flex-col items-center gap-4 text-slate-400">
      <div class="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center text-rose-500 shadow-inner">
        <i data-lucide="video" class="w-8 h-8"></i>
      </div>
      <div>
        <h3 class="text-base font-semibold text-slate-200">Ready to View & Download</h3>
        <p class="text-xs text-slate-400 mt-1 max-w-md">
          Type any public TikTok username above or click one of the quick suggestions to inspect videos, stream without watermarks, and download HD files.
        </p>
      </div>
    </section>

  </main>

  <!-- Interactive Watch & Download Modal -->
  <div
    id="video-modal"
    class="fixed inset-0 z-50 hidden bg-black/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
  >
    <div
      id="modal-card"
      class="relative w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200"
    >
      <!-- Modal Header -->
      <div class="p-3.5 px-4 border-b border-slate-800 flex items-center justify-between bg-slate-900/90 z-10">
        <div class="flex items-center gap-2 truncate">
          <img id="modal-author-avatar" src="" alt="avatar" class="w-6 h-6 rounded-full object-cover border border-rose-500 shrink-0" onerror="this.style.display='none'" />
          <span id="modal-author-name" class="text-xs font-semibold text-slate-200 truncate"></span>
        </div>
        <!-- Close Button -->
        <button
          id="modal-close-btn"
          type="button"
          class="w-7 h-7 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          title="Close modal (Esc)"
        >
          <i data-lucide="x" class="w-4 h-4"></i>
        </button>
      </div>

      <!-- Video Player Viewport -->
      <div class="relative bg-black flex items-center justify-center min-h-[300px] max-h-[55vh] overflow-hidden">
        <div id="video-loading-indicator" class="hidden absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/80 z-20 text-slate-400">
          <div class="w-8 h-8 border-3 border-rose-500 border-t-transparent rounded-full animate-spin"></div>
          <span class="text-xs font-medium">Loading watermark-free stream...</span>
        </div>
        <video
          id="modal-video-player"
          controls
          playsinline
          autoplay
          class="w-full max-h-[55vh] object-contain"
        ></video>
      </div>

      <!-- Video Info & Meta -->
      <div class="p-4 flex flex-col gap-3.5 bg-slate-900">
        <!-- 4. Video title WITHOUT scrollbar (clean word wrap) -->
        <p id="modal-video-title" class="text-xs sm:text-sm text-slate-200 leading-relaxed break-words"></p>

        <!-- Stats Bar in Modal -->
        <div class="flex items-center justify-between text-xs text-slate-400 bg-slate-800/60 px-3 py-2 rounded-lg border border-slate-800 font-mono">
          <span class="flex items-center gap-1.5"><i data-lucide="play" class="w-3.5 h-3.5 text-slate-400"></i><span id="modal-plays">0</span></span>
          <span class="flex items-center gap-1.5"><i data-lucide="heart" class="w-3.5 h-3.5 text-rose-500"></i><span id="modal-likes">0</span></span>
          <span class="flex items-center gap-1.5"><i data-lucide="share-2" class="w-3.5 h-3.5 text-blue-400"></i><span id="modal-shares">0</span></span>
          <span id="modal-duration" class="text-slate-500">0:00</span>
        </div>

        <!-- Music info -->
        <div id="modal-music-row" class="hidden flex items-center gap-2 text-xs text-slate-400 truncate">
          <i data-lucide="music" class="w-3.5 h-3.5 text-emerald-400 shrink-0"></i>
          <span id="modal-music-title" class="truncate"></span>
        </div>

        <!-- 5 & 6. Action Buttons with text-only state changing to "Downloading..." (NO new elements) -->
        <div class="flex flex-col gap-2 pt-1">
          <!-- Button 1: Download HD Video (No Watermark) -->
          <button
            id="download-video-btn"
            type="button"
            class="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-rose-600 to-rose-500 hover:from-rose-500 hover:to-rose-400 active:scale-[0.99] text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 shadow-lg shadow-rose-600/25 transition-all disabled:opacity-50 cursor-pointer"
          >
            <i data-lucide="download" class="w-4 h-4"></i>
            <span id="download-video-text">Download HD Video (No Watermark)</span>
          </button>

          <!-- Button 2: Download Audio Only (MP3) -->
          <button
            id="download-audio-btn"
            type="button"
            class="w-full py-2.5 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 active:scale-[0.99] text-slate-200 hover:text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-2 border border-slate-700/80 transition-all disabled:opacity-50 cursor-pointer"
          >
            <i data-lucide="music" class="w-4 h-4 text-emerald-400"></i>
            <span id="download-audio-text">Download Audio Only (MP3)</span>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Footer -->
  <footer class="w-full border-t border-slate-800/80 py-6 text-center text-xs text-slate-500 mt-auto">
    <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
      <p>TikTok Profile Viewer & Downloader · 100% Free · No-Watermark MP4 & MP3</p>
      <p class="text-slate-600">Educational & Personal Use Only · Powered by TikTok Public Engine</p>
    </div>
  </footer>

  <!-- Vanilla JavaScript Logic -->
  <script>
    const state = {
      currentUser: null,
      currentVideos: [],
      selectedVideo: null,
      isLoading: false,
      isLoadingMore: false,
      nextCursor: null,
      hasMore: false,
    };

    const searchForm = document.getElementById('search-form');
    const usernameInput = document.getElementById('username-input');
    const searchBtn = document.getElementById('search-btn');
    const searchBtnText = document.getElementById('search-btn-text');
    const quickClearBtn = document.getElementById('quick-clear-btn');
    const loadingSpinner = document.getElementById('loading-spinner');
    const errorAlert = document.getElementById('error-alert');
    const errorMessage = document.getElementById('error-message');
    const dismissError = document.getElementById('dismiss-error');
    const welcomePlaceholder = document.getElementById('welcome-placeholder');

    const profileContainer = document.getElementById('profile-container');
    const profileAvatar = document.getElementById('profile-avatar');
    const profileNickname = document.getElementById('profile-nickname');
    const profileUsername = document.getElementById('profile-username');
    const profileBio = document.getElementById('profile-bio');
    const profileTiktokLink = document.getElementById('profile-tiktok-link');
    const verifiedBadge = document.getElementById('verified-badge');
    const statFollowers = document.getElementById('stat-followers');
    const statFollowing = document.getElementById('stat-following');
    const statLikes = document.getElementById('stat-likes');
    const statVideos = document.getElementById('stat-videos');

    const videosSection = document.getElementById('videos-section');
    const videoGrid = document.getElementById('video-grid');
    const postsCountBadge = document.getElementById('posts-count-badge');
    const showMoreContainer = document.getElementById('show-more-container');
    const showMoreBtn = document.getElementById('show-more-btn');
    const showMoreText = document.getElementById('show-more-text');
    const showMoreCounter = document.getElementById('show-more-counter');

    const videoModal = document.getElementById('video-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const modalVideoPlayer = document.getElementById('modal-video-player');
    const videoLoadingIndicator = document.getElementById('video-loading-indicator');
    const modalAuthorAvatar = document.getElementById('modal-author-avatar');
    const modalAuthorName = document.getElementById('modal-author-name');
    const modalVideoTitle = document.getElementById('modal-video-title');
    const modalPlays = document.getElementById('modal-plays');
    const modalLikes = document.getElementById('modal-likes');
    const modalShares = document.getElementById('modal-shares');
    const modalDuration = document.getElementById('modal-duration');
    const modalMusicRow = document.getElementById('modal-music-row');
    const modalMusicTitle = document.getElementById('modal-music-title');
    const downloadVideoBtn = document.getElementById('download-video-btn');
    const downloadVideoText = document.getElementById('download-video-text');
    const downloadAudioBtn = document.getElementById('download-audio-btn');
    const downloadAudioText = document.getElementById('download-audio-text');

    function refreshIcons() {
      if (window.lucide && typeof window.lucide.createIcons === 'function') {
        window.lucide.createIcons();
      }
    }
    refreshIcons();

    function formatNumber(num) {
      if (num === undefined || num === null || isNaN(num)) return '0';
      const n = Number(num);
      if (n >= 1_000_000_000) return (n / 1_000_000_000).toFixed(1).replace(/\.0$/, '') + 'B';
      if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
      if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'K';
      return n.toLocaleString();
    }

    function formatDuration(sec) {
      if (!sec || isNaN(sec)) return '';
      const m = Math.floor(sec / 60);
      const s = Math.floor(sec % 60);
      return `${m}:${s < 10 ? '0' : ''}${s}`;
    }

    function sanitizeUsername(input) {
      if (!input) return '';
      let clean = input.trim();
      const urlMatch = clean.match(/tiktok\.com\/@?([a-zA-Z0-9._]+)/);
      if (urlMatch && urlMatch[1]) clean = urlMatch[1];
      return clean.replace(/^@+/, '').trim();
    }

    function showError(msg) {
      errorMessage.textContent = msg || 'User not found or account is private.';
      errorAlert.classList.remove('hidden');
      refreshIcons();
    }

    function hideError() {
      errorAlert.classList.add('hidden');
    }

    function setLoading(loading) {
      state.isLoading = loading;
      if (loading) {
        hideError();
        loadingSpinner.classList.remove('hidden');
        searchBtn.disabled = true;
        searchBtnText.textContent = 'Searching...';
        welcomePlaceholder.classList.add('hidden');
      } else {
        loadingSpinner.classList.add('hidden');
        searchBtn.disabled = false;
        searchBtnText.textContent = 'Search';
      }
    }

    // 2. Disable website scrolling behind video modal
    function openVideoModal(video) {
      state.selectedVideo = video;
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';

      const author = video.author || state.currentUser || {};
      modalAuthorAvatar.src = author.avatar || '';
      modalAuthorName.textContent = author.nickname ? `${author.nickname} (@${author.unique_id})` : `@${author.unique_id || ''}`;
      
      // 4. Video title without scrollbar
      modalVideoTitle.textContent = video.title || 'TikTok Video (No Title)';
      
      modalPlays.textContent = formatNumber(video.play_count);
      modalLikes.textContent = formatNumber(video.digg_count);
      modalShares.textContent = formatNumber(video.share_count);
      modalDuration.textContent = formatDuration(video.duration);

      if (video.music_info && video.music_info.title) {
        modalMusicTitle.textContent = video.music_info.title;
        modalMusicRow.classList.remove('hidden');
      } else {
        modalMusicRow.classList.add('hidden');
      }

      // Reset button states
      downloadVideoBtn.disabled = false;
      downloadVideoText.textContent = 'Download HD Video (No Watermark)';
      downloadAudioBtn.disabled = false;
      downloadAudioText.textContent = 'Download Audio Only (MP3)';

      videoLoadingIndicator.classList.remove('hidden');
      videoModal.classList.remove('hidden');
      refreshIcons();

      // 3. Resolve clean working stream
      resolveAndPlayVideo(video);
    }

    function closeVideoModal() {
      videoModal.classList.add('hidden');
      modalVideoPlayer.pause();
      modalVideoPlayer.src = '';
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      state.selectedVideo = null;
    }

    async function resolveAndPlayVideo(video) {
      const authorUser = (video.author && video.author.unique_id) || (state.currentUser && state.currentUser.unique_id) || 'tiktok';
      const videoId = video.video_id || video.id;

      let playableUrl = video.play || video.wmplay || '';

      try {
        const resolveRes = await fetch(`/api/resolve?id=${encodeURIComponent(String(videoId))}&username=${encodeURIComponent(authorUser)}`);
        if (resolveRes.ok) {
          const resData = await resolveRes.json();
          if (resData.success && resData.play) {
            playableUrl = resData.play;
            if (resData.music) {
              video.music = resData.music;
              if (video.music_info) video.music_info.play = resData.music;
            }
          }
        }
      } catch (e) {}

      // Pipe through proxy with Range support for 100% playable HTML5 playback
      const proxiedUrl = `/api/proxy?url=${encodeURIComponent(playableUrl)}`;
      modalVideoPlayer.src = proxiedUrl;
      videoLoadingIndicator.classList.add('hidden');

      modalVideoPlayer.load();
      modalVideoPlayer.play().catch(() => {});
    }

    // Direct download handler
    async function downloadFile(url, filename) {
      const proxyDownloadUrl = `/api/proxy?url=${encodeURIComponent(url)}&filename=${encodeURIComponent(filename)}&download=1`;
      try {
        const res = await fetch(proxyDownloadUrl);
        if (!res.ok) throw new Error('Proxy download failed');
        const blob = await res.blob();
        const blobUrl = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = blobUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => {
          document.body.removeChild(a);
          window.URL.revokeObjectURL(blobUrl);
        }, 1000);
      } catch {
        const a = document.createElement('a');
        a.href = proxyDownloadUrl;
        a.target = '_blank';
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        setTimeout(() => document.body.removeChild(a), 1000);
      }
    }

    // 5. Download HD Video (text-only "Downloading...", NO extra elements)
    downloadVideoBtn.addEventListener('click', async () => {
      const v = state.selectedVideo;
      if (!v || downloadVideoBtn.disabled) return;

      downloadVideoBtn.disabled = true;
      downloadVideoText.textContent = 'Downloading...';

      const username = (v.author && v.author.unique_id) || (state.currentUser && state.currentUser.unique_id) || 'tiktok';
      const id = v.video_id || v.id || Date.now();
      const filename = `${username}-${id}.mp4`;
      let videoUrl = v.play || v.wmplay || '';

      try {
        const resolveRes = await fetch(`/api/resolve?id=${encodeURIComponent(id)}&username=${encodeURIComponent(username)}`);
        if (resolveRes.ok) {
          const resJson = await resolveRes.json();
          if (resJson.success && resJson.play) {
            videoUrl = resJson.play;
          }
        }
      } catch (e) {}

      if (videoUrl) {
        await downloadFile(videoUrl, filename);
      }

      setTimeout(() => {
        downloadVideoBtn.disabled = false;
        downloadVideoText.textContent = 'Download HD Video (No Watermark)';
      }, 1200);
    });

    // 6. Download Audio Only (MP3) - working with text-only "Downloading..."
    downloadAudioBtn.addEventListener('click', async () => {
      const v = state.selectedVideo;
      if (!v || downloadAudioBtn.disabled) return;

      downloadAudioBtn.disabled = true;
      downloadAudioText.textContent = 'Downloading...';

      const username = (v.author && v.author.unique_id) || (state.currentUser && state.currentUser.unique_id) || 'tiktok';
      const id = v.video_id || v.id || Date.now();
      const filename = `${username}-${id}.mp3`;
      let audioUrl = (v.music_info && v.music_info.play) || v.music || '';

      try {
        const resolveRes = await fetch(`/api/resolve?id=${encodeURIComponent(id)}&username=${encodeURIComponent(username)}`);
        if (resolveRes.ok) {
          const resJson = await resolveRes.json();
          if (resJson.success && resJson.music) {
            audioUrl = resJson.music;
          }
        }
      } catch (e) {}

      if (audioUrl) {
        await downloadFile(audioUrl, filename);
      } else {
        alert('Audio stream URL is not available.');
      }

      setTimeout(() => {
        downloadAudioBtn.disabled = false;
        downloadAudioText.textContent = 'Download Audio Only (MP3)';
      }, 1200);
    });

    // Render video card (1. Static, NO hover zoom or shape changes)
    function appendVideoCard(video, index) {
      const card = document.createElement('div');
      card.className = 'relative aspect-[9/16] rounded-xl overflow-hidden bg-slate-900 border border-slate-800 cursor-pointer shadow-md hover:border-rose-500 transition-colors duration-200';

      const coverImg = video.cover || video.origin_cover || '';
      const plays = formatNumber(video.play_count);
      const likes = formatNumber(video.digg_count);
      const shares = formatNumber(video.share_count);
      const duration = formatDuration(video.duration);

      card.innerHTML = `
        <img
          src="${coverImg}"
          alt="${video.title ? video.title.replace(/"/g, '&quot;') : 'TikTok video'}"
          referrerPolicy="no-referrer"
          loading="lazy"
          class="w-full h-full object-cover bg-slate-800 pointer-events-none"
        />
        <div class="absolute inset-x-0 top-0 p-2.5 flex justify-between items-start bg-gradient-to-b from-black/70 via-black/30 to-transparent pointer-events-none">
          <span class="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded bg-black/60 text-slate-200">#${index + 1}</span>
          ${duration ? `<span class="text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/60 text-slate-200">${duration}</span>` : ''}
        </div>
        <div class="absolute inset-x-0 bottom-0 p-2 sm:p-2.5 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col gap-1.5 pointer-events-none">
          <p class="text-[11px] text-slate-200 truncate font-medium drop-shadow-sm">${video.title ? video.title : 'Watch Video'}</p>
          <div class="flex items-center justify-between text-[11px] text-slate-300 font-mono font-semibold pt-1 border-t border-white/10">
            <span class="flex items-center gap-1 drop-shadow"><i data-lucide="play" class="w-3 h-3 text-slate-300"></i><span>${plays}</span></span>
            <span class="flex items-center gap-1 drop-shadow text-rose-300"><i data-lucide="heart" class="w-3 h-3 fill-rose-500 text-rose-500"></i><span>${likes}</span></span>
            <span class="flex items-center gap-1 drop-shadow text-blue-300"><i data-lucide="share-2" class="w-3 h-3 text-blue-400"></i><span>${shares}</span></span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => {
        openVideoModal(video);
      });

      videoGrid.appendChild(card);
    }

    // 7. Show More Videos Pagination
    async function loadMoreVideos() {
      if (!state.currentUser?.unique_id || !state.nextCursor || state.isLoadingMore) return;

      state.isLoadingMore = true;
      showMoreBtn.disabled = true;
      showMoreText.textContent = 'LOADING MORE VIDEOS...';

      try {
        const res = await fetch(`/api/tiktok?username=${encodeURIComponent(state.currentUser.unique_id)}&cursor=${state.nextCursor}&count=15`);
        const data = await res.json();

        if (data && data.code === 0 && data.data?.videos?.length > 0) {
          const newVideos = data.data.videos;
          const startIndex = state.currentVideos.length;
          newVideos.forEach((v, i) => {
            state.currentVideos.push(v);
            appendVideoCard(v, startIndex + i);
          });

          state.nextCursor = data.data.cursor || null;
          state.hasMore = !!data.data.hasMore && !!data.data.cursor;

          postsCountBadge.textContent = `${state.currentVideos.length} videos`;
          showMoreCounter.textContent = `Showing ${state.currentVideos.length} of ${state.currentUser.videoCount || 'all'} videos`;

          if (!state.hasMore) {
            showMoreContainer.classList.add('hidden');
          }
          refreshIcons();
        } else {
          showMoreContainer.classList.add('hidden');
        }
      } catch (e) {
        showMoreContainer.classList.add('hidden');
      } finally {
        state.isLoadingMore = false;
        showMoreBtn.disabled = false;
        showMoreText.textContent = 'SHOW MORE VIDEOS';
      }
    }

    showMoreBtn.addEventListener('click', loadMoreVideos);

    async function fetchUserPosts(username) {
      const cleanUser = sanitizeUsername(username);
      if (!cleanUser) {
        showError('Please enter a valid TikTok username.');
        return;
      }

      setLoading(true);
      hideError();
      showMoreContainer.classList.add('hidden');

      try {
        const res = await fetch(`/api/tiktok?username=${encodeURIComponent(cleanUser)}`);
        const data = await res.json();

        if (!data || data.code !== 0 || !data.data) {
          const apiMsg = data && data.msg ? data.msg : `User @${cleanUser} not found or account is private.`;
          showError(apiMsg);
          profileContainer.classList.add('hidden');
          videosSection.classList.add('hidden');
          welcomePlaceholder.classList.remove('hidden');
          return;
        }

        const resData = data.data;
        const videos = resData.videos || [];
        const userObj = resData.user || {};
        const stats = resData.stats || {};

        if (videos.length === 0) {
          showError(`@${cleanUser} was found, but has 0 public videos.`);
          profileContainer.classList.add('hidden');
          videosSection.classList.add('hidden');
          welcomePlaceholder.classList.remove('hidden');
          return;
        }

        state.currentUser = {
          unique_id: userObj.unique_id || cleanUser,
          nickname: userObj.nickname || cleanUser,
          avatar: userObj.avatar || '',
          signature: userObj.signature || '',
          verified: !!userObj.verified,
          videoCount: stats.videoCount || videos.length,
        };
        state.currentVideos = [...videos];
        state.nextCursor = resData.cursor || null;
        state.hasMore = !!resData.hasMore && !!resData.cursor;

        // Render Profile
        profileAvatar.src = state.currentUser.avatar || `https://ui-avatars.com/api/?name=${encodeURIComponent(state.currentUser.nickname)}&background=1e293b&color=f43f5e`;
        profileNickname.textContent = state.currentUser.nickname;
        profileUsername.textContent = `@${state.currentUser.unique_id}`;
        profileTiktokLink.href = `https://www.tiktok.com/@${state.currentUser.unique_id}`;

        if (state.currentUser.signature && state.currentUser.signature.trim()) {
          profileBio.textContent = state.currentUser.signature;
          profileBio.classList.remove('hidden');
        } else {
          profileBio.classList.add('hidden');
        }

        if (state.currentUser.verified) verifiedBadge.classList.remove('hidden');
        else verifiedBadge.classList.add('hidden');

        statFollowers.textContent = stats.followerCount !== null ? formatNumber(stats.followerCount) : '—';
        statFollowing.textContent = stats.followingCount !== null ? formatNumber(stats.followingCount) : '—';
        statLikes.textContent = formatNumber(stats.heartCount);
        statVideos.textContent = formatNumber(stats.videoCount);

        profileContainer.classList.remove('hidden');

        // Render Video Grid
        videoGrid.innerHTML = '';
        postsCountBadge.textContent = `${videos.length} videos`;
        videos.forEach((v, i) => appendVideoCard(v, i));

        videosSection.classList.remove('hidden');
        welcomePlaceholder.classList.add('hidden');
        quickClearBtn.classList.remove('hidden');

        // 7. Check if show more button should display
        if (state.hasMore) {
          showMoreCounter.textContent = `Showing ${videos.length} of ${stats.videoCount || 'all'} videos`;
          showMoreContainer.classList.remove('hidden');
          showMoreContainer.classList.add('flex');
        }

        refreshIcons();
      } catch (err) {
        showError(err.message || 'Failed to load TikTok profile.');
        profileContainer.classList.add('hidden');
        videosSection.classList.add('hidden');
        welcomePlaceholder.classList.remove('hidden');
      } finally {
        setLoading(false);
      }
    }

    modalCloseBtn.addEventListener('click', closeVideoModal);
    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) closeVideoModal();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !videoModal.classList.contains('hidden')) closeVideoModal();
    });

    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (usernameInput.value) fetchUserPosts(usernameInput.value);
    });

    document.querySelectorAll('.quick-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        const user = chip.getAttribute('data-user');
        usernameInput.value = user;
        fetchUserPosts(user);
      });
    });

    quickClearBtn.addEventListener('click', () => {
      usernameInput.value = '';
      profileContainer.classList.add('hidden');
      videosSection.classList.add('hidden');
      welcomePlaceholder.classList.remove('hidden');
      quickClearBtn.classList.add('hidden');
      state.currentUser = null;
      state.currentVideos = [];
      state.nextCursor = null;
      state.hasMore = false;
    });

    dismissError.addEventListener('click', hideError);
  </script>
</body>
</html>

```

# README.md

```md
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/61c8909e-de2e-43a3-b4f6-c0eceb3a08b6

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`

```

# tsconfig.json

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}

```

