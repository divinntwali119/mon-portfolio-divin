import PortfolioHome from '@/components/PortfolioHome';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Divin Ntwali · Développeur Web & Mobile Kinshasa | UI/UX Designer RDC',
  'Portfolio de Divin Ntwali, développeur full-stack et designer UI/UX à Kinshasa. Sites web, applications mobiles et PWA.',
);

export default function HomePage() {
  return <PortfolioHome />;
}
