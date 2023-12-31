import React from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

let Header = () => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto" style={{ display: "flex" }}>
              <Nav.Link href="#home">About</Nav.Link>
              <Nav.Link href="#link">Store</Nav.Link>
              {/* <Button className="ml-100px bg-secondary "> */}
              <i
                class="fa fa-shopping-cart"
                aria-hidden="true"
                style={{ fontSize: "20px", float: "inline-end" }}
              ></i>
              {/* </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
