import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap,
  SidebarMenuItem,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to='about' onClick={toggle}>
            {" "}
            About
          </SidebarLink>
          <SidebarMenuItem to='/BusinessMain' onClick={toggle}>
            {" "}
            Business{" "}
          </SidebarMenuItem>
          <SidebarMenuItem to='/Business' onClick={toggle}>
            {" "}
            Check-In{" "}
          </SidebarMenuItem>
          <SidebarMenuItem to='/Register' onClick={toggle}>
            {" "}
            Sign Up{" "}
          </SidebarMenuItem>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to='/Login'>Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
