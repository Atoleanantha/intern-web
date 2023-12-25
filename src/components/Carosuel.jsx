import React from 'react'
import Button from 'react-bootstrap/Button';
const Carosuel = () => {
  return (
    <>
    <div className='carosuel' style={{textAlign:"center"}}>
        <h1 style={{fontSize:"60px",paddingTop:"4em",color:'#411900'}}>Take Your Career to the Next Level with Us</h1>
        <h4 style={{fontSize:"30px",paddingTop:"0.3em"}}>Join Our Exciting Internship Journey</h4>
        <Button style={{paddingTop:'0.2em',borderRadius:'20px',width:"80px"}} variant="info">Apply</Button>{' '}
        </div>
        <div className='para1'>
            <h1>Who We Are</h1>
            <p>
              CodSoft are IT services and IT consultancy  that specializes in creating innovative solutions for businesses. We are passionate about technology and believe in the power of software to transform the world. Our internship program is just one of the ways in which we are investing in the future of the industry.
            </p>
            <p>
            At CodSoft, we believe practical knowledge is the key to success in the tech industry. Our aim is to help students lacking basic skills by offering hands-on learning through live projects and real-world examples. 
            </p>
        </div>
    </>
  )
}

export default Carosuel
