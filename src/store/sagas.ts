import { all, fork } from 'redux-saga/effects';

import authSaga from 'containers/Login/saga';
import userSaga from 'containers/UserList/saga';

export default function* rootSagas() {
  yield all([fork(authSaga), fork(userSaga)]);
}
