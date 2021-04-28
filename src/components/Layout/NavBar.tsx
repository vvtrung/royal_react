import React from 'react';

import { AvatarDefault } from 'styles/images';

import NavBrand from './NavBrand';
import MenuItem from './MenuItem';
import { Button } from '../common';

const NavBar = () => (
  <nav className="navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
    <NavBrand />
    <div className="navbar-menu-wrapper d-flex align-items-center justify-content-end">
      <Button
        className="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
      >
        <span className="ti-view-list"></span>
      </Button>
      <ul className="navbar-nav navbar-nav-right">
        <MenuItem
          wrapedClass="dropdown mr-1"
          linkClass="count-indicator dropdown-toggle d-flex justify-content-center align-items-center"
          path="#"
          icon="ti-email"
        />
        <MenuItem
          wrapedClass="dropdown"
          linkClass="nav-link count-indicator dropdown-toggle"
          path="#"
          icon="ti-bell"
        />
        <MenuItem
          wrapedClass="nav-profile dropdown"
          linkClass="nav-link dropdown-toggle"
          path="#"
          image={AvatarDefault}
        />
      </ul>
    </div>
  </nav>
);

export default NavBar;
