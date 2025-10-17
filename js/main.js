import { projects } from "./data/projects.js";
import { generateProjects } from "./helpers/generateProjects.js";

document.addEventListener("DOMContentLoaded", () => {
    generateProjects(projects);
})