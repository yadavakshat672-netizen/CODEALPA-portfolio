// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
};

sections.forEach(section => {
    section.style.opacity = "0";
    section.style.transform = "translateY(50px)";
    section.style.transition = "all 0.8s ease";
});

window.addEventListener("scroll", revealSection);
window.addEventListener("load", revealSection);

// Button Hover Effect
const buttons = document.querySelectorAll(".btn");

buttons.forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        btn.style.transform = "scale(1.08)";
    });

    btn.addEventListener("mouseleave", () => {
        btn.style.transform = "scale(1)";
    });
});

// Dynamic Footer Year
document.querySelector("footer p").innerHTML =
`© ${new Date().getFullYear()} Akshat Yadav | All Rights Reserved`;