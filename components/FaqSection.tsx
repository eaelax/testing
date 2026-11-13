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
      'Search for any creator username, then click the Download avatar button right in the profile details box. The full-size original profile picture will save directly to your device.',
  },
];

export default function FaqSection() {
  // All questions closed by default
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="w-full mt-14 pt-10 border-t border-[#E5E7EB] scroll-mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left Column: Heading, Subtitle & Contact Us Button */}
        <div className="lg:col-span-5 flex flex-col items-start">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.1]">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </h2>

          <p className="text-sm sm:text-base text-[#4B5563] mt-4 leading-relaxed max-w-sm">
            Find answers to frequently asked questions about viewing profiles and saving watermark-free media.
          </p>

          <a
            href="mailto:support@tikprofilesviewer.com"
            className="mt-6 inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#111827] hover:bg-[#1F2937] active:scale-[0.98] text-[#FFFFFF] text-xs sm:text-sm font-semibold transition-colors cursor-pointer"
          >
            <Mail className="w-4 h-4 text-[#D1D5DB]" />
            <span>Contact us</span>
          </a>
        </div>

        {/* Right Column: Accordion Cards Stack */}
        <div className="lg:col-span-7 flex flex-col space-y-2.5 sm:space-y-3">
          {FAQS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-2xl bg-[#FFFFFF] border border-[#E5E7EB] transition-colors hover:border-[#9CA3AF] overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full px-5 py-3 sm:py-3.5 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-medium text-[#111827] tracking-tight">
                    {item.question}
                  </span>

                  <div className="w-7 h-7 rounded-full bg-[#F8F9FA] group-hover:bg-[#F1F3F5] border border-[#E5E7EB] flex items-center justify-center text-[#4B5563] shrink-0 transition-colors">
                    {isOpen ? (
                      <X className="w-3.5 h-3.5 text-[#111827]" />
                    ) : (
                      <Plus className="w-3.5 h-3.5 text-[#4B5563]" />
                    )}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-4 pt-2.5 text-xs sm:text-sm text-[#4B5563] leading-relaxed border-t border-[#E5E7EB]">
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
