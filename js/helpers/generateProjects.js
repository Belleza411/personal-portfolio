export function generateProjects(projects) {
    const projectsGrid = document.getElementById('projects-grid')

    projects.forEach(project => {
        const projectCard = document.createElement("div");
        projectCard.className = "project-card"

        projectCard.innerHTML = `
            <h2 class="project-title">${project.title}</h2>
            <p class="project-date">
                ${project.projectDate}
            </p>
            <p class="project-description">${project.description}</p>
            <div class="project-image">
                <img src="${project.projectImagePath}" alt="${project.projectImageAlt}">
            </div>
            <div class="project-tech-used">
                ${project.techUsed.map(tech => {
                    return `
                    <div class="tech">
                        <img src="images/icons/${tech.path}" alt="${tech.name}">
                        <span>${tech.name}</span>
                    </div>
                    `
                }).join('')}

            </div>
            <div class="view-project">
                <a href="#" target="_blank" class="center">
                    <img src="images/icons/github-icon.png" alt="Github">
                    View On Github
                    <span class="material-symbols-outlined arrow">
                        arrow_right_alt
                    </span>
                </a>
            </div>
        `;

        projectsGrid.appendChild(projectCard);
    });
}