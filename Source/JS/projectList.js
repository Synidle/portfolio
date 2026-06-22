let projectListElement = document.querySelector("#project-list");

/**
 * @param {Project} project 
 */
function ProjectButton(project) {
    this.project = project;

    this.button = document.createElement("button");
    this.button.classList.add("project-button");

    const image = document.createElement("img");
    image.src = `Source/ProjectData/${project.images[0].source}`;
    image.alt = project.images[0].alt;

    const name = document.createElement("label");
    name.classList.add("project-name");
    name.innerHTML = project.name;

    const date = document.createElement("label");
    date.classList.add("project-date");
    date.innerHTML = `\t(${project.year})`;

    const format = document.createElement("label");
    format.classList.add("project-format");
    format.innerHTML = project.format;

    const status = document.createElement("label");
    status.classList.add("project-status");
    status.innerHTML = `\t|\t${project.status}`;

    const tags = document.createElement("label");
    tags.classList.add("project-tags");
    tags.innerHTML = project.tags.join(", ");

    const role = document.createElement("label");
    role.classList.add("project-role");
    role.innerHTML = project.role; 

    const breakElement = () => document.createElement("br");

    this.button.appendChild(image);
    this.button.appendChild(breakElement());
    this.button.appendChild(name);
    this.button.appendChild(date);
    this.button.appendChild(breakElement());
    this.button.appendChild(format);
    this.button.appendChild(status); 
    this.button.appendChild(breakElement());
    this.button.appendChild(tags); 
    this.button.appendChild(breakElement());
    this.button.appendChild(role); 
}

for (let p of projects) {
    let projectButton = new ProjectButton(p);
    projectListElement.appendChild(projectButton.button);
}