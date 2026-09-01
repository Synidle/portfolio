/**
 * 
 * @param {HTMLElement} parentElement 
 * @param {Object[]} parameters 
 */
function createFilterElement(parentElement, parameters) {
    for (const parameter of parameters) {
        const div = document.createElement("div");
        const label = document.createElement("label");
        const select = document.createElement("select");
        const option = document.createElement("option");

        const ps = parameter.toString(); 

        label.htmlFor = ps; label.textContent = ps;
        select.id = ps; select.name = ps; select.multiple = true; 
        option.value = ""; option.innerText = `Any ${ps}`;

        select.appendChild(option); 
        
        for (const [key, value] of Object.entries(parameter)) {
            const option = document.createElement("option");
            option.value = value; 
            option.innerText = value;
            select.appendChild(option);
        }

        div.appendChild(label);
        div.appendChild(select); 
        parentElement.appendChild(div);
    }
}