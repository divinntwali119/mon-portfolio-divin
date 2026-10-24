import PrintableBusinessCard from '@/components/PrintableBusinessCard';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Personnaliser et imprimer ma carte de visite',
  'Personnalisez les coordonnées et imprimez la carte de visite de Divin Ntwali.',
  '/carte-de-visite-divin-ntwali/',
);

export default function PrintableBusinessCardPage() {
  return <PrintableBusinessCard />;
}
