import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { postData } from '../services/apiService'; // Replace with actual fetch function for API calls.
import "../App.css"

function ContactModal() {
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });


  

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
        const response = await postData('contacts/add-contact', formData);
  
        console.log('Response:', response);
    
        if (!response.success) {
          const errorMessage = await response.text(); // Get error message from the server
          console.error('Server Error:', errorMessage);
          throw new Error('Failed to add contact');
        }
      alert('Contact submitted successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
      handleClose();
    } catch (error) {
      alert('Failed to submit contact. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  var btnstyle={
    borderRadius:"20px",
    alignContent: "center",
    borderRadius: "20px",
    color:"white",
    backgroundColor:'orange',
    border: "2px solid transparent",
    paddingBottom: "5dp",
}

  return (
    <>
     <Button className="mb-3" style={btnstyle} onClick={handleShow}>
  Connect with Us
</Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Contact Us</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formPhone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter your phone number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Your message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
            </Form.Group>

            <Button
              variant="primary"
              type="submit"
              className="w-100"
              disabled={loading || formData.email === ''}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ContactModal;
