import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import './Login.css'
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { TextField } from '../TextField';
import createAxios from '../../../Axios/Index';


interface items {
  id: number,
  email: string,
  password: string,
  confirmpassword: string
}


export const Login = () => {
  const [error, setError] = useState('');

  const navigate = useNavigate();
  const adminData = localStorage.getItem("admin");
  console.log("data=======>", adminData)
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
      onSubmit={(data) => {
        if (adminData && adminData.length) {
          const adminvalues = JSON.parse(adminData);

          const adminLogin = adminvalues.filter((datas: items) => {
            console.log("admin login",adminLogin)
            if (datas.email === data.email && datas.password === data.password) {
              {

                createAxios
                  .post("/auth/login", { email: data.email, password: data.password })
                  .then((response) => {
                    console.log("responsedata", response);
                    if (response?.data?.status === "Success") {
                      localStorage.setItem("access_token", response.data.token);
                      localStorage.setItem(
                        "refresh_token",
                        response.data.refreshToken
                      );
                      navigate("/");
                    } else {
                      alert("Login Failed");
                    }
                  })
                  .catch((err) => console.error(err.message));
              }
            }
            else {
              setError('Invalid credentials')
              alert("Invalid credentials")

            }
          });
        }
      }}



    >
      {/* {formik => ( */}
        <div>
          <h1 className="my-4 font-weight-bold .display-4" id='loginhead'>Login</h1>
          <Form>

            <TextField label="Email" name="email" type="email"className="form-control"
              placeholder="Enter your Email" data-testId="email" />
            <TextField label="password" name="password" type="password" data-testId="password" className="form-control" placeholder="Enter your Password" />
            <TextField label="Confirm Password" name="confirmPassword" data-testId="confirmPassword" type="password" className="form-control" placeholder="Enter your ConfirmPasword" />
            <button className="btn btn-dark mt-2" type="submit" id='loginbtn'>Login</button>

            <button className="btn btn-danger mt-3 ml-3" type="reset" id='resetbtn'>Reset</button>
          </Form>

        </div>

      {/* )} */}

    </Formik>

  )

}
