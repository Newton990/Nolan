window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    if (preloader) {
        preloader.classList.add('fade-out');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    // Navigation scroll effect
    const nav = document.getElementById('main-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.style.padding = '0.8rem 0';
            nav.style.background = 'rgba(255, 252, 249, 0.9)';
            nav.style.boxShadow = '0 10px 30px rgba(0,0,0,0.05)';
        } else {
            nav.style.padding = '1rem 0';
            nav.style.background = 'var(--glass-bg)';
            nav.style.boxShadow = 'none';
        }
    });

    // Hero Parallax
    const heroBg = document.getElementById('hero-image');
    window.addEventListener('scroll', () => {
        const scrollValue = window.scrollY;
        if (heroBg) {
            heroBg.style.transform = `translateY(${scrollValue * 0.4}px) scale(${1 + scrollValue * 0.0005})`;
        }
    });

    // Share Link Functionality
    const shareBtn = document.getElementById('share-link-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const url = window.location.href;
            navigator.clipboard.writeText(url).then(() => {
                const originalText = shareBtn.innerText;
                shareBtn.innerText = 'Link Copied!';
                shareBtn.style.borderColor = '#4CAF50';
                shareBtn.style.color = '#4CAF50';
                
                setTimeout(() => {
                    shareBtn.innerText = originalText;
                    shareBtn.style.borderColor = 'var(--accent-gold)';
                    shareBtn.style.color = 'var(--accent-gold)';
                }, 2000);
            }).catch(err => {
                console.error('Failed to copy link: ', err);
            });
        });
    }

    // Search & Cart functionality (demo)
    const searchIcon = document.querySelector('.search-icon');
    const cartIcon = document.querySelector('.cart-icon');
    
    if (searchIcon) {
        searchIcon.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Search functionality coming soon to Little Nolan!');
        });
    }
    
    if (cartIcon) {
        cartIcon.addEventListener('click', (e) => {
            e.preventDefault();
            alert('Your cart is currently empty. Start shopping our Nursery collection!');
        });
    }

    // Product item interaction
    const collectionItems = document.querySelectorAll('.collection-item');
    collectionItems.forEach(item => {
        item.addEventListener('click', () => {
            const itemName = item.querySelector('h3').innerText;
            alert(`${itemName} has been added to your cart!`);
            // Update cart count for demo
            const cartText = document.querySelector('.cart-icon');
            if (cartText) {
                const currentCount = parseInt(cartText.innerText.match(/\d+/)[0]);
                cartText.innerText = `Cart (${currentCount + 1})`;
            }
        });
    });

    // Social icons functionality
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach(icon => {
        icon.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Our ${icon.innerText} page is coming soon! Follow us for updates.`);
        });
    });

    // Mobile Menu Toggle & Auto-close
    const mobileToggle = document.getElementById('mobile-toggle');
    const navLinks = document.querySelector('.nav-links');
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('open');
        });

        // Close menu when a link is clicked
        const navItems = navLinks.querySelectorAll('a');
        navItems.forEach(item => {
            item.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('open');
            });
        });
    }
});
