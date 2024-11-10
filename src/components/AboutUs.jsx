import React from 'react'
import { Container, Card } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import owner from '../assets/owner.jpg'

const AboutUs = () => {
  return (
    <>

      <Container className='para1 m-8' style={{
        textAlign: "justify", background: "rgb(238,174,202)", width: "100%",
        background: "radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)"
      }}>

        <h1>WHO WE ARE</h1>
        <p>
          <b>Defence Guru (DG) </b>
          The DEFENCE GURU CYBER EDUCATION INSTITUTION (DGCEI) is a leading organization specializing in education and training in Cyber Law, Cyber Crime Investigation, Ethical Hacking, Information Security and Software Development. Catering to professionals, law enforcers, individuals, and corporations, DGCEI also offers cyber literacy workshops for school children and parents.

          DGCEI is committed to raising awareness, empowering youth with real-time knowledge, and preparing them for global challenges. The institute collaborates with industry experts, law enforcers, academics, and other key stakeholders to devise strategic guidelines for technology dynamics and incident response.

          DGCEI conducts training programs, bootcamps, workshops, and seminars on information security, both online and in-class, with customized onsite training as needed. It works closely with universities, educational institutions, and law enforcement agencies across India.
        </p>
        <p>
          At <b>DGCEI</b>, we believe practical knowledge is the key to success in the tech industry. Our aim is to help students lacking basic skills by offering hands-on learning through live projects and real-world examples.
        </p>
      </Container>
      <>
        <div className='para2 para1 '>
          <Row className="align-items-start">
            <Col className='pt-4' md={6}>
              <h2>Our Mission</h2>
              <p style={{ fontSize: "1.2em", textAlign: "justify" }}>Our mission is to provide a supportive and inclusive learning environment that fosters the growth and development of students and employees in the fields of cybersecurity and software development. We are committed to:</p>
              <ul style={{ textAlign: "justify" }}>
                <li>Delivering high-quality education and training programs that meet the evolving needs of the industry.</li>
                <li>Encouraging a culture of innovation, creativity, and collaboration among students and employees.</li>
                <li>Providing opportunities for professional growth and development, enabling students and employees to achieve their full potential.</li>
                <li>Building strong partnerships with industry leaders to ensure our curriculum remains relevant and effective.</li>
                <li>Promoting a culture of excellence, integrity, and social responsibility in all aspects of our operations.</li>
              </ul>
            </Col>
            <Col md={6} className='pt-4 md={6}'>
              <h2>Our Vision</h2>
              <p style={{ fontSize: "1.2em", textAlign: "justify" }}>To be a premier institute in cybersecurity and software development, empowering students and employees with the knowledge, skills, and innovative spirit to excel in their careers and contribute to the advancement of the digital world.</p>
            </Col>
          </Row>
        </div>
        <Row className='para1' style={{backgroundColor:"#fff9e6"}}>
          
        <h2 style={{textAlign:"center",backgroundColor:"orange" }}>Desk of the Management</h2>
          <Col sm={6} md={4} lg={4}>
          <Card className='m-3 border-0 p-4' style={{ backgroundColor: '#3E4598', color: 'white' }}>
                <Card.Img variant="top" src={owner} />
                <Card.Body className="p-0 d-flex flex-column justify-content-center">
                  <Card.Title>Mr. Rushikesh Shinde</Card.Title>
                  <Card.Text>
                    Founder & Managing Director
                    <br />
                    DGCEI
                  </Card.Text>

                </Card.Body>
              </Card>
          </Col>
          <Col sm={6} md={8} lg={8} style={{textAlign:'justify'}}>
          <p>
          As the Founder and Managing Director of Defence Guru Cyber Education Institute (DGCEI), my vision has always been to create a place where innovation meets education. With a deep-rooted passion for technology and a commitment to empowering the next generation of professionals, I’ve dedicated my career to building an institution that not only equips students with cutting-edge skills but also fosters a culture of creativity and collaboration.
          </p>
          <p>
          Throughout my years in the industry, I’ve worked hard to establish strong relationships with global leaders, ensuring that our programs stay relevant to the fast-evolving demands of the tech world. It’s my mission to provide an environment where both students and employees can thrive, continuously learn, and push the boundaries of what’s possible.
          </p>
          <p>
          I believe in the importance of excellence, integrity, and social responsibility in everything we do. My goal has always been to offer high-quality, real-world education while creating opportunities for professional growth that help each individual reach their full potential.
          </p>

          </Col>
          <iframe width="560" height="400" src="https://www.youtube.com/embed/1XNBFsmgIjo?si=O2RPfNgYDr3kYgDy" title="Defence Guru" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </Row>
       
   


      </>

    </>
  )
}

export default AboutUs
