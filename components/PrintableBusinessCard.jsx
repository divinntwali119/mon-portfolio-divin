'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { imagePath } from '@/lib/paths';

const colorChoices = ['#dc2626', '#b91c1c', '#991b1b', '#7f1d1d'];
const initialDetails = {
  name: 'DIVIN NTWALI',
  title: 'Développeur Web & Informaticien',
  phone1: '+243901087801',
  phone2: '+243962104398',
  website: 'https://divinntwali119.github.io/mon-portfolio-divin/',
  address: 'Mont Ngafula RDC KINSHASA',
};

function BrandMark() {
  return <svg viewBox="0 0 100 100" aria-hidden="true"><path fillRule="evenodd" d="M 10,10 L 52,10 C 88,10 88,90 52,90 L 10,90 Z M 23,90 L 23,52 C 23,38 47,38 47,52 L 47,90 Z" /><path d="M 31,90 L 31,60 C 31,54 39,54 39,60 L 39,90 Z" /></svg>;
}

export default function PrintableBusinessCard() {
  const [color, setColor] = useState(colorChoices[0]);
  const [details, setDetails] = useState(initialDetails);
  const displayWebsite = details.website.replace(/^https?:\/\//, '');

  function updateField(event) {
    setDetails((current) => ({ ...current, [event.target.name]: event.target.value }));
  }

  return (
    <main className="print-page" style={{ '--primary-color': color }}>
      <header className="print-header no-print">
        <div className="print-header-inner">
          <div className="print-header-brand"><Image src={imagePath('photo-carte-de-visite.jpg')} alt="Portrait de Divin Ntwali" width={40} height={40} unoptimized /><div><h1>Carte de Visite Professionnelle</h1><p>Divin Ntwali — Développeur Web & Informaticien</p></div></div>
          <div className="print-header-actions"><fieldset className="print-colors"><legend>Couleur :</legend>{colorChoices.map((choice) => <button key={choice} type="button" style={{ backgroundColor: choice }} className={color === choice ? 'selected' : ''} aria-label={`Choisir la couleur ${choice}`} aria-pressed={color === choice} onClick={() => setColor(choice)} />)}</fieldset><Link href="/" className="print-back"><i className="fas fa-arrow-left" aria-hidden="true" /><span>Retour au portfolio</span></Link><button className="print-button" type="button" onClick={() => window.print()}><i className="fas fa-print" aria-hidden="true" /><span>Imprimer / PDF</span></button></div>
        </div>
      </header>

      <div className="print-layout">
        <section className="print-cards" aria-label="Aperçu de la carte de visite">
          <div className="print-card-wrapper"><p className="print-card-label no-print"><i className="fas fa-image" aria-hidden="true" /> Face Avant (Verso)</p><article className="print-business-card print-card-front"><span className="print-circle print-circle-one" /><span className="print-circle print-circle-two" /><div className="print-card-front-content"><div className="print-front-center"><span className="print-front-logo"><BrandMark /></span><h2>{details.name || ' '}</h2><p>{details.title.toUpperCase()}</p></div><span className="print-front-url">{displayWebsite}</span></div></article></div>
          <div className="print-card-wrapper"><p className="print-card-label no-print"><i className="fas fa-address-card" aria-hidden="true" /> Face Arrière (Recto)</p><article className="print-business-card print-card-back"><div className="print-card-back-content"><header className="print-card-back-header"><div><h2>{details.name || ' '}</h2><p>{details.title}</p></div><span className="print-back-logo"><BrandMark /></span></header><div className="print-card-back-body"><div className="print-card-back-details"><p><i className="fas fa-phone" aria-hidden="true" /><span>{details.phone1}<small>{details.phone2}</small></span></p><p><i className="fas fa-globe" aria-hidden="true" /><span className="print-url">{displayWebsite}</span></p><p><i className="fas fa-location-dot" aria-hidden="true" /><span>{details.address}</span></p></div><div className="print-qr"><Image src={imagePath('qr-code.png')} alt="QR Code du portfolio de Divin Ntwali" width={150} height={150} unoptimized /><span>Scannez-moi</span></div></div><span className="print-card-accent" /></div></article></div>
        </section>

        <aside className="print-customization no-print"><div><h2><i className="fas fa-sliders" aria-hidden="true" /> Personnaliser la Carte</h2><p>Modifiez vos informations ci-dessous pour mettre à jour la prévisualisation.</p></div><form onSubmit={(event) => event.preventDefault()}>
          <div className="print-input"><label htmlFor="card-name">Nom & Prénom</label><input id="card-name" name="name" value={details.name} onChange={updateField} /></div>
          <div className="print-input"><label htmlFor="card-title">Titre / Profession</label><input id="card-title" name="title" value={details.title} onChange={updateField} /></div>
          <div className="print-input-row"><div className="print-input"><label htmlFor="card-phone1">Téléphone 1</label><input id="card-phone1" name="phone1" value={details.phone1} onChange={updateField} /></div><div className="print-input"><label htmlFor="card-phone2">Téléphone 2</label><input id="card-phone2" name="phone2" value={details.phone2} onChange={updateField} /></div></div>
          <div className="print-input"><label htmlFor="card-website">Site Web / Portfolio</label><input id="card-website" name="website" type="url" value={details.website} onChange={updateField} /></div>
          <div className="print-input"><label htmlFor="card-address">Adresse</label><input id="card-address" name="address" value={details.address} onChange={updateField} /></div>
        </form><div className="print-tips"><strong><i className="fas fa-circle-info" aria-hidden="true" /> Conseils pour l’impression :</strong><ul><li>Sélectionnez la destination « Enregistrer au format PDF » ou votre imprimante.</li><li>Réglez les marges sur « Aucune ».</li><li>Cochez « Graphiques d’arrière-plan » dans les options d’impression.</li></ul></div></aside>
      </div>
    </main>
  );
}
