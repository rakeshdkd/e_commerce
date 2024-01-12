import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../Store/CartContext";
import { NavLink } from "react-router-dom";
import classes from "./header.module.css";

let Header = (props) => {
  const cartCTX = useContext(CartContext);
  const cartItemsNumber = cartCTX.items.length;
  return (
    <>
      <Navbar sticky="top" className={classes.navbar}>
        <Container>
          <Navbar.Brand>
            <NavLink
              to="/"
              id={classes.navlink}
              className={({ isActive }) => (isActive ? classes.active : "b")}
              end
            >
              Home
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto" id={classes.nav}>
            <NavLink
              to="/Store"
              id={classes.navlink}
              className={({ isActive }) => (isActive ? classes.active : "b")}
            
            >
              Store
            </NavLink>
            <NavLink
              to="/About"
              id={classes.navlink}
              className={({ isActive }) => (isActive ? classes.active : "b")}
            >
              About
            </NavLink>

            <NavLink
              to="/ContactUs"
              id={classes.navlink}
              className={({ isActive }) => (isActive ? classes.active : "b")}
            >
              Contact Us
            </NavLink>

            {/* <Button className="ml-100px bg-secondary "> */}
            <i
              className="fa fa-shopping-cart "
              aria-hidden="true"
              id={classes.cart}
              onClick={props.onClick}
            >
              <p className={classes.para}>{cartItemsNumber}</p>
            </i>
            {/* </Button> */}
          </Nav>
          {/* </Navbar.Collapse> */}
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
