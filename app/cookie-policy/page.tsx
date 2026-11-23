import type { Metadata } from 'next';
import Link from 'next/link';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy - Tik Profiles Viewer',
  description:
    'Cookie Policy for Tik Profiles Viewer on TikProfilesViewer.com. Learn what cookies and browser storage are used, why we use them, and how to turn them off.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Clear information about how cookies and browser storage work on TikProfilesViewer.com and how you can control them."
      summary="Tik Profiles Viewer uses basic browser storage to remember your preferences and keep the site safe. If ads are shown, advertising partners such as Google AdSense may also place cookies based on your browser and consent settings."
      currentPath="/cookie-policy"
    >
      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          1. What Are Cookies and Local Storage?
        </h2>
        <p>
          Cookies are small text files that a website saves on your phone, tablet, or computer when you visit a page. They help the site remember settings and stay secure.
        </p>
        <p>
          Modern browsers also provide <strong>LocalStorage</strong> and <strong>SessionStorage</strong>. These tools save your settings directly inside your browser so your choices stay ready without creating a user account.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          2. Cookie Categories Used on This Site
        </h2>
        <p>
          Below is a simple table showing each category, what it does, and how long data stays stored:
        </p>

        <div className="overflow-x-auto rounded-xl border border-[var(--border-subtle)] bg-[var(--surface-canvas)]">
          <table className="w-full text-start border-collapse text-xs">
            <thead>
              <tr className="border-b border-[var(--border-subtle)] bg-[var(--surface-sunken)] text-[var(--ink-primary)]">
                <th className="p-3 font-bold text-start">Category</th>
                <th className="p-3 font-bold text-start">Purpose</th>
                <th className="p-3 font-bold text-start">Retention</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border-subtle)] text-[var(--ink-secondary)]">
              <tr>
                <td className="p-3 font-bold text-[var(--ink-primary)] whitespace-nowrap">
                  Strictly Necessary
                </td>
                <td className="p-3">
                  Keeps page routing, basic security checks, and admin login sessions working properly.
                </td>
                <td className="p-3 whitespace-nowrap">Session</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[var(--ink-primary)] whitespace-nowrap">
                  Preferences (LocalStorage)
                </td>
                <td className="p-3">
                  Remembers your chosen display settings and countdown preferences on your own device.
                </td>
                <td className="p-3 whitespace-nowrap">Until cleared</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[var(--ink-primary)] whitespace-nowrap">
                  Analytics
                </td>
                <td className="p-3">
                  Helps measure page speed and fix technical errors using aggregated site traffic data.
                </td>
                <td className="p-3 whitespace-nowrap">Up to 12 months</td>
              </tr>
              <tr>
                <td className="p-3 font-bold text-[var(--ink-primary)] whitespace-nowrap">
                  Advertising (Google AdSense)
                </td>
                <td className="p-3">
                  Helps Google and approved ad partners show ads, limit repeat ads, and measure ad clicks.
                </td>
                <td className="p-3 whitespace-nowrap">Per partner rules</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          3. Google AdSense Advertising Choices
        </h2>
        <p>
          If ads are active on this site, Google and third-party vendors may use cookies to display ads based on your visits to this website and other websites.
        </p>
        <p>
          You can opt out of personalized advertising in{' '}
          <a
            href="https://adssettings.google.com"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[var(--accent-primary-text)] font-semibold hover:underline"
          >
            Google Ads Settings
          </a>{' '}
          or manage third-party ad cookies at{' '}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noreferrer noopener"
            className="text-[var(--accent-primary-text)] font-semibold hover:underline"
          >
            www.aboutads.info
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          4. How to Control Cookies in Your Browser
        </h2>
        <p>
          You can block or delete cookies at any time using your browser settings:
        </p>
        <ul className="list-disc ps-5 space-y-1.5 text-[var(--ink-secondary)]">
          <li><strong>Google Chrome:</strong> Settings &gt; Privacy and security &gt; Third-party cookies</li>
          <li><strong>Apple Safari:</strong> Settings or Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li><strong>Mozilla Firefox:</strong> Settings &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
          <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and site permissions</li>
        </ul>
        <p className="text-xs text-[var(--ink-muted)]">
          Turning off strictly necessary storage may prevent some site preferences from saving. For more details, read our{' '}
          <Link
            href="/privacy-policy"
            className="text-[var(--accent-primary-text)] font-semibold hover:underline"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-lg sm:text-xl font-bold text-[var(--ink-primary)]">
          5. Updates to This Policy
        </h2>
        <p>
          We may update this Cookie Policy when browser rules or site tools change. Please check this page for the latest version, and confirm operator details ([Owner / Company Legal Name], [Country / Jurisdiction]) before launch.
        </p>
      </section>
    </LegalLayout>
  );
}