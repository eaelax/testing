import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Content Review & Removal Policy - Tik Profiles Viewer',
  description:
    'Content removal policy and submission guidelines for Tik Profiles Viewer on TikProfilesViewer.com. Learn how creators and rights holders can request profile exclusion or content removal.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/content-removal-policy',
  },
};

export default function ContentRemovalPolicyPage() {
  return (
    <LegalLayout
      title="Content Review &amp; Removal Policy"
      subtitle="Clear, fair, and accessible procedures for content creators, rights owners, and individuals requesting content review or exclusion."
      summary="We provide an open, transparent pathway for creators and individuals to request that their profiles, videos, or personal information be excluded from Tik Profiles Viewer search results and proxy indexes."
      currentPath="/content-removal-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Our Commitment to Fair Digital Removal</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong>, we believe every creator and individual should have a clear, uncomplicated mechanism to control how their public information is reflected on third-party viewer portals.
        </p>
        <p>
          While our platform only indexes media that is already publicly available on the internet, we honor legitimate requests to exclude profiles or remove specific video identifiers from our search index.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Valid Grounds for Removal Requests</h2>
        <p>We review and process removal requests based on the following legitimate grounds:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Creator Profile Exclusion:</strong> If you are the owner of a public TikTok account and do not wish your profile to be searchable on our website.
          </li>
          <li>
            <strong>Copyright &amp; Intellectual Property Infringement:</strong> Requests submitted by copyright owners pursuant to our <a href="/copyright-policy" className="text-blue-600 hover:underline">Copyright &amp; DMCA Policy</a>.
          </li>
          <li>
            <strong>Privacy &amp; Safety Concerns:</strong> Content involving minors, non-consensual media, inadvertent exposure of private addresses, phone numbers, or confidential personal data.
          </li>
          <li>
            <strong>Court Orders &amp; Regulatory Injunctions:</strong> Formal orders issued by courts of competent jurisdiction or recognized regulatory authorities.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. How to Submit a Removal Request</h2>
        <p>
          To expedite processing, please send your removal request to our compliance department at <strong>legal@tikprofilesviewer.com</strong> with the following details:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li><strong>Your TikTok Username / Handle:</strong> (e.g., <code>@yourcreatorname</code>) or specific video URL(s).</li>
          <li><strong>Verification of Ownership:</strong> Proof that you own or manage the account (such as sending the email from an address listed in the public bio, or confirming via a temporary unique phrase added to the profile bio).</li>
          <li><strong>Reason for Request:</strong> A brief explanation of the nature of the request (e.g., personal privacy, profile exclusion, copyright infringement).</li>
          <li><strong>Your Contact Information:</strong> Full name and contact email address for confirmation.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Processing Timelines and Resolution</h2>
        <p>
          Our team reviews removal requests on a daily basis. Most verified requests are processed within <strong>24 to 48 business hours</strong>.
        </p>
        <p>
          Once approved, your username or video ID is added to our system exclusion blocklist. Future searches for that username on TikProfilesViewer.com will return an unavailable status, preventing the display of avatars, bio details, and video media streams.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Important Technical Clarification</h2>
        <p>
          Excluding your profile from Tik Profiles Viewer removes access via our website, but does <strong>not</strong> delete your videos or account from the underlying TikTok platform or other third-party websites. To permanently remove your content from the internet, you must delete the video or adjust your privacy settings directly on TikTok.
        </p>
      </section>
    </LegalLayout>
  );
}
