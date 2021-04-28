import React from 'react';
import styled from 'styled-components/macro';

import { Img, Link } from 'components/common';
import { LogoMini, LogoApp } from 'styles/images';

const Container = styled.div``;

const NavBrand = () => (
  <Container className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
    <Link className="navbar-brand brand-logo mr-5" href="/">
      <Img src={LogoApp} className="mr-2" alt="logo" />
    </Link>
    <Link className="navbar-brand brand-logo-mini" href="/">
      <Img src={LogoMini} alt="logo" />
    </Link>
  </Container>
);

export default NavBrand;
