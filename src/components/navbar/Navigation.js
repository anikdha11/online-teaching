import React from 'react';
import { Container, Nav, Navbar,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const activeStyle ={
         fontWeight: "bold",
         color: "red",
    }
 
    return (
        <div>
            <>
  <Navbar bg="dark" variant="dark">
    <Container className="ms-5 p-2">
    <NavLink activeStyle={activeStyle} to="/home"> <Button variant="outline-danger">Home</Button></NavLink>
    <Nav  className="me-auto">
      <NavLink className="ms-5 me-2" activeStyle={activeStyle} to="/courses"> <Button variant="outline-info">Courses</Button></NavLink>
      <NavLink  activeStyle={activeStyle} to="/About"> <Button variant="outline-success">About</Button></NavLink>
      <NavLink className="ms-2" activeStyle={activeStyle} to="/features"> <Button variant="outline-light">Features</Button></NavLink>
      <NavLink className="ms-2" activeStyle={activeStyle} to="/singup"> <Button variant="outline-secondary">Sing Up</Button></NavLink>
     
    </Nav>
    </Container>
  </Navbar>
 

</>
        </div>
    );
};

export default Navigation;