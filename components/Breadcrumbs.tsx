'use client';

import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const schemaItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://tikprofilesviewer.com/',
    },
    ...items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 2,
      name: item.label,
      ...(item.href ? { item: `https://tikprofilesviewer.com${item.href}` } : {}),
    })),
  ];

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: schemaItems,
  };

  return (
    <nav aria-label="Breadcrumb" className="w-full mb-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-[var(--ink-muted)] font-medium">
        <li className="inline-flex items-center">
          <Link
            href="/"
            onClick={() => {
              if (typeof window !== 'undefined') {
                window.dispatchEvent(new CustomEvent('tpv:reset-home'));
              }
            }}
            className="inline-flex items-center gap-1.5 text-[var(--ink-secondary)] hover:text-[var(--accent-primary-text)] transition-colors rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            <Home className="w-3.5 h-3.5 text-[var(--accent-cyan-text)]" />
            <span>Home</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-[var(--border-strong)] rtl:rotate-180" />
              {isLast || !item.href ? (
                <span className="text-[var(--ink-primary)] font-bold truncate max-w-[200px] sm:max-w-none">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--ink-secondary)] hover:text-[var(--accent-primary-text)] transition-colors truncate max-w-[200px] sm:max-w-none rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                >
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
