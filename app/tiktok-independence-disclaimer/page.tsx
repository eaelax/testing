import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'TikTok Independence Disclaimer - Tik Profiles Viewer',
  description:
    'Official statement of non-affiliation and independence regarding TikTok Inc., ByteDance Ltd., and third-party trademarks on TikProfilesViewer.com.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/tiktok-independence-disclaimer',
  },
};

export default function TikTokIndependenceDisclaimerPage() {
  return (
    <LegalLayout
      title="TikTok Independence Disclaimer"
      subtitle="Clear and unambiguous disclosure regarding our autonomous operational status and lack of corporate affiliation with ByteDance or TikTok."
      summary="Tik Profiles Viewer is an entirely independent web platform. We are not owned, operated, authorized, endorsed, sponsored, or affiliated with TikTok Inc., ByteDance Ltd., or any of their global subsidiaries."
      currentPath="/tiktok-independence-disclaimer"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Formal Statement of Independence</h2>
        <p>
          <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>) is an autonomous web service engineered and maintained by an independent group of web developers and enthusiasts.
        </p>
        <p>
          We explicitly affirm that our Website, software, brand identity, and operations are <strong>not affiliated with, associated with, authorized by, endorsed by, or in any way officially connected with TikTok Inc., ByteDance Ltd., Musical.ly, or any of their subsidiary corporate entities</strong>.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Trademark and Brand Ownership</h2>
        <p>
          The word mark &quot;TikTok&quot;, the stylized music note logo, and all related brand assets, trade dress, product names, and company emblems are registered trademarks owned exclusively by ByteDance Ltd. and its affiliates.
        </p>
        <p>
          Any use of the word &quot;TikTok&quot; on TikProfilesViewer.com is made strictly for <strong>descriptive, nominative, and identification purposes</strong> to truthfully indicate the third-party platform whose publicly accessible profile information our utility is engineered to display. Such nominative usage constitutes protected fair use and does not suggest any corporate partnership, sponsorship, or licensing arrangement.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Official Channels and Inquiries</h2>
        <p>
          For official TikTok customer support, safety inquiries, creator program enrollment, advertising accounts, or to download the official mobile apps, please consult the official TikTok platforms:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Official Website:</strong> <code>https://www.tiktok.com</code></li>
          <li><strong>Official Newsroom:</strong> <code>https://newsroom.tiktok.com</code></li>
          <li><strong>Help &amp; Support Portal:</strong> <code>https://support.tiktok.com</code></li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Consumer Clarity</h2>
        <p>
          By using Tik Profiles Viewer, you confirm your understanding that you are using an independent third-party web tool. If you have questions regarding our operational independence or this disclosure, please contact our legal team at <strong>legal@tikprofilesviewer.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}
