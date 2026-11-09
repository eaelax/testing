import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Terms of Service - Tik Profiles Viewer',
  description:
    'Terms of Service and conditions for using Tik Profiles Viewer on TikProfilesViewer.com. Learn your rights and obligations when using our anonymous TikTok profile viewer and downloader.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/terms-of-service',
  },
};

export default function TermsOfServicePage() {
  return (
    <LegalLayout
      title="Terms of Service"
      subtitle="The binding terms, rules, and conditions governing access to and use of Tik Profiles Viewer on TikProfilesViewer.com."
      summary="By accessing or using Tik Profiles Viewer, you agree to these Terms of Service. Our service allows users to inspect public creator profiles and download public media for personal, non-commercial use in compliance with applicable laws."
      currentPath="/terms-of-service"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
        <p>
          Welcome to Tik Profiles Viewer, accessible at <strong>TikProfilesViewer.com</strong> (&quot;Website&quot;, &quot;Service&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;). These Terms of Service constitute a legally binding agreement between you (&quot;User&quot;, &quot;you&quot;, or &quot;your&quot;) and the operators of Tik Profiles Viewer.
        </p>
        <p>
          By visiting, accessing, browsing, or utilizing any features of our Website, you explicitly acknowledge that you have read, understood, and agreed to be bound by these Terms of Service, as well as our Privacy Policy, Cookie Policy, Acceptable Use Policy, and Copyright Policy. If you do not agree to all terms and conditions set forth herein, you must immediately cease all access and use of the Service.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Description of the Service</h2>
        <p>
          Tik Profiles Viewer is a web-based educational and utility platform designed to allow visitors to view publicly accessible information from the TikTok social media network. The features offered on the Website include:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Viewing publicly available creator profile avatars, display names, bios, follower figures, following statistics, and total likes.</li>
          <li>Streaming publicly published short-form video content without logging into an account.</li>
          <li>Saving original high-definition video files (MP4) and audio sound tracks (MP3) for personal, offline, and archival use.</li>
          <li>Accessing creator tools such as engagement rate estimators and video metrics calculators.</li>
        </ul>
        <p>
          Our Service only indexes and proxies data that is already publicly visible on the open internet. We do not provide access to private accounts, deleted videos, geo-restricted media, or content behind account authentication walls.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Permitted and Non-Commercial Use</h2>
        <p>
          You are granted a limited, revocable, non-exclusive, non-transferable license to access and use the Website solely for personal, non-commercial, and lawful purposes. You agree that any videos, audios, images, or metrics retrieved through our Service will not be resold, repackaged, redistributed, broadcast, or commercially exploited in violation of third-party intellectual property rights.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. User Covenants and Prohibited Activities</h2>
        <p>When using Tik Profiles Viewer, you expressly warrant and agree that you will not:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Use the Service for any unlawful, fraudulent, defamatory, harassing, or malicious purpose.</li>
          <li>Attempt to bypass, disable, circumvent, or compromise the technical infrastructure, rate limits, or security controls of the Website.</li>
          <li>Deploy automated scrapers, bots, crawlers, or high-concurrency request engines that disrupt server performance or impose an unreasonable load on our infrastructure.</li>
          <li>Download or distribute copyright-protected media for commercial monetization without explicit authorization from the original content owner.</li>
          <li>Impersonate any person or entity, or falsely claim affiliation with TikTok, ByteDance, or Tik Profiles Viewer.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Intellectual Property Rights and Ownership</h2>
        <p>
          All trademarks, logos, brand names, service marks, software code, site layout, designs, text, and graphics created by Tik Profiles Viewer are the exclusive intellectual property of Tik Profiles Viewer.
        </p>
        <p>
          All TikTok trademarks, logos, sound recordings, and creator videos displayed or streamed via the Website remain the property of their respective creators and ByteDance Ltd. We do not claim any proprietary rights over content published by third parties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Third-Party Links, APIs, and External Infrastructure</h2>
        <p>
          The Service may retrieve information from third-party networks and APIs. We have no direct control over the content, uptime, availability, privacy policies, or practices of third-party platforms. You acknowledge that we shall not be responsible or liable, directly or indirectly, for any damage or loss caused by your interaction with external third-party services.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">7. Disclaimer of Warranties</h2>
        <p>
          THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE. TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, ERROR-FREE, OR VIRUS-FREE.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">8. Limitation of Liability</h2>
        <p>
          IN NO EVENT SHALL TIK PROFILES VIEWER, ITS OPERATORS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFITS, LOST REVENUE, DATA LOSS, OR SYSTEM DAMAGE ARISING FROM YOUR USE OF THE SERVICE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">9. Modifications to the Service and Terms</h2>
        <p>
          We reserve the right to modify, alter, suspend, or discontinue any aspect of the Service at our sole discretion without prior notice. We may update these Terms of Service periodically to reflect changes in our legal obligations, service enhancements, or regulatory requirements. Continued use of the Website after any revision constitutes your full acceptance of the updated terms.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">10. Governing Law and Severability</h2>
        <p>
          These Terms of Service shall be governed by and construed in accordance with applicable general commercial laws, without regard to conflict of law principles. If any provision of these Terms is determined by a court of competent jurisdiction to be invalid or unenforceable, that provision shall be severed, and the remaining provisions shall continue in full force and effect.
        </p>
      </section>
    </LegalLayout>
  );
}
