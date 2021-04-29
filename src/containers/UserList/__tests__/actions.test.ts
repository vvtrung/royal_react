import { User } from 'types';

import { getUsers, saveUsers } from '../actions';

describe('User Actions', () => {
  it('should create getUsers action', () => {
    expect(getUsers()).toMatchSnapshot();
  });

  it('should create saveUsers action', () => {
    const users: User[] = [
      { id: '1', name: 'name', email: 'email@gmail.com', avatar: 'avatar' },
      { id: '2', name: 'name2', email: 'email2@gmail.com', avatar: 'avatar2' },
      { id: '3', name: 'name3', email: 'email3@gmail.com', avatar: 'avatar3' },
    ];
    expect(saveUsers(users)).toMatchSnapshot();
  });
});
