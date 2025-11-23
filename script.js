import { typeEffect } from "./scripts/typeEffect.js";
import { mobileNav } from "./scripts/mobNav.js";
import { navBack } from "./scripts/navBack.js";
import { contactForm } from "./scripts/contactForm.js";
import { themeToggle } from "./scripts/themeToggle.js";

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
    mobileNav();
    navBack();
    contactForm();
    themeToggle();
});
