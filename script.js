// Creative Portfolio JavaScript - Destanto Dwi Anggoro

document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize Particles.js
    initParticles();
    
    // Initialize all animations and interactions
    initNavbar();
    initTypingEffect();
    initScrollAnimations();
    initSkillBars();
    initCounters();
    initContactForm();
    initSmoothScrolling();
    
    // Scroll indicator click
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            document.querySelector('#about').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }
});

// Particles.js Configuration
function initParticles() {
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: {
                    value: 80,
                    density: {
                        enable: true,
                        value_area: 800
                    }
                },
                color: {
                    value: '#ffffff'
                },
                shape: {
                    type: 'circle',
                    stroke: {
                        width: 0,
                        color: '#000000'
                    }
                },
                opacity: {
                    value: 0.5,
                    random: false,
                    anim: {
                        enable: false,
                        speed: 1,
                        opacity_min: 0.1,
                        sync: false
                    }
                },
                size: {
                    value: 3,
                    random: true,
                    anim: {
                        enable: false,
                        speed: 40,
                        size_min: 0.1,
                        sync: false
                    }
                },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#ffffff',
                    opacity: 0.4,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 6,
                    direction: 'none',
                    random: false,
                    straight: false,
                    out_mode: 'out',
                    bounce: false,
                    attract: {
                        enable: false,
                        rotateX: 600,
                        rotateY: 1200
                    }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: {
                        enable: true,
                        mode: 'repulse'
                    },
                    onclick: {
                        enable: true,
                        mode: 'push'
                    },
                    resize: true
                },
                modes: {
                    grab: {
                        distance: 400,
                        line_linked: {
                            opacity: 1
                        }
                    },
                    bubble: {
                        distance: 400,
                        size: 40,
                        duration: 2,
                        opacity: 8,
                        speed: 3
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    },
                    push: {
                        particles_nb: 4
                    },
                    remove: {
                        particles_nb: 2
                    }
                }
            },
            retina_detect: true
        });
    }
}

// Navbar scroll effect
function initNavbar() {
    const navbar = document.getElementById('mainNavbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Active navigation highlighting
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    });
}

// Typing effect for hero title
function initTypingEffect() {
    const typingElement = document.getElementById('typingText');
    if (!typingElement) return;
    
    const text = 'Destanto Dwi Anggoro';
    const cursor = document.querySelector('.cursor');
    
    typingElement.textContent = '';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            typingElement.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        } else {
            // Start cursor blinking after typing is complete
            if (cursor) {
                cursor.style.animation = 'blink 1s infinite';
            }
        }
    };
    
    // Start typing after a delay
    setTimeout(typeWriter, 1000);
}

// Scroll-triggered animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observe elements for animations
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .zoom-in');
    animatedElements.forEach(el => observer.observe(el));
    
    // Add animation classes to elements
    document.querySelectorAll('.skill-card').forEach((card, index) => {
        card.classList.add('fade-in');
        card.style.animationDelay = `${index * 0.1}s`;
    });
    
    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.classList.add('zoom-in');
        item.style.animationDelay = `${index * 0.1}s`;
    });
    
    // About section animations
    const aboutContent = document.querySelector('.about-content');
    const aboutVisual = document.querySelector('.about-visual');
    
    if (aboutContent) aboutContent.classList.add('slide-in-left');
    if (aboutVisual) aboutVisual.classList.add('slide-in-right');
}

// Animated skill progress bars
function initSkillBars() {
    const skillBars = document.querySelectorAll('.progress-bar');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const progressBar = entry.target;
                const progress = progressBar.getAttribute('data-progress');
                
                setTimeout(() => {
                    progressBar.style.width = progress + '%';
                }, 500);
                
                skillObserver.unobserve(progressBar);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => skillObserver.observe(bar));
}

// Animated counters
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-count'));
                const increment = target / 100;
                let current = 0;
                
                const updateCounter = () => {
                    if (current < target) {
                        current += increment;
                        counter.textContent = Math.ceil(current);
                        setTimeout(updateCounter, 20);
                    } else {
                        counter.textContent = target;
                    }
                };
                
                setTimeout(updateCounter, 500);
                counterObserver.unobserve(counter);
            }
        });
    }, { threshold: 0.5 });
    
    counters.forEach(counter => counterObserver.observe(counter));
}

