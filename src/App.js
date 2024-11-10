
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Internship from './components/course_card/Internship';
import ContactUs from './components/footer/ContactUs';
import Navbar from './components/nav_bar/navbar';
import AboutUs from './components/AboutUs'
import Products from './components/Products'
import BottomBar from './components/footer/BottomBar';
import Achivements from './components/achivements/Achivements';
import { Route,Routes } from 'react-router-dom';

import Testimonials from './components/testimonials/Testimonials'
import { useState, useEffect } from 'react';
import PopupCard from './components/PopupCard';
import Career from './components/Career';
import { fetchData } from './services/apiService';
import Gallary from './components/gallary/Gallary';
import OurPartners from './components/our_partners/OurPartners';

function App() {
  const [popups, setPopups] = useState([]);
  const [loading, setLoading] = useState(false);
  
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    // Show popup when the component mounts
    fetchPopups();
    
  }, []);

  const fetchPopups = async () => {
    setLoading(true);
    try {
      const data = await fetchData("popups/get-popups");
      setPopups(data.data);
    } catch (error) {
        console.log(error.request.statusText);
        
    }finally{
        setLoading(false)
    }
    setShowPopup(true);
  };

  const handleClose = () => setShowPopup(false);

  return (
    <>
     <PopupCard show={showPopup} handleClose={handleClose} images={popups}/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/internships' element={<Internship/>}/>
      <Route path='/testimonials' element={<Testimonials/>}/>
      {/* <Route path='/products' element={<Products/>}/> */}
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/contact' element={<ContactUs/>}/>
      <Route path='/career' element={<Career/>}/>
      <Route path='/placements' element={<Achivements/>}/>
      <Route path='/gallary' element={<Gallary/>}/>
      <Route path='/ourpartners' element={<OurPartners/>}/>
    </Routes>
    <BottomBar/>
   
  </>
  );
}

export default App;
