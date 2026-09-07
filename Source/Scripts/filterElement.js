/**
 * 
 * @param {string} name 
 * @param {Object} object
 */
function FilterParameter(
    name,
    object
) {
    this.name = name;
    this.object = object;
}

/**
 * 
 * @param {HTMLElement} parentElement 
 * @param {FilterParameter[]} parameters 
 * @param {function} onApply
 */
function createFilterElement(parentElement, parameters, onApply) {
    const title = document.createElement("span");
    
    title.textContent = "Filter"
    
    parentElement.appendChild(title);

    for (const parameter of parameters) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const div = document.createElement("div");
        // const label = document.createElement("label");
        // const input = document.createElement("input");

        summary.textContent = parameter.name; 
        // label.innerHTML = `Any ${parameter.name}`;
        // input.type = "checkbox"; input.name = parameter.name; input.value = "";
        div.classList.add("filter-options");
        details.name = "filter-options";

        // label.appendChild(input); 
        details.appendChild(summary); 
        // details.appendChild(label); 
        details.appendChild(div); 

        for (const [key, value] of Object.entries(parameter.object)) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            label.textContent = value;
            input.type = "checkbox"; input.name = parameter.name; input.value = value;
            label.appendChild(input);
            div.appendChild(label);
        }
        
        parentElement.appendChild(details);
    }

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const div = document.createElement("div");
    const ps = "Include";

    summary.textContent = ps;
    div.classList.add("filter-options");
    
    details.appendChild(summary);
    details.appendChild(div);

    let checked = false; 
    for (const value of ["Any", "All"]) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.textContent = value;
        input.type = "radio"; input.name = "include"; input.value = value;
        label.appendChild(input);
        div.appendChild(label); 

        if (!checked) {input.defaultChecked = true; checked = true;}
    }

    parentElement.appendChild(details); 

    const reset = document.createElement("button");
    const submit = document.createElement("button");
    reset.type = "reset"; reset.textContent = "Reset";
    submit.type = "submit"; submit.textContent = "Apply Filters";

    parentElement.appendChild(reset);
    parentElement.appendChild(submit);

    parentElement.addEventListener("submit", (event) => {
        event.preventDefault(); 
        submitFilters(parentElement, parameters, onApply);
    });       

    parentElement.addEventListener("reset", (event) => {
        requestAnimationFrame(() => {
            submitFilters(parentElement, parameters, onApply);
        });
    });
}

/**
 * 
 * @param {HTMLElement} parentElement 
 * @param {FilterParameter[]} parameters 
 * @param {function} onApply 
 */
function submitFilters(parentElement, parameters, onApply) {
    const formData = new FormData(parentElement);
    const filters = {};

    for (const parameter of parameters) {
        filters[parameter.name] = formData.getAll(parameter.name);
    }

    filters.include = formData.get("include");

    onApply(filters);
}