import React, { useEffect } from 'react'
import { Col, Container, Row } from "react-bootstrap";
import { useState, useLayoutEffect } from "react";
import Modal from '../Modal'
import '../../App.css'
import { fetchData } from "../../services/apiService";

const Achivements = () => {
  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    fetchPlacements();
  }, []);

  const fetchPlacements = async () => {
    setLoading(true)
    try {
      const res = await fetchData("placements/get-placement");
      const sortedData = res.data.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
      setPlacements(sortedData);
    } catch (error) {
      setErrorMessage("Failed to fetch placements");
      console.error("Error fetching placements:", error);
    }finally{
      setLoading(false)
    }
  };


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.photo);
  };

  const handelRotationRight = () => {
    const totalLength = placements.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl = placements[0].photo;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = placements.filter((item) => {
      return placements.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].photo;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = placements.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = placements[totalLength - 1].photo;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = placements.filter((item) => {
      return placements.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].photo;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };
  
  
    
  return (
<Container  style={{backgoundColor:'grey'}}>
<div className="wrapper p-1" >
      <Row className="justify-content-center align-items-center">
        {
          loading?<center>Loading...</center>:
          placements.length===0?<center>Not Found</center>:
          errorMessage!==""?<center>{errorMessage}</center>:
        placements.map((item, index) => (
          <Col xs={4} md={3} sm={4} className="">
            <div key={index} className="wrapper-images">
              <img
                src={item.photo}
                alt="225X225"
                loading='lazy'
                style={{
                  borderRadius:'0px',
                  width: '100%',
                  // height: '17rem', // Maintain aspect ratio
                  objectFit: 'cover', // Ensures the image covers the given area
                  cursor: 'pointer' // Adds a pointer cursor on hover
                }}
                onClick={() => handleClick(item, index)}
              />
            </div>
          </Col>
        ))}

      </Row>

      <div>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            handelRotationRight={handelRotationRight}
            setClickedImg={setClickedImg}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </div>
</Container>
  )
}

export default Achivements