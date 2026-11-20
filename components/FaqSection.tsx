'use client';

import { useState } from 'react';
import { Plus, Minus, Mail, HelpCircle } from 'lucide-react';
import { MotionCollapse } from './MotionPrimitives';

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
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="faq" className="w-full scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col items-start text-start p-6 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)]">
          <div className="w-9 h-9 rounded-lg bg-[var(--accent-soft)] text-[var(--accent-primary-text)] border border-[var(--accent-primary)]/20 flex items-center justify-center mb-4">
            <HelpCircle className="w-4 h-4" />
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>

          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
            Quick answers about viewing TikTok profiles, downloading clean HD MP4 videos, and extracting MP3 audio.
          </p>

          <a
            href="mailto:support@tikprofilesviewer.com"
            className="mt-5 h-9 inline-flex items-center gap-2 px-4 rounded-lg bg-[var(--accent-dark)] hover:bg-[var(--accent-dark-hover)] text-[var(--accent-contrast)] text-xs font-semibold transition-colors cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5 text-[var(--ink-muted)]" />
            <span>Contact support</span>
          </a>
        </div>

        {/* Right Column: Clean SaaS Accordion */}
        <div className="lg:col-span-7 flex flex-col space-y-2.5">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={`rounded-xl bg-[var(--surface-elevated)] border transition-colors overflow-hidden ${
                  isOpen
                    ? 'border-[var(--border-strong)] shadow-[var(--shadow-card)]'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 py-4 text-start flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[var(--focus-ring)] group"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-semibold text-[var(--ink-primary)] tracking-tight">
                    {item.question}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-md border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[var(--accent-soft)] border-[var(--accent-primary)]/25 text-[var(--accent-primary-text)]'
                        : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-muted)] group-hover:text-[var(--ink-primary)]'
                    }`}
                  >
                    {isOpen ? (
                      <Minus className="w-3.5 h-3.5" />
                    ) : (
                      <Plus className="w-3.5 h-3.5" />
                    )}
                  </div>
                </button>

                <MotionCollapse isOpen={isOpen}>
                  <div className="px-5 pb-4 pt-3 text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-[var(--surface-canvas)]/50">
                    <p>{item.answer}</p>
                  </div>
                </MotionCollapse>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}