import React, { useState } from 'react';
import { Formik, Form } from 'formik';

import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField } from '../TextField';


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
              navigate('/main')
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
          <h1 className="my-4 font-weight-bold .display-4">Login</h1>
          <Form>
           
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <TextField label="Confirm Password" name="confirmPassword" type="password" />
            <button className="btn btn-dark mt-2" type="submit" id='reg'>Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset" id='reset'>Reset</button>
          </Form>
        </div>
      )}
    </Formik>
  )
}
