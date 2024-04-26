gsap.registerPlugin(ScrollTrigger);

const navlist = document.querySelector('.navlist');
const header = document.querySelector("header");
const triggerHeight = header.clientHeight; 

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > triggerHeight);
});

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

gsap.from(".certificate", {
    scrollTrigger: {
        trigger: ".certificates",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

gsap.from(".project-section", {
    scrollTrigger: {
        trigger: ".project-section",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

gsap.from(".conm-video", {
    scrollTrigger: {
        trigger: ".conm-videos",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});

gsap.from(".toc-video", {
    scrollTrigger: {
        trigger: ".toc-videos",
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
});
