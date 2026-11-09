import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Security Policy - Tik Profiles Viewer',
  description:
    'Security Policy and data protection overview for Tik Profiles Viewer on TikProfilesViewer.com. Learn about our SSL/TLS encryption, WAF architecture, and vulnerability response standards.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/security-policy',
  },
};

export default function SecurityPolicyPage() {
  return (
    <LegalLayout
      title="Security Policy"
      subtitle="The technical standards, encryption protocols, and administrative controls implemented to protect our web platform and users."
      summary="Tik Profiles Viewer prioritizes user security and system resilience. We employ modern HTTPS/TLS encryption, cloud DDoS mitigation, and regular security reviews to maintain a secure, safe environment."
      currentPath="/security-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Security Overview</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>), we recognize the critical importance of cybersecurity in maintaining a trustworthy web utility. Our security strategy incorporates defense-in-depth principles, combining transport encryption, perimeter defense, and strict client-side data boundaries.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Transport Layer Encryption (HTTPS/TLS)</h2>
        <p>
          All network communications between your web browser and our application are encrypted using <strong>Transport Layer Security (TLS 1.3 / TLS 1.2)</strong> with modern, high-grade cryptographic cipher suites.
        </p>
        <p>
          We enforce <strong>HTTP Strict Transport Security (HSTS)</strong> to guarantee that your browser never transmits data over unencrypted HTTP channels, protecting against man-in-the-middle (MitM) eavesdropping, packet sniffing, and unauthorized network tampering.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Cloud Edge Defense &amp; DDoS Mitigation</h2>
        <p>Our web application is protected by enterprise-tier edge security services that feature:</p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Distributed Denial-of-Service (DDoS) Shielding:</strong> Continuous network traffic analysis to absorb multi-gigabit volumetric attacks at edge points of presence.</li>
          <li><strong>Web Application Firewall (WAF):</strong> Automated inspection of incoming HTTP payloads to intercept SQL injection, cross-site scripting (XSS), and malicious payload anomalies.</li>
          <li><strong>Rate Limiting &amp; Bot Management:</strong> Heuristic throttling mechanisms that protect backend compute nodes against brute-force automated scraping.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Minimal Attack Surface &amp; Zero Personal Storage</h2>
        <p>
          The most effective method of safeguarding visitor data is simply not retaining it. By deliberate architectural design:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>We do not operate user account databases that could be subject to credential-stuffing attacks or data leaks.</li>
          <li>We do not store passwords, financial accounts, or payment card details on our infrastructure.</li>
          <li>Client preferences are stored exclusively on your local device via standard browser LocalStorage.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Continuous Vulnerability Management &amp; Patching</h2>
        <p>
          Our technical stack runs on modern Next.js and Node.js frameworks that receive automated dependency vulnerability scanning via automated continuous integration (CI) tools. Security patches, kernel updates, and runtime packages are regularly reviewed and deployed to mitigate emerging Common Vulnerabilities and Exposures (CVEs).
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">6. Responsible Vulnerability Disclosure</h2>
        <p>
          We welcome responsible security researchers who discover potential vulnerabilities in our website. If you identify a security issue, we ask that you adhere to responsible disclosure principles:
        </p>
        <ol className="list-decimal pl-5 space-y-1.5 text-slate-600">
          <li>Email details of the finding to <strong>legal@tikprofilesviewer.com</strong> with the subject <code>[Security Vulnerability Report]</code>.</li>
          <li>Provide reproducible steps, technical proofs-of-concept, and impacted endpoints.</li>
          <li>Allow us reasonable time to investigate, remediate, and patch the issue before making any public disclosures.</li>
          <li>Do not access or modify data belonging to other users or disrupt service operations during testing.</li>
        </ol>
      </section>
    </LegalLayout>
  );
}
