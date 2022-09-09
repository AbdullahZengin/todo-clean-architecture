import { User } from '@udao/presentation-core';
import { IAuthTokenDatasource } from '@udao/presentation-data';

export class AuthTokenDataSource implements IAuthTokenDatasource {
  async removeToken(): Promise<void> {
    localStorage.removeItem('sso_token');
  }
  async saveToken(user: User): Promise<void> {
    localStorage.setItem('sso_token', JSON.stringify(user));
  }

  async getToken(): Promise<User | undefined> {
    const token = localStorage.getItem('sso_token');

    if (!token) {
      return undefined;
    }
    return JSON.parse(token);
  }
}
