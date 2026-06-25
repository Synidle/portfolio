const projectID = sessionStorage.getItem(KEY_SELECTED_PROJECT);
const project = projectsLookup.get(projectID); 

document.querySelector("title").innerHTML = `Ben Lockyer | ${project.name}`;