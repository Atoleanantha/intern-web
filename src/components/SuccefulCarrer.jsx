import React from 'react';
import { Row, Col } from 'react-bootstrap';
import bg from "../assets/classroombg.jpg";  // Importing the background image
import CountUp from 'react-countup';        // Importing CountUp for number animation

const SuccessfulCareer = () => {
  return (
    <>
      <div className="position-relative vh-100" style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="position-absolute top-0 start-0 w-100 h-100 bg-black opacity-50"></div>
        
        {/* Main content */}
        <div className="position-relative z-10 text-center text-white p-4">
          <h1 className="display-4 fw-bold">Behind Every Successful Career</h1>
          <div className="d-flex justify-content-center align-items-center mt-2">
            <div className="bg-warning" style={{ width: '50px', height: '5px' }}></div>
          </div>
          <p className="mt-3">Sevenmentor – A Renowned Brand For Quality Education And In-House Job Placement Services Since, Past Decades.</p>
        </div>

        {/* Stats Boxes */}
        <div className="position-relative z-10 d-flex justify-content-center mt-4">
          <Row className="w-100 justify-content-center">
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <div className="bg-warning text-white text-center rounded p-4 mx-2">
                <h2>
                  {/* Counting Animation */}
                  <CountUp start={0} end={300} duration={3} /> +
                </h2>
                <div className="bg-primary mx-auto my-2" style={{ width: '50px', height: '5px' }}></div>
                <p>Successful Careers made</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <div className="bg-warning text-white text-center rounded p-4 mx-2">
                <h2>
                  {/* Counting Animation */}
                  <CountUp start={0} end={15} duration={3} /> +
                </h2>
                <div className="bg-primary mx-auto my-2" style={{ width: '50px', height: '5px' }}></div>
                <p>Total Mentors</p>
              </div>
            </Col>
            <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
              <div className="bg-warning text-white text-center rounded p-4 mx-2">
                <h2>
                  {/* Counting Animation */}
                  <CountUp start={0} end={30} duration={3} /> +
                </h2>
                <div className="bg-primary mx-auto my-2" style={{ width: '50px', height: '5px' }}></div>
                <p>Online/Offline Courses</p>
              </div>
            </Col>
          </Row>
        </div>

        {/* Contact Us Button */}
        <div className="position-absolute end-0 top-50 translate-middle-y bg-danger text-white p-2" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', cursor: 'pointer' }}>
          Contact Us
        </div>

        {/* Chat Banner */}
        <div className="position-absolute end-0 bottom-0 bg-warning text-dark p-2" style={{ cursor: 'pointer' }}>
          WE ARE HERE! LET'S CHAT!
        </div>
      </div>
    </>
  );
}

export default SuccessfulCareer;
