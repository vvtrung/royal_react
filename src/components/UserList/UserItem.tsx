import React from 'react';

import { User } from 'types';
import { Img } from 'components/common';

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => (
  <tr>
    <td className="py-1">
      <Img src={user.avatar} alt={user.name} />
    </td>
    <td>{user.name}</td>
    <td>{user.email}</td>
    <td>{user.phone}</td>
  </tr>
);

export default React.memo(UserItem);
