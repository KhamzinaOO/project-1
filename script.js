"use strict";
const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};
const lastMovie = prompt("one of the latest movies you watced",''),
      rate = +prompt("how do you rate it?",'');
personalMovieDB.movies[lastMovie]=rate;
console.log(personalMovieDB);
