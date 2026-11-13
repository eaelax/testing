import type { Metadata } from 'next';
import Link from 'next/link';
import { Play, ChevronRight } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import { CATEGORIES } from '@/lib/creators-data';

export const metadata: Metadata = {
  title: 'TikTok Categories Directory - Browse Top Creators',
  description: 'Explore top TikTok creator categories including Comedy, Food, Tech, Gaming, Fitness, and Dance on TikProfilesViewer.com.',
  openGraph: {
    title: 'TikTok Categories Directory - Browse Top Creators',
    description: 'Explore top TikTok creator categories including Comedy, Food, Tech, Gaming, Fitness, and Dance on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com/categories',
  },
  alternates: {
    canonical: 'https://tikprofilesviewer.com/categories',
  },
};

export default function CategoriesPage() {
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'TikTok Categories Directory',
    description: 'Explore top TikTok creator categories.',
    url: 'https://tikprofilesviewer.com/categories',
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
        />

        <Breadcrumbs items={[{ label: 'Categories' }]} />

        {/* Hero Section */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
            Explore TikTok by Category
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] mt-2 leading-relaxed">
            Browse creators and videos by their content topic.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {CATEGORIES.map((cat) => (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group p-6 rounded-xl bg-[#FFFFFF] border border-[#E5E7EB] hover:border-[#9CA3AF] transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FDF2F4] flex items-center justify-center text-[#BE123C] group-hover:bg-[#D61C47] group-hover:text-[#FFFFFF] transition-colors">
                    <Play className="w-5 h-5 fill-current translate-x-0.5" />
                  </div>
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-full bg-[#F8F9FA] text-[#5C6573] border border-[#E5E7EB]">
                    {cat.creatorUsernames.length} Creators
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[#111827] transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#4B5563] mt-2 line-clamp-2 leading-relaxed">
                  {cat.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#E5E7EB] flex items-center justify-between text-xs text-[#111827] font-medium">
                <span>Browse {cat.name}</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
