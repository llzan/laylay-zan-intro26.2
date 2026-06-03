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

for (let i = 0; i < projects.length; i++) {
  let project = document.createElement("li");
  project.textContent = projects[i];
  projectsList.appendChild(project);
}

messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let name = event.target.usersName["name"].value;
  let email = event.target.usersEmail["email"].value;
  let message = event.target.usersMessage["message"].value;
  console.log(name, email, message);

  let messageSectiuon = document.querySelector("#messages ul");
  let messageList = document.querySelector("#messages li");
  let newMessage = document.createElement("li");
  newMessage.innerHTML = `<a href="mailto:${email}">${usersName}</a> <span>(${usersEmail})</span> says: <span>${usersMessage}</span>`;
  messageSectiuon.appendChild(newMessage);

  let removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  newMessage.appendChild(removeButton);

  removeButton.addEventListener("click", function () {
    messageSectiuon.removeChild(newMessage);

    let entry = entry.parentNode;
    entry.parentNode.removeChild(entry);
  });

  document.querySelector("#messages ul").removeChild(newMessage);
  document.querySelector("#messages li").removeChild(messageList);

  messageForm.reset();
});

const api_url = "https://api.github.com/users/laylayzan/repos";

const projectSection = document.querySelector("#projects ul");
console.log(projectSection);

const projectList = projectSection.querySelectorAll("li");
console.log(projectList);

fetch(api_url)
  .then((response) => response.json())
  .then((data) => {
    let projectSection = document.querySelector("#projects ul");
    data.forEach((repo) => {
      let project = document.createElement("li");
      let link = document.createElement("a");
      link.textContent = repo.name;
      project.appendChild(link);
      projectSection.appendChild(project);
    });
  })
  .catch((error) => console.error(error));
