import { toggleHamburgerMenu } from "./helpers/toggleHamburgerMenu.js";

// This waits the whole HTML to be load before running this script
document.addEventListener("DOMContentLoaded", async () => {
    // This gets the current path or url
    const path = window.location.pathname;
    
    // If path is "/" or has "index.html",
    // Then I only want to use these features, and no other than "index.html" would not use it
    if (path === "/" || path.endsWith("index.html")) {
        const { projects } = await import("./data/projects.js");
        const { generateProjects } = await import("./helpers/generateProjects.js");
        const { generateGlowingTech } = await import("./helpers/generateGlowingTech.js");
        generateProjects(projects);
        generateGlowingTech();
    }

    // If path has "projects.html", then i only want to use "generateProjects" and not use "generateGlowingTech"
    if(path.endsWith("projects.html")) {
        const { projects } = await import("./data/projects.js");
        const { generateProjects } = await import("./helpers/generateProjects.js");
        generateProjects(projects, projects.length, true);
    }

    // If path is "certificates/html", then I only want to use "generateCertificate", and other features wil not be used
    if(path.endsWith("certificates.html")) {
        const { generateCertificate } = await import("./helpers/generateCertificate.js");
        generateCertificate();
    }

    // If path is "contact.html" then i only want to use this feature "sendContactForm"
    if(path.endsWith("contact.html")) {
        const { sendContactForm } = await import("./helpers/sendContactForm.js");
        sendContactForm();
    }
    
    // This calls the method to all pages
    toggleHamburgerMenu();
})