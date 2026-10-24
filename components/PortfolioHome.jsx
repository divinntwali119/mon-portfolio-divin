'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import Hero from '@/components/Hero';
import ScrollEffects from '@/components/ScrollEffects';
import { imagePath } from '@/lib/paths';

const projects = [
  {
    title: 'CENUMEP', image: 'cenumep.png',
    description: "Un site dynamique pour le cercle des étudiants de l’Université de Kinshasa. Une plateforme complète de gestion et de communication.",
    tags: ['Design System', 'Branding', 'UI/UX', 'WordPress'], client: 'CENUMEP — UNIKIN', year: '2024',
    tech: 'WordPress, Figma, Elementor, CSS3', category: 'Site Web',
  },
  {
    title: 'Galaxy Food', image: 'Top Recettes Maison.jpeg',
    description: 'Un site web de valorisation des cuisines kinoises et des recettes locales.',
    tags: ['Brand Identity', 'Packaging', 'Art Direction', 'Web Design'], client: 'Galaxy Food', year: '2024',
    tech: 'React, Tailwind CSS, Figma, Vercel', category: 'Site Web culinaire',
  },
  {
    title: 'Explorer Kinshasa', image: 'Kinshasa.jpeg',
    description: 'Une plateforme pour découvrir les merveilles cachées de la capitale congolaise.',
    tags: ['UI/UX', 'Web Design', 'Prototype', 'Tourisme'], client: 'Personnel', year: '2024',
    tech: 'Next.js, TypeScript, Tailwind, Mapbox, Figma', category: 'Application Web touristique',
  },
  {
    title: 'Tableau de bord', image: 'tableau de bord.jpeg',
    description: 'Un tableau de bord interactif pour suivre les émissions carbone des entreprises.',
    tags: ['Data Viz', 'Dashboard', 'React', 'D3.js'], client: 'Parker Business', year: '2024',
    tech: 'React, D3.js, Firebase, Chart.js, Tailwind', category: 'Dashboard Data',
  },
  {
    title: 'Art Gallery App', image: 'art galery.jpeg',
    description: 'Une expérience mobile immersive pour découvrir des œuvres d’art en réalité augmentée.',
    tags: ['AR/VR', 'Mobile', 'React Native', 'Art'], client: 'Yvan Art Studio', year: '2024',
    tech: 'React Native, ARKit, Firebase, Expo, Three.js', category: 'Application mobile AR',
  },
  {
    title: 'Portfolio Pro', image: 'divin_portfolio.jpg',
    description: 'Une plateforme de création de portfolio pour designers et photographes, avec CMS et animations fluides.',
    tags: ['Portfolio', 'Web Design', 'Next.js', 'CMS'], client: 'Personnel', year: '2024',
    tech: 'Next.js, Tailwind, Sanity, Framer Motion, TypeScript, Figma', category: 'Portfolio',
  },
];

const gallery = [
  ['True colours.jpeg', 'Portrait créatif de Divin Ntwali', 'True Colours', 'Portrait · Créativité', 'Portrait'],
  ['behind the scene.jpeg', 'Studio de design graphique', 'Behind the Scenes', 'Graphic Design · Studio', 'Studio'],
  ['WhatsApp Image 2026-08-24 at 19.06.46.jpeg', 'Design UI/UX en action', 'Design en action', 'UI/UX · Création', 'UI/UX'],
  ['developpement mobile.jpeg', 'Développement mobile et PWA', 'Mobile Dev', 'React Native · PWA', 'Mobile'],
  ['strategie.jpeg', 'Stratégie digitale et conseil', 'Stratégie', 'Conseil · Vision', 'Stratégie'],
  ['diversité.jpeg', 'Design System inclusif', 'Diversity Design', 'Design System · Inclusion', 'Design System'],
  ['innovation.jpeg', 'Code et innovation technologique', 'Code & Innovation', 'Développement · Tech', 'Tech'],
];

