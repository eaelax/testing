'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';

export interface BreadcrumbItem {
  label: string;
  href?: string;
  translationKey?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const { t, translateText } = useI18n();

  const resolveLabel = (item: BreadcrumbItem): string => {
    if (item.translationKey) {
      return t(item.translationKey);
    }
    return translateText(item.label);
  };

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
            className="inline-flex items-center text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
          >
            <span>{t('breadcrumb.home')}</span>
          </Link>
        </li>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const displayLabel = resolveLabel(item);
          return (
            <li key={index} className="inline-flex items-center gap-1.5">
              <ChevronRight className="w-3.5 h-3.5 text-[var(--border-strong)] rtl:rotate-180 shrink-0" />
              {isLast || !item.href ? (
                <span className="text-[var(--ink-primary)] font-semibold truncate max-w-[200px] sm:max-w-none">
                  {displayLabel}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="text-[var(--ink-muted)] hover:text-[var(--ink-primary)] transition-colors truncate max-w-[200px] sm:max-w-none rounded px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-ring)]"
                >
                  {displayLabel}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}