import { projects } from "./data/projects.js";
import { generateGlowingTech } from "./helpers/generateGlowingTech.js";
import { generateProjects } from "./helpers/generateProjects.js";
import { toggleHamburgerMenu } from "./helpers/toggleHamburgerMenu.js";

document.addEventListener("DOMContentLoaded", () => {
    generateProjects(projects);
    generateGlowingTech();
    toggleHamburgerMenu();
})

