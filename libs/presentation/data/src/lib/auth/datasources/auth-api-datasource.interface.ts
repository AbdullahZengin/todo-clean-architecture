import { LoginInfo, User } from '@udao/presentation-core';

export abstract class IAuthApiDatasource {
  abstract login(loginUser: LoginInfo): Promise<User>;
}
