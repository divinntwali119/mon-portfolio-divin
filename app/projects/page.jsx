import Image from 'next/image';
import Link from 'next/link';
import { imagePath } from '@/lib/paths';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Projets',
  'Une sélection de projets web, mobiles, UI/UX et PWA de Divin Ntwali.',
  '/projects/',
);

const projects = [
  ['CENUMEP', 'cenumep.png', "Site dynamique pour le cercle des étudiants de l’université de Kinshasa.", ['Design System', 'Branding', 'UI/UX', 'WordPress']],
  ['Galaxy Food', 'Top Recettes Maison.jpeg', 'Site web de valorisation des cuisines kinoises et recettes locales.', ['Brand Identity', 'Packaging', 'Art Direction']],
  ['Explorer Kinshasa', 'Kinshasa.jpeg', 'Plateforme touristique pour découvrir les merveilles de la capitale congolaise.', ['UI/UX', 'Web Design', 'PWA']],
  ['Tableau de bord', 'tableau de bord.jpeg', 'Dashboard interactif pour suivre les émissions carbone des entreprises.', ['Data Viz', 'Dashboard', 'React']],
  ['Art Gallery App', 'art galery.jpeg', "Application mobile de découverte d’œuvres d'art en réalité augmentée.", ['AR/VR', 'Mobile', 'React Native']],
  ['Portfolio Pro', 'divin_portfolio.jpg', 'Plateforme portfolio destinée aux designers et photographes.', ['Portfolio', 'Next.js', 'CMS']],
];

export default function ProjectsPage() {
  return (
    <main className="interior-page" id="main-content">
      <section className="interior-hero"><div className="container"><span className="section-label">Réalisations</span><h1>Des projets <span className="highlight">pensés pour durer</span></h1><p>Une sélection de projets web et mobiles qui reflètent mon expertise et ma polyvalence.</p></div></section>
      <section className="section-padding"><div className="container"><div className="projects-grid all-projects-grid">{projects.map(([title, image, description, tags]) => <article className="project-card" key={title}><div className="project-image"><Image src={imagePath(image)} alt={`${title} — ${description}`} width={800} height={520} unoptimized /></div><div className="project-body"><div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><h2>{title}</h2><p>{description}</p><a href={`https://wa.me/243901087801?text=${encodeURIComponent(`Bonjour Divin, je suis intéressé par le projet ${title}`)}`} target="_blank" rel="noreferrer" className="project-link">Discuter du projet <i className="fas fa-arrow-right" aria-hidden="true" /></a></div></article>)}</div></div></section>
      <section className="interior-band section-padding"><div className="container interior-vision"><h2>Un projet en tête ?</h2><p>Parlons de vos objectifs et construisons ensemble une solution adaptée.</p><Link className="btn-primary" href="/contact/">Me contacter <i className="fas fa-arrow-right" aria-hidden="true" /></Link></div></section>
    </main>
  );
}
