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

    // Update Experience section based on selected item
    window.updateExperience = function (experienceId) {
        const experiences = {
            hoodCollege: {
                name: "TA for Object-oriented Programming I",
                timeframe: "Aug 2024 - Dec 2024",
                description:
                    "Led discussions and held office hours for 40+ students, teaching Java programming concepts and providing constructive feedback.",
                roleDetail2:
                    "During this time, I assisted students with their understanding of object-oriented principles, debugging Java code, and preparing for exams. I also created supplementary materials to help students grasp complex topics more effectively.",
                technologies: ["Java"],
            },
            internationalHelp: {
                name: "Web Development Intern @ International Help",
                timeframe: "May 2024 - Aug 2024",
                description:
                    "Led the cleaning, analysis, and visualization of diverse datasets sourced from their database and used Google Data Studio to reflect those insights onto their website.",
                roleDetail:
                    "My role involved significant data manipulation and visualization tasks. I streamlined the process of data cleaning and ensured the accurate presentation of data on the website, making it accessible to a broader audience. Additionally, I collaborated with team members to develop new features and improve the user interface of the site.",
                technologies: ["HTML", "CSS", "Google Data Studio"],
            },
        };

        const experience = experiences[experienceId];

        if (experience) {
            document.getElementById("company-name").textContent = experience.name;
            document.getElementById("time-frame").innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style="height: 1em; vertical-align: middle; fill: #cdd6f4;"><path d="M12,19a1,1,0,1,0-1-1A1,1,0,0,0,12,19Zm5,0a1,1,0,1,0-1-1A1,1,0,0,0,17,19Zm0-4a1,1,0,1,0-1-1A1,1,0,0,0,17,15Zm-5,0a1,1,0,1,0-1-1A1,1,0,0,0,12,15ZM19,3H18V2a1,1,0,0,0-2,0V3H8V2A1,1,0,0,0,6,2V3H5A3,3,0,0,0,2,6V20a3,3,0,0,0,3,3H19a3,3,0,0,0,3-3V6A3,3,0,0,0,19,3Zm1,17a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V11H20ZM20,9H4V6A1,1,0,0,1,5,5H6V6A1,1,0,0,0,8,6V5h8V6a1,1,0,0,0,2,0V5h1a1,1,0,0,1,1,1ZM7,15a1,1,0,1,0-1-1A1,1,0,0,0,7,15Zm0,4a1,1,0,1,0-1-1A1,1,0,0,0,7,19Z"></path></svg> ${experience.timeframe}`;
            document.getElementById("role-description").textContent = experience.description;
            document.getElementById("role-detail").textContent = experience.roleDetail;

            const techIcons = document.getElementById("tech-icons");
            techIcons.innerHTML = "<p>Technologies and Frameworks I've Worked With and Learned:</p>";
            experience.technologies.forEach((tech) => {
                const techItem = document.createElement("div");
                techItem.className = "tech-item";
                techItem.innerHTML = `<i class="ri-arrow-right-s-fill"></i> ${tech}`;
                techIcons.appendChild(techItem);
            });
        } else {
            console.error("Experience not found for ID:", experienceId);
        }
    };

    // Automatically display the first experience
    updateExperience('hoodCollege');
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
