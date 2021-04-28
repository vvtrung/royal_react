import React, { useEffect } from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import UserListComponent from 'components/UserList';
import { User } from 'types';

import { makeSelectUsers } from './selectors';
import { getUsers } from './actions';

interface Props {
  getUsers: () => void;
  users: User[];
  [key: string]: any;
}

const UserListContainer = ({ getUsers, users, ...rest }: Props) => {
  useEffect(() => {
    getUsers();
  }, []);

  return <UserListComponent {...rest} users={users} />;
};

export default compose(connect(makeSelectUsers, { getUsers }))(
  UserListContainer,
);
