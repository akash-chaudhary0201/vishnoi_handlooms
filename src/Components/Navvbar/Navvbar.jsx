import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import "./Navbarr.css";

const Navvbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="  rounded-full akashh "
      >
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <span className="fs-1">VH</span>{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto ">
              <Nav.Link
                href="#home"
                className="fs-5  me-4 custom-nav-link relative"
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#about"
                className="fs-5 me-4 custom-nav-link relative"
              >
                About
              </Nav.Link>
              <Nav.Link
                href="#products"
                className="fs-5 me-4 custom-nav-link relative"
              >
                Products
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#contact" className="fs-5">
                Contact
              </Nav.Link>
              <Nav.Link href="#user" className="fs-3 ms-2">
                <FaUser />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navvbar;
