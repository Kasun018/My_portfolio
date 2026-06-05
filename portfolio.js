// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });

            // Close mobile navbar after clicking a nav link
            const navbarCollapse = document.querySelector('#navbarNav');
            if (navbarCollapse && navbarCollapse.classList.contains('show')) {
                const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse);
                if (bsCollapse) {
                    bsCollapse.hide();
                }
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