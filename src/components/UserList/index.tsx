import React from 'react';

import { User } from 'types';

import UserItem from './UserItem';

interface Props {
  users: User[];
}

const UserList = ({ users = [] }: Props) => (
  <div className="col-lg-12 grid-margin stretch-card">
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">User List</h4>
        <div className="table-responsive">
          <table className="table table-striped">
            <thead>
              <tr>
                <th>User</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user: User) => (
                <UserItem user={user} key={user.id} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default UserList;
