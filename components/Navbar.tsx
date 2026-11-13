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
    <header className="sticky top-0 z-40 w-full bg-[#FFFFFF] border-b border-[#E5E7EB] transition-colors">
      <div className="max-w-[1080px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-3">
        {/* Website Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 text-[#111827] select-none shrink-0 group"
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
            <span className="font-bold text-sm sm:text-base tracking-tight text-[#111827] leading-none">
              Tik Profiles Viewer
            </span>
            <span className="text-[10px] text-[#5C6573] font-semibold tracking-wide mt-0.5">
              TikProfilesViewer.com
            </span>
          </div>
        </Link>

        {/* Nav Items aligned to the right */}
        <nav className="hidden lg:flex items-center gap-6 ml-auto">
          {/* Home */}
          <Link
            href="/"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/'
                ? 'text-[#111827] underline underline-offset-4 decoration-2 decoration-[#D61C47]'
                : 'text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about-tiktok-profile-viewer"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/about-tiktok-profile-viewer'
                ? 'text-[#111827] underline underline-offset-4 decoration-2 decoration-[#D61C47]'
                : 'text-[#4B5563] hover:text-[#111827]'
            }`}
          >
            About
          </Link>

          {/* How to use */}
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            className={`text-sm font-semibold transition-colors ${
              pathname === '/how-to-use-tiktok-profile-viewer'
                ? 'text-[#111827] underline underline-offset-4 decoration-2 decoration-[#D61C47]'
                : 'text-[#4B5563] hover:text-[#111827]'
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
              className={`text-sm font-semibold px-2.5 py-1.5 rounded-lg flex items-center gap-1 transition-colors cursor-pointer ${
                toolsDropdownOpen
                  ? 'bg-[#F8F9FA] text-[#111827]'
                  : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F8F9FA]'
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
              <div className="absolute top-full left-0 mt-2 w-72 sm:w-80 max-h-[420px] overflow-y-auto rounded-xl bg-[#FFFFFF] border border-[#D1D5DB] p-1.5 z-50 flex flex-col gap-0.5">
                {TOOLS.map((tool) => (
                  <Link
                    key={tool.href}
                    href={tool.href}
                    onClick={() => setToolsDropdownOpen(false)}
                    className="p-2.5 rounded-lg hover:bg-[#F8F9FA] text-[#111827] transition-colors"
                  >
                    <div className="font-bold text-xs text-[#111827]">{tool.label}</div>
                    <div className="text-[11px] text-[#4B5563] mt-0.5">{tool.desc}</div>
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
              className={`text-sm font-semibold px-3 py-1.5 rounded-xl flex items-center gap-1.5 transition-colors cursor-pointer border ${
                langDropdownOpen
                  ? 'bg-[#F3F4F6] border-[#9CA3AF] text-[#111827]'
                  : 'border-[#D1D5DB] bg-[#FFFFFF] text-[#1F2937] hover:text-[#111827] hover:border-[#9CA3AF] hover:bg-[#F3F4F6]'
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
              <div className="absolute top-full right-0 mt-2 w-52 rounded-xl bg-[#FFFFFF] border border-[#D1D5DB] p-1.5 z-50 flex flex-col gap-0.5">
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
                      className={`w-full px-2.5 py-2 rounded-lg text-xs flex items-center justify-between text-left transition-colors cursor-pointer ${
                        isSelected
                          ? 'bg-[#FDF2F4] text-[#BE123C] font-bold'
                          : 'text-[#111827] hover:bg-[#F8F9FA]'
                      }`}
                    >
                      <span>
                        {lang.name}{' '}
                        <span className={isSelected ? 'text-[#BE123C]/80 font-normal' : 'text-[#5C6573] font-normal'}>
                          ({lang.native})
                        </span>
                      </span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-[#D61C47]" />}
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
            className="px-3 py-1.5 rounded-xl border border-[#D1D5DB] bg-[#FFFFFF] hover:bg-[#F3F4F6] text-xs font-semibold text-[#1F2937] flex items-center gap-1 cursor-pointer transition-colors"
          >
            <span>{selectedLang}</span>
            <ChevronDown className="w-3 h-3 text-[#5C6573]" />
          </button>

          {/* Hamburger Menu Button */}
          <button
            type="button"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              setLangDropdownOpen(false);
            }}
            className="p-2 rounded-xl bg-[#FFFFFF] border border-[#D1D5DB] text-[#1F2937] hover:bg-[#F3F4F6] hover:text-[#111827] transition-colors cursor-pointer"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Language Dropdown popup */}
      {langDropdownOpen && (
        <div className="lg:hidden border-b border-[#E5E7EB] bg-[#FFFFFF] px-4 py-3">
          <p className="text-[11px] font-bold text-[#5C6573] uppercase tracking-wider mb-2">
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
                className={`px-3 py-2 rounded-lg text-xs text-left flex items-center justify-between transition-colors ${
                  selectedLang === lang.name
                    ? 'bg-[#111827] text-[#FFFFFF] font-semibold'
                    : 'bg-[#F8F9FA] text-[#1F2937] border border-[#E5E7EB] hover:bg-[#F3F4F6]'
                }`}
              >
                <span>{lang.name}</span>
                {selectedLang === lang.name && <Check className="w-3 h-3 text-[#FFFFFF]" />}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E5E7EB] bg-[#FFFFFF] px-4 py-4 flex flex-col gap-2">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-[#111827] hover:bg-[#F8F9FA]"
          >
            Home
          </Link>
          <Link
            href="/about-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-[#111827] hover:bg-[#F8F9FA]"
          >
            About
          </Link>
          <Link
            href="/how-to-use-tiktok-profile-viewer"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-[#111827] hover:bg-[#F8F9FA]"
          >
            How to use
          </Link>
          <Link
            href="/creators"
            onClick={() => setMobileMenuOpen(false)}
            className="px-3 py-2 rounded-lg text-sm font-semibold text-[#111827] hover:bg-[#F8F9FA]"
          >
            Browse Top Creators
          </Link>

          <div className="pt-2 border-t border-[#E5E7EB]">
            <span className="text-[11px] font-bold text-[#5C6573] uppercase tracking-wider block px-3 mb-1.5">
              Tools
            </span>
            <div className="flex flex-col gap-1">
              {TOOLS.map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg text-xs font-semibold text-[#1F2937] hover:bg-[#F8F9FA] flex items-center justify-between gap-2"
                >
                  <span>{tool.label}</span>
                  <span className="text-[11px] font-normal text-[#5C6573] truncate">{tool.desc}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
