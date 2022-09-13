import React from 'react'
import './Contact.css';
import * as IconName from "react-icons/md";

const Contact = () => {
  return (
    <body id='contact'>
    <div className="container">
  
  <div className="row">
    <div className="col-8">
        <h1>.</h1>
        <p className='con' >Make a call or fill form</p>
        <h1 className='make'>Just make a call and book us easily!</h1>
        <h3 className='phone'><i><b><IconName.MdPhone/>9025143828</b></i></h3>
    </div>
    <div className="col-4">
    <a href="/main" className="btn btn-primary" id='conbtn'>Book Now</a>
    </div>
  </div>
</div>
</body>
  )
}

export default Contact