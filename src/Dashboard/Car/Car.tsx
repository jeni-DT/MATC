import React from 'react'
import './Car.css';
import styled from 'styled-components';

const Info =styled.p`
text-align: center;
    color: black;
    font-size: 10px;
`


const Car = () => {
  return (
    <>
    <h1 className='taxi'>TreZzoH</h1>
    <h1 className='taxiavil'>Taxis are available</h1>
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
<a href="/main" className="btn btn-primary" id='btnbook'>Book Taxi</a>
   
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
<a href="/main" className="btn btn-primary" id='btnbook'>Book Taxi</a>

   
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
<a href="/main" className="btn btn-primary" id='btnbook'>Book Taxi</a>
   
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
<a href="/main" className="btn btn-primary" id='btnbook'>Book Taxi</a>
   
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