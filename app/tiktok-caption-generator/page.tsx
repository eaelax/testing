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
    <div className="min-h-screen flex flex-col bg-[#eef2f6] text-slate-900">
      <Navbar />

      <main className="flex-1 max-w-[1080px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Breadcrumbs items={[{ label: 'TikTok Caption & Hashtag Generator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-3xl mx-auto my-6">
          <h1 className="text-3xl sm:text-5xl font-black text-slate-950 tracking-tight leading-tight">
            TikTok Caption &amp; Hashtag Generator
          </h1>
          <p className="text-sm sm:text-base text-slate-700 mt-3 leading-relaxed">
            Generate viral hooks, punchy video captions, and high-reach hashtags designed to boost your FYP views and engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 my-8">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-300/80 p-6 sm:p-8 shadow-xs space-y-5">
            <h2 className="text-base font-bold text-slate-950 border-b border-slate-200 pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#0284c7]" />
              <span>Choose Your Topic &amp; Niche</span>
            </h2>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1">
                Video Topic (Optional)
              </label>
              <input
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. 3 Morning habits that changed my life"
                className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 bg-slate-50 text-xs text-slate-950 placeholder:text-slate-500 focus:bg-white focus:outline-none focus:border-sky-600"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-800 block mb-1.5">
                Content Niche
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(PRESET_TAGS).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNiche(cat)}
                    className={`py-2 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                      niche === cat
                        ? 'bg-slate-950 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200'
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
              className="w-full py-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-900 font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Generate Another Viral Hook</span>
            </button>
          </div>

          {/* Output Preview Column */}
          <div className="lg:col-span-6 bg-white rounded-xl border border-slate-300/80 p-6 sm:p-8 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-slate-200 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Ready-to-Paste Caption
                </span>
                <button
                  type="button"
                  onClick={copyToClipboard}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-950 hover:bg-black text-white text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#2dd4bf]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Caption'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-slate-100 border border-slate-300/80 font-mono text-xs text-slate-950 whitespace-pre-wrap leading-relaxed select-all">
                {fullCaption}
              </div>

              {/* Hashtags list */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentTags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-purple-100 text-purple-900 font-bold border border-purple-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-slate-600 pt-4">
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
