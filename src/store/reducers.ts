import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { history } from 'utils/history';
import { InjectedReducersType } from './types';

export const createReducer = (injectedReducers: InjectedReducersType = {}) => {
  const rootReducer = combineReducers({
    router: connectRouter(history),
    ...injectedReducers,
  });

  return rootReducer;
};
