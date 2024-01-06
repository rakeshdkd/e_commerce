import React from "react";
import Header from "../Header";
import classes from "./HomePage.module.css";
import Footer from "../Footer";
const HomePage = () => {
  const dummyArr = [
    {
      date: "JULY 16",
      destination: "DETROIT, MI",
      description: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JULY 19",
      destination: "TORONTO,ON",
      description: "BUDWEISER STAGE",
    },
    {
      date: "JULY 22",
      destination: "BRISTOW, VA",
      description: "JIGGY LUBE LIVE",
    },
    {
      date: "JULY 29",
      destination: "PHOENIX, AZ",
      description: "AK-CHIN PAVILION",
    },
    {
      date: "AUG 2",
      destination: "LAS VEGAS, NV",
      description: "T-MOBILE ARENA",
    },
    {
      date: "AUG 7",
      destination: "CONCORD, CA",
      description: "CONCORD PAVILION",
    },
  ];
  return (
    <>
      <Header />
      <div className={classes.card}>
        <div className={classes.title}>
          <p>The Generics</p>
        </div>

        <div className={classes.btn}>
          <button>Get our Latest Album</button>
        </div>

        <div id={classes.icon}>
          <i class="fa fa-play"></i>
        </div>
      </div>
      <div className={classes.main_content}>
        <h1>TOURS</h1>
        {dummyArr.map((elem) => {
          return (
            <>
                <div className={classes.sub_content}>
                  <div>
                    <p>{elem.date}</p>
                  </div>
                  <div>
                    <p>{elem.destination}</p>
                  </div>
                  <div>
                    <p>{elem.description}</p>
                  </div>
                  <div>
                    <button>BUY TICKETS</button>
                  </div>
                </div>
                <hr />
            </>
          );
        })}
      </div>
      < Footer />
    </>
  );
};

export default HomePage;
