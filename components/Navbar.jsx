'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { imagePath, sitePath } from '@/lib/paths';

const sectionLinks = [
  ['home', 'Accueil', '/#home'],
  ['about', 'À propos', '/about/'],
  ['carte-visite', 'Carte', '/carte-de-visite/'],
  ['projects', 'Projets', '/projects/'],
  ['services', 'Services', '/#services'],
  ['pwa', 'PWA', '/#pwa'],
  ['experience', 'Parcours', '/#experience'],
  ['testimonials', 'Avis', '/#testimonials'],
  ['contact', 'Contact', '/contact/'],
  ['cv', 'Mon CV', '/mon_CV.html'],
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentSection, setCurrentSection] = useState('home');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const isLight = savedTheme === 'light';
    setLightMode(isLight);
    document.body.classList.toggle('light-mode', isLight);

    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const sections = [...document.querySelectorAll('main section[id]')];
    const updateCurrentSection = () => {
      const activeSection = sections.findLast((section) => section.getBoundingClientRect().top <= 140);
      if (activeSection) setCurrentSection(activeSection.id);
    };
    window.addEventListener('scroll', updateCurrentSection, { passive: true });
    updateCurrentSection();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('scroll', updateCurrentSection);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  function toggleTheme() {
    const nextTheme = !lightMode;
    setLightMode(nextTheme);
    document.body.classList.toggle('light-mode', nextTheme);
    window.localStorage.setItem('theme', nextTheme ? 'light' : 'dark');
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="site-chrome">
      <nav className={`navbar site-navbar${scrolled ? ' scrolled' : ''}`} aria-label="Navigation principale">
        <div className="container">
          <button
            className={`menu-toggle${menuOpen ? ' active' : ''}`}
            type="button"
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="menu-icon" aria-hidden="true"><span /><span /><span /></span>
          </button>

          <Link className="logo-wrapper" href="/#home" aria-label="Divin Ntwali - Accueil">
            <Image
              src={imagePath('photo.jpg')}
              alt="Divin Ntwali, développeur full-stack à Kinshasa"
              className="logo-avatar"
              width={40}
              height={40}
              loading="eager"
              unoptimized
            />
            <span className="logo">Divin<span>.</span></span>
          </Link>

          <ul className="nav-links">
            {sectionLinks.map(([id, label, href]) => (
              <li key={id}><a className={id === 'cv' ? 'cv-nav-button' : currentSection === id ? 'active' : ''} aria-current={currentSection === id ? 'location' : undefined} href={sitePath(href)}>{label}</a></li>
            ))}
            <li>
              <button
                className="theme-toggle"
                type="button"
                onClick={toggleTheme}
                aria-label={`Activer le mode ${lightMode ? 'sombre' : 'clair'}`}
                title={`Activer le mode ${lightMode ? 'sombre' : 'clair'}`}
              >
                <i className={`fas ${lightMode ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
              </button>
            </li>
          </ul>
          <span className="navbar-spacer" aria-hidden="true" />
        </div>
      </nav>

      <div id="mobile-menu" className={`mobile-menu${menuOpen ? ' active' : ''}`} aria-hidden={!menuOpen}>
        <button className="close-menu" type="button" onClick={closeMenu} aria-label="Fermer le menu">
          <i className="fas fa-times" aria-hidden="true" />
        </button>
        {sectionLinks.map(([id, label, href], index) => (
          <a
            key={id}
            className={id === 'cv' ? 'cv-nav-button' : undefined}
            href={sitePath(href)}
            onClick={closeMenu}
            tabIndex={menuOpen ? 0 : -1}
            style={{ animationDelay: `${0.03 * (index + 1)}s` }}
          >
            <i className={`fas ${['fa-home', 'fa-user', 'fa-id-card', 'fa-folder-open', 'fa-briefcase', 'fa-mobile-alt', 'fa-history', 'fa-star', 'fa-envelope', 'fa-file-alt'][index]}`} aria-hidden="true" />
            {label}
          </a>
        ))}
        <a href={sitePath('/#commande')} onClick={closeMenu} tabIndex={menuOpen ? 0 : -1}>
          <i className="fas fa-shopping-cart" aria-hidden="true" /> Commande
        </a>
        <button className="mobile-theme-toggle" type="button" onClick={toggleTheme}>
          <i className={`fas ${lightMode ? 'fa-sun' : 'fa-moon'}`} aria-hidden="true" />
          Mode {lightMode ? 'sombre' : 'clair'}
        </button>
      </div>
    </div>
  );
}
