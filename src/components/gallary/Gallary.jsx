
import React, { useEffect, useLayoutEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap';
import { fetchData } from "../../services/apiService";
import "../../App.css"
import Modal from "../Modal"
function Gallery() {
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [images, setImages] = useState([]);
  const [loading,setLoading]=useState(false)
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    fetchGallary();
  }, []);
  const fetchGallary = async () => {
    setLoading(true)
    try {
      const data = await fetchData("gallary/get-gallary");
      setImages(data.data);
    } catch (error) {
      setErrorMessage("Error fetching gallery images.");
      console.error("Error fetching gallery:", error);
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
    const totalLength = images.length;
    if (currentIndex + 1 >= totalLength) {
      setCurrentIndex(0);
      const newUrl =images[0].photo;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].photo;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images[totalLength - 1].photo;
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0].photo;
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };


  return (
    <div className="wrapper p-1" >

      <Row className="justify-content-left">
        
        
        {
        
        loading? <center>Loading...</center>:
        errorMessage!==""?<center>{errorMessage}</center>:
        images.length==0?"No images": 
        images.map((item, index) => (
          <Col xs={6} md={3} sm={4} className="">
            <div key={index} className="wrapper-images">
              <img
                src={item.photo}
                alt="225X225"
                loading='lazy'
                style={{
                  borderRadius:'0px',
                  width: '100%',
                  height: '15rem', // Maintain aspect ratio
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
  );
}


export default Gallery;