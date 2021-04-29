import { makeSelectUsers } from '../selectors';

const stateTree = {
  user: {
    users: [
      { id: '1', name: 'name', email: 'email@gmail.com', avatar: 'avatar' },
      { id: '2', name: 'name2', email: 'email2@gmail.com', avatar: 'avatar2' },
      { id: '3', name: 'name3', email: 'email3@gmail.com', avatar: 'avatar3' },
    ],
  },
};

describe('User Selector', () => {
  it('should select users', () => {
    const users = makeSelectUsers(stateTree);
    expect(users).toMatchObject({ users: stateTree.user.users });
  });
});
