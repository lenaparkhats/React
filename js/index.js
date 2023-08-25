const numberOfFilms = +prompt("Сколько фильмов вы посмотрели?", "");
const personalMovieDB ={count: numberOfFilms, movies: {}, actors: {}, genres: [], privat: false};
let a = prompt("Один из последних фильмов?", ""), b = prompt("Насколько оцените его?", ""),
c = prompt("Один из последних фильмов?", ""),
d = prompt("Насколько оцените его?", "");
    
personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);
