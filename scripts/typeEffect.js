const texts = ["Java Programmer", "Problem Solver", "Frontend Developer"];

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

export function typeEffect() {
    const typingEl = document.querySelector("#typing");
    if (!typingEl) return;
    
    const currentWord = texts[wordIndex];

    if (!isDeleting) {
        charIndex++;
    } else {
        charIndex--;
    }

    typingEl.textContent = currentWord.substring(0, charIndex);

    let speed = isDeleting ? 70 : 110;

    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        speed = 900;
    }

    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % texts.length;
        speed = 400;
    }

    setTimeout(typeEffect, speed);
}