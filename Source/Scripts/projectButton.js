/**
 * @param {Project} project 
 */
function ProjectButton(project, showFormat=true, showTags=true, showRole=true, showDescription=false) {
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

    const description = document.createElement("label");
    description.innerHTML = project.description;

    const breakElement = () => document.createElement("br");

    if (image != null)
        this.button.appendChild(image);
    this.button.appendChild(breakElement());
    this.button.appendChild(name);
    this.button.appendChild(date);
    if (showFormat) {
        this.button.appendChild(breakElement());
        this.button.appendChild(format);
        this.button.appendChild(status); 
    }
    if (showTags) {
        this.button.appendChild(breakElement());
        this.button.appendChild(tags); 
    }
    if (showRole) {
        this.button.appendChild(breakElement()); 
        this.button.appendChild(role); 
    }
    if (showDescription) {
        this.button.appendChild(breakElement()); 
        this.button.appendChild(description); 
    }

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