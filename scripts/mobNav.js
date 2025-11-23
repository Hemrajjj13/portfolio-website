export function mobileNav() {
    const menuBtn = document.querySelector(".menu-toggle");
    const mobileNav = document.querySelector(".mobile-nav");

    menuBtn.addEventListener("click", () => {
        mobileNav.classList.toggle("open");
    });

    mobileNav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            mobileNav.classList.remove("open");
        });
    });
}