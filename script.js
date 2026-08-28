// ============================================
// PRELOADER - Temps de chargement réduit à 3s max
// ============================================
(function() {
    const preloader = document.getElementById('preloader');
    const loaderFill = document.getElementById('loaderFill');
    const loaderPercent = document.getElementById('loaderPercent');
    let progress = 0;
    let startTime = Date.now();
    const maxDuration = 3000; // 3 secondes maximum

    function updateLoader() {
        const elapsed = Date.now() - startTime;
        
        // Accélérer la progression si on approche de la limite
        let increment;
        if (elapsed > maxDuration * 0.7) {
            increment = Math.random() * 25 + 10;
        } else {
            increment = Math.random() * 12 + 3;
        }
        
        progress += increment;
        if (progress > 100) progress = 100;
        
        loaderFill.style.width = progress + '%';
        loaderPercent.textContent = Math.round(progress) + '%';

        if (progress < 100 && elapsed < maxDuration) {
            const delay = Math.random() * 100 + 50;
            setTimeout(updateLoader, delay);
        } else {
            // Forcer la fin après 3 secondes max
            setTimeout(function() {
                loaderFill.style.width = '100%';
                loaderPercent.textContent = '100%';
                setTimeout(function() {
                    preloader.classList.add('hidden');
                    document.body.style.overflow = '';
                    // Focus sur le contenu principal
                    const main = document.querySelector('main');
                    if (main) main.focus();
                }, 300);
            }, Math.max(0, maxDuration - elapsed));
        }
    }

    document.body.style.overflow = 'hidden';
    setTimeout(updateLoader, 200);
})();

