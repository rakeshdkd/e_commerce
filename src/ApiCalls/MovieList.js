import React from "react";
import classes from "./MovieList.module.css";
const MovieList = (props) => {
//   const dummyData = [
//     {
//       id: "1",
//       relesedate: "21-02-2013",
//       title: "opening text 1",
//       openningText: "hjdjhgasdgasjhdg jsbdjhasbd jhabdhja",
//     },
//     {
//       id: "1",
//       relesedate: "21-02-2013",
//       title: "opening text 2",
//       openningText: "hjdjhgasdgasjhdg jsbdjhasbd jhabdhja",
//     },
//   ];
  return (
    <div className={classes.main}>
      <ul>
        {props.movies.map((movie) => {
          return (
            <div className={classes.movieItem} key={movie.id}>
              <li>{movie.title}</li>
              <p>{movie.releaseDate}</p>
              <hr />
              <li>{movie.openingText}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MovieList;
