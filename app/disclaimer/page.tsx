import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Disclaimer - Tik Profiles Viewer',
  description:
    'General and technical disclaimer for Tik Profiles Viewer on TikProfilesViewer.com. Important notice regarding data accuracy, third-party availability, and informational usage.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/disclaimer',
  },
};

export default function DisclaimerPage() {
  return (
    <LegalLayout
      title="General Disclaimer"
      subtitle="Important legal clarification regarding information accuracy, metrics estimates, and third-party platform limitations."
      summary="All profile data, follower counts, and video metrics displayed on Tik Profiles Viewer are retrieved from public endpoints for informational purposes only. We cannot guarantee real-time accuracy, completeness, or uninterrupted availability."
      currentPath="/disclaimer"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Informational Purpose Only</h2>
        <p>
          The information and utility services provided by <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>) are intended exclusively for general informational, educational, and personal archival purposes.
        </p>
        <p>
          Nothing contained on this Website constitutes professional social media marketing consulting, investment advice, brand endorsement, or binding contractual guarantees of creator reach, earnings, or performance.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Accuracy and Timeliness of Public Data</h2>
        <p>
          The metrics displayed on our Website including follower tallies, following numbers, aggregate like counts, video titles, view counts, and engagement percentages are retrieved from publicly accessible third-party network endpoints.
        </p>
        <p>Because social media metrics fluctuate continuously and can be affected by API caching cycles, algorithm adjustments, or third-party rate limits:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Statistics may occasionally be delayed, estimated, rounded, or temporarily inaccurate compared to real-time mobile app telemetry.</li>
          <li>Accounts that have recently switched privacy settings, changed usernames, or been suspended by the platform may return cached or blank results.</li>
          <li>Calculated engagement rates and creator earnings figures represent mathematical estimates based on industry benchmarks, not audited financial records.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Non-Affiliation and Independence</h2>
        <p>
          Tik Profiles Viewer is an independent online web utility. We are not affiliated, associated, authorized, endorsed by, or in any way officially connected with TikTok, ByteDance Ltd., Musical.ly, or any of their subsidiaries or corporate affiliates.
        </p>
        <p>
          The official TikTok website is accessible at <code>www.tiktok.com</code>. The name &quot;TikTok&quot; as well as related names, marks, emblems, and logos are registered trademarks of their respective owners.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Third-Party Content and Copyright Responsibility</h2>
        <p>
          Tik Profiles Viewer does not own, produce, monitor, or claim copyright over third-party videos, photographs, audio tracks, or captions displayed via our service.
        </p>
        <p>
          All intellectual property rights in published media remain with the respective creators and content owners. Users of our service are solely responsible for ensuring that their downloading, viewing, and personal use of any media complies with applicable local and international copyright regulations.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. &quot;Use at Your Own Risk&quot; Clause</h2>
        <p>
          YOU EXPRESSLY UNDERSTAND AND AGREE THAT YOUR USE OF TIK PROFILES VIEWER IS AT YOUR SOLE RISK. THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. WE EXPRESSLY DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
        </p>
        <p>
          WE MAKE NO WARRANTY THAT THE SERVICE WILL MEET YOUR REQUIREMENTS, BE UNINTERRUPTED, SECURE, ACCURATE, OR ERROR-FREE, OR THAT ANY DEFECTS WILL BE PROMPTLY CORRECTED.
        </p>
      </section>
    </LegalLayout>
  );
}
