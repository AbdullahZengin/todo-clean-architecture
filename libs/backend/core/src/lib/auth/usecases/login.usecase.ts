import { IAuthRepository } from '../auth.repository.interface';
import { LoginInfo } from '../entities/login-user.entity';
import { User } from '../entities/user.entity';

export abstract class ILoginUsecase {
  abstract execute(user: LoginInfo): Promise<User>;
}

export class LoginUsecase implements ILoginUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(user: LoginInfo): Promise<User> {
    const storedUser = await this.authRepository.getUser(user.username);

    if (storedUser === undefined) {
      throw new Error('Username or password is wrong!');
    }

    if (storedUser.password !== user.password) {
      throw new Error('Username or password is wrong!');
    }
    return {
        id: storedUser.id,
        username: storedUser.username,
        roles: storedUser.roles,
    }
  }
}
