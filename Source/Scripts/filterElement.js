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
    const outerDetails = document.createElement("details");
    const outerSummary = document.createElement("summary");
    
    outerSummary.innerHTML = "Filter";
    
    outerDetails.appendChild(outerSummary);
    parentElement.appendChild(outerDetails);

    for (const parameter of parameters) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        // const label = document.createElement("label");
        // const input = document.createElement("input");

        summary.innerHTML = parameter.name; 
        // label.innerHTML = `Any ${parameter.name}`;
        // input.type = "checkbox"; input.name = parameter.name; input.value = "";
        
        // label.appendChild(input); 
        details.appendChild(summary); 
        // details.appendChild(label); 

        for (const [key, value] of Object.entries(parameter.object)) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            label.innerHTML = value;
            input.type = "checkbox"; input.name = parameter.name; input.value = value;
            label.appendChild(input);
            details.appendChild(label);
        }
        
        outerDetails.appendChild(details);
    }

    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const ps = "Include";

    summary.innerHTML = ps;
    
    details.appendChild(summary);

    let checked = false; 
    for (const value of ["Any", "All"]) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.innerHTML = value;
        input.type = "radio"; input.name = "include"; input.value = value;
        label.appendChild(input);
        details.appendChild(label); 

        if (!checked) {input.defaultChecked = true; checked = true;}
    }

    outerDetails.appendChild(details); 

    const reset = document.createElement("button");
    const submit = document.createElement("button");
    reset.type = "reset"; reset.innerHTML = "Reset";
    submit.type = "submit"; submit.innerHTML = "Apply Filters";

    outerDetails.appendChild(reset);
    outerDetails.appendChild(submit);

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