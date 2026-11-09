import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Tik Profiles Viewer',
  description:
    'Read the official Privacy Policy of Tik Profiles Viewer on TikProfilesViewer.com. We prioritize user anonymity and do not collect, harvest, or store personal visitor data.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Tik Profiles Viewer protects user privacy, ensures complete anonymity, and handles technical data."
      summary="We respect your privacy. Tik Profiles Viewer does not require user registration, does not collect personal identity information, does not record TikTok viewing histories, and operates as an anonymous viewer platform."
      currentPath="/privacy-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Overview and Core Philosophy</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>), visitor privacy is our foundational priority. Unlike conventional platforms, our service was specifically built to provide an anonymous and barrier-free utility for exploring public social media content.
        </p>
        <p>
          We do not require account sign-ups, email submissions, passwords, or credit card details. When you visit our Website, your session remains private and unlinked to any personal profile.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Information We Do NOT Collect</h2>
        <p>To provide full transparency, we explicitly confirm that we do NOT collect, harvest, store, or sell:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Personal Identifiers:</strong> We do not collect names, residential addresses, telephone numbers, or email addresses.</li>
          <li><strong>Account Credentials:</strong> We never request or store TikTok usernames, passwords, or login access tokens.</li>
          <li><strong>Private Viewing Histories:</strong> We do not log which creator profiles you search for or which specific video files you download.</li>
          <li><strong>Biometric Data:</strong> We do not capture or process facial geometry, voice signatures, or device biometric sensors.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Technical Server Logs and Telemetry</h2>
        <p>
          Like virtually all web applications running modern cloud infrastructure, our web servers automatically generate standard, ephemeral technical log entries for network routing and security protection. These logs may temporarily record:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Internet Protocol (IP) address (truncated or anonymized where applicable for rate-limiting protection).</li>
          <li>Browser user agent string, operating system version, and device viewport specifications.</li>
          <li>Referring URLs, requested resource paths, and standard HTTP response status codes.</li>
          <li>Date, time, and duration of incoming network requests.</li>
        </ul>
        <p>
          These technical logs are strictly utilized for preventing denial-of-service (DDoS) abuse, mitigating malicious traffic, diagnosing server crashes, and maintaining optimal bandwidth capacity. These logs are automatically purged on a scheduled rolling cycle.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Third-Party Networks and External CDNs</h2>
        <p>
          When you request public TikTok media via our interface, our system coordinates with public content delivery networks (CDNs) to fetch the requested public stream. Third-party content hosts may independently receive standard network requests generated when your browser plays or downloads video streams.
        </p>
        <p>
          We strongly advise reviewing the independent privacy policies of any third-party services you engage with across the web to understand their individual data handling standards.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Advertising Partners and Analytics</h2>
        <p>
          To maintain Tik Profiles Viewer as a 100% free service for everyone without charging subscription fees, our Website may display advertisements configured through reputable advertising networks such as Google AdSense.
        </p>
        <p>
          These advertising partners may use non-sensitive identifiers, standard cookies, or web beacons to deliver non-personalized or personalized advertisements based on your browsing interests in accordance with industry-standard privacy frameworks (such as IAB TCF and Google Privacy Controls). You have the right to disable personalized advertising through your browser settings or via the Digital Advertising Alliance consumer choice portal.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Local Storage and Client-Side Preferences</h2>
        <p>
          We utilize standard web browser LocalStorage exclusively for client-side user preferences, such as remembering your chosen language, selected dark/light visual settings, and administrator dashboard preferences. This data remains on your physical device and is never transmitted to our backend databases.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">7. Protection of Minors (COPPA Compliance)</h2>
        <p>
          Our Website is a general-audience utility service and is not directed to children under the age of 13. We do not knowingly solicit, collect, or store personal information from children under 13 years of age. If you become aware that a child has provided us with personal information, please notify us immediately at <strong>legal@tikprofilesviewer.com</strong> so we can take prompt corrective action.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">8. User Rights (GDPR &amp; CCPA/CPRA)</h2>
        <p>
          Depending on your geographical jurisdiction (including the European Economic Area, United Kingdom, and California), you may be entitled to certain statutory privacy rights:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Right to Know / Access:</strong> Since we do not collect personal identifiers, we hold no user profiles or identifiable visitor data.</li>
          <li><strong>Right to Deletion:</strong> You may clear your browser cookies and LocalStorage at any time to remove all local website preferences.</li>
          <li><strong>Right to Opt-Out:</strong> We do not sell personal information as defined under the California Consumer Privacy Act (CCPA).</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">9. Privacy Policy Updates</h2>
        <p>
          We may update this Privacy Policy from time to time to maintain compliance with relevant data protection statutes and emerging technical requirements. Any updates will be published directly on this page with a revised date stamp.
        </p>
      </section>
    </LegalLayout>
  );
}
