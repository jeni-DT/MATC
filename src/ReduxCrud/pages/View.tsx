import React from 'react';
import { Formik, Form } from 'formik'
import { Col, Row, Form as RForm } from 'react-bootstrap'
import { TextField } from '../../Admin/components/TextField';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import './View.css'
import { addUsers } from '../redux/Actions';
import { AppDispatch } from "../redux/Store";
import { useDispatch } from 'react-redux';
const View = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

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
    <Formik
      initialValues={{
        name: '',
        email: '',
        phonenumber: '',
        Nopass: '',
        pickup: '',
        drop: '',
        date: '',
        time: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log("values", values);
        dispatch(addUsers(values))
        navigate('/home');

      }}
    >
      {formik => (
        <div id='bookform'>
          <h1 className='form'>Booking Form</h1>

          <Form>
            <Row className="mb-3">
              <Col className='col-lg-6'>
                <RForm.Group controlId="validationCustom01">


                  <TextField name="name" type="text" placeholder='your name' className="form-control" data-testId="name" />
                </RForm.Group>
                <RForm.Group controlId="validationCustom01">
                  <TextField name="phonenumber" type="number" placeholder='Your phone' className="form-control" data-testId="phonenumber" />
                </RForm.Group>


                <RForm.Group controlId="validationCustom01">
                  <TextField name="pickup" type="text" placeholder="pick-up address" className="form-control" data-testId="pickup" />
                </RForm.Group>
                <RForm.Group controlId="validationCustom01">
                  <TextField name="date" type="date" placeholder="dd/mm/yyyy" className="form-control" data-testId="date" />
                </RForm.Group>
              </Col>
              <Col className='col-lg-6'>


                <RForm.Group controlId="validationCustom01">

                  <TextField name="email" type="email" placeholder="Email Address" className="form-control" data-testId="email" /></RForm.Group>
                <RForm.Group controlId="validationCustom01">

                  <TextField name="Nopass" type="text" placeholder="No of passengers" className="form-control" data-testId="nopass" /></RForm.Group>

                <RForm.Group controlId="validationCustom01">
                  <TextField name="drop" type="text" placeholder="Drop off address" className="form-control" data-testId="drop" /></RForm.Group>
                <RForm.Group controlId="validationCustom01">
                  <TextField name="time" type="time" placeholder="Time" className="form-control" data-testId="time" /></RForm.Group>
              </Col>
              <br />


              <div className="mb-5">

                <button className="btn btn-warning mt-4" type="submit" id='reg'>Book Now</button>
                <button className="btn btn-danger mt-4 ml-10" type="reset" id='reset'>Reset</button>
              </div>

            </Row>
          </Form>




        </div>

      )
      }
    </Formik >

  )
}

export default View







// import React, { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';
// import Row from 'react-bootstrap/Row';

// function View() {
//   const [validated, setValidated] = useState(false);

//   const handleSubmit = (event:any) => {
//     const form = event.currentTarget;
//     if (form.checkValidity() === false) {
//       event.preventDefault();
//       event.stopPropagation();
//     }

//     setValidated(true);
//   };

//   return (
//     <Form noValidate validated={validated} onSubmit={handleSubmit}>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="4" controlId="validationCustom01">
//           <h1>BOOK FORM</h1>
//           <Form.Label>First name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="First name"
//             defaultValue="Mark"
//             name="name" type="text" placeholder='your name'
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustom02">
//           <Form.Label>Last name</Form.Label>
//           <Form.Control
//             required
//             type="text"
//             placeholder="Last name"
//             defaultValue="Otto"
//           />
//           <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="4" controlId="validationCustomUsername">
//           <Form.Label>Username</Form.Label>
//           <InputGroup hasValidation>
//             <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
//             <Form.Control
//               type="text"
//               placeholder="Username"
//               aria-describedby="inputGroupPrepend"
//               required
//             />
//             <Form.Control.Feedback type="invalid">
//               Please choose a username.
//             </Form.Control.Feedback>
//           </InputGroup>
//         </Form.Group>
//       </Row>
//       <Row className="mb-3">
//         <Form.Group as={Col} md="6" controlId="validationCustom03">
//           <Form.Label>City</Form.Label>
//           <Form.Control type="text" placeholder="City" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid city.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom04">
//           <Form.Label>State</Form.Label>
//           <Form.Control type="text" placeholder="State" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid state.
//           </Form.Control.Feedback>
//         </Form.Group>
//         <Form.Group as={Col} md="3" controlId="validationCustom05">
//           <Form.Label>Zip</Form.Label>
//           <Form.Control type="text" placeholder="Zip" required />
//           <Form.Control.Feedback type="invalid">
//             Please provide a valid zip.
//           </Form.Control.Feedback>
//         </Form.Group>
//       </Row>
//       <Form.Group className="mb-3">
//         <Form.Check
//           required
//           label="Agree to terms and conditions"
//           feedback="You must agree before submitting."
//           feedbackType="invalid"
//         />
//       </Form.Group>
//       <Button type="submit">Submit form</Button>
//     </Form>
//   );
// }

// export default  View;