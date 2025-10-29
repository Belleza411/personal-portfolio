// It takes 3 parameters
// "projects" which is the array of projects containing all the information about a project
// "num" which is how much project I need to display; 3 is the default value for Home page, and all projects will be the Projects page
// "isProjectPage" which tells that is this a Projects page or not; true if project page, false if home page
export const generateProjects = (projects, num = 3, isProjectPage = false) => {
    const projectsGrid = document.getElementById('projects-grid')

    projects.slice(0, num).forEach(project => {
        // Creates an "article" element with classname of "project-card"
        const projectCard = document.createElement("article");
        projectCard.className = "project-card"


        // Notice that i have a "ternary operator" on img src, because home page and projects page have different levels of access
        // to the images folder. Home page uses absolute path while Projects page uses relative path
        // If the "isProjectPage" is true, then we use relative path, if it's false then we use absolute path
        projectCard.innerHTML = `
            <h2 class="project-title">${project.title}</h2>
            <p class="project-date">
                ${project.projectDate}
            </p>
            <p class="project-description">${project.description}</p>
            <div class="project-image">
                <img src="${isProjectPage ? "../" : ""}${project.projectImagePath}" alt="${project.projectImageAlt}">
            </div>
            <div class="project-tech-used">
                ${project.techUsed.map(tech => {
                    // Takes all tech used in the project, and create a "div" element
                    return `
                        <div class="tech">
                            <img src="${isProjectPage ? "../" : ""}images/icons/${tech.path}" alt="${tech.name}">
                            <span>${tech.name}</span>
                        </div>
                    `
                }).join('')}

            </div>
            <div class="view-project">
                <a href="${project.githubLink}" target="_blank" class="center">
                    <img src="${isProjectPage ? "../" : ""}images/icons/github-icon.png" alt="Github">
                    View On Github
                    <span class="material-symbols-outlined arrow">
                        arrow_right_alt
                    </span>
                </a>
            </div>
        `;

        // Finally added the "projectCard" inside "projectsGrid"
        projectsGrid.appendChild(projectCard);
    });
}