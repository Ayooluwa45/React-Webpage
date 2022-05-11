import React from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from "./StyledElement.jsx";
import { FaBars } from "react-icons/fa";

function NavBar({toggle}) {
  return (
    <>
      <Nav>
        <NavBarContainer>
          <NavLogo to="/">ProdigyDev</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover">Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" >Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">SignUp</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='signin'>Sign In</NavBtnLink>
          </NavBtn>
        </NavBarContainer>
      </Nav>
    </>
  );
}

export default NavBar;
