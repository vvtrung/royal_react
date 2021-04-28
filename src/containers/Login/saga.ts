import { takeLatest, all, call } from 'redux-saga/effects';

import { LoginApi } from './LoginApi';
import { login } from './actions';
import { history } from 'utils/history';
import { LocalStorage, TOKEN_KEY } from 'services/LocalStorage';
import { ActionType } from 'types';

function* loginSaga(action: ActionType) {
  const {
    values,
    meta: { setErrors },
  } = action.payload;
  try {
    const response = yield call([LoginApi, LoginApi.login], values);
    const localStorage = new LocalStorage();
    localStorage.add(TOKEN_KEY, response.token);
    history.replace('/users');
  } catch (errors) {
    setErrors({ api: errors.message });
  }
}

export default function* authSaga() {
  yield all([takeLatest(login, loginSaga)]);
}
