import React from 'react';
import styled from 'styled-components/macro';

import Link from './Link';

const Wrapper = styled.div``;

const Button = styled.button``;

const Icon = styled.i``;

interface ButtonIconProps {
  icon: string;
  title?: string;
  [key: string]: any;
}

export const ButtonIcon = ({ icon, title }: ButtonIconProps) => (
  <Wrapper className="mb-2">
    <Button type="button" className="btn btn-block btn-facebook auth-form-btn">
      <Icon className={`mr-2 ${icon}`} />
      {title}
    </Button>
  </Wrapper>
);

interface ButtonLinkProps {
  link?: string;
  title?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const ButtonLink = ({
  link,
  title,
  onClick,
  ...rest
}: ButtonLinkProps) => (
  <Wrapper onClick={onClick} className="mt-3">
    <Link href={link || '#'} {...rest}>
      {title}
    </Link>
  </Wrapper>
);

interface ButtonFormProps {
  title?: string;
  onClick?: () => void;
  [key: string]: any;
}

export const ButtonForm = ({ title, onClick, ...rest }: ButtonFormProps) => (
  <Wrapper className="mt-3">
    <Button onClick={onClick} {...rest}>
      {title}
    </Button>
  </Wrapper>
);
