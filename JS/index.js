let today = new Date();

let thisYear = today.getFullYear();

let footer = document.createElement("footer");
let copyright = document.createElement("p");

copyright.innerHTML = `&copy; ${thisYear} Lay Lay Zan`;

footer.appendChild(copyright);
document.body.appendChild(footer);

let skills = ["HTML", "CSS", "JavaScript", "UX Design", "Graphic Design"];
let skillsList = document.querySelector("#skills ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
}

let projects = ["LSAT Study Guide", "Earthday Login", "Meal Planner App"];
let projectsList = document.querySelector("#projects ul");




