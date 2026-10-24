import ScanQrTransition from '@/components/ScanQrTransition';
import { createPageMetadata } from '@/lib/seo';

export const metadata = {
  ...createPageMetadata(
    'QR Code scanné avec succès',
    'Redirection vers la carte de visite numérique de Divin Ntwali.',
    '/scan-qr/',
  ),
  robots: { index: false, follow: true },
};

export default function ScanQrPage() {
  return <ScanQrTransition />;
}
