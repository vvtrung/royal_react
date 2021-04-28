import { takeLatest, all, call, put } from 'redux-saga/effects';

import { UserApi } from './UserApi';
import { getUsers, saveUsers } from './actions';

function* getUsersSaga() {
  try {
    const response = yield call([UserApi, UserApi.getUsers]);
    yield put(saveUsers(response.data));
  } catch (error) {
    // do nothing
  }
}

export default function* userSaga() {
  yield all([takeLatest(getUsers, getUsersSaga)]);
}
