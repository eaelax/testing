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
