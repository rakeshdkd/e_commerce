import React from "react";
import MovieList from "./MovieList";
import classes from "./MovieList.module.css";
import { useState } from "react";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const fetchMoviesHandler = async () => {
    const response = await fetch("https://swapi.dev/api/films");
    const data = await response.json();

    const transformedMovies = data.results.map((movieData) => {
      return {
        id: movieData.episode_id,
        title: movieData.title,
        openingText: movieData.opening_crawl,
        releaseDate: movieData.release_date,
      };
    });
    return setMovies(transformedMovies);
  };
  return (
    <div className={classes.container}>
      <button className={classes.btn} onClick={fetchMoviesHandler}>
        Fetch Movies
      </button>
      <div>
        <MovieList movies={movies} />
      </div>
    </div>
  );
};

export default Movie;