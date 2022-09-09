import { User } from '@udao/presentation-core';

export abstract class IAuthTokenDatasource {
  abstract removeToken(): Promise<void>;
  abstract saveToken(user: User): Promise<void>;
  abstract getToken(): Promise<User | undefined>;
}
