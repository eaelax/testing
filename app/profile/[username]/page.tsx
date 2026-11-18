import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumbs from '@/components/Breadcrumbs';
import TikTokProfileViewer from '@/components/TikTokProfileViewer';
import { getCreatorByUsername } from '@/lib/creators-data';

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { username } = await params;
  const decodedUsername = decodeURIComponent(username).replace(/^@/, '');
  const creator = getCreatorByUsername(decodedUsername);

  const title = creator
    ? `${creator.displayName} (@${creator.username}) TikTok Profile - Tik Profiles Viewer`
    : `@${decodedUsername} TikTok Profile & Videos - Tik Profiles Viewer`;

  const description = creator
    ? `Watch and download @${creator.username}'s TikTok videos in HD MP4 without watermarks. View ${creator.followers} followers and MP3 audio tracks on TikProfilesViewer.com.`
    : `Watch and download @${decodedUsername}'s TikTok videos in watermark-free HD MP4 and MP3 audio on TikProfilesViewer.com.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'profile',
      url: `https://tikprofilesviewer.com/profile/${decodedUsername}`,
      images: creator?.avatar ? [{ url: creator.avatar, alt: creator.displayName }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://tikprofilesviewer.com/profile/${decodedUsername}`,
    },
  };
}

export default async function CreatorProfilePage({ params }: Props) {
  const { username } = await params;
  const decodedUsername = decodeURIComponent(username).replace(/^@/, '');
  const creator = getCreatorByUsername(decodedUsername);

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    mainEntity: {
      '@type': 'Person',
      name: creator ? creator.displayName : decodedUsername,
      alternateName: `@${decodedUsername}`,
      identifier: decodedUsername,
      description: creator?.bio || `TikTok creator @${decodedUsername}`,
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
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I download @${decodedUsername}'s TikTok videos without watermark?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Click any video in @${decodedUsername}'s grid above and click Download HD Video. The video saves directly to your device without watermark.`,
        },
      },
      {
        '@type': 'Question',
        name: `Can I download audio tracks from @${decodedUsername} in MP3?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes. Open any video and click Download Audio (MP3) to save the audio file.`,
        },
      },
      {
        '@type': 'Question',
        name: `Is viewing @${decodedUsername}'s profile anonymous?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: `Yes, 100% anonymous. You do not need a TikTok account, and the creator will never know you viewed their profile.`,
        },
      },
    ],
  };

  const heroTitle = creator
    ? `${creator.displayName} (@${creator.username})`
    : `@${decodedUsername} TikTok Profile`;

  const heroSubtitle = creator?.bio
    ? creator.bio
    : `Watch and download @${decodedUsername}'s public TikTok videos in watermark-free HD MP4 and MP3 audio.`;

  return (
    <div className="min-h-screen flex flex-col bg-[var(--surface-canvas)] text-[var(--ink-primary)]">
      <Navbar />

      <div className="w-full bg-[var(--surface-canvas)] border-b border-[var(--border-subtle)]">
        <div className="max-w-[1120px] mx-auto px-4 sm:px-6 pt-3 pb-0.5">
          <Breadcrumbs
            items={[
              { label: 'Creators', href: '/creators' },
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
                Frequently Asked Questions
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {faqSchema.mainEntity.map((faq, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-xl bg-[var(--surface-elevated)] border border-[var(--border-subtle)] shadow-[var(--shadow-card)] flex flex-col gap-1.5"
                >
                  <h3 className="text-sm font-extrabold text-[var(--ink-primary)]">{faq.name}</h3>
                  <p className="text-xs sm:text-[13px] text-[var(--ink-secondary)] leading-relaxed">
                    {faq.acceptedAnswer.text}
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