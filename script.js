// ============================================
// PRELOADER
// ============================================
(function() {
    const preloader = document.getElementById('preloader');
    const loaderFill = document.getElementById('loaderFill');
    const loaderPercent = document.getElementById('loaderPercent');
    let progress = 0;

    function updateLoader() {
        progress += Math.random() * 15 + 5;
        if (progress > 100) progress = 100;
        loaderFill.style.width = progress + '%';
        loaderPercent.textContent = Math.round(progress) + '%';

        if (progress < 100) {
            setTimeout(updateLoader, 200 + Math.random() * 300);
        } else {
            setTimeout(function() {
                preloader.classList.add('hidden');
                document.body.style.overflow = '';
            }, 400);
        }
    }

    document.body.style.overflow = 'hidden';
    setTimeout(updateLoader, 300);
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
let heroInterval;

function goToHeroSlide(index) {
    heroSlides.forEach(slide => slide.classList.remove('active'));
    heroIndicators.forEach(ind => ind.classList.remove('active'));
    heroSlides[index].classList.add('active');
    heroIndicators[index].classList.add('active');
    heroCurrentSlide = index;
}

function nextHeroSlide() {
    const next = (heroCurrentSlide + 1) % heroSlides.length;
    goToHeroSlide(next);
}

function startHeroSlideshow() {
    heroInterval = setInterval(nextHeroSlide, 5500);
}

function stopHeroSlideshow() {
    clearInterval(heroInterval);
}

heroIndicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        stopHeroSlideshow();
        goToHeroSlide(index);
        startHeroSlideshow();
    });
});

const heroContainer = document.querySelector('.hero-slideshow');
if (heroContainer) {
    heroContainer.addEventListener('mouseenter', stopHeroSlideshow);
    heroContainer.addEventListener('mouseleave', startHeroSlideshow);
}

startHeroSlideshow();

// ============================================
// NAVBAR & MENU MOBILE
// ============================================
const navbar = document.getElementById('navbar');
const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
let menuOpen = false;

window.addEventListener('scroll', function() {
    navbar.classList.toggle('scrolled', window.scrollY > 30);
});

function toggleMobileMenu() {
    menuOpen = !menuOpen;
    mobileMenu.classList.toggle('active', menuOpen);
    menuToggle.classList.toggle('active', menuOpen);
    document.body.style.overflow = menuOpen ? 'hidden' : '';
}

menuToggle.addEventListener('click', toggleMobileMenu);
closeMenu.addEventListener('click', toggleMobileMenu);

document.querySelectorAll('.mobile-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
        mobileMenu.classList.remove('active');
        menuOpen = false;
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// ============================================
// ACTIVE NAV LINK
// ============================================
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary)');

window.addEventListener('scroll', function() {
    let current = '';
    sections.forEach(function(section) {
        const sectionTop = section.offsetTop - 120;
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(function(link) {
        link.classList.toggle('active', link.getAttribute('href') === '#' + current);
        link.style.color = link.getAttribute('href') === '#' + current ? 'var(--text-color)' : 'var(--text-secondary-color)';
    });
});

// ============================================
// SCROLL ANIMATIONS
// ============================================
const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
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

    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDescription').textContent = data.description;
    document.getElementById('modalImage').src = data.image;
    document.getElementById('modalClient').textContent = data.client;
    document.getElementById('modalYear').textContent = data.year;
    document.getElementById('modalTech').textContent = data.tech;
    document.getElementById('modalCategory').textContent = data.category;
    document.getElementById('modalLink').href = data.link;

    const tagsContainer = document.getElementById('modalTags');
    tagsContainer.innerHTML = data.tags.map(tag => `<span>${tag}</span>`).join('');

    document.getElementById('projectModal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProject() {
    document.getElementById('projectModal').classList.remove('active');
    document.body.style.overflow = '';
}

document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeProject();
});

// ============================================
// CARROUSEL AVIS
// ============================================
let currentSlide = 0;
const track = document.getElementById('testimonialsTrack');
const dots = document.querySelectorAll('.dot');
const totalSlides = dots.length;

function goToSlide(index) {
    if (index < 0) index = totalSlides - 1;
    if (index >= totalSlides) index = 0;
    currentSlide = index;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

document.getElementById('prevTestimonial').addEventListener('click', () => goToSlide(currentSlide - 1));
document.getElementById('nextTestimonial').addEventListener('click', () => goToSlide(currentSlide + 1));

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => goToSlide(index));
});

let autoPlay = setInterval(() => goToSlide(currentSlide + 1), 6000);
const carousel = document.querySelector('.testimonials-carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carousel.addEventListener('mouseleave', () => {
    autoPlay = setInterval(() => goToSlide(currentSlide + 1), 6000);
});

// ============================================
// FORMULAIRE DE CONTACT
// ============================================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    const btn = contactForm.querySelector('.btn-primary');
    const originalHTML = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
    btn.disabled = true;

    const subject = document.getElementById('subject').value.trim() || 'Demande de projet';
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

// ============================================
// NEWSLETTER
// ============================================
document.getElementById('newsletterForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const input = this.querySelector('input');
    if (input.value.trim()) {
        alert('✅ Merci pour votre abonnement ! Vous recevrez bientôt nos actualités.');
        input.value = '';
    }
});

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
// CONSOLE
// ============================================
console.log('🚀 Divin Ntwali · Designer & Développeur Full-Stack');
console.log('📸 Galerie ajoutée - la section la plus visuelle du site');
console.log('🔗 Réseaux sociaux : GitHub, LinkedIn, Twitter, Dribbble, Instagram, Facebook, YouTube, TikTok');
console.log('📧 divinntwali119@gmail.com | 📱 +243 901 087 801');