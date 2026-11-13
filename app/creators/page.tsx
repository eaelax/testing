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
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Breadcrumbs items={[{ label: 'Top Creators' }]} />

        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Top TikTok Creators
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] mt-2 leading-relaxed">
            Browse the most followed TikTok creators. View their profiles and download videos without watermarks.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-[#FFFFFF] border border-[#E5E7EB] p-4 rounded-xl">
          {/* Search Input */}
          <div className="relative w-full md:max-w-md">
            <Search className="w-4 h-4 text-[#5C6573] absolute left-3.5 top-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search creator name or @username..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#F9FAFB] border border-[#D1D5DB] text-xs sm:text-sm text-[#111827] placeholder:text-[#5C6573] focus:outline-none focus:border-[#D61C47]"
            />
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors cursor-pointer border ${
                selectedCategory === 'all'
                  ? 'bg-[#111827] text-[#FFFFFF] border-[#111827]'
                  : 'bg-[#FFFFFF] text-[#1F2937] border-[#D1D5DB] hover:bg-[#F3F4F6]'
              }`}
            >
              All Categories
            </button>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.slug}
                type="button"
                onClick={() => setSelectedCategory(cat.slug)}
                className={`px-3 py-1.5 rounded-full text-xs font-semibold shrink-0 transition-colors cursor-pointer border ${
                  selectedCategory === cat.slug
                    ? 'bg-[#111827] text-[#FFFFFF] border-[#111827]'
                    : 'bg-[#FFFFFF] text-[#1F2937] border-[#D1D5DB] hover:bg-[#F3F4F6]'
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
              className="group p-5 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#9CA3AF] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-[#F8F9FA] shrink-0 border border-[#E5E7EB]">
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
                      <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-[#F1F5F9] text-[#334155]">
                        #{index + 1}
                      </span>
                      <span className="text-[10px] text-[#5C6573] font-medium">
                        {creator.country}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#111827] transition-colors truncate mt-1">
                      {creator.displayName}
                    </h3>
                    <p className="text-xs font-mono text-[#5C6573] truncate">
                      @{creator.username}
                    </p>
                  </div>
                </div>

                <p className="text-xs text-[#4B5563] mt-3 line-clamp-2 leading-relaxed">
                  {creator.bio}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#E5E7EB] flex items-center justify-between text-xs">
                <div className="flex items-center gap-3">
                  <div>
                    <span className="text-[#5C6573] block text-[10px]">Followers</span>
                    <strong className="text-[#111827] font-mono">{creator.followers}</strong>
                  </div>
                  <div>
                    <span className="text-[#5C6573] block text-[10px]">Likes</span>
                    <strong className="text-[#111827] font-mono">{creator.likes}</strong>
                  </div>
                </div>
                <div className="flex items-center gap-1 text-[#111827] font-semibold group-hover:translate-x-0.5 transition-transform">
                  <span>View</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredCreators.length === 0 && (
          <div className="py-16 text-center text-[#5C6573]">
            <p className="text-base text-[#111827]">No creators found matching &quot;{searchQuery}&quot;</p>
            <p className="text-xs text-[#5C6573] mt-1">
              Try searching a different name or browse all categories.
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
