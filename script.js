const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll("#nav a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});


/* FORM */

const form = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    formMessage.textContent = "Mesajın hazırlandı. Yakında iletişim kurulacak.";

    form.reset();

    setTimeout(() => {
        formMessage.textContent = "";
    }, 5000);
});


/* YEAR */

document.getElementById("year").textContent = new Date().getFullYear();


/* SCROLL REVEAL */

const revealElements = document.querySelectorAll(
    ".service-card, .project, .about-content, .about-visual, .contact-text, form"
);

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    },
    {
        threshold: 0.12
    }
);

revealElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
});


/* NAVBAR SCROLL */

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        navbar.style.background = "#050505cc";
        navbar.style.backdropFilter = "blur(15px)";
        navbar.style.borderBottom = "1px solid #151515";
    } else {
        navbar.style.background = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.borderBottom = "none";
    }

});
