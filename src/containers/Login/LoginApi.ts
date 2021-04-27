import V1 from 'services/api/V1';

class Login extends V1 {
  login = (values: Object) => this.client.post('/login', values);
}

export const LoginApi = new Login();
