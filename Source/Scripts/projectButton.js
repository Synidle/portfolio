/**
 * @param {Project} project 
 */
function ProjectButton(project, showFormat=true, showTags=true, showRole=true, showDescription=false) {
    this.project = project;

    this.button = document.createElement("a");
    this.button.classList.add("project-button");

    const content = document.createElement("div");
    content.classList.add("project-button-content");
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("project-button-image");
    const labelsDiv = document.createElement("div");
    labelsDiv.classList.add("project-button-labels");
    const titleDiv = document.createElement("div");
    titleDiv.classList.add("project-button-title-line");
    const detailsDiv = document.createElement("div");
    detailsDiv.classList.add("project-button-details");

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
    name.classList.add("project-name");

    const date = document.createElement("label");
    date.innerHTML = `\t(${project.year})`;
    date.classList.add("project-date");

    const format = document.createElement("label");
    format.innerHTML = project.format;

    const status = document.createElement("label");
    status.innerHTML = `\t|\t${project.status}`;

    const tags = document.createElement("label");
    tags.innerHTML = project.tags.join(", ");
    tags.classList.add("project-tags");

    const role = document.createElement("label");
    role.innerHTML = project.role;
    role.classList.add("project-role");

    const description = document.createElement("label");
    description.innerHTML = project.description;
    description.classList.add("project-description");

    const breakElement = () => document.createElement("br");

    if (image != null)
        imgDiv.appendChild(image);
    
    titleDiv.appendChild(name);
    titleDiv.appendChild(date);
    if (showFormat) {
        detailsDiv.appendChild(format);
        detailsDiv.appendChild(status); 
    }
    if (showTags) {
        detailsDiv.appendChild(breakElement());
        detailsDiv.appendChild(tags); 
    }
    if (showRole) {
        detailsDiv.appendChild(breakElement()); 
        detailsDiv.appendChild(role); 
    }
    if (showDescription) {
        detailsDiv.appendChild(breakElement()); 
        detailsDiv.appendChild(description); 
    }

    labelsDiv.appendChild(titleDiv);
    labelsDiv.appendChild(detailsDiv);
    content.appendChild(imgDiv);
    content.appendChild(labelsDiv); 
    this.button.appendChild(content);
    
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