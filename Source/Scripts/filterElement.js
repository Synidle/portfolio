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
        createDropdown(
            parameter.name, 
            "filter-options",
            Object.values(parameter.object),
            parentElement
        );
    }

    createDropdown(
        "Include",
        "filter-options",
        ["Any", "All"],
        parentElement,
        true
    );

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
 * @param {string} parameterName 
 * @param {string[]} values 
 * @param {HTMLElement} parentElement 
 * @param {boolean} radioButtons
 */
function createDropdown(
    parameterName, 
    className, 
    values, 
    parentElement,
    radioButtons = false
) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    const div = document.createElement("div");

    summary.textContent = parameterName;
    div.classList.add(className);
    details.name = className;

    details.appendChild(summary); 
    details.appendChild(div); 

    let checked = false; 
    for (const value of values) {
        const label = document.createElement("label");
        const input = document.createElement("input");
        label.textContent = value; 
        input.type = radioButtons? "radio" : "checkbox";
        input.name = parameterName; input.value = value; 

        if (radioButtons)
            if (!checked) {
                input.defaultChecked = true;
                input.checked = true; 
            }

        label.appendChild(input);
        div.appendChild(label); 
    }

    parentElement.appendChild(details); 
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