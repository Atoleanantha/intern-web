

import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InternshipCard from './InternshipCard';

import web from './assets/web_developing.gif'
import android from './assets/android_developing.gif'
import uiux from './assets/ui_ux.gif'
import ai from './assets/android_developing.gif'
import ml from './assets/android_developing.gif'
import python from './assets/python_programming.avif'
import ds from './assets/data_science.webp'
import java from './assets/java_projects.avif'
import cpp from './assets/cpp_programming.avif'

import adsai from "./assets/course_logos/adsai.png"
import cases from "./assets/course_logos/case.png"
import ccio from "./assets/course_logos/ccio.png"
import ccse from "./assets/course_logos/ccse.png"
import ceh from "./assets/course_logos/ceh.png"
import chfi from "./assets/course_logos/chfi.png"
import ciso from "./assets/course_logos/ciso.png"
import cnd from "./assets/course_logos/cnd.png"
import cpent from "./assets/course_logos/cpent.png"
import ctia from "./assets/course_logos/ctia.png"
import mcpt from "./assets/course_logos/mcpt.png"
import { Button } from 'react-bootstrap';

const Internship = () => {
 

    const courses=[
      {img:ceh,title:'Certified Ethical Hacker (CIEH)',desc:'Master the tools and techniques used by ethical hackers to uncover vulnerabilities in systems. This certification will equip you with the skills to assess, secure, and protect networks and applications from cyber threats.'},
{img:cpent,title:'Certified Penetration Testing Professional (CIPENT)',desc:'Gain practical knowledge in penetration testing techniques and methodologies. This certification will prepare you to identify and exploit vulnerabilities in systems to enhance their security, simulating real-world attacks.'},
{img:chfi,title:"Computer Hocking Forensic Investigator (C/HFI)",desc:'Learn the skills needed to investigate and analyze digital data related to cybercrimes. This course provides a strong foundation in forensic investigation techniques used to track down cybercriminals and gather digital evidence.'},
{img:cnd,title:"Certified Network Defender (CND)",desc:'Get trained in network security and defense techniques. This certification will prepare you to protect, detect, and respond to network attacks, securing critical infrastructure against potential threats.'},
{img:ccse,title: "Certified Cloud Security Engineer (C/CSE)",desc:'Become a certified cloud security expert and learn to safeguard cloud infrastructures from threats. This certification covers the implementation of security controls and procedures for protecting data in cloud environments.'},
// {img:java,title:'Certified DevSecOps Engineer (O/CDE)',desc:'Master the principles of integrating security practices into DevOps. This certification prepares you to implement security across the entire development lifecycle, ensuring secure software deployment and operation.'},
{img:cases,title:"Certified Application Security Engineer (C/ASE)",desc:'Gain expertise in application security and learn how to safeguard applications from attacks. This certification covers techniques for developing secure applications and implementing security protocols in the development process.'},
{img:ciso,title:"Certified Information Security Officer (C/ISO)",desc:'Learn to lead and manage an organization’s security program. This certification provides the knowledge needed to develop and maintain a robust information security strategy and respond to cyber threats effectively.'},
{img:ctia,title: "Certified Threat Intelligence Analyst (CITIA)",desc:'Become a certified threat intelligence professional and learn to analyze cyber threats and vulnerabilities. This course covers threat detection, risk analysis, and mitigation strategies, empowering you to protect systems from emerging threats.'},
{img:ccio,title:'Certified Cyber Crime Investigation Officer (CICCIO)',desc:'Learn the skills to investigate cyber crimes and track down criminals in the digital world. This certification covers the fundamentals of cybercrime investigation, from gathering evidence to presenting findings in legal proceedings.'},

{img:web,title:'Java Fullstack Development',desc:'Become a proficient full-stack Java developer and master both front-end and back-end development. This program covers everything from web application development to database integration, ensuring you gain comprehensive skills in building dynamic, scalable web applications using Java technologies.'},
{img:android,title: "PHP Fullstack Development",desc:'Learn to develop dynamic, data-driven websites using PHP, one of the most widely-used server-side scripting languages. This program will guide you through front-end and back-end development, covering everything from user interface design to database management.'},
{img:java,title:'Net Fullstack Development',desc:'Dive into the world of full-stack development using .NET technologies. This program offers in-depth knowledge of creating robust web applications using Microsoft’s .NET framework, covering both front-end and back-end development.'},
{img:python,title:"Python Fullstack Development",desc:'Become an expert in Python for both web and software development. This program covers full-stack development using Python, giving you the tools to build, deploy, and maintain dynamic, scalable applications.'},
{img:ai,title:"React JS Web Development",desc:'Master the art of building user interfaces with React JS, one of the most popular JavaScript libraries. This course will teach you how to develop fast, scalable, and interactive web applications using React.'},
{img:web,title:'Node JS Web Development',desc:'Master back-end web development using Node.js. This course covers the development of server-side applications, API design, and real-time applications, offering hands-on experience with JavaScript-based server-side technologies.'},
{img:ds,title:'Angular Web Development',desc:'Learn how to build dynamic web applications using Angular, one of the most powerful front-end frameworks. This program covers the creation of scalable, maintainable, and robust applications from scratch using Angular.'},
{img:cpp,title:'Mobile App Development',desc:'Start your journey into mobile app development and learn to create applications for Android and iOS platforms. This course provides a comprehensive guide to building user-friendly and responsive mobile applications.'},
{img:uiux,title:"Software Testing",desc:'Become proficient in testing methodologies and tools to ensure software reliability. This course covers manual and automated testing techniques, preparing you for a career in software quality assurance.'},
{img:ml,title:"Data Science",desc:'Acquire expertise in data analysis, machine learning, and big data technologies. This course equips you with the skills to analyze and interpret large datasets, make data-driven decisions, and build predictive models.'},
{img:web,title:'Digital Marketing',desc:'Master digital marketing strategies, including SEO, social media marketing, and PPC campaigns. This course prepares you to design and execute successful digital marketing campaigns that drive business growth.'},
{img:java,title:'Salesforce CRM Training',desc:'Gain proficiency in Salesforce CRM and master the tools needed for managing customer relationships. This course will prepare you to configure, implement, and maintain Salesforce CRM solutions for businesses.'}
];
     

const [visibleCards, setVisibleCards] = useState(6);

// Function to load more cards
const showMoreCards = () => {
  setVisibleCards(courses.length);  // Show all cards when "Know More" button is clicked
};

return (
  <Container className="py-4">
    <h2 className="text-center text-decoration-underline text-dark">What we offer?</h2>

    <Row className="gy-4">
      {/* Slice the courses array to show only the number of visible cards */}
      {courses.slice(0, visibleCards).map((course, index) => (
        <Col key={index} xs={12} sm={6} md={4} lg={4} xl={4}>
          <InternshipCard
            image={course.img}
            title={course.title}
            desc={course.desc}
            
          />
        </Col>
      ))}
    </Row>

    {/* Show "Know More" button only if there are more courses to show */}
    {visibleCards < courses.length && (
      <div className="text-center mt-4">
        <Button variant="primary" onClick={showMoreCards}>Know More</Button>
      </div>
      
    )}
  </Container>
);
};

export default Internship;