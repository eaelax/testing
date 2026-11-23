'use client';

import { useState, useEffect, useMemo } from 'react';
import Link from 'next/link';
import { AnimatePresence } from 'motion/react';
import {
  LayoutDashboard,
  Clock,
  LayoutGrid,
  SlidersHorizontal,
  Compass,
  Plus,
  Trash2,
  Check,
  RotateCcw,
  Save,
  Eye,
  Lock,
  Unlock,
  LogOut,
  ShieldAlert,
  Search,
  PanelLeftClose,
  PanelLeftOpen,
  ExternalLink,
  Pencil,
  AlertTriangle,
  X,
  Music,
  CheckCircle2,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import {
  useSiteSettings,
  SiteSettings,
  AdPlacement,
  DEFAULT_SETTINGS,
} from '@/lib/settings-store';
import DownloadCounterModal from '@/components/DownloadCounterModal';
import { MotionModalBackdrop, MotionModalPanel } from '@/components/MotionPrimitives';
import { TRENDING_SONGS } from '@/lib/songs-data';
import { TRENDING_KEYWORDS } from '@/lib/keywords-data';
import { validatePseoCatalog } from '@/lib/pseo-validator';
import { useI18n } from '@/lib/i18n/context';

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
  banner: `<div style="background:#18181B;color:#FFFFFF;border-radius:8px;padding:12px;text-align:center;border:1px solid #27272A;">
  <span style="font-size:10px;background:#E11D48;color:#FFFFFF;padding:2px 6px;border-radius:4px;font-weight:600;">SPONSORED</span>
  <h4 style="margin:6px 0 2px;font-size:12px;font-weight:700;">Download TikTok Videos in Full HD Quality</h4>
  <p style="margin:0;font-size:11px;color:#D4D4D8;">Fast, unlimited, and watermark free.</p>
</div>`,
};

type AdminSection = 'overview' | 'counter' | 'ads' | 'pseo' | 'general';

const NAV_GROUPS: {
  group: string;
  items: { id: AdminSection; label: string; icon: typeof LayoutDashboard }[];
}[] = [
  {
    group: 'Workspace',
    items: [
      { id: 'overview', label: 'Overview', icon: LayoutDashboard },
      { id: 'counter', label: 'Download Timer', icon: Clock },
    ],
  },
  {
    group: 'Discovery & SEO',
    items: [
      { id: 'pseo', label: 'pSEO & Catalog', icon: Compass },
    ],
  },
  {
    group: 'Configuration',
    items: [
      { id: 'ads', label: 'Ad Placements', icon: LayoutGrid },
      { id: 'general', label: 'Brand & Scripts', icon: SlidersHorizontal },
    ],
  },
];

