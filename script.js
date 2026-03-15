// Optional script (carousel controlled by CSS)

const carousel = document.querySelector(".carousel");

carousel.addEventListener("mouseenter", () => {
document.querySelector(".carousel-track").style.animationPlayState = "paused";
});

carousel.addEventListener("mouseleave", () => {
document.querySelector(".carousel-track").style.animationPlayState = "running";
});