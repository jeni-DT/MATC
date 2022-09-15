


import './Dashboard.css';

import Foot from './Footer';
import * as FaIcons from 'react-icons/fa';
import Home from './Home/Home';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import Car from './Car/Car';
import Contact from './Contact/Contact';

import { Suspense,lazy, useEffect, useState } from 'react';
import About from './About/About';
import Navbar from '../components/Navbar';
import Nav from './Nav';
import createAxios from '../Axios/Index';
import axios from 'axios';
// import Navbar from '../Admin/Navbar/Index';

 const Dashboard=()=> {
  const [first, setFirst] = useState([])
  useEffect(() => {
  createAxios
      .get("/auth/employees",)
      .then((response) => {
        setFirst(response?.data?.data?.employees);
      })
      .catch((err) => console.error(err.message));
  }, []);
  return (
    <>
    
  
    <Nav/>
    
    {/* <Navbar/> */}
    
      <Home/>
      <Car/>
      <Contact/>
     <About/>
     
      <footer>
      <Foot/>
      </footer>
     
    </>
    
  );
}
 

export default Dashboard;


 