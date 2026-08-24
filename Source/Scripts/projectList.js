let projectListElement = document.querySelector("#project-list");

/**
 * @param {Project} project 
 */
function ProjectButton(project) {
    this.project = project;

    this.button = document.createElement("a");
    this.button.classList.add("project-button");

    let displayingImageIndex = 0; 
    let image; 

    if (project.images.length >= 1) {
        image = document.createElement("img");
        image.src = `Source/ProjectData/${project.images[0].source}`;
        image.alt = project.images[0].alt;
    }
    else {image = null;}

    const name = document.createElement("label");
    name.innerHTML = project.name;

    const date = document.createElement("label");
    date.innerHTML = `\t(${project.year})`;

    const format = document.createElement("label");
    format.innerHTML = project.format;

    const status = document.createElement("label");
    status.innerHTML = `\t|\t${project.status}`;

    const tags = document.createElement("label");
    tags.innerHTML = project.tags.join(", ");

    const role = document.createElement("label");
    role.innerHTML = project.role; 

    const breakElement = () => document.createElement("br");

    if (image != null)
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

    this.button.addEventListener("mouseenter", () => {
        displayingImageIndex ++;
        if (displayingImageIndex >= project.images.length)
            displayingImageIndex = 0;
        if (image != null)
            image.src = `Source/ProjectData/${project.images[displayingImageIndex].source}`;
    });

    this.button.addEventListener("click", () => {
        sessionStorage.setItem(KEY_SELECTED_PROJECT, this.project.id);
    });

    this.button.href = `project.html?project=${this.project.id}`;
}

for (let p of projects) {
    let projectButton = new ProjectButton(p);
    projectListElement.appendChild(projectButton.button);
}