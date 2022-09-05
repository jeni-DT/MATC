import React from 'react'
import { Login } from './Login';
import loginImg from '/home/dt/Documents/MATC/my-app/src/Admin/assets/login.jpg';


const LoginMain = () => {
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
      <img className="img-fluid w-100" src={loginImg} alt=""/>
      </div>
      <div className="col-md-7 my-auto">
        <Login/>
      </div>
    </div>
  </div>
  )
}

export default LoginMain