import React from 'react';
import styled from 'styled-components/macro';

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

const InputField = ({
  type,
  name,
  placeholder,
  className,
  ...rest
}: InputProps) => (
  <FormGroup className="form-group">
    <Input
      className={className}
      type={type}
      name={name}
      placeholder={placeholder || ''}
      {...rest}
    />
  </FormGroup>
);

export default InputField;
