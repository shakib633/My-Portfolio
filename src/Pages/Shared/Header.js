import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const Header = () => {
  
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        sticky="top"
        variant="light"
      >
        <Container>
          <Navbar.Brand as={Link} to="/">
     <p className=""> <img className="image-head mt-" src="https://i.ibb.co/xm2pVHQ/aaa-removebg-preview.png" alt="aaa-removebg-preview" border="0"></img></p>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto mx-5">
              <Nav.Link className="text-black fw-bold" as={Link} to="/home">
                Home
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="text-black fw-bold" as={Link} to="/Blogs">
                Blogs
              </Nav.Link>
              </Nav>
     </Navbar.Collapse>
        </Container>
        
      </Navbar>
    </>
  );
};

export default Header;