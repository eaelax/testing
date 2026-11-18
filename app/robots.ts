import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = (process.env.APP_URL || 'https://tikprofilesviewer.com').replace(/\/+$/, '');

  return {
    rules: [
      {
        userAgent: 'Mediapartners-Google',
        allow: '/',
      },
      {
        userAgent: 'Google-Display-Ads-Bot',
        allow: '/',
      },
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/admintiktok/', '/*?*sort=', '/*?*filter=', '/*?*utm_'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}