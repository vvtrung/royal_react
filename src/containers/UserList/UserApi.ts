import V1 from 'services/api/V1';

class User extends V1 {
  getUsers = () => this.client.get('/users');
}

export const UserApi = new User();
