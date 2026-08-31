const headerElement = document.getElementById("header");

if (headerElement != null) {
    const navElement = document.createElement("nav");
    const homeButton = document.createElement("button");
    const projectsButton = document.createElement("button");

    navElement.id = "main-nav";
    homeButton.id = "nav-home";
    projectsButton.id = "nav-projects";

    homeButton.innerHTML = "Home";
    projectsButton.innerHTML = "Projects";

    linkButtonToPage(homeButton, "homepage.html");
    linkButtonToPage(projectsButton, "project-list.html");

    headerElement.appendChild(navElement);
    navElement.appendChild(homeButton);
    navElement.appendChild(projectsButton); 
}

/**
 * 
 * @param {HTMLButtonElement} button 
 * @param {string} page 
 */
function linkButtonToPage(button, page) {
    button.addEventListener("click", function() {
        open(page, "_self");
    });
}