const params = new URLSearchParams(location.search); 
const projectID = params.get("project");
const project = projectsLookup.get(projectID); 
const projectPage = projectPagesLookup.get(projectID); 

if (project == null) {
    alert("No project found.");
    open("index.html", "_self");
}

if (projectPage != null) {
    if (projectPage.styleSheet != null) {
        const style = document.createElement("link");
        
        style.href = projectPage.styleSheet;
        style.type = "text/css";
        style.rel = "stylesheet";
    
        document.head.appendChild(style); 
    }
}

// Fill document
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

// Handle essay
if (project.format == Format.ESSAY) {
    document.getElementById("project-inspiration").hidden = true;
    document.getElementById("project-contents").hidden = true;
    document.getElementById("project-body").innerHTML = 
        `<embed
            src="Source/ProjectData/Essays/${project.id}.pdf"
            type="application/pdf"
            width="100%"
            height="800px">`;
}
// Handle project
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
                const parser = new DOMParser(); 
                const projectPageDocument = parser.parseFromString(html, "text/html");
                const projectHeadings = projectPageDocument.getElementsByTagName("h3");

                document.getElementById("project-body").innerHTML = html; 

                // Populate contents
                const contentsList = document.getElementById("project-contents-list");
                for (let heading of projectHeadings) {
                    if (heading.hasAttribute("id")) {
                        const listItem = document.createElement("li");
                        const anchor = document.createElement("a");

                        anchor.textContent = heading.textContent;
                        anchor.href = `#${heading.id}`;

                        listItem.appendChild(anchor);
                        contentsList.appendChild(listItem);
                    }
                }
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