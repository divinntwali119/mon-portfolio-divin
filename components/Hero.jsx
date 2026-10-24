'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { imagePath } from '@/lib/paths';

const slides = [
  { src: 'True colours.jpeg', alt: 'Divin Ntwali, développeur et artiste numérique à Kinshasa' },
  { src: 'https://images.unsplash.com/photo-1549692520-acc6669e2f0c?w=1600&q=80', alt: 'Designer UI/UX et créateur d’interfaces' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600&q=80', alt: 'Code et innovation en développement web' },
  { src: 'True colours.jpeg', alt: 'Développement mobile et PWA en RDC' },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const interval = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 5500);
    return () => window.clearInterval(interval);
  }, [paused]);

  return (
    <section
      className="hero"
      id="home"
      aria-labelledby="hero-title"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
      }}
    >
      <div className="hero-slideshow" aria-hidden="true">
        {slides.map((slide, index) => (
          <div className={`hero-slide${index === activeSlide ? ' active' : ''}`} key={`${slide.src}-${index}`} aria-hidden={index !== activeSlide}>
            <Image src={slide.src.startsWith('http') ? slide.src : imagePath(slide.src)} alt={slide.alt} fill priority={index === 0} sizes="100vw" unoptimized />
          </div>
        ))}
        <div className="hero-slide-shade" />
      </div>

      <div className="container">
        <div className="hero-content animate-on-scroll visible">
          <h1 id="hero-title">
            <span className="hero-intro">Hi, je suis</span>
            <span className="hero-name">Divin Ntwali</span>
            <span className="highlight">Développeur Full-Stack</span>
            <span className="hero-role">& Designer d’expériences numériques à Kinshasa</span>
          </h1>
          <p className="subtitle">
            Je crée des <strong>sites web</strong>, <strong>applications mobiles</strong> et <strong>PWA</strong> sur mesure pour les entreprises et entrepreneurs en RDC et partout dans le monde. De la conception au déploiement, je transforme vos idées en solutions digitales performantes.
          </p>
          <div className="hero-tags" aria-label="Domaines d'expertise">
            <span><i className="fas fa-pen-fancy" aria-hidden="true" /> UI/UX Design</span>
            <span><i className="fas fa-code" aria-hidden="true" /> Web Development</span>
            <span><i className="fas fa-mobile-alt" aria-hidden="true" /> Mobile Apps</span>
            <span><i className="fas fa-bolt" aria-hidden="true" /> PWA</span>
            <span><i className="fas fa-brain" aria-hidden="true" /> Brand Strategy</span>
          </div>
          <div className="hero-buttons">
            <a href="#projects" className="btn-primary">Voir mes projets <i className="fas fa-arrow-right" aria-hidden="true" /></a>
            <a href="#contact" className="btn-secondary">Devis gratuit</a>
          </div>
          <div className="hero-stats">
            <div className="stat-item"><div className="number">6+</div><div className="label">Années d’expérience</div></div>
            <div className="stat-item"><div className="number">50+</div><div className="label">Projets livrés</div></div>
            <div className="stat-item"><div className="number">500+</div><div className="label">Clients satisfaits</div></div>
          </div>
          <div className="hero-indicators" role="group" aria-label="Choisir une image du diaporama">
            {slides.map((slide, index) => (
              <button
                key={`${slide.src}-${index}`}
                className={`hero-indicator${index === activeSlide ? ' active' : ''}`}
                type="button"
                aria-label={`Afficher l'image ${index + 1}`}
                aria-pressed={index === activeSlide}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
