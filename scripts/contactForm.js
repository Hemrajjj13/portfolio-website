export function contactForm() {
    const form = document.getElementById("contact-form");
    const statusText = document.getElementById("form-status");

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        statusText.textContent = "Sending...";
        
        const data = new FormData(form);

        const endpoint = "https://formspree.io/f/movbprbl";

        try {
            const response = await fetch(endpoint, {
                method: "POST",
                body: data,
                headers: { "Accept": "application/json" }
            });

            if (response.ok) {
                statusText.textContent = "Message sent successfully!";
                form.reset();
            } else {
                statusText.textContent = "Error: Please try again later.";
            }
        } 
        catch (error) {
            statusText.textContent = "Network error. Try again!";
        }
    });
}