const params = new URLSearchParams(location.search); 
const projectID = params.get("project");
const project = projectsLookup.get(projectID); 
const projectPage = projectPagesLookup.get(projectID); 

if (project == null) {
    alert("No project found.");
    open("index.html", "_self");
}

document.querySelector("title").innerHTML = `Ben Lockyer | ${project.name}`;
document.getElementById("project-title").innerHTML = project.name;
document.getElementById("project-role").innerHTML = project.role;
document.getElementById("project-description").innerHTML = project.description; 
document.getElementById("project-link").href = project.link;
document.getElementById("project-year").innerHTML = project.year;
document.getElementById("project-status").innerHTML = project.status;
document.getElementById("project-format").innerHTML = project.format;
document.getElementById("project-tags").innerHTML = getListItemsFrom(project.tags);
document.getElementById("project-skills").innerHTML = getListItemsFrom(project.skills);
document.getElementById("project-inspirations").innerHTML = getListItemsFrom(project.inspirations, formatInspiration);

if (project.format == Format.ESSAY) {
    document.getElementById("project-body").innerHTML = 
        `<embed
            src="Source/ProjectData/Essays/${project.id}.pdf"
            type="application/pdf"
            width="100%"
            height="800px">`;
}
else {
    document.getElementById("project-link").innerHTML = project.link;
    
    if (projectPage == undefined) {
        console.log(projectPagesLookup);
        throw new Error(`No project page found for ID ${projectID}`); 
    }
    else {
        fetch(projectPage.content)
            .then(response => response.text())
            .then(html => {
                document.getElementById("project-body").innerHTML = html; 
            });
    }
}

/**
 * 
 * @param {any[]} array 
 * @param {function} formatter
 */
function getListItemsFrom(array, formatter=null) {
    let val = "";
    for (let i of array) {
        if (formatter != null) i = formatter(i); 
        val += `<li>${i}</li>`;
    }
    return val; 
}

/**
 * 
 * @param {Inspiration} inspiration 
 */
function formatInspiration(inspiration) {
    return `<i>${inspiration.name}</i> (${inspiration.author}, ${inspiration.year}): ${inspiration.description}.`
}