import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Privacy Policy - Tik Profiles Viewer',
  description:
    'Read the Privacy Policy of Tik Profiles Viewer on TikProfilesViewer.com. Learn how we protect your privacy, handle temporary server logs, and manage Google AdSense cookie choices.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/privacy-policy',
  },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      title="Privacy Policy"
      subtitle="How Tik Profiles Viewer protects your privacy, handles server logs, and explains advertising cookies in clear Plain English."
      summary="Tik Profiles Viewer does not ask you to sign up, log in, or share personal details. We only process temporary technical logs needed to run the site safely, and you control your cookie and ad choices."
      currentPath="/privacy-policy"
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          1. Overview
        </h2>
        <p>
          Welcome to <strong>Tik Profiles Viewer</strong> at <strong>TikProfilesViewer.com</strong>. We built this website so anyone can view public TikTok profiles and download public media without creating an account.
        </p>
        <p>
          This policy explains what information is processed when you visit our site, how cookies work, and how you can control your privacy choices.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          2. Information We Do Not Collect
        </h2>
        <p>We do not ask for or store personal account details. In particular, we do not collect:</p>
        <ul className="list-disc ps-5 space-y-1.5 text-[var(--ink-secondary)]">
          <li><strong>Personal Identity Details:</strong> We do not ask for your name, home address, or phone number to use the viewer.</li>
          <li><strong>TikTok Logins:</strong> We never ask for your TikTok username, password, or private account tokens.</li>
          <li><strong>Personal Search History:</strong> We do not build personal profiles of the creators you search for or the files you download.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          3. Temporary Server Logs and Contact Emails
        </h2>
        <p>
          Like most websites, our servers automatically create short-term technical logs to keep the site fast and safe from abuse or heavy bot traffic. These logs may include:
        </p>
        <ul className="list-disc ps-5 space-y-1.5 text-[var(--ink-secondary)]">
          <li>Your IP address (used for security rate limits and removed on a rolling schedule).</li>
          <li>Your browser type, device type, and screen size.</li>
          <li>The page you requested, date, time, and HTTP status code.</li>
        </ul>
        <p>
          If you email us directly for support or a removal request, we only use your email address and message to reply to you and handle your request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          4. Cookies and Browser Storage
        </h2>
        <p>
          We use browser LocalStorage on your device to remember your simple site settings, such as your selected language or admin tool settings. This data stays in your browser.
        </p>
        <p>
          You can read the full breakdown in our{' '}
          <Link
            href="/cookie-policy"
            className="text-[var(--accent-primary-text)] font-semibold hover:underline"
          >
            Cookie Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          5. Google AdSense and Advertising Cookies
        </h2>
        <p>
          To keep our tools free for everyone, we may show ads through <strong>Google AdSense</strong> and approved third-party ad partners.
        </p>
        <ul className="list-disc ps-5 space-y-1.5 text-[var(--ink-secondary)]">
          <li>Third-party vendors, including Google, use cookies to serve ads based on your prior visits to this website or other websites.</li>
          <li>Google uses advertising cookies to show either personalized ads or non-personalized ads depending on your consent choice and region.</li>
          <li>
            You can opt out of personalized advertising at any time by visiting{' '}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[var(--accent-primary-text)] font-semibold hover:underline"
            >
              Google Ads Settings
            </a>
            .
          </li>
          <li>
            You can also opt out of third-party vendor cookies for personalized ads by visiting{' '}
            <a
              href="https://www.aboutads.info/choices/"
              target="_blank"
              rel="noreferrer noopener"
              className="text-[var(--accent-primary-text)] font-semibold hover:underline"
            >
              www.aboutads.info
            </a>
            .
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          6. Third-Party Media Networks
        </h2>
        <p>
          When you watch a video or save a file, your browser loads public media from third-party content delivery networks. Those external hosts operate under their own privacy policies.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          7. Data Retention and Your Privacy Rights
        </h2>
        <p>
          We keep temporary security logs only as long as needed to protect the service. Depending on where you live (including the EEA, UK, or California), you have the right to:
        </p>
        <ul className="list-disc ps-5 space-y-1.5 text-[var(--ink-secondary)]">
          <li><strong>Access and Correction:</strong> Ask what personal data we hold from any email you sent us, and ask us to fix it.</li>
          <li><strong>Deletion:</strong> Ask us to delete emails you sent us, or clear cookies and LocalStorage directly in your browser.</li>
          <li><strong>Withdraw Consent:</strong> Turn off non-essential or personalized ad cookies at any time through your browser or Google Ads Settings.</li>
          <li><strong>No Sale of Data:</strong> We do not sell your personal information to data brokers.</li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          8. Children Under 13
        </h2>
        <p>
          This website is meant for general audiences and is not designed for children under 13. We do not knowingly collect personal information from children under 13. If you think a child sent us personal details by email, contact us so we can remove them right away.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          9. Operator Details and Policy Updates
        </h2>
        <p>
          We may update this Privacy Policy when our tools or legal rules change. Please confirm the owner fields below before public launch and consult a qualified lawyer if you need certified legal advice.
        </p>
        <div className="p-4 rounded-xl bg-[var(--surface-canvas)] border border-[var(--border-subtle)] text-xs space-y-1.5 text-[var(--ink-secondary)]">
          <p><strong className="text-[var(--ink-primary)]">Site Operator:</strong> [Owner / Company Legal Name]</p>
          <p><strong className="text-[var(--ink-primary)]">Official Contact Email:</strong> legal@tikprofilesviewer.com ([Official Contact Email])</p>
          <p><strong className="text-[var(--ink-primary)]">Jurisdiction:</strong> [Country / Jurisdiction]</p>
          <p><strong className="text-[var(--ink-primary)]">Effective Date:</strong> [Effective Date: November 2026]</p>
        </div>
      </section>
    </LegalLayout>
  );
}