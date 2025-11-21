const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

const themeToggle = document.querySelector('.theme-toggle');

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    themeToggle.textContent = "☀️";
}

// Toggle theme
themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    const isLight = document.body.classList.contains("light");

    themeToggle.textContent = isLight ? "☀️" : "🌙";

    localStorage.setItem("theme", isLight ? "light" : "dark");
});

new Typed("#typing", {
  strings: ["Hemraj Suryawanshi", "a Developer", "a Full Stack Engineer"],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true
});
