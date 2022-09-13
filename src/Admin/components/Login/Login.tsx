import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import './Login.css'

import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField } from '../TextField';
import Foot from '../../../Dashboard/Footer';


export const Login = () => {
  const [error,setError]=useState('');
  const navigate= useNavigate();
  const adminData = localStorage.getItem("admin");
  console.log("data=======>",adminData)
  const validate = Yup.object().shape({
    
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={(values) => {
        if(adminData && adminData.length){
          const adminvalues= JSON.parse(adminData);
          console.log(adminvalues)
          const adminLogin = adminvalues.filter((value:any) =>{
            if(value.email === values.email && value.password === values.password && value.confirmPassword === values.confirmPassword){
              navigate('/')
            }
            else{
              setError('Invalid credentials')
             alert("Invalid credentials")
             
            }
          });
      }}}
     
      
      
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4" id='loginhead'>Login</h1>
          <Form>
           
            <TextField label="Email" name="email" type="email" className="label" />
            <TextField label="password" name="password" type="password" className="label"/>
            <TextField label="Confirm Password" name="confirmPassword" type="password" className="label" />
            <button className="btn btn-dark mt-2" type="submit" id='loginbtn'>Login</button>
            
            <button className="btn btn-danger mt-3 ml-3" type="reset" id='resetbtn'>Reset</button>
          </Form>
         
        </div>
        
      )}
      
    </Formik>
    
  )
  
}
