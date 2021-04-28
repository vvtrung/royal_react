import { createSelector } from 'reselect';

const selectUsers = state => state.user;

const makeSelectUsers = () =>
  createSelector(selectUsers, userState => ({ users: userState.users }));

export { makeSelectUsers, selectUsers };
