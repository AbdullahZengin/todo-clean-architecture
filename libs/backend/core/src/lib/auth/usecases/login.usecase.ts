import { IAuthRepository } from '../auth.repository.interface';
import { LoginUser } from '../entities/login-user.entity';
import { User } from '../entities/user.entity';

export abstract class ILoginUsecase {
  abstract execute(user: LoginUser): Promise<User>;
}

export class LoginUsecase implements ILoginUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(user: LoginUser): Promise<User> {
    const storedUser = await this.authRepository.getUser(user.username);

    if (storedUser === undefined) {
      throw new Error('Username or password is wrong!');
    }

    if (storedUser.password !== user.password) {
      throw new Error('Username or password is wrong!');
    }
    return {
        id: user.id,
        username: user.username,
        roles: user.roles
    }
  }
}
