'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CREATORS, CATEGORIES } from '@/lib/creators-data';

export default function CreatorsDirectoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredCreators = CREATORS.filter((c) => {
    const matchesCategory =
      selectedCategory === 'all' || c.categorySlug === selectedCategory;
    const matchesSearch =
      c.displayName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.username.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.bio.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: 'Top Creators' }]} />

        {/* Compact Hero Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            Top TikTok Creators
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-1.5 leading-relaxed">
            Browse the most followed TikTok creators. View their profiles and download videos without watermarks.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 mb-6 bg-[var(--surface-elevated)] border border-[var(--border-subtle)] p-3 rounded-xl">
          <div className="relative w-full md:max-w-xs">
            <Search className="w-3.5 h-3.5 text-[var(--ink-muted)] absolute start-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creator name or @username..."
              aria-label="Search creators"
              className="w-full h-9 ps-8 pe-3 rounded-lg bg-[var(--surface-canvas)] border border-[var(--border-strong)] text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`h-8 px-3 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
                selectedCategory === 'all'
                  ? 'bg-[var(--accent-primary-hover)] border-[var(--accent-primary-hover)] text-[var(--accent-contrast)]'
                  : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)]'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`h-8 px-3 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
                  selectedCategory === cat.slug
                    ? 'bg-[var(--accent-primary-hover)] border-[var(--accent-primary-hover)] text-[var(--accent-contrast)]'
                    : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-primary)] hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)]'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Compact Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4 mb-10">
          {filteredCreators.map((creator, index) => (
            <Link
              key={creator.username}
              href={`/profile/${creator.username}`}
              className="group p-4 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] hover:border-[var(--accent-primary)] transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-[var(--surface-sunken)] shrink-0 border border-[var(--border-strong)]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={creator.avatar || `/api/avatar?username=${encodeURIComponent(creator.username)}`}
                      alt={creator.displayName}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.src = `/api/avatar?username=${encodeURIComponent(creator.username)}`;
                      }}
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5">
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[var(--accent-dark)] text-[var(--accent-contrast)] tabular-nums">
                        #{index + 1}
                      </span>
                      <span className="text-[11px] text-[var(--ink-muted)] font-semibold truncate">
                        {creator.country}
                      </span>
                    </div>
                    <h2 className="text-sm font-bold text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] transition-colors truncate mt-1">
                      {creator.displayName}
                    </h2>
                    <p className="text-[11px] font-mono font-semibold text-[var(--ink-muted)] truncate">
                      @{creator.username}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[var(--ink-secondary)] mt-2.5 line-clamp-2 leading-relaxed">
                  {creator.bio}
                </p>
              </div>

              <div className="mt-3.5 pt-2.5 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-[var(--ink-muted)] block text-[10px] font-semibold">Followers</span>
                    <strong className="text-[var(--ink-primary)] font-mono tabular-nums">{creator.followers}</strong>
                  </div>
                  <div>
                    <span className="text-[var(--ink-muted)] block text-[10px] font-semibold">Likes</span>
                    <strong className="text-[var(--ink-primary)] font-mono tabular-nums">{creator.likes}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[var(--ink-primary)] group-hover:text-[var(--accent-primary-text)] font-bold group-hover:translate-x-0.5 transition-all">
                  <span>View</span>
                  <ChevronRight className="w-3.5 h-3.5 rtl:rotate-180" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="py-10 px-4 text-center text-[var(--ink-secondary)] bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] mb-8">
            <p className="text-sm font-bold text-[var(--ink-primary)]">
              No creators found matching &quot;{searchQuery}&quot;
            </p>
            <p className="text-xs text-[var(--ink-muted)] mt-1">
              Try searching a different name or browse all categories.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}