document.addEventListener("DOMContentLoaded", () => {
    // Mobile Menu Toggle Logic
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle menu open/close
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close mobile menu when a link is clicked
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuToggle.classList.remove('active');
            }
        });
    });

    // Sticky Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.padding = "0.5rem 0";
            navbar.style.backgroundColor = "rgba(42, 45, 52, 0.98)"; // Slightly transparent dark
        } else {
            navbar.style.padding = "1rem 0";
            navbar.style.backgroundColor = "var(--cdc-dark)";
        }
    });
});