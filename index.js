const glide = new Glide(".glide")
const captionEl = document.querySelectorAll(".slide-caption")

glide.on(["mount.after","run.after"], ()=>{
    const caption = captionEl[glide.index];
    anime({
        targets: caption.children,
        opacity: [0, 1],
        duration: 400,
        easing: "linear",
        delay: anime.stagger(400, {start: 300}),
        translateY: [anime.stagger([40, 10]),0]
    });
})

glide.on("run.before", () => {
    document.querySelectorAll(".slide-caption > *").forEach(el => {
        el.style.opacity = 0;
    })
})
glide.mount();