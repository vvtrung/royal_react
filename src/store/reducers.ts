import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from 'utils/history';
import userReducer from 'containers/UserList/reducer';

import { InjectedReducersType } from './types';

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};

export default combineReducers({
  router: connectRouter(history),
  user: userReducer,
});
