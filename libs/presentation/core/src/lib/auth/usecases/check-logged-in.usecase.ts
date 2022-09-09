import { IAuthRepository } from '../auth.repository.interface';

export abstract class ICheckLoggedInUsecase {
  abstract execute(): Promise<boolean>;
}

export class CheckLoggedInUsecase implements ICheckLoggedInUsecase {
  constructor(private authRepository: IAuthRepository) {}

  async execute(): Promise<boolean> {
    const loggedInUser = await this.authRepository.getToken();

    return loggedInUser !== undefined;
  }
}
