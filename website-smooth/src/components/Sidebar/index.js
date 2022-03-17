import React from 'react'
import { SidebarContainer, 
         Icon,
         CloseIcon, 
         SidebarWrapper, 
         SidebarMenu, 
         SidebarLink, 
         SidebarBtnWrap, 
         SidebarRoute  
        } from './SidebarElement';

const Sidebar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">
              Sobre
            </SidebarLink>
            <SidebarLink to="discover">
              Discover
            </SidebarLink>
            <SidebarLink to="services">
              Services
            </SidebarLink>
            <SidebarLink to="signup">
              Sign Up
            </SidebarLink>
          </SidebarMenu>
          <SidebarBtnWrap>
            <SidebarRoute to="/signin">Sign Up</SidebarRoute>
          </SidebarBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar

