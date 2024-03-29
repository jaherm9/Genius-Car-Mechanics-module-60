import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
  const {user, logOut} = useAuth() 
    return (
        <>
  <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Genius Car Mechanics</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">
      <Nav.Link as={Link} to="/home#home">Home</Nav.Link>
      <Nav.Link as={Link} to="/home#services">Services</Nav.Link>
      <Nav.Link as={Link} to="/home#experts">Experts</Nav.Link>
      {
        user?.email ?
        <Button bariant="light">Logout</Button>:
        <Nav.Link as={Link} to="/login">Login</Nav.Link>
      }
      <Navbar.Text>
        Signed in as: <a href="#login">{user?.displayName}</a>
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