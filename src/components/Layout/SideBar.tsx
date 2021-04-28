import React from 'react';
import styled from 'styled-components/macro';

import MenuItem from './MenuItem';

const Nav = styled.nav``;

const SideBar = () => (
  <Nav className="sidebar sidebar-offcanvas" id="sidebar">
    <ul className="nav">
      <MenuItem icon="ti-shield" path="/" title="Dashboard" />
      <MenuItem icon="ti-shield" path="/users" title="Users" />
    </ul>
  </Nav>
);

export default SideBar;
