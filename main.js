function encontrar() {
  randomNumber = parseInt(Math.random() * 20);
  movieDesc.innerHTML = listaFilmes.results[randomNumber].overview;
  movieImg.src =
    "https://image.tmdb.org/t/p/w600_and_h900_bestv2" +
    listaFilmes.results[randomNumber].poster_path;
  movieTitle.innerHTML = listaFilmes.results[randomNumber].title;
  if (listaFilmes.results[randomNumber].title == undefined)
    movieTitle.innerHTML = listaFilmes.results[randomNumber].name;
}
encontrar();
