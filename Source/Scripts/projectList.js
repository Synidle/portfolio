const filterParent = document.getElementById("project-filter");
const projectListElement = document.getElementById("project-list");
/**@type {HTMLElement[]} */
let projectButtons = []; 

/**
 * 
 * @param {{include: FormDataEntryValue | null}} filters 
 */
function applyFilters(filters) {
    console.log(filters); 

    requireAll = filters["include"] == "All";

    // Clear buttons
    for (const b of projectButtons) {
        projectListElement.removeChild(b); 
    }
    projectButtons = []; 

    // Show passing projects
    for (const p of projects) {
        const showProject = filterProject(p, filters, requireAll);
        if (showProject) 
            createProjectButton(p); 
    }
}

/**
 * 
 * @param {Project} project 
 * @param {{include: FormDataEntryValue | null}} filters 
 * @param {boolean} requiresAll 
 * @returns {boolean} passes
 */
function filterProject(project, filters, requiresAll) {
    if (filters == null) return true; 

    let passes = true; 
    let passesAny = false; 
    const entries = Object.entries(filters);
    let i = 0; 

    while (passes && !(!requiresAll && passesAny) && (i < entries.length)) {
        const f = entries[i];
        const passesParameter = checkParameter(f[0], f[1], project, requiresAll);
        if (requiresAll && !passesParameter) passes = false; 
        else if (passesParameter) passesAny = true; 
        i ++; 
    }
    return passes; 
}

/**
 * 
 * @param {string} parameter 
 * @param {string[]} values 
 * @param {Project} project 
 * @param {boolean} requiresAll 
 * @returns {boolean} passes
 */
function checkParameter(parameter, values, project, requiresAll) {
    let passes = true;
    let passesAny = false;
    let i = 0; 
    // console.log(`Check parameter ${parameter} of project ${project.name}`);
    while (passes && !(requiresAll && passesAny) && (i < values.length)) {
        const value = values[i];
        const passesValue = project[parameter] == value; 
        // console.log(`Check value ${value} from filter against ${project[parameter]} from project.`);
        if (requiresAll && !passesValue) passes = false;
        else if (passesValue) passesAny = true; 
        i ++; 
    }
    return passes; 
}

/**
 * 
 * @param {Project} project 
 */
function createProjectButton(project) {
    const projectButton = new ProjectButton(project);
    projectListElement.appendChild(projectButton.button);
    projectButtons.push(projectButton.button); 
}

for (const p of projects) {
    createProjectButton(p);
}

createFilterElement(
    filterParent,
    [
        new FilterParameter("Status", Status),
        new FilterParameter("Format", Format),
        new FilterParameter("Tags", Tag),
        new FilterParameter("Skills", Skill),
    ],
    applyFilters
);