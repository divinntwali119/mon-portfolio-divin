'use client';

import { usePathname } from 'next/navigation';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

const standaloneRoutes = [
  '/carte-de-visite',
  '/carte-de-visite-divin-ntwali',
  '/scan-qr',
];

export default function SiteChrome({ position }) {
  const pathname = usePathname() || '/';
  const normalizedPath = pathname.replace(/^\/mon-portfolio-divin(?=\/|$)/, '') || '/';
  const isStandalone = standaloneRoutes.some(
    (route) => normalizedPath === route || normalizedPath.startsWith(`${route}/`),
  );

  if (isStandalone) return null;
  return position === 'footer' ? <Footer /> : <Navbar />;
}
