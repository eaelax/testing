'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { Copy, Check, Sparkles, RefreshCw } from 'lucide-react';

const PRESET_HOOKS = [
  'Wait until the end to see what happened...',
  'Tell me you do this too without actually telling me 💀',
  'Stop scrolling if you need this today!',
  'I tested this TikTok life hack so you don’t have to...',
  'Why did nobody tell me about this earlier?!',
  'The secret nobody wants to talk about 👀',
  'Here is what happened when I tried this for 7 days:',
  'Save this video before TikTok takes it down!',
];

const PRESET_TAGS: Record<string, string[]> = {
  Viral: ['#fyp', '#foryou', '#viral', '#trending', '#tiktok', '#explore', '#foryoupage'],
  Comedy: ['#funny', '#comedy', '#lol', '#humor', '#meme', '#sketch', '#relatable'],
  Food: ['#foodtiktok', '#recipe', '#easyrecipe', '#cheflife', '#foodie', '#delicious'],
  Tech: ['#techtok', '#techreview', '#gadgets', '#apple', '#ai', '#productivity'],
  Fitness: ['#gymtok', '#workout', '#fitnesstips', '#calisthenics', '#bodybuilding'],
  Dance: ['#dancetrend', '#dance', '#choreography', '#music', '#trendingdance'],
};

export default function CaptionGeneratorPage() {
  const [topic, setTopic] = useState('');
  const [niche, setNiche] = useState('Viral');
  const [generatedHook, setGeneratedHook] = useState(PRESET_HOOKS[0]);
  const [copied, setCopied] = useState(false);

  const generateNewHook = () => {
    const random = PRESET_HOOKS[Math.floor(Math.random() * PRESET_HOOKS.length)];
    setGeneratedHook(random);
  };

  const currentTags = PRESET_TAGS[niche] || PRESET_TAGS.Viral;
  const fullCaption = `${topic ? topic + ' — ' : ''}${generatedHook}\n\n${currentTags.join(' ')}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(fullCaption);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F3F4F6] text-[#111827]">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Caption & Hashtag Generator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-[#111827] tracking-tight leading-tight">
            TikTok Caption &amp; Hashtag Generator
          </h1>
          <p className="text-sm sm:text-base text-[#4B5563] mt-3 leading-relaxed">
            Generate viral hooks, punchy video captions, and high-reach hashtags designed to boost your FYP views and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 space-y-5">
            <h2 className="text-base font-bold text-[#111827] border-b border-[#E5E7EB] pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D61C47]" />
              <span>Choose Your Topic &amp; Niche</span>
            </h2>

            <div>
              <label className="text-xs font-bold text-[#111827] block mb-1">
                Video Topic (Optional)
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. 3 Morning habits that changed my life"
                className="w-full px-3.5 py-2.5 rounded-lg border border-[#D1D5DB] bg-[#F9FAFB] text-xs text-[#111827] placeholder:text-[#5C6573] focus:outline-none focus:border-[#D61C47]"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-[#111827] block mb-1">
                Content Niche
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(PRESET_TAGS).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNiche(cat)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-colors cursor-pointer border ${
                      niche === cat
                        ? 'bg-[#111827] text-[#FFFFFF] border-[#111827]'
                        : 'bg-[#FFFFFF] text-[#1F2937] border-[#D1D5DB] hover:bg-[#F3F4F6]'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={generateNewHook}
              className="w-full py-2.5 rounded-xl bg-[#FFFFFF] border border-[#D1D5DB] hover:bg-[#F3F4F6] text-[#1F2937] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Generate Another Viral Hook</span>
            </button>
          </div>

          {/* Output Preview Column */}
          <div className="lg:col-span-6 bg-[#FFFFFF] rounded-xl border border-[#E5E7EB] p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[#E5E7EB] mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#5C6573]">
                  Ready-to-Paste Caption
                </span>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-3 py-1.5 rounded-lg bg-[#D61C47] hover:bg-[#B9153B] text-[#FFFFFF] text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#FFFFFF]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Caption'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[#F8F9FA] border border-[#E5E7EB] font-mono text-xs text-[#111827] whitespace-pre-wrap leading-relaxed select-all">
                {fullCaption}
              </div>

              {/* Hashtags list */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentTags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-[#FDF2F4] text-[#BE123C] font-semibold border border-[#FECDD3]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-[#5C6573] pt-4">
              Tip: Keep your video caption under 150 characters to ensure the hook is visible on mobile before the user expands the text.
            </p>
          </div>
        </div>

        <AdSlot placement="footer" />
      </main>

      <Footer />
    </div>
  );
}