// Enhanced contact form
function initContactForm() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    // Form focus effects
    const formControls = document.querySelectorAll('.form-control');
    formControls.forEach(control => {
        control.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        control.addEventListener('blur', function() {
            if (this.value === '') {
                this.parentElement.classList.remove('focused');
            }
        });
    });
    
    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = form.querySelector('button[type="submit"]');
        const btnText = submitBtn.querySelector('.btn-text');
        const btnIcon = submitBtn.querySelector('.btn-icon i');
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };
        
        // Validate form
        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            showNotification('Mohon lengkapi semua field yang diperlukan.', 'error');
            return;
        }
        
        // Simulate form submission
        submitBtn.disabled = true;
        btnText.textContent = 'Mengirim...';
        btnIcon.className = 'fas fa-spinner fa-spin';
        
        setTimeout(() => {
            showNotification(`Terima kasih ${formData.name}! Pesan Anda telah dikirim. Saya akan segera menghubungi Anda.`, 'success');
            form.reset();
            
            // Reset button
            submitBtn.disabled = false;
            btnText.textContent = 'Kirim Pesan';
            btnIcon.className = 'fas fa-paper-plane';
            
            // Remove focus classes
            formControls.forEach(control => {
                control.parentElement.classList.remove('focused');
            });
        }, 2000);
    });
}

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const offsetTop = targetSection.offsetTop - 80;
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                const navbarCollapse = document.querySelector('.navbar-collapse');
                if (navbarCollapse.classList.contains('show')) {
                    const navbarToggler = document.querySelector('.navbar-toggler');
                    navbarToggler.click();
                }
            }
        });
    });
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : type === 'error' ? '#dc3545' : '#17a2b8'};
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        z-index: 9999;
        display: flex;
        align-items: center;
        gap: 15px;
        max-width: 400px;
        animation: slideInRight 0.3s ease;
    `;
    
    // Add close functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0;
        font-size: 1.2rem;
    `;
    
    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Add to page
    document.body.appendChild(notification);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS animations for notifications
const notificationStyles = document.createElement('style');
notificationStyles.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
    }
