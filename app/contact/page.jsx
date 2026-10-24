import ContactForm from '@/components/ContactForm';
import { createPageMetadata } from '@/lib/seo';

export const metadata = createPageMetadata(
  'Contact',
  'Contactez Divin Ntwali pour discuter de votre projet web, mobile ou design.',
  '/contact/',
);

export default function ContactPage() {
  return (
    <main className="interior-page" id="main-content">
      <section className="interior-hero"><div className="container"><span className="section-label">Contact</span><h1>Travaillons <span className="highlight">ensemble</span></h1><p>Une question, un projet ? Écrivez-moi : je vous répondrai sous 24 heures.</p></div></section>
      <section className="section-padding"><div className="container contact-grid contact-page-grid"><div className="contact-info-card"><div className="contact-item"><span className="icon"><i className="fas fa-envelope" aria-hidden="true" /></span><div className="info"><h2>Email</h2><p><a href="mailto:divinntwali119@gmail.com">divinntwali119@gmail.com</a></p></div></div><div className="contact-item"><span className="icon"><i className="fab fa-whatsapp" aria-hidden="true" /></span><div className="info"><h2>WhatsApp</h2><p><a href="https://wa.me/243901087801" target="_blank" rel="noreferrer">+243 901 087 801</a></p></div></div><div className="contact-item"><span className="icon"><i className="fas fa-map-pin" aria-hidden="true" /></span><div className="info"><h2>Localisation</h2><p>Kinshasa, RDC, Mont-Ngafula</p></div></div><div className="contact-item"><span className="icon"><i className="fas fa-clock" aria-hidden="true" /></span><div className="info"><h2>Disponibilité</h2><p>Lun - Sam · 9h - 19h</p></div></div><div className="contact-availability"><i className="fas fa-circle" aria-hidden="true" /> Disponible pour de nouveaux projets</div></div>
        <ContactForm />
      </div></section>
    </main>
  );
}
