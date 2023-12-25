import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const ContactUs = () => {
  return (
    <div className='para2 '>
        <div className="contactUs">
            <Form style={{ maxWidth: "40em" }}>
                <b style={{fontSize:"3em",marginTop:"2em"}}>Get in Touch</b>
                <Form.Group className="mb-3" controlId="formGroupFirstName">
                    <Form.Label >First Name</Form.Label>
                    <Form.Control id='firstName' type="text" placeholder="Enter first name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control id='lastName' type="text" placeholder="Enter last name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                    <Form.Label >Your email </Form.Label>
                    <Form.Control id='email' type="email" placeholder="Your email address" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupMessage">
                    <Form.Label >Message </Form.Label>
                    <FloatingLabel controlId="comment" label="Enter your Message">
                        <Form.Control
                        as="textarea"
                        placeholder="Enter your Message"
                        style={{ height: '100px' }}
                        />
                    </FloatingLabel>
                </Form.Group>
                <Button style={{marginTop:"1em"}} variant="success">Submit</Button>{' '}
            </Form>
        </div>

    
    </div>
    
  )
}

export default ContactUs