export default function AdminTikTokPage() {
  const { t } = useI18n();
  const [settings, saveSettings] = useSiteSettings();
  const [draftSettings, setDraftSettings] = useState<SiteSettings | null>(null);
  const localSettings = draftSettings ?? settings;
  const hasUnsavedChanges = draftSettings !== null;

  const [activeSection, setActiveSection] = useState<AdminSection>('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [savedToast, setSavedToast] = useState<string | null>(null);
  const [testModalOpen, setTestModalOpen] = useState(false);

  const [adSearchQuery, setAdSearchQuery] = useState('');
  const [adStatusFilter, setAdStatusFilter] = useState<'all' | 'enabled' | 'disabled'>('all');
  const [adPlacementFilter, setAdPlacementFilter] = useState<string>('all');
  const [editingAdId, setEditingAdId] = useState<string | null>(null);

  const [pseoTab, setPseoTab] = useState<'keywords' | 'songs'>('keywords');
  const [pseoSearch, setPseoSearch] = useState('');

  const [confirmDialog, setConfirmDialog] = useState<{
    type: 'reset' | 'delete_ad';
    adId?: string;
    adName?: string;
  } | null>(null);

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

  const updateLocal = (updater: (prev: SiteSettings) => SiteSettings) => {
    setDraftSettings((prev) => updater(prev ?? settings));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === ADMIN_PASSWORD_DEFAULT) {
      sessionStorage.setItem(ADMIN_STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      setAuthError(null);
      setPasswordInput('');
    } else {
      setAuthError('Wrong admin password. Please check and try again.');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem(ADMIN_STORAGE_KEY);
    setIsAuthenticated(false);
  };

  const showToast = (message: string) => {
    setSavedToast(message);
    setTimeout(() => setSavedToast(null), 2600);
  };

  const handleSave = () => {
    saveSettings(localSettings);
    setDraftSettings(null);
    showToast('Settings saved and published to the live website.');
  };

  const handleConfirmReset = () => {
    setDraftSettings(null);
    saveSettings(DEFAULT_SETTINGS);
    setEditingAdId(null);
    setConfirmDialog(null);
    showToast('All settings have been reset to defaults.');
  };

  const handleAddAd = () => {
    const newId = `ad-${Date.now()}`;
    const newAd: AdPlacement = {
      id: newId,
      name: `Ad Slot ${localSettings.ads.length + 1}`,
      placement: 'modal',
      dimension: '300x250',
      code: SAMPLE_TEMPLATES.banner,
      enabled: true,
      notes: 'New ad placement',
    };
    updateLocal((prev) => ({
      ...prev,
      ads: [...prev.ads, newAd],
    }));
    setActiveSection('ads');
    setEditingAdId(newId);
  };

  const handleConfirmDeleteAd = (id: string) => {
    updateLocal((prev) => ({
      ...prev,
      ads: prev.ads.filter((a) => a.id !== id),
    }));
    if (editingAdId === id) {
      setEditingAdId(null);
    }
    setConfirmDialog(null);
  };

  const handleUpdateAd = (id: string, updates: Partial<AdPlacement>) => {
    updateLocal((prev) => ({
      ...prev,
      ads: prev.ads.map((a) => (a.id === id ? { ...a, ...updates } : a)),
    }));
  };

  const filteredAds = useMemo(() => {
    return localSettings.ads.filter((ad) => {
      const matchesSearch =
        !adSearchQuery.trim() ||
        ad.name.toLowerCase().includes(adSearchQuery.toLowerCase()) ||
        ad.placement.toLowerCase().includes(adSearchQuery.toLowerCase()) ||
        (ad.notes || '').toLowerCase().includes(adSearchQuery.toLowerCase());
      const matchesStatus =
        adStatusFilter === 'all' ||
        (adStatusFilter === 'enabled' && ad.enabled) ||
        (adStatusFilter === 'disabled' && !ad.enabled);
      const matchesPlacement =
        adPlacementFilter === 'all' || ad.placement === adPlacementFilter;
      return matchesSearch && matchesStatus && matchesPlacement;
    });
  }, [localSettings.ads, adSearchQuery, adStatusFilter, adPlacementFilter]);

  const enabledAdsCount = localSettings.ads.filter((a) => a.enabled).length;
  const activeEditingAd = localSettings.ads.find((a) => a.id === editingAdId) || null;

  const pseoReport = useMemo(() => validatePseoCatalog(), []);

  const filteredPseoKeywords = useMemo(() => {
    const q = pseoSearch.trim().toLowerCase();
    if (!q) return TRENDING_KEYWORDS;
    return TRENDING_KEYWORDS.filter(
      (k) =>
        k.keyword.toLowerCase().includes(q) ||
        k.slug.toLowerCase().includes(q) ||
        k.nicheTopic.toLowerCase().includes(q)
    );
  }, [pseoSearch]);

  const filteredPseoSongs = useMemo(() => {
    const q = pseoSearch.trim().toLowerCase();
    if (!q) return TRENDING_SONGS;
    return TRENDING_SONGS.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.artist.toLowerCase().includes(q) ||
        s.slug.toLowerCase().includes(q) ||
        s.genre.toLowerCase().includes(q)
    );
  }, [pseoSearch]);

  const sectionMeta: Record<AdminSection, { title: string; subtitle: string }> = {
    overview: {
      title: 'Dashboard Overview',
      subtitle: 'Monitor your live viewer configuration, countdown timer, and active ad slots.',
    },
    counter: {
      title: 'Download Timer & Modal',
      subtitle: 'Configure the countdown duration and user-facing messages before file saving.',
    },
    pseo: {
      title: 'Programmatic SEO & Content Catalog',
      subtitle: 'Inspect published keywords, trending songs, slug integrity, and sitemap readiness.',
    },
    ads: {
      title: 'Ad Placements & Codes',
      subtitle: 'Manage advertising slots, dimensions, active states, and HTML/AdSense scripts.',
    },
    general: {
      title: 'Brand & Head Scripts',
      subtitle: 'Update brand metadata and inject analytics or verification scripts into the page head.',
    },
  };

  if (checkingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--surface-canvas)]">
        <div
          className="w-7 h-7 rounded-full border-2 border-[var(--accent-primary)] border-t-transparent animate-spin"
          aria-label="Checking session"
        />
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
        <title>Admin Sign In - Tik Profiles Viewer</title>
        <Navbar />

        <main className="flex-1 max-w-sm w-full mx-auto px-4 py-14 flex flex-col items-center justify-center">
          <div className="w-full bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] p-6 sm:p-7">
            <div className="w-10 h-10 rounded-lg bg-[var(--accent-soft)] border border-[var(--accent-primary)]/20 text-[var(--accent-primary-text)] flex items-center justify-center mb-4 mx-auto">
              <Lock className="w-4 h-4" />
            </div>

            <h1 className="text-xl font-bold text-center text-[var(--ink-primary)] tracking-tight">
              Admin Sign In
            </h1>

            <p className="text-xs text-center text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
              Enter your administrator password to manage site settings, download timer, and ad slots.
            </p>

            <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-3.5">
              <div>
                <label
                  htmlFor="admin-password-input"
                  className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                >
                  Admin Password
                </label>
                <input
                  id="admin-password-input"
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="Enter admin password..."
                  required
                  autoFocus
                  className="w-full h-10 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15 transition-all"
                />
              </div>

              {authError && (
                <div
                  role="alert"
                  className="p-2.5 rounded-lg bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)] text-[var(--ink-primary)] text-xs font-medium flex items-center gap-2"
                >
                  <ShieldAlert className="w-4 h-4 text-[var(--status-danger)] shrink-0" />
                  <span>{authError}</span>
                </div>
              )}

              <button
                type="submit"
                className="w-full h-10 px-4 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-semibold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
              >
                <Unlock className="w-3.5 h-3.5" />
                <span>Unlock Admin Dashboard</span>
              </button>

              <div className="text-center pt-1">
                <span className="text-[11px] text-[var(--ink-muted)]">
                  Default password:{' '}
                  <code className="bg-[var(--surface-sunken)] border border-[var(--border-subtle)] px-1.5 py-0.5 rounded font-mono text-[var(--ink-primary)] font-semibold">
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
    <div className="min-h-screen flex bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>Admin Dashboard - Tik Profiles Viewer</title>

      {/* SaaS Desktop Left Sidebar */}
      <aside
        className={`hidden md:flex flex-col shrink-0 bg-[var(--surface-elevated)] border-e border-[var(--border-subtle)] transition-all duration-200 ${
          sidebarCollapsed ? 'w-[72px]' : 'w-60'
        }`}
      >
        {/* Sidebar Brand Header */}
        <div className="h-16 px-4 border-b border-[var(--border-subtle)] flex items-center justify-between gap-2">
          {!sidebarCollapsed && (
            <Link href="/" className="flex items-center gap-2.5 min-w-0">
              <div className="w-7 h-7 rounded-lg overflow-hidden shrink-0 bg-[var(--surface-sunken)] border border-[var(--border-subtle)] flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
                  alt="Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <div className="text-xs font-bold text-[var(--ink-primary)] truncate">
                  Tik Profiles
                </div>
                <div className="text-[10px] text-[var(--ink-muted)] truncate">
                  Admin Console
                </div>
              </div>
            </Link>
          )}

          <button
            type="button"
            onClick={() => setSidebarCollapsed((c) => !c)}
            aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            className="w-8 h-8 rounded-lg hover:bg-[var(--surface-sunken)] text-[var(--ink-muted)] hover:text-[var(--ink-primary)] flex items-center justify-center transition-colors cursor-pointer mx-auto md:mx-0"
          >
            {sidebarCollapsed ? (
              <PanelLeftOpen className="w-4 h-4" />
            ) : (
              <PanelLeftClose className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Sidebar Navigation Groups */}
        <nav aria-label="Admin Navigation" className="flex-1 p-3 space-y-5 overflow-y-auto">
          {NAV_GROUPS.map((group) => (
            <div key={group.group}>
              {!sidebarCollapsed && (
                <div className="px-2.5 mb-1.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--ink-muted)]">
                  {group.group}
                </div>
              )}
              <div className="space-y-1">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setActiveSection(item.id)}
                      title={sidebarCollapsed ? item.label : undefined}
                      className={`w-full h-9 px-2.5 rounded-lg text-xs font-medium flex items-center gap-2.5 transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)] font-semibold'
                          : 'text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--ink-primary)]'
                      } ${sidebarCollapsed ? 'justify-center' : 'justify-between'}`}
                    >
                      <span className="flex items-center gap-2.5 min-w-0">
                        <Icon className="w-4 h-4 shrink-0" />
                        {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
                      </span>
                      {!sidebarCollapsed && item.id === 'ads' && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-secondary)] tabular-nums">
                          {localSettings.ads.length}
                        </span>
                      )}
                      {!sidebarCollapsed && item.id === 'pseo' && (
                        <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] tabular-nums font-bold">
                          {TRENDING_KEYWORDS.length + TRENDING_SONGS.length}
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-[var(--border-subtle)] space-y-1">
          <Link
            href="/"
            className={`w-full h-9 px-2.5 rounded-lg text-xs font-medium text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--ink-primary)] flex items-center gap-2.5 transition-colors ${
              sidebarCollapsed ? 'justify-center' : ''
            }`}
            title={sidebarCollapsed ? 'View Live Site' : undefined}
          >
            <ExternalLink className="w-4 h-4 shrink-0" />
            {!sidebarCollapsed && <span>View Live Site</span>}
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className={`w-full h-9 px-2.5 rounded-lg text-xs font-medium text-[var(--accent-primary-text)] hover:bg-[var(--accent-soft)] flex items-center gap-2.5 transition-colors cursor-pointer ${
              sidebarCollapsed ? 'justify-center' : ''
            }`}
            title={sidebarCollapsed ? 'Log out' : undefined}
          >
            <LogOut className="w-4 h-4 shrink-0" />
            {!sidebarCollapsed && <span>Log out</span>}
          </button>
        </div>
      </aside>

      {/* Main Dashboard Shell */}
      <div className="flex-1 min-w-0 flex flex-col">
        {/* Top Dashboard Bar */}
        <header className="sticky top-0 z-30 h-16 bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] px-4 sm:px-6 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <div className="md:hidden w-8 h-8 rounded-lg bg-[var(--surface-sunken)] border border-[var(--border-subtle)] flex items-center justify-center shrink-0">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
                alt="Logo"
                className="w-6 h-6 object-contain"
              />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] truncate">
                  {sectionMeta[activeSection].title}
                </h1>
                {hasUnsavedChanges && (
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-semibold">
                    Unsaved changes
                  </span>
                )}
              </div>
              <p className="hidden sm:block text-[11px] text-[var(--ink-muted)] truncate">
                {sectionMeta[activeSection].subtitle}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setTestModalOpen(true)}
              className="hidden sm:inline-flex h-9 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] text-xs font-medium items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview Modal</span>
            </button>

            <button
              type="button"
              onClick={() => setConfirmDialog({ type: 'reset' })}
              className="h-9 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] text-xs font-medium inline-flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset</span>
            </button>

            <button
              type="button"
              onClick={handleSave}
              className="h-9 px-3.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition-colors"
            >
              <Save className="w-3.5 h-3.5" />
              <span>Save Changes</span>
            </button>

            <button
              type="button"
              onClick={handleLogout}
              className="md:hidden h-9 w-9 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] flex items-center justify-center cursor-pointer"
              aria-label="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </header>

        {/* Mobile Section Switcher */}
        <div className="md:hidden bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] px-4 py-2 flex items-center gap-1.5 overflow-x-auto">
          {NAV_GROUPS.flatMap((g) => g.items).map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSection(item.id)}
                className={`h-8 px-3 rounded-lg text-xs font-medium whitespace-nowrap shrink-0 cursor-pointer transition-colors ${
                  isActive
                    ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)] font-semibold'
                    : 'text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Workspace Content */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8 max-w-6xl w-full mx-auto space-y-6">
          {savedToast && (
            <div
              role="status"
              className="p-3.5 rounded-xl bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]/30 text-[var(--ink-primary)] text-xs font-semibold flex items-center gap-2"
            >
              <Check className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0" />
              <span>{savedToast}</span>
            </div>
          )}

          {/* OVERVIEW SECTION */}
          {activeSection === 'overview' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 tabular-nums">
                <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between text-xs font-medium text-[var(--ink-muted)] mb-2">
                    <span>pSEO Pages Live</span>
                    <Compass className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--ink-primary)]">
                    {TRENDING_KEYWORDS.length + TRENDING_SONGS.length}
                  </div>
                  <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                    {TRENDING_KEYWORDS.length} keywords + {TRENDING_SONGS.length} songs
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between text-xs font-medium text-[var(--ink-muted)] mb-2">
                    <span>Download Countdown</span>
                    <Clock className="w-4 h-4 text-[var(--accent-primary)]" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--ink-primary)]">
                    {localSettings.downloadCounterSeconds} sec
                  </div>
                  <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                    Delay before automatic download
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between text-xs font-medium text-[var(--ink-muted)] mb-2">
                    <span>Active Ad Slots</span>
                    <LayoutGrid className="w-4 h-4 text-[var(--accent-cyan-text)]" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--ink-primary)]">
                    {enabledAdsCount}{' '}
                    <span className="text-sm font-medium text-[var(--ink-muted)]">
                      / {localSettings.ads.length}
                    </span>
                  </div>
                  <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                    Configured monetization placements
                  </p>
                </div>

                <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
                  <div className="flex items-center justify-between text-xs font-medium text-[var(--ink-muted)] mb-2">
                    <span>Catalog Health</span>
                    <CheckCircle2 className="w-4 h-4 text-[var(--status-success)]" />
                  </div>
                  <div className="text-2xl font-bold text-[var(--status-success)]">
                    {pseoReport.valid ? 'Verified' : 'Issues Found'}
                  </div>
                  <p className="text-[11px] text-[var(--ink-muted)] mt-1">
                    Zero broken slugs or duplicates
                  </p>
                </div>
              </div>

              {/* Quick links banner */}
              <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-sm font-bold text-[var(--ink-primary)]">
                    pSEO &amp; Trending Content Engine
                  </h3>
                  <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                    Search-intent programmatic hubs for trending TikTok keywords and songs are live and mapped into sitemap.xml.
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    href="/trending-songs"
                    target="_blank"
                    className="h-8 px-3 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Songs Hub</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/keywords"
                    target="_blank"
                    className="h-8 px-3 rounded-lg border border-[var(--border-subtle)] hover:bg-[var(--surface-sunken)] text-xs font-semibold text-[var(--ink-primary)] inline-flex items-center gap-1 transition-colors"
                  >
                    <span>View Keywords Hub</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* pSEO & CONTENT CATALOG SECTION */}
          {activeSection === 'pseo' && (
            <div className="space-y-5">
              <div className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)] flex items-center justify-center shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold text-[var(--ink-primary)]">
                      Programmatic Catalog Validator
                    </h2>
                    <p className="text-xs text-[var(--ink-secondary)] mt-0.5">
                      Status:{' '}
                      <strong className={pseoReport.valid ? 'text-[var(--status-success)]' : 'text-[var(--status-danger)]'}>
                        {pseoReport.valid ? 'All slugs and titles valid' : `${pseoReport.issues.length} issues detected`}
                      </strong>{' '}
                      • {pseoReport.totalKeywords} keywords + {pseoReport.totalSongs} songs indexed.
                    </p>
                  </div>
                </div>

                <div className="flex rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] p-0.5 text-xs font-bold shrink-0">
                  <button
                    type="button"
                    onClick={() => setPseoTab('keywords')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      pseoTab === 'keywords'
                        ? 'bg-[var(--accent-dark)] text-[var(--accent-contrast)]'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    Keywords ({TRENDING_KEYWORDS.length})
                  </button>
                  <button
                    type="button"
                    onClick={() => setPseoTab('songs')}
                    className={`px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                      pseoTab === 'songs'
                        ? 'bg-[var(--accent-dark)] text-[var(--accent-contrast)]'
                        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    Songs ({TRENDING_SONGS.length})
                  </button>
                </div>
              </div>

              {/* Filter */}
              <div className="relative max-w-sm">
                <Search className="w-3.5 h-3.5 text-[var(--ink-muted)] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={pseoSearch}
                  onChange={(e) => setPseoSearch(e.target.value)}
                  placeholder="Filter records..."
                  aria-label="Filter catalog"
                  className="w-full h-9 ps-8 pe-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                />
              </div>

              {/* Records Table */}
              <div className="rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] overflow-hidden">
                <div className="overflow-x-auto">
                  {pseoTab === 'keywords' ? (
                    <table className="w-full text-start border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-muted)]">
                          <th className="py-3 px-4 font-semibold text-start">Target Keyword</th>
                          <th className="py-3 px-4 font-semibold text-start">Category</th>
                          <th className="py-3 px-4 font-semibold text-start">Search Intent</th>
                          <th className="py-3 px-4 font-semibold text-start">Trend</th>
                          <th className="py-3 px-4 font-semibold text-end">Public URL</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-subtle)]">
                        {filteredPseoKeywords.map((k) => (
                          <tr key={k.slug} className="hover:bg-[var(--surface-canvas)]/60 transition-colors">
                            <td className="py-3 px-4 font-semibold text-[var(--ink-primary)]">
                              <div>{k.keyword}</div>
                              <div className="text-[11px] font-mono text-[var(--ink-muted)]">
                                /keywords/{k.slug}
                              </div>
                            </td>
                            <td className="py-3 px-4 font-medium text-[var(--ink-secondary)] capitalize">
                              {k.category}
                            </td>
                            <td className="py-3 px-4 font-mono text-[11px] text-[var(--ink-secondary)]">
                              {k.searchIntent}
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] border border-[var(--accent-cyan)]/30">
                                {k.trendDirection}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-end">
                              <Link
                                href={`/keywords/${k.slug}`}
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-primary-text)] hover:underline"
                              >
                                <span>Inspect</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <table className="w-full text-start border-collapse text-xs">
                      <thead>
                        <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-muted)]">
                          <th className="py-3 px-4 font-semibold text-start">Song Title &amp; Artist</th>
                          <th className="py-3 px-4 font-semibold text-start">Genre</th>
                          <th className="py-3 px-4 font-semibold text-start">BPM</th>
                          <th className="py-3 px-4 font-semibold text-start">Momentum</th>
                          <th className="py-3 px-4 font-semibold text-end">Public URL</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[var(--border-subtle)]">
                        {filteredPseoSongs.map((s) => (
                          <tr key={s.slug} className="hover:bg-[var(--surface-canvas)]/60 transition-colors">
                            <td className="py-3 px-4 font-semibold text-[var(--ink-primary)]">
                              <div className="flex items-center gap-2">
                                <Music className="w-3.5 h-3.5 text-[var(--accent-primary-text)] shrink-0" />
                                <span>{s.title}</span>
                              </div>
                              <div className="text-[11px] text-[var(--ink-muted)] ps-5.5">
                                {s.artist} • <span className="font-mono">/songs/{s.slug}</span>
                              </div>
                            </td>
                            <td className="py-3 px-4 font-medium text-[var(--ink-secondary)] capitalize">
                              {s.genre}
                            </td>
                            <td className="py-3 px-4 font-mono text-[11px] text-[var(--ink-secondary)]">
                              {s.bpm} BPM
                            </td>
                            <td className="py-3 px-4">
                              <span className="inline-flex px-2 py-0.5 rounded-full text-[10px] font-bold bg-[var(--pastel-blue)] text-[var(--accent-cyan-text)] border border-[var(--pastel-blue-border)]">
                                {s.momentum}
                              </span>
                            </td>
                            <td className="py-3 px-4 text-end">
                              <Link
                                href={`/songs/${s.slug}`}
                                target="_blank"
                                className="inline-flex items-center gap-1 text-xs font-semibold text-[var(--accent-primary-text)] hover:underline"
                              >
                                <span>Inspect</span>
                                <ExternalLink className="w-3 h-3" />
                              </Link>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* COUNTER & MODAL SECTION */}
          {activeSection === 'counter' && (
            <div className="space-y-5 max-w-3xl">
              <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-5">
                <div>
                  <h2 className="text-sm font-bold text-[var(--ink-primary)]">
                    Download Countdown Duration
                  </h2>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                    Choose how many seconds the countdown timer waits before starting the file download.
                  </p>
                </div>

                <div className="flex items-center gap-4 flex-wrap">
                  <input
                    type="range"
                    min="1"
                    max="30"
                    step="1"
                    aria-label="Download counter duration in seconds"
                    value={localSettings.downloadCounterSeconds}
                    onChange={(e) =>
                      updateLocal((prev) => ({
                        ...prev,
                        downloadCounterSeconds: parseInt(e.target.value, 10) || 5,
                      }))
                    }
                    className="w-64 h-2 bg-[var(--surface-sunken)] rounded-lg appearance-none cursor-pointer accent-[var(--accent-primary)]"
                  />
                  <div className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] font-mono font-bold text-[var(--ink-primary)] text-xs tabular-nums">
                    <span>{localSettings.downloadCounterSeconds}</span>
                    <span className="text-[11px] font-medium text-[var(--ink-muted)]">sec</span>
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-wrap">
                  {[2, 3, 5, 7, 10, 15].map((sec) => (
                    <button
                      key={sec}
                      type="button"
                      onClick={() =>
                        updateLocal((prev) => ({
                          ...prev,
                          downloadCounterSeconds: sec,
                        }))
                      }
                      className={`h-8 px-3 rounded-lg text-xs font-semibold transition-colors cursor-pointer border tabular-nums ${
                        localSettings.downloadCounterSeconds === sec
                          ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                          : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--ink-secondary)]'
                      }`}
                    >
                      {sec} sec
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-4">
                <h2 className="text-sm font-bold text-[var(--ink-primary)]">
                  Modal Status Messages
                </h2>

                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="preparing-text-input"
                      className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                    >
                      Waiting / Preparing Message
                    </label>
                    <input
                      id="preparing-text-input"
                      type="text"
                      value={localSettings.downloadPreparingText}
                      onChange={(e) =>
                        updateLocal((prev) => ({
                          ...prev,
                          downloadPreparingText: e.target.value,
                        }))
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ready-text-input"
                      className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                    >
                      Ready Message
                    </label>
                    <input
                      id="ready-text-input"
                      type="text"
                      value={localSettings.downloadSuccessText}
                      onChange={(e) =>
                        updateLocal((prev) => ({
                          ...prev,
                          downloadSuccessText: e.target.value,
                        }))
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => setTestModalOpen(true)}
                    className="h-9 px-4 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--border-strong)] text-[var(--ink-primary)] text-xs font-semibold inline-flex items-center gap-1.5 cursor-pointer transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
                    <span>Preview Download Modal</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* AD PLACEMENTS SECTION */}
          {activeSection === 'ads' && (
            <div className="space-y-5">
              <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col lg:flex-row lg:items-center justify-between gap-3">
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 flex-1">
                  <div className="relative flex-1 max-w-xs">
                    <Search className="w-3.5 h-3.5 text-[var(--ink-muted)] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      value={adSearchQuery}
                      onChange={(e) => setAdSearchQuery(e.target.value)}
                      placeholder="Filter ad slots..."
                      aria-label="Filter ad slots"
                      className="w-full h-9 ps-8 pe-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  <select
                    aria-label="Filter by placement"
                    value={adPlacementFilter}
                    onChange={(e) => setAdPlacementFilter(e.target.value)}
                    className="h-9 px-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-xs font-medium text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    <option value="all">All Placements</option>
                    {PLACEMENT_OPTIONS.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>

                  <select
                    aria-label="Filter by status"
                    value={adStatusFilter}
                    onChange={(e) =>
                      setAdStatusFilter(e.target.value as 'all' | 'enabled' | 'disabled')
                    }
                    className="h-9 px-2.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-xs font-medium text-[var(--ink-primary)] focus:outline-none focus:border-[var(--accent-primary)]"
                  >
                    <option value="all">All Statuses</option>
                    <option value="enabled">Enabled Only</option>
                    <option value="disabled">Disabled Only</option>
                  </select>
                </div>

                <button
                  type="button"
                  onClick={handleAddAd}
                  className="h-9 px-4 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs font-semibold inline-flex items-center justify-center gap-1.5 cursor-pointer transition-colors shrink-0"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Add Ad Placement</span>
                </button>
              </div>

              {/* Table */}
              <div className="rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-start border-collapse text-xs">
                    <thead>
                      <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-muted)]">
                        <th className="py-3 px-4 font-semibold text-start">Status</th>
                        <th className="py-3 px-4 font-semibold text-start">Slot Name</th>
                        <th className="py-3 px-4 font-semibold text-start">Placement</th>
                        <th className="py-3 px-4 font-semibold text-start">Dimensions</th>
                        <th className="py-3 px-4 font-semibold text-end">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--border-subtle)]">
                      {filteredAds.map((ad) => {
                        const isEditing = editingAdId === ad.id;
                        return (
                          <tr
                            key={ad.id}
                            className={`transition-colors ${
                              isEditing
                                ? 'bg-[var(--accent-soft)]/50'
                                : 'hover:bg-[var(--surface-canvas)]/60'
                            }`}
                          >
                            <td className="py-3 px-4">
                              <label className="inline-flex items-center gap-2 cursor-pointer">
                                <input
                                  type="checkbox"
                                  checked={ad.enabled}
                                  onChange={(e) =>
                                    handleUpdateAd(ad.id, { enabled: e.target.checked })
                                  }
                                  className="w-4 h-4 rounded accent-[var(--accent-primary)] cursor-pointer"
                                />
                                <span
                                  className={`text-[11px] font-semibold ${
                                    ad.enabled
                                      ? 'text-[var(--accent-cyan-text)]'
                                      : 'text-[var(--ink-muted)]'
                                  }`}
                                >
                                  {ad.enabled ? 'On' : 'Off'}
                                </span>
                              </label>
                            </td>
                            <td className="py-3 px-4">
                              <div className="font-semibold text-[var(--ink-primary)]">{ad.name}</div>
                              {ad.notes && (
                                <div className="text-[11px] text-[var(--ink-muted)] truncate max-w-[220px]">
                                  {ad.notes}
                                </div>
                              )}
                            </td>
                            <td className="py-3 px-4 text-[var(--ink-secondary)]">
                              {PLACEMENT_OPTIONS.find((p) => p.value === ad.placement)?.label ||
                                ad.placement}
                            </td>
                            <td className="py-3 px-4 font-mono text-[11px] text-[var(--ink-secondary)]">
                              {ad.dimension}
                            </td>
                            <td className="py-3 px-4 text-end">
                              <div className="inline-flex items-center gap-2">
                                <button
                                  type="button"
                                  onClick={() =>
                                    setEditingAdId(isEditing ? null : ad.id)
                                  }
                                  className="h-8 px-2.5 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] text-[11px] font-semibold inline-flex items-center gap-1 cursor-pointer transition-colors"
                                >
                                  <Pencil className="w-3 h-3" />
                                  <span>{isEditing ? 'Close' : 'Edit'}</span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() =>
                                    setConfirmDialog({
                                      type: 'delete_ad',
                                      adId: ad.id,
                                      adName: ad.name,
                                    })
                                  }
                                  aria-label={`Delete ${ad.name}`}
                                  className="h-8 w-8 rounded-md border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--status-danger-bg)] hover:border-[var(--status-danger-border)] text-[var(--ink-muted)] hover:text-[var(--status-danger)] inline-flex items-center justify-center cursor-pointer transition-colors"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        );
                      })}
                      {filteredAds.length === 0 && (
                        <tr>
                          <td colSpan={5} className="py-10 px-4 text-center text-xs text-[var(--ink-muted)]">
                            No ad placements match your current filter.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Editor */}
              {activeEditingAd && (
                <div className="p-5 sm:p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-card)] space-y-4">
                  <div className="flex items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
                    <div>
                      <h3 className="text-sm font-bold text-[var(--ink-primary)]">
                        Editing: {activeEditingAd.name}
                      </h3>
                      <p className="text-[11px] text-[var(--ink-muted)]">
                        Paste Google AdSense, direct banner HTML, or script tags below. Empty slots stay hidden.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setEditingAdId(null)}
                      className="w-8 h-8 rounded-lg hover:bg-[var(--surface-sunken)] text-[var(--ink-muted)] flex items-center justify-center cursor-pointer"
                      aria-label="Close editor"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                    <div>
                      <label
                        htmlFor={`placement-${activeEditingAd.id}`}
                        className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                      >
                        Placement Location
                      </label>
                      <select
                        id={`placement-${activeEditingAd.id}`}
                        value={activeEditingAd.placement}
                        onChange={(e) =>
                          handleUpdateAd(activeEditingAd.id, {
                            placement: e.target.value as AdPlacement['placement'],
                          })
                        }
                        className="w-full h-9 px-2.5 rounded-lg border border-[var(--border-subtle)] text-xs font-medium text-[var(--ink-primary)] bg-[var(--surface-canvas)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                      >
                        {PLACEMENT_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={`dimension-${activeEditingAd.id}`}
                        className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                      >
                        Dimensions
                      </label>
                      <select
                        id={`dimension-${activeEditingAd.id}`}
                        value={activeEditingAd.dimension}
                        onChange={(e) =>
                          handleUpdateAd(activeEditingAd.id, {
                            dimension: e.target.value as AdPlacement['dimension'],
                          })
                        }
                        className="w-full h-9 px-2.5 rounded-lg border border-[var(--border-subtle)] text-xs font-medium text-[var(--ink-primary)] bg-[var(--surface-canvas)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                      >
                        {DIMENSION_OPTIONS.map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor={`name-${activeEditingAd.id}`}
                        className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                      >
                        Slot Name / Label
                      </label>
                      <input
                        id={`name-${activeEditingAd.id}`}
                        type="text"
                        value={activeEditingAd.name}
                        onChange={(e) =>
                          handleUpdateAd(activeEditingAd.id, { name: e.target.value })
                        }
                        className="w-full h-9 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-xs font-medium text-[var(--ink-primary)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                      <label
                        htmlFor={`code-${activeEditingAd.id}`}
                        className="block text-xs font-semibold text-[var(--ink-primary)]"
                      >
                        HTML / JavaScript Ad Code
                      </label>
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateAd(activeEditingAd.id, {
                              code: SAMPLE_TEMPLATES.adsense,
                            })
                          }
                          className="text-[11px] font-semibold text-[var(--accent-primary-text)] hover:underline cursor-pointer"
                        >
                          Insert AdSense template
                        </button>
                        <span className="text-[var(--border-strong)]">•</span>
                        <button
                          type="button"
                          onClick={() =>
                            handleUpdateAd(activeEditingAd.id, {
                              code: SAMPLE_TEMPLATES.banner,
                            })
                          }
                          className="text-[11px] font-semibold text-[var(--accent-cyan-text)] hover:underline cursor-pointer"
                        >
                          Insert HTML banner template
                        </button>
                      </div>
                    </div>
                    <textarea
                      id={`code-${activeEditingAd.id}`}
                      rows={5}
                      value={activeEditingAd.code}
                      onChange={(e) =>
                        handleUpdateAd(activeEditingAd.id, { code: e.target.value })
                      }
                      placeholder="Paste ad script, Google AdSense tag, or HTML banner here..."
                      className="w-full p-3 rounded-lg border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] bg-[var(--surface-canvas)]"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* BRAND & SCRIPTS SECTION */}
          {activeSection === 'general' && (
            <div className="space-y-5 max-w-3xl">
              <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-4">
                <h2 className="text-sm font-bold text-[var(--ink-primary)]">
                  Brand &amp; Domain Information
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="site-name-input"
                      className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                    >
                      Web Service Name
                    </label>
                    <input
                      id="site-name-input"
                      type="text"
                      value={localSettings.siteName}
                      onChange={(e) =>
                        updateLocal((prev) => ({
                          ...prev,
                          siteName: e.target.value,
                        }))
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs font-medium focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="domain-name-input"
                      className="block text-xs font-semibold text-[var(--ink-primary)] mb-1.5"
                    >
                      Domain Name
                    </label>
                    <input
                      id="domain-name-input"
                      type="text"
                      value={localSettings.domainName}
                      onChange={(e) =>
                        updateLocal((prev) => ({
                          ...prev,
                          domainName: e.target.value,
                        }))
                      }
                      className="w-full h-10 px-3 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] text-xs font-medium focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)]"
                    />
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] space-y-3">
                <div>
                  <h2 className="text-sm font-bold text-[var(--ink-primary)]">
                    Custom Head Scripts &amp; Analytics
                  </h2>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                    Add Google Tag Manager, Google Analytics, or site verification meta tags.
                  </p>
                </div>
                <textarea
                  rows={5}
                  aria-label="Custom head scripts and analytics"
                  value={localSettings.customHeadCode || ''}
                  onChange={(e) =>
                    updateLocal((prev) => ({
                      ...prev,
                      customHeadCode: e.target.value,
                    }))
                  }
                  placeholder="<!-- Paste Google Tag Manager or Google Analytics code here -->"
                  className="w-full p-3 rounded-lg border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] bg-[var(--surface-canvas)]"
                />
              </div>
            </div>
          )}
        </main>
      </div>

      {/* Confirmation Dialog */}
      <AnimatePresence>
        {confirmDialog && (
          <MotionModalBackdrop
            onClick={() => setConfirmDialog(null)}
            className="fixed inset-0 z-50 bg-zinc-950/55 backdrop-blur-xs flex items-center justify-center p-4"
          >
            <MotionModalPanel
              ariaLabel="Confirm action"
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-sm bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] p-5 sm:p-6 space-y-4"
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[var(--status-danger-bg)] border border-[var(--status-danger-border)] text-[var(--status-danger)] flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[var(--ink-primary)]">
                    {confirmDialog.type === 'reset'
                      ? 'Reset all settings to defaults?'
                      : `Delete "${confirmDialog.adName}"?`}
                  </h3>
                  <p className="text-xs text-[var(--ink-secondary)] mt-1 leading-relaxed">
                    {confirmDialog.type === 'reset'
                      ? 'This will restore the default countdown duration, messages, and ad slot configuration.'
                      : 'This ad slot and its embedded HTML/script code will be removed from your configuration.'}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setConfirmDialog(null)}
                  className="h-9 px-3.5 rounded-lg border border-[var(--border-subtle)] bg-[var(--surface-elevated)] hover:bg-[var(--surface-sunken)] text-xs font-medium text-[var(--ink-secondary)] cursor-pointer transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={() =>
                    confirmDialog.type === 'reset'
                      ? handleConfirmReset()
                      : confirmDialog.adId && handleConfirmDeleteAd(confirmDialog.adId)
                  }
                  className="h-9 px-3.5 rounded-lg bg-[var(--accent-primary)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs font-semibold cursor-pointer transition-colors"
                >
                  {confirmDialog.type === 'reset' ? 'Reset Defaults' : 'Delete Slot'}
                </button>
              </div>
            </MotionModalPanel>
          </MotionModalBackdrop>
        )}
      </AnimatePresence>

      <DownloadCounterModal
        isOpen={testModalOpen}
        onClose={() => setTestModalOpen(false)}
        downloadUrl=""
        fileName="sample_tiktok_video.mp4"
        mediaType="video"
        title="Preview TikTok Video"
      />
    </div>
  );
}