import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,

  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <h2>To Order the pizaa Book By calling 983-293-9238</h2>

      <br>
      </br>
      <h1>Location 521 granite dr drive, Toronto</h1>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Back</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;