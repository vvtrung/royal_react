import { call, put } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { User } from 'types';

import { UserApi } from '../UserApi';
import { saveUsers } from '../actions';
import { getUsersSaga } from '../saga';

describe('User saga', () => {
  const generator = cloneableGenerator(getUsersSaga)();

  it('should call getUsers api', () => {
    const result = generator.next().value;
    const expected = call([UserApi, UserApi.getUsers]);
    expect(result.payload.fn).toEqual(expected.payload.fn);
    expect(result.payload.args).toEqual(expected.payload.args);
  });

  it('should update users data after get successfully', () => {
    const users: User[] = [
      { id: '1', name: 'name', email: 'email@gmail.com', avatar: 'avatar' },
      { id: '2', name: 'name2', email: 'email2@gmail.com', avatar: 'avatar2' },
      { id: '3', name: 'name3', email: 'email3@gmail.com', avatar: 'avatar3' },
    ];
    const response = { data: users };
    const result = generator.next(response).value;
    const expected = put(saveUsers(users));

    expect(result.payload.action.payload).toEqual({ users: response.data });
    expect(result.payload.action).toEqual(expected.payload.action);
  });
});
