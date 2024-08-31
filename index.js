const headerEl = document.querySelector("header");
const scrollToTop = document.querySelector(".scroll-to-top");

window.addEventListener("scroll", () => {
    let height = headerEl.getBoundingClientRect().height;

    if (window.scrollY - height > 800) {
        if (!headerEl.classList.contains("sticky")) {
            headerEl.classList.add("sticky");
        }
    } else {
        headerEl.classList.remove("sticky")
    }

    if (window.scrollY > 2000) {
        scrollToTop.style.display = "block";
    } else {
        scrollToTop.style.display = "none";
    }
})

const glide = new Glide(".glide")
const captionEl = document.querySelectorAll(".slide-caption")

glide.on(["mount.after", "run.after"], () => {
    const caption = captionEl[glide.index];
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, { start: 300 }),
        translateY: [anime.stagger([40, 10]), 0]
    });
})

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    })
})
glide.mount();

// 成功案例 js
const isotope = new Isotope(".cases", {
    layoutMode: "fitRows",
    itemSelector: ".case-item",
});

const filterBtns = document.querySelector(".filter-btns");

filterBtns.addEventListener("click", e => {
    let { target } = e;
    const filterOption = target.getAttribute("data-filter");

    if (filterOption) {
        document.querySelectorAll(".filter-btn.active").forEach((btn) => btn.classList.remove("active"));
        target.classList.add("active");

        isotope.arrange({ filter: filterOption });
    }

})

const staggeringOption = {
    delay: 300,
    distance: "50px",
    duration: 500,
    easing: "ease-in-out",
    origin: "bottom"
}

ScrollReveal().reveal(".feature", { ...staggeringOption, interval: 350 });
ScrollReveal().reveal(".service-item", { ...staggeringOption, interval: 350 });


ScrollReveal().reveal(".data-section", {
    beforeReveal: () => {
        anime({
            targets: ".data-section .num",
            innerHTML: (el) => {
                return [0, el.innerHTML];
            },
            duration: 2000,
            round: 1,
            easing: "easeInExpo"
        });
    }
})

const scroll = new SmoothScroll('nav a[href*="#"], .scroll-to-top a[href*="#"]', {
    header: "header",
    offset: 80
});

document.addEventListener("scrollStart", () => {
    if(headerEl.classList.contains("open")){
        headerEl.classList.remove("open");
    }
})

const exploreBtnEls = document.querySelectorAll(".explore-btn")
exploreBtnEls.forEach(exploreBtnEl => {
    exploreBtnEl.addEventListener("click", () => {
        scroll.animateScroll(document.querySelector("#about-us"));
    })
})

// 折叠按钮事件
const burgerEl = document.querySelector(".burger");
burgerEl.addEventListener("click", () => {
  headerEl.classList.toggle("open");
})