import React from 'react';
import styled from 'styled-components/macro';

interface Props {
  touched?: boolean;
  error?: string;
  [key: string]: any;
}

const ErrorMessage = styled.p`
  font-family: 'HiraUD W3';
  font-size: 0.875rem;
  padding: 5px 0 10px;
  color: ${p => p.theme.color.errorRed};
  transition: all 0.5s ease;
  max-width: 400px;
  line-height: 1.5;
`;

const FormError = ({ error, touched }: Props) => {
  const errorMessage = (touched && error) || '';
  return <ErrorMessage>{errorMessage}</ErrorMessage>;
};

export default FormError;
