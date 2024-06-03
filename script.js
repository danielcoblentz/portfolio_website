document.addEventListener('DOMContentLoaded', function() {
    // Set a timeout to match the typing animation duration
    setTimeout(function() {
        document.querySelector('.container').classList.add('active');
    }, 2000); // Timing matches the typing animation

    // Function to check which section is in view
    function checkSectionInView() {
        const sections = document.querySelectorAll('section');
        const navbarLinks = document.querySelectorAll('.navbar a');

        let index = sections.length;

        while(--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navbarLinks.forEach((link) => link.classList.remove('active'));
        navbarLinks[index].classList.add('active');
    }

    // Add scroll event listener
    window.addEventListener('scroll', function() {
        const aboutSection = document.querySelector('.about-section');
        const aboutPosition = aboutSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (aboutPosition < screenPosition) {
            aboutSection.classList.add('active');
        }

        checkSectionInView();
    });

    // Initial check
    checkSectionInView();
});
