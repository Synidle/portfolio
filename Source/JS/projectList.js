let projectListElement = document.querySelector("#project-list");

for (let p of projects) {
    let projectButton = document.createElement("button");
    projectButton.classList.add("project-button");
    projectButton.innerHTML = `
        <img src="Source/ProjectData/${p.images[0].source}" alt="${p.images[0].alt}"> <br>
        <label class="project-name">${p.name}</label>
    `;
    projectListElement.appendChild(projectButton);
}