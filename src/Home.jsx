import React from 'react'
import Courses from './components/course_card/Internship';
import Carosuel from './components/Carosuel';
import Button from 'react-bootstrap/Button';
import creativity from './assets/creativity.webp'
import meetImg from './assets/meetphoto.avif'
import { Col, Row } from 'react-bootstrap';
import SuccefulCarrer from './components/SuccefulCarrer'
import OurPartners from './components/our_partners/OurPartners';


const Home = () => {
  return (
    <>
      {/* body */}
      
  
        <Carosuel/>
        {/* <WebSeeviceCards/> */}
        {/* Course grid */}
        <Courses/>
        <SuccefulCarrer/>
        <Row className=" text-justify para2 para1" style={{width:"100%"}}>
          
            <Col xs={12} sm={12} md={6} lg={6} xl={6} >
            <h2 style={{paddingBottom:"0.5em", fontWeight:"bold"}} >Unlock Your Creativity</h2>
            <p style={{paddingBottom:"0.2em"}} >At our Cyber Security Institute, we believe that technology and security are the foundations of a digital future. Our comprehensive learning programs are crafted to equip you with the skills needed to excel in both development and cyber security. From mastering software development to understanding the intricacies of network protection, you'll gain hands-on experience that directly applies to real-world challenges. Whether you're passionate about coding or safeguarding systems, our institute provides the tools and knowledge to help you thrive in the ever-evolving tech landscape. Join us today and unlock your potential in the world of technical innovation and security.</p>
              
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <img src={creativity}/>
            </Col>
        </Row>
      
        <Row className="  text-justify para2 para1" style={{backgroundColor:"#dee0d2", opacity:"0.9",width:"100%"}}>
          
          <Col xs={12} sm={12} md={6} lg={6} xl={6} >
          <h6 style={{textAlign:"center ",fontWeight:"bolder"}} >AND LET'S NOT FORGET</h6>
                <h2 style={{paddingBottom:"0.5em"}} >Collaborate with the Best</h2>
                <p style={{paddingBottom:"0.2em ", textAlign:"justify "}}>At DGCEI, we are committed to fostering innovation through collaboration. Our dynamic learning environment encourages students, interns, and professionals to work together, share ideas, and develop cutting-edge solutions. With a focus on hands-on experience and mentorship from industry leaders, our programs offer a blend of technical expertise and real-world application. Whether you’re passionate about cybersecurity, software development, AI/ML, or cloud computing, we provide the tools and guidance you need to succeed. Join us today and become part of a forward-thinking community dedicated to transforming the future of technology!</p>
                {/* <Button style={{borderRadius:'20px',width:"120px",alignContent:"center",opacity:"0.7",color:"white"}} variant="info">Join</Button>{' '} */}
              
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
          <img src={meetImg}/>
          </Col>
      </Row>
      <OurPartners/>

       

      
    </>
  )
}

export default Home
