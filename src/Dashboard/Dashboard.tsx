


import './Dashboard.css';

import Foot from './Footer';
import * as FaIcons from 'react-icons/fa';
import Home from './Home/Home';
import styled from 'styled-components';
import {Link } from 'react-router-dom';
import Car from './Car/Car';
import Contact from './Contact/Contact';

import { Suspense,lazy } from 'react';






export const Nav =styled.nav`
background:yellow;
height:80px;
//  margin-top:-80px;
display:flex;
justify-content: center;
align-items:center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
   transition:0.8s all ease;
}
`
export const NavbarContainer = styled.div`
display:flex;
justify-content:space-between;
height: 80px;
z-index: 1;
width:100%;
padding: 0 24px;
max-width:1100px;
`
export const NavLogo = styled(Link)`
color:black;
justify-self:flex-start;
cursor:pointer;
font-size:1.9rem;
display:flex;
align-items:center;
margin-left:24px;
font-weight: bold;
text-decoration: none;

`
export const NavMenu= styled.ul`
 display:flex;
 align-items:center;
 list-style:none;
 text-align: center;
 margin-right:-22px;

 @media screen and (max-width:768px){
    height:none;
 }
 `

 export const NavItem=styled.li`
  height:80px;
 `
 export const NavLinks = styled(Link)`
 color:black;
 display:flex;
 align-items:center;
 margin-top:30px;
 text-decoration:none;
 padding: 0 1rem;
 height;100%;
 cursor:pointer;

 &.active{
    border-bottom:3px solid #01bf71;
 }
 `
 export const NavBtn=styled.nav`
 display:flex;

 @media screen and (max-width:768px){
    display:none;
 }
 `
 export const NavBtnLink=styled(Link)`
 border-radius:50px;
 background:black;
 white-apace:nowrap;
 padding:14px 25px;
 height:50px;
 margin-top:15px;
 color:white;
 font-size:16px;
 outline:none;
 cursor:pointer;
 transition:all 0.2s ease-in-out;
 text-decoration:none;

 &:hover{
    transition:all 0.2s ease-in-out;
    background:#fff;
    color:#010606
 }
 `;

 const LazyComponent:any =lazy(()=>import('../Dashboard/About/About'));
 const Dashboard=()=> {
  return (
    <>
    
    <Nav>
        <NavbarContainer>
           <NavLogo to="/login">TreZzoH</NavLogo>
        
        <NavMenu>
            <NavItem>
                <NavLinks to='/'>Home</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/about'>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/car'>Available</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='/contact'>Contact</NavLinks>
            </NavItem>
            <NavBtn>
                <NavBtnLink to='logout'>Logout</NavBtnLink>
            </NavBtn>
        </NavMenu>
        
        </NavbarContainer>
    </Nav>
     
      <Home/>
      <Car/>
      <Contact/>
      <Suspense fallback={<div>Loading.....</div>}>
      <LazyComponent/>
      </Suspense>
     
      <footer>
      <Foot/>
      </footer>
     
    </>
    
  );
}
 

export default Dashboard;


 