import React from 'react'
import {Container,Row,Col, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import View from '../../ReduxCrud/pages/View';
import './Home.css'

const Home = () => {
    const navigate= useNavigate();
    const handleClick =()=>{
        navigate('/view')
  

    }
  return (
  
    <div className='body'>
         <Container>
      <Row>
        <Col>
        <h1 className='content'>Let's Go out with TreZzoH  drop taxi
        </h1>
        <br/>
        <Button variant="warning" className='Book   '>Book Taxi</Button>{' '}

        </Col>
        <Col>
        <View/>
        </Col>
      </Row>
      
    </Container>
    </div>
  )
}

export default Home