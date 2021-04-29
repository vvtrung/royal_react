import { User } from 'types';

import reducer, { initialState } from '../reducer';
import { saveUsers } from '../actions';

describe('User reducer', () => {
  it('should return initialState', () => {
    expect(reducer(undefined, {})).toMatchObject(initialState);
  });

  it('should save users data', () => {
    const users: User[] = [
      { id: '1', name: 'name', email: 'email@gmail.com', avatar: 'avatar' },
      { id: '2', name: 'name2', email: 'email2@gmail.com', avatar: 'avatar2' },
      { id: '3', name: 'name3', email: 'email3@gmail.com', avatar: 'avatar3' },
    ];
    const action = saveUsers(users);
    expect(reducer(initialState, action)).toMatchObject({ users });
  });
});
