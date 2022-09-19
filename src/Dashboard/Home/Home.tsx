import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import View from '../../ReduxCrud/pages/View';
import styled from 'styled-components';

import './Home.css'


const Content =styled.p`
text-align: center;
color: white;
font-family: Arial, Helvetica, sans-serif;
font-weight: bold;
margin-top: 50px;
font-size: 90px;

@media screen and (max-width:600px){
  text-align: center;
  color: white;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 100px;
  font-size: 60px;
  }
`

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/view')


  }
  return (
    <div className='body' id='home'>
      <Container>
        <Row>
          <Col md={6}>
            <div className='contant'>
              <Content>Let's Go out with TreZzoH  
            </Content>
           
            </div>
            <br/>
            <br/>

            {/* <br />
            <div className="mb-2">
            <button type="button" className="btn btn-warning" id='Book'>Taxi</button>

            </div> */}
          </Col>
          <Col md={6}>
            <View/>
          </Col>
        </Row>
      </Container>
    </div>
    
  )
}

export default Home