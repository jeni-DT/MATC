import React, { useEffect, useRef } from 'react'
import './About.css';
import * as IconName from "react-icons/md";

const About = () => {
  const paraRef = useRef<null | HTMLParagraphElement>(null)
  const handleClick =()=>{
            console.log("hello")
            console.log(paraRef.current);
           alert(paraRef.current?.innerHTML);
          
        }
        
  useEffect(() => {
    console.log("....",paraRef.current?.innerHTML) 
  })
  return (
    <>
    <h1 className='dot'>.</h1>
    <h5 className='mini'>
Welcome to RreZzoh drop taxi</h5>
<h1 className='slogo'>Your first choice</h1>
<h1  className='slogo'>for traveling anywhere in India</h1>
<div className="container">
  <div className="row">
    <div className="col">
    <img className="img-fluid w-100" src="https://omdroptaxi.com/wp-content/uploads/sites/352/2021/10/0taxi.jpg" alt=""/>
    </div>
    <div className="col">
     <mark><p ref={paraRef} style={{color:"red"}} className="con"> TreZzoh</p></mark> 
    <h4 className='about'>We’re specialized in providing a safest taxi service</h4>
    <br/>
    <p className='information'> TreZzoH taxi is a leading Taxi service provider in Tamil Nadu.  We have different kinds of cars such as hatchback, Sedan, Suvs, XUV, for your local & outstation trips. OM drop taxi is one of the customer-friendly taxi services companies in Tamilnadu to provide the cars A/C, Non A/C. Our drivers are very experienced & professional.</p>
    <br/>
    <button onClick={handleClick} className="ref" style={{width:"100px"}}>Click me</button>
    <h3 className='phone'><i><b><IconName.MdPhone/>9025143828</b></i></h3>
    </div>
  </div>
  
</div>
    </>
  ) 
}

export default About