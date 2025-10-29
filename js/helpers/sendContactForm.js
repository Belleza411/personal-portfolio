const serviceId = "portfolio_aevan";
const templateId = "template_02swao3"

export const sendContactForm = () => {
    // Get's all the element
    const form = document.getElementById('contact-form');
    const sendBtn = document.getElementById('send-btn');
    const btnIcon = document.getElementById('btn-icon');
    const btnText = document.getElementById('btn-text');
    
    // Listen to submit button clicked by the user
    form.addEventListener("submit", (e) => {
        // Prevent the url like "contact.html?......" from staying after the from sends
        e.preventDefault();

        sendBtn.disabled = true; // If the button is clicked, the button will be disabled
        btnText.style.display = "none"; // The button text will be hidden
        btnIcon.textContent = "progress_activity" // The "span" will become a loading icon
        btnIcon.style.animation = "spin 1s linear infinite"; // Makes the loading icon spin
        btnIcon.style.marginRight = "0" // Remove the "icon" right margin

        // Send the from to me
        emailjs.sendForm(serviceId, templateId, form)
            // If the sending is successful; this "then" will run
            .then(() => {
                alert("Message sent successfully");
                // Resets the form values
                form.reset();
            })
            // If something went wrong, this "catch" will run
            .catch(() => 
                alert("Something went wrong. Please try again later or send me a message from social media (LinkedIn preferably). ")
            )
            // After the send is successful, all of these element will go back to original state
            .finally(() => {
                sendBtn.disabled = false; // Button will be clickable again
                btnText.style.display = "flex"; // Display will go from "none" to "flex"
                btnText.textContent = "Send"; // Button text will have the "Send" text again
                btnIcon.textContent = "send" // The send icon will be back
                btnIcon.style.animation = "none"; // The animation will be removed
                btnIcon.style.marginRight = "0.8rem" // The original margin will also be back
            })
    })
}