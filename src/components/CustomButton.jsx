import React from 'react'
import Button from 'react-bootstrap/Button';
import '../App.css';
import { Link } from 'react-router-dom';
const CustomButton = ({name,navLink}) => {
    
    var btnstyle={
    borderRadius:"20px",
    width:"120px",
    alignContent: "center",
    borderRadius: "20px",
    color:"white",
    backgroundColor:'orange',
    border: "2px solid transparent",
    paddingBottom: "5dp",
}
    
  return (
    <>
    
     <Link> 
     <p style={{textAlign: "center"}}>
     <Button 
    className="custombtn" 
    style={btnstyle} 
    variant="info"
    onClick={() => window.open("https://wa.me/7378914416", "_blank")}  // Open link in new tab
>
    {name}
</Button>
</p>

     </Link> 
    
    </>
    
  )
}

export default CustomButton
