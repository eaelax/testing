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
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs
          items={[
            { label: 'Legal Center', href: '/terms-of-service' },
            { label: title },
          ]}
        />

        {/* Page Header */}
        <header className="mt-6 pb-8 border-b border-[#E5E7EB]">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            {title}
          </h1>

          <p className="text-sm sm:text-base text-[#4B5563] mt-2 leading-relaxed max-w-3xl">
            {subtitle}
          </p>

          <div className="flex items-center gap-4 mt-4 text-xs text-[#5C6573] font-mono">
            <span>Effective: November 2026</span>
            <span>•</span>
            <span>Last reviewed: {lastUpdated}</span>
          </div>
        </header>

        {/* Executive Summary Card */}
        <div className="my-8 p-5 sm:p-6 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB]">
          <div className="flex items-center gap-2 text-[#111827] font-bold text-sm mb-1.5">
            <ShieldCheck className="w-4 h-4 text-[#0F766E]" />
            <span>Key Summary</span>
          </div>
          <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed">
            {summary}
          </p>
        </div>

        {/* Content Layout with Legal Sidebar on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Main Legal Text */}
          <article className="lg:col-span-8 bg-[#FFFFFF] p-6 sm:p-8 md:p-10 rounded-2xl border border-[#E5E7EB] space-y-8 text-sm sm:text-base leading-relaxed text-[#4B5563]">
            {children}

            {/* Official Support & Inquiries Box */}
            <div className="pt-8 border-t border-[#E5E7EB] mt-10">
              <h3 className="text-base font-bold text-[#111827] mb-2">
                Questions or Official Requests?
              </h3>
              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-4">
                If you have questions regarding this policy, or wish to submit an inquiry, request content review, or report a concern, please contact our legal team directly.
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="mailto:legal@tikprofilesviewer.com"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#111827] hover:bg-[#1F2937] text-[#FFFFFF] text-xs font-semibold transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-[#D1D5DB]" />
                  <span>legal@tikprofilesviewer.com</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar Navigation */}
          <aside className="lg:col-span-4 flex flex-col gap-5 sticky top-24">
            <div className="p-5 rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB]">
              <h3 className="text-xs font-bold uppercase tracking-wider text-[#111827] mb-3">
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
                          ? 'bg-[#111827] text-[#FFFFFF]'
                          : 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F8F9FA]'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        <Icon className="w-3.5 h-3.5 shrink-0" />
                        <span className="truncate">{page.title}</span>
                      </div>
                      <ChevronRight className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-[#FFFFFF]' : 'text-[#5C6573]'}`} />
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="p-4 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] text-xs text-[#5C6573] leading-relaxed">
              <span className="font-bold text-[#111827] block mb-1">Independent Notice</span>
              Tik Profiles Viewer operates independently on TikProfilesViewer.com and is not associated with, sponsored by, or affiliated with TikTok Inc., ByteDance Ltd., or any of their affiliates.
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}
