import type { MetadataRoute } from 'next';

const HOST = 'https://rstankov.com';

export default function sitemap(): MetadataRoute.Sitemap {
  return ['', '/about', '/appearances', '/projects'].map((path) => ({
    url: `${HOST}${path}`,
  }));
}
