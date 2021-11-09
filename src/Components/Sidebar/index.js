import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SidebarMenuWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer onClick={toggle} isOpen={isOpen}>
      <Icon>
        <CloseIcon onClick={toggle}/>
      </Icon>
      <SidebarMenuWrapper>
      <SidebarMenu>
        <SidebarLink to="about" onClick={toggle}>
          About
        </SidebarLink>
        <SidebarLink to="discover" onClick={toggle}>
          Discover
        </SidebarLink>
        <SidebarLink to="services" onClick={toggle}>
          Services
        </SidebarLink>
        <SidebarLink to="signup" onClick={toggle}>
          Sign Up
        </SidebarLink>
      </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarMenuWrapper>
    </SidebarContainer>
  )
}

export default Sidebar;