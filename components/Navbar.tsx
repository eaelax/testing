'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDown,
  Menu,
  X,
  Check,
  Globe,
  Download,
  Music,
  Users,
  BarChart3,
  Clock,
  Image as ImageIcon,
  DollarSign,
  Percent,
  Hash,
  ShieldCheck,
} from 'lucide-react';

const LANGUAGES = [
  { code: 'en', name: 'English', native: 'English' },
  { code: 'ar', name: 'Arabic', native: 'العربية' },
  { code: 'fr', name: 'French', native: 'Français' },
  { code: 'es', name: 'Spanish', native: 'Español' },
  { code: 'de', name: 'German', native: 'Deutsch' },
  { code: 'ru', name: 'Russian', native: 'Русский' },
  { code: 'zh', name: 'Chinese', native: '中文' },
  { code: 'pt', name: 'Portuguese', native: 'Português' },
  { code: 'he', name: 'Hebrew', native: 'עברית' },
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
];

const TOOLS = [
  {
    href: '/tiktok-video-downloader',
    label: 'HD Video Downloader',
    desc: 'Save clean MP4 without logo',
    icon: Download,
  },
  {
    href: '/tiktok-mp3-downloader',
    label: 'Audio MP3 Downloader',
    desc: 'Extract original soundtracks',
    icon: Music,
  },
  {
    href: '/tiktok-profile-viewer',
    label: 'Profile Viewer',
    desc: 'Inspect public stats privately',
    icon: Users,
  },
  {
    href: '/tiktok-analytics',
    label: 'Viral Analytics',
    desc: 'Check views and engagement',
    icon: BarChart3,
  },
  {
    href: '/tiktok-story-downloader',
    label: 'Story Downloader',
    desc: 'Save 24h stories before expiry',
    icon: Clock,
  },
  {
    href: '/tiktok-photo-downloader',
    label: 'Photo & Slideshow',
    desc: 'Save carousel photos in HD',
    icon: ImageIcon,
  },
  {
    href: '/tiktok-money-calculator',
    label: 'Money Calculator',
    desc: 'Estimate creator sponsorship pay',
    icon: DollarSign,
  },
  {
    href: '/tiktok-engagement-calculator',
    label: 'Engagement Calculator',
    desc: 'Measure post interaction rate',
    icon: Percent,
  },
  {
    href: '/tiktok-caption-generator',
    label: 'Caption Generator',
    desc: 'Create hooks and hashtags',
    icon: Hash,
  },
  {
    href: '/tiktok-watermark-remover',
    label: 'Watermark Remover',
    desc: 'Clean clips for Reels & Shorts',
    icon: ShieldCheck,
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

  const handleGoHome = () => {
    setMobileMenuOpen(false);
    setToolsDropdownOpen(false);
    setLangDropdownOpen(false);
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('tpv:reset-home'));
    }
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (toolsRef.current && !toolsRef.current.contains(event.target as Node)) {
        setToolsDropdownOpen(false);
      }
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangDropdownOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setToolsDropdownOpen(false);
        setLangDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const isToolActive = TOOLS.some((t) => pathname === t.href);

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--surface-elevated)]/95 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-[0_1px_4px_rgba(17,24,39,0.04)]">
      <div className="max-w-[1160px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Brand Identity */}
        <Link
          href="/"
          onClick={handleGoHome}
          className="flex items-center gap-2.5 text-[var(--ink-primary)] select-none shrink-0 group rounded-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
        >
          <div className="w-9 h-9 rounded-xl overflow-hidden shrink-0 flex items-center justify-center bg-[var(--surface-canvas)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] transition-colors shadow-xs">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
              alt="Tik Profiles Viewer Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-sm sm:text-[15px] tracking-tight text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors leading-none">
              Tik Profiles Viewer
            </span>
            <span className="text-[11px] text-[var(--ink-muted)] font-medium tracking-wide mt-1 leading-none">
              TikProfilesViewer.com
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 ms-auto">
          <div className="flex items-center gap-1 bg-[var(--surface-canvas)] border border-[var(--border-subtle)] rounded-xl p-1">
            <Link
              href="/"
              onClick={handleGoHome}
              className={`h-8 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                pathname === '/'
                  ? 'bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] shadow-xs border border-[var(--border-subtle)]'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/60'
              }`}
            >
              Home
            </Link>

            <Link
              href="/creators"
              className={`h-8 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                pathname === '/creators' || pathname.startsWith('/profile/')
                  ? 'bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] shadow-xs border border-[var(--border-subtle)]'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/60'
              }`}
            >
              Top Creators
            </Link>

            <Link
              href="/categories"
              className={`h-8 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                pathname === '/categories' || pathname.startsWith('/category/')
                  ? 'bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] shadow-xs border border-[var(--border-subtle)]'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/60'
              }`}
            >
              Categories
            </Link>

            <Link
              href="/how-to-use-tiktok-profile-viewer"
              className={`h-8 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                pathname === '/how-to-use-tiktok-profile-viewer'
                  ? 'bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] shadow-xs border border-[var(--border-subtle)]'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/60'
              }`}
            >
              How to use
            </Link>

            <Link
              href="/about-tiktok-profile-viewer"
              className={`h-8 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                pathname === '/about-tiktok-profile-viewer'
                  ? 'bg-[var(--surface-elevated)] text-[var(--accent-primary-text)] shadow-xs border border-[var(--border-subtle)]'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/60'
              }`}
            >
              About
            </Link>
          </div>

          {/* Tools Popover Menu */}
          <div className="relative ms-1.5" ref={toolsRef}>
            <button
              type="button"
              aria-expanded={toolsDropdownOpen}
              onClick={() => {
                setToolsDropdownOpen(!toolsDropdownOpen);
                setLangDropdownOpen(false);
              }}
              className={`h-10 text-[13px] font-bold px-3.5 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                toolsDropdownOpen || isToolActive
                  ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)] shadow-xs'
                  : 'border-[var(--border-strong)] bg-[var(--surface-elevated)] text-[var(--ink-primary)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary-text)]'
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
              <div className="absolute top-full end-0 mt-2 w-[470px] rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-workbench)] p-2.5 z-50">
                <div className="px-2.5 pb-2 mb-1.5 border-b border-[var(--border-subtle)] flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                    Free Creator &amp; Downloader Tools
                  </span>
                  <span className="text-[11px] font-semibold text-[var(--accent-cyan-text)] bg-[var(--accent-cyan-soft)] px-2 py-0.5 rounded-md">
                    10 Tools
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-1">
                  {TOOLS.map((tool) => {
                    const Icon = tool.icon;
                    const active = pathname === tool.href;
                    return (
                      <Link
                        key={tool.href}
                        href={tool.href}
                        onClick={() => setToolsDropdownOpen(false)}
                        className={`px-2.5 py-2 rounded-xl flex items-start gap-2.5 transition-colors ${
                          active
                            ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)]'
                            : 'hover:bg-[var(--surface-canvas)] text-[var(--ink-primary)]'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border ${
                            active
                              ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-[var(--accent-contrast)]'
                              : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-secondary)]'
                          }`}
                        >
                          <Icon className="w-3.5 h-3.5" />
                        </div>
                        <div className="min-w-0">
                          <div className="font-bold text-xs leading-tight truncate">
                            {tool.label}
                          </div>
                          <div className="text-[11px] text-[var(--ink-muted)] mt-0.5 leading-tight truncate">
                            {tool.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Language Selector */}
          <div className="relative ms-1" ref={langRef}>
            <button
              type="button"
              aria-expanded={langDropdownOpen}
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setToolsDropdownOpen(false);
              }}
              className={`h-10 text-xs font-bold px-3 rounded-xl flex items-center gap-1.5 transition-all cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                langDropdownOpen
                  ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                  : 'border-[var(--border-subtle)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-soft)]'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent-cyan-text)] shrink-0" />
              <span>{selectedLang}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {langDropdownOpen && (
              <div className="absolute top-full end-0 mt-2 w-52 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-workbench)] p-1.5 z-50 flex flex-col gap-0.5">
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
                      className={`w-full px-2.5 py-2 rounded-lg text-xs flex items-center justify-between text-start transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[var(--accent-cyan-soft)] text-[var(--ink-primary)] font-bold border border-[var(--accent-cyan)]'
                          : 'text-[var(--ink-secondary)] hover:bg-[var(--surface-canvas)] hover:text-[var(--ink-primary)]'
                      }`}
                    >
                      <span>
                        {lang.name}{' '}
                        <span className="text-[var(--ink-muted)] font-normal">
                          ({lang.native})
                        </span>
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[var(--accent-primary-text)]" />}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </nav>

        {/* Mobile Actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => {
              setLangDropdownOpen(!langDropdownOpen);
              setMobileMenuOpen(false);
            }}
            aria-expanded={langDropdownOpen}
            className="h-11 px-3 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-xs font-bold text-[var(--ink-primary)] flex items-center gap-1.5 cursor-pointer hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)]"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
            <span>{selectedLang}</span>
            <ChevronDown className="w-3 h-3 text-[var(--ink-muted)]" />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setLangDropdownOpen(false);
            }}
            className="w-11 h-11 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-strong)] text-[var(--ink-primary)] hover:bg-[var(--surface-interactive)] transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Language Drawer */}
      {langDropdownOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 py-4 shadow-md">
          <p className="text-[11px] font-bold text-[var(--ink-muted)] uppercase tracking-wider text-center mb-2.5">
            Select Language
          </p>
          <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setSelectedLang(lang.name);
                  setLangDropdownOpen(false);
                }}
                className={`h-11 px-3 rounded-xl text-xs flex items-center justify-center gap-1.5 border cursor-pointer ${
                  selectedLang === lang.name
                    ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)] text-[var(--accent-contrast)] font-bold'
                    : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:bg-[var(--accent-cyan-soft)]'
                }`}
              >
                <span>{lang.name}</span>
                {selectedLang === lang.name && <Check className="w-3.5 h-3.5 text-[var(--accent-contrast)]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer (Centered & Easy to Tap) */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 py-4 flex flex-col gap-3 shadow-md max-h-[82vh] overflow-y-auto">
          <div className="grid grid-cols-2 gap-2 max-w-md mx-auto w-full">
            <Link
              href="/"
              onClick={handleGoHome}
              className={`h-11 px-3 rounded-xl text-xs font-bold flex items-center justify-center text-center border ${
                pathname === '/'
                  ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary-text)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
              }`}
            >
              Home
            </Link>
            <Link
              href="/creators"
              onClick={() => setMobileMenuOpen(false)}
              className={`h-11 px-3 rounded-xl text-xs font-bold flex items-center justify-center text-center border ${
                pathname === '/creators'
                  ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary-text)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
              }`}
            >
              Top Creators
            </Link>
            <Link
              href="/categories"
              onClick={() => setMobileMenuOpen(false)}
              className={`h-11 px-3 rounded-xl text-xs font-bold flex items-center justify-center text-center border ${
                pathname === '/categories'
                  ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary-text)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
              }`}
            >
              Categories
            </Link>
            <Link
              href="/how-to-use-tiktok-profile-viewer"
              onClick={() => setMobileMenuOpen(false)}
              className={`h-11 px-3 rounded-xl text-xs font-bold flex items-center justify-center text-center border ${
                pathname === '/how-to-use-tiktok-profile-viewer'
                  ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary-text)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
              }`}
            >
              How to use
            </Link>
            <Link
              href="/about-tiktok-profile-viewer"
              onClick={() => setMobileMenuOpen(false)}
              className={`col-span-2 h-11 px-3 rounded-xl text-xs font-bold flex items-center justify-center text-center border ${
                pathname === '/about-tiktok-profile-viewer'
                  ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)] text-[var(--accent-primary-text)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
              }`}
            >
              About Tik Profiles Viewer
            </Link>
          </div>

          <div className="pt-3 border-t border-[var(--border-subtle)] max-w-md mx-auto w-full">
            <span className="text-[11px] font-bold text-[var(--ink-muted)] uppercase tracking-wider block text-center mb-2">
              Creator &amp; Downloader Tools
            </span>
            <div className="grid grid-cols-2 gap-2">
              {TOOLS.map((tool) => {
                const Icon = tool.icon;
                return (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="min-h-[44px] px-2.5 py-2 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] text-xs font-bold text-[var(--ink-primary)] flex items-center justify-center text-center gap-1.5"
                  >
                    <Icon className="w-3.5 h-3.5 text-[var(--accent-primary-text)] shrink-0" />
                    <span className="truncate">{tool.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}