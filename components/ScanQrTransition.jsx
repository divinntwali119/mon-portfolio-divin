'use client';

import { useEffect } from 'react';
import { sitePath } from '@/lib/paths';

const profileUrl = sitePath('/carte-de-visite/#scan-banner');

export default function ScanQrTransition() {
  useEffect(() => {
    const timeout = window.setTimeout(() => {
      window.location.assign(profileUrl);
    }, 4000);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <main className="scan-page" id="main-content">
      <div className="scan-glow" aria-hidden="true" />
      <section className="scan-card" aria-labelledby="scan-title">
        <div className="scan-check"><i className="fas fa-check" aria-hidden="true" /></div>
        <h1 id="scan-title">QR Code scanné avec succès</h1>
        <p className="scan-subtitle">Bienvenue sur la carte de visite numérique de <strong>Divin Ntwali</strong>.<br />Redirection vers le portfolio en cours…</p>
        <div className="scan-progress" aria-hidden="true"><span /></div>
        <p className="scan-status"><i className="fas fa-circle-notch fa-spin" aria-hidden="true" /> Chargement du portfolio</p>
        <a href={profileUrl} className="scan-continue">Continuer maintenant <i className="fas fa-arrow-right" aria-hidden="true" /></a>
      </section>
    </main>
  );
}
