import { User, UserWithPassword } from './entities/user.entity';

export abstract class IAuthRepository {
  abstract getUser(username: string): Promise<UserWithPassword | undefined>;
}
