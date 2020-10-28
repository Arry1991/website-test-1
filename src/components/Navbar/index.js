import React from "react";
import { FaBars } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import {
  NavMenuItem,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>Home</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to='about'>Covid-19</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='discover'>Map</NavLinks>
            </NavItem>
            <NavItem>
              <NavMenuItem to='/Business'>Business</NavMenuItem>
            </NavItem>
            <NavItem>
              <NavMenuItem to='/Register'>Sign Up</NavMenuItem>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/Login'>Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
