


import './Dashboard.css';

import Foot from './Footer';
import * as FaIcons from 'react-icons/fa';
import Home from './Home/Home';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import Car from './Car/Car';
import Contact from './Contact/Contact';

import { Suspense,lazy } from 'react';
import About from './About/About';
import Navbar from '../components/Navbar';
import Nav from './Nav';
// import Navbar from '../Admin/Navbar/Index';

 const Dashboard=()=> {
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


 