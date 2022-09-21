import React from 'react';


import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import * as IconName from "react-icons/md";

export default function Foot() {
  return (
    <MDBFooter className='bg-dark text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        {/* © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
        <div className="container">
  <div className="row">
    <div className="col col-3">
    <h4>About us</h4>
            <ul>
               <p>TreZzoH drop taxi provides all types of taxi services in and around Tamil Nadu. TreZzoH drop taxi offers the safest 24/7 taxi service in a cheap & best packages.</p>
             
             </ul>
    </div>
    <div className="col col-3">
    <div className='footer-col'>
            <h4>get help</h4>
            <ul>
            <li><a href='#'>Home</a></li>
              <li><a href='#about'>About</a></li>
              <li><a href='#contact'>Contact</a></li>
              
            </ul>
          </div>
    </div>
    <div className="col col-3">
      
    <div className='footer-col'>
            <h4>Other links</h4>
            <ul>
            <li><a href='#bookform'>Booking form</a></li>
              <li><a href='#available'>Available</a></li>
             
            </ul>
          </div>
    </div>
    <div className="col col-3">
    <div className='footer-col'>
    <h4>Contact us</h4>
            <ul>
            <p>No: 86 Road Brooklyn Street, 600 New York, USA</p>
               <p><i><IconName.MdPhone/>+91 9842012345</i></p> 
            </ul>
          </div>
    </div>
  </div>
</div>
        
      </div>
    </MDBFooter>
    
  );
}