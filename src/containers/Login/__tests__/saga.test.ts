import { call } from 'redux-saga/effects';
import { cloneableGenerator } from '@redux-saga/testing-utils';

import { LoginApi } from '../LoginApi';
import { login } from '../actions';
import { loginSaga } from '../saga';

const setErrors = jest.fn().mockName('setErrors');
export const meta = { setErrors };

describe('Login saga', () => {
  const values = { username: 'admin', password: 'admin' };
  const action = login({ values, meta });
  const generator = cloneableGenerator(loginSaga)(action);

  it('should call login api', () => {
    const result = generator.next().value;
    const expected = call([LoginApi, LoginApi.login], values);
    expect(result.payload.fn).toEqual(expected.payload.fn);
    expect(result.payload.args).toEqual(expected.payload.args);
  });

  it('should set error when call api fails', () => {
    const gen = generator.clone();
    gen.throw('error');
    expect(setErrors).toHaveBeenCalled();
  });
});
