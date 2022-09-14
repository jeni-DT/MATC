import React from 'react'
import './Contact.css';
import * as IconName from "react-icons/md";
import styled from 'styled-components';
const Dot=styled.h1`
margin-left:90px;

@media screen and (max-width:600px){
  margin-left:90px;
}
`

const Con=styled.p`
color: black;
font-weight: bold;
font-size:40px;
@media screen and (max-width:600px){
  text-align:center;
  font-size:20px;
}

`
const Back=styled.body`
background-color: yellow;
background:cover;

@media screen and (max-width:600px){
  background:cover;
  text-align:center;
  font-size:20px;
}
`
const Make=styled.h1`
color: black;
font-family:Arial, Helvetica, sans-serif;
font-weight: bold;
margin-top: 20px;
font-size: 50px;

@media screen and (max-width:600px){
  color: black;
  font-family:Arial, Helvetica, sans-serif;
  font-weight: bold;
  margin-top: 20px;
  font-size: 25px;
}

`
const Conbtn=styled.a`
text-align: center;
    margin-top: 90px;
    margin-left: 65px;
    width: 20vw;
    height: 8vh;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size:20px;
    justify-content: center;

    @media screen and (max-width:600px){
    width:100px;
    height: 10vh;
    border-radius: 20px;
    background-color: black;
    color: white;
    font-weight: bold;
    font-size:8px;
    justify-content: center;
    }

`
const Contact = () => {
  return (
    <Back >
    <div className="container">
  
  <div className="row">
    <div className="col-8">
        <Dot>.</Dot>
        <Con>Make a call or fill form</Con>
        <Make>Just make a call and book us easily!</Make>
        <h3 className='phone'><i><b><IconName.MdPhone/>9025143828</b></i></h3>
    </div>
    <div className="col-4">
    <Conbtn href="/main" className="btn btn-primary d-flex  mx-auto" >Book Now</Conbtn>
    </div>
  </div>
</div>
</Back>
  )
}

export default Contact