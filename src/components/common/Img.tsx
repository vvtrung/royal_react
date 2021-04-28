import React from 'react';

interface Props {
  src: string;
  alt: string;
  [key: string]: any;
}

const Img = ({ src, alt, ...rest }: Props) => (
  <img src={src} alt={alt} {...rest} />
);

export default Img;
