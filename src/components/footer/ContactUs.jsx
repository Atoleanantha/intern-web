import React, { useState } from 'react'
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Col, Container, Row } from 'react-bootstrap';
import { PiEnvelopeDuotone, PiPhoneCallFill } from 'react-icons/pi';
import Address from '../Address'

const ContactUs = () => {
    // const [info1, setInfo] = useState({
    //     'fname': "",
    //     'lname': "",
    //     'email': "",
    //     'message': "",
    // });

    // const [fname, setFName] = useState("")
    // const [lname, setLName] = useState("")
    // const [email, setEmail] = useState("")
    // const [message, setMessage] = useState("")


    return (
        <>
            <Container >

                <div style={{ textAlign: "center", backgroundColor: "orange" }}><h5>Contact Us</h5></div>
                <label style={{ fontWeight: "bold", textDecoration: "dotted" }}>Contact for</label> <label style={{ color: "yellowgreen", fontWeight: 'bold ' }}>Information</label>
                <div style={{ border: "0.2px rgb(67,67,67) solid ", borderRadius: "5px", padding: "10px" }}>
                    <label>Name : <label>Mr. Rushikesh Shinde</label></label>
                    <br />
                    <PiPhoneCallFill /><span>  </span>
                    <label>Phone : <label>+91 7378914416</label></label>
                    <br />
                    <PiEnvelopeDuotone /><span>  </span>
                    <label>Email : <label>defencegurucyber.edu@gmail.com</label></label>
                </div>

                <Row>
                    <Col md="6" lg="6" sm="12">
                        <div>
                            <label style={{ fontWeight: "bold", textDecoration: "dotted" }}>Contact</label> <label style={{ color: "orange", fontWeight: 'bold ' }}>Details</label>
                        </div>
                        <Address margin="16px" fontSize="30px" txtcolor="orange" decColor="rgb(67,67,67)" />
                    </Col>
                    <Col md="6" lg="6" sm="12">
                        <label style={{ fontWeight: "bold" }}>Google <label style={{ color: 'orange' }}>Location</label></label>

                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5092320355407!2d73.71510837562244!3d18.596151666860333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb98e08c485%3A0x88605aadb7c213a6!2sGera&#39;s%20Imperium%20Rise!5e0!3m2!1sen!2sin!4v1729183600789!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        {/* <label style={{textDecoration: "dotted", fontWeight:'bold '}}>Road</label> <label style={{color:"orange", fontWeight:'bold '}}>Map</label>
        <RoadMap /> */}
                    </Col>
                </Row>
                {/* <hr className='dashed' /> */}

                {/* <label style={{ fontWeight: "bold" }}>Google <label style={{ color: 'orange' }}>Location</label></label> */}
                {/* <iframe 
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5092320355407!2d73.71510837562244!3d18.596151666860333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbb98e08c485%3A0x88605aadb7c213a6!2sGera&#39;s%20Imperium%20Rise!5e0!3m2!1sen!2sin!4v1729183600789!5m2!1sen!2sin" 
  width="100%" 
  height="450" 
  style={{ border: 0 }} 
  allowFullScreen 
  loading="lazy" 
  referrerPolicy="no-referrer-when-downgrade">
</iframe> */}
            </Container>

            {/* <div className='para2 '>
                <div className="contactUs">
                    <Form style={{ maxWidth: "40em" }}>
                        <b style={{ fontSize: "3em", marginTop: "2em" }}>Get in Touch</b>
                        <Form.Group className="mb-3" controlId="formGroupFirstName">
                            <Form.Label >First Name</Form.Label>
                            <Form.Control id='firstName' type="text" onChange={(e) => { setFName(e.target.value) }} placeholder="Enter first name" />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control id='lastName' type="text" onChange={(e) => { setLName(e.target.value) }} placeholder="Enter last name" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label >Your email </Form.Label>
                            <Form.Control id='email' type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Your email address" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupMessage">
                            <Form.Label >Message </Form.Label>
                            <FloatingLabel controlId="comment" label="Enter your Message">
                                <Form.Control
                                    as="textarea"
                                    onChange={(e) => { setMessage(e.target.value) }}
                                    placeholder="Enter your Message"
                                    style={{ height: '100px' }}
                                />
                            </FloatingLabel>
                        </Form.Group>

                        <Button style={{ marginTop: "1em" }}
                            onClick={

                                () => setInfo({ 'fname': fname, 'lname': lname, 'email': email, 'message': message })
                            }

                            variant="success">Submit</Button>{' '}
                        <p>{info1.fname}</p>
                <p>{info1.lname}</p>
                <p>{info1.email}</p>
                <p>{info1.message}</p>

                    </Form>
                </div>


            </div> */}
        </>

    )
}

export default ContactUs
