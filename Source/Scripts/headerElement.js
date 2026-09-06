const headerElement = document.getElementById("header");

if (!headerElement) {
    throw new Error("Header element not found.");
}

const navElement = document.createElement("nav");
navElement.id = "main-nav";

/** id, text, page */
const pages = [
    ["nav-home", "Home", "homepage.html"],
    ["nav-projects", "Projects", "project-list.html"]
];

for (const [id, text, page] of pages) {
    const link = document.createElement("a");
    link.id = id;
    link.href = page;
    link.textContent = text;

    if (page == window.location.pathname.substring(1))
        link.classList.add("selected");

    navElement.appendChild(link); 
}

headerElement.appendChild(navElement);