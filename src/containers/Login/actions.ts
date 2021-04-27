import { createActions } from 'redux-actions';

import { ActionTypes } from './constants';

export const { login } = createActions({
  [ActionTypes.LOGIN]: payload => payload,
});
