export function toggleHamburgerMenu() {
    // This selects the element whose class is "hamburger" and "nav-menu"
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    // When the hamburger is clicked, it would add another class with the name of "active" which
    // shows the "nav-menu" from the left
    // And the class will be removed again, when the hamburger is closed
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
}