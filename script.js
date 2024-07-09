document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdownFooter = document.querySelector(".dropdown-footer");
    const navLinks = document.querySelectorAll(".nav-link");
    const footerLinks = dropdownFooter.querySelectorAll(".footer-link"); // Get footer links
    const horizontalLine = dropdownFooter.querySelector("hr"); // Get the horizontal line

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        dropdownFooter.classList.toggle("active");

        navLinks.forEach((link, index) => {
            if (navMenu.classList.contains("active")) {
                link.style.animation = 'none';
                link.offsetHeight; // Trigger reflow to restart animation
                link.style.animation = `fadeUp 2.5s ease-out forwards ${index * 0.1}s`;
            } else {
                link.style.animation = 'none';
            }
        });

        // Animation for the horizontal line
        horizontalLine.style.animation = 'none';
        horizontalLine.offsetHeight; // Trigger reflow to restart animation
        horizontalLine.style.animation = 'slideIn 1.4s ease forwards';

        // Stagger animation for footer links, starting after the line
        footerLinks.forEach((link, index) => {
            link.style.animation = 'none';
            link.offsetHeight; // Trigger reflow
            link.style.animation = `fadeUp 0.5s ease-out forwards ${0.5 + index * 0.1}s`;
        });
    });

    navLinks.forEach(link => link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        dropdownFooter.classList.remove("active");
    }));

    // Handle fade-up animations on scroll for About section
    window.addEventListener('scroll', () => {
        document.querySelectorAll('.about-box').forEach(box => {
            if (isInViewport(box)) {
                box.style.animation = 'fadeUp 0.9s ease-out forwards';
            }
        });
    });

    // Helper function to check if an element is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top < window.innerHeight - 100 && rect.bottom >= 0
        );
    }
});
document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header'); // Get the header element by ID

    window.addEventListener('scroll', function() {
        // Check if the page has been scrolled vertically more than 50 pixels
        if (window.scrollY > 50) {
            header.classList.add('blur-header'); // Add 'blur-header' class
        } else {
            header.classList.remove('blur-header'); // Remove 'blur-header' class
        }
    });
});
