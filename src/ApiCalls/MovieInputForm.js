import React from "react";
import classes from "./MovieInputForm.module.css";
import { useState } from "react";
const MovieInputForm = () => {
  const [movieArr, setMovieArr] = useState([]);
  const [inputMovie, setInputMovie] = useState({
    title: "",
    ot: "",
    rel_date: "",
  });
  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);
    setInputMovie((prevData) => {
      return { ...prevData, [name]: value };
    });
    // console.log(inputMovie);
  };

  const movieSubmitHandler = () => {
    const newMovieData = { ...inputMovie, id: Math.random().toString() };
    setMovieArr([...movieArr, newMovieData]);
    console.log(movieArr);
    setInputMovie({
      title: "",
      ot: "",
      rel_date: "",
    });
  };
  return (
    <div className={classes.main}>
      <div>
        <label>Title :</label>
        <input
          type="text"
          value={inputMovie.title}
          name="title"
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <label>Opening Text :</label>
        <textarea
          type="text"
          className={classes.opening_txt}
          value={inputMovie.ot}
          name="ot"
          onChange={onChangeHandler}
        ></textarea>
      </div>
      <div>
        <label>Release Date :</label>
        <input
          type="text"
          value={inputMovie.rel_date}
          name="rel_date"
          onChange={onChangeHandler}
        ></input>
      </div>
      <div>
        <button className={classes.btn} onClick={movieSubmitHandler}>
          Add movies{" "}
        </button>
        <h1>
          {movieArr.map((movie) => {
            return (
              <div key={movie.id} className={classes.input_movie_container}>
                <h2>{movie.title}</h2>
                <h2>{movie.rel_date}</h2>
                <p className={classes.para}>{movie.ot}</p>
              </div>
            );
          })}
        </h1>
      </div>
    </div>
  );
};

export default MovieInputForm;
