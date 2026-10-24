import BusinessCardProfile from '@/components/BusinessCardProfile';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Carte de visite — Divin Ntwali',
  'Carte de visite numérique, parcours professionnel et compétences de Divin Ntwali.',
  '/carte-de-visite/',
);

export default function BusinessCardProfilePage() {
  return <BusinessCardProfile />;
}
