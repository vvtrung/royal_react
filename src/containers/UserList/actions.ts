import { createActions } from 'redux-actions';

import { User } from 'types';

import { ActionTypes } from './constants';

export const { getUsers, saveUsers } = createActions({
  [ActionTypes.GET_USERS]: payload => payload,
  [ActionTypes.SAVE_USERS]: (users: User) => ({ users }),
});
