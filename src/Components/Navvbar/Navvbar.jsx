import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaUser } from "react-icons/fa";
import "./Navbarr.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";

const Navvbar = () => {
  return (
    <>
      <Navbar
        fixed="top"
        collapseOnSelect
        expand="lg"
        className="custom-navbar"
      >
        <Container>
          <div className="logo-container">
            <img src={logo} alt="Logo" className="logo-image" />
          </div>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/"
                className="fs-5 me-4 custom-nav-link text-white"
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className="fs-5 me-4 custom-nav-link text-white"
              >
                About
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/products"
                className="fs-5 me-4 custom-nav-link text-white"
              >
                Products
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                as={Link}
                to="/contact"
                className="fs-5 me-4 custom-nav-link text-white"
              >
                Contact
              </Nav.Link>
              <Nav.Link
                href="https://vashnoi-handloom-cms.vercel.app/"
                className="fs-3 ms-2 text-white"
              >
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
