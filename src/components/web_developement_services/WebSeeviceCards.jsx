import React from 'react'
import '../../App.css'

// import Button from 'react-bootstrap/Button';
import { Button, Container, Row, Col } from 'react-bootstrap';

import Img1 from '../../assets/img1.gif'
import Img2 from '../../assets/img2.gif'
import Img3 from '../../assets/img3.gif'
const WebSeeviceCards = () => {
  return (
    <div>

      <div className='para2 para1'>
        <h1>We Provide All Exclusive services For Clients</h1>
        <Row md={12} lg={12}>
          <Col sm={12} md={6} lg={6}>
            <img src={Img1} />
          </Col>
          <Col sm={12} md={6} lg={6} style={{textAlign:"justify"}} >
            <h2 style={{ paddingBottom: "0.5em" }} >We build websites and web applications.</h2>
            <p>Today, every business should have a website.</p>
            <p >No matter how small or large your business, having a website is must have at this time.</p>
            <p style={{ paddingBottom: "0.2em" }}>Having a website help you to maintain your online presence.</p>
            <Button style={{ borderRadius: '20px', width: "120px", alignContent: "center" }} variant="info">Contact Us</Button>{' '}
          </Col>
        </Row>
      </div>
      <div className='para1'>
        <Row md={12} lg={12}>
          
          <Col  sm={12} md={6} lg={6} style={{textAlign:"justify"}}>
            <h2 style={{ paddingBottom: "0.5em" }} >E-commerce development.</h2>
            <p>Our talented web development team has years of experience building websites from small to large.</p>
            <p>We deliver projects with 100% user satisfaction.</p>
            <p style={{ paddingBottom: "0.2em" }}>Whatever functionality you need for the web, we will implement it.</p>
          </Col>
          <Col sm={12} md={6} lg={6}>
            <img src={Img2} />
          </Col>
        </Row>
      </div>
      <div className='para1'>
        <Row md={12} lg={12}>
          <Col  sm={12} md={6} lg={6} style={{textAlign:"justify"}}>
            <h2 style={{ paddingBottom: "0.5em" }} >Need website for your business?</h2>
            <p style={{ textAlign: "center" }}>Want to sell your products online?</p>
            <p>We often develop Ecommerce for businesses who want to sell their products or services online.</p>
            <p style={{ paddingBottom: "0.2em", textAlign: "center" }}>Let's move your products towards online...</p>
            <p style={{ textAlign: "center" }} ><Button style={{ borderRadius: '20px', width: "120px", textAlign: "center" }} variant="info">Contact Us</Button>{' '}</p>
          </Col>
          <Col  sm={12} md={6} lg={6} >
            <img src={Img3} />
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default WebSeeviceCards
