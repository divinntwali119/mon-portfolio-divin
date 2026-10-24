'use client';

import { useState } from 'react';
import Link from 'next/link';
import { sitePath } from '@/lib/paths';

const socialLinks = [
  ['https://github.com/divinntwali', 'GitHub', 'fa-github'],
  ['https://www.linkedin.com/in/divin-ntwali-bagalwa-53b560446', 'LinkedIn', 'fa-linkedin-in'],
  ['https://twitter.com/divinntwali', 'Twitter', 'fa-twitter'],
  ['https://instagram.com/divinntwali', 'Instagram', 'fa-instagram'],
  ['https://www.facebook.com/DivinDesign', 'Facebook', 'fa-facebook-f'],
  ['https://www.youtube.com/@Divin_Design', 'YouTube', 'fa-youtube'],
  ['https://tiktok.com/@divinntwali20', 'TikTok', 'fa-tiktok'],
];

export default function Footer() {
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  function handleNewsletter(event) {
    event.preventDefault();
    setNewsletterSubmitted(true);
    event.currentTarget.reset();
  }

  return (
    <footer className="footer site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a className="logo" href={sitePath('/#home')}>Divin<span>.</span></a>
            <p>Développeur web & mobile et designer UI/UX à Kinshasa, RDC. Je crée des expériences numériques qui font la différence.</p>
            <div className="footer-social" aria-label="Réseaux sociaux">
              {socialLinks.map(([url, label, icon]) => (
                <a key={label} href={url} target="_blank" rel="noreferrer" aria-label={label}>
                  <i className={`fab ${icon}`} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <nav className="footer-links" aria-label="Navigation de pied de page">
            <h2>Navigation</h2>
            <a href={sitePath('/#home')}>Accueil</a>
            <a href={sitePath('/#about')}>À propos</a>
            <a href={sitePath('/#carte-visite')}>Carte de visite</a>
            <a href={sitePath('/#projects')}>Projets</a>
            <a href={sitePath('/#services')}>Services</a>
            <a href={sitePath('/#pwa')}>Étude PWA</a>
            <a href={sitePath('/#experience')}>Parcours</a>
            <a href={sitePath('/#testimonials')}>Avis</a>
            <a href={sitePath('/#commande')}>Commande</a>
          </nav>

          <div className="footer-links">
            <h2>Découvrir</h2>
            <a href={sitePath('/about/')}>À propos de moi</a>
            <a href={sitePath('/projects/')}>Tous les projets</a>
            <a href={sitePath('/contact/')}>Me contacter</a>
            <a href={sitePath('/carte-de-visite/')}>Carte de visite</a>
            <a href={sitePath('/carte-de-visite-divin-ntwali/')}>Carte imprimable</a>
          </div>

          <div className="footer-newsletter">
            <h2>Newsletter</h2>
            <p>Recevez mes conseils design & dev chaque mois.</p>
            <form onSubmit={handleNewsletter}>
              <label className="sr-only" htmlFor="newsletter-email">Votre adresse email</label>
              <input id="newsletter-email" type="email" placeholder="Votre email" required />
              <button type="submit">S’abonner</button>
            </form>
            {newsletterSubmitted && <p className="form-status" role="status">Merci pour votre abonnement !</p>}
          </div>
        </div>

          <div className="footer-bottom">
          <p>© 2026 Divin Ntwali — Développeur Web & Mobile à Kinshasa, RDC</p>
          <div className="footer-legal"><Link href="/#contact">Confidentialité</Link><Link href="/#contact">Conditions</Link></div>
        </div>
      </div>
    </footer>
  );
}
