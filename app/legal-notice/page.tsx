import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Legal Notice (Impressum) - Tik Profiles Viewer',
  description:
    'Legal Notice and operator disclosures for Tik Profiles Viewer on TikProfilesViewer.com. Provider identification, corporate information, and contact details.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/legal-notice',
  },
};

export default function LegalNoticePage() {
  return (
    <LegalLayout
      title="Legal Notice"
      subtitle="Statutory provider identification, editorial responsibility, and official contact information for TikProfilesViewer.com."
      summary="Official legal notice and corporate identification for Tik Profiles Viewer, outlining service ownership, technical hosting, designated legal representatives, and contact avenues."
      currentPath="/legal-notice"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Service Provider Identification</h2>
        <p>
          Information provided pursuant to international electronic commerce and digital services disclosure standards:
        </p>

        <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2 text-sm text-slate-700">
          <p><strong>Web Service Name:</strong> Tik Profiles Viewer</p>
          <p><strong>Official Domain:</strong> <a href="https://tikprofilesviewer.com" className="text-blue-600 hover:underline">https://tikprofilesviewer.com</a></p>
          <p><strong>Nature of Service:</strong> Free online utility and anonymous viewer for publicly available social media profile information and content.</p>
          <p><strong>Primary Contact Email:</strong> <a href="mailto:support@tikprofilesviewer.com" className="text-blue-600 hover:underline">support@tikprofilesviewer.com</a></p>
          <p><strong>Legal &amp; DMCA Inquiries:</strong> <a href="mailto:legal@tikprofilesviewer.com" className="text-blue-600 hover:underline">legal@tikprofilesviewer.com</a></p>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Technical Hosting and Infrastructure</h2>
        <p>
          Tik Profiles Viewer is deployed across globally distributed cloud hosting infrastructure and edge content delivery networks (CDNs). Cloud hosting providers maintain physical server hardware in secure, ISO/IEC 27001-certified data center facilities across North America and Europe.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Editorial and Content Responsibility</h2>
        <p>
          As an automated technical search index and proxy service, Tik Profiles Viewer does not create, originate, edit, or curate third-party video uploads or creator profile biographies. All published media displayed on the service is retrieved on-demand from publicly accessible content distribution networks in direct response to user queries.
        </p>
        <p>
          The original creators who choose to publish their content publicly on third-party networks retain full editorial, civil, and criminal responsibility for their publications under applicable national laws.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Dispute Resolution and Contact Procedures</h2>
        <p>
          We are committed to resolving any legal concerns, copyright notices, or questions in a prompt and cooperative manner. If you believe any aspect of our service infringes your rights or violates applicable standards, please reach out directly:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>General Inquiries:</strong> <code>support@tikprofilesviewer.com</code></li>
          <li><strong>Copyright &amp; DMCA Takedown:</strong> <code>legal@tikprofilesviewer.com</code></li>
          <li><strong>Content Removal Requests:</strong> Submit via our <a href="/content-removal-policy" className="text-blue-600 hover:underline font-semibold">Content Removal Policy</a> channel.</li>
        </ul>
        <p className="text-xs text-slate-500">
          Our administrative compliance team aims to review and respond to formal legal correspondence within 24 to 48 business hours.
        </p>
      </section>
    </LegalLayout>
  );
}
