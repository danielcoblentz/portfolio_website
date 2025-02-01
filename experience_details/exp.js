document.addEventListener("scroll", function () {
    let sections = document.querySelectorAll(".fade-section");
    let sidebarItems = document.querySelectorAll(".tech-doc-sidebar li");
    
    sections.forEach(section => {
        let rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            section.classList.add("visible");
        }
    });
    
    sidebarItems.forEach(item => {
        let section = document.getElementById(item.getAttribute("data-section"));
        if (section) {
            let rect = section.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                sidebarItems.forEach(i => i.classList.remove("active"));
                item.classList.add("active");
            }
        }
    });
});