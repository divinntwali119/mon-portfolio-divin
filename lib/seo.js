export const SITE_URL = 'https://divinntwali119.github.io/mon-portfolio-divin';

export function createPageMetadata(title, description, path = '/') {
  return {
    title,
    description,
    alternates: {
      canonical: `${SITE_URL}${path}`,
    },
  };
}
