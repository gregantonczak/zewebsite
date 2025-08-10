document.addEventListener("DOMContentLoaded", function () {
    const projectList = document.getElementById("project-list");

    // Define your projects
    const projects = [
        {
            title: "Project 1",
            description: "Description of project 1.",
            link: "https://www.instagram.com/grzeggophoto/",
        },
        {
            title: "Project 2",
            description: "Description of project 2.",
            link: "https://github.com/example/project2",
        },
        // Add more projects as needed
    ];

    // Render projects
    projects.forEach((project) => {
        const projectCard = document.createElement("div");
        projectCard.className = "bg-white p-4 rounded shadow-md";
        projectCard.innerHTML = `<h3 class="text-xl font-bold mb-2">${project.title}</h3>
                                <p class="text-gray-700 mb-4">${project.description}</p>
                                <p><a href="${project.link}" class="text-blue-500" target="_blank">View on GitHub</a></p>`;
        projectList.appendChild(projectCard);
    });
});
