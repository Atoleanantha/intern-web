import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';
const CustomButton = () => {
    
    var btnstyle={
    borderRadius:"20px",
    width:"120px",
    alignContent: "center",
    borderRadius: "20px",
    color:"white",
    backgroundColor:'rgb(0, 174, 242)',
    border: "2px solid transparent",
    paddingBottom: "5dp",
}
    
  return (
    <>
    <p style={{textAlign:"center"}}>
        <Button 
        className="custombtn" 
        style={btnstyle} 
        variant="info"
        >Apply</Button>{' '}
    </p>
    </>
    
  )
}

export default CustomButton
