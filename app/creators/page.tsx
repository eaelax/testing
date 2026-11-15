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
    <div className="min-h-screen flex flex-col bg-[#eef2f6] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Top Creators' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 tracking-tight">
            Top TikTok Creators
          </h1>
          <p className="text-sm sm:text-base text-slate-700 mt-2 leading-relaxed">
            Browse the most followed TikTok creators. View their profiles and download videos without watermarks.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white border border-slate-300/80 p-4 rounded-xl shadow-xs">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-slate-600 absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creator name or @username..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 border border-slate-300 text-xs sm:text-sm text-slate-950 placeholder:text-slate-500 focus:outline-none focus:border-[#e11d48] focus:ring-2 focus:ring-[#e11d48]/15"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
                selectedCategory === 'all'
                  ? 'bg-[#e11d48] border-[#e11d48] text-white'
                  : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold shrink-0 transition-colors cursor-pointer border ${
                  selectedCategory === cat.slug
                    ? 'bg-[#e11d48] border-[#e11d48] text-white'
                    : 'bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Creators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-16">
          {filteredCreators.map((creator, index) => (
            <Link
              key={creator.username}
              href={`/profile/${creator.username}`}
              className="group p-5 rounded-xl bg-white border border-slate-300/80 hover:border-[#e11d48]/60 hover:shadow-md transition-all flex flex-col justify-between shadow-xs"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-slate-100 shrink-0 border border-slate-300">
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
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-900 text-white">
                        #{index + 1}
                      </span>
                      <span className="text-[11px] text-slate-600 font-semibold">
                        {creator.country}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-950 group-hover:text-[#e11d48] transition-colors truncate mt-1">
                      {creator.displayName}
                    </h3>
                    <p className="text-xs font-mono font-semibold text-slate-600 truncate">
                      @{creator.username}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-700 mt-3 line-clamp-2 leading-relaxed">
                  {creator.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <div>
                    <span className="text-slate-600 block text-[10px] font-semibold">Followers</span>
                    <strong className="text-slate-950 font-mono">{creator.followers}</strong>
                  </div>
                  <div>
                    <span className="text-slate-600 block text-[10px] font-semibold">Likes</span>
                    <strong className="text-slate-950 font-mono">{creator.likes}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-slate-900 group-hover:text-[#e11d48] font-bold group-hover:translate-x-0.5 transition-all">
                  <span>View</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="py-16 text-center text-slate-700 bg-white rounded-2xl border border-slate-300/80 mb-12">
            <p className="text-base font-bold text-slate-950">No creators found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-slate-600 mt-1">
              Try searching a different name or browse all categories.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
