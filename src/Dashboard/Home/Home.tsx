import React from 'react'
import {Row,Container, Col } from 'react-bootstrap';

import View from '../../ReduxCrud/pages/View';


import './Home.css'




const Home = () => {
 

  return (
    <div className='body' id='home'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='contant'>
              <p className='paragraph'>Lets Go out with TreZzoH</p>

            </div>
            <br />
            <br />

            <br />
            <div className="mb-2">
              <a href='/feedback'>
            <button type="button" className="btn btn-warning" id='Book'>Give Feedback</button>
            </a>
            </div>
          </Col>
          <Col md={6}>
            <View />
          </Col>
        </Row>
      </Container>
    </div>

  )
}

export default Home