import { MetadataRoute } from 'next';

// IMPORTANTE: Aggiorna questo URL con il tuo dominio reale quando deployato
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://vittoriociampi.dev';

export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'], // Escludi API routes e Next.js internals
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
