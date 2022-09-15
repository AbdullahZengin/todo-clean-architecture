import { LoginUserDto } from './dto/login.dto';
import { ILoginUsecase, User } from '@udao/backend-core';
import { Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';

@Injectable()
export class AuthService {
  constructor(
    private readonly loginUsecase: ILoginUsecase,
  ) {}

  async login(loginDto: LoginUserDto): Promise<User> {
    return this.loginUsecase.execute(loginDto).catch((e: unknown) => {
      if (e instanceof Error) {
        throw new NotFoundException(e.message);
      }
      throw new InternalServerErrorException();
    });
  }
}
