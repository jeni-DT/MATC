import React from 'react';
import { Formik, Form } from 'formik';
import "./Signup.css";
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import { TextField } from '../TextField';
import Main from './Main';
import createAxios from '../../../Axios/Index';





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
        // localStorage.setItem("admin",JSON.stringify([values]));
        // navigate('/login');
        const admin = localStorage.getItem("admin");
        console.log("values",values)
        localStorage.setItem("admin", JSON.stringify([values]));
        const {firstName,lastName,email,password,confirmPassword} = values;
        createAxios
        .post("/auth/signup", { email, password})
        .then((responce) => {
          if (responce.status === 201) {
            navigate("/login");
          } else {
            alert("Failed To register User");
          }
        })
        .catch((error) => console.error(error.message));
        navigate("/login");
        
      }}
    >
      {formik => (
        <div>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Form>
            <TextField label="First Name" name="firstName" type="text"    placHolder="Enter your FirstName" data-testid="firstName"/>
            <TextField label="last Name" name="lastName" type="text" placHolder="Enter your LastName"data-testId="lastName"/>
            <TextField label="Email" name="email" placHolder="Enter your Email" type="email" data-testId="email" />
            <TextField label="password" name="password" type="password" placHolder="Enter your Password" data-testId="password"/>
            <TextField label="Confirm Password" name="confirmPassword" placHolder="Enter your ConfirmPassword"type="password" data-testId="confirmPassword"/>
            <button className="btn btn-dark mt-2" type="submit" id='reg'>Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset" id='reset'>Reset</button>
            <p className="mt-3 text-center">
                Admin SignUp <Link to="/login">SignIn here..</Link>
              </p>
          </Form>
        </div>
      )}
    </Formik>
  )
}
