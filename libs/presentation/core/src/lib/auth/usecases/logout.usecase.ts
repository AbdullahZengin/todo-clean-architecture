import { IAuthRepository } from '../auth.repository.interface';

export abstract class ILogoutUsecase {
  abstract execute(): Promise<void>;
}

export class LogoutUsecase implements ILogoutUsecase {
  constructor(private authRepository: IAuthRepository) {}
  execute(): Promise<void> {
    return this.authRepository.removeToken();
  }
}
