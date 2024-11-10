import React from 'react'
import Row from 'react-bootstrap/Row'
import Ratio from 'react-bootstrap/Ratio';
import Col from 'react-bootstrap/Col'
import { Figure } from 'react-bootstrap'
import htmllogo from './assets/html5-logo.avif'
import csslogo from './assets/html5-logo-css.avif'
import pythonlogo from './assets/python-logo.avif'
// import phplogo from './assets/php-logo.svg'
import javalogo from './assets/java-logo.avif'
import awslogo from './assets/aws-logo.avif'
import nodejslogo from './assets/node-js-logo.avif'

const TechnologiesCard = () => {
  return (
    <>
     <div className='para1' style={{alignContent:"center",textAlign:"center" ,backgroundColor:"#dff0d1"}}>
        <h1>Technologies we use for web development and design</h1>
      <Row>
        <Col md={3}>
            <Figure>
                <Figure.Image src={htmllogo}></Figure.Image>
            </Figure>
        </Col>
        <Col md={3}>
            <Figure>
                <Figure.Image src={csslogo}></Figure.Image>
            </Figure>
        </Col>
        <Col md={3}>
            <Figure>
                <Figure.Image src={pythonlogo}></Figure.Image>
            </Figure>
        </Col>
        <Col md={3}>
        <Figure>
                <Figure.Image src={pythonlogo}></Figure.Image>
            </Figure>            
        </Col>
      </Row>
      <Row>
        <Col md={3}>
            <Figure>
                <Figure.Image src={javalogo}></Figure.Image>
            </Figure>
        </Col>
        <Col md={3}>
            <Figure>
                <Figure.Image src={awslogo}></Figure.Image>
            </Figure>
        </Col>
        <Col md={3}>
            <Figure>
                <Figure.Image src={nodejslogo}></Figure.Image>
            </Figure>
        </Col>
        <Col md={3}>
            <Figure>
                <Figure.Image src={htmllogo}></Figure.Image>
            </Figure>
        </Col>
      </Row>
    </div>
    </>
   
  )
}

export default TechnologiesCard
