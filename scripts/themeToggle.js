export function themeToggle() {
    const btn = document.querySelector(".theme-toggle");
    const body = document.body;

    if (!btn) return;

    const saved = localStorage.getItem("theme");
    if (saved === "light") {
        body.classList.add("light-theme");
        btn.textContent = "☀️";
    }

    btn.addEventListener("click", () => {
        body.classList.toggle("light-theme");

        const isLight = body.classList.contains("light-theme");

        btn.textContent = isLight ? "☀️" : "🌙";

        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}
