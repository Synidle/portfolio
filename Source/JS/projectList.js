let projectListElement = document.querySelector("#project-list");

/**
 * @param {Project} project 
 */
function ProjectButton(project) {
    this.project = project;

    this.button = document.createElement("button");
    this.button.classList.add("project-button");

    this.image = document.createElement("img");
    this.image.src = `Source/ProjectData/${project.images[0].source}`;
    this.image.alt = project.images[0].alt;

    this.name = document.createElement("label");
    this.name.classList.add("project-name");
    this.name.innerHTML = project.name;

    this.button.appendChild(this.image);
    this.button.appendChild(this.name);
}

for (let p of projects) {
    let projectButton = new ProjectButton(p);
    projectListElement.appendChild(projectButton.button);
}