import './globals.css';
import SiteChrome from '@/components/SiteChrome';
import { SITE_URL } from '@/lib/seo';

const siteUrl = SITE_URL;

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Divin Ntwali · Développeur Web & Mobile à Kinshasa',
    template: '%s | Divin Ntwali',
  },
  description:
    'Divin Ntwali, développeur full-stack et designer UI/UX à Kinshasa (RDC). Création de sites web, applications mobiles et PWA sur mesure.',
  keywords: [
    'développeur web Kinshasa',
    'développeur full-stack RDC',
    'designer UI/UX Congo',
    'développeur mobile Kinshasa',
    'Divin Ntwali',
  ],
  authors: [{ name: 'Divin Ntwali' }],
  creator: 'Divin Ntwali',
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Divin Ntwali',
    title: 'Divin Ntwali · Développeur Web & Mobile à Kinshasa',
    description:
      'Création de sites web, applications mobiles et PWA sur mesure à Kinshasa.',
    images: [`${siteUrl}/images/photo.jpg`],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Divin Ntwali · Développeur Web & Mobile à Kinshasa',
    description:
      'Création de sites web, applications mobiles et PWA sur mesure à Kinshasa.',
    images: [`${siteUrl}/images/photo.jpg`],
    creator: '@divinntwali',
  },
  alternates: {
    canonical: `${siteUrl}/`,
    languages: {
      fr: `${siteUrl}/`,
      'x-default': `${siteUrl}/`,
    },
  },
  robots: {
    index: true,
    follow: true,
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
    '@type': 'Person',
    name: 'Divin Ntwali',
    jobTitle: 'Développeur Full-Stack & Designer UI/UX',
    url: `${siteUrl}/`,
    image: `${siteUrl}/images/photo.jpg`,
    email: 'divinntwali119@gmail.com',
    telephone: '+243901087801',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kinshasa',
      addressRegion: 'Mont-Ngafula',
      addressCountry: 'CD',
    },
    sameAs: [
      'https://github.com/divinntwali',
      'https://linkedin.com/in/divinntwali',
      'https://twitter.com/divinntwali',
      'https://instagram.com/divinntwali',
      'https://www.facebook.com/DivinDesign',
      'https://www.youtube.com/@Divin_Design',
      'https://tiktok.com/@divinntwali20',
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
