import React from "react";
import classes from "./ContactUs.module.css";
import Header from "../Header";
import { useState } from "react";
const ContactUs = () => {
  const [userData, setUserData] = useState({
    username: "",
    emailId: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(name, value);
    setUserData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const contactFormSubmitHandler = async () => {
    const newUserData = {
      name: userData.username,
      emailId: userData.emailId,
      phone: userData.phone,
    };
    console.log("hin", newUserData);
    const response = await fetch(
      "https://e-commerce-4abd3-default-rtdb.firebaseio.com/userdata.json",
      {
        method: "POST",
        body: JSON.stringify(newUserData),
        headers: {
          "Content-Type": "userdata/json",
        },
      }
    );

    const data = await response.json();
    console.log(data);
  };
  return (
    <>
      <Header />
      <div className={classes.container}>
        <h2>
          Contact us by filling this form. One our executive will contact you
          soon....!
        </h2>
        <div className={classes.contact_form}>
          <label>Name :</label>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={onChangeHandler}
          ></input>
          <label>Email Id :</label>
          <input
            type="text"
            name="emailId"
            value={userData.emailId}
            onChange={onChangeHandler}
          ></input>
          <label>Phone Number :</label>
          <input
            type="text"
            name="phone"
            value={userData.phone}
            onChange={onChangeHandler}
          ></input>
          <div className={classes.submit_btn}>
            <button onClick={contactFormSubmitHandler}>Submit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