const servicePlans = [
  {
    name: 'Startup', tagline: 'Lancez votre activité en ligne en moins de 2 semaines.', price: '$100',
    features: ['Site vitrine de 1 à 5 pages', 'Design responsive mobile, tablette et desktop', 'Formulaire de contact fonctionnel', 'Intégration de vos réseaux sociaux', 'Nom de domaine et hébergement pendant 1 an', 'Certificat SSL et site sécurisé HTTPS'],
    benefits: 'Une présence professionnelle qui rassure vos premiers clients, vous rend trouvable sur Google et vous démarque.',
    ideal: 'Indépendants, jeunes entreprises et associations.', button: 'Choisir Startup', featured: false,
  },
  {
    name: 'Business', tagline: 'Développez votre activité avec un site professionnel qui convertit.', price: '$600',
    features: ['Site sur mesure de 5 à 15 pages avec blog', 'Design premium personnalisé', 'Optimisation SEO complète', 'Tableau de bord d’administration (CMS)', 'Newsletter et collecte d’emails', '90 jours de support prioritaire'],
    benefits: 'Un site qui travaille pour vous 24 h/24 : il attire des visiteurs via Google et les convertit en clients.',
    ideal: 'PME, cabinets, boutiques en ligne et restaurants.', button: 'Choisir Business', featured: true,
  },
  {
    name: 'Premium', tagline: 'Un accompagnement complet pour développer votre marché.', price: '$1000',
    features: ['Site ou application sur mesure', 'Direction artistique à 360°', 'Stratégie de marque complète', 'Développement web et mobile avec PWA', 'Accompagnement stratégique pendant 6 mois', 'Maintenance et évolutions incluses'],
    benefits: 'Une transformation digitale complète, de votre identité à votre positionnement et votre acquisition client.',
    ideal: 'Grandes entreprises et marques établies.', button: 'Demander un devis', featured: false,
  },
];

const processSteps = [
  ['01', 'Découverte', 'Écoute de vos besoins, analyse de votre marché et définition d’objectifs clairs.'],
  ['02', 'Stratégie', 'Élaboration de la feuille de route, choix des technologies et planification.'],
  ['03', 'Design', 'Wireframes, maquettes UI/UX et prototypage interactif.'],
  ['04', 'Développement', 'Codage, intégration, tests rigoureux et optimisation des performances.'],
  ['05', 'Lancement & suivi', 'Mise en ligne, formation, maintenance et accompagnement continu.'],
];

const benefits = [
  ['fa-rocket', 'Lancement rapide', 'Votre site en ligne en 7 à 14 jours seulement.'],
  ['fa-mobile-alt', '100 % responsive', 'Un design adapté à tous les écrans.'],
  ['fa-search', 'Optimisé SEO', 'Une structure technique pensée pour Google.'],
  ['fa-headset', 'Support inclus', '30 jours de support après livraison.'],
  ['fa-shield-alt', 'Sécurisé & rapide', 'Hébergement sécurisé et performances optimisées.'],
  ['fa-paint-brush', 'Design personnalisé', 'Un site unique qui reflète votre identité.'],
];

const experience = [
  ['2025 — Aujourd’hui', 'Senior UI/UX Designer Frontend & Backend', 'Kinshasa, RDC', 'Conception UI/UX, développement Frontend & Backend et création de sites web modernes.', ['Django', 'PostgreSQL', 'IA', 'React', 'TypeScript', 'Figma', 'Tailwind', 'Node.js']],
  ['2021 — 2023', 'Senior UI/UX Designer & Frontend', 'Bukavu, RDC', 'Conception et développement d’interfaces pour des applications web et mobiles.', ['React Native', 'Figma', 'GraphQL', 'Firebase']],
  ['2019 — 2021', 'Designer & Développeur Full-Stack', 'Bukavu, RDC', 'Création de sites web et d’applications mobiles pour une trentaine de clients.', ['React', 'Flutter', 'Adobe Suite', 'Webflow']],
  ['2017 — 2019', 'Bachelor Design & Développement', 'Bukavu, RDC', 'Formation en design graphique, UI/UX et développement web.', ['Design', 'UI/UX', 'HTML/CSS', 'JavaScript']],
];

const testimonials = [
  ['« Divin a su comprendre nos besoins et les transformer en une expérience utilisateur exceptionnelle. Son professionnalisme et sa créativité ont fait la différence. »', 'mardoché.jpg', 'Lilombo Mardoché', 'Co-fondateur', 'Dunia E-learning'],
  ['« Un talent rare qui allie design et technique. Divin a livré un projet complexe dans les délais avec une qualité irréprochable. »', 'Stone.jpeg', 'Agisha Stone', 'Étudiant', 'UEA'],
  ['« Divin a complètement transformé notre présence en ligne. Son approche stratégique et son sens du détail ont permis de créer une identité forte. »', 'vijay.jpg', 'Akilimali Vijay', 'Fondateur', 'Adisi Games'],
];

