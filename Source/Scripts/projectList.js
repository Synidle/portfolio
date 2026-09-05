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

    let passes = true; // determines overall pass/fail (useful when requiresAll)
    let failsAny = false; // records if failed any parameter (useful when parameters are blank)
    const entries = Object.entries(filters);
    let i = 0; 

    console.log(`\nCheck Project: ${project.name}`);
    // console.log("entries:");
    // console.log(entries);
    // Skip the last filter, which determines "Any" or "All"
    while (passes && !(!requiresAll && failsAny) && (i < entries.length-1)) {
        const e = entries[i];
        console.log(`entry: ${e}: ${e[1]} (length ${e[1].length})`);
        if (e[1].length > 0) {
            const passesParameter = checkParameter(e[0], e[1], project, requiresAll);
            if (requiresAll && !passesParameter) passes = false;
            else if (!passesParameter) failsAny = true; 
        }
        i ++; 
        console.log(`Passes: ${passes}; fails any: ${failsAny}`);
    }
    if (failsAny) passes = false;
    console.log(`RESULT: passes = ${passes}`);
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
    // console.log(`Check parameter ${parameter} with values ${values}`);
    if (values.length == 0) return true; 

    let passes = true;
    let passesAny = false;
    let i = 0; 
    // console.log(`Check parameter ${parameter} of project ${project.name}`);
    while (passes && !(!requiresAll && passesAny) && (i < values.length)) {
        const value = values[i];
        const projectValues = project[parameter.toLowerCase()];
        let passesValue = false;

        if (projectValues) {
            console.log(`Check value ${value} from filter against ${projectValues} from project.`);
            if (projectValues.length <= 1)
                passesValue = projectValues == value;
            else {
                let i = 0;
                while (!passesValue && i < projectValues.length) {
                    if (projectValues[i] == value) passesValue = true; 
                    i ++;
                }
            }
        }
        else passesValue = false; 

        if (requiresAll && !passesValue) passes = false;
        else if (passesValue) passesAny = true; 
        i ++; 
    }
    if (!passesAny) passes = false;
    console.log(`Pass: ${passes}`);
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