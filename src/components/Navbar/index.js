import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>Pizza Pizza</NavLink>
        <NavIcon onClick={toggle}>
          <p>Contact</p>
          <Bars />
          
        </NavIcon>
        
      </Nav>
    </>
  );
};

export default Navbar;