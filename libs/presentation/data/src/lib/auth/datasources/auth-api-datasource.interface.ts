import { LoginUser, User } from '@udao/presentation-core';

export abstract class IAuthApiDatasource {
  abstract login(loginUser: LoginUser): Promise<User>;
}
