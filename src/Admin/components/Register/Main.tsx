import React from 'react'
import rocketImg from '/home/dt/Documents/MATC/my-app/src/Admin/assets/rocket.png'
import { Signup } from './Signup'
import "./Signup.css";

const Main = () => {
  return (
    <div className="container mt-3">
    <div className="row">
      <div className="col-md-5">
        <Signup />
      </div>
      <div className="col-md-7 my-auto">
        <img className="img-fluid w-100" src={rocketImg} alt=""/>
      </div>
    </div>
  </div>
  )
}

export default Main