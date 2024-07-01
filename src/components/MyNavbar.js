// src/components/MyNavbar.js
import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "../App.css"; // Import custom CSS

const MyNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <>
        <Navbar.Brand as={Link} to="/" className="ps-3" >
          Business Platform
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="m-r-3"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </>
    </Navbar>
  );
};

export default MyNavbar;
