import Image from 'next/image';
import Link from 'next/link';
import { imagePath } from '@/lib/paths';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'À propos',
  'Découvrez Divin Ntwali, développeur full-stack et designer UI/UX basé à Kinshasa, RDC.',
  '/about/',
);

const specialties = [
  ['fa-code', 'Développement Web', 'Sites vitrines, plateformes, applications web, APIs et solutions PWA.'],
  ['fa-paint-brush', 'Design & UI/UX', 'Interfaces accessibles, identité visuelle, branding et direction artistique.'],
  ['fa-mobile-alt', 'Applications mobiles', 'Expériences mobiles réactives avec React Native et technologies web.'],
  ['fa-lightbulb', 'Stratégie numérique', 'Positionnement, feuille de route produit et optimisation de la conversion.'],
];

export default function AboutPage() {
  return (
    <main className="interior-page" id="main-content">
      <section className="interior-hero">
        <div className="container interior-profile">
          <Image src={imagePath('photo.jpg')} alt="Divin Ntwali, développeur et designer à Kinshasa" width={240} height={240} priority unoptimized />
          <div><span className="section-label">À propos</span><h1>Développeur web & mobile <span className="highlight">et créateur d’expériences digitales</span></h1><p>Je m’appelle Divin Ntwali, développeur full-stack et designer UI/UX basé à Kinshasa, en République Démocratique du Congo.</p></div>
        </div>
      </section>
      <section className="section-padding"><div className="container interior-copy"><div><h2>Allier esthétique et performance</h2><p>Passionné par l’intersection entre le design, la technologie et l’humain, j’accompagne les entreprises dans leur transformation digitale. Je conçois des produits numériques qui séduisent visuellement et génèrent de vrais résultats : plus de visibilité, de clients et de conversions.</p><p>Du cadrage initial au déploiement, mon approche réunit stratégie, design d’expérience, développement et amélioration continue.</p><Link className="btn-primary" href="/#contact">Parlons de votre projet <i className="fas fa-arrow-right" aria-hidden="true" /></Link></div><div className="about-cards interior-specialties">{specialties.map(([icon, title, text]) => <article className="about-card" key={title}><div className="specialty-icon"><i className={`fas ${icon}`} aria-hidden="true" /></div><div className="card-body"><h2>{title}</h2><p>{text}</p></div></article>)}</div></div></section>
      <section className="section-padding interior-band"><div className="container interior-vision"><span className="section-label">Ma vision</span><h2>La technologie au service des personnes et des ambitions locales.</h2><p>Créativité, apprentissage continu et solutions numériques concrètes pour contribuer à la transformation digitale en Afrique.</p></div></section>
    </main>
  );
}