const socialLinks = [
  ['https://github.com/divinntwali', 'GitHub', 'fa-github'],
  ['https://www.linkedin.com/in/divin-ntwali-bagalwa-53b560446', 'LinkedIn', 'fa-linkedin-in'],
  ['https://twitter.com/divinntwali', 'Twitter', 'fa-twitter'],
  ['https://instagram.com/divinntwali', 'Instagram', 'fa-instagram'],
  ['https://www.facebook.com/DivinDesign', 'Facebook', 'fa-facebook-f'],
  ['https://www.youtube.com/@Divin_Design', 'YouTube', 'fa-youtube'],
  ['https://tiktok.com/@divinntwali20', 'TikTok', 'fa-tiktok'],
];

const wa = (message) => `https://wa.me/243901087801?text=${encodeURIComponent(message)}`;

function BrandMark() {
  return (
    <svg className="business-mark" viewBox="0 0 100 100" aria-hidden="true">
      <path fillRule="evenodd" d="M 10,10 L 52,10 C 88,10 88,90 52,90 L 10,90 Z M 23,90 L 23,52 C 23,38 47,38 47,52 L 47,90 Z" />
      <path d="M 31,90 L 31,60 C 31,54 39,54 39,60 L 39,90 Z" />
    </svg>
  );
}

function SectionHeading({ label, title, children }) {
  return (
    <header className="section-heading animate-on-scroll">
      {label && <span className="section-label">{label}</span>}
      <h2 className="section-title">{title}</h2>
      {children && <p className="section-subtitle">{children}</p>}
    </header>
  );
}

function BusinessCardPreview() {
  return (
    <section className="business-card-section section-padding" id="carte-visite">
      <div className="container">
        <SectionHeading title={<>Ma carte <span className="highlight">de visite</span></>}>
          Aperçu de ma carte de visite professionnelle — recto et verso. Scannez le QR code pour accéder directement à mon portfolio.
        </SectionHeading>
        <div className="bc-preview-grid animate-on-scroll">
          <div className="bc-preview-item">
            <span className="bc-preview-label"><i className="fas fa-image" aria-hidden="true" /> Face avant</span>
            <article className="bc-card bc-front"><div className="bc-front-center"><BrandMark /><h3 className="bc-front-name">DIVIN NTWALI</h3><p className="bc-front-title">Développeur Web & Informaticien</p></div><span className="bc-front-url">divinntwali119.github.io/mon-portfolio-divin/</span></article>
          </div>
          <div className="bc-preview-item">
            <span className="bc-preview-label"><i className="fas fa-address-card" aria-hidden="true" /> Face arrière</span>
            <article className="bc-card bc-back"><header className="bc-back-header"><div className="bc-back-identity"><h3 className="bc-back-name">DIVIN NTWALI</h3><p className="bc-back-title">Développeur Web & Informaticien</p></div><BrandMark /></header><div className="bc-back-body"><div className="bc-back-details"><div className="bc-back-detail-row"><span className="bc-back-detail-icon"><i className="fas fa-phone" aria-hidden="true" /></span><span className="bc-back-detail-text">+243901087801<small className="bc-back-detail-sub">+243962104398</small></span></div><div className="bc-back-detail-row"><span className="bc-back-detail-icon"><i className="fas fa-globe" aria-hidden="true" /></span><span className="bc-back-detail-text"><span className="bc-back-detail-url">divinntwali119.github.io/mon-portfolio-divin/</span></span></div><div className="bc-back-detail-row"><span className="bc-back-detail-icon"><i className="fas fa-location-dot" aria-hidden="true" /></span><span className="bc-back-detail-text">Mont Ngafula RDC KINSHASA</span></div></div><div className="bc-back-qr-section"><Image className="bc-back-qr-img" src={imagePath('qr-code.png')} alt="QR code du portfolio de Divin Ntwali" width={150} height={150} unoptimized /><span className="bc-back-qr-label">Scannez-moi</span></div></div><span className="bc-back-accent" /></article>
          </div>
        </div>
        <div className="bc-actions animate-on-scroll"><Link href="/carte-de-visite/" className="btn-primary"><i className="fas fa-id-card" aria-hidden="true" /> Voir ma carte</Link><Link href="/carte-de-visite-divin-ntwali/" className="btn-secondary"><i className="fas fa-print" aria-hidden="true" /> Imprimer / PDF</Link></div>
      </div>
    </section>
  );
}

