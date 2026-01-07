// Select elements
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");

// Scroll event
window.addEventListener("scroll", () => {
    // 1️⃣ Navbar background change
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // 2️⃣ Active link highlighting
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 120; // adjust offset if needed
        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});

