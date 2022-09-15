import { IAuthRepository } from '../auth.repository.interface';
import { LoginInfo } from '../entities/login-info.entity';
import { User } from '../entities/user.entity';

export abstract class ILoginUsecase {
  abstract execute(loginUser: LoginInfo): Promise<User>;
}

export class LoginUsecase implements ILoginUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(loginUser: LoginInfo): Promise<User> {
    const loggedUser = await this.authRepository.login(loginUser);
    await this.authRepository.saveToken(loggedUser);
    return loggedUser;
  }
}
