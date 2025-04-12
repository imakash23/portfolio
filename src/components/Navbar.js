import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="light" className="shadow-sm py-3 mb-5"   style={{
        background: "linear-gradient(135deg, #ff6a00, #ee0979)",
      }} >
      <Container >
        <Navbar.Brand href="#" className="fw-bold fs-4 text-black">
          Akash's Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#header" className="text-black fw-semibold mx-3">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-black fw-semibold mx-3">
              About
            </Nav.Link>
            <Nav.Link href="#projects" className="text-black fw-semibold mx-3">
              Projects
            </Nav.Link>
           
            <Nav.Link href="#work-education" className="text-black fw-semibold mx-3">
            Work Education
            </Nav.Link>
            <Nav.Link href="#contact" className="text-black fw-semibold mx-3">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
