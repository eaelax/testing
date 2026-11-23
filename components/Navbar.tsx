'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, X, Check, Globe } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { MotionDropdownPanel, MotionCollapse } from './MotionPrimitives';

const TOOL_ITEMS = [
  { href: '/tiktok-video-downloader', key: 'video' },
  { href: '/tiktok-mp3-downloader', key: 'mp3' },
  { href: '/tiktok-profile-viewer', key: 'viewer' },
  { href: '/tiktok-analytics', key: 'analytics' },
  { href: '/tiktok-story-downloader', key: 'story' },
  { href: '/tiktok-photo-downloader', key: 'photo' },
  { href: '/tiktok-money-calculator', key: 'money' },
  { href: '/tiktok-engagement-calculator', key: 'engagement' },
  { href: '/tiktok-caption-generator', key: 'caption' },
  { href: '/tiktok-watermark-remover', key: 'watermark' },
] as const;

const DISCOVERY_ITEMS = [
  { href: '/creators', labelKey: 'nav.creators', descKey: 'home.trendingSubtitle' },
  { href: '/categories', labelKey: 'nav.categories', descKey: 'page.categories.subtitle' },
  { href: '/trending-songs', labelKey: 'nav.tool.songs.label', descKey: 'nav.tool.songs.desc' },
  { href: '/keywords', labelKey: 'nav.tool.keywords.label', descKey: 'nav.tool.keywords.desc' },
] as const;

