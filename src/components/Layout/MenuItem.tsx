import React from 'react';

import { Img, Link } from '../common';

interface Props {
  title?: string;
  icon?: string;
  image?: any;
  wrapedClass?: any;
  linkClass?: any;
  path: string;
  [key: string]: any;
}

const MenuItem = ({
  title,
  icon,
  path,
  image,
  wrapedClass = '',
  linkClass = '',
}: Props) => (
  <li className={`nav-item ${wrapedClass}`}>
    <Link className={`nav-link ${linkClass}`} href={path}>
      {icon && <i className={`${icon} menu-icon`} />}
      {title && <span className="menu-title">{title}</span>}
      {image && <Img src={image} alt="" />}
    </Link>
  </li>
);

export default MenuItem;
