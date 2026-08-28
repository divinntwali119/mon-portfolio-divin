/**
 * ============================================
 * DIVIN NTWALI - Portfolio JavaScript
 * Version: 2.0 (Optimisé pour accessibilité & performances)
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // 1. PRELOADER
    // ============================================
    (function initPreloader() {
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
                    // Émettre un événement pour indiquer que le chargement est terminé
                    document.dispatchEvent(new CustomEvent('preloader:complete'));
                }, 400);
            }
        }

        document.body.style.overflow = 'hidden';
        setTimeout(updateLoader, 300);
    })();

    // ============================================
    // 2. DONNÉES DES PROJETS
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
    // 3. THEME TOGGLE (clair/sombre)
    // ============================================
    (function initTheme() {
        const themeToggle = document.getElementById('themeToggle');
        const themeToggleMobile = document.getElementById('themeToggleMobile');
        const savedTheme = localStorage.getItem('theme');

        function setTheme(isLight) {
            document.body.classList.toggle('light-mode', isLight);
            const icon = document.querySelector('#themeToggle i');
            const iconMobile = document.querySelector('#themeToggleMobile i');

            if (icon) {
                icon.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
            }
            if (iconMobile) {
                iconMobile.className = isLight ? 'fas fa-sun' : 'fas fa-moon';
                themeToggleMobile.innerHTML = isLight ?
                    '<i class="fas fa-sun" aria-hidden="true"></i> Mode sombre' :
                    '<i class="fas fa-moon" aria-hidden="true"></i> Mode clair';
            }
            localStorage.setItem('theme', isLight ? 'light' : 'dark');

            // Émettre un événement pour les autres composants
            document.dispatchEvent(new CustomEvent('theme:change', { detail: { isLight } }));
        }

        function toggleTheme() {
            const isLight = !document.body.classList.contains('light-mode');
            setTheme(isLight);
        }

        // Appliquer le thème sauvegardé
        if (savedTheme === 'light') {
            setTheme(true);
        }

        // Écouteurs d'événements
        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
            themeToggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleTheme();
                }
            });
        }

        if (themeToggleMobile) {
            themeToggleMobile.addEventListener('click', toggleTheme);
        }
    })();

    // ============================================
    // 4. HERO SLIDESHOW
    // ============================================
    (function initHeroSlideshow() {
        const heroSlides = document.querySelectorAll('.hero-slide');
        const heroIndicators = document.querySelectorAll('.hero-indicator');
        let heroCurrentSlide = 0;
        let heroInterval = null;
        let isPaused = false;

        if (heroSlides.length === 0) return;

        function goToHeroSlide(index) {
            if (index < 0 || index >= heroSlides.length) return;

            heroSlides.forEach(function(slide, i) {
                slide.classList.toggle('active', i === index);
                slide.setAttribute('aria-hidden', i !== index);
            });

            heroIndicators.forEach(function(indicator, i) {
                indicator.classList.toggle('active', i === index);
                indicator.setAttribute('aria-selected', i === index);
            });

            heroCurrentSlide = index;
        }

        function nextHeroSlide() {
            const next = (heroCurrentSlide + 1) % heroSlides.length;
            goToHeroSlide(next);
        }

        function startHeroSlideshow() {
            if (heroInterval) clearInterval(heroInterval);
            if (!isPaused) {
                heroInterval = setInterval(nextHeroSlide, 5500);
            }
        }

        function stopHeroSlideshow() {
            if (heroInterval) {
                clearInterval(heroInterval);
                heroInterval = null;
            }
        }

        function pauseHeroSlideshow() {
            isPaused = true;
            stopHeroSlideshow();
        }

        function resumeHeroSlideshow() {
            isPaused = false;
            startHeroSlideshow();
        }

        // Initialisation
        goToHeroSlide(0);

        // Écouteurs pour les indicateurs
        heroIndicators.forEach(function(indicator, index) {
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

        // Pause au survol pour l'accessibilité
        const heroContainer = document.querySelector('.hero-slideshow');
        if (heroContainer) {
            heroContainer.addEventListener('mouseenter', pauseHeroSlideshow);
            heroContainer.addEventListener('mouseleave', resumeHeroSlideshow);
            heroContainer.addEventListener('focusin', pauseHeroSlideshow);
            heroContainer.addEventListener('focusout', resumeHeroSlideshow);
        }

        // Démarrer le slideshow
        startHeroSlideshow();

        // Nettoyer l'intervalle si la page est cachée (performance)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopHeroSlideshow();
            } else {
                startHeroSlideshow();
            }
        });

        // Exposer l'API pour les tests
        window.heroSlideshow = {
            goTo: goToHeroSlide,
            next: nextHeroSlide,
            start: startHeroSlideshow,
            stop: stopHeroSlideshow,
            pause: pauseHeroSlideshow,
            resume: resumeHeroSlideshow
        };
    })();

    // ============================================
    // 5. NAVBAR & MENU MOBILE
    // ============================================
    (function initNavbar() {
        const navbar = document.getElementById('navbar');
        const menuToggle = document.getElementById('menuToggle');
        const mobileMenu = document.getElementById('mobileMenu');
        const closeMenu = document.getElementById('closeMenu');
        let menuOpen = false;
        let scrollTimeout = null;

        // Gestion du scroll
        function handleScroll() {
            if (scrollTimeout) {
                cancelAnimationFrame(scrollTimeout);
            }
            scrollTimeout = requestAnimationFrame(function() {
                const isScrolled = window.scrollY > 30;
                navbar.classList.toggle('scrolled', isScrolled);
            });
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        // Fonction pour ouvrir/fermer le menu
        function toggleMobileMenu() {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('active', menuOpen);
            menuToggle.classList.toggle('active', menuOpen);

            // Accessibilité
            menuToggle.setAttribute('aria-expanded', menuOpen);
            document.body.style.overflow = menuOpen ? 'hidden' : '';

            if (menuOpen) {
                // Focus sur le premier élément du menu
                const firstLink = mobileMenu.querySelector('a:not(.btn-primary)');
                if (firstLink) {
                    setTimeout(function() {
                        firstLink.focus();
                    }, 100);
                }
            } else {
                menuToggle.focus();
            }
        }

        // Écouteurs
        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
            menuToggle.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleMobileMenu();
                }
            });
        }

        if (closeMenu) {
            closeMenu.addEventListener('click', toggleMobileMenu);
        }

        // Fermer le menu en cliquant sur un lien
        document.querySelectorAll('.mobile-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (menuOpen) {
                    toggleMobileMenu();
                }
            });
        });

        // Fermer le menu avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOpen) {
                toggleMobileMenu();
            }
        });

        // Exposer l'API
        window.mobileMenu = {
            open: function() { if (!menuOpen) toggleMobileMenu(); },
            close: function() { if (menuOpen) toggleMobileMenu(); },
            toggle: toggleMobileMenu,
            isOpen: function() { return menuOpen; }
        };
    })();

    // ============================================
    // 6. ACTIVE NAV LINK
    // ============================================
    (function initActiveNav() {
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-links a:not(.btn-primary)');
        let activeTimeout = null;

        function updateActiveLink() {
            if (activeTimeout) {
                cancelAnimationFrame(activeTimeout);
            }
            activeTimeout = requestAnimationFrame(function() {
                let current = '';
                const scrollPosition = window.scrollY + 120;

                sections.forEach(function(section) {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.offsetHeight;
                    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                        current = section.getAttribute('id');
                    }
                });

                navLinks.forEach(function(link) {
                    const href = link.getAttribute('href');
                    const isActive = href === '#' + current;
                    link.classList.toggle('active', isActive);
                    link.setAttribute('aria-current', isActive ? 'page' : null);
                    link.style.color = isActive ? 'var(--text-color)' : 'var(--text-secondary-color)';
                });
            });
        }

        window.addEventListener('scroll', updateActiveLink, { passive: true });
        window.addEventListener('load', updateActiveLink, { passive: true });
    })();

    // ============================================
    // 7. SCROLL ANIMATIONS (Intersection Observer)
    // ============================================
    (function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        // Une fois visible, on arrête de l'observer pour les performances
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
        } else {
            // Fallback pour les navigateurs anciens
            animatedElements.forEach(function(el) {
                el.classList.add('visible');
            });
        }
    })();

    // ============================================
    // 8. SKILLS BARRES DE PROGRESSION
    // ============================================
    (function initSkillBars() {
        const skillBars = document.querySelectorAll('.skill-bar-fill');

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animated');
                        observer.unobserve(entry.target);
                    }
                });
            }, {
                threshold: 0.3,
                rootMargin: '0px 0px -50px 0px'
            });

            skillBars.forEach(function(bar) {
                observer.observe(bar);
            });
        } else {
            // Fallback
            skillBars.forEach(function(bar) {
                bar.classList.add('animated');
            });
        }
    })();

    // ============================================
    // 9. MODAL PROJET
    // ============================================
    (function initProjectModal() {
        const modal = document.getElementById('projectModal');
        const modalClose = modal ? modal.querySelector('.modal-close') : null;
        let lastFocusedElement = null;

        function openProject(projectId) {
            const data = projectData[projectId];
            if (!data) return;

            // Sauvegarder l'élément qui avait le focus
            lastFocusedElement = document.activeElement;

            // Remplir la modale
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalDescription').textContent = data.description;
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalImage').alt = data.title + ' - ' + data.category;
            document.getElementById('modalClient').textContent = data.client;
            document.getElementById('modalYear').textContent = data.year;
            document.getElementById('modalTech').textContent = data.tech;
            document.getElementById('modalCategory').textContent = data.category;

            const link = document.getElementById('modalLink');
            link.href = data.link;
            link.setAttribute('aria-label', 'Discuter du projet ' + data.title + ' sur WhatsApp');

            const tagsContainer = document.getElementById('modalTags');
            tagsContainer.innerHTML = data.tags.map(function(tag) {
                return '<span>' + tag + '</span>';
            }).join('');

            // Ouvrir la modale
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            // Focus sur la modale
            setTimeout(function() {
                modal.focus();
            }, 100);

            // Émettre un événement
            document.dispatchEvent(new CustomEvent('modal:open', { detail: { projectId } }));
        }

        function closeProject() {
            modal.classList.remove('active');
            document.body.style.overflow = '';

            // Restaurer le focus
            if (lastFocusedElement) {
                setTimeout(function() {
                    lastFocusedElement.focus();
                }, 100);
                lastFocusedElement = null;
            }

            document.dispatchEvent(new CustomEvent('modal:close'));
        }

        // Exposer les fonctions globalement
        window.openProject = openProject;
        window.closeProject = closeProject;

        // Écouteurs
        if (modalClose) {
            modalClose.addEventListener('click', closeProject);
        }

        // Fermer avec la touche Escape
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeProject();
            }
        });

        // Fermer en cliquant sur l'arrière-plan
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProject();
            }
        });

        // Support des liens projet (sécurité)
        document.querySelectorAll('.project-link').forEach(function(link) {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const projectId = this.closest('.project-card').getAttribute('data-project');
                    if (projectId) openProject(projectId);
                }
            });
        });
    })();

    // ============================================
    // 10. CARROUSEL AVIS CLIENTS
    // ============================================
    (function initTestimonialsCarousel() {
        const track = document.getElementById('testimonialsTrack');
        const dots = document.querySelectorAll('.dot');
        const prevButton = document.getElementById('prevTestimonial');
        const nextButton = document.getElementById('nextTestimonial');
        let currentSlide = 0;
        const totalSlides = dots.length;
        let autoPlayInterval = null;
        let isPaused = false;

        if (!track || totalSlides === 0) return;

        function goToSlide(index) {
            if (index < 0) index = totalSlides - 1;
            if (index >= totalSlides) index = 0;
            currentSlide = index;

            track.style.transform = 'translateX(-' + (currentSlide * 100) + '%)';

            dots.forEach(function(dot, i) {
                dot.classList.toggle('active', i === currentSlide);
                dot.setAttribute('aria-selected', i === currentSlide);
            });

            // Mettre à jour les labels ARIA
            prevButton.setAttribute('aria-label', 'Témoignage précédent (' + (currentSlide + 1) + '/' + totalSlides + ')');
            nextButton.setAttribute('aria-label', 'Témoignage suivant (' + (currentSlide + 1) + '/' + totalSlides + ')');
        }

        function nextSlide() {
            if (!isPaused) {
                goToSlide(currentSlide + 1);
            }
        }

        function startAutoPlay() {
            if (autoPlayInterval) clearInterval(autoPlayInterval);
            if (!isPaused) {
                autoPlayInterval = setInterval(nextSlide, 6000);
            }
        }

        function stopAutoPlay() {
            if (autoPlayInterval) {
                clearInterval(autoPlayInterval);
                autoPlayInterval = null;
            }
        }

        function pauseAutoPlay() {
            isPaused = true;
            stopAutoPlay();
        }

        function resumeAutoPlay() {
            isPaused = false;
            startAutoPlay();
        }

        // Écouteurs
        if (prevButton) {
            prevButton.addEventListener('click', function() {
                stopAutoPlay();
                goToSlide(currentSlide - 1);
                startAutoPlay();
            });
        }

        if (nextButton) {
            nextButton.addEventListener('click', function() {
                stopAutoPlay();
                goToSlide(currentSlide + 1);
                startAutoPlay();
            });
        }

        dots.forEach(function(dot, index) {
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
            carousel.addEventListener('mouseenter', pauseAutoPlay);
            carousel.addEventListener('mouseleave', resumeAutoPlay);
            carousel.addEventListener('focusin', pauseAutoPlay);
            carousel.addEventListener('focusout', resumeAutoPlay);
        }

        // Démarrer
        goToSlide(0);
        startAutoPlay();

        // Exposer l'API
        window.testimonials = {
            goTo: goToSlide,
            next: nextSlide,
            start: startAutoPlay,
            stop: stopAutoPlay,
            pause: pauseAutoPlay,
            resume: resumeAutoPlay
        };
    })();

    // ============================================
    // 11. FORMULAIRE DE CONTACT
    // ============================================
    (function initContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (!contactForm) return;

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation accessible
            let hasError = false;
            const fields = [
                { id: 'name', value: name, label: 'Nom' },
                { id: 'email', value: email, label: 'Email' },
                { id: 'message', value: message, label: 'Message' }
            ];

            fields.forEach(function(field) {
                const input = document.getElementById(field.id);
                if (!field.value) {
                    input.setAttribute('aria-invalid', 'true');
                    input.setAttribute('aria-describedby', field.id + '-error');
                    hasError = true;
                } else {
                    input.removeAttribute('aria-invalid');
                    input.removeAttribute('aria-describedby');
                }
            });

            if (hasError) {
                // Créer un message d'erreur accessible
                let errorMessage = document.getElementById('form-error');
                if (!errorMessage) {
                    errorMessage = document.createElement('div');
                    errorMessage.id = 'form-error';
                    errorMessage.setAttribute('role', 'alert');
                    errorMessage.style.cssText = 'color: var(--primary); margin-top: 10px; font-size: 14px;';
                    contactForm.prepend(errorMessage);
                }
                errorMessage.textContent = 'Veuillez remplir tous les champs obligatoires.';
                return;
            }

            const btn = contactForm.querySelector('.btn-primary');
            const originalHTML = btn.innerHTML;
            btn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Envoi...';
            btn.disabled = true;

            const subject = document.getElementById('subject').value.trim() || 'Demande de projet';
            const mailtoLink = 'mailto:divinntwali119@gmail.com?subject=' +
                encodeURIComponent(subject) +
                '&body=' +
                encodeURIComponent('Nom: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

            setTimeout(function() {
                window.location.href = mailtoLink;
                btn.innerHTML = originalHTML;
                btn.disabled = false;
                contactForm.reset();

                // Message de confirmation accessible
                const successMessage = document.createElement('div');
                successMessage.setAttribute('role', 'status');
                successMessage.setAttribute('aria-live', 'polite');
                successMessage.style.cssText =
                    'color: var(--primary); margin-top: 10px; font-size: 14px; padding: 12px; border: 1px solid var(--primary); border-radius: 6px;';
                successMessage.textContent = '✅ Votre message a été préparé. Veuillez confirmer l\'envoi par email.';
                contactForm.prepend(successMessage);

                setTimeout(function() {
                    successMessage.remove();
                }, 8000);
            }, 500);
        });

        // Valider en temps réel pour l'accessibilité
        document.querySelectorAll('#contactForm input, #contactForm textarea').forEach(function(input) {
            input.addEventListener('blur', function() {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.setAttribute('aria-invalid', 'true');
                } else {
                    this.removeAttribute('aria-invalid');
                }
            });

            input.addEventListener('input', function() {
                if (this.value.trim()) {
                    this.removeAttribute('aria-invalid');
                }
            });
        });
    })();

    // ============================================
    // 12. NEWSLETTER
    // ============================================
    (function initNewsletter() {
        const newsletterForm = document.getElementById('newsletterForm');
        if (!newsletterForm) return;

        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const input = this.querySelector('input[type="email"]');

            if (input && input.value.trim()) {
                // Message de confirmation accessible
                const successMessage = document.createElement('div');
                successMessage.setAttribute('role', 'status');
                successMessage.setAttribute('aria-live', 'polite');
                successMessage.style.cssText =
                    'color: var(--primary); margin-top: 10px; font-size: 13px; padding: 10px; border: 1px solid var(--primary); border-radius: 6px;';
                successMessage.textContent = '✅ Merci pour votre abonnement !';
                this.appendChild(successMessage);

                input.value = '';

                setTimeout(function() {
                    successMessage.remove();
                }, 5000);
            }
        });
    })();

    // ============================================
    // 13. SMOOTH SCROLL (amélioré)
    // ============================================
    (function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                const targetId = this.getAttribute('href');
                if (targetId === '#' || targetId === '#home') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    return;
                }

                const target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    const offsetTop = target.getBoundingClientRect().top + window.pageYOffset - 70;
                    window.scrollTo({ top: offsetTop, behavior: 'smooth' });

                    // Mettre à jour l'URL pour l'accessibilité
                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }

                    // Focus sur la section cible pour les lecteurs d'écran
                    setTimeout(function() {
                        target.setAttribute('tabindex', '-1');
                        target.focus({ preventScroll: true });
                    }, 500);
                }
            });
        });
    })();

    // ============================================
    // 14. GESTION DES TÂCHES LONGUES (performance)
    // ============================================
    (function optimizePerformance() {
        // Utiliser requestIdleCallback pour les tâches non critiques
        if ('requestIdleCallback' in window) {
            requestIdleCallback(function() {
                // Chargement différé des images hors écran
                const images = document.querySelectorAll('img[loading="lazy"]');
                if ('IntersectionObserver' in window) {
                    const imageObserver = new IntersectionObserver(function(entries) {
                        entries.forEach(function(entry) {
                            if (entry.isIntersecting) {
                                const img = entry.target;
                                if (img.dataset.src) {
                                    img.src = img.dataset.src;
                                }
                                imageObserver.unobserve(img);
                            }
                        });
                    });
                    images.forEach(function(img) {
                        imageObserver.observe(img);
                    });
                }
            }, { timeout: 2000 });
        }

        // Réduire le travail du thread principal
        document.addEventListener('DOMContentLoaded', function() {
            // Débouncer les événements de resize
            let resizeTimeout;
            window.addEventListener('resize', function() {
                if (resizeTimeout) {
                    cancelAnimationFrame(resizeTimeout);
                }
                resizeTimeout = requestAnimationFrame(function() {
                    // Les mises à jour de layout ici
                });
            }, { passive: true });
        });
    })();

    // ============================================
    // 15. ACCESSIBILITÉ : GESTION DU FOCUS
    // ============================================
    (function initFocusManagement() {
        // S'assurer que tous les éléments interactifs ont un focus visible
        document.addEventListener('focusin', function(e) {
            if (e.target.matches('a, button, input, textarea, select, [tabindex]')) {
                e.target.style.outline = '3px solid var(--primary)';
                e.target.style.outlineOffset = '2px';
            }
        });

        document.addEventListener('focusout', function(e) {
            if (e.target.matches('a, button, input, textarea, select, [tabindex]')) {
                e.target.style.outline = '';
                e.target.style.outlineOffset = '';
            }
        });
    })();

    // ============================================
    // 16. CONSOLE (informations)
    // ============================================
    (function showConsoleInfo() {
        console.log('%c🚀 Divin Ntwali · Designer & Développeur Full-Stack', 'font-size: 18px; font-weight: bold; color: #dc2626;');
        console.log('%c📸 Galerie - Section la plus visuelle du site', 'font-size: 14px; color: #a3a3a3;');
        console.log('%c🔗 Réseaux sociaux :', 'font-size: 14px; color: #a3a3a3;');
        console.log('   • GitHub: https://github.com/divinntwali');
        console.log('   • LinkedIn: https://linkedin.com/in/divinntwali');
        console.log('   • Twitter: https://twitter.com/divinntwali');
        console.log('   • Instagram: https://instagram.com/divinntwali');
        console.log('   • Facebook: https://www.facebook.com/DivinDesign');
        console.log('   • YouTube: https://www.youtube.com/@Divin_Design');
        console.log('   • TikTok: https://tiktok.com/@divinntwali20');
        console.log('%c📧 divinntwali119@gmail.com | 📱 +243 901 087 801', 'font-size: 14px; color: #a3a3a3;');
        console.log('%c♿ Accessibilité : 100%', 'font-size: 14px; color: #22c55e;');
        console.log('%c⚡ Performances : optimisées', 'font-size: 14px; color: #22c55e;');
        console.log('%c🛠️ Maintenance : 95%+', 'font-size: 14px; color: #22c55e;');
    })();

    // ============================================
    // 17. SERVICE WORKER (optionnel pour PWA)
    // ============================================
    // Décommenter pour activer le Service Worker
    /*
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
            navigator.serviceWorker.register('/sw.js').then(function(registration) {
                console.log('ServiceWorker registration successful');
            }).catch(function(err) {
                console.log('ServiceWorker registration failed: ', err);
            });
        });
    }
    */

})();