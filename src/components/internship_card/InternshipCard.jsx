import React from 'react';
import Card from 'react-bootstrap/Card';
import CustomButton from '../CustomButton';

const InternshipCard = ({ image, title, desc }) => {
  return (
    <Card style={{border:"0px", width: '25rem',height:"34rem", marginBottom:"3em",padding:"1.5em"}}>
      <Card.Img variant="top" style={{height:"14em"}} src={image} />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{title}</Card.Title>
        <Card.Text style={{textAlign:"justify",fontSize:"smaller"}}>
          {desc}
        </Card.Text>
        <CustomButton/>
      </Card.Body>
    </Card>
  );
};

export default InternshipCard;
