// Select elements
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".nav-links a");
const sections = document.querySelectorAll("section");
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-links");

// 1️⃣ Intersection Observer (Fixes the "Hidden Content" error)
const observerOptions = {
    threshold: 0.1 // Triggers when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show"); // Adds the class to make it visible
        }
    });
}, observerOptions);

sections.forEach(section => {
    observer.observe(section);
});

// 2️⃣ Navbar Scroll & Active Link Logic
window.addEventListener("scroll", () => {
    // Background change
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }

    // Highlighting current section link
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
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

// 3️⃣ Mobile Menu Toggle
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = themeToggle.querySelector("i");

themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.getAttribute("data-theme") === "dark";
    
    if (isDark) {
        document.documentElement.setAttribute("data-theme", "light");
        themeIcon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    } else {
        document.documentElement.setAttribute("data-theme", "dark");
        themeIcon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    }
});