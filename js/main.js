import { generateGlowingTech } from "./helpers/generateGlowingTech.js";
import { toggleHamburgerMenu } from "./helpers/toggleHamburgerMenu.js";

document.addEventListener("DOMContentLoaded", async () => {
    if(window.location.pathname.endsWith('index.html')) {
        const { projects } = await import("./data/projects.js");
        const { generateProjects } = await import("./helpers/generateProjects.js");
        generateProjects(projects);
    }
    generateGlowingTech();
    toggleHamburgerMenu();
})

