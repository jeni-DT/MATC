import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements';


const Navbar = () => {
  return (
    <>
    <Nav>
        <NavbarContainer>
           <NavLogo to="#">TreZzoH</NavLogo>
        <MobileIcon>
        <FaIcons.FaBars/>
        </MobileIcon>
        <NavMenu>
            <NavItem>
                <NavLinks to='about'>About</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='discover'>Discover</NavLinks>
            </NavItem>
            <NavItem>
                <NavLinks to='home'>Home</NavLinks>
            </NavItem>
            <NavBtn>
                <NavBtnLink to='/main'>SignUp</NavBtnLink>
            </NavBtn>
        </NavMenu>
        
        </NavbarContainer>
    </Nav>
    </>
  )
}

export default Navbar