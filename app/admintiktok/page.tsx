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
  banner: `<div style="background:#010101;color:#ffffff;border-radius:10px;padding:12px;text-align:center;border:1px solid #69C9D0;">
  <span style="font-size:10px;background:#69C9D0;color:#010101;padding:2px 8px;border-radius:4px;font-weight:700;">SPONSORED</span>
  <h4 style="margin:6px 0 2px;font-size:13px;font-weight:700;">Download TikTok Videos in Full HD Quality</h4>
  <p style="margin:0;font-size:11px;color:#DFE5EA;">Fast, unlimited, no watermark.</p>
</div>`,
};

export default function AdminTikTokPage() {
  const [settings, saveSettings] = useSiteSettings();
  const [localSettings, setLocalSettings] = useState<SiteSettings>(settings);
  const [activeTab, setActiveTab] = useState<'counter' | 'ads' | 'general'>('counter');
  const [savedToast, setSavedToast] = useState(false);
  const [testModalOpen, setTestModalOpen] = useState(false);

  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passwordInput, setPasswordInput] = useState<string>('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [checkingAuth, setCheckingAuth] = useState<boolean>(true);

  useEffect(() => {
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

  const handleSave = () => {
    saveSettings(localSettings);
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2500);
  };

  const handleReset = () => {
    if (confirm('Are you sure you want to reset all settings to defaults?')) {
      setLocalSettings(DEFAULT_SETTINGS);
      saveSettings(DEFAULT_SETTINGS);
      setSavedToast(true);
      setTimeout(() => setSavedToast(false), 2000);
    }
  };

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

  const handleDeleteAd = (id: string) => {
    setLocalSettings((prev) => ({
      ...prev,
      ads: prev.ads.filter((a) => a.id !== id),
    }));
  };

  const handleUpdateAd = (id: string, updates: Partial<AdPlacement>) => {
    setLocalSettings((prev) => ({
      ...prev,
      ads: prev.ads.map((a) => (a.id === id ? { ...a, ...updates } : a)),
    }));
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-canvas)]">
        <div className="w-7 h-7 rounded-full border-2 border-[var(--accent-dark)] border-t-transparent animate-spin" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
        <Navbar />

        <main className="flex-1 max-w-sm w-full mx-auto px-4 py-12 flex flex-col items-center justify-center">
          <div className="w-full bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] p-5 sm:p-6">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center mb-3.5 mx-auto">
              <Lock className="w-5 h-5 text-[var(--accent-cyan)]" />
            </div>

            <h1 className="text-lg sm:text-xl font-black text-center text-[var(--ink-primary)] tracking-tight">
              Admin Access Protected
            </h1>

            <p className="text-xs text-center text-[var(--ink-secondary)] mt-1 leading-relaxed">
              Enter the administrator password to access Tik Profiles Viewer settings and ad controls.
            </p>

            <form onSubmit={handleLogin} className="mt-5 flex flex-col gap-3.5">
              <div>
                <label
                  htmlFor="admin-password"
                  className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1"
                >
                  Admin Password
                </label>
                <input
                  id="admin-password"
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter administrator password..."
                  required
                  autoFocus
                  className="w-full h-10 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs sm:text-sm focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 transition-all"
                />
              </div>

              {authError && (
                <div className="p-2.5 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-primary)]/45 text-[var(--accent-primary-text)] text-xs font-semibold flex items-center gap-2">
                  <ShieldAlert className="w-4 h-4 shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full h-10 px-4 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-primary)] active:scale-[0.98] text-[var(--accent-contrast)] font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <Unlock className="w-4 h-4" />
                <span>Unlock Admin Panel</span>
              </button>

              <div className="text-center pt-1">
                <span className="text-[11px] text-[var(--ink-muted)]">
                  Default password:{' '}
                  <code className="bg-[var(--surface-canvas)] border border-[var(--border-subtle)] px-1.5 py-0.5 rounded font-mono text-[var(--ink-primary)] font-bold">
                    {ADMIN_PASSWORD_DEFAULT}
                  </code>
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
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: 'Admin Control Panel' }]} />

        {/* Compact Top Header with Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mt-4 pb-5 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-lg bg-[var(--accent-dark)] text-[var(--accent-contrast)] flex items-center justify-center">
                <Settings className="w-4 h-4 text-[var(--accent-cyan)]" />
              </span>
              <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-none">
                Website Admin Panel
              </h1>
            </div>
            <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] mt-1.5">
              Configure ad codes, placements, and customize the download modal countdown.
            </p>
          </div>

          <div className="flex items-center gap-2 flex-wrap">
            <button
              type="button"
              onClick={handleReset}
              className="h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-interactive)] text-[var(--ink-primary)] font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Defaults</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="h-9 px-3.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.98] text-[var(--accent-contrast)] font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-all"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="h-9 px-3 rounded-lg border border-[var(--accent-primary)]/40 bg-[var(--accent-soft)] hover:bg-[var(--accent-primary)] hover:text-[var(--accent-contrast)] text-[var(--accent-primary-text)] font-bold text-xs flex items-center gap-1.5 cursor-pointer transition-colors"
              title="Log out of admin session"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Log out</span>
            </button>
          </div>
        </div>

        {/* Save Toast */}
        {savedToast && (
          <div className="my-4 p-3 rounded-xl bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] text-[var(--ink-primary)] text-xs font-bold flex items-center gap-2 animate-in fade-in duration-200">
            <Check className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0" />
            <span>Settings saved successfully. The live website is updated.</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="flex items-center gap-1 mt-5 border-b border-[var(--border-subtle)] overflow-x-auto pb-px">
          <button
            type="button"
            onClick={() => setActiveTab('counter')}
            className={`h-10 px-3.5 font-bold text-xs border-b-2 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'counter'
                ? 'border-[var(--accent-primary)] text-[var(--ink-primary)]'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
            }`}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Download Modal &amp; Counter</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('ads')}
            className={`h-10 px-3.5 font-bold text-xs border-b-2 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'ads'
                ? 'border-[var(--accent-primary)] text-[var(--ink-primary)]'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
            }`}
          >
            <Layout className="w-3.5 h-3.5" />
            <span>Ads Placements &amp; Codes</span>
            <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] text-[var(--accent-cyan-text)] font-mono tabular-nums">
              {localSettings.ads.length}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab('general')}
            className={`h-10 px-3.5 font-bold text-xs border-b-2 flex items-center gap-1.5 transition-all cursor-pointer whitespace-nowrap ${
              activeTab === 'general'
                ? 'border-[var(--accent-primary)] text-[var(--ink-primary)]'
                : 'border-transparent text-[var(--ink-muted)] hover:text-[var(--ink-primary)]'
            }`}
          >
            <Megaphone className="w-3.5 h-3.5" />
            <span>General &amp; Brand</span>
          </button>
        </div>

        {/* TAB 1: Counter & Modal Settings */}
        {activeTab === 'counter' && (
          <div className="mt-5 space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-4">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Download Counter Duration (Seconds)
                </h2>
                <p className="text-xs text-[var(--ink-secondary)] mt-0.5 leading-relaxed">
                  How many seconds the countdown circle waits before the file download starts in the browser.
                </p>
              </div>

              <div className="flex items-center gap-3 flex-wrap">
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  aria-label="Download counter duration in seconds"
                  value={localSettings.downloadCounterSeconds}
                  onChange={(e) =>
                    setLocalSettings((prev) => ({
                      ...prev,
                      downloadCounterSeconds: parseInt(e.target.value, 10) || 5,
                    }))
                  }
                  className="w-56 h-2 bg-[var(--surface-sunken)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-primary)]"
                />
                <div className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)] font-mono font-bold text-[var(--ink-primary)] text-xs tabular-nums">
                  <span>{localSettings.downloadCounterSeconds}</span>
                  <span className="text-[11px] text-[var(--accent-cyan-text)]">sec</span>
                </div>
              </div>

              <div className="flex items-center gap-1.5 pt-0.5 flex-wrap">
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
                    className={`h-8 px-2.5 rounded-lg text-xs font-bold transition-all cursor-pointer tabular-nums ${
                      localSettings.downloadCounterSeconds === sec
                        ? 'bg-[var(--accent-dark)] text-[var(--accent-contrast)]'
                        : 'bg-[var(--surface-canvas)] border border-[var(--border-strong)] hover:bg-[var(--accent-cyan-soft)] text-[var(--ink-primary)]'
                    }`}
                  >
                    {sec} sec
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-3.5">
              <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                Modal Custom Messages
              </h2>

              <div className="space-y-3">
                <div>
                  <label
                    htmlFor="preparing-text"
                    className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1"
                  >
                    Waiting / Preparing Message
                  </label>
                  <input
                    id="preparing-text"
                    type="text"
                    value={localSettings.downloadPreparingText}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        downloadPreparingText: e.target.value,
                      }))
                    }
                    className="w-full h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs font-medium focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                  />
                </div>

                <div>
                  <label
                    htmlFor="success-text"
                    className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1"
                  >
                    Ready Message
                  </label>
                  <input
                    id="success-text"
                    type="text"
                    value={localSettings.downloadSuccessText}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        downloadSuccessText: e.target.value,
                      }))
                    }
                    className="w-full h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs font-medium focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                  />
                </div>
              </div>

              <div className="pt-1">
                <button
                  type="button"
                  onClick={() => setTestModalOpen(true)}
                  className="h-9 px-3.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-strong)] hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)] active:scale-[0.98] text-[var(--ink-primary)] text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all"
                >
                  <Eye className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                  <span>Preview Download Modal with current settings</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Ads Placements & Codes */}
        {activeTab === 'ads' && (
          <div className="mt-5 space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Active Ad Slots &amp; Banners
                </h2>
                <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                  Insert Google AdSense, direct banner HTML, or ad network scripts. Placements with empty code are automatically hidden.
                </p>
              </div>

              <button
                type="button"
                onClick={handleAddAd}
                className="h-9 px-3.5 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-primary)] text-[var(--accent-contrast)] text-xs font-bold flex items-center gap-1.5 cursor-pointer transition-colors shrink-0 w-fit"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Ad Placement</span>
              </button>
            </div>

            <div className="space-y-3.5">
              {localSettings.ads.map((ad) => (
                <div
                  key={ad.id}
                  className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-3.5"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 pb-2.5 border-b border-[var(--border-subtle)]">
                    <div className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={ad.enabled}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, { enabled: e.target.checked })
                        }
                        id={`toggle-${ad.id}`}
                        className="w-4 h-4 rounded accent-[var(--accent-primary)] cursor-pointer"
                      />
                      <label
                        htmlFor={`toggle-${ad.id}`}
                        className="text-xs sm:text-sm font-bold text-[var(--ink-primary)] cursor-pointer"
                      >
                        {ad.name}
                      </label>
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${
                          ad.enabled
                            ? 'bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border-[var(--accent-cyan)]'
                            : 'bg-[var(--surface-sunken)] text-[var(--ink-muted)] border-[var(--border-strong)]'
                        }`}
                      >
                        {ad.enabled ? 'Enabled' : 'Disabled'}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleDeleteAd(ad.id)}
                      className="text-xs font-bold text-[var(--accent-primary-text)] hover:underline flex items-center gap-1 cursor-pointer"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                      <span>Delete</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1">
                        Placement Location
                      </label>
                      <select
                        value={ad.placement}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, {
                            placement: e.target.value as AdPlacement['placement'],
                          })
                        }
                        className="w-full h-9 px-2.5 rounded-lg border border-[var(--border-strong)] text-xs font-medium text-[var(--ink-primary)] bg-[var(--surface-canvas)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                      >
                        {PLACEMENT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1">
                        Dimensions
                      </label>
                      <select
                        value={ad.dimension}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, {
                            dimension: e.target.value as AdPlacement['dimension'],
                          })
                        }
                        className="w-full h-9 px-2.5 rounded-lg border border-[var(--border-strong)] text-xs font-medium text-[var(--ink-primary)] bg-[var(--surface-canvas)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                      >
                        {DIMENSION_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1">
                        Slot Name / Label
                      </label>
                      <input
                        type="text"
                        value={ad.name}
                        onChange={(e) =>
                          handleUpdateAd(ad.id, { name: e.target.value })
                        }
                        className="w-full h-9 px-2.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-xs font-medium text-[var(--ink-primary)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between gap-2 flex-wrap mb-1">
                      <label className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider">
                        HTML / JavaScript Ad Code
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateAd(ad.id, { code: SAMPLE_TEMPLATES.adsense })
                          }
                          className="text-[11px] font-semibold text-[var(--accent-cyan-text)] hover:underline cursor-pointer"
                        >
                          Insert AdSense template
                        </button>
                        <span className="text-[var(--ink-muted)]">•</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateAd(ad.id, { code: SAMPLE_TEMPLATES.banner })
                          }
                          className="text-[11px] font-semibold text-[var(--accent-cyan-text)] hover:underline cursor-pointer"
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
                      className="w-full px-3 py-2 rounded-lg border border-[var(--border-strong)] font-mono text-xs text-[var(--ink-primary)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] bg-[var(--surface-canvas)]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: General & Brand */}
        {activeTab === 'general' && (
          <div className="mt-5 space-y-4">
            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-3.5">
              <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                Brand &amp; Domain Information
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label
                    htmlFor="site-name"
                    className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1"
                  >
                    Web Service Name
                  </label>
                  <input
                    id="site-name"
                    type="text"
                    value={localSettings.siteName}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        siteName: e.target.value,
                      }))
                    }
                    className="w-full h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs font-medium focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="domain-name"
                    className="block text-[11px] font-bold text-[var(--ink-primary)] uppercase tracking-wider mb-1"
                  >
                    Domain Name
                  </label>
                  <input
                    id="domain-name"
                    type="text"
                    value={localSettings.domainName}
                    onChange={(e) =>
                      setLocalSettings((prev) => ({
                        ...prev,
                        domainName: e.target.value,
                      }))
                    }
                    className="w-full h-9 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs font-medium focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                  />
                </div>
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] space-y-2.5">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)]">
                  Custom Head Scripts &amp; Analytics
                </h2>
              </div>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
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
                className="w-full px-3 py-2 rounded-lg border border-[var(--border-strong)] font-mono text-xs text-[var(--ink-primary)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] bg-[var(--surface-canvas)]"
              />
            </div>
          </div>
        )}

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