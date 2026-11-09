import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Cookie Policy - Tik Profiles Viewer',
  description:
    'Comprehensive Cookie Policy for Tik Profiles Viewer on TikProfilesViewer.com. Learn about technical cookies, local storage preferences, and how to control your tracking settings.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/cookie-policy',
  },
};

export default function CookiePolicyPage() {
  return (
    <LegalLayout
      title="Cookie Policy"
      subtitle="Complete transparency on how cookies, local storage, and tracking technologies operate on TikProfilesViewer.com."
      summary="Tik Profiles Viewer uses essential technical cookies and browser local storage to preserve your language preferences and maintain site security. We do not use intrusive tracking cookies, and you can control cookie settings at any time."
      currentPath="/cookie-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies and Local Storage?</h2>
        <p>
          Cookies are small text files placed on your computer, tablet, or smartphone by web servers when you browse online. They help web applications remember your preferences, keep you logged into secure areas, and analyze how visitors interact with web pages.
        </p>
        <p>
          In addition to standard cookies, modern web technologies also employ <strong>LocalStorage</strong> and <strong>SessionStorage</strong>. These are browser-managed key-value storage mechanisms that store user choices directly on your physical device without transferring data automatically on every network request.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. Categories of Cookies We Utilize</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong>, we categorize browser storage into the following defined groups:
        </p>

        <div className="space-y-4 pt-2">
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">A. Strictly Necessary &amp; Functional Cookies</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              These cookies are essential for our website to operate correctly. They enable fundamental capabilities such as page navigation, language selection (English, Arabic, French, German, Spanish, etc.), security rate-limiting, and CDN server routing. The Website cannot function properly without these items.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">B. Preference &amp; UI State Storage (LocalStorage)</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We utilize browser LocalStorage to remember custom UI configurations, such as your countdown seconds preference and search filter states. This data is strictly stored locally in your browser sandbox and is never uploaded to remote tracking servers.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">C. Performance &amp; Diagnostic Analytics</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              We may utilize privacy-preserving, aggregated technical telemetry to measure page loading speeds, monitor server latency, and diagnose technical errors across various device types. No personal identity information is recorded or combined with third-party tracking databases.
            </p>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-base font-bold text-slate-900 mb-1">D. Third-Party Advertising Cookies</h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              To keep our tools completely free without paywalls, our website may display banner ads from verified ad partners (such as Google AdSense). These third-party vendors may use cookies to serve ads based on your visit to this and other websites. You may opt out of personalized advertising by visiting Google Ads Settings.
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. How to Manage and Disable Cookies</h2>
        <p>
          You have full control over cookie storage. Most web browsers allow you to modify your cookie settings to refuse cookies, delete specific cookies, or notify you whenever a cookie is set. Below are links to management guides for common browsers:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li><strong>Google Chrome:</strong> Settings &gt; Privacy and Security &gt; Cookies and other site data</li>
          <li><strong>Apple Safari (iOS &amp; macOS):</strong> Preferences &gt; Privacy &gt; Manage Website Data</li>
          <li><strong>Mozilla Firefox:</strong> Options &gt; Privacy &amp; Security &gt; Cookies and Site Data</li>
          <li><strong>Microsoft Edge:</strong> Settings &gt; Cookies and Site Permissions</li>
        </ul>
        <p className="text-xs text-slate-500">
          Please note that disabling strictly necessary cookies may impact the proper visual layout and language localization of the Website.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Policy Revisions</h2>
        <p>
          We may amend this Cookie Policy periodically to reflect technological adjustments or regulatory guidance. Any modifications will be posted here with an updated review date.
        </p>
      </section>
    </LegalLayout>
  );
}
