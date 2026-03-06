// ========== DOM Elements ==========
const navbar = document.getElementById('navbar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const mobileLinks = document.querySelectorAll('.mobile-link');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('.section');
const loader = document.querySelector('.loader');
const testimonialWrapper = document.getElementById('testimonialWrapper');
const testimonialPrev = document.getElementById('testimonialPrev');
const testimonialNext = document.getElementById('testimonialNext');
const testimonialDots = document.getElementById('testimonialDots');
const menuTabs = document.querySelectorAll('.menu-tab');
const filterBtns = document.querySelectorAll('.filter-btn');
const galleryGrid = document.getElementById('galleryGrid');
const reservationForm = document.getElementById('reservationForm');
const contactForm = document.getElementById('contactForm');
const newsletterForm = document.getElementById('newsletterForm');
const heroVideo = document.getElementById('heroVideo');
const chefSpotlight = document.getElementById('chefSpotlight');
const experienceHero = document.getElementById('experienceHero');

// ========== Ensure hero video plays ==========
function initHeroVideo() {
    if (heroVideo) {
        // Try to play the video
        const playPromise = heroVideo.play();
        
        if (playPromise !== undefined) {
            playPromise.then(() => {
                console.log('Hero video playing successfully');
            }).catch(error => {
                console.log('Video autoplay failed:', error);
                // Video autoplay failed - might need user interaction
                // Add a play button or fallback
                addVideoFallback();
            });
        }
        
        // Handle video errors
        heroVideo.addEventListener('error', (e) => {
            console.log('Video error:', e);
            addVideoFallback();
        });
        
        // Ensure video loops properly
        heroVideo.addEventListener('ended', () => {
            heroVideo.currentTime = 0;
            heroVideo.play();
        });
    }
}

// ========== Add video fallback if needed ==========
function addVideoFallback() {
    const hero = document.querySelector('.hero');
    if (hero && !document.querySelector('.video-fallback')) {
        // Add a play button overlay if video doesn't autoplay
        const playButton = document.createElement('button');
        playButton.className = 'video-play-btn';
        playButton.innerHTML = '<i class="fas fa-play"></i>';
        playButton.addEventListener('click', () => {
            if (heroVideo) {
                heroVideo.play();
                playButton.style.display = 'none';
            }
        });
        hero.appendChild(playButton);
    }
}

// ========== COOKING-RELEVANT IMAGE URLs ==========
const imageUrls = {
    // Dish images
    'dish-1': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=600&h=400&fit=crop',
    'dish-2': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=600&h=400&fit=crop',
    'dish-3': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=600&h=400&fit=crop',
    'dish-4': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=400&fit=crop',
    'dish-5': 'https://images.unsplash.com/photo-1626132646232-5afc9142fd9f?w=600&h=400&fit=crop',
    'dish-6': 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=600&h=400&fit=crop',
    
    // Chef images
    'chef': 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop',
    'chef-2': 'https://images.unsplash.com/photo-1583394293214-28ded15ee548?w=800&h=600&fit=crop',
    
    // Restaurant interior
    'interior-1': 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop',
    'interior-2': 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    
    // Food closeups
    'food-1': 'https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=600&h=400&fit=crop',
    'food-2': 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=600&h=400&fit=crop',
    'food-3': 'https://images.unsplash.com/photo-1631452180789-4347bc5b1fe0?w=600&h=400&fit=crop',
    'food-4': 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=400&fit=crop',
    
    // Testimonials (people)
    'testimonial-1': 'https://images.unsplash.com/photo-1531427185911-0411ee4f8b9b?w=200&h=200&fit=crop&crop=faces',
    'testimonial-2': 'https://images.unsplash.com/photo-1494790108777-383d5c5a853b?w=200&h=200&fit=crop&crop=faces',
    'testimonial-3': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces',
    
    // Gallery
    'gallery-1': 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=600&h=600&fit=crop',
    'gallery-2': 'https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=600&h=600&fit=crop',
    'gallery-3': 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&h=600&fit=crop',
    'gallery-4': 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=600&fit=crop',
    'gallery-5': 'https://images.unsplash.com/photo-1517244683847-7456b63c5969?w=600&h=600&fit=crop',
    'gallery-6': 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&h=600&fit=crop',
    
    // Instagram
    'insta-1': 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=400&h=400&fit=crop',
    'insta-2': 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=400&h=400&fit=crop',
    'insta-3': 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&h=400&fit=crop',
    'insta-4': 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=400&h=400&fit=crop',
    
    // Signature
    'signature': 'https://images.unsplash.com/photo-1626132646232-5afc9142fd9f?w=400&h=200&fit=crop'
};

// ========== Update all images on page load ==========
function updateAllImages() {
    // Update dish images
    const dishImages = document.querySelectorAll('.dish-image img');
    if (dishImages.length >= 3) {
        dishImages[0].src = imageUrls['dish-1'];
        dishImages[1].src = imageUrls['dish-2'];
        dishImages[2].src = imageUrls['dish-3'];
    }
    
    // Update testimonial images
    const testimonialImages = document.querySelectorAll('.testimonial-author img');
    if (testimonialImages.length >= 3) {
        testimonialImages[0].src = imageUrls['testimonial-1'];
        testimonialImages[1].src = imageUrls['testimonial-2'];
        testimonialImages[2].src = imageUrls['testimonial-3'];
    }
    
    // Update instagram images
    const instaImages = document.querySelectorAll('.insta-item img');
    if (instaImages.length >= 4) {
        instaImages[0].src = imageUrls['insta-1'];
        instaImages[1].src = imageUrls['insta-2'];
        instaImages[2].src = imageUrls['insta-3'];
        instaImages[3].src = imageUrls['insta-4'];
    }
    
    // Update story image
    const storyImage = document.querySelector('.story-image img');
    if (storyImage) {
        storyImage.src = imageUrls['interior-1'];
    }
}

// ========== Loader ==========
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.add('hidden');
        // Initialize video after loader
        initHeroVideo();
    }, 1500);
});

