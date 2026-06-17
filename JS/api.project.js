let today = new Date();

let thisYear = today.getFullYear();

let footer = document.createElement("footer");
let copyright = document.createElement("p");

copyright.innerHTML = `&copy; ${thisYear} Lay Lay Zan`;

footer.appendChild(copyright);
document.body.appendChild(footer);


// Fetch and display art from the Art Institute of Chicago API

const searchInput = document.getElementById("search-input");
const artistBtn = document.getElementById("artist-button");
const colorBtn = document.getElementById("color-button");
const results = document.getElementById("results");

// GET 1: Search for artworks by artist
artistBtn.addEventListener("click", async () => {
  const artist = searchInput.value.trim();

  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks/search?q=${artist}`
  );

  const data = await response.json();

  displayArtworks(data.data);
});

// GET 2: Search for artworks by color

colorBtn.addEventListener("click", async () => {
  const color = searchInput.value.trim().toLowerCase();

  const response = await fetch(
    `https://api.artic.edu/api/v1/artworks?limit=100&color=${color}`
  );

  const data = await response.json();

  const matches = data.data.filter((artwork) =>
    artwork.title?.toLowerCase().includes(color)
  );

  displayArtworks(matches);
});

// Output: Results 

function displayArtworks(artworks) {
  results.innerHTML = "";

  artworks.forEach((artwork) => {
    const card = document.createElement("div");

    card.innerHTML = `
      <h3>${artwork.title}</h3>
      <p>ID: ${artwork.id}</p>
    `;

    results.appendChild(card);
  });
}