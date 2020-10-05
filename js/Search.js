//
//
//

function search() {
  const searchterm = document.getElementById("inputSearch").value;
  console.log("Zoek naar " + searchterm);

  const aantal_movies = document.getElementById("frontpage-movies").childElementCount;
  console.log(aantal_movies + " movies gevonden");

  const themovies = document.getElementById("frontpage-movies");

  console.log("Movie titles:");
  const titles = themovies.querySelectorAll(".card-title");
  Array.from(titles).forEach(function (title) {
    console.log(title.textContent);
  });

  console.log("Movie:");
  Array.from(themovies.children).forEach(function (movie) {
    const found = movie.innerHTML.includes(searchterm);
    if (found) {
      console.log("yes, gevonden");
      themovies.innerHTML = '<div class="col-md-4">' + movie.innerHTML + "</div>";
    }
  });

  // Maak het veld leeg
  document.getElementById("inputSearch").value = "";
}
