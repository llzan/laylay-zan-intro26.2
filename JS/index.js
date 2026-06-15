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

// Handle Message Form Submission

const messageForm = document.forms["leave_message"];
messageForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = event.target.usersName.value;
  const email = event.target.usersEmail.value;  
  const message = event.target.usersMessage.value;
  console.log(name, email, message);



// Display Messages in List

  const messageSection = document.querySelector("#messages");

  const messageList = messageSection.querySelector("ul");

  const newMessage = document.createElement("li");

  newMessage.innerHTML = `<a href="mailto:${email}">${name}</a> <span>(${email})</span> says: <span>${message}</span>`;
 
  messageList.appendChild(newMessage);

 const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.type = "button";
  newMessage.appendChild(removeButton);

  removeButton.addEventListener("click", function () {


    const entry = removeButton.parentNode;
    entry.remove();
    });

  messageForm.reset();

});
