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

    // Toggle More Info Section (Portuguese)
    const toggleButton = document.getElementById('toggleMoreInfo');
    const moreInfoContent = document.getElementById('moreInfoContent');
    
    if (toggleButton && moreInfoContent) {
        toggleButton.addEventListener('click', function() {
            if (moreInfoContent.style.display === 'none' || moreInfoContent.style.display === '') {
                moreInfoContent.style.display = 'block';
                toggleButton.textContent = 'Ocultar informações';
                toggleButton.style.backgroundColor = '#666';
            } else {
                moreInfoContent.style.display = 'none';
                toggleButton.textContent = 'Se quiser saber mais';
                toggleButton.style.backgroundColor = '#d4af37';
            }
        });
    }

    // Toggle More Info Section (English)
    const toggleButtonEN = document.getElementById('toggleMoreInfoEN');
    const moreInfoContentEN = document.getElementById('moreInfoContentEN');
    
    if (toggleButtonEN && moreInfoContentEN) {
        toggleButtonEN.addEventListener('click', function() {
            if (moreInfoContentEN.style.display === 'none' || moreInfoContentEN.style.display === '') {
                moreInfoContentEN.style.display = 'block';
                toggleButtonEN.textContent = 'Hide information';
                toggleButtonEN.style.backgroundColor = '#666';
            } else {
                moreInfoContentEN.style.display = 'none';
                toggleButtonEN.textContent = 'Learn more';
                toggleButtonEN.style.backgroundColor = '#d4af37';
            }
        });
    }

    // Toggle More Info Section (Chinese)
    const toggleButtonZH = document.getElementById('toggleMoreInfoZH');
    const moreInfoContentZH = document.getElementById('moreInfoContentZH');
    
    if (toggleButtonZH && moreInfoContentZH) {
        toggleButtonZH.addEventListener('click', function() {
            if (moreInfoContentZH.style.display === 'none' || moreInfoContentZH.style.display === '') {
                moreInfoContentZH.style.display = 'block';
                toggleButtonZH.textContent = '隐藏信息';
                toggleButtonZH.style.backgroundColor = '#666';
            } else {
                moreInfoContentZH.style.display = 'none';
                toggleButtonZH.textContent = '了解更多';
                toggleButtonZH.style.backgroundColor = '#d4af37';
            }
        });
    }
});


