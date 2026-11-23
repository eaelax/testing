import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Service Availability Policy - Tik Profiles Viewer',
  description:
    'Service Availability and Uptime policy for Tik Profiles Viewer on TikProfilesViewer.com. Explains technical maintenance windows, third-party network limitations, and service continuity.',
  alternates: {
    canonical: 'https://tikprofilesviewer.com/service-availability-policy',
  },
};

export default function ServiceAvailabilityPolicyPage() {
  return (
    <LegalLayout
      title="Service Availability Policy"
      subtitle="Information regarding technical uptime objectives, scheduled maintenance, and external dependency factors affecting availability."
      summary="We strive to provide dependable, round-the-clock uptime. However, because our service relies on external public network endpoints, temporary interruptions or rate limits may occur beyond our direct control."
      currentPath="/service-availability-policy"
    >
      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">1. Service Availability Objectives</h2>
        <p>
          At <strong>Tik Profiles Viewer</strong> (accessible at <strong>TikProfilesViewer.com</strong>), our engineering team strives to deliver consistent, uninterrupted access to our viewer tools and profile analytics 24 hours a day, 7 days a week, 365 days a year.
        </p>
        <p>
          We employ containerized cloud deployments and geographically distributed Content Delivery Networks to achieve high availability. However, as a free utility service, we do not provide a legally binding Service Level Agreement (SLA) with financial credits for downtime.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">2. External Dependencies and Third-Party Limitations</h2>
        <p>
          Unlike closed platforms that generate all data internally, Tik Profiles Viewer depends on live public network connections to external social media platforms and third-party media delivery infrastructure. Consequently, service availability may be impacted by factors outside our direct operational control:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-slate-600">
          <li>
            <strong>Third-Party API &amp; Web Changes:</strong> Changes to TikTok&apos;s public web layout, response headers, video compression formats, or CDN endpoints may temporarily prevent our parser from resolving media streams until our engineers deploy compatible updates.
          </li>
          <li>
            <strong>Platform Rate Limiting &amp; Anti-Bot Protections:</strong> During periods of heavy global traffic, third-party networks may temporarily throttle incoming requests from specific IP ranges, causing profile lookups to return delayed or unavailable responses.
          </li>
          <li>
            <strong>Regional Content Restrictions:</strong> Certain creator accounts or videos may be restricted by the platform in specific geographic jurisdictions due to local regulations or licensing agreements.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">3. Scheduled Maintenance and System Upgrades</h2>
        <p>
          To ensure platform performance, security hardening, and database optimization, we periodically perform scheduled system maintenance.
        </p>
        <p>
          Whenever feasible, maintenance operations are scheduled during low-traffic hours and executed with rolling container deployments designed to eliminate or minimize noticeable downtime. In rare instances where brief maintenance windows are unavoidable, we work to restore full functionality as quickly as possible.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">4. Force Majeure and Network Outages</h2>
        <p>
          We shall not be liable or responsible for any failure or delay in the performance of our service arising from events beyond our reasonable control, including but not limited to acts of God, war, terrorism, civil unrest, labor disputes, telecommunications carrier failures, undersea cable breaks, power grid disruptions, widespread internet routing outages, or catastrophic cloud host failures.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-xl font-bold text-slate-900">5. Troubleshooting and Support</h2>
        <p>
          If you encounter an issue accessing a profile or downloading media:
        </p>
        <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
          <li>Double-check that the creator username is spelled correctly and that the TikTok account is set to &quot;Public&quot;.</li>
          <li>Wait a few moments and try your request again, as temporary platform rate limits frequently clear within minutes.</li>
          <li>If an issue persists across multiple accounts, report the technical glitch to our engineering team at <strong>support@tikprofilesviewer.com</strong>.</li>
        </ul>
      </section>
    </LegalLayout>
  );
}
