export const generateGlowingTech = () => {
    document.querySelectorAll('.glow').forEach(icon => {
        const color = icon.dataset.color;
        icon.style.filter = `drop-shadow(0 0 12px ${color})`;

        const card = icon.closest('.tech-card');

        icon.addEventListener("mouseover", () => {
            card.style.boxShadow = `0 0 25px ${color}`;
        });

        icon.addEventListener("mouseout", () => {
            card.style.boxShadow = "none";
        });
    })
}