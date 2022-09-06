import React from 'react';
import { Formik, Form } from 'formik';
import "./Signup.css";
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField } from '../TextField';
import Main from './Main';



export const Signup = () => {
 
  const navigate= useNavigate();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
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
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        localStorage.setItem("admin",JSON.stringify([values]));
        navigate('/login');
        
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text" />
            <TextField label="last Name" name="lastName" type="text" />
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