`;
document.head.appendChild(notificationStyles);

// Portfolio item interactions
document.addEventListener('DOMContentLoaded', function() {
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const portfolioItem = this.closest('.portfolio-item');
            const projectTitle = portfolioItem.querySelector('.portfolio-title').textContent;
            
            if (this.querySelector('.fa-eye')) {
                showNotification(`Membuka preview untuk: ${projectTitle}`, 'info');
            } else if (this.querySelector('.fa-github')) {
                showNotification(`Membuka repository GitHub untuk: ${projectTitle}`, 'info');
            }
        });
    });
});

// Add parallax effect to hero section
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-section');
    
    if (heroSection && scrolled < window.innerHeight) {
        const rate = scrolled * -0.3;
        heroSection.style.transform = `translateY(${rate}px)`;
    }
});

// Utility function for smooth scroll to section
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offsetTop = section.offsetTop - 80;
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
}


// Enhanced Portfolio Interactions
function initPortfolioLightbox() {
    // Create lightbox HTML
    const lightboxHTML = `
        <div id="portfolioLightbox" class="lightbox">
            <div class="lightbox-content">
                <div class="lightbox-header">
                    <h3 class="lightbox-title"></h3>
                    <button class="lightbox-close">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="lightbox-body">
                    <img class="lightbox-image" src="" alt="">
                    <p class="lightbox-description"></p>
                    <div class="lightbox-tags"></div>
                    <div class="lightbox-links">
                        <a href="#" class="lightbox-btn btn-primary">
                            <i class="fas fa-eye"></i>
                            Live Demo
                        </a>
                        <a href="#" class="lightbox-btn btn-outline">
                            <i class="fab fa-github"></i>
                            Source Code
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', lightboxHTML);
    
    const lightbox = document.getElementById('portfolioLightbox');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    
    // Portfolio data
    const portfolioData = {
        'Proyek Website E-commerce': {
            image: 'https://via.placeholder.com/600x400/0d6efd/ffffff?text=E-Commerce+Website',
            description: 'Platform e-commerce lengkap dengan fitur keranjang belanja, sistem pembayaran, manajemen produk, dan dashboard admin. Dibangun dengan teknologi modern untuk performa optimal dan user experience yang luar biasa.',
            tags: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap', 'PHP', 'MySQL'],
            demoUrl: '#',
            githubUrl: '#'
        },
        'Aplikasi Manajemen Tugas': {
            image: 'https://via.placeholder.com/600x400/28a745/ffffff?text=Task+Manager+App',
            description: 'Aplikasi web untuk mengelola tugas harian dengan fitur drag & drop, notifikasi real-time, kolaborasi tim, dan integrasi kalender. Interface yang intuitif dan responsif untuk produktivitas maksimal.',
            tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Material-UI'],
            demoUrl: '#',
            githubUrl: '#'
        },
        'Desain Landing Page Perusahaan': {
            image: 'https://via.placeholder.com/600x400/ffc107/ffffff?text=Corporate+Landing',
            description: 'Landing page modern untuk startup teknologi dengan desain yang clean, animasi yang menarik, dan optimasi SEO. Fokus pada konversi dan user engagement dengan loading speed yang cepat.',
            tags: ['Bootstrap', 'SASS', 'jQuery', 'AOS', 'Webpack', 'SEO'],
            demoUrl: '#',
            githubUrl: '#'
        }
    };
    
    // Open lightbox
    function openLightbox(projectTitle) {
        const data = portfolioData[projectTitle];
        if (!data) return;
        
        lightbox.querySelector('.lightbox-title').textContent = projectTitle;
        lightbox.querySelector('.lightbox-image').src = data.image;
        lightbox.querySelector('.lightbox-description').textContent = data.description;
        
        const tagsContainer = lightbox.querySelector('.lightbox-tags');
        tagsContainer.innerHTML = data.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
        
        const demoBtn = lightbox.querySelector('.lightbox-btn.btn-primary');
        const githubBtn = lightbox.querySelector('.lightbox-btn.btn-outline');
        demoBtn.href = data.demoUrl;
        githubBtn.href = data.githubUrl;
        
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Close lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    // Event listeners
    closeBtn.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Portfolio item clicks
    document.querySelectorAll('.portfolio-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (this.querySelector('.fa-eye')) {
                const portfolioItem = this.closest('.portfolio-item');
                const projectTitle = portfolioItem.querySelector('.portfolio-title').textContent;
                openLightbox(projectTitle);
            }
        });
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });
}

