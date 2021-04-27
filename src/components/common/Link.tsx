import React, { ReactNode } from 'react';
import styled from 'styled-components/macro';

const A = styled.a.attrs(() => ({
  className: 'auth-link text-black',
}))``;

interface Props {
  href: string;
  children: ReactNode;
  [key: string]: any;
}

const Link = ({ href, children, ...rest }: Props) => (
  <A href={href} {...rest}>
    {children}
  </A>
);

export default Link;
