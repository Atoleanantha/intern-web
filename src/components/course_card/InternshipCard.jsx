import React from 'react';
import Card from 'react-bootstrap/Card';
import CustomButton from '../CustomButton';

const InternshipCard = ({ image, title, desc }) => {
  return (
    
    <Card className="m-3 p-3 border-0 shadow-sm bg-dark text-white" style={{ maxWidth: "100%" }}>
    <Card.Img
      src={image}
      className="img-fluid"
      loading="lazy"
      style={{ height: "14em", objectFit: "fit" }} // Ensures consistent image size
    />
    <Card.Body className="d-flex flex-column"><Card.Title className="text-center" style={{ whiteSpace: "normal", overflow: "hidden", textOverflow: "ellipsis" }}>
 
        {title}
      </Card.Title>
      <Card.Text className="text-justify p-2 flex-grow-1" >
        {desc}
      </Card.Text>
      {/* Button at the bottom */}
      <div className="mt-auto">
        <CustomButton name="Contact Us" navLink="/contact"/>
      </div>
    </Card.Body>
  </Card>
  
  );
};

export default InternshipCard;