// ========== Sticky Navigation ==========
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active section in navigation
    updateActiveSection();
});

// ========== Mobile Menu ==========
hamburgerBtn.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    document.body.style.overflow = 'hidden';
});

closeMenu.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// ========== Smooth Scrolling for Navigation ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== Update Active Section in Navigation ==========
function updateActiveSection() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
    
    mobileLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ========== Scroll Reveal Animation ==========
const revealElements = document.querySelectorAll('.reveal');

function reveal() {
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            element.classList.add('active');
        }
    });
}

window.addEventListener('scroll', reveal);
window.addEventListener('load', reveal);

// ========== Testimonials Carousel ==========
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function updateTestimonialCarousel() {
    if (testimonialWrapper) {
        testimonialWrapper.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
}

if (testimonialNext) {
    testimonialNext.addEventListener('click', () => {
        currentSlide = (currentSlide + 1) % slides.length;
        updateTestimonialCarousel();
    });
}

if (testimonialPrev) {
    testimonialPrev.addEventListener('click', () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateTestimonialCarousel();
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        updateTestimonialCarousel();
    });
});

// Auto-advance carousel
setInterval(() => {
    if (slides.length > 0) {
        currentSlide = (currentSlide + 1) % slides.length;
        updateTestimonialCarousel();
    }
}, 5000);

// ========== Menu Tabs ==========
menuTabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all tabs
        menuTabs.forEach(t => t.classList.remove('active'));
        
        // Add active class to clicked tab
        tab.classList.add('active');
        
        // Hide all categories
        document.querySelectorAll('.menu-category').forEach(category => {
            category.classList.remove('active-category');
        });
        
        // Show selected category
        const categoryId = tab.getAttribute('data-category');
        document.getElementById(categoryId).classList.add('active-category');
    });
});

// ========== Gallery Filter ==========
// Gallery items data with cooking-relevant images
const galleryItems = [
    { category: 'food', src: imageUrls['gallery-1'], alt: 'Indian Cooking' },
    { category: 'food', src: imageUrls['gallery-3'], alt: 'Food Plating' },
    { category: 'food', src: imageUrls['gallery-4'], alt: 'Indian Cuisine' },
    { category: 'interior', src: imageUrls['interior-1'], alt: 'Restaurant Interior' },
    { category: 'interior', src: imageUrls['interior-2'], alt: 'Dining Area' },
    { category: 'events', src: imageUrls['gallery-5'], alt: 'Private Dining' },
    { category: 'events', src: imageUrls['gallery-6'], alt: 'Chef\'s Table' },
    { category: 'food', src: imageUrls['food-3'], alt: 'Curry Dish' }
];

// Populate gallery
function populateGallery(filter = 'all') {
    if (!galleryGrid) return;
    
    const filteredItems = filter === 'all' 
        ? galleryItems 
        : galleryItems.filter(item => item.category === filter);
    
    galleryGrid.innerHTML = filteredItems.map(item => `
        <div class="gallery-item" data-category="${item.category}">
            <img src="${item.src}" alt="${item.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <i class="fas fa-search-plus"></i>
            </div>
        </div>
    `).join('');
    
    // Add click event for lightbox
    addGalleryLightbox();
}

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.getAttribute('data-filter');
        populateGallery(filter);
    });
});

// Initialize gallery
if (galleryGrid) {
    populateGallery();
}

// ========== Gallery Lightbox ==========
function addGalleryLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    
    galleryItems.forEach(item => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            createLightbox(img.src);
        });
    });
}

