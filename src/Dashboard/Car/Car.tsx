import React from 'react'
import './Car.css';

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
    <p className='info'>One-way trip rate/km----
Rs.13/Km</p>
<p className='info'>Round trip rate/km----
Rs.11/Km</p>
<p className='info'>Passengers----
4 persons</p>
<a href="/main" className="btn btn-primary" id='btnbook'>Book Taxi</a>
   
  </div>
</div>
    </div>
    <div className="col">
    <div className="card" style={{width:"15rem"}}>
  <img src="https://omdroptaxi.com/wp-content/uploads/sites/352/2021/10/Edi.png" className="card-img-top" alt="..."/>
   
  <div className="card-body"id='type'>
    <h5 className="card-title">Toyota Etios</h5>
    <p className='info'>One-way trip rate/km----Rs.14/Km</p>
<p className='info'>Round trip rate/km----Rs.12/Km</p>
<p className='info'>Passengers----4 persons</p>
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
    <p className='info'>One-way trip rate/km----Rs.18/Km</p>
<p className='info'>Round trip rate/km----Rs.16/Km</p>
<p className='info'>Passengers----6 persons</p>
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
    <p className='info'>One-way trip rate/km----Rs.20/Km</p>
<p className='info'>Round trip rate/km----Rs.18/Km</p>
<p className='info'>Passengers----8 persons</p>
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