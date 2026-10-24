'use client';

import { useEffect } from 'react';

export default function ScrollEffects() {
  useEffect(() => {
    document.body.classList.add('animations-ready');
    const elements = document.querySelectorAll('.animate-on-scroll, .skill-block');

    if (!('IntersectionObserver' in window)) {
      elements.forEach((element) => element.classList.add('visible', 'animated'));
      return () => document.body.classList.remove('animations-ready');
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible', 'animated');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });

    elements.forEach((element) => observer.observe(element));
    return () => {
      observer.disconnect();
      document.body.classList.remove('animations-ready');
    };
  }, []);

  return null;
}
