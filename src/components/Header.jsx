import React from "react";
import { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import CartContext from "../Store/CartContext";

let Header = (props) => {
  const cartCTX = useContext(CartContext);
  const cartItemsNumber = cartCTX.items.length;
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#home">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* <Navbar.Collapse id="basic-navbar-nav"> */}
          <Nav className="me-auto" style={{ display: "flex" }}>
            <Nav.Link href="#home">About</Nav.Link>
            <Nav.Link href="#link">Store</Nav.Link>
            {/* <Button className="ml-100px bg-secondary "> */}
            <i
              className="fa fa-shopping-cart"
              aria-hidden="true"
              style={{ fontSize: "20px", position: "absolute", right: "2%" , border:'1px solid red', backgroundColor:'lightgreen', color:'white', borderRadius:'25px', padding:'10px 20px'}}
              onClick={props.onClick}
            >
              <p style={{position:'absolute', top:"2px", right:"4px", borderRadius:'50%',color:'white',backgroundColor:'red', padding:'2px 2px',fontSize: "15px" }}>{cartItemsNumber}</p>
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
