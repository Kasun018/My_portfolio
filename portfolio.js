// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // If on mobile and navbar is open, collapse it after click
            const navbarToggler = document.querySelector('.navbar-toggler');
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                navbarToggler.click();
            }
        }
    });
});

// Contact form submission
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! I will get back to you soon.');
        this.reset();
    });
}

// Header background change on scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('.navbar');
    if (header) {
        if (window.scrollY > 50) {
            header.classList.add('shadow');
            header.style.opacity = '0.95';
        } else {
            header.classList.remove('shadow');
            header.style.opacity = '1';
        }
    }
});