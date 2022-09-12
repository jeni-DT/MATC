
import { Formik ,Form} from 'formik'
import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TextField } from '../../Admin/components/TextField';
import * as Yup from 'yup';
import { useLocation, useNavigate } from 'react-router-dom';
import '../pages/Edit.css'
import { useDispatch } from 'react-redux';
import { updateUser } from '../redux/Actions';
import { AppDispatch} from "../redux/Store";
import Dashboard from '../../Dashboard/Dashboard';

type datas={
    name ?: string,
    email?: string,
    phonenumber :number,
    Nopass :number,
    pickup ?:string,
    drop ?:string,
    date ?:string,
    time?:string,
    id?:number,
}
const Edit = () => {
    const navigate= useNavigate();
    const dispatch =useDispatch<AppDispatch>();
    const location:any =useLocation();
    const value=location.state;
    console.log("location:",value)
    

  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      phonenumber: Yup.number()
      // .min(10, 'Must be 10 numbers only')
      .required('Required'),
      Nopass: Yup.number()
      
      .required('Required'),
   pickup: Yup.string()
    
      .required('please enter your pickup address '),
    drop: Yup.string()
      
      .required('please enter your drop address'),
      date: Yup.date()
      
      .required('Date is required'),
      time: Yup.string()
      
      .required('Time is required'),
  })

  return (
  <div className='edit'>
    <Formik
      initialValues={{
        id:value.id,
        name: value.name,
        email: value.email,
         phonenumber: value.phonenumber,
         Nopass:value.Nopass,
         pickup:value.pickup,
         drop:value.drop,
         date:value.date,
         time:value.time
      }}
      validationSchema={validate}
      onSubmit={values => {
        
        dispatch(updateUser(values,values.id));
        navigate('/home');
        
      }}
    >
      {formik => (
        <div >
          <h1 className='form'>Update Form</h1>
          <Container>
          <Form>
          <Row>
               <Col  className='col-lg-6'>
               <TextField  name="name" type="text" placeholder=' your name'  className="inbox"/>
               <TextField  name="phonenumber" type="number" placeholder='Your phone'className="inbox"/>
               <TextField  name="pickup" type="text" placeholder="pick-up address" className="inbox" />
               <TextField  name="date" type="date" placeholder="dd/mm/yyyy" className="inbox"/>
               </Col>
                 <Col className='col-lg-6'>
                 <TextField  name="email" type="email" placeholder="Email Address" className="inbox"/>
                 <TextField name="Nopass" type="text" placeholder="No of passengers" className="inbox"/>
                 <TextField  name="drop" type="text" placeholder="Drop off address" className="inbox" />
                 <TextField  name="time" type="time" placeholder="Time" className="inbox"/>

                 </Col>
            </Row>
            <br/>
            <button className="btn btn-warning mt-5" type="submit" id='Edit'>Update</button>
            <br></br>
            <button className="btn btn-danger mt-4 ml-3" type="reset" id='reset'>Reset</button>
            
          </Form>
          </Container>
        </div>
      )}
    </Formik>
    </div>
   
  )
}

export default Edit