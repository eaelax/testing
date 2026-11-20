'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Check, Globe } from 'lucide-react';
import { MotionDropdownPanel, MotionCollapse } from './MotionPrimitives';

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

  const navLinkClass = (active: boolean) =>
    `h-9 px-3.5 rounded-full inline-flex items-center text-[13px] font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
      active
        ? 'bg-[var(--surface-sunken)] text-[var(--ink-primary)] font-semibold'
        : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]/70'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full py-2.5 px-3 sm:px-6 pointer-events-none">
      <div className="pointer-events-auto max-w-6xl mx-auto px-3.5 sm:px-5 h-14 rounded-full bg-[var(--surface-elevated)]/92 backdrop-blur-md border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex items-center justify-between gap-4">
        {/* Brand Mark */}
        <Link
          href="/"
          onClick={handleGoHome}
          className="flex items-center gap-2.5 text-[var(--ink-primary)] select-none shrink-0 rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] group"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden shrink-0 flex items-center justify-center bg-[var(--surface-sunken)] border border-[var(--border-subtle)] group-hover:border-[var(--border-strong)] transition-colors">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
              alt="Tik Profiles Viewer Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-sm tracking-tight text-[var(--ink-primary)] leading-none">
              Tik Profiles Viewer
            </span>
            <span className="text-[11px] text-[var(--ink-muted)] font-medium mt-1 leading-none">
              TikProfilesViewer.com
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <nav aria-label="Main Navigation" className="hidden lg:flex items-center gap-1 shrink-0">
          <Link href="/" onClick={handleGoHome} className={navLinkClass(pathname === '/')}>
            Home
          </Link>

          <Link href="/creators" className={navLinkClass(pathname === '/creators')}>
            Creators
          </Link>

          <Link href="/categories" className={navLinkClass(pathname === '/categories')}>
            Categories
          </Link>

          <Link
            href="/how-to-use-tiktok-profile-viewer"
            className={navLinkClass(pathname === '/how-to-use-tiktok-profile-viewer')}
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
              className={`h-9 text-[13px] font-medium px-3.5 rounded-full flex items-center gap-1 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                toolsDropdownOpen
                  ? 'bg-[var(--surface-sunken)] text-[var(--ink-primary)] font-semibold'
                  : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]/70'
              }`}
            >
              <span>Tools</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--ink-muted)] transition-transform duration-150 ${
                  toolsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <MotionDropdownPanel
              isOpen={toolsDropdownOpen}
              className="absolute top-full end-0 mt-3 w-72 max-h-[420px] overflow-y-auto rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] p-2 z-50 flex flex-col gap-0.5"
            >
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setToolsDropdownOpen(false)}
                  className="px-3 py-2 rounded-xl hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] transition-colors group"
                >
                  <div className="font-semibold text-xs group-hover:text-[var(--accent-primary-text)] transition-colors">
                    {tool.label}
                  </div>
                  <div className="text-[11px] text-[var(--ink-muted)] mt-0.5">{tool.desc}</div>
                </Link>
              ))}
            </MotionDropdownPanel>
          </div>

          <div className="w-px h-4 bg-[var(--border-subtle)] mx-2" />

          {/* Languages Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              aria-expanded={langDropdownOpen}
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setToolsDropdownOpen(false);
              }}
              className={`h-9 text-xs font-semibold px-4 rounded-full flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
                langDropdownOpen
                  ? 'bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)]'
                  : 'bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)]'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent-contrast)]/80 shrink-0" />
              <span>{selectedLang}</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--accent-contrast)]/80 transition-transform duration-150 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <MotionDropdownPanel
              isOpen={langDropdownOpen}
              className="absolute top-full end-0 mt-3 w-48 rounded-2xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] p-2 z-50 flex flex-col gap-0.5"
            >
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
                    className={`w-full px-3 py-2 rounded-xl text-xs flex items-center justify-between text-start transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--pastel-blue)] text-[var(--ink-primary)] font-semibold'
                        : 'text-[var(--ink-secondary)] hover:bg-[var(--surface-sunken)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    <span>
                      {lang.name}{' '}
                      <span className="text-[var(--ink-muted)] font-normal">
                        ({lang.native})
                      </span>
                    </span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />}
                  </button>
                );
              })}
            </MotionDropdownPanel>
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
            className="h-9 px-3 rounded-full bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-xs font-semibold text-[var(--accent-contrast)] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--accent-contrast)]/80" />
            <span className="hidden sm:inline">{selectedLang}</span>
            <ChevronDown className="w-3 h-3 text-[var(--accent-contrast)]/80" />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setLangDropdownOpen(false);
            }}
            className="w-9 h-9 rounded-full bg-[var(--surface-sunken)] border border-[var(--border-subtle)] text-[var(--ink-primary)] hover:bg-[var(--surface-interactive)] transition-colors cursor-pointer flex items-center justify-center"
            aria-label="Toggle Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Language Drawer */}
      <MotionCollapse
        isOpen={langDropdownOpen}
        className="lg:hidden pointer-events-auto max-w-6xl mx-auto mt-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[var(--shadow-workbench)]"
      >
        <div className="px-4 py-3.5">
          <p className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2.5">
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
                className={`h-9 px-3 rounded-full text-xs text-start flex items-center justify-between border cursor-pointer transition-colors ${
                  selectedLang === lang.name
                    ? 'bg-[var(--pastel-blue)] border-[var(--pastel-blue-border)] text-[var(--ink-primary)] font-semibold'
                    : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
                }`}
              >
                <span>{lang.name}</span>
                {selectedLang === lang.name && (
                  <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                )}
              </button>
            ))}
          </div>
        </div>
      </MotionCollapse>

      {/* Mobile Navigation Drawer */}
      <MotionCollapse
        isOpen={mobileMenuOpen}
        className="lg:hidden pointer-events-auto max-w-6xl mx-auto mt-2 rounded-2xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[var(--shadow-workbench)]"
      >
        <div className="px-4 py-3.5 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
          <Link
            href="/"
            onClick={handleGoHome}
            className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]"
          >
            Home
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]"
          >
            Top Creators
          </Link>
          <Link
            href="/categories"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]"
          >
            Categories
          </Link>
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]"
          >
            How to use
          </Link>
          <Link
            href="/about-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-xl text-sm font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)]"
          >
            About
          </Link>

          <div className="pt-2.5 mt-1 border-t border-[var(--border-subtle)]">
            <span className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider block px-3.5 mb-1.5">
              Creator Tools
            </span>
            <div className="flex flex-col gap-0.5">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-xl text-xs font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-sunken)] flex items-center justify-between gap-2"
                >
                  <span>{tool.label}</span>
                  <span className="text-[11px] font-normal text-[var(--ink-muted)] truncate">
                    {tool.desc}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </MotionCollapse>
    </header>
  );
}