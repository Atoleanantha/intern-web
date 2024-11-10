import React, { useEffect } from 'react';
import { Modal, Container,Carousel } from 'react-bootstrap';
import "../App.css"

const PopupCard = ({ show, handleClose ,images}) => {
  useEffect(() => {
    if (show) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [show]);

  return (
    <Container>
       <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="transparent-modal"
    >
      <Modal.Header closeButton />
      <Modal.Body className="p-0">
        <Carousel interval={1000} controls={true} indicators={true} fade={true}>
          {images.map((image, index) => (
            <Carousel.Item key={index}>
              <img
              loading='lazy'
                src={image.photo}
                alt={`Slide ${index}`}
                style={{ width: '100%', height: 'auto', borderRadius: '0' }} // No rounded corners
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
    </Container>
  );
};

export default PopupCard;
