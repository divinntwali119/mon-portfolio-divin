import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

const pages = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/about/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/projects/', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/contact/', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/carte-de-visite/', priority: 0.6, changeFrequency: 'monthly' },
];

export default function sitemap() {
  return pages.map(({ path, ...page }) => ({
    url: `${SITE_URL}${path}`,
    ...page,
  }));
}