
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Internship from './components/internship_card/Internship';
import ContactUs from './components/footer/ContactUs';
import Navbar from './components/nav_bar/navbar';
import Carosuel from './components/Carosuel';
import Button from 'react-bootstrap/Button';

import Img1 from './assets/img1.gif'
import Img2 from './assets/img2.gif'
import Img3 from './assets/img3.gif'
import creativity from './assets/creativity.webp'
import meetImg from './assets/meetphoto.avif'
import BottomBar from './components/footer/BottomBar';


function App() {
  return (
    <>
    {/* Navbar */}
      <Navbar/>
      {/* body */}
      <body>
        <Carosuel/>
        <div className='para2 para1'>
            <h1>We Provide All Exclusive services For Clients</h1>
            <div className='row'>
              <div className='column'>
                <img src={Img1}/>
              </div>
              <div className='column'>
                <h2 style={{paddingBottom:"0.5em"}} >We build websites and web applications.</h2>
                <p>Today, every business should have a website.</p>
                <p>No matter how small or large your business, having a website is must have at this time.</p>
                <p style={{paddingBottom:"0.2em"}}>Having a website help you to maintain your online presence.</p>
                <Button style={{borderRadius:'20px',width:"120px",alignContent:"center"}} variant="info">Contact Us</Button>{' '}
              </div>
            </div>
        </div>
        <div className='para1'>
          <div className='row'>
              <div className='column'>
                <img src={Img2}/>
              </div>
              <div className='column'>
                <h2 style={{paddingBottom:"0.5em"}} >E-commerce development.</h2>
                <p>Our talented web development team has years of experience building websites from small to large.</p>
                <p>We deliver projects with 100% user satisfaction.</p>
                <p style={{paddingBottom:"0.2em"}}>Whatever functionality you need for the web, we will implement it.</p>
              </div>
            </div>
        </div>
        <div className='para1'>
          <div className='row'>
              <div className='column'>
                <h2 style={{paddingBottom:"0.5em"}} >Need website for your business?</h2>
                <p style={{textAlign:"center"}}>Want to sell your products online?</p>
                <p>We often develop Ecommerce for businesses who want to sell their products or services online.</p>
                <p style={{paddingBottom:"0.2em", textAlign:"center"}}>Let's move your products towards online...</p>
                <p style={{textAlign:"center"}} ><Button style={{borderRadius:'20px',width:"120px",textAlign:"center"}} variant="info">Contact Us</Button>{' '}</p>
              </div>
              <div className='column'>
                <img src={Img3}/>
              </div>
          </div>
        </div>
        {/* Internship grid */}
        <Internship/>

        <div className='para3 para1'>
          <div className='row'>
              <div className='column'>
                <h2 style={{paddingBottom:"0.5em"}} >Unlock Your Creativity</h2>
                
                <p style={{paddingBottom:"0.2em"}}>At CodSoft, we believe that creativity is the heart of innovation. Our internship program is designed to help you tap into your creative potential and bring your ideas to life. Through our hands-on approach, you'll learn how to develop new products, design user interfaces, and build software that solves real-world problems. Join us today and discover your inner artist.</p>
              </div>
              <div className='column'>
                <img src={creativity}/>
              </div>
            </div>
        </div>

        <div className='para2 para1' style={{backgroundColor:"#dee0d2", opacity:"0.9"}}>
            
            <div className='row'>
              <div className='column'>
                <img src={meetImg}/>
              </div>
              <div className='column'>
                <h6 style={{textAlign:"center",fontWeight:"bolder"}} >AND LET'S NOT FORGET</h6>
                <h2 style={{paddingBottom:"0.5em"}} >Collaborate with the Best</h2>
                <p style={{paddingBottom:"0.2em"}}>At CodSoft, we believe that collaboration is the key to success. Our internship program is designed to help you build lifelong relationships with fellow interns, mentors, and industry experts. We're proud to have a diverse community of passionate individuals who are committed to pushing the boundaries of technology. Whether you're interested in front-end development, back-end development, or UI/UX design, we have something for everyone. Join us today and become a part of our vibrant community!</p>
                <Button style={{borderRadius:'20px',width:"120px",alignContent:"center",opacity:"0.7",color:"white"}} variant="info">Join</Button>{' '}
              </div>
            </div>
        </div>

        {/* Contact us form  */}
          <ContactUs/>
          <BottomBar/>

      </body>
  </>
  );
}

export default App;
