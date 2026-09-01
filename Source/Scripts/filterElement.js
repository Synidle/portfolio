/**
 * 
 * @param {HTMLElement} parentElement 
 * @param {Object[]} parameters 
 */
function createFilterElement(parentElement, parameters) {
    for (const parameter of parameters) {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const label = document.createElement("label");
        const input = document.createElement("input");

        const ps = parameter.toString(); 

        legend.innerHTML = ps; 
        summary.innerHTML = ps; 
        label.innerHTML = `Any ${ps}`;
        input.type = "checkbox"; input.name = ps; input.value = "";
        
        label.appendChild(input); 
        details.appendChild(summary); 
        details.appendChild(label); 
        fieldset.appendChild(legend);
        fieldset.appendChild(details);

        for (const [key, value] of Object.entries(parameter)) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            label.innerHTML = value;
            input.type = "checkbox"; input.name = value; input.value = value;
            label.appendChild(input);
            details.appendChild(label);
        }

        parentElement.appendChild(fieldset);
    }
}