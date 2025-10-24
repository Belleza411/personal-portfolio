import { toggleHamburgerMenu } from "./helpers/toggleHamburgerMenu.js";

document.addEventListener("DOMContentLoaded", async () => {
    const path = window.location.pathname;
    
    if (path === "/" || path.endsWith("index.html")) {
        const { projects } = await import("./data/projects.js");
        const { generateProjects } = await import("./helpers/generateProjects.js");
        const { generateGlowingTech } = await import("./helpers/generateGlowingTech.js");
        generateProjects(projects);
        generateGlowingTech();
    }
    toggleHamburgerMenu();
})

