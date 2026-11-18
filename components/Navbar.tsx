'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Check, Globe } from 'lucide-react';

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
  { code: 'hi', name: 'Hindi', native: 'हिन्दी' },
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

  return (
    <header className="sticky top-0 z-40 w-full bg-[var(--surface-elevated)] border-b border-[var(--border-subtle)] shadow-[0_1px_3px_rgba(11,15,23,0.05)]">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        {/* Website Logo */}
        <Link
          href="/"
          onClick={handleGoHome}
          className="flex items-center gap-2.5 text-[var(--ink-primary)] select-none shrink-0 group focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] rounded-lg"
        >
          <div className="w-9 h-9 rounded-lg overflow-hidden shrink-0 flex items-center justify-center bg-[var(--surface-canvas)] border border-[var(--border-subtle)] group-hover:border-[var(--accent-primary)] transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
              alt="Tik Profiles Viewer Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-black text-sm sm:text-[15px] tracking-tight text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors leading-none">
              Tik Profiles Viewer
            </span>
            <span className="text-[11px] text-[var(--ink-muted)] font-semibold tracking-wide mt-1 leading-none">
              TikProfilesViewer.com
            </span>
          </div>
        </Link>

        {/* Desktop Nav Items */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1.5 ms-auto">
          <Link
            href="/"
            onClick={handleGoHome}
            className={`h-9 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              pathname === '/'
                ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)]'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
            }`}
          >
            Home
          </Link>

          <Link
            href="/creators"
            className={`h-9 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              pathname === '/creators'
                ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)]'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
            }`}
          >
            Top Creators
          </Link>

          <Link
            href="/about-tiktok-profile-viewer"
            className={`h-9 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              pathname === '/about-tiktok-profile-viewer'
                ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)]'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
            }`}
          >
            About
          </Link>

          <Link
            href="/how-to-use-tiktok-profile-viewer"
            className={`h-9 px-3.5 rounded-lg inline-flex items-center text-[13px] font-bold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
              pathname === '/how-to-use-tiktok-profile-viewer'
                ? 'bg-[var(--accent-soft)] text-[var(--accent-primary-text)]'
                : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
            }`}
          >
            How to use
          </Link>

          {/* Tools Dropdown */}
          <div className="relative" ref={toolsRef}>
            <button
              type="button"
              aria-expanded={toolsDropdownOpen}
              onClick={() => {
                setToolsDropdownOpen(!toolsDropdownOpen);
                setLangDropdownOpen(false);
              }}
              className={`h-9 text-[13px] font-bold px-3.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                toolsDropdownOpen
                  ? 'bg-[var(--accent-dark)] text-[var(--accent-contrast)]'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
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
              <div className="absolute top-full end-0 mt-2 w-72 max-h-[420px] overflow-y-auto rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-card-hover)] p-1.5 z-50 flex flex-col gap-0.5">
                {TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setToolsDropdownOpen(false)}
                    className="px-3 py-2 rounded-md hover:bg-[var(--accent-soft)] text-[var(--ink-primary)] hover:text-[var(--accent-primary-text)] transition-colors"
                  >
                    <div className="font-bold text-xs">{tool.label}</div>
                    <div className="text-[11px] text-[var(--ink-muted)] mt-0.5">{tool.desc}</div>
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div className="w-px h-5 bg-[var(--border-subtle)] mx-1.5" />

          {/* Languages Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              aria-expanded={langDropdownOpen}
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setToolsDropdownOpen(false);
              }}
              className={`h-9 text-xs font-bold px-3 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer border focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                langDropdownOpen
                  ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                  : 'border-[var(--border-strong)] bg-[var(--surface-canvas)] text-[var(--ink-primary)] hover:border-[var(--accent-cyan)] hover:bg-[var(--accent-cyan-soft)]'
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
              <div className="absolute top-full end-0 mt-2 w-48 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-strong)] shadow-[var(--shadow-card-hover)] p-1.5 z-50 flex flex-col gap-0.5">
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
                      className={`w-full px-2.5 py-2 rounded-md text-xs flex items-center justify-between text-start transition-colors cursor-pointer ${
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
            className="h-10 px-3 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-xs font-bold text-[var(--ink-primary)] flex items-center gap-1.5 cursor-pointer hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)]"
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
            className="w-10 h-10 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-strong)] text-[var(--ink-primary)] hover:bg-[var(--surface-interactive)] transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Language Dropdown */}
      {langDropdownOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 py-3 shadow-md">
          <p className="text-[11px] font-bold text-[var(--ink-muted)] uppercase tracking-wider mb-2">
            Select Language
          </p>
          <div className="grid grid-cols-2 gap-2">
            {LANGUAGES.map((lang) => (
              <button
                key={lang.code}
                type="button"
                onClick={() => {
                  setSelectedLang(lang.name);
                  setLangDropdownOpen(false);
                }}
                className={`h-10 px-3 rounded-lg text-xs text-start flex items-center justify-between border cursor-pointer ${
                  selectedLang === lang.name
                    ? 'bg-[var(--accent-primary-hover)] border-[var(--accent-primary-hover)] text-[var(--accent-contrast)] font-bold'
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

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[var(--border-subtle)] bg-[var(--surface-elevated)] px-4 py-3 flex flex-col gap-1 shadow-md max-h-[80vh] overflow-y-auto">
          <Link
            href="/"
            onClick={handleGoHome}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--ink-primary)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-primary-text)]"
          >
            Home
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--ink-primary)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-primary-text)]"
          >
            Top Creators
          </Link>
          <Link
            href="/about-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--ink-primary)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-primary-text)]"
          >
            About
          </Link>
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2.5 rounded-lg text-sm font-bold text-[var(--ink-primary)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-primary-text)]"
          >
            How to use
          </Link>

          <div className="pt-2.5 mt-1 border-t border-[var(--border-subtle)]">
            <span className="text-[11px] font-bold text-[var(--ink-muted)] uppercase tracking-wider block px-3 mb-1.5">
              Creator Tools
            </span>
            <div className="flex flex-col gap-0.5">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-lg text-xs font-bold text-[var(--ink-primary)] hover:bg-[var(--accent-soft)] hover:text-[var(--accent-primary-text)] flex items-center justify-between gap-2"
                >
                  <span>{tool.label}</span>
                  <span className="text-[11px] font-normal text-[var(--ink-muted)] truncate">{tool.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}