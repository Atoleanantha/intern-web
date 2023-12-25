import React from 'react'
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from './logo1.jpg';

const navbar = () => {
  return (
    <Navbar expand="lg" className="nav">
    <Container>
      <Navbar.Brand href="#home"><img style={{height:'60px'}} src={Logo} alt='Logo'></img></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto ">
          <Nav.Link className='nav-item' href="#home">Home</Nav.Link>
          <NavDropdown className='nav-item' title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item className='nav-item'  href="#action/3.1">Web Developement</NavDropdown.Item>
            <NavDropdown.Item className='nav-item' href="#action/3.2">
              Mobile App Developement
            </NavDropdown.Item>
            <NavDropdown.Item className='nav-item'  href="#action/3.3">Flutter Developement</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className='nav-item'  href="#link">Products</Nav.Link>
          <Nav.Link className='nav-item'  href="#link">Internships</Nav.Link>
          <NavDropdown className='nav-item' title="Jobs" id="basic-nav-dropdown">
            <NavDropdown.Item className='nav-item' href="#action/3.1">Campus Ambassador</NavDropdown.Item>
            <NavDropdown.Item className='nav-item'  href="#action/3.2">
              Promotion Executive
            </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link className='nav-item'  href="#link">Verification</Nav.Link>
        <Nav.Link className='nav-item'  href="#link">About Us</Nav.Link>
        <Nav.Link  href="#link">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default navbar