// ============================================
// DONNÉES DES PROJETS (pour la modale)
// ============================================
const projectData = {
    project1: {
        title: 'Best Diversity Design Kit',
        description: 'Une suite complète d\'outils design pour promouvoir la diversité et l\'inclusion dans les entreprises. Ce projet inclut un design system, des composants accessibles et des ressources pour faciliter la création de contenu inclusif.',
        tags: ['Design System', 'Branding', 'UI/UX', 'Accessibilité'],
        image: 'images/cenumep.png',
        client: 'Nova Corp',
        year: '2024',
        tech: 'Figma, React, Storybook',
        category: 'Design System',
        link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Best%20Diversity%20Design%20Kit'
    },
    project2: {
        title: 'Filled Coffee Co.',
        description: 'Rebranding complet pour une entreprise de café de spécialité. Une identité visuelle chaleureuse et authentique, avec un packaging design, une stratégie de marque et une expérience e-commerce immersive.',
        tags: ['Brand Identity', 'Packaging', 'Art Direction', 'E-commerce'],
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
        client: 'Filled Coffee Co.',
        year: '2023',
        tech: 'Adobe Suite, Figma, Shopify',
        category: 'Branding',
        link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Filled%20Coffee%20Co.'
    },
    project3: {
        title: 'Nova Scene',
        description: 'Plateforme de création artistique immersive permettant aux artistes de collaborer et de partager leur travail. Une expérience utilisateur innovante avec des fonctionnalités de réalité augmentée et de communauté.',
        tags: ['UI/UX', 'Web Design', 'Prototype', 'AR/VR'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        client: 'Studio Nova',
        year: '2024',
        tech: 'React, Three.js, Figma, Firebase',
        category: 'Application Web',
        link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Nova%20Scene'
    },
    project4: {
        title: 'EcoTrack Dashboard',
        description: 'Tableau de bord interactif pour le suivi des émissions carbone des entreprises. Visualisation de données en temps réel avec des graphiques personnalisés.',
        tags: ['Data Viz', 'Dashboard', 'React', 'D3.js'],
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        client: 'GreenTech Inc.',
        year: '2024',
        tech: 'React, D3.js, Firebase',
        category: 'Dashboard',
        link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20EcoTrack'
    },
    project5: {
        title: 'Art Gallery App',
        description: 'Application mobile pour découvrir des œuvres d\'art en réalité augmentée. Les utilisateurs peuvent visualiser les œuvres dans leur espace réel.',
        tags: ['AR/VR', 'Mobile', 'React Native', 'Art'],
        image: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=800&q=80',
        client: 'Museum of Modern Art',
        year: '2023',
        tech: 'React Native, ARKit, Firebase',
        category: 'Mobile',
        link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Art%20Gallery'
    },
    project6: {
        title: 'Portfolio Pro',
        description: 'Plateforme de création de portfolio pour designers et photographes. Personnalisation avancée, animations fluides et intégration avec des galeries d\'images.',
        tags: ['Portfolio', 'Web Design', 'Next.js', 'CMS'],
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80',
        client: 'DesignHub',
        year: '2024',
        tech: 'Next.js, Tailwind, Sanity',
        category: 'Web',
        link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Portfolio%20Pro'
    }
};

// ============================================
// THEME TOGGLE - avec sauvegarde localStorage
// ============================================
function toggleTheme() {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    const icon = document.querySelector('#themeToggle i');
    const iconMobile = document.querySelector('#themeToggleMobile i');
    if (icon) {
        icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
    }
    if (iconMobile) {
        iconMobile.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
        document.getElementById('themeToggleMobile').innerHTML = isLight ? '<i class="fas fa-sun"></i> Mode sombre' : '<i class="fas fa-moon"></i> Mode clair';
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.add('light-mode');
    const themeIcon = document.querySelector('#themeToggle i');
    if (themeIcon) themeIcon.className = 'fas fa-sun';
    document.getElementById('themeToggleMobile').innerHTML = '<i class="fas fa-sun"></i> Mode sombre';
}

document.getElementById('themeToggle').addEventListener('click', toggleTheme);
document.getElementById('themeToggleMobile').addEventListener('click', toggleTheme);

// ============================================
// HERO SLIDESHOW - avec gestion d'accessibilité
// ============================================
const heroSlides = document.querySelectorAll('.hero-slide');
const heroIndicators = document.querySelectorAll('.hero-indicator');
let heroCurrentSlide = 0;
let heroInterval = null;

function goToHeroSlide(index) {
    heroSlides.forEach(slide => {
        slide.classList.remove('active');
        slide.setAttribute('aria-hidden', 'true');
    });
    heroIndicators.forEach(ind => ind.classList.remove('active'));
    
    heroSlides[index].classList.add('active');
    heroSlides[index].setAttribute('aria-hidden', 'false');
    heroIndicators[index].classList.add('active');
    heroCurrentSlide = index;
    
    heroIndicators.forEach((ind, i) => {
        ind.setAttribute('aria-label', `Image ${i + 1} sur ${heroSlides.length}`);
        ind.setAttribute('aria-current', i === index ? 'true' : 'false');
    });
}

function nextHeroSlide() {
    const next = (heroCurrentSlide + 1) % heroSlides.length;
    goToHeroSlide(next);
}

function startHeroSlideshow() {
    if (heroInterval) clearInterval(heroInterval);
    heroInterval = setInterval(nextHeroSlide, 5500);
}

function stopHeroSlideshow() {
    if (heroInterval) {
        clearInterval(heroInterval);
        heroInterval = null;
    }
}

// Initialisation des indicateurs
heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', function() {
        stopHeroSlideshow();
        goToHeroSlide(index);
        startHeroSlideshow();
    });
    indicator.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            stopHeroSlideshow();
            goToHeroSlide(index);
            startHeroSlideshow();
        }
    });
});

const heroContainer = document.querySelector('.hero-slideshow');
if (heroContainer) {
    heroContainer.addEventListener('mouseenter', stopHeroSlideshow);
    heroContainer.addEventListener('mouseleave', startHeroSlideshow);
}

// Démarrer le slideshow
if (heroSlides.length > 0) {
    goToHeroSlide(0);
    startHeroSlideshow();
}

