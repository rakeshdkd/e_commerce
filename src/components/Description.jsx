import React from "react";
import { Container, Navbar } from "react-bootstrap";

const Description = () => {
  return (
    <>
      <Navbar bg="dark" expand='sm' variant="dark" style={{height:'200px'}}>
        <Container>
          <Navbar.Brand style={{marginLeft:'20vw' , fontWeight:'bolder', fontSize:'86px'}}>The Gnererics</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Description;
