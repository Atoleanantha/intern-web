import React from 'react'
import TechnologiesCard from './TechnologiesCard'

import Button from 'react-bootstrap/Button';
import Products from '../Products'
import { Container } from 'react-bootstrap'
import WebSeeviceCards from './WebSeeviceCards';

const WebServices = () => {
  return (
    <div>
      <WebSeeviceCards/>
      <TechnologiesCard/>
      {/* <Container className='para1'>
          
        </Container> */}
      <Products/>
    </div>
  )
}

export default WebServices