function testimonialScrollPosition(viewport, slide) {
  const paddingLeft = Number.parseFloat(window.getComputedStyle(viewport).paddingLeft) || 0;
  return slide.offsetLeft - viewport.clientLeft - paddingLeft;
}

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;
    const previousOverflow = document.body.style.overflow;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;
  return (
    <div className="project-modal active" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <section className="modal-content" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button className="modal-close" type="button" onClick={onClose} aria-label="Fermer le projet"><i className="fas fa-times" aria-hidden="true" /></button>
        <div className="modal-image"><Image src={imagePath(project.image)} alt={`${project.title} — ${project.category}`} width={1000} height={600} unoptimized /></div>
        <div className="modal-tags">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
        <h2 className="modal-title" id="modal-title">{project.title}</h2>
        <p className="modal-description">{project.description}</p>
        <dl className="modal-details"><div className="detail-item"><dt className="label">Client</dt><dd className="value">{project.client}</dd></div><div className="detail-item"><dt className="label">Année</dt><dd className="value">{project.year}</dd></div><div className="detail-item"><dt className="label">Technologies</dt><dd className="value">{project.tech}</dd></div><div className="detail-item"><dt className="label">Catégorie</dt><dd className="value">{project.category}</dd></div></dl>
        <div className="modal-actions"><a href={wa(`Bonjour Divin, je suis intéressé par le projet ${project.title}`)} className="btn-primary" target="_blank" rel="noreferrer">Discuter du projet <i className="fab fa-whatsapp" aria-hidden="true" /></a><button type="button" className="btn-secondary" onClick={onClose}>Fermer</button></div>
      </section>
    </div>
  );
}

