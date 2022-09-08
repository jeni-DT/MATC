
import { Formik ,Form} from 'formik'
import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { TextField } from '../../Admin/components/TextField';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import '../pages/View.css'
const View = () => {
    const navigate= useNavigate();
  const validate = Yup.object({
    name: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
  
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
      phonenumber: Yup.number()
      .max(10, 'Must be 10 numbers only')
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
    <Formik
      initialValues={{
        name: '',
        email: '',
        phonenumber: '',
        Nopass:'',
        pickup:'',
        drop:'',
        date:'',
        time:''
      }}
      validationSchema={validate}
      onSubmit={values => {
        // localStorage.setItem("admin",JSON.stringify([values]));
        navigate('/');
        
      }}
    >
      {formik => (
        <div>
          <h1 className='form'>Booking Form</h1>
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
            <button className="btn btn-warning mt-2" type="submit" id='reg'>Book Now</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset" id='reset'>Reset</button>
            
          </Form>
          </Container>
        </div>
      )}
    </Formik>
    // <div>
    //     <Container>
    //        
    //     </Container>
    // </div>
  )
}

export default View