import { IAuthRepository } from '../auth.repository.interface';
import { LoginUser } from '../entities/login-user.entity';
import { User } from '../entities/user.entity';

export abstract class ILoginUsecase {
  abstract execute(loginUser: LoginUser): Promise<User>;
}

export class LoginUsecase implements ILoginUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(loginUser: LoginUser): Promise<User> {
    const loggedUser = await this.authRepository.login(loginUser);
    await this.authRepository.saveToken(loggedUser);
    return loggedUser;
  }
}
