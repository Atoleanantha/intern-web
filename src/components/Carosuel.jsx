import React from 'react'
import CustomButton from './CustomButton';

const Carosuel = () => {

  return (
    <>
   <div
  className="carosuel d-flex flex-column justify-content-center align-items-center text-center py-5"
>
  {/* Optional Overlay for better text visibility */}
  {/* <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(255, 255, 255, 0.6)", // Semi-transparent overlay
      zIndex: 1,
    }}
  /> */}
  
  {/* Text and Button - Positioned Above the Overlay */}
  <div style={{ zIndex: 2 }}>
    <h1 style={{ fontSize: "4vw", paddingTop: "0", color: "white" }}>
      Take Your Career to the Next Level with Us
    </h1>
    <h4 style={{ fontSize: "2vw", paddingTop: "0.3em", color: "white" }}>
      Join Our Defence Guru Cyber Education Institute
    </h4>
    <h5 style={{ fontSize: "2vw", paddingTop: "0.3em", color: "orange" ,textDecorationLine: "underline"}}>
      YOUR SECURITY! OUR PASSION!
    </h5>
    <br/>
    <CustomButton name="Contact Us" navLink="/contact"/>
  </div>
</div>


        
<div className='para1 m-8' style={{ textAlign: "justify", background: "rgb(238,174,202)",width:"100%",
background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)" }}>

        <h1>WHO WE ARE?</h1>
        <p>
          <b>Defence Guru (DG) </b>
          The DEFENCE GURU CYBER EDUCATION INSTITUTION (DGCEI) is a leading organization specializing in education and training in Cyber Law, Cyber Crime Investigation, Ethical Hacking, Information Security and Software Development. Catering to professionals, law enforcers, individuals, and corporations, DGCEI also offers cyber literacy workshops for school children and parents.

          DGCEI is committed to raising awareness, empowering youth with real-time knowledge, and preparing them for global challenges. The institute collaborates with industry experts, law enforcers, academics, and other key stakeholders to devise strategic guidelines for technology dynamics and incident response.

          DGCEI conducts training programs, bootcamps, workshops, and seminars on information security, both online and in-class, with customized onsite training as needed. It works closely with universities, educational institutions, and law enforcement agencies across India.
        </p>
        <p>
          At <b>DGCEI</b>, we believe practical knowledge is the key to success in the tech industry. Our aim is to help students lacking basic skills by offering hands-on learning through live projects and real-world examples.
        </p>
      </div>
      
    </>
  )
}

export default Carosuel
