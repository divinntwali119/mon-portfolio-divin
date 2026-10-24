import './globals.css';
import './responsive.css';
import SiteChrome from '@/components/SiteChrome';
import { DEFAULT_DESCRIPTION, SITE_URL, SOCIAL_IMAGE } from '@/lib/seo';

const siteUrl = SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Divin Ntwali · Développeur Web & Mobile à Kinshasa',
    template: '%s | Divin Ntwali',
  },
  description: DEFAULT_DESCRIPTION,
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
  authors: [{ name: 'Divin Ntwali' }],
  creator: 'Divin Ntwali',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Divin Ntwali',
    title: 'Divin Ntwali · Développeur Web & Mobile à Kinshasa',
    description: DEFAULT_DESCRIPTION,
    images: [{
      url: SOCIAL_IMAGE,
      width: 1760,
      height: 868,
      alt: 'Divin Ntwali, développeur Full-Stack et designer UI/UX à Kinshasa',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divin Ntwali · Développeur Web & Mobile à Kinshasa',
    description: DEFAULT_DESCRIPTION,
    images: [SOCIAL_IMAGE],
    creator: '@divinntwali',
    site: '@divinntwali',
  },
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      fr: `${siteUrl}/`,
      'x-default': `${siteUrl}/`,
    },
  },
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  icons: {
    icon: `${siteUrl}/favicon.ico`,
    apple: `${siteUrl}/apple-touch-icon.png`,
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        name: 'Divin Ntwali',
        url: `${siteUrl}/`,
        inLanguage: 'fr-FR',
        publisher: { '@id': `${siteUrl}/#person` },
      },
      {
        '@type': 'Person',
        '@id': `${siteUrl}/#person`,
        name: 'Divin Ntwali',
        givenName: 'Divin',
        familyName: 'Ntwali',
        jobTitle: 'Développeur Full-Stack & Designer UI/UX',
        description: DEFAULT_DESCRIPTION,
        url: `${siteUrl}/`,
        image: `${siteUrl}/images/photo.jpg`,
        email: 'divinntwali119@gmail.com',
        telephone: '+243901087801',
        knowsAbout: [
          'Développement Web',
          'Développement Mobile',
          'UI/UX Design',
          'React',
          'Next.js',
          'Django',
          'PostgreSQL',
          'Progressive Web Apps',
          'Tailwind CSS',
          'TypeScript',
          'Brand Strategy',
        ],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kinshasa',
          addressRegion: 'Mont-Ngafula',
          addressCountry: 'CD',
        },
        sameAs: [
          'https://github.com/divinntwali',
          'https://www.linkedin.com/in/divin-ntwali-bagalwa-53b560446',
          'https://twitter.com/divinntwali',
          'https://instagram.com/divinntwali',
          'https://www.facebook.com/DivinDesign',
          'https://www.youtube.com/@Divin_Design',
          'https://tiktok.com/@divinntwali20',
        ],
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#service`,
        name: 'Divin Ntwali — Développeur Web & Designer UI/UX',
        url: `${siteUrl}/`,
        image: SOCIAL_IMAGE,
        description: DEFAULT_DESCRIPTION,
        telephone: '+243901087801',
        email: 'divinntwali119@gmail.com',
        priceRange: '$100–$1000',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Kinshasa',
          addressRegion: 'Mont-Ngafula',
          addressCountry: 'CD',
        },
        areaServed: [
          { '@type': 'City', name: 'Kinshasa' },
          { '@type': 'Country', name: 'République démocratique du Congo' },
        ],
        founder: { '@id': `${siteUrl}/#person` },
      },
    ],
  };

  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"
        />
        <meta name="geo.region" content="CD-KN" />
        <meta name="geo.placename" content="Kinshasa" />
        <meta name="geo.position" content="-4.4419;15.2663" />
        <meta name="ICBM" content="-4.4419, 15.2663" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip-link" href="#main-content">Aller au contenu principal</a>
        <SiteChrome position="navbar" />
        {children}
        <SiteChrome position="footer" />
      </body>
    </html>
  );
}
