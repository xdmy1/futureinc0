const mobileNav = document.querySelector('.mobile-nav')
const burger = document.querySelector('.burger')
const close = document.querySelector('.close')
const mobileLinks = document.querySelectorAll(".mobile-li li")

burger.addEventListener("click", showNav)
close.addEventListener("click", closeNav)
mobileLinks.forEach((link) =>
    link.addEventListener("click", closeNav))

function showNav() {
    mobileNav.classList.add("show");
}

function closeNav() {
    mobileNav.classList.remove("show");
}

document.addEventListener("DOMContentLoaded", () => {
    const historyFigure = document.querySelector(".history-section figure");
    const statsContainer = document.querySelector(".experience-section .stats-container");

    if (historyFigure && statsContainer) {
        const resizeObserver = new ResizeObserver(entries => {
            for (let entry of entries) {
                if (entry.target === historyFigure) {
                    const figureWidth = entry.contentRect.width;
                    statsContainer.style.width = `${figureWidth}px`;
                }
            }
        });

        resizeObserver.observe(historyFigure);
        statsContainer.style.width = `${historyFigure.clientWidth}px`;
    }
});
