'use client';

import { useState } from 'react';
import { Plus, X, Mail } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: 'Is Tik Profiles Viewer 100% free to use?',
    answer:
      'Yes, Tik Profiles Viewer is completely free to use. There are no paid plans, no subscription fees, and no download limits. You can view as many profiles and download as many videos as you want at any time.',
  },
  {
    question: 'Can I view profiles and watch videos completely anonymously?',
    answer:
      'Yes. You do not need to log into TikTok or create an account. The creator will never receive any notification or view record indicating that you checked their profile or downloaded their content.',
  },
  {
    question: 'How does the video downloader remove TikTok watermarks?',
    answer:
      'Our engine connects directly to the public content delivery network to retrieve the original high-resolution video stream before the platform adds bouncing logo watermarks and creator text overlays.',
  },
  {
    question: 'Can I extract and download the background music or audio (MP3)?',
    answer:
      'Yes. Every video card has a dedicated Download Audio button that lets you extract and save the clean original sound in standard MP3 format with one click.',
  },
  {
    question: 'Which devices and browsers are supported?',
    answer:
      'Tik Profiles Viewer works smoothly in all modern web browsers including Safari on iPhone and iPad, Google Chrome on Android and PC, Mozilla Firefox, Microsoft Edge, and macOS browsers.',
  },
  {
    question: 'How do I download a profile avatar picture in high quality?',
    answer:
      'Search for any creator username, then click the Avatar button right in the profile details box. The full-size original profile picture will save directly to your device.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full mt-10 pt-8 border-t border-[var(--border-subtle)] scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] mt-2.5 leading-relaxed max-w-sm">
            Find answers to frequently asked questions about viewing profiles and saving watermark-free media.
          </p>

          <a
            href="mailto:support@tikprofilesviewer.com"
            className="mt-4 h-9 inline-flex items-center gap-2 px-4 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-primary-hover)] active:scale-[0.98] text-[var(--accent-contrast)] text-xs font-bold transition-all cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--accent-cyan)]" />
            <span>Contact us</span>
          </a>
        </div>

        {/* Right Column: Accordion Stack */}
        <div className="lg:col-span-7 flex flex-col space-y-2">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl bg-[var(--surface-elevated)] border transition-colors overflow-hidden ${
                  isOpen
                    ? 'border-[var(--accent-primary)]'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-4 py-3 text-start flex items-center justify-between gap-3 cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[var(--focus-ring)] group"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-[13px] font-bold text-[var(--ink-primary)] tracking-tight">
                    {item.question}
                  </span>

                  <div
                    className={`w-6 h-6 rounded-full border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[var(--accent-primary-hover)] border-[var(--accent-primary-hover)] text-[var(--accent-contrast)]'
                        : 'bg-[var(--surface-canvas)] group-hover:bg-[var(--accent-cyan-soft)] border-[var(--border-strong)] text-[var(--ink-primary)]'
                    }`}
                  >
                    {isOpen ? (
                      <X className="w-3 h-3 text-[var(--accent-contrast)]" />
                    ) : (
                      <Plus className="w-3 h-3 text-[var(--ink-primary)]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-3.5 pt-2.5 text-xs text-[var(--ink-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-[var(--surface-canvas)]">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}