function createLightbox(src) {
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <div class="lightbox-content">
            <img src="${src}" alt="Lightbox">
            <span class="lightbox-close">&times;</span>
        </div>
    `;
    
    document.body.appendChild(lightbox);
    document.body.style.overflow = 'hidden';
    
    setTimeout(() => lightbox.classList.add('active'), 10);
    
    const closeBtn = lightbox.querySelector('.lightbox-close');
    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(lightbox);
            document.body.style.overflow = 'auto';
        }, 300);
    });
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            setTimeout(() => {
                document.body.removeChild(lightbox);
                document.body.style.overflow = 'auto';
            }, 300);
        }
    });
}

// ========== Reservation Form ==========
if (reservationForm) {
    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        showNotification('Reservation request sent successfully! We\'ll confirm shortly.', 'success');
        
        // Reset form
        reservationForm.reset();
    });
}

// ========== Contact Form ==========
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show success message
        showNotification('Message sent successfully! We\'ll get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

// ========== Newsletter Form ==========
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Show success message
        showNotification('Thank you for subscribing to our newsletter!', 'success');
        
        // Reset form
        newsletterForm.reset();
    });
}

// ========== Notification System ==========
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
            <p>${message}</p>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => notification.classList.add('active'), 10);
    
    setTimeout(() => {
        notification.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// ========== Add notification styles ==========
const notificationStyles = `
.notification {
    position: fixed;
    top: 20px;
    right: 20px;
    background: var(--bg-card);
    border-left: 4px solid var(--gold);
    padding: 15px 25px;
    z-index: 9999;
    transform: translateX(120%);
    transition: transform 0.3s ease;
    box-shadow: var(--shadow-lg);
}

.notification.active {
    transform: translateX(0);
}

.notification-content {
    display: flex;
    align-items: center;
    gap: 15px;
}

.notification-content i {
    font-size: 1.5rem;
    color: var(--gold);
}

.notification-content p {
    color: var(--text-light);
    font-size: 0.95rem;
}

.video-play-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: var(--gold);
    border: none;
    color: var(--bg-dark);
    font-size: 2rem;
    cursor: pointer;
    z-index: 10;
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0% {
        box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7);
    }
    70% {
        box-shadow: 0 0 0 20px rgba(212, 175, 55, 0);
    }
    100% {
        box-shadow: 0 0 0 0 rgba(212, 175, 55, 0);
    }
}
`;

const styleSheet = document.createElement('style');
styleSheet.textContent = notificationStyles;
document.head.appendChild(styleSheet);

// ========== Set minimum date for reservation ==========
const dateInput = document.getElementById('date');
if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
}

// ========== Parallax Effect ==========
window.addEventListener('scroll', () => {
    const parallaxSections = document.querySelectorAll('.parallax-section');
    
    parallaxSections.forEach(section => {
        const scrollPosition = window.pageYOffset;
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        
        if (scrollPosition > sectionTop - window.innerHeight && 
            scrollPosition < sectionTop + sectionHeight) {
            const yOffset = (scrollPosition - sectionTop) * 0.5;
            section.style.backgroundPositionY = `calc(50% + ${yOffset}px)`;
        }
    });
});

// ========== Initialize on page load ==========
document.addEventListener('DOMContentLoaded', () => {
    // Update all images with cooking-relevant URLs
    updateAllImages();
    
    // Set current year in footer
    const yearElement = document.querySelector('.current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Update chef spotlight background
    if (chefSpotlight) {
        chefSpotlight.style.background = `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url('${imageUrls['chef-2']}')`;
        chefSpotlight.style.backgroundSize = 'cover';
        chefSpotlight.style.backgroundPosition = 'center';
        chefSpotlight.style.backgroundAttachment = 'fixed';
    }
    
    // Update experience hero background
    if (experienceHero) {
        experienceHero.style.background = `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${imageUrls['interior-1']}')`;
        experienceHero.style.backgroundSize = 'cover';
        experienceHero.style.backgroundPosition = 'center';
        experienceHero.style.backgroundAttachment = 'fixed';
    }
});

// ========== Prevent default form submissions ==========
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
    });
});

// ========== Handle window resize ==========
let resizeTimer;
window.addEventListener('resize', () => {
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// ========== Add resize stopper styles ==========
const resizeStyles = `
.resize-animation-stopper * {
    animation: none !important;
    transition: none !important;
}
`;

const resizeStyleSheet = document.createElement('style');
resizeStyleSheet.textContent = resizeStyles;
document.head.appendChild(resizeStyleSheet);

// ========== Smooth hover effects for menu cards ==========
document.querySelectorAll('.menu-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateX(10px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateX(0)';
    });
});