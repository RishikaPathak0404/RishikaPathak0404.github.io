// Import the ScrollTrigger from GSAP
gsap.registerPlugin(ScrollTrigger);

// Header Animation
let navlist = document.querySelector('.navlist');
const header = document.querySelector("header");
const triggerHeight = header.clientHeight; // Height of the header

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > triggerHeight);
});

// ScrollReveal Animations
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".home",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    }
});

tl.from(".home-text", { opacity: 0, y: 50, duration: 1 });

gsap.from(".About-img", {
    scrollTrigger: {
        trigger: ".About-img",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".About-text", {
    scrollTrigger: {
        trigger: ".About-text",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".skills-text", {
    scrollTrigger: {
        trigger: ".skills",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".skills-icons", {
    scrollTrigger: {
        trigger: ".skills-icons",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1
});

gsap.from(".project-card", {
    scrollTrigger: {
        trigger: ".project-card",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});
