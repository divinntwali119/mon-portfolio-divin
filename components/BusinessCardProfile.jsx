'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imagePath, sitePath } from '@/lib/paths';

const experienceItems = [
  ['fa-laptop-code', 'Développeur Full Stack & Designer', ['Divin Design', 'Kinshasa, RDC', 'En cours'], 'Conception de solutions numériques complètes : sites web, applications web et supports visuels pour particuliers, entreprises et organisations.'],
  ['fa-rocket', 'Projets & Collaborations numériques', ['Indépendant', 'Full Stack'], "Création d’interfaces web dynamiques et responsives, intégration Django, développement d’API, digitalisation de structures et création d’identités visuelles."],
  ['fa-paint-brush', 'Designer Graphique', ['Freelance', '4+ ans'], "Création d’affiches, flyers, publications réseaux sociaux, identités visuelles et maquettes UI/UX pour divers clients et organisations."],
];

const educationItems = [
  ['fa-university', 'Mathématiques & Informatique — 2e année en cours', ['UNIKIN', 'Depuis 2025'], 'Étudiant à la Faculté des Sciences et Technologies de l’Université de Kinshasa. Formation académique en mathématiques et informatique.'],
  ['fa-book', 'Formation autodidacte & pratique continue', ['Auto-formation', 'Continue'], 'Python, Django, JavaScript, PostgreSQL, Git & GitHub, IA appliquée au développement, design graphique, Adobe Photoshop, UI/UX et Figma.'],
  ['fa-certificate', 'Certifications & spécialisations', ['IA appliquée', 'Design'], 'Formations continues en intelligence artificielle appliquée au développement, design graphique et outils numériques modernes.'],
];

const skills = [
  { title: 'Développement', subtitle: 'Front-end & Back-end', icon: 'fa-code', items: [['HTML5 / CSS3', 92, 'Expert', 'fa-html5'], ['JavaScript', 85, 'Avancé', 'fa-js'], ['Python', 88, 'Avancé', 'fa-python'], ['Django', 85, 'Avancé', 'fa-server'], ['PostgreSQL', 80, 'Avancé', 'fa-database'], ['Git / GitHub', 82, 'Avancé', 'fa-git-alt']] },
  { title: 'Design & UI/UX', subtitle: 'Création visuelle & interfaces', icon: 'fa-palette', items: [['Adobe Photoshop', 90, 'Expert', 'fa-image'], ['Design graphique', 90, 'Expert', 'fa-paint-brush'], ['Identité visuelle', 85, 'Avancé', 'fa-fingerprint'], ['Figma UI/UX', 82, 'Avancé', 'fa-drafting-compass'], ['Affiches & Flyers', 92, 'Expert', 'fa-bullhorn'], ['Responsive Design', 88, 'Avancé', 'fa-mobile-alt']] },
];

const services = [
  ['fa-code', 'Développement web', ['Sites vitrines & Plateformes', 'Applications Web & PWA', 'Bases de données & API']],
  ['fa-paint-brush', 'Design graphique', ['Affiches & Flyers', 'Identité visuelle & Logo', 'Maquettes UI/UX']],
  ['fa-rocket', 'Solutions numériques', ["Digitalisation d’entreprises", 'Intégration d’outils IA', 'Conseil & Accompagnement']],
];

const platforms = [
  ['https://www.linkedin.com/in/divin-ntwali-bagalwa-53b560446', 'LinkedIn', 'divin-ntwali-bagalwa-53b560446', 'linkedin', 'fa-linkedin-in'],
  ['https://github.com/divinntwali119', 'GitHub', '@divinntwali119', 'github', 'fa-github'],
  ['https://divinntwali119.github.io/mon-portfolio-divin/', 'Portfolio', 'divinntwali119.github.io', 'portfolio-site', 'fa-globe'],
  ['mailto:divinntwali119@gmail.com', 'Email', 'divinntwali119@gmail.com', 'email', 'fa-envelope'],
  ['https://www.facebook.com/divindesign', 'Facebook', 'Divin Ntwali', 'facebook', 'fa-facebook-f'],
  ['https://www.instagram.com/divinntwali.dev/', 'Instagram', '@divin.ntwali', 'instagram', 'fa-instagram'],
  ['https://www.tiktok.com/@divinntwali.dev', 'TikTok', 'Divin Ntwali', 'tiktok', 'fa-tiktok'],
  ['https://x.com/@DivinNtwalidev', 'X (Twitter)', 'Divin Ntwali', 'twitter', 'fa-x-twitter'],
  ['https://www.youtube.com/@Divin_Design', 'YouTube', 'Divin Ntwali', 'youtube', 'fa-youtube'],
  ['https://wa.me/243901087801', 'WhatsApp', 'Discuter maintenant', 'whatsapp', 'fa-whatsapp'],
];

