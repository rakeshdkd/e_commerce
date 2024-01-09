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

  async function movieSubmitHandler() {
    const newMovieData = { ...inputMovie, id: Math.random().toString() };
    setMovieArr([...movieArr, newMovieData]);
  
    const requestData = {
      title: inputMovie.title,
      ot: inputMovie.ot,
      rel_date: inputMovie.rel_date,
      id: newMovieData.id,
    };
  
    const response = await fetch(
      "https://e-commerce-4abd3-default-rtdb.firebaseio.com/movies.json",
      {
        method: "POST",
        body: JSON.stringify(requestData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  
    const data = await response.json();
    console.log(data);
    console.log(requestData);
  }
  
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
        {/* <h1>
          {movieArr.map((movie) => {
            return (
              <div key={movie.id} className={classes.input_movie_container}>
                <h2>{movie.title}</h2>
                <h2>{movie.rel_date}</h2>
                <p className={classes.para}>{movie.ot}</p>
              </div>
            );
          })}
        </h1> */}
      </div>
    </div>
  );
};

export default MovieInputForm;
