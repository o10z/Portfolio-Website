// document.addEventListener("DOMContentLoaded", function () {
//     const skillButtons = document.querySelectorAll(".skill-box");
//     const projects = document.querySelectorAll(".project:not(.coming-soon)");
//     const comingSoon = document.querySelector(".coming-soon");

//     // Show the first 3 projects by default
//     projects.forEach((project, index) => {
//         project.style.display = index < 3 ? "block" : "none";
//     });

//     skillButtons.forEach((button) => {
//         button.addEventListener("click", function () {
//             const skill = this.getAttribute("data-skill");
//             let matchedProjects = 0;

//             projects.forEach((project) => {
//                 const projectSkills = project.getAttribute("data-skills").split(" ");
//                 if (projectSkills.includes(skill)) {
//                     project.style.display = "block";
//                     matchedProjects++;
//                 } else {
//                     project.style.display = "none";
//                 }
//             });

//             // If no matching projects, show "Coming Soon"
//             if (matchedProjects === 0) {
//                 comingSoon.style.display = "block";
//             } else {
//                 comingSoon.style.display = "none";
//             }
//         });
//     });
// });


/*========== Typing animation in home page ==========*/
var typed = new Typed(".text", {
    strings: ["Python" , "Front-End", "Back-End"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


document.addEventListener("DOMContentLoaded", () => {
    const skillButtons = document.querySelectorAll(".skill-box");
    const projects = document.querySelectorAll(".project");
    const comingSoon = document.querySelector(".coming-soon"); // Ensure this exists in HTML

    let activeSkills = new Set(); // Store selected skills

    function filterProjects() {
        let matchedProjects = 0;

        projects.forEach(project => {
            const projectSkills = project.dataset.skills.split(" ");
            
            // Check if the project matches at least one selected skill
            if (activeSkills.size === 0 || [...activeSkills].some(skill => projectSkills.includes(skill))) {
                project.style.display = "block";
                matchedProjects++;
            } else {
                project.style.display = "none";
            }
        });

        // If no matching projects, show "Coming Soon"
        comingSoon.style.display = matchedProjects === 0 ? "block" : "none";
    }

    skillButtons.forEach(button => {
        button.addEventListener("click", () => {
            const skill = button.dataset.skill;

            // Toggle active skill selection
            if (activeSkills.has(skill)) {
                activeSkills.delete(skill);
                button.classList.remove("active"); // Remove active styling
            } else {
                activeSkills.add(skill);
                button.classList.add("active"); // Apply active styling
            }

            filterProjects();
        });
    });

    // Show default 3 projects when no skill is selected
    filterProjects();
});
