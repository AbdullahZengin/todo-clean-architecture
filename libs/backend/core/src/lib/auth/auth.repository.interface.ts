import { LoginUser } from './entities/login-user.entity';

export abstract class IAuthRepository {
  abstract getUser(username: string): Promise<LoginUser | undefined>;
}
