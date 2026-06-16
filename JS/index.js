// DOM API - Manipulating the Document Object Model - Insert Copyright Footer
let today = new Date();

let thisYear = today.getFullYear();

let footer = document.createElement("footer");
let copyright = document.createElement("p");

copyright.innerHTML = `&copy; ${thisYear} Lay Lay Zan`;

footer.appendChild(copyright);
document.body.appendChild(footer);

// DOM API - Insert Skills List

let skills = ["HTML", "CSS", "JavaScript", "UX Design", "Graphic Design"];
let skillsList = document.querySelector("#skills ul");

for (let i = 0; i < skills.length; i++) {
  let skill = document.createElement("li");
  skill.textContent = skills[i];
  skillsList.appendChild(skill);
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

// Fetch API - Displaying GitHub Repositories

fetch("https://api.github.com/users/laylayzan/repos")

.then((response) => {
  if (!response.ok) {
    throw new Error("Request Failed");
  }
  return response.json();
})
.then((data) => {
  console.log("json data", data);
  const repositories = data;
  console.log("repositories array =", repositories);

  const projectSection = document.querySelector("#projects");
  const projectList = projectSection.querySelector("ul");

  for (let i = 0; i < repositories.length; i++) {
    const project = document.createElement("li");
    project.className = "repo-list";
    
    const repositoryRow = document.createElement("div");
    repositoryRow.className = "repo-row";

    const repositoryName = document.createElement("span");
    repositoryName.className = "repo-name";
    repositoryName.innerText = `${repositories[i].name}`;
    console.log("repositoryName");

    const repositoryDescription = document.createElement("span");
    repositoryDescription.className = "repo-description";

    repositoryDescription.innerText = repositories[i].description
    ? repositories[i].description
    : `${repositories[i].name} development git repository`;
    console.log("repositoryDescription");

    repositoryRow.appendChild(repositoryName);
    repositoryRow.appendChild(repositoryDescription);
    project.appendChild(repositoryRow);
    projectList.appendChild(project);

  }
})
.catch((error) => {
  console.error("Error fetching repositories:", error); 
});

