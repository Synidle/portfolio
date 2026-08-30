document.querySelectorAll(".project-li").forEach(li => {
    const projectID = li.id.replace(/^li-/, "");
    if (projectsLookup.has(projectID)) {
        const project = projectsLookup.get(projectID); 
        const projectButton = new ProjectButton(
            project,
            showFormat=false,
            showTags=false,
            showRole=false,
            showDescription=false
        ); 
        li.appendChild(projectButton.button); 
        const description = document.createElement("p");
        description.innerHTML = project.description; 
        li.appendChild(description); 
    }
});