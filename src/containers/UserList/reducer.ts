import { handleActions } from 'redux-actions';

import { User, ActionType } from 'types';

import { ActionTypes } from './constants';

export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users: [],
};

export default handleActions(
  {
    [ActionTypes.SAVE_USERS]: (state: UserState, action: ActionType) => ({
      ...state,
      ...action.payload,
    }),
  },
  initialState,
);
