import React from "react";
import { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./TestNavbar.css";
import { Link } from "react-router-dom";
const TestNavbar = () => {
    const [menu, setMenu] = useState("home");
  return (
    <Navbar className="navbar">
      <Container>
        <Navbar.Brand href="#">E-Learning</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="/" onClick={()=>setMenu("home")} className={menu==="home"?"active":""}>Home</Nav.Link>
            {/* <a href="#courses" onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Home</a> */}
            <Nav.Link href="/courses">Courses</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
          </Nav>
          <Link to="/login">
                  <button className="button-login">Login</button>
                  </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TestNavbar;
