document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const dropdownFooter = document.querySelector(".dropdown-footer");
    const navLinks = document.querySelectorAll(".nav-link");
    const footerLinks = dropdownFooter.querySelectorAll(".footer-link");
    const horizontalLine = dropdownFooter.querySelector("hr");
    const header = document.getElementById("header");

    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
        dropdownFooter.classList.toggle("active");

        navLinks.forEach((link, index) => {
            link.style.animation = "none";
            link.offsetHeight; // Trigger reflow
            link.style.animation = `fadeUp 2.0s ease-out forwards ${index * 0.1}s`;
        });

        horizontalLine.style.animation = "none";
        horizontalLine.offsetHeight; // Trigger reflow
        horizontalLine.style.animation = "slideIn 1.4s ease forwards";

        footerLinks.forEach((link, index) => {
            link.style.animation = "none";
            link.offsetHeight; // Trigger reflow
            link.style.animation = `fadeUp 0.5s ease-out forwards ${0.5 + index * 0.1}s`;
        });
    });

    // Close mobile menu on link click
    navLinks.forEach((link) =>
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
            dropdownFooter.classList.remove("active");
        })
    );

    // Header blur effect on scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("blur-header");
        } else {
            header.classList.remove("blur-header");
        }
    });

    // Intersection Observer for sections
    const sections = document.querySelectorAll(".experience-item, .experience-details, .about-section, .project");
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach((section) => {
        sectionObserver.observe(section);
    });
});
document.addEventListener("DOMContentLoaded", function () {

    // Apply animation classes
    const experienceHeader = document.querySelector(".experience-header");
    const experienceItems = document.querySelectorAll(".experience-item");

    // Apply animation to header and menu items
    setTimeout(() => {
        experienceHeader.style.opacity = "1";
        experienceHeader.style.transform = "translateY(0)";
        experienceItems.forEach(item => {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        });
    }, 100); // Delay to allow for other animations to start
});
document.addEventListener("DOMContentLoaded", function() {
    const homeSection = document.querySelector('#home'); // Adjust this selector to match your home section's ID or class

    const options = {
        root: null, // using the viewport as the root
        threshold: 0.5, // trigger when 50% of the 'home' section is visible
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                entry.target.classList.add('fade-out');
            } else {
                entry.target.classList.remove('fade-out');
            }
        });
    }, options);

    observer.observe(homeSection);
});

//good after this line
// Function to toggle the visibility of experience details and manage highlighting
function toggleExperienceVisibility(selectedId) {
    // Get all detail containers
    var details = document.getElementsByClassName('detail-container');
    for (var i = 0; i < details.length; i++) {
        // Hide all details
        details[i].style.display = 'none';
    }

    // Get all experience items and remove the 'highlighted' class
    var items = document.getElementsByClassName('experience-item');
    for (var j = 0; j < items.length; j++) {
        items[j].classList.remove('highlighted');
    }

    // Show the selected detail and add 'highlighted' class to the selected item
    var detailToShow = document.getElementById('details_' + selectedId);
    if (detailToShow.style.display === 'none') {
        detailToShow.style.display = 'block';
        document.getElementById(selectedId).classList.add('highlighted');
    } else {
        detailToShow.style.display = 'none';
        document.getElementById(selectedId).classList.remove('highlighted');
    }
}

// Event listener for DOM content loaded to automatically display the first experience's details
document.addEventListener("DOMContentLoaded", function() {
    toggleExperienceVisibility('Hood_College');  // Adjust if your default choice changes
});

document.addEventListener("DOMContentLoaded", function() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        root: null, // observing for viewport
        rootMargin: '0px',
        threshold: 0.2 // Trigger when 20% of the element is in view
    });

    // Target elements that require the fade-in effect
    const fadeInElements = document.querySelectorAll('.fade-in-section');
    fadeInElements.forEach(element => observer.observe(element));
});
