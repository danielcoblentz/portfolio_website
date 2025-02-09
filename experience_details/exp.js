//hilights the tab for user when hovering over specific section ()
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".experience-section");
    const navLinks = document.querySelectorAll(".experience-nav__link");

    function highlightNav() {
        let currentSection = "";

        sections.forEach((section) => {
            const sectionTop = section.offsetTop - 100; // adjust for header height (optional)
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach((link) => {
            link.classList.remove("experience-nav__link--selected");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("experience-nav__link--selected");
            }
        });
    }

    window.addEventListener("scroll", highlightNav);
});
