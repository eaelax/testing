import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Acceptable Use Policy - Tik Profiles Viewer',
  description:
    'Acceptable Use Policy for Tik Profiles Viewer on TikProfilesViewer.com. Outlines prohibited conduct, network etiquette, anti-abuse rules, and scraping restrictions.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/acceptable-use-policy',
  },
};

export default function AcceptableUsePolicyPage() {
  return (
    <LegalLayout
      title="Acceptable Use Policy"
      subtitle="The rules of conduct, ethical standards, and prohibited technical practices required of all visitors on TikProfilesViewer.com."
      summary="Tik Profiles Viewer is engineered for peaceful, respectful, and lawful exploration of public social media content. We strictly prohibit harassment, stalking, automated scraping, denial-of-service abuse, and malicious activities."
      currentPath="/acceptable-use-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Purpose and Scope</h2>
        <p>
          This Acceptable Use Policy (&quot;AUP&quot;) governs all interactions with <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>). It applies to all users, automated systems, and network connections interacting with our web application, APIs, or infrastructure.
        </p>
        <p>
          Our mission is to maintain a safe, reliable, and respectful environment for creators and visitors alike. Violations of this policy may result in immediate IP banning, firewall rate-limiting, and referral to law enforcement where criminal misconduct occurs.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Prohibited Personal Conduct</h2>
        <p>When utilizing our Service, you agree that you will NOT engage in any of the following activities:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Harassment &amp; Cyberbullying:</strong> Using our viewer to stalk, intimidate, bully, threaten, dox, or harass any individual creator or private person.
          </li>
          <li>
            <strong>Impersonation &amp; Deception:</strong> Impersonating another person, brand, or entity, or falsely representing that you are authorized to act on behalf of a public figure or company.
          </li>
          <li>
            <strong>Dissemination of Hate Speech:</strong> Downloading, repackaging, or redistributing content to promote violence, discrimination, or hate speech against protected classes.
          </li>
          <li>
            <strong>Child Exploitation:</strong> Accessing, searching for, or attempting to distribute any material depicting the sexual exploitation or abuse of minors. We maintain zero tolerance and immediately report such incidents to NCMEC and international law enforcement.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Prohibited Technical and Infrastructure Activities</h2>
        <p>To safeguard the stability, speed, and availability of our web service for everyone, you agree that you will NOT:</p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Aggressive Scraping:</strong> Deploy headless browsers, automated bots, scrapers, spider scripts, or high-frequency automated tools to harvest media, usernames, or metrics without our explicit written permission.
          </li>
          <li>
            <strong>Denial-of-Service (DoS/DDoS):</strong> Flood our servers with excessive network requests, execute stress testing, or take any action that overburdens or disables our cloud infrastructure.
          </li>
          <li>
            <strong>Vulnerability Exploitation:</strong> Probe, scan, or test the vulnerability of our application, servers, proxies, or networks, or breach security or authentication controls.
          </li>
          <li>
            <strong>Reverse Engineering:</strong> Decompile, reverse engineer, or attempt to extract the source code of our backend proxy routing mechanisms.
          </li>
          <li>
            <strong>Ad-Fraud and Bot Traffic:</strong> Generate simulated impressions, fraudulent clicks, or artificial traffic across any advertising placements hosted on the Website.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Monitoring and Enforcement</h2>
        <p>
          We employ automated edge firewall filters, Web Application Firewalls (WAF), and heuristic anomaly detection to monitor traffic patterns for malicious behavior.
        </p>
        <p>
          We reserve the right to temporarily or permanently block any IP address, subnet, or autonomous system number (ASN) that demonstrates activity violating this policy, without prior warning or liability.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Reporting Abuse</h2>
        <p>
          If you observe any user or technical activity that violates this Acceptable Use Policy, please report it immediately to our security operations team at <strong>legal@tikprofilesviewer.com</strong>.
        </p>
      </section>
    </LegalLayout>
  );
}
