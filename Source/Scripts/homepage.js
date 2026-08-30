document.querySelectorAll(".project-li").forEach(li => {
    const projectID = li.id.replace(/^li-/, "");
    if (projectsLookup.has(projectID)) {
        const project = projectsLookup.get(projectID); 
        const projectButton = new ProjectButton(project); 
        li.appendChild(projectButton.button); 
    }
});