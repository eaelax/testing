'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import AdSlot from '@/components/AdSlot';
import { Copy, Check, Sparkles, RefreshCw } from 'lucide-react';

const PRESET_HOOKS = [
  'Wait until the end to see what happened...',
  'Tell me you do this too without actually telling me.',
  'Stop scrolling if you need this tip today.',
  'I tested this TikTok life hack so you do not have to.',
  'Why did nobody tell me about this earlier?',
  'Here is the honest truth nobody talks about.',
  'Here is what happened when I tried this for 7 days:',
  'Save this video so you can come back to it later.',
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
    const candidates = PRESET_HOOKS.filter((hook) => hook !== generatedHook);
    const pool = candidates.length > 0 ? candidates : PRESET_HOOKS;
    const random = pool[Math.floor(Math.random() * pool.length)];
    setGeneratedHook(random);
  };

  const currentTags = PRESET_TAGS[niche] || PRESET_TAGS.Viral;
  const trimmedTopic = topic.trim();
  const fullCaption = `${trimmedTopic ? `${trimmedTopic} - ` : ''}${generatedHook}\n\n${currentTags.join(' ')}`;

  const copyToClipboard = async () => {
    if (typeof navigator === 'undefined' || !navigator.clipboard) return;
    try {
      await navigator.clipboard.writeText(fullCaption);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <main className="flex-1 max-w-[980px] w-full mx-auto px-4 sm:px-6 py-5 sm:py-7">
        <Breadcrumbs items={[{ label: 'TikTok Caption & Hashtag Generator' }]} />
        <AdSlot placement="header" />

        <div className="text-center max-w-2xl mx-auto my-5">
          <h1 className="text-[length:var(--h1-size)] font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            TikTok Caption &amp; Hashtag Generator
          </h1>
          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2 leading-relaxed">
            Build clear video hooks, short captions, and focused hashtags to help more viewers watch and share your posts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-7">
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] p-5 sm:p-6 space-y-4">
            <h2 className="text-sm sm:text-base font-bold text-[var(--ink-primary)] border-b border-[var(--border-subtle)] pb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[var(--accent-cyan-text)]" />
              <span>Choose Your Topic &amp; Niche</span>
            </h2>

            <div>
              <label
                htmlFor="caption-topic-input"
                className="text-xs font-bold text-[var(--ink-primary)] block mb-1.5"
              >
                Video Topic (Optional)
              </label>
              <input
                id="caption-topic-input"
                type="text"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                placeholder="e.g. 3 morning habits that save time"
                className="w-full h-10 px-3.5 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] text-xs text-[var(--ink-primary)] placeholder:text-[var(--ink-muted)] focus:bg-[var(--surface-elevated)] focus:outline-none focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/15 transition-all"
              />
            </div>

            <div>
              <span className="text-xs font-bold text-[var(--ink-primary)] block mb-1.5">
                Content Niche
              </span>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(PRESET_TAGS).map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setNiche(cat)}
                    className={`h-9 px-3 rounded-lg text-xs font-bold transition-all cursor-pointer border ${
                      niche === cat
                        ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                        : 'bg-[var(--surface-canvas)] text-[var(--ink-primary)] border-[var(--border-subtle)] hover:bg-[var(--accent-cyan-soft)] hover:border-[var(--accent-cyan)]'
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
              className="w-full h-10 rounded-lg border border-[var(--border-strong)] bg-[var(--surface-canvas)] hover:bg-[var(--surface-sunken)] text-[var(--ink-primary)] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-colors"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Generate Another Hook</span>
            </button>
          </div>

          {/* Output Preview Column */}
          <div className="lg:col-span-6 bg-[var(--surface-elevated)] rounded-xl border border-[var(--border-subtle)] p-5 sm:p-6 flex flex-col justify-between gap-4">
            <div>
              <div className="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--ink-muted)]">
                  Ready-to-Paste Caption
                </span>
                <button
                  type="button"
                  onClick={() => void copyToClipboard()}
                  className="h-9 px-3.5 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  <span>{copied ? 'Copied' : 'Copy Caption'}</span>
                </button>
              </div>

              <div className="p-4 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] font-mono text-xs text-[var(--ink-primary)] whitespace-pre-wrap leading-relaxed select-all">
                {fullCaption}
              </div>

              {/* Hashtags list */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {currentTags.map((t) => (
                  <span
                    key={t}
                    className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-[var(--accent-cyan-soft)] text-[var(--accent-cyan-text)] font-bold border border-[var(--accent-cyan)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <p className="text-[11px] text-[var(--ink-muted)] leading-relaxed">
              Tip: Keep your caption under 150 characters so viewers can read the opening hook on mobile without tapping to expand.
            </p>
          </div>
        </div>

        <AdSlot placement="footer" />
      </main>

      <Footer />
    </div>
  );
}