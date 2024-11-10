import React from 'react'
import ecomerceImg from '../assets/ecommerce-marketing-toronto.gif'

import Button from 'react-bootstrap/Button';

const Products = () => {
  return (
    <div>
      <div className=' para1'> 
            <div className='row'>
              <div className='column'>
                <img src={ecomerceImg}/>
              </div>
              <div className='column'>
                <h1 style={{paddingBottom:"0.8em"}} >Our works describe us in a better way.</h1>
                
                <h3 style={{paddingBottom:"0.4em"}}>Let's have a look to our portfolio.</h3>
                <Button style={{borderRadius:'20px',width:"120px",alignContent:"center"}} variant="info">Contact Us</Button>{' '}
              </div>
            </div>
        </div>
    </div>
  )
}

export default Products
