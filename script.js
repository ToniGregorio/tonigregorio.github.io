document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for navigation links (if any, though not explicit in one-page)
    document.querySelectorAll("a[href^=\"#\"]").forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Language selector active state
    const languageSelector = document.querySelector(".language-selector");
    if (languageSelector) {
        const currentPath = window.location.pathname.split("/").pop();
        languageSelector.querySelectorAll("a").forEach(link => {
            if (link.getAttribute("href") === currentPath) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        });
    }

    // Simple fade-in animation for sections
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("section-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        section.classList.add("section-hidden");
        observer.observe(section);
    });
});


