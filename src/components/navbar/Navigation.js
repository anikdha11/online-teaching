import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <>
        <Navbar bg="dark" variant="dark">
          <Container className="d-flex flex-row justify-content-start flex-wrap gap-2">
            <NavLink to="/home">
              {" "}
              <Button variant="outline-danger">Home</Button>
            </NavLink>
            <Nav className="d-flex flex-row flex-wrap gap-2">
              <NavLink to="/courses">
                {" "}
                <Button variant="outline-info">Courses</Button>
              </NavLink>
              <NavLink to="/features">
                {" "}
                <Button variant="outline-light">Features</Button>
              </NavLink>
              <NavLink to="/About">
                {" "}
                <Button variant="outline-success">About</Button>
              </NavLink>
              <NavLink to="/singup">
                {" "}
                <Button variant="outline-secondary">Log in</Button>
              </NavLink>
            </Nav>
          </Container>
        </Navbar>
      </>
    </div>
  );
};

export default Navigation;
