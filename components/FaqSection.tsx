'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useI18n } from '@/lib/i18n/context';
import { MotionCollapse } from './MotionPrimitives';

const FAQ_KEYS = [1, 2, 3, 4, 5, 6] as const;

export default function FaqSection() {
  const { t } = useI18n();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div id="faq" className="w-full scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
        {/* Left Column */}
        <div className="lg:col-span-5 flex flex-col items-start text-start p-6 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)]">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[var(--ink-primary)] tracking-tight leading-tight">
            {t('faq.title')}
          </h2>

          <p className="text-xs sm:text-sm text-[var(--ink-secondary)] mt-2.5 leading-relaxed">
            {t('faq.subtitle')}
          </p>
        </div>

        {/* Right Column: High-Contrast Accordion */}
        <div className="lg:col-span-7 flex flex-col space-y-2.5">
          {FAQ_KEYS.map((num, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={num}
                className={`rounded-xl bg-[var(--surface-elevated)] border transition-colors overflow-hidden shadow-[var(--shadow-card)] ${
                  isOpen
                    ? 'border-[var(--border-strong)]'
                    : 'border-[var(--border-subtle)] hover:border-[var(--border-strong)]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 py-4 text-start flex items-center justify-between gap-4 cursor-pointer focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-[var(--focus-ring)] group"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-[var(--ink-primary)] tracking-tight">
                    {t(`faq.q${num}`)}
                  </span>

                  <div
                    className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 transition-colors ${
                      isOpen
                        ? 'bg-[var(--accent-dark)] border-[var(--accent-dark)] text-[var(--accent-contrast)]'
                        : 'bg-[var(--surface-canvas)] border-[var(--border-subtle)] text-[var(--ink-secondary)] group-hover:text-[var(--ink-primary)]'
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
                  <div className="px-5 pb-4 pt-3 text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed border-t border-[var(--border-subtle)] bg-[var(--surface-canvas)]">
                    <p>{t(`faq.a${num}`)}</p>
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