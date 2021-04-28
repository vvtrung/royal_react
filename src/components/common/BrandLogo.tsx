import React from 'react';
import styled from 'styled-components/macro';

import { LogoApp } from 'styles/images';

const BrandWraper = styled.div.attrs(() => ({
  className: 'brand-logo',
}))``;

const Logo = styled.img.attrs(() => ({
  src: LogoApp,
}))``;

const BrandLogo = () => (
  <BrandWraper>
    <Logo />
  </BrandWraper>
);

export default BrandLogo;