// ============================================
// NAVBAR & MENU MOBILE
// ============================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
let menuOpen = false;

// Gestion du scroll pour la navbar avec passive
let scrollTimeout = false;
window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
        scrollTimeout = true;
        requestAnimationFrame(function() {
            navbar.classList.toggle('scrolled', window.scrollY > 30);
            scrollTimeout = false;
        });
    }
}, { passive: true });

function toggleMobileMenu() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('active', menuOpen);
    menuToggle.classList.toggle('active', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    
    if (menuOpen) {
        mobileMenu.setAttribute('aria-hidden', 'false');
        setTimeout(() => {
            const firstLink = mobileMenu.querySelector('a');
            if (firstLink) firstLink.focus();
        }, 100);
    } else {
        mobileMenu.setAttribute('aria-hidden', 'true');
        menuToggle.focus();
    }
}

menuToggle.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);

// Fermer le menu avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menuOpen) {
        toggleMobileMenu();
    }
});

// Fermer le menu en cliquant sur un lien
document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (menuOpen) {
            mobileMenu.classList.remove('active');
            menuOpen = false;
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
            mobileMenu.setAttribute('aria-hidden', 'true');
        }
    });
});

// ============================================
// ACTIVE NAV LINK - avec debounce
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary)');

let navTimeout = null;
window.addEventListener('scroll', function() {
    if (navTimeout) return;
    navTimeout = setTimeout(() => {
        let current = '';
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop - 120;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(function(link) {
            const href = link.getAttribute('href');
            const isActive = href === '#' + current;
            link.classList.toggle('active', isActive);
            link.style.color = isActive ? 'var(--text-color)' : 'var(--text-secondary-color)';
            link.setAttribute('aria-current', isActive ? 'page' : 'false');
        });
        navTimeout = null;
    }, 100);
}, { passive: true });

// ============================================
// SCROLL ANIMATIONS - avec Intersection Observer
// ============================================
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

animatedElements.forEach(function(el) {
    observer.observe(el);
});

// ============================================
// SKILLS BARRES - avec Intersection Observer
// ============================================
const skillBars = document.querySelectorAll('.skill-bar-fill');

const skillObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animated');
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillBars.forEach(function(bar) {
    skillObserver.observe(bar);
});

// ============================================
// MODAL PROJET - PLEIN ÉCRAN
// ============================================
function openProject(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalImage = document.getElementById('modalImage');
    const modalClient = document.getElementById('modalClient');
    const modalYear = document.getElementById('modalYear');
    const modalTech = document.getElementById('modalTech');
    const modalCategory = document.getElementById('modalCategory');
    const modalLink = document.getElementById('modalLink');
    const tagsContainer = document.getElementById('modalTags');

    modalTitle.textContent = data.title;
    modalDescription.textContent = data.description;
    modalImage.src = data.image;
    modalImage.alt = data.title;
    modalClient.textContent = data.client;
    modalYear.textContent = data.year;
    modalTech.textContent = data.tech;
    modalCategory.textContent = data.category;
    modalLink.href = data.link;

    tagsContainer.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    modal.setAttribute('aria-hidden', 'false');
    
    setTimeout(() => {
        const closeBtn = modal.querySelector('.modal-close');
        if (closeBtn) closeBtn.focus();
    }, 100);
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    modal.classList.remove('active');
    document.body.style.overflow = '';
    modal.setAttribute('aria-hidden', 'true');
}

// Fermer avec la touche Escape
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active')) {
            closeProject();
        }
    }
});

// Fermer en cliquant à l'extérieur du contenu
const modalElement = document.getElementById('projectModal');
if (modalElement) {
    modalElement.addEventListener('click', function(e) {
        if (e.target === this) {
            closeProject();
        }
    });
}

