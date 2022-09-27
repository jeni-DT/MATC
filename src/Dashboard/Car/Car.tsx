import React, { useCallback, useMemo, useState } from 'react'
import './Car.css';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FcLike } from "react-icons/fc";



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
    <div className="card" style={{width:"15rem", height:"23rem"}}>
   
     
  <img src="data:image/jpeg;base64,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" className="card-img-top" alt="..."/>
  
 
  <div className="card-body"id='type'>
    
    <h5 className="card-title">Suzuki Dzire</h5>
    <Info>One-way trip rate/km----
Rs.13/Km</Info>
<Info>Round trip rate/km----
Rs.11/Km</Info>
<Info>Passengers----
4 persons</Info>

{/* <a href='#bookform'><button id='btnbook'>Book Taxi</button></a> */}
<button id='btnbook'onClick={clickOver}>Book Taxi</button>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"15rem", height:"23rem"}}>
     
  <img src="https://www.cartoq.com/wp-content/uploads/2012/07/toyota-etios-sedan.jpg" className="card-img-top" alt="..."/>
   
  <div className="card-body"id='type'>
    <h5 className="card-title">Toyota Etios</h5>
    <Info>One-way trip rate/km----Rs.14/Km</Info>
<Info>Round trip rate/km----Rs.12/Km</Info>
<Info>Passengers----4 persons</Info><br/>
<button id='btnbook'onClick={clickOver}>Book Taxi</button>

   
  </div>
</div>
    </div>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="container" >
  <div className="row">
    <div className="col">
    <div className="card" style={{width:"15rem", height:"23rem"}}>
   
  <img src="https://5.imimg.com/data5/AO/SU/GLADMIN-67875624/mahindra-xylo-car-500x500.jpg" className="card-img-top" alt="..."/>
   
  <div className="card-body"id='type'>
    <h5 className="card-title">Mahendra Xylo</h5>
    <Info>One-way trip rate/km----Rs.18/Km</Info>
<Info>Round trip rate/km----Rs.16/Km</Info>
<Info>Passengers----6 persons</Info>

<button id='btnbook'onClick={clickOver}>Book Taxi</button>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"15rem", height:"23rem"}}>
   
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw8U7Xk7gSOnKUVhOPAhe3eXnWujbxVRTy0A&usqp=CAU" className="card-img-top" alt="..."/>
   
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