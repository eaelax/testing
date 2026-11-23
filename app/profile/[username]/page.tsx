'use client';

import { use } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { getCreatorByUsername } from '@/lib/creators-data';
import { useI18n } from '@/lib/i18n/context';
import { getLocalizedCreator } from '@/lib/i18n/creators-i18n';

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export default function CreatorProfilePage({ params }: Props) {
  const { username } = use(params);
  const decodedUsername = decodeURIComponent(username).replace(/^@/, '');
  const creator = getCreatorByUsername(decodedUsername);

  const { lang, t } = useI18n();
  const loc = creator ? getLocalizedCreator(creator, lang) : null;

  const displayName = loc ? loc.displayName : decodedUsername;
  const pageTitle = creator
    ? `${displayName} (@${creator.username}) TikTok Profile - Tik Profiles Viewer`
    : `@${decodedUsername} TikTok Profile & Videos - Tik Profiles Viewer`;

  const heroTitle = creator
    ? `${displayName} (@${creator.username})`
    : `@${decodedUsername} TikTok Profile`;

  const heroSubtitle = loc?.bio
    ? loc.bio
    : t('toolPage.profileFaq.fallbackSubtitle', { username: decodedUsername });

  const faqItems = [
    {
      question: t('toolPage.profileFaq.q1', { username: decodedUsername }),
      answer: t('toolPage.profileFaq.a1', { username: decodedUsername }),
    },
    {
      question: t('toolPage.profileFaq.q2', { username: decodedUsername }),
      answer: t('toolPage.profileFaq.a2', { username: decodedUsername }),
    },
    {
      question: t('toolPage.profileFaq.q3', { username: decodedUsername }),
      answer: t('toolPage.profileFaq.a3', { username: decodedUsername }),
    },
  ];

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: displayName,
      alternateName: `@${decodedUsername}`,
      identifier: decodedUsername,
      description: heroSubtitle,
      interactionStatistic: [
        {
          '@type': 'InteractionCounter',
          interactionType: 'https://schema.org/FollowAction',
          userInteractionCount: creator?.followerCount || 0,
        },
      ],
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <title>{pageTitle}</title>
      <meta name="description" content={heroSubtitle} />
      <link
        rel="canonical"
        href={`https://tikprofilesviewer.com/profile/${decodedUsername}`}
      />

      <Navbar />

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs
            items={[
              {
                label: 'Creators',
                href: '/creators',
                translationKey: 'breadcrumb.creators',
              },
              { label: `@${decodedUsername}` },
            ]}
          />
        </div>
      </div>

      <main className="flex-1 w-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />

        <TikTokProfileViewer
          initialUsername={decodedUsername}
          autoSearch={true}
          heroVariant="workbench"
          title={heroTitle}
          subtitle={heroSubtitle}
        />

        {/* Profile FAQs Band */}
        <section className="w-full bg-[var(--surface-sunken)] border-t border-[var(--border-subtle)] py-10 sm:py-12 mt-auto">
          <div className="max-w-[1120px] mx-auto px-4 sm:px-6">
            <div className="text-center max-w-xl mx-auto mb-6">
              <h2 className="text-2xl sm:text-3xl font-black text-[var(--ink-primary)] tracking-tight">
                {t('page.profile.faqHeading')}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {faqItems.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                >
                  <h3 className="text-sm font-extrabold text-[var(--ink-primary)]">
                    {faq.question}
                  </h3>
                  <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}