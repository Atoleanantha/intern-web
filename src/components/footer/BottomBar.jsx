import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import linkedIn from './linkedin.png'
import instagram from './instagram.png'
import twitter from './twitter.png'


const BottomBar = () => {
    const iconStyle={
        imageheight:"3em",
        width:"3em",
    }
  return (
    // <div style={{backgroundColor:"#dee0d2"}}>
    <div style={{backgroundColor:"#3f4563" ,color:"white"}}>
        <Container className='para1 mt-2'>
       <Row row-md-4>
        <Col xs={6} md={4}>
          <h3>Useful Links</h3>
          <Nav.Link className='b-nav-item' href="#home">Home</Nav.Link>
          <Nav.Link className='b-nav-item' href="#aboutus">About Us</Nav.Link>
          <Nav.Link className='b-nav-item' href="#home">Services</Nav.Link>
          <Nav.Link className='b-nav-item' href="#home">Internships</Nav.Link>
        </Col>
        <Col xs={6} md={4}>
            <h3>Legal Links</h3>
          <Nav.Link className='b-nav-item' href="#home">Privacy Policy</Nav.Link>
          <Nav.Link className='b-nav-item' href="#aboutus">Refund Policy</Nav.Link>
          <Nav.Link className='b-nav-item' href="#home">Terms and Conditions</Nav.Link>
        </Col>
        <Col xs={6} md={4}>
            <h3>Contact Info</h3>
            <p>Amrutvahini College Of Engineering, Sangamner </p>
          <Nav.Link className='b-nav-item' href="#email"><b style={{fontSize:"20px"}}>contact@infinity.in</b></Nav.Link>
        </Col>
      </Row>

      <Container className='socialMedia'>
            <h2>Follow Us</h2>
            <Row className="justify-content-center mb-2 mt-3" >
                <Col xs={6} md={1}>
                    <Nav.Link className='i-nav-item' href="#linkedIn"><img style={iconStyle} src={linkedIn} alt="LinkedIn" /></Nav.Link>
                </Col>
                <Col xs={6} md={1}>
                    <Nav.Link className='i-nav-item' target='blank' href="https://www.instagram.com/hyperfae_anantha03/"><img style={iconStyle} src={instagram} alt="Instagram" /></Nav.Link>
                </Col>
                <Col xs={6} md={1}>
                    <Nav.Link className='i-nav-item' href="#twitter"><img style={iconStyle} src={twitter} alt="Twitter" /></Nav.Link>
                </Col>
            </Row>
            <p>Copyright ©2023 <b>Infinity</b>. All Rights Reserved Designed By Team <b>Infinity</b></p>
      </Container>
      
    </Container>
    </div>
    
  )
}

export default BottomBar
