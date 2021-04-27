import React from 'react';
import styled from 'styled-components/macro';

const FormCheck = styled.div.attrs(() => ({
  className: 'form-check',
}))``;

const Label = styled.div.attrs(() => ({
  className: 'form-check-label text-muted',
}))``;

const CheckInput = styled.input.attrs(() => ({
  className: 'form-check-input',
  type: 'checkbox',
}))``;

const Tick = styled.i.attrs(() => ({
  className: 'input-helper',
}))``;

interface CheckBoxProps {
  label: string;
  isTick?: boolean;
  [key: string]: any;
}

const CheckBox = ({ label, isTick }: CheckBoxProps) => (
  <FormCheck>
    <Label>
      <CheckInput value={`${!!isTick}`} />
      {label}
      <Tick />
    </Label>
  </FormCheck>
);

export default CheckBox;
