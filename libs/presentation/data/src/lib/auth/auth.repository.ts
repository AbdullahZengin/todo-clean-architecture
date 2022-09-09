import { IAuthRepository, LoginUser, User } from '@udao/presentation-core';
import { IAuthApiDatasource } from './datasources/auth-api-datasource.interface';
import { IAuthTokenDatasource } from './datasources/auth-token-datasource.interface';

export class AuthRepository implements IAuthRepository {
  constructor(
    private api: IAuthApiDatasource,
    private localStorage: IAuthTokenDatasource
  ) {}

  login(loginUser: LoginUser): Promise<User> {
    return this.api.login(loginUser);
  }
  removeToken(): Promise<void> {
    return this.localStorage.removeToken();
  }

  saveToken(user: User): Promise<void> {
    return this.localStorage.saveToken(user);
  }

  getToken(): Promise<User | undefined> {
    return this.localStorage.getToken();
  }
}
