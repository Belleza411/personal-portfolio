export const generateGlowingTech = () => {
    // This selects each element class name of "glow"
    document.querySelectorAll('.glow').forEach(icon => {
        // This gets the data attribute from the element which has "data-color"
        const color = icon.dataset.color;

        // Add a styling of "drop-shadow" to the icon based on what "color" was given
        icon.style.filter = `drop-shadow(0 0 .6rem ${color})`;

        // Get's the closest element which is the "tech-card" (parent)
        const card = icon.closest('.tech-card');

        // This is the same as hover
        // When the mouse enters the icon, the card would glow based on the color of the "tech"
        icon.addEventListener("mouseover", () => {
            card.style.boxShadow = `0 0 25px ${color}`;
        });

        // When the mouse leaves the icon, the card would lights out
        icon.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
        });
    })
}