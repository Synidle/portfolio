const filterParent = document.getElementById("project-filter");
const projectListElement = document.getElementById("project-list");

/**
 * 
 * @param {{include: FormDataEntryValue | null}} filters 
 */
function applyFilters(filters) {
    console.log(filters);
}

for (const p of projects) {
    const projectButton = new ProjectButton(p);
    projectListElement.appendChild(projectButton.button);
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