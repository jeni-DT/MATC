import React, { useCallback, useMemo, useState } from 'react'
import './Car.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";
import { GoThumbsdown } from "react-icons/go";
import { useDispatch } from 'react-redux';
import { AppDispatch} from '../../ReduxCrud/redux/Store';

const Info =styled.p`
text-align: center;
    color: black;
    font-size: 10px;
`
const Like =styled.div`

text-align: center;
`
const Likes= styled.p`
text-align: center;
color:black;
font-size:15px; 
`

const Car = () => {
  const navigate=useNavigate();
  const[count,setCount]=useState(0);


 const calculation = useMemo(() => expensiveCalculation(count), [count]);
 const handleClick=useCallback(()=>{
  setCount((c) => c + 1);
},[])




  const clickOver=useCallback(()=>{
  
navigate('/main')
  },[])
  return (
    <>
   <div id='available'>
    <h1 className='taxi'>TreZzoH</h1>
    <Likes>Likes :{count}</Likes>
    <Like> <button type="button" className="btn btn-info" onClick={handleClick}> 
     <FcLike onClick={handleClick} ></FcLike>{calculation}
      </button></Like>
    <h1 className='taxiavil'>Taxis available for Rend</h1>
    <div className='container'>
  <div className="row">
    <div className="col">
    <div className="container">
  <div className="row">
    <div className="col">
    <div className="card" style={{width:"15rem"}}>
   
     
  <img src="https://omdroptaxi.com/wp-content/uploads/sites/352/2021/10/2.png" className="card-img-top" alt="..."/>
  
 
  <div className="card-body"id='type'>
    <h5 className="card-title">Suzuki Dzire</h5>
    <Info>One-way trip rate/km----
Rs.13/Km</Info>
<Info>Round trip rate/km----
Rs.11/Km</Info>
<Info>Passengers----
4 persons</Info>
<button id='btnbook'onClick={clickOver}>Book Taxi</button>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"15rem"}}>
     
  <img src="https://omdroptaxi.com/wp-content/uploads/sites/352/2021/10/Edi.png" className="card-img-top" alt="..."/>
   
  <div className="card-body"id='type'>
    <h5 className="card-title">Toyota Etios</h5>
    <Info>One-way trip rate/km----Rs.14/Km</Info>
<Info>Round trip rate/km----Rs.12/Km</Info>
<Info>Passengers----4 persons</Info>
<button id='btnbook'onClick={clickOver}>Book Taxi</button>

   
  </div>
</div>
    </div>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="container">
  <div className="row">
    <div className="col">
    <div className="card" style={{width:"15rem"}}>
   
  <img src="https://omdroptaxi.com/wp-content/uploads/sites/352/2021/10/1.png" className="card-img-top" alt="..."/>
   
  <div className="card-body"id='type'>
    <h5 className="card-title">Mahendra Xylo</h5>
    <Info>One-way trip rate/km----Rs.18/Km</Info>
<Info>Round trip rate/km----Rs.16/Km</Info>
<Info>Passengers----6 persons</Info>
<br/>
<button id='btnbook'onClick={clickOver}>Book Taxi</button>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"15rem"}}>
   
  <img src="https://omdroptaxi.com/wp-content/uploads/sites/352/2021/10/innova.png" className="card-img-top" alt="..."/>
   
  <div className="card-body"id='type'>
    <h5 className="card-title">Toyota Innova</h5>
    <Info>One-way trip rate/km----Rs.20/Km</Info>
<Info>Round trip rate/km----Rs.18/Km</Info>
<Info>Passengers----8 persons</Info>
<button id='btnbook'onClick={clickOver}>Book Taxi</button>
   
  </div>
</div>
    </div>
   
  </div>
</div>
    </div>
    
  </div>
</div>
</div>
    </>
  )
}

export default Car
const expensiveCalculation = (num:number) => {
  console.log("Calculating...");
  for (let i = 0; i <0 ; i++) {
    num += 1;
  }
  return num;
};