// ============================================
// PRELOADER - ULTRA RAPIDE (2 secondes max)
// ============================================
(function() {
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    
    const loaderFill = document.getElementById('loaderFill');
    const loaderPercent = document.getElementById('loaderPercent');
    let progress = 0;
    let isFinished = false;
    const maxDuration = 2000; // 2 secondes max
    
    // Fonction pour terminer le preloader
    function finishPreloader() {
        if (isFinished) return;
        isFinished = true;
        
        if (loaderFill) loaderFill.style.width = '100%';
        if (loaderPercent) loaderPercent.textContent = '100%';
        
        setTimeout(function() {
            preloader.classList.add('hidden');
            document.body.style.overflow = '';
        }, 300);
    }
    
    // Mise à jour de la progression
    function updateLoader() {
        if (isFinished) return;
        
        // Incrément plus rapide
        progress += Math.random() * 20 + 8;
        if (progress > 100) progress = 100;
        
        if (loaderFill) loaderFill.style.width = progress + '%';
        if (loaderPercent) loaderPercent.textContent = Math.round(progress) + '%';
        
        if (progress < 100) {
            // Délai réduit
            setTimeout(updateLoader, Math.random() * 80 + 40);
        } else {
            finishPreloader();
        }
    }
    
    // Démarrer
    document.body.style.overflow = 'hidden';
    setTimeout(updateLoader, 150);
    
    // SECOURS : Forcer la fin après 2 secondes
    setTimeout(finishPreloader, maxDuration);
    
    // SECOURS : Forcer la fin quand la page est complètement chargée
    if (document.readyState === 'complete') {
        setTimeout(finishPreloader, 500);
    } else {
        window.addEventListener('load', function() {
            setTimeout(finishPreloader, 300);
        });
    }
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
// THEME TOGGLE
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
// HERO SLIDESHOW
// ============================================
const heroSlides = document.querySelectorAll('.hero-slide');
const heroIndicators = document.querySelectorAll('.hero-indicator');
let heroCurrentSlide = 0;
let heroInterval = null;

function goToHeroSlide(index) {
    if (!heroSlides.length) return;
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroIndicators.forEach(ind => ind.classList.remove('active'));
    heroSlides[index].classList.add('active');
    if (heroIndicators[index]) heroIndicators[index].classList.add('active');
    heroCurrentSlide = index;
}

function nextHeroSlide() {
    if (!heroSlides.length) return;
    const next = (heroCurrentSlide + 1) % heroSlides.length;
    goToHeroSlide(next);
}

function startHeroSlideshow() {
    if (heroInterval) clearInterval(heroInterval);
    if (!heroSlides.length) return;
    heroInterval = setInterval(nextHeroSlide, 5500);
}

function stopHeroSlideshow() {
    if (heroInterval) {
        clearInterval(heroInterval);
        heroInterval = null;
    }
}

if (heroIndicators.length) {
    heroIndicators.forEach((indicator, index) => {
        indicator.addEventListener('click', function() {
            stopHeroSlideshow();
            goToHeroSlide(index);
            startHeroSlideshow();
        });
    });
}

const heroContainer = document.querySelector('.hero-slideshow');
if (heroContainer) {
    heroContainer.addEventListener('mouseenter', stopHeroSlideshow);
    heroContainer.addEventListener('mouseleave', startHeroSlideshow);
}

if (heroSlides.length) {
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

let scrollTimeout = false;
window.addEventListener('scroll', function() {
    if (!scrollTimeout && navbar) {
        scrollTimeout = true;
        requestAnimationFrame(function() {
            navbar.classList.toggle('scrolled', window.scrollY > 30);
            scrollTimeout = false;
        });
    }
}, { passive: true });

function toggleMobileMenu() {
    menuOpen = !menuOpen;
    if (mobileMenu) mobileMenu.classList.toggle('active', menuOpen);
    if (menuToggle) menuToggle.classList.toggle('active', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
}

if (menuToggle) menuToggle.addEventListener('click', toggleMobileMenu);
if (closeMenu) closeMenu.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        if (mobileMenu) mobileMenu.classList.remove('active');
        menuOpen = false;
        if (menuToggle) menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ============================================
// ACTIVE NAV LINK
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
            const isActive = link.getAttribute('href') === '#' + current;
            link.classList.toggle('active', isActive);
            link.style.color = isActive ? 'var(--text-color)' : 'var(--text-secondary-color)';
        });
        navTimeout = null;
    }, 100);
}, { passive: true });

// ============================================
// SCROLL ANIMATIONS
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
// SKILLS BARRES
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
// MODAL PROJET
// ============================================
function openProject(projectId) {
    const data = projectData[projectId];
    if (!data) return;

    const modal = document.getElementById('projectModal');
    if (!modal) return;
    
    const modalImage = document.getElementById('modalImage');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const modalClient = document.getElementById('modalClient');
    const modalYear = document.getElementById('modalYear');
    const modalTech = document.getElementById('modalTech');
    const modalCategory = document.getElementById('modalCategory');
    const modalLink = document.getElementById('modalLink');
    const tagsContainer = document.getElementById('modalTags');

    if (modalTitle) modalTitle.textContent = data.title;
    if (modalDescription) modalDescription.textContent = data.description;
    if (modalImage) {
        modalImage.src = data.image;
        modalImage.alt = data.title;
    }
    if (modalClient) modalClient.textContent = data.client;
    if (modalYear) modalYear.textContent = data.year;
    if (modalTech) modalTech.textContent = data.tech;
    if (modalCategory) modalCategory.textContent = data.category;
    if (modalLink) modalLink.href = data.link;

    if (tagsContainer) {
        tagsContainer.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');
    }

    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    const modal = document.getElementById('projectModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('projectModal');
        if (modal && modal.classList.contains('active')) {
            closeProject();
        }
    }
});

// ============================================
// CARROUSEL AVIS
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
    });
}

function nextSlide() {
    goToSlide(currentSlide + 1);
}

function startAutoPlay() {
    if (autoPlayInterval) clearInterval(autoPlayInterval);
    if (!totalSlides) return;
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
});

const carousel = document.querySelector('.testimonials-carousel');
if (carousel) {
    carousel.addEventListener('mouseenter', stopAutoPlay);
    carousel.addEventListener('mouseleave', startAutoPlay);
}

if (totalSlides > 0) {
    goToSlide(0);
    startAutoPlay();
}

// ============================================
// FORMULAIRE DE CONTACT
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
// NEWSLETTER
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
// SMOOTH SCROLL
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
            e.preventDefault();
            const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
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
    stopHeroSlideshow();
    stopAutoPlay();
}

// ============================================
// CONSOLE
// ============================================
console.log('🚀 Divin Ntwali · Designer & Développeur Full-Stack');
console.log('⚡ Preloader ultra-rapide (2 secondes max)');
console.log('🔗 Réseaux sociaux :');
console.log('   • GitHub: https://github.com/divinntwali');
console.log('   • LinkedIn: https://linkedin.com/in/divinntwali');
console.log('   • Twitter: https://twitter.com/divinntwali');
console.log('   • Instagram: https://instagram.com/divinntwali');
console.log('   • Facebook: https://www.facebook.com/DivinDesign');
console.log('   • YouTube: https://www.youtube.com/@Divin_Design');
console.log('   • TikTok: https://tiktok.com/@divinntwali20');
console.log('📧 divinntwali119@gmail.com | 📱 +243 901 087 801');