export default function PortfolioHome() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const testimonialIndexRef = useRef(0);
  const testimonialScrollTimeoutRef = useRef(null);
  const carouselRef = useRef(null);

  function scrollToTestimonial(index) {
    const viewport = carouselRef.current;
    const targetIndex = ((index % testimonials.length) + testimonials.length) % testimonials.length;
    const slide = viewport?.querySelectorAll('.testimonial-slide')[targetIndex];
    if (!viewport || !slide) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    viewport.scrollTo({ left: testimonialScrollPosition(viewport, slide), behavior: reduceMotion ? 'auto' : 'smooth' });
    testimonialIndexRef.current = targetIndex;
    setTestimonialIndex(targetIndex);
    window.clearTimeout(testimonialScrollTimeoutRef.current);
  }

  useEffect(() => {
    const viewport = carouselRef.current;
    if (!viewport) return undefined;
    const onScroll = () => {
      window.clearTimeout(testimonialScrollTimeoutRef.current);
      testimonialScrollTimeoutRef.current = window.setTimeout(() => {
        const slides = [...viewport.querySelectorAll('.testimonial-slide')];
        const nearest = slides.reduce((best, slide, index) => (
          Math.abs(testimonialScrollPosition(viewport, slide) - viewport.scrollLeft)
            < Math.abs(testimonialScrollPosition(viewport, slides[best]) - viewport.scrollLeft) ? index : best
        ), 0);
        testimonialIndexRef.current = nearest;
        setTestimonialIndex(nearest);
      }, 80);
    };
    const onResize = () => {
      const slide = viewport.querySelectorAll('.testimonial-slide')[testimonialIndexRef.current];
      if (slide) viewport.scrollTo({ left: testimonialScrollPosition(viewport, slide), behavior: 'auto' });
    };
    viewport.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    const interval = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ? null
      : window.setInterval(() => scrollToTestimonial(testimonialIndexRef.current + 1), 6000);
    return () => {
      viewport.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (interval !== null) window.clearInterval(interval);
      window.clearTimeout(testimonialScrollTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <ScrollEffects />
      <main id="main-content">
        <Hero />

        <section className="about section-padding" id="about">
          <div className="container"><div className="about-grid">
            <div className="about-text animate-on-scroll"><h2>Développeur web & mobile<br /><span className="highlight">et créateur d’expériences digitales</span></h2><p>Je m’appelle <strong>Divin Ntwali</strong>, développeur full-stack et designer UI/UX basé à Kinshasa, en République Démocratique du Congo. Passionné par l’intersection entre le design, la technologie et l’humain, j’accompagne les entreprises dans leur transformation digitale.</p><p>Ma philosophie : <strong>allier esthétique et performance</strong> pour créer des produits numériques qui séduisent visuellement et génèrent de vrais résultats : plus de visibilité, de clients et de conversions.</p><p className="signature">Divin <span>Ntwali</span></p><Link href="/about/" className="project-link">En savoir plus <i className="fas fa-arrow-right" aria-hidden="true" /></Link></div>
            <div className="about-cards animate-on-scroll">{[
              ['Behind the Scenes of Graphic Design Creativity.jpeg', 'Design & Créativité', 'UI/UX, logo, branding, design d’interface et direction artistique.'],
              ['WhatsApp Image 2026-08-24 at 19.06.46.jpeg', 'Développement Web', 'HTML, CSS, JavaScript, Tailwind, API, Django, PostgreSQL, performances et SEO.'],
              ['Elevate Your Business with Mobile App Development Toronto (1).jpeg', 'Applications Mobiles & PWA', 'React Native, Flutter et Progressive Web Apps pour iOS et Android.'],
              ['strategie.jpeg', 'Stratégie & Conseil', 'Positionnement, feuille de route produit et optimisation de la conversion.'],
            ].map(([image, title, text]) => <article className="about-card" key={title}><div className="card-image"><Image src={imagePath(image)} alt={title} width={500} height={300} unoptimized /></div><div className="card-body"><h3>{title}</h3><p>{text}</p></div></article>)}</div>
          </div></div>
        </section>

        <BusinessCardPreview />

        <section className="projects section-padding" id="projects">
          <div className="container"><SectionHeading title={<>Projets <span className="highlight">récents & portfolio</span></>}>Une sélection de projets web et mobiles qui reflètent mon expertise et ma polyvalence.</SectionHeading>
            <div className="projects-grid">{projects.map((project) => <article className="project-card animate-on-scroll" key={project.title}><div className="project-image"><Image src={imagePath(project.image)} alt={`${project.title} — ${project.description}`} width={800} height={520} unoptimized /></div><div className="project-body"><div className="project-tags">{project.tags.slice(0, 3).map((tag) => <span key={tag}>{tag}</span>)}</div><h3>{project.title}</h3><p>{project.description}</p><button className="project-link" type="button" onClick={() => setSelectedProject(project)}>Voir le projet <i className="fas fa-arrow-right" aria-hidden="true" /></button></div></article>)}</div>
            <div className="bc-actions animate-on-scroll"><Link className="btn-secondary" href="/projects/">Tous les projets <i className="fas fa-arrow-right" aria-hidden="true" /></Link></div>
          </div>
        </section>

        <section className="gallery section-padding" id="gallery"><div className="container"><SectionHeading title={<>Ma <span className="highlight">galerie</span></>}>Un aperçu de mon travail, de mes inspirations et de mes créations visuelles.</SectionHeading><div className="gallery-grid">{gallery.map(([image, alt, label, subtitle, badge]) => <article className="gallery-item animate-on-scroll" key={image}><Image src={imagePath(image)} alt={alt} width={800} height={800} unoptimized /><div className="gallery-overlay"><span className="gallery-label">{label}</span><span className="gallery-sub">{subtitle}</span></div><span className="gallery-badge">{badge}</span></article>)}</div></div></section>

        <section className="services section-padding" id="services"><div className="container"><SectionHeading title={<>Mes services <span className="highlight">sur mesure</span></>}>Trois formules claires et transparentes, pensées pour maximiser votre retour sur investissement.</SectionHeading><div className="services-grid">{servicePlans.map((plan) => <article className={`service-card animate-on-scroll${plan.featured ? ' featured' : ''}`} key={plan.name}>{plan.featured && <span className="service-badge">Populaire</span>}<header className="service-header"><h3>{plan.name}</h3><p className="service-tagline">{plan.tagline}</p><div className="service-price">{plan.price}<small>/ projet</small></div></header><div className="service-body"><h4 className="service-section-title">Ce qui est inclus</h4><ul className="service-features">{plan.features.map((feature) => <li key={feature}><i className="fas fa-check" aria-hidden="true" />{feature}</li>)}</ul><div className="service-benefits"><h4 className="benefit-title"><i className="fas fa-chart-line" aria-hidden="true" /> Ce que vous y gagnez</h4><p>{plan.benefits}</p></div><p className="service-ideal"><strong>Idéal pour :</strong> {plan.ideal}</p><a href={wa(`Bonjour Divin, je souhaite commander le forfait ${plan.name}`)} target="_blank" rel="noreferrer" className={`btn-service ${plan.featured ? 'primary' : 'secondary'}`}>{plan.button} <i className="fas fa-arrow-right" aria-hidden="true" /></a></div></article>)}</div></div></section>

        <section className="process section-padding" id="process"><div className="container"><SectionHeading title={<>Mon <span className="highlight">processus</span></>}>Une approche structurée en 5 étapes pour transformer votre vision en réalité.</SectionHeading><div className="process-grid">{processSteps.map(([number, title, text]) => <article className="process-step animate-on-scroll" key={number}><span className="step-number">{number}</span><div className="step-content"><h3>{title}</h3><p>{text}</p></div></article>)}</div></div></section>

        <section className="create-site section-padding" id="create-site"><div className="container"><SectionHeading title={<>Créez votre <span className="highlight">site web</span> chez moi</>}>Un accompagnement complet pour donner vie à votre projet digital.</SectionHeading><div className="create-site-grid"><div className="create-site-benefits">{benefits.map(([icon, title, text]) => <article className="benefit-card animate-on-scroll" key={title}><span className="benefit-icon"><i className={`fas ${icon}`} aria-hidden="true" /></span><div className="benefit-content"><h3>{title}</h3><p>{text}</p></div></article>)}</div><aside className="create-site-cta animate-on-scroll"><h3>Prêt à lancer <span>votre site</span> ?</h3><p>Vous n’avez pas besoin de compétences techniques. Je m’occupe du design, du développement, de la mise en ligne et de la formation.</p><div className="cta-price">$100 <small>/ site complet</small></div><div className="cta-actions"><a href={wa('Bonjour Divin, je souhaite créer mon site web')} target="_blank" rel="noreferrer" className="btn-primary">Démarrer mon site <i className="fab fa-whatsapp" aria-hidden="true" /></a><a href="#contact" className="btn-secondary">Poser une question</a></div></aside></div></div></section>

        <section className="pwa-case section-padding" id="pwa"><div className="container"><SectionHeading title={<>Quand une <span className="highlight">PWA</span> remplace une app native</>}>L’histoire d’un client qui voulait une application mobile, et à qui j’ai conseillé une solution plus intelligente.</SectionHeading><div className="pwa-case-content"><article className="pwa-story animate-on-scroll"><span className="story-badge"><i className="fas fa-lightbulb" aria-hidden="true" /> Cas client · 2024</span><h3>Le projet <span>Art Gallery App</span></h3><div className="story-part"><h4 className="story-label">Le besoin initial</h4><p>Un galeriste souhaitait lancer une <strong>application mobile native</strong> pour permettre à ses visiteurs de découvrir ses œuvres en réalité augmentée.</p></div><div className="story-part"><h4 className="story-label">Le problème</h4><p>Développer deux applications natives (iOS + Android) aurait coûté <strong>3 à 4 fois plus cher</strong>, avec des délais de plusieurs mois.</p></div><div className="story-part"><h4 className="story-label">Ma recommandation</h4><p>Je lui ai proposé une <strong>Progressive Web App (PWA)</strong> : une base de code unique, accessible via un lien, installable sur l’écran d’accueil et utilisable hors ligne.</p></div><div className="story-part"><h4 className="story-label">Le résultat</h4><p>Une application livrée en <strong>6 semaines</strong> au lieu de 4 mois, pour un budget divisé par trois.</p></div></article><div className="pwa-comparison animate-on-scroll"><article className="pwa-compare-card"><div className="compare-header"><span className="compare-icon">📱</span><div><h3>App native</h3><p className="compare-sub">iOS + Android séparés</p></div></div><ul><li><i className="fas fa-times-circle" aria-hidden="true" /> Coût élevé (×3 à ×4)</li><li><i className="fas fa-times-circle" aria-hidden="true" /> Délais longs (4 à 6 mois)</li><li><i className="fas fa-times-circle" aria-hidden="true" /> Maintenance double</li><li><i className="fas fa-times-circle" aria-hidden="true" /> Publication sur les stores</li></ul></article><article className="pwa-compare-card"><div className="compare-header"><span className="compare-icon"><i className="fas fa-bolt" aria-hidden="true" /></span><div><h3>PWA</h3><p className="compare-sub">Solution recommandée</p></div></div><ul><li><i className="fas fa-check-circle" aria-hidden="true" /> Coût maîtrisé (÷3)</li><li><i className="fas fa-check-circle" aria-hidden="true" /> Livraison en 6 semaines</li><li><i className="fas fa-check-circle" aria-hidden="true" /> Maintenance unique</li><li><i className="fas fa-check-circle" aria-hidden="true" /> Accessible via un lien</li></ul></article></div></div><div className="pwa-result animate-on-scroll"><div className="result-stats"><div><strong className="stat-value">−66 %</strong><p className="stat-label">Budget économisé</p></div><div><strong className="stat-value">6 sem.</strong><p className="stat-label">Délai de livraison</p></div><div><strong className="stat-value">+85 %</strong><p className="stat-label">Engagement utilisateur</p></div></div><blockquote className="result-quote">« Divin ne m’a pas vendu une application coûteuse. Il m’a écouté, compris mon budget et m’a proposé une solution qui a parfaitement répondu à mes besoins. »<br /><strong>Espoir Ndala, Fondateur · Art Gallery App</strong></blockquote></div></div></section>

        <section className="cta-section" id="cta"><div className="container"><div className="cta-content animate-on-scroll"><span className="cta-label"><i className="fas fa-bolt" aria-hidden="true" /> Prêt à démarrer ?</span><h2>Donnons vie à <span>votre projet</span> dès aujourd’hui</h2><p>Que vous ayez besoin d’un site web, d’une application ou d’une PWA, je suis là pour transformer votre idée en réalité digitale.</p><div className="cta-actions"><a href={wa('Bonjour Divin, je souhaite démarrer un projet')} target="_blank" rel="noreferrer" className="btn-primary">Démarrer mon projet <i className="fab fa-whatsapp" aria-hidden="true" /></a><a href="#commande" className="btn-secondary">Voir les forfaits <i className="fas fa-arrow-right" aria-hidden="true" /></a></div><div className="cta-trust"><span><i className="fas fa-check-circle" aria-hidden="true" /> Réponse en 24 h</span><span><i className="fas fa-check-circle" aria-hidden="true" /> Devis gratuit</span><span><i className="fas fa-check-circle" aria-hidden="true" /> Sans engagement</span></div></div></div></section>

        <section className="experience section-padding" id="experience"><div className="container"><SectionHeading title={<>Mon <span className="highlight">expérience</span></>}>Un cheminement riche en expériences qui ont façonné ma vision du design et du développement.</SectionHeading><div className="timeline">{experience.map(([year, role, location, description, tech]) => <article className="timeline-item animate-on-scroll" key={year}><span className="timeline-dot"><i className="fas fa-circle" aria-hidden="true" /></span><div className="timeline-content"><span className="year">{year}</span><h3>{role}</h3><p className="company"><i className="fas fa-building" aria-hidden="true" /> {location}</p><p className="desc">{description}</p><div className="tech-used">{tech.map((item) => <span key={item}>{item}</span>)}</div></div></article>)}</div></div></section>

        <section className="testimonials section-padding" id="testimonials"><div className="container"><SectionHeading title={<>Ce que disent <span className="highlight">mes clients</span></>}>Des retours de clients qui ont fait confiance à mon expertise.</SectionHeading><div className="testimonials-stats animate-on-scroll">{[['fa-star', '4.9', 'Note moyenne'], ['fa-smile', '98%', 'Clients satisfaits'], ['fa-redo', '85%', 'Clients fidèles'], ['fa-comment', '120+', 'Avis reçus']].map(([icon, value, label]) => <div className="testimonial-stat" key={label}><span className="stat-icon"><i className={`fas ${icon}`} aria-hidden="true" /></span><p className="stat-number">{value}</p><p className="stat-label">{label}</p></div>)}</div><div className="testimonials-carousel animate-on-scroll" ref={carouselRef} role="region" aria-roledescription="carrousel" aria-label="Avis de clients" tabIndex={0}><div className="testimonials-track">{testimonials.map(([quote, image, name, role, company], index) => <article className="testimonial-slide" key={name} role="group" aria-roledescription="diapositive" aria-label={`${index + 1} sur ${testimonials.length}`}><div className="testimonial-card"><div className="testimonial-rating" aria-label="Note : 5 sur 5">{Array.from({ length: 5 }, (_, index) => <i className="fas fa-star" aria-hidden="true" key={index} />)} <span className="rating-badge">5.0</span></div><blockquote>{quote}</blockquote><div className="client-info"><Image className="client-avatar" src={imagePath(image)} alt={`Portrait de ${name}`} width={52} height={52} unoptimized /><div className="client-details"><p className="client-name">{name}</p><p className="client-role">{role}</p><p className="client-company"><i className="fas fa-building" aria-hidden="true" /> {company}</p></div></div></div></article>)}</div></div><div className="carousel-controls"><button type="button" onClick={() => scrollToTestimonial((testimonialIndex - 1 + testimonials.length) % testimonials.length)} aria-label="Avis précédent"><i className="fas fa-chevron-left" aria-hidden="true" /></button><button type="button" onClick={() => scrollToTestimonial((testimonialIndex + 1) % testimonials.length)} aria-label="Avis suivant"><i className="fas fa-chevron-right" aria-hidden="true" /></button></div><div className="carousel-dots" role="group" aria-label="Choisir un témoignage">{testimonials.map(([, , name], index) => <button className={`dot${testimonialIndex === index ? ' active' : ''}`} key={name} type="button" onClick={() => scrollToTestimonial(index)} aria-label={`Afficher le témoignage de ${name}`} aria-pressed={testimonialIndex === index} />)}</div></div></section>

        <section className="commande section-padding" id="commande"><div className="container"><SectionHeading title={<>Choisissez votre <span className="highlight">offre</span></>}>Sélectionnez le forfait qui correspond le mieux à vos besoins.</SectionHeading><div className="commande-grid">{servicePlans.map((plan) => <article className="commande-card animate-on-scroll" key={plan.name}><h3>{plan.name}</h3><p>{plan.name === 'Startup' ? 'Site vitrine professionnel pour lancer votre activité.' : plan.name === 'Business' ? 'Site sur mesure optimisé SEO pour générer des clients.' : 'Transformation digitale complète avec stratégie de marque.'}</p><div className="commande-price">{plan.price}</div><a href={wa(`Bonjour Divin, je souhaite commander le forfait ${plan.name}`)} target="_blank" rel="noreferrer" className="btn-primary">Commander <i className="fab fa-whatsapp" aria-hidden="true" /></a></article>)}</div></div></section>

        <section className="contact section-padding" id="contact"><div className="container"><SectionHeading label="Contact" title={<>Travaillons <span className="highlight">ensemble</span></>}>Une question, un projet ? N’hésitez pas à me contacter. Je vous répondrai sous 24 h.</SectionHeading><div className="contact-grid"><div className="contact-info-card animate-on-scroll"><div className="contact-item"><span className="icon"><i className="fas fa-envelope" aria-hidden="true" /></span><div className="info"><h3>Email</h3><p><a href="mailto:divinntwali119@gmail.com">divinntwali119@gmail.com</a></p></div></div><div className="contact-item"><span className="icon"><i className="fab fa-whatsapp" aria-hidden="true" /></span><div className="info"><h3>WhatsApp</h3><p><a href="https://wa.me/243901087801" target="_blank" rel="noreferrer">+243 901 087 801</a></p></div></div><div className="contact-item"><span className="icon"><i className="fas fa-map-pin" aria-hidden="true" /></span><div className="info"><h3>Localisation</h3><p>Kinshasa, RDC, Mont-Ngafula</p></div></div><div className="contact-item"><span className="icon"><i className="fas fa-clock" aria-hidden="true" /></span><div className="info"><h3>Disponibilité</h3><p>Lun — Sam · 9 h — 19 h</p></div></div><nav className="footer-social" aria-label="Réseaux sociaux">{socialLinks.map(([href, name, icon]) => <a key={name} href={href} target="_blank" rel="noreferrer" aria-label={name}><i className={`fab ${icon}`} aria-hidden="true" /></a>)}</nav></div><ContactForm /></div><div className="bc-actions"><Link className="btn-secondary" href="/contact/">Page de contact complète <i className="fas fa-arrow-right" aria-hidden="true" /></Link></div></div></section>
      </main>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  );
}
