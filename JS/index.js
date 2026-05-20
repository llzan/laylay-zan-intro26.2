let today = new Date();

let thisYear = today.getFullYear();

let footer = document.querySelector("footer");

let copyright = document.createElement("p");

copyright.innerHTML = `&copy; ${thisYear} Lay Lay Zan`;

footer.appendChild(copyright);

let skills = ["HTML", "CSS", "JavaScript", "UX Design", "Graphic Design"];
let skillsList = document.querySelector("#Skills ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

let projects = ["LSAT Study Guide", "Earthday Login", "Meal Planner App"];
let projectsList = document.querySelector("#Projects ul");

for (let i = 0; i < projects.length; i++) {
  let project = document.createElement("li");
  project.textContent = projects[i];
  projectsList.appendChild(project);
}
