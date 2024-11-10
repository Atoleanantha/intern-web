import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import linkedIn from './linkedin.png'
import instagram from './instagram.png'
import youtube from './youtube.png'

import {Link} from 'react-router-dom'
import Address from '../Address';


const BottomBar = () => {
    const iconStyle={
        imageheight:"3em",
        width:"3em",
    }
  return (
    // <div style={{backgroundColor:"#dee0d2"}}>
    <div style={{backgroundColor:"#3f4563" ,color:"white"}}>
        <Container className='para1 mt-2'>
       <Row row-md-4 style={{alignItems:"start"}}>
        <Col xs={6} md={4}>
          <h3>Useful Links</h3>
          <Nav.Link className='nav-item'><Link to='/' style={{ color: 'white', textDecoration: 'none' }}>Home</Link></Nav.Link>
          <Nav.Link className='nav-item' ><Link to='/about' style={{ color: 'white', textDecoration: 'none' }}>About Us</Link></Nav.Link>
          <Nav.Link className='nav-item' ><Link to='/contact' style={{ color: 'white', textDecoration: 'none' }}>Contact Us</Link></Nav.Link>
          {/* <Nav.Link className='nav-item' ><Link to='/web-services' style={{ color: 'white', textDecoration: 'none' }}>Services</Link></Nav.Link> */}

          <Nav.Link className='nav-item'  ><Link to='internships' style={{ color: 'white', textDecoration: 'none' }}>Courses</Link></Nav.Link>
        </Col>
        <Col xs={6} md={4}>
            <h3>Legal Links</h3>
          <Nav.Link className='b-nav-item' href="#home">Privacy Policy</Nav.Link>
          <Nav.Link className='b-nav-item' href="#aboutus">Refund Policy</Nav.Link>
          <Nav.Link className='b-nav-item' href="#home">Terms and Conditions</Nav.Link>
        </Col>
        <Col xs={12} md={4} sm={12} lg={4} >
        <Address margin="16px" fontSize="30px" txtcolor="orange" decColor="white"/>
            {/* <h3>Contact Info</h3>
            <h6 >Defence Guru Cyber Education Institute  </h6>
            Our Branchs:
            
            
            <p>📍 Sangamner <a target='_blank' href="https://maps.app.goo.gl/JEthzM6R4x2MGDDs5">Click here</a></p>
            <p>📍 Gera Imperium Hinjewadi Phase-2, Pune <a target='_blank' href="https://maps.app.goo.gl/dfnrwAGbZUE2ZYx98">Click here</a> </p> */}

            
            
          {/* <Nav.Link className='b-nav-item'><b style={{fontSize:"20px"}}>📧  defencegurucyber.edu@gmail.com</b></Nav.Link>
          <Nav.Link className='b-nav-item' href="#email"><b style={{fontSize:"20px"}}>📞 +91 7378914416</b></Nav.Link>
         */}
        </Col>
      </Row>

      <Container className='socialMedia'>
            <h2>Follow Us</h2>
            <Row className="justify-content-center mb-1 mt-2" >
                <Col xs="2" md="2" sm="4">
                    <Nav.Link className='i-nav-item' target='blank' href="https://www.linkedin.com/company/defence-guru-cyber-education-institute/?originalSubdomain=in"><img style={iconStyle} src={linkedIn} alt="LinkedIn" /></Nav.Link>
                </Col>
                <Col xs="2" md="2" sm="4">
                    <Nav.Link className='i-nav-item' target='blank' href="https://www.instagram.com/defence_guru_cyber/"><img style={iconStyle} src={instagram} alt="Instagram" /></Nav.Link>
                </Col>
                <Col xs="2" md="2" sm="4">
                    <Nav.Link className='i-nav-item' target='blank' href="https://www.youtube.com/channel/UCfZRC-coosSZNDfOHHk0rzQ"><img style={iconStyle} src={youtube} alt="Youtube" /></Nav.Link>
                </Col>
            </Row>
            <p>Copyright ©2023 <b>DGCEI</b>. All Rights Reserved Designed By Team <b>DGCEI</b></p>
      </Container>
      
    </Container>
    </div>
    
  )
}

export default BottomBar;
