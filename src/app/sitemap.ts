import { MetadataRoute } from 'next';

// IMPORTANTE: Aggiorna questo URL con il tuo dominio reale quando deployato
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://portfolio-vittorio-ciampi.vercel.app';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
  ];
}
