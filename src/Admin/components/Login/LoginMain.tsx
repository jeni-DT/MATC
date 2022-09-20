import React from 'react'
import { Login } from './Login';
import LoginImg from '/home/dt/Documents/MATC/my-app/src/Admin/assets/Login.jpg';
import './Login.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



const LoginMain = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container >
          <Navbar.Brand href="/" className='head'>TreZZoH</Navbar.Brand>
          <Nav className="header">
            <Nav.Link href="/login">Login</Nav.Link>
            <Nav.Link href="/menu">SignUp</Nav.Link>

          </Nav>

        </Container >
      </Navbar>
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-6" id='loginimg'>
            <img className="img-fluid w-100" src={LoginImg} alt="" />
          </div>
          <div className="col-md-6 my-auto">
            <Login />
          </div>
        </div>
      </div>
      {/* <Foot/> */}
    </div>
  )
}

export default LoginMain