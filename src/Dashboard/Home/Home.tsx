import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import View from '../../ReduxCrud/pages/View';


import './Home.css'




const Home = () => {
  const navigate = useNavigate();

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

            {/* <br />
            <div className="mb-2">
            <button type="button" className="btn btn-warning" id='Book'>Taxi</button>

            </div> */}
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