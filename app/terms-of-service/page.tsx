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
  return <LegalLayout currentPath="/terms-of-service" />;
}