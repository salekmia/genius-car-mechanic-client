import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
<>
  <Navbar bg="dark" variant="dark" sticky="top">
    <Container>
    <Navbar.Brand href="#home">GCM</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
        <Nav.Link className="text-white" href="#home">Home</Nav.Link>
        <Nav.Link className="text-white" href="#services">Services</Nav.Link>
        <Nav.Link className="text-white" href="#experts">Experts</Nav.Link>
        <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
    </Navbar.Collapse>
    <Nav className="me-auto">
      
    </Nav>
    </Container>
  </Navbar>
</>
    );
};

export default Header;