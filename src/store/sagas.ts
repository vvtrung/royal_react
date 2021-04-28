import { all, fork } from 'redux-saga/effects';

import authSaga from 'containers/Login/saga';

export default function* rootSagas() {
  yield all([fork(authSaga)]);
}