// ============================================
// CARROUSEL AVIS - avec accessibilité
// ============================================
let currentSlide = 0;
const track = document.getElementById('testimonialsTrack');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;
let autoPlayInterval = null;

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;
    if (track) {
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
    }
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
        dot.setAttribute('aria-current', i === currentSlide ? 'true' : 'false');
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    autoPlayInterval = setInterval(nextSlide, 6000);
}

function stopAutoPlay() {
    if (autoPlayInterval) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
    }
}

const prevBtn = document.getElementById('prevTestimonial');
const nextBtn = document.getElementById('nextTestimonial');

if (prevBtn) {
    prevBtn.addEventListener('click', function() {
        stopAutoPlay();
        goToSlide(currentSlide - 1);
        startAutoPlay();
    });
}

if (nextBtn) {
    nextBtn.addEventListener('click', function() {
        stopAutoPlay();
        goToSlide(currentSlide + 1);
        startAutoPlay();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        stopAutoPlay();
        goToSlide(index);
        startAutoPlay();
    });
    dot.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            stopAutoPlay();
            goToSlide(index);
            startAutoPlay();
        }
    });
});

// Pause au survol
const carousel = document.querySelector('.testimonials-carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

// Démarrer le carrousel
if (totalSlides > 0) {
    goToSlide(0);
    startAutoPlay();
}

// ============================================
// FORMULAIRE DE CONTACT - avec validation améliorée
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        const subject = document.getElementById('subject').value.trim() || 'Demande de projet';

        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }

        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }

        const btn = contactForm.querySelector('.btn-primary');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
        btn.disabled = true;

        const mailtoLink = `mailto:divinntwali119@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Nom: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
        )}`;

        setTimeout(function() {
            window.location.href = mailtoLink;
            btn.innerHTML = originalHTML;
            btn.disabled = false;
            contactForm.reset();
            alert('✅ Votre message a été préparé. Veuillez confirmer l\'envoi par email.');
        }, 500);
    });
}

// ============================================
// NEWSLETTER - avec validation
// ============================================
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const input = this.querySelector('input');
        const email = input.value.trim();
        
        if (!email) {
            alert('Veuillez entrer votre adresse email.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        alert('✅ Merci pour votre abonnement ! Vous recevrez bientôt nos actualités.');
        input.value = '';
    });
}

// ============================================
// SMOOTH SCROLL - amélioré avec accessibilité
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ 
                top: offsetTop, 
                behavior: 'smooth' 
            });
            
            // Mettre à jour l'URL sans recharger
            if (history.pushState) {
                history.pushState(null, null, targetId);
            }
            
            // Focus sur la cible pour l'accessibilité
            setTimeout(function() {
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }, 500);
        }
    });
});

// ============================================
// PERFORMANCE - Désactiver les animations pour les utilisateurs qui préfèrent réduire les mouvements
// ============================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if (prefersReducedMotion.matches) {
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        el.classList.add('visible');
        el.style.transition = 'none';
    });
    // Désactiver le slideshow
    stopHeroSlideshow();
    stopAutoPlay();
}

// ============================================
// CONSOLE - Informations de développement
// ============================================
console.log('🚀 Divin Ntwali · Designer & Développeur Full-Stack');
console.log('📸 Portfolio optimisé - Performance, Accessibilité & SEO');
console.log('🔗 Réseaux sociaux :');
console.log('   • GitHub: https://github.com/divinntwali');
console.log('   • LinkedIn: https://linkedin.com/in/divinntwali');
console.log('   • Twitter: https://twitter.com/divinntwali');
console.log('   • Instagram: https://instagram.com/divinntwali');
console.log('   • Facebook: https://www.facebook.com/DivinDesign');
console.log('   • YouTube: https://www.youtube.com/@Divin_Design');
console.log('   • TikTok: https://tiktok.com/@divinntwali20');
console.log('📧 divinntwali119@gmail.com | 📱 +243 901 087 801');
console.log('⚡ Temps de chargement réduit à 3 secondes');