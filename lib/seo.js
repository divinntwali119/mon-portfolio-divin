export const SITE_URL = 'https://divinntwali119.github.io/mon-portfolio-divin';
export const SOCIAL_IMAGE = `${SITE_URL}/images/divin_portfolio.jpg`;
export const DEFAULT_DESCRIPTION =
  'Divin Ntwali, développeur full-stack et designer UI/UX à Kinshasa, RDC. Création de sites web, applications mobiles et PWA sur mesure. Devis gratuit en 24 h.';

export function createPageMetadata(title, description, path = '/') {
  const socialTitle = `${title} | Divin Ntwali`;
  const canonical = `${SITE_URL}${path}`;

  return {
    title,
    description,
    keywords: [
      'développeur web Kinshasa',
      'développeur full-stack RDC',
      'création site web Kinshasa',
      'designer UI/UX Congo',
      'développeur mobile Kinshasa',
      'PWA Afrique',
      'freelance web Kinshasa',
      'Divin Ntwali',
    ],
    alternates: {
      canonical,
      languages: {
        fr: canonical,
        'x-default': canonical,
      },
    },
    openGraph: {
      type: 'website',
      locale: 'fr_FR',
      siteName: 'Divin Ntwali',
      title: socialTitle,
      description,
      url: canonical,
      images: [{
        url: SOCIAL_IMAGE,
        width: 1760,
        height: 868,
        alt: 'Divin Ntwali, développeur Full-Stack et designer UI/UX à Kinshasa',
      }],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: [SOCIAL_IMAGE],
      creator: '@divinntwali',
      site: '@divinntwali',
    },
    robots: { index: true, follow: true },
  };
}
