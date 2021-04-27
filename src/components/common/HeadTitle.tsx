import React from 'react';
import styled from 'styled-components/macro';

export const H1 = styled.h1`
  font-size: 2em;
  margin-bottom: 0.25em;
`;

export const H2 = styled.h2`
  font-size: 1.5em;
`;

export const H3 = props => <h3 {...props}>{props.children}</h3>;

export const H4 = props => <h4 {...props}>{props.children}</h4>;

export const H5 = props => <h5 {...props}>{props.children}</h5>;

export const H6 = props => <h6 {...props}>{props.children}</h6>;
