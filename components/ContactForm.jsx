'use client';

import { useState } from 'react';

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const subject = String(data.get('subject') || 'Demande de projet');
    const body = `Nom: ${data.get('name')}\nEmail: ${data.get('email')}\n\nMessage:\n${data.get('message')}`;
    window.location.href = `mailto:divinntwali119@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
    form.reset();
  }

  return (
    <form className="contact-form-card" onSubmit={handleSubmit}>
      <div className="form-group"><label htmlFor="page-contact-name">Votre nom</label><input id="page-contact-name" name="name" autoComplete="name" required /></div>
      <div className="form-group"><label htmlFor="page-contact-email">Votre email</label><input id="page-contact-email" name="email" type="email" autoComplete="email" required /></div>
      <div className="form-group"><label htmlFor="page-contact-subject">Sujet</label><input id="page-contact-subject" name="subject" placeholder="Demande de projet" /></div>
      <div className="form-group"><label htmlFor="page-contact-message">Votre message</label><textarea id="page-contact-message" name="message" required /></div>
      <button className="btn-primary" type="submit">Préparer le message <i className="fas fa-paper-plane" aria-hidden="true" /></button>
      {submitted && <p className="form-status" role="status" aria-live="polite">Votre message a été préparé dans votre application email. Veuillez confirmer l’envoi.</p>}
    </form>
  );
}
