import React from "react";
import MovieList from "./MovieList";
import classes from "./MovieList.module.css";
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
import MovieInputForm from "./MovieInputForm";

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://e-commerce-4abd3-default-rtdb.firebaseio.com/movies.json");
      if (!response.ok) {
        console.log(response.status);
        throw new Error("Something went wrong....Retrying");
      }
      const data = await response.json();
const loadedMovieArr =[];

for (const key in data){
    loadedMovieArr.push({
        id:key,
        title:data[key].title,
        openingText:data[key].ot,
        releaseDate:data[key].rel_date

    })
}
    //   const transformedMovies = data.result.map((movieData) => {
    //     return {
    //       id: movieData.episode_id,
    //       title: movieData.title,
    //       openingText: movieData.opening_crawl,
    //       releaseDate: movieData.release_date,
    //     };
    //   });
      console.log("fetched");
      setMovies(loadedMovieArr);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

//   const cancelHandler = () => {
//     setIsLoading(true);
//     setInterval(() => {
//       setIsLoading(false);
//     }, 5000);
//   };
const deleteMovieHandler = async (movieId) => {
    // Assuming movieId is the unique identifier for the movie
    const deleteUrl = `https://e-commerce-4abd3-default-rtdb.firebaseio.com/movies/${movieId}.json`;

    try {
      const response = await fetch(deleteUrl, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        // Update your local state to remove the deleted movie
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== movieId));
        console.log(`Movie with ID ${movieId} deleted successfully.`);
      } else {
        console.error(`Failed to delete movie with ID ${movieId}.`);
      }
    } catch (error) {
      console.error("Error deleting movie:", error);
    }
  };
  let content = <p className={classes.movieItem}> Found no movies.</p>;
  if (movies.length > 0) {
    content = <MovieList movies={movies} deleteMovieHandler={deleteMovieHandler} />;
  }
  if (error) {
    content = (
      <p className={classes.movieItem}>
        {error} 
      </p>
    );
  }
  if (isLoading) {
    content = <p className={classes.movieItem}>Loading....</p>;
  }

  return (
    <div className={classes.container}>
    <MovieInputForm />
      <button className={classes.btn} onClick={fetchMoviesHandler}>
        Fetch Movies
      </button>
      <div>
        {/* {!isLoading && <MovieList movies={movies} />}
        {!isLoading && error && <p className={classes.movieItem}>{error}</p>}
        {isLoading && <p className={classes.movieItem}>Loading......</p>} */}
        {content}
      </div>
    </div>
  );
};

export default Movie;
