import { takeLatest, all, call } from 'redux-saga/effects';

import { history } from 'utils/history';
import { LocalStorage, TOKEN_KEY } from 'services/LocalStorage';
import { ActionType } from 'types';

import { LoginApi } from './LoginApi';
import { login } from './actions';

export function* loginSaga(action: ActionType) {
  const {
    values,
    meta: { setErrors },
  } = action.payload;
  try {
    const { data: { token } = {} as any } = yield call(
      [LoginApi, LoginApi.login],
      values,
    );
    const localStorage = new LocalStorage();
    localStorage.add(TOKEN_KEY, token);
    history.replace('/users');
  } catch (errors) {
    setErrors({ api: errors.message });
  }
}

export default function* authSaga() {
  yield all([takeLatest(login, loginSaga)]);
}
