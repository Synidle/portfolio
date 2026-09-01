/**
 * 
 * @param {HTMLElement} parentElement 
 * @param {Object[]} parameters 
 */
function createFilterElement(parentElement, parameters) {
    const outerDetails = document.createElement("details");
    const outerSummary = document.createElement("summary");
    
    outerSummary.innerHTML = "Filter";
    
    outerDetails.appendChild(outerSummary);
    parentElement.appendChild(outerDetails);

    for (const parameter of parameters) {
        const details = document.createElement("details");
        const summary = document.createElement("summary");
        const label = document.createElement("label");
        const input = document.createElement("input");

        const ps = parameter.toString(); 

        summary.innerHTML = ps; 
        label.innerHTML = `Any ${ps}`;
        input.type = "checkbox"; input.name = ps; input.value = "";
        
        label.appendChild(input); 
        details.appendChild(summary); 
        details.appendChild(label); 

        for (const [key, value] of Object.entries(parameter)) {
            const label = document.createElement("label");
            const input = document.createElement("input");
            label.innerHTML = value;
            input.type = "checkbox"; input.name = value; input.value = value;
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

        if (!checked) {input.checked = true; checked = true;}
    }

    outerDetails.appendChild(details); 
}