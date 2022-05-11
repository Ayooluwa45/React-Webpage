import React from "react";
import {
  SideBarContainer,
  Icon,
  CloseIcon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  SideBtnRoute,
} from "./SideBarElements.js";

function SideBar({toggle, isOpen}) {
  return (
    <>
      <SideBarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle} >
          <CloseIcon />
        </Icon>
        <SideBarWrapper>
          <SideBarMenu>
            <SideBarLink to="about" onClick={toggle}>About</SideBarLink>
            <SideBarLink to="discover" onClick={toggle}>Discover</SideBarLink>
            <SideBarLink to="services" onClick={toggle}>Services</SideBarLink>
            <SideBarLink to="signup" onClick={toggle}>Sign Up</SideBarLink>
          </SideBarMenu>
          
          <SideBtnWrap>
            <SideBtnRoute to="/signin">Sign In</SideBtnRoute>
          </SideBtnWrap>
        </SideBarWrapper>
      </SideBarContainer>
    </>
  );
}

export default SideBar;
