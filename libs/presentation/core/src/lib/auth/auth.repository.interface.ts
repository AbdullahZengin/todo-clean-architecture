import { LoginInfo } from './entities/login-info.entity';
import { User } from './entities/user.entity';

export abstract class IAuthRepository {
  abstract login(loginUser: LoginInfo): Promise<User>;
  abstract removeToken(): Promise<void>;
  abstract saveToken(user: User): Promise<void>;
  abstract getToken(): Promise<User | undefined>;
}
