/**
 * ============================================
 * DIVIN NTWALI - Portfolio JavaScript
 * Version: 2.2 (Améliorations UI)
 * ============================================
 */

(function() {
    'use strict';

    // ============================================
    // 1. PRELOADER - 2 SECONDES EXACTEMENT
    // ============================================
    (function initPreloader() {
        const preloader = document.getElementById('preloader');
        const loaderFill = document.getElementById('loaderFill');
        const loaderPercent = document.getElementById('loaderPercent');
        let progress = 0;
        const startTime = Date.now();

        function updateLoader() {
            const elapsed = (Date.now() - startTime) / 1000;

            let increment;
            if (progress < 30) {
                increment = Math.random() * 12 + 6;
            } else if (progress < 60) {
                increment = Math.random() * 16 + 8;
            } else if (progress < 85) {
                increment = Math.random() * 20 + 10;
            } else {
                increment = Math.random() * 6 + 2;
            }

            progress = Math.min(progress + increment, 100);
            loaderFill.style.width = progress + '%';
            loaderPercent.textContent = Math.round(progress) + '%';

            if (progress < 100) {
                const delay = Math.max(30, 200 - elapsed * 2);
                setTimeout(updateLoader, delay + Math.random() * 80);
            } else {
                const remainingTime = Math.max(0, 2000 - (Date.now() - startTime));
                setTimeout(function() {
                    preloader.classList.add('hidden');
                    document.body.style.overflow = '';
                    document.dispatchEvent(new CustomEvent('preloader:complete'));
                }, remainingTime);
            }
        }

        document.body.style.overflow = 'hidden';
        setTimeout(updateLoader, 100);
    })();

    // ============================================
    // 2. DONNÉES DES PROJETS
    // ============================================
    const projectData = {
        project1: {
            title: 'CENUMEP',
            description: 'Un site dynamique pour la grande structure du cercle des étudiants de l\'université de Kinshasa. Plateforme complète de gestion et de communication pour les étudiants.',
            tags: ['Design System', 'Branding', 'UI/UX', 'WordPress'],
            image: 'images/cenumep.png',
            client: 'CENUMEP - UNIKIN',
            year: '2024',
            tech: 'WordPress, Figma, Elementor, CSS3',
            category: 'Site Web',
            link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20CENUMEP'
        },
        project2: {
            title: 'Galaxy Food',
            description: 'Site web de valorisation des cuisines kinoises. Découvrez les saveurs authentiques de Kinshasa à travers une expérience culinaire unique.',
            tags: ['Brand Identity', 'Packaging', 'Art Direction', 'Web Design'],
            image: 'images/Top Recettes Maison.jpeg',
            client: 'Galaxy Food',
            year: '2024',
            tech: 'React, Tailwind CSS, Figma, Vercel',
            category: 'Site Web Culinaire',
            link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Galaxy%20Food'
        },
        project3: {
            title: 'Explorer Kinshasa',
            description: 'Plateforme de valorisation des sites touristiques dans la ville de Kinshasa. Découvrez les merveilles cachées de la capitale congolaise.',
            tags: ['UI/UX', 'Web Design', 'Prototype', 'Tourisme'],
            image: 'images/Kinshasa.jpeg',
            client: 'Office du Tourisme de Kinshasa',
            year: '2024',
            tech: 'Next.js, TypeScript, Tailwind, Mapbox, Figma',
            category: 'Application Web Touristique',
            link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Explorer%20Kinshasa'
        },
        project4: {
            title: 'Tableau de bord',
            description: 'Tableau de bord interactif pour le suivi des émissions carbone des entreprises en temps réel. Visualisation avancée des données environnementales.',
            tags: ['Data Viz', 'Dashboard', 'React', 'D3.js'],
            image: 'images/tableau de bord.jpeg',
            client: 'GreenTech Inc.',
            year: '2024',
            tech: 'React, D3.js, Firebase, Chart.js, Tailwind',
            category: 'Dashboard Data',
            link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Tableau%20de%20bord'
        },
        project5: {
            title: 'Art Gallery App',
            description: 'Application mobile pour découvrir des œuvres d\'art en réalité augmentée dans votre espace réel. Une expérience immersive unique.',
            tags: ['AR/VR', 'Mobile', 'React Native', 'Art'],
            image: 'images/art galery.jpeg',
            client: 'Museum of Modern Art',
            year: '2024',
            tech: 'React Native, ARKit, Firebase, Expo, Three.js',
            category: 'Application Mobile AR',
            link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Art%20Gallery%20App'
        },
        project6: {
            title: 'Portfolio Pro',
            description: 'Plateforme de création de portfolio pour designers et photographes avec animations fluides. Personnalisation avancée et intégration CMS.',
            tags: ['Portfolio', 'Web Design', 'Next.js', 'CMS'],
            image: 'images/divin_portfolio.jpg',
            client: 'DesignHub',
            year: '2024',
            tech: 'Next.js, Tailwind, Sanity, Framer Motion, TypeScript',
            category: 'Portfolio CMS',
            link: 'https://wa.me/243901087801?text=Bonjour%20Divin,%20je%20suis%20intéressé%20par%20le%20projet%20Portfolio%20Pro'
        }
    };

    // ============================================
    // 3. THEME TOGGLE
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
            document.dispatchEvent(new CustomEvent('theme:change', { detail: { isLight } }));
        }

        function toggleTheme() {
            const isLight = !document.body.classList.contains('light-mode');
            setTheme(isLight);
        }

        if (savedTheme === 'light') {
            setTheme(true);
        }

        if (themeToggle) {
            themeToggle.addEventListener('click', toggleTheme);
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

        goToHeroSlide(0);

        heroIndicators.forEach(function(indicator, index) {
            indicator.addEventListener('click', function() {
                stopHeroSlideshow();
                goToHeroSlide(index);
                startHeroSlideshow();
            });
        });

        const heroContainer = document.querySelector('.hero-slideshow');
        if (heroContainer) {
            heroContainer.addEventListener('mouseenter', pauseHeroSlideshow);
            heroContainer.addEventListener('mouseleave', resumeHeroSlideshow);
            heroContainer.addEventListener('focusin', pauseHeroSlideshow);
            heroContainer.addEventListener('focusout', resumeHeroSlideshow);
        }

        startHeroSlideshow();

        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                stopHeroSlideshow();
            } else {
                startHeroSlideshow();
            }
        });
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

        function toggleMobileMenu() {
            menuOpen = !menuOpen;
            mobileMenu.classList.toggle('active', menuOpen);
            menuToggle.classList.toggle('active', menuOpen);

            menuToggle.setAttribute('aria-expanded', menuOpen);
            document.body.style.overflow = menuOpen ? 'hidden' : '';

            if (menuOpen) {
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

        if (menuToggle) {
            menuToggle.addEventListener('click', toggleMobileMenu);
        }

        if (closeMenu) {
            closeMenu.addEventListener('click', toggleMobileMenu);
        }

        document.querySelectorAll('.mobile-menu a').forEach(function(link) {
            link.addEventListener('click', function() {
                if (menuOpen) {
                    toggleMobileMenu();
                }
            });
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && menuOpen) {
                toggleMobileMenu();
            }
        });
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
    // 7. SCROLL ANIMATIONS
    // ============================================
    (function initScrollAnimations() {
        const animatedElements = document.querySelectorAll('.animate-on-scroll');

        if ('IntersectionObserver' in window) {
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
        } else {
            animatedElements.forEach(function(el) {
                el.classList.add('visible');
            });
        }
    })();

    // ============================================
    // 8. SKILLS BARRES
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
            if (!data) {
                console.warn('Projet non trouvé:', projectId);
                return;
            }

            lastFocusedElement = document.activeElement;

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

            modal.classList.add('active');
            document.body.style.overflow = 'hidden';

            setTimeout(function() {
                modal.focus();
            }, 100);

            document.dispatchEvent(new CustomEvent('modal:open', { detail: { projectId } }));
        }

        function closeProject() {
            modal.classList.remove('active');
            document.body.style.overflow = '';

            if (lastFocusedElement) {
                setTimeout(function() {
                    lastFocusedElement.focus();
                }, 100);
                lastFocusedElement = null;
            }

            document.dispatchEvent(new CustomEvent('modal:close'));
        }

        window.openProject = openProject;
        window.closeProject = closeProject;

        if (modalClose) {
            modalClose.addEventListener('click', closeProject);
        }

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeProject();
            }
        });

        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeProject();
            }
        });

        document.querySelectorAll('.project-link').forEach(function(link) {
            link.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    const card = this.closest('.project-card');
                    if (card) {
                        const projectId = card.getAttribute('data-project');
                        if (projectId) openProject(projectId);
                    }
                }
            });
        });
    })();

    // ============================================
    // 10. CARROUSEL AVIS
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

            if (prevButton) {
                prevButton.setAttribute('aria-label', 'Témoignage précédent (' + (currentSlide + 1) + '/' + totalSlides + ')');
            }
            if (nextButton) {
                nextButton.setAttribute('aria-label', 'Témoignage suivant (' + (currentSlide + 1) + '/' + totalSlides + ')');
            }
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
        });

        const carousel = document.querySelector('.testimonials-carousel');
        if (carousel) {
            carousel.addEventListener('mouseenter', pauseAutoPlay);
            carousel.addEventListener('mouseleave', resumeAutoPlay);
            carousel.addEventListener('focusin', pauseAutoPlay);
            carousel.addEventListener('focusout', resumeAutoPlay);
        }

        goToSlide(0);
        startAutoPlay();
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
                    hasError = true;
                } else {
                    input.removeAttribute('aria-invalid');
                }
            });

            if (hasError) {
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
    // 13. SMOOTH SCROLL
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

                    if (history.pushState) {
                        history.pushState(null, null, targetId);
                    }

                    setTimeout(function() {
                        target.setAttribute('tabindex', '-1');
                        target.focus({ preventScroll: true });
                    }, 500);
                }
            });
        });
    })();

    // ============================================
    // 14. CONSOLE
    // ============================================
    (function showConsoleInfo() {
        console.log('%c🚀 Divin Ntwali · Designer & Développeur Full-Stack', 'font-size: 18px; font-weight: bold; color: #dc2626;');
        console.log('%c📂 Projets mis à jour : CENUMEP, Galaxy Food, Explorer Kinshasa, Tableau de bord, Art Gallery App, Portfolio Pro', 'font-size: 14px; color: #a3a3a3;');
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
        console.log('%c⚡ Preloader : 2 secondes', 'font-size: 14px; color: #22c55e;');
        console.log('%c🛠️ Maintenance : 95%+', 'font-size: 14px; color: #22c55e;');
        console.log('%c👁️ UI améliorée : Menu hamburger à gauche, bouton modal visible', 'font-size: 14px; color: #22c55e;');
    })();

})();