// Floating Action Button
function initFloatingActionButton() {
    const fabHTML = `
        <div class="fab-container">
            <div class="fab-options">
                <button class="fab-option" data-tooltip="Scroll to Top" onclick="scrollToTop()">
                    <i class="fas fa-arrow-up"></i>
                </button>
                <button class="fab-option" data-tooltip="Toggle Theme" onclick="toggleTheme()">
                    <i class="fas fa-moon"></i>
                </button>
                <button class="fab-option" data-tooltip="Share Portfolio" onclick="sharePortfolio()">
                    <i class="fas fa-share-alt"></i>
                </button>
            </div>
            <button class="fab-main">
                <i class="fas fa-plus"></i>
            </button>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', fabHTML);
    
    const fabMain = document.querySelector('.fab-main');
    const fabOptions = document.querySelector('.fab-options');
    
    fabMain.addEventListener('click', function() {
        this.classList.toggle('active');
        fabOptions.classList.toggle('active');
    });
    
    // Hide FAB when scrolling up
    let lastScrollTop = 0;
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const fabContainer = document.querySelector('.fab-container');
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            fabContainer.style.transform = 'translateY(100px)';
        } else {
            fabContainer.style.transform = 'translateY(0)';
        }
        lastScrollTop = scrollTop;
    });
}

// Scroll to top function
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Theme toggle function
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const themeIcon = document.querySelector('.fab-option[data-tooltip="Toggle Theme"] i');
    
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.className = 'fas fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        themeIcon.className = 'fas fa-moon';
        localStorage.setItem('theme', 'light');
    }
}

// Share portfolio function
function sharePortfolio() {
    if (navigator.share) {
        navigator.share({
            title: 'Portfolio Destanto Dwi Anggoro',
            text: 'Lihat portfolio web developer yang menakjubkan!',
            url: window.location.href
        });
    } else {
        // Fallback: copy to clipboard
        navigator.clipboard.writeText(window.location.href).then(() => {
            showNotification('Link portfolio telah disalin ke clipboard!', 'success');
        });
    }
}

// Cursor trail effect
function initCursorTrail() {
    const trail = [];
    const trailLength = 10;
    
    // Create trail elements
    for (let i = 0; i < trailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'cursor-trail';
        dot.style.opacity = (i / trailLength).toString();
        dot.style.transform = 'scale(' + (i / trailLength) + ')';
        document.body.appendChild(dot);
        trail.push(dot);
    }
    
    let mouseX = 0, mouseY = 0;
    
    document.addEventListener('mousemove', function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    function animateTrail() {
        let x = mouseX, y = mouseY;
        
        trail.forEach((dot, index) => {
            const nextDot = trail[index + 1] || trail[0];
            
            dot.style.left = x + 'px';
            dot.style.top = y + 'px';
            
            if (nextDot) {
                x += (nextDot.offsetLeft - x) * 0.3;
                y += (nextDot.offsetTop - y) * 0.3;
            }
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Enhanced form validation
function initEnhancedFormValidation() {
    const form = document.getElementById('contactForm');
    if (!form) return;
    
    const inputs = form.querySelectorAll('.form-control');
    
    inputs.forEach(input => {
        // Real-time validation
        input.addEventListener('input', function() {
            validateField(this);
        });
        
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
    
    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.getAttribute('id');
        let isValid = true;
        let message = '';
        
        // Remove existing validation classes
        field.classList.remove('is-valid', 'is-invalid');
        
        // Validation rules
        switch (fieldName) {
            case 'name':
                if (value.length < 2) {
                    isValid = false;
                    message = 'Nama harus minimal 2 karakter';
                }
                break;
            case 'email':
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(value)) {
                    isValid = false;
                    message = 'Format email tidak valid';
                }
                break;
            case 'subject':
                if (value.length < 5) {
                    isValid = false;
                    message = 'Subjek harus minimal 5 karakter';
                }
                break;
            case 'message':
                if (value.length < 10) {
                    isValid = false;
                    message = 'Pesan harus minimal 10 karakter';
                }
                break;
        }
        
        // Apply validation styles
        if (value.length > 0) {
            if (isValid) {
                field.classList.add('is-valid');
                removeFieldError(field);
            } else {
                field.classList.add('is-invalid');
                showFieldError(field, message);
            }
        } else {
            removeFieldError(field);
        }
        
        return isValid;
    }
    
    function showFieldError(field, message) {
        removeFieldError(field);
        
        const errorDiv = document.createElement('div');
        errorDiv.className = 'field-error';
        errorDiv.textContent = message;
        errorDiv.style.cssText = `
            color: #dc3545;
            font-size: 0.8rem;
            margin-top: 5px;
            animation: shake 0.5s;
        `;
        
        field.parentElement.appendChild(errorDiv);
    }
    
    function removeFieldError(field) {
        const existingError = field.parentElement.querySelector('.field-error');
        if (existingError) {
            existingError.remove();
        }
    }
}

// Initialize all new features
document.addEventListener('DOMContentLoaded', function() {
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
    
    // Initialize new features
    initPortfolioLightbox();
    initFloatingActionButton();
    initCursorTrail();
    initEnhancedFormValidation();
    
    // Add glitch effect to hero title on hover
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.addEventListener('mouseenter', function() {
            this.classList.add('glitch');
            this.setAttribute('data-text', this.textContent);
        });
        
        heroTitle.addEventListener('mouseleave', function() {
            this.classList.remove('glitch');
        });
    }
    
    // Add pulse effect to CTA buttons
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.classList.add('pulse');
        });
        
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('pulse');
        });
    });
    
    // Enhanced scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                scrollIndicator.style.opacity = '0';
                scrollIndicator.style.visibility = 'hidden';
            } else {
                scrollIndicator.style.opacity = '1';
                scrollIndicator.style.visibility = 'visible';
            }
        });
    }
});

// Add CSS for form validation
const validationStyles = document.createElement('style');
validationStyles.textContent = `
    .form-control.is-valid {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }
    
    .form-control.is-invalid {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
    
    .form-control.is-valid:focus {
        border-color: #28a745;
        box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);
    }
    
    .form-control.is-invalid:focus {
        border-color: #dc3545;
        box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
    }
`;
document.head.appendChild(validationStyles);

