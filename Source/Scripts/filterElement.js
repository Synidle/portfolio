/**
 * 
 * @param {HTMLElement} parentElement 
 * @param {Object[]} parameters 
 */
function createFilterElement(parentElement, parameters) {
    for (const parameter of parameters) {
        const fieldset = document.createElement("fieldset");
        const legend = document.createElement("legend");
        const label = document.createElement("label");
        const input = document.createElement("input");

        const ps = parameter.toString(); 

        legend.innerHTML = ps; 
        label.innerHTML = `Any ${ps}`;
        input.type = "checkbox"; input.name = ps; input.value = "";
        
        label.appendChild(input); 
        fieldset.appendChild(label); 

        for (const [key, value] of Object.entries(parameter)) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            label.innerHTML = value;
            input.type = "checkbox"; input.name = value; input.value = value;
            label.appendChild(input);
            fieldset.appendChild(label);
        }

        parentElement.appendChild(fieldset);
    }
}