export default function Navbar() {
  const { lang, languageInfo, languages, setLanguage, t } = useI18n();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toolsDropdownOpen, setToolsDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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
    `h-10 px-3.5 rounded-lg inline-flex items-center text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] ${
      active
        ? 'bg-[var(--surface-elevated)] text-[var(--ink-primary)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]'
        : 'text-[var(--ink-primary)]/85 hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/70 border border-transparent'
    }`;

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-200 ${
        isScrolled
          ? 'bg-[var(--surface-elevated)]/95 backdrop-blur-md border-b border-[var(--border-subtle)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-20 py-2.5 flex items-center justify-between gap-4">
        {/* Brand Link */}
        <Link
          href="/"
          onClick={handleGoHome}
          className="flex items-center gap-3 text-[var(--ink-primary)] select-none shrink-0 rounded-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] group"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png"
            alt={t('brand.name')}
            className="w-9 h-9 object-contain shrink-0"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm sm:text-[15px] tracking-tight text-[var(--ink-primary)] leading-none">
              {t('brand.name')}
            </span>
            <span
              data-no-translate="true"
              className="text-[11px] text-[var(--ink-muted)] font-medium mt-1 leading-none"
            >
              TikProfilesViewer.com
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links: Home, About Us, How to Use, Tools, Languages */}
        <nav
          aria-label={t('nav.mainAria')}
          className="hidden lg:flex items-center gap-1.5 shrink-0"
        >
          <Link
            href="/"
            onClick={handleGoHome}
            className={navLinkClass(pathname === '/')}
          >
            {t('nav.home')}
          </Link>

          <Link
            href="/about-tiktok-profile-viewer"
            className={navLinkClass(pathname === '/about-tiktok-profile-viewer')}
          >
            {t('nav.about')}
          </Link>

          <Link
            href="/how-to-use-tiktok-profile-viewer"
            className={navLinkClass(pathname === '/how-to-use-tiktok-profile-viewer')}
          >
            {t('nav.howToUse')}
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
              className={`h-10 text-[13px] font-semibold px-3.5 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)] border ${
                toolsDropdownOpen
                  ? 'bg-[var(--surface-elevated)] text-[var(--ink-primary)] border-[var(--border-subtle)] shadow-[var(--shadow-card)]'
                  : 'text-[var(--ink-primary)]/85 hover:text-[var(--ink-primary)] hover:bg-[var(--surface-elevated)]/70 border-transparent'
              }`}
            >
              <span>{t('nav.tools')}</span>
              <ChevronDown
                className={`w-3.5 h-3.5 text-[var(--ink-muted)] transition-transform duration-150 ${
                  toolsDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <MotionDropdownPanel
              isOpen={toolsDropdownOpen}
              className="absolute top-full end-0 mt-2 w-[520px] max-w-[90vw] max-h-[480px] overflow-y-auto rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] p-3 z-50"
            >
              <div className="grid grid-cols-2 gap-3">
                <div className="flex flex-col gap-0.5">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                    {t('nav.tools')}
                  </span>
                  {TOOL_ITEMS.map((tool) => (
                    <Link
                      key={tool.href}
                      href={tool.href}
                      onClick={() => setToolsDropdownOpen(false)}
                      className="px-3 py-2 rounded-lg hover:bg-[var(--surface-canvas)] text-[var(--ink-primary)] transition-colors group"
                    >
                      <div className="font-semibold text-xs group-hover:text-[var(--accent-primary-text)] transition-colors">
                        {t(`nav.tool.${tool.key}.label`)}
                      </div>
                      <div className="text-[11px] text-[var(--ink-muted)] mt-0.5 line-clamp-1">
                        {t(`nav.tool.${tool.key}.desc`)}
                      </div>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-col gap-0.5 border-s border-[var(--border-subtle)] ps-3">
                  <span className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                    {t('nav.categories')}
                  </span>
                  {DISCOVERY_ITEMS.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setToolsDropdownOpen(false)}
                      className="px-3 py-2 rounded-lg hover:bg-[var(--surface-canvas)] text-[var(--ink-primary)] transition-colors group"
                    >
                      <div className="font-semibold text-xs group-hover:text-[var(--accent-primary-text)] transition-colors">
                        {t(item.labelKey)}
                      </div>
                      <div className="text-[11px] text-[var(--ink-muted)] mt-0.5 line-clamp-2">
                        {t(item.descKey)}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </MotionDropdownPanel>
          </div>

          <div className="w-px h-5 bg-[var(--border-subtle)] mx-1.5" />

          {/* Languages Dropdown */}
          <div className="relative" ref={langRef}>
            <button
              type="button"
              aria-expanded={langDropdownOpen}
              aria-label={t('nav.selectLanguage')}
              onClick={() => {
                setLangDropdownOpen(!langDropdownOpen);
                setToolsDropdownOpen(false);
              }}
              className="h-10 text-xs font-semibold px-3.5 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] flex items-center gap-1.5 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--accent-contrast)]/85 shrink-0" />
              <span>{languageInfo.native}</span>
              <ChevronDown
                className={`w-3 h-3 text-[var(--accent-contrast)]/85 transition-transform duration-150 ${
                  langDropdownOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            <MotionDropdownPanel
              isOpen={langDropdownOpen}
              className="absolute top-full end-0 mt-2 w-52 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-workbench)] p-2 z-50 flex flex-col gap-0.5"
            >
              {languages.map((item) => {
                const isSelected = lang === item.code;
                return (
                  <button
                    key={item.code}
                    type="button"
                    onClick={() => {
                      setLanguage(item.code);
                      setLangDropdownOpen(false);
                    }}
                    className={`w-full px-3 py-2 rounded-lg text-xs flex items-center justify-between text-start transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--pastel-blue)] text-[var(--ink-primary)] font-semibold'
                        : 'text-[var(--ink-secondary)] hover:bg-[var(--surface-canvas)] hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    <span>
                      {item.name}{' '}
                      <span className="text-[var(--ink-muted)] font-normal">
                        ({item.native})
                      </span>
                    </span>
                    {isSelected && (
                      <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
                    )}
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
            aria-label={t('nav.selectLanguage')}
            onClick={() => {
              setLangDropdownOpen(!langDropdownOpen);
              setMobileMenuOpen(false);
            }}
            className="h-10 px-3 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-xs font-semibold text-[var(--accent-contrast)] flex items-center gap-1.5 cursor-pointer transition-colors"
          >
            <Globe className="w-3.5 h-3.5 text-[var(--accent-contrast)]/85" />
            <span className="hidden sm:inline">{languageInfo.native}</span>
            <ChevronDown className="w-3 h-3 text-[var(--accent-contrast)]/85" />
          </button>

          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setLangDropdownOpen(false);
            }}
            className="w-10 h-10 rounded-lg bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)] transition-colors cursor-pointer flex items-center justify-center"
            aria-label={t('nav.toggleMenu')}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-4 h-4" />
            ) : (
              <Menu className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Language Drawer */}
      <MotionCollapse
        isOpen={langDropdownOpen}
        className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-2"
      >
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[var(--shadow-workbench)] px-4 py-3.5">
          <p className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider mb-2.5">
            {t('nav.selectLanguage')}
          </p>
          <div className="grid grid-cols-2 gap-2">
            {languages.map((item) => (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLanguage(item.code);
                  setLangDropdownOpen(false);
                }}
                className={`h-9 px-3 rounded-lg text-xs text-start flex items-center justify-between border cursor-pointer transition-colors ${
                  lang === item.code
                    ? 'bg-[var(--pastel-blue)] border-[var(--pastel-blue-border)] text-[var(--ink-primary)] font-semibold'
                    : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)]'
                }`}
              >
                <span className="truncate">{item.native}</span>
                {lang === item.code && (
                  <Check className="w-3.5 h-3.5 text-[var(--accent-cyan-text)] shrink-0" />
                )}
              </button>
            ))}
          </div>
        </div>
      </MotionCollapse>

      {/* Mobile Navigation Drawer */}
      <MotionCollapse
        isOpen={mobileMenuOpen}
        className="lg:hidden max-w-6xl mx-auto px-4 sm:px-6 pb-2"
      >
        <div className="rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-elevated)] shadow-[var(--shadow-workbench)] px-4 py-3.5 flex flex-col gap-1 max-h-[75vh] overflow-y-auto">
          <Link
            href="/"
            onClick={handleGoHome}
            className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]"
          >
            {t('nav.home')}
          </Link>
          <Link
            href="/about-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]"
          >
            {t('nav.about')}
          </Link>
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3.5 py-2.5 rounded-lg text-sm font-semibold text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]"
          >
            {t('nav.howToUse')}
          </Link>

          <div className="pt-2.5 mt-1 border-t border-[var(--border-subtle)]">
            <span className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider block px-3.5 mb-1.5">
              {t('nav.tools')}
            </span>
            <div className="flex flex-col gap-0.5">
              {TOOL_ITEMS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)] flex items-center justify-between gap-2"
                >
                  <span>{t(`nav.tool.${tool.key}.label`)}</span>
                  <span className="text-[11px] font-normal text-[var(--ink-muted)] truncate">
                    {t(`nav.tool.${tool.key}.desc`)}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2.5 mt-1 border-t border-[var(--border-subtle)]">
            <span className="text-[11px] font-semibold text-[var(--ink-muted)] uppercase tracking-wider block px-3.5 mb-1.5">
              {t('nav.categories')}
            </span>
            <div className="flex flex-col gap-0.5">
              {DISCOVERY_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3.5 py-2 rounded-lg text-xs font-medium text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)] flex items-center justify-between gap-2"
                >
                  <span>{t(item.labelKey)}</span>
                  <span className="text-[11px] font-normal text-[var(--ink-muted)] truncate">
                    {t(item.descKey)}
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