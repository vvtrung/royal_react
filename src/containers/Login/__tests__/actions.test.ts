import { login } from '../actions';

describe('Login Actions', () => {
  it('should create login action', () => {
    expect(
      login({ username: 'admin', password: '123123qwe' }),
    ).toMatchSnapshot();
  });
});
