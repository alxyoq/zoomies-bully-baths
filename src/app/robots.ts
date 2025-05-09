import type { MetadataRoute } from 'next';

// Adding static configuration for export
export const dynamic = 'force-static';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'zoomiesbullybaths.com/sitemap.xml',
  };
}
