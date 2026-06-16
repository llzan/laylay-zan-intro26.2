console.log("Script Loaded");

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

// Fetch API - Displaying GitHub Repositories


// Create Fetch

fetch("https://api.github.com/users/llzan/repos")

// Get the response data - JSON Data

  .then((response) => {
    if (!response.ok) {
      throw new Error("Request failed: ${response.status}");
    }
    return response.json();
  })
// display the repositories

  .then((repositories) => {
    const projectList = document.getElementById("repo-list");

    for (const repo of repositories) {
      const project = document.createElement("li");
      project.className = "repo-item";

      const repositoryName = document.createElement("a");
      repositoryName.className = "repo-name";
      repositoryName.textContent = repo.name;
      repositoryName.href = repo.html_url;
      repositoryName.target = "_blank";
      repositoryName.rel = "noopener noreferrer";

      const repositoryDescription = document.createElement("p");
      repositoryDescription.className = "repo-description";
      repositoryDescription.textContent =
        repo.description ||
        `${repo.name} development repository`;

      project.appendChild(repositoryName);
      project.appendChild(repositoryDescription);
      projectList.appendChild(project);
    }
  })
  // handling errors

  .catch((error) => {
    console.error("Error:", error);
  });