function Mark() {
  return <svg viewBox="0 0 100 100" className="business-mark" aria-hidden="true"><path fillRule="evenodd" d="M 10,10 L 52,10 C 88,10 88,90 52,90 L 10,90 Z M 23,90 L 23,52 C 23,38 47,38 47,52 L 47,90 Z" /><path d="M 31,90 L 31,60 C 31,54 39,54 39,60 L 39,90 Z" /></svg>;
}

function PreviewCards() {
  return (
    <div className="profile-card-preview">
      <div className="profile-preview-card">
        <span className="profile-preview-label"><i className="fas fa-image" aria-hidden="true" /> Face Avant</span>
        <div className="profile-business-card profile-card-front"><div className="profile-card-center"><Mark /><h3>DIVIN NTWALI</h3><p>Développeur Web & Informaticien</p></div><span>divinntwali119.github.io/mon-portfolio-divin/</span></div>
      </div>
      <div className="profile-preview-card">
        <span className="profile-preview-label"><i className="fas fa-address-card" aria-hidden="true" /> Face Arrière</span>
        <div className="profile-business-card profile-card-back"><div className="profile-card-header"><div><h3>DIVIN NTWALI</h3><p>Développeur Web & Informaticien</p></div><Mark /></div><div className="profile-card-body"><div className="profile-card-details"><p><i className="fas fa-phone" aria-hidden="true" /><span>+243901087801<br /><small>+243962104398</small></span></p><p><i className="fas fa-globe" aria-hidden="true" /><span>divinntwali119.github.io/mon-portfolio-divin/</span></p><p><i className="fas fa-location-dot" aria-hidden="true" /><span>Mont Ngafula RDC KINSHASA</span></p></div><div className="profile-card-qr"><Image src={imagePath('qr-code.png')} alt="QR Code du portfolio" width={120} height={120} unoptimized /><span>Scannez-moi</span></div></div><span className="profile-card-accent" /></div>
      </div>
    </div>
  );
}

