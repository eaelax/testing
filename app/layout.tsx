import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
  description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio on TikProfilesViewer.com.',
  referrer: 'no-referrer',
  openGraph: {
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio on TikProfilesViewer.com.',
    url: 'https://tikprofilesviewer.com',
    siteName: 'Tik Profiles Viewer',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tik Profiles Viewer - Free TikTok Profile Viewer & HD Downloader',
    description: 'View any TikTok profile anonymously, watch videos, and download watermark-free HD videos and MP3 audio on TikProfilesViewer.com.',
  },
  icons: {
    icon: '/assets/aistudio/tik-profiles-viewer-logo_c4487561.png',
    shortcut: '/assets/aistudio/tik-profiles-viewer-logo_c4487561.png',
    apple: '/assets/aistudio/tik-profiles-viewer-logo_c4487561.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="referrer" content="no-referrer" />
        <link rel="icon" type="image/png" href="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png" />
        <link rel="apple-touch-icon" href="/assets/aistudio/tik-profiles-viewer-logo_c4487561.png" />
      </head>
      <body className="min-h-screen bg-[#fafbfc] text-slate-900 antialiased selection:bg-rose-100 selection:text-rose-900">
        {children}
      </body>
    </html>
  );
}

