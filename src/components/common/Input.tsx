import React from 'react';
import styled from 'styled-components/macro';
import { useField } from 'formik';

import FormError from './FormError';

const FormGroup = styled.div``;

const Input = styled.input``;

interface InputProps {
  type: string;
  placeholder?: string;
  value?: any;
  name?: any;
  readonly?: any;
  disable?: any;
  className?: string;
  [key: string]: any;
}

const InputField = ({ type, name, placeholder, className }: InputProps) => {
  const [field, { touched, error }] = useField(name);
  return (
    <FormGroup className="form-group">
      <Input
        className={className}
        type={type}
        placeholder={placeholder || ''}
        {...field}
      />
      <FormError touched={touched} error={error} />
    </FormGroup>
  );
};

export default React.memo(InputField);
