import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Public Content Policy - Tik Profiles Viewer',
  description:
    'Our public content policy explaining how Tik Profiles Viewer accesses and displays only publicly available social media data without circumventing privacy controls.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/public-content-policy',
  },
};

export default function PublicContentPolicyPage() {
  return (
    <LegalLayout
      title="Public Content Policy"
      subtitle="How Tik Profiles Viewer identifies, accesses, and displays only publicly available social media data."
      summary="Tik Profiles Viewer strictly interacts with content that creators have chosen to make publicly accessible to the open internet. We do not bypass private accounts, age-gates, or digital security barriers."
      currentPath="/public-content-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Principle of Public Domain Availability</h2>
        <p>
          The architecture of <strong>Tik Profiles Viewer</strong> is grounded in the foundational internet principle of open accessibility. When social media creators configure their user accounts as &quot;Public&quot; and publish videos, captions, and profile photos to the web, that content is indexed and made accessible to web browsers globally without requiring account creation.
        </p>
        <p>
          Our service functions as an open web browser proxy and viewer interface that reads this publicly reachable information on-demand when a user initiates a search.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Strict Limitations on Content Access</h2>
        <p>We enforce strict technical boundaries regarding what our tools can and cannot access:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Private Accounts:</strong> If a creator has designated their TikTok account as &quot;Private&quot;, our system cannot, does not, and will never attempt to access, decrypt, or display their media or statistics.
          </li>
          <li>
            <strong>Deleted Content:</strong> Once a creator deletes a video or removes an account, our tools can no longer resolve the stream once third-party edge caches refresh.
          </li>
          <li>
            <strong>Friends-Only and Restricted Media:</strong> We cannot access posts shared exclusively with approved mutual followers or direct messages.
          </li>
          <li>
            <strong>No Circumvention:</strong> We never bypass, crack, or interfere with digital rights management (DRM), authentication tokens, or access controls.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Respect for Creator Privacy Choices</h2>
        <p>
          We firmly believe that creators retain ultimate control over their digital footprint. If you are a content creator and wish to prevent your public content from appearing in our web index, you have two simple options:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li>Switch your TikTok account settings to &quot;Private&quot; within the official TikTok application. This immediately blocks our service from retrieving your media.</li>
          <li>Submit an exclusion request to our compliance team under our <a href="/content-removal-policy" className="text-blue-600 hover:underline font-semibold">Content Removal Policy</a> to have your profile handle added to our internal blocklist.</li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Policy Contact</h2>
        <p>
          For questions regarding our public data handling or our technical indexing methodology, please reach out to <strong>legal@tikprofilesviewer.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}
