let projectListElement = document.querySelector("#project-list");

for (let p of projects) {
    let projectButton = new ProjectButton(p);
    projectListElement.appendChild(projectButton.button);
}