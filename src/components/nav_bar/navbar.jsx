import React, { useState } from 'react'
import '../../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

import NavDropdown from 'react-bootstrap/NavDropdown';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';
import { Link } from 'react-router-dom'
import { NavItem } from 'react-bootstrap';
import ContactModal from '../ContactModal';


const NavBar = () => {
  const [expanded, setExpanded] = useState(false); // To track navbar state (expanded or collapsed)

  // Function to handle navbar toggle
  const handleToggle = () => setExpanded(!expanded);

  // Function to close navbar when a link is clicked
  const handleClose = () => setExpanded(false);

  return (
    <Navbar expand="lg" className="nav" expanded={expanded} onToggle={handleToggle} style={{ backgroundColor: "#e1e8f2", borderBottom: "0.5px solid", borderColor: "#222e42" }}>
      <Container>
        {/* Logo on the left */}
        <Navbar.Brand>
          <Link to='/' onClick={handleClose}>
            <img style={{ height: '3em' }} src={Logo} alt='Logo' />
          </Link>
        </Navbar.Brand>

        {/* Toggle for small screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleToggle} />

        {/* Navigation Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className='nav-item'>
              <Link to='/' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>Home</Link>
            </Nav.Link>

            <Nav.Link className='nav-item'>
              <Link to='/internships' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>Courses</Link>
            </Nav.Link>

            {/* <Nav.Link className='nav-item'>
              <Link to='/career' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>Career</Link>
            </Nav.Link> */}

            <NavDropdown className='nav-item ' title="Student Corner" id="basic-nav-dropdown">
              <NavDropdown.Item className='nav-item'><Link to='/placements' className='nav-item' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>Placements</Link></NavDropdown.Item>
              <NavDropdown.Item className='nav-item' ><Link to='/testimonials' style={{ color: 'black', textDecoration: 'none' }}>Testimonial</Link></NavDropdown.Item>
              {/* <NavDropdown.Item className='nav-item'  ><Link to='/web-services' style={{ color: 'black', textDecoration: 'none' }}>Flutter Developement</Link></NavDropdown.Item> */}
            </NavDropdown>


            <Nav.Link className='nav-item'>
              <Link to='/gallary' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>Gallary</Link>
            </Nav.Link>
            <Nav.Link className='nav-item'>
              <Link to='/about' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>About Us</Link>
            </Nav.Link>

            <Nav.Link className='nav-item'>
              <Link to='/contact' style={{ color: 'black', textDecoration: 'none' }} onClick={handleClose}>Contact Us</Link>
            </Nav.Link>
            <NavItem>
              <ContactModal/>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar
