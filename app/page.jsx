import PortfolioHome from '@/components/PortfolioHome';
import { createPageMetadata, DEFAULT_DESCRIPTION } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Développeur Web & Mobile à Kinshasa',
  DEFAULT_DESCRIPTION,
);

export default function HomePage() {
  return <PortfolioHome />;
}