export default function BusinessCardProfile() {
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.profile-skill-fill').forEach((bar) => bar.classList.add('animated'));
      return undefined;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('.profile-skill-block').forEach((block) => observer.observe(block));
    return () => observer.disconnect();
  }, []);

  const selectedJourney = activeTab === 'experience' ? experienceItems : educationItems;

  return (
    <main className="profile-page" id="main-content">
      <div className="profile-container">
        <section className="linkedin-card">
          <div className="profile-banner"><div className="profile-banner-overlay" /><span className="profile-banner-watermark">Divin.</span><Image className="profile-banner-portrait" src={imagePath('552676407_122271216524034821_6934299949075729428_n.jpg')} alt="Portrait de Divin Ntwali" width={360} height={510} priority unoptimized /><div className="profile-banner-content"><p><strong>Divin Ntwali</strong> &nbsp;|&nbsp; Full Stack & Designer</p><h1>Développer.<br />Concevoir. Innover.</h1><a href="#profile-contact" className="profile-banner-cta">Demander un audit / devis</a></div></div>
          <div className="profile-avatar"><Image src={imagePath('552676407_122271216524034821_6934299949075729428_n.jpg')} alt="Photo de profil de Divin Ntwali" width={130} height={130} unoptimized /></div>
          <div className="profile-intro"><h2>Divin Ntwali <span className="verified-badge" aria-label="Profil vérifié">✓</span></h2><p><strong>Développeur Full Stack & Designer Graphique</strong> — Divin Design</p><p className="profile-location"><i className="fas fa-map-marker-alt" aria-hidden="true" /> Kinshasa, République démocratique du Congo</p><div className="profile-actions"><a href="#profile-contact" className="btn-action red"><i className="fas fa-paper-plane" aria-hidden="true" /> Me contacter</a><a href={sitePath('/')} className="btn-action outline"><i className="fas fa-globe" aria-hidden="true" /> Portfolio</a><Link href="/carte-de-visite-divin-ntwali/" className="btn-action outline"><i className="fas fa-id-card" aria-hidden="true" /> Carte de visite</Link></div></div>
        </section>

        <section className="profile-section" id="carte-visite-preview"><header className="profile-section-header"><h2><i className="fas fa-id-card" aria-hidden="true" /> Ma carte de visite</h2><p>Aperçu de ma carte de visite professionnelle — disponible en version imprimable et personnalisable.</p></header><PreviewCards /><div className="profile-actions profile-card-actions"><Link href="/carte-de-visite-divin-ntwali/" className="btn-preview"><i className="fas fa-pen-to-square" aria-hidden="true" /> Personnaliser ma carte</Link><Link href="/carte-de-visite-divin-ntwali/" className="btn-preview-outline"><i className="fas fa-print" aria-hidden="true" /> Imprimer / PDF</Link></div></section>

        <section className="scan-banner" id="scan-banner"><div className="scan-banner-icon"><i className="fas fa-qrcode" aria-hidden="true" /></div><div><h2><i className="fas fa-check-circle" aria-hidden="true" /> QR Code scanné avec succès</h2><p>Bienvenue sur la carte de visite numérique de <strong>Divin Ntwali</strong>. Explorez son parcours ci-dessous.</p></div><Link href="/carte-de-visite-divin-ntwali/" className="profile-primary-link"><i className="fas fa-id-card" aria-hidden="true" /> Voir la carte de visite</Link></section>

        <section className="profile-section" id="profile-about"><h2 className="profile-section-title"><i className="fas fa-user" aria-hidden="true" /> À propos de moi</h2><div className="profile-about-grid"><div><p>Je suis <strong>Divin Ntwali</strong>, développeur Full Stack et designer graphique basé à <strong>Kinshasa, RDC</strong>. Passionné par la programmation et le design, je conçois des solutions numériques adaptées aux besoins des particuliers, entreprises et organisations.</p><p>À travers mes projets, je combine <strong>technologie, créativité et simplicité</strong> pour offrir des expériences numériques modernes et accessibles.</p><p>Avec plus de <strong>4 ans d’expérience en design graphique</strong> et plusieurs années de pratique dans le développement, j’accompagne mes clients dans leur transformation digitale.</p><div className="expertise-tags">{['Développement Web', 'Django & Python', 'JavaScript', 'Design Graphique', 'UI/UX', 'Intelligence Artificielle'].map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div></div><aside className="vision-box"><h3><i className="fas fa-bullseye" aria-hidden="true" /> Ma vision</h3><ul>{['Créativité et innovation constante.', 'Discipline et apprentissage continu.', 'Professionnalisme et solutions concrètes.', 'Contribuer à la transformation numérique en Afrique.'].map((item) => <li key={item}><i className="fas fa-check" aria-hidden="true" />{item}</li>)}</ul></aside></div></section>

        <section className="profile-section" id="parcours"><h2 className="profile-section-title"><i className="fas fa-route" aria-hidden="true" /> Parcours</h2><div className="parcours-tabs" role="tablist" aria-label="Parcours professionnel et formation"><button className={activeTab === 'experience' ? 'active' : ''} type="button" role="tab" aria-selected={activeTab === 'experience'} aria-controls="panel-experience" onClick={() => setActiveTab('experience')}><i className="fas fa-briefcase" aria-hidden="true" /> Expérience</button><button className={activeTab === 'formation' ? 'active' : ''} type="button" role="tab" aria-selected={activeTab === 'formation'} aria-controls="panel-formation" onClick={() => setActiveTab('formation')}><i className="fas fa-graduation-cap" aria-hidden="true" /> Formation</button></div><div className="profile-timeline" id={`panel-${activeTab}`} role="tabpanel" aria-labelledby={activeTab}>{selectedJourney.map(([icon, title, badges, description]) => <article className="profile-timeline-row" key={title}><span className="profile-timeline-icon"><i className={`fas ${icon}`} aria-hidden="true" /></span><div className="profile-timeline-content"><h3>{title}</h3><div className="profile-badges">{badges.map((badge) => <span key={badge}>{badge}</span>)}</div><p>{description}</p></div></article>)}</div></section>

        <section className="profile-section" id="competences"><h2 className="profile-section-title"><i className="fas fa-cogs" aria-hidden="true" /> Compétences</h2><div className="profile-skills">{skills.map((group) => <article className="profile-skill-block" key={group.title}><header><span><i className={`fas ${group.icon}`} aria-hidden="true" /></span><div><h3>{group.title}</h3><p>{group.subtitle}</p></div></header><div className="profile-skill-list">{group.items.map(([name, level, label, icon]) => <div className="profile-skill-row" key={name}><span className="profile-skill-icon"><i className={`fab ${icon}`} aria-hidden="true" /></span><div className="profile-skill-info"><h4>{name}</h4><div className="profile-skill-bar"><span className="profile-skill-fill" style={{ '--skill-level': `${level}%` }} /></div></div><span className="profile-skill-level">{label}</span></div>)}</div></article>)}</div></section>

        <section className="profile-section" id="profile-services"><h2 className="profile-section-title"><i className="fas fa-tasks" aria-hidden="true" /> Services</h2><div className="profile-services">{services.map(([icon, title, items]) => <article key={title}><i className={`fas ${icon}`} aria-hidden="true" /><h3>{title}</h3><ul>{items.map((item) => <li key={item}>{item}</li>)}</ul><p>Sur devis</p><a href="#profile-contact">Demander un devis</a></article>)}</div></section>

        <section className="profile-section" id="profile-portfolio"><h2 className="profile-section-title"><i className="fas fa-folder-open" aria-hidden="true" /> Réalisations</h2><div className="profile-work-grid">{[['fa-user-circle', 'Portfolio personnel', 'Présentation de mes projets web et réalisations graphiques.'], ['fa-map-marked-alt', 'Kongo Explorer Kinshasa', 'Plateforme dédiée à la découverte touristique de Kinshasa.'], ['fa-leaf', 'CENUMEP RDC', 'Plateforme numérique et supports digitaux.']].map(([icon, title, description]) => <article key={title}><h3><i className={`fas ${icon}`} aria-hidden="true" /> {title}</h3><p>{description}</p><Link href="/projects/">Voir les projets <i className="fas fa-arrow-right" aria-hidden="true" /></Link></article>)}</div></section>

        <section className="profile-section" id="plateformes"><h2 className="profile-section-title"><i className="fas fa-share-alt" aria-hidden="true" /> Plateformes & Réseaux</h2><p className="platforms-intro">Retrouvez-moi et suivez mon travail sur toutes ces plateformes. N’hésitez pas à me contacter directement.</p><div className="platforms-grid">{platforms.map(([href, title, handle, style, icon]) => <a href={href} key={title} className={`platform-card ${style}`} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined}><span className="platform-icon"><i className={`fab ${icon}`} aria-hidden="true" /></span><span className="platform-info"><strong>{title}</strong><small>{handle}</small></span><i className="fas fa-arrow-right platform-arrow" aria-hidden="true" /></a>)}</div></section>

        <section className="profile-section" id="profile-contact"><h2 className="profile-section-title"><i className="fas fa-envelope" aria-hidden="true" /> Contact & Documents</h2><div className="profile-contact-grid"><div className="profile-contact-list"><div><i className="fas fa-envelope" aria-hidden="true" /><span><strong>Email</strong><a href="mailto:divinntwali119@gmail.com">divinntwali119@gmail.com</a></span></div><div><i className="fas fa-map-marker-alt" aria-hidden="true" /><span><strong>Localisation</strong><span>Kinshasa, RDC</span></span></div><div><i className="fas fa-globe" aria-hidden="true" /><span><strong>Portfolio</strong><a href={sitePath('/')}>divinntwali119.github.io</a></span></div><div><i className="fas fa-clock" aria-hidden="true" /><span><strong>Disponibilité</strong><span>En semaine, selon les projets</span></span></div></div><div><h3 className="docs-title"><i className="fas fa-file-alt" aria-hidden="true" /> Documents</h3>{['CV complet', 'Brochure de services', 'Portfolio PDF'].map((document) => <div className="doc-item" key={document}><i className="fas fa-file-pdf" aria-hidden="true" /><span><strong>{document}</strong><small>PDF — À venir</small></span><i className="fas fa-download" aria-hidden="true" /></div>)}</div></div></section>

        <section className="profile-cta"><h2>Un projet en tête ?</h2><p>Construisons ensemble une solution numérique adaptée à vos besoins et à vos ambitions.</p><div><a className="btn-action red" href="mailto:divinntwali119@gmail.com">Me contacter</a><Link className="btn-action outline" href="/projects/">Voir les projets</Link></div></section>
        <footer className="profile-footer"><p>© 2026 <strong>Divin Ntwali</strong> — Divin Design. Tous droits réservés.</p><p>Développer. Concevoir. Innover.</p></footer>
      </div>
    </main>
  );
}
