import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Copyright & DMCA Policy - Tik Profiles Viewer',
  description:
    'Copyright and Digital Millennium Copyright Act (DMCA) policy for Tik Profiles Viewer on TikProfilesViewer.com. Learn our intellectual property policies and how to submit copyright notices.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/copyright-policy',
  },
};

export default function CopyrightPolicyPage() {
  return (
    <LegalLayout
      title="Copyright &amp; DMCA Policy"
      subtitle="Our intellectual property principles, respect for creator ownership, and formal procedures for submitting copyright infringement notices."
      summary="Tik Profiles Viewer respects creator intellectual property rights. We do not host media on our own storage servers. If you are a copyright owner and wish to request removal of content from our search index, follow our formal DMCA procedure below."
      currentPath="/copyright-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Statement of Principle</h2>
        <p>
          <strong>Tik Profiles Viewer</strong> (&quot;we&quot;, &quot;us&quot;, &quot;our&quot;) strongly respects the intellectual property rights of content creators, authors, musicians, and rights holders worldwide. It is our strict policy to respond promptly to clear, valid notices of alleged copyright infringement in compliance with the Digital Millennium Copyright Act (DMCA, 17 U.S.C. § 512), the European Union Copyright Directive, and international intellectual property treaties.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Technical Nature of Our Service (No File Hosting)</h2>
        <p>
          To understand our copyright framework, please note our technical architecture:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Tik Profiles Viewer operates as an automated index, client-side player, and public proxy tool.</li>
          <li>We do <strong>not</strong> maintain permanent file storage, media servers, or video databases hosting creator media on our servers.</li>
          <li>All videos, audio tracks, and images previewed or downloaded through the Website originate from third-party public content delivery networks (CDNs) where the content was published by the original TikTok user.</li>
          <li>When a video is deleted or set to private on TikTok by its original author, it naturally becomes inaccessible through our tool once CDN caches expire.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Requirements for Submitting a Formal DMCA Takedown Notice</h2>
        <p>
          If you are the copyright owner, or an authorized agent designated to act on behalf of the owner of an exclusive right, and you believe that content accessible through TikProfilesViewer.com infringes upon your copyright, you may submit a formal written notice to our Designated Copyright Agent at <strong>legal@tikprofilesviewer.com</strong>.
        </p>
        <p>To be effective under 17 U.S.C. § 512(c)(3), your notice must include ALL of the following:</p>
        <ol className="list-decimal pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Physical or Electronic Signature:</strong> A physical or electronic signature of a person authorized to act on behalf of the owner of an exclusive copyright right that is allegedly infringed.
          </li>
          <li>
            <strong>Identification of the Copyrighted Work:</strong> A clear description of the copyrighted work claimed to have been infringed (or if multiple works are covered by a single notification, a representative list of such works).
          </li>
          <li>
            <strong>Identification of the Infringing Material:</strong> Specific URLs or precise identifiers on TikProfilesViewer.com or TikTok that allow our technical team to locate and verify the material in question.
          </li>
          <li>
            <strong>Contact Information:</strong> Information reasonably sufficient to permit us to contact you, such as your full legal name, physical address, telephone number, and official email address.
          </li>
          <li>
            <strong>Good Faith Statement:</strong> A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or the law (such as fair use).
          </li>
          <li>
            <strong>Accuracy and Perjury Statement:</strong> A statement made under penalty of perjury that the information in the notification is accurate, and that you are authorized to act on behalf of the owner of an exclusive right that is allegedly infringed.
          </li>
        </ol>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Processing and Response Timelines</h2>
        <p>
          Upon receipt of a substantially compliant DMCA notice, our legal team will:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Review the request within 24 to 48 business hours.</li>
          <li>Block or remove the identified URLs from our search indexing and caching layers.</li>
          <li>Provide written confirmation of the action taken to the notifying rights holder.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Designated Copyright Agent Contact</h2>
        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-sm space-y-1.5 text-slate-700">
          <p><strong>Designated Agent:</strong> Copyright &amp; IP Compliance Officer</p>
          <p><strong>Service:</strong> Tik Profiles Viewer</p>
          <p><strong>Email Address:</strong> <a href="mailto:legal@tikprofilesviewer.com" className="text-blue-600 font-semibold hover:underline">legal@tikprofilesviewer.com</a></p>
          <p><strong>Subject Line Requirement:</strong> Please format the email subject as <code>[DMCA Notice] - Copyright Claim - &lt;Title/URL&gt;</code></p>
        </div>
      </section>
    </LegalLayout>
  );
}
