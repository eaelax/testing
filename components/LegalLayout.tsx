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
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumbs
          items={[
            { label: 'Legal Center', href: '/terms-of-service' },
            { label: title },
          ]}
        />

        {/* Compact Page Header */}
        <header className="mt-4 pb-5 border-b border-[var(--border-subtle)]">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed max-w-2xl">
            {subtitle}
          </p>

          <div className="flex items-center gap-3 mt-3 text-[11px] text-[var(--ink-muted)] font-mono font-semibold">
            <span>Effective: November 2026</span>
            <span>•</span>
            <span>Last reviewed: {lastUpdated}</span>
          </div>
        </header>

        {/* Compact Executive Summary Card */}
        <div className="my-5 p-4 sm:p-5 rounded-xl bg-[var(--accent-cyan-soft)] border border-[var(--accent-cyan)]">
          <div className="flex items-center gap-2 text-[var(--ink-primary)] font-bold text-xs sm:text-sm mb-1">
            <ShieldCheck className="w-4 h-4 text-[var(--accent-cyan-text)] shrink-0" />
            <span>Key Summary</span>
          </div>
          <p className="text-xs text-[var(--ink-secondary)] leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Content Layout with Compact Legal Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          {/* Main Legal Text */}
          <article className="lg:col-span-8 bg-[var(--surface-elevated)] p-5 sm:p-6 md:p-7 rounded-xl border border-[var(--border-subtle)] space-y-6 text-xs sm:text-sm leading-relaxed text-[var(--ink-secondary)]">
            {children}

            {/* Official Support Box */}
            <div className="pt-6 border-t border-[var(--border-subtle)] mt-8">
              <h3 className="text-sm font-bold text-[var(--ink-primary)] mb-1.5">
                Questions or Official Requests?
              </h3>
              <p className="text-xs text-[var(--ink-secondary)] leading-relaxed mb-3">
                If you have questions regarding this policy, or wish to submit an inquiry, request content review, or report a concern, please contact our legal team directly.
              </p>
              <a
                href="mailto:legal@tikprofilesviewer.com"
                className="h-9 inline-flex items-center gap-2 px-3.5 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)] text-xs font-bold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                <span>legal@tikprofilesviewer.com</span>
              </a>
            </div>
          </article>

          {/* Compact Sidebar Navigation */}
          <aside className="lg:col-span-4 flex flex-col gap-4 lg:sticky lg:top-20">
            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)]">
              <h3 className="text-[11px] font-extrabold uppercase tracking-wider text-[var(--ink-primary)] mb-2.5">
                All Legal Documents
              </h3>
              <nav aria-label="Legal Documents" className="flex flex-col space-y-1">
                {LEGAL_PAGES.map((page) => {
                  const isActive = currentPath === page.href;
                  const Icon = page.icon;
                  return (
                    <Link
                      key={page.href}
                      href={page.href}
                      className={`px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                        isActive
                          ? 'bg-[var(--accent-primary-hover)] text-[var(--accent-contrast)]'
                          : 'text-[var(--ink-secondary)] hover:text-[var(--ink-primary)] hover:bg-[var(--surface-canvas)]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{page.title}</span>
                      </div>
                      <ChevronRight
                        className={`w-3.5 h-3.5 shrink-0 rtl:rotate-180 ${
                          isActive ? 'text-[var(--accent-contrast)]' : 'text-[var(--ink-muted)]'
                        }`}
                      />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] text-xs text-[var(--ink-secondary)] leading-relaxed">
              <span className="font-bold text-[var(--ink-primary)] block mb-1">Independent Notice</span>
              Tik Profiles Viewer operates independently on TikProfilesViewer.com and is not associated with, sponsored by, or affiliated with TikTok Inc., ByteDance Ltd., or any of their affiliates.
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}