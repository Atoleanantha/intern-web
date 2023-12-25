import React from 'react'
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

const Internship = () => {
    const intership={
        web1 :[web,'Web Development ','web development internship that provides practical work experience and an introduction to crafting and enhancing web-based systems. This opportunity offers engaging challenges and real-world projects, allowing you to gain hands-on experience in the dynamic fields of web and app development. Join our award-winning innovation team and kickstart your journey to success in a supportive and enriching environment.'],
        'android':[android,"Android Development",'Android, the user-friendly open-source operating system, has transformed the way we access internet applications and carry out important tasks on our mobile devices. At CODSOFT, we understand the growing preference for mobile usage and offer the ideal starting point for your app development journey. Discover the simplicity of creating your first app with us and unlock a world of endless possibilities in the realm of mobile innovation.'],
        'ds':[ds,'Data Science ','Remote Data Science Internships Are A Unique Chance To Gain Experience In The Midst Of The Virtual Workforce While Remaining Immersed In One Of The Top Organizations In The Field. Data Analysis Internships Are Some Of The Most Competitive And Popular Within The Broader Data Science Field.'],
        'java':[java,'Java Programming',"Become a Java programming master from the convenience of your own home and unlock incredible job prospects with our certification program. Join our comprehensive 4-week internship program, where you'll learn everything from web application development to deployment using Java Build a solid foundation for your career with hands-on training and real-world application in a supportive and collaborative environment."],
        'cpp':[cpp,'C++ Programming',"Gain mastery in C++ programming from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment using C++. Establish a strong base for your career and real-world implementation within a supportive and collaborative setting."],
        'python':[python,"Python Programming","Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured, object-oriented and functional"],
        'uiux':[uiux,"UI/UX Design","Gain mastery in UI/UX Design from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting."],
        'ai':[ai,"Artificial intelligence","Gain mastery in Artificial intelligence from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting."],
        "ml":[ml,"Machine learning","Gain mastery in Machine learning from the comfort of your home and open doors to amazing job opportunities with our certification program. Enroll in our intensive 4-week internship, where you'll acquire knowledge in web application development and deployment . Establish a strong base for your career and real-world implementation within a supportive and collaborative setting."]
      }

      
      const chunkArray = (array, chunkSize) => {
        const result = [];
        for (let i = 0; i < array.length; i += chunkSize) {
          result.push(array.slice(i, i + chunkSize));
        }
        return result;
      };
    
      const rowsOfInternshipCards = chunkArray(Object.keys(intership), 3);
    
      return (
        <Container>
          <h2 style={{textAlign:"center",textDecorationLine:"underline",color:"black"}}>INTERNSHIP POSITION</h2>
          {rowsOfInternshipCards.map((row, rowIndex) => (
            <Row key={rowIndex}>
              {row.map((key) => (
                <Col key={key}>
                  <InternshipCard
                    image={intership[key][0]}
                    title={intership[key][1]}
                    desc={intership[key][2]}
                  />
                </Col>
              ))}
            </Row>
          ))}
        </Container>
      );
    };
    
    export default Internship;