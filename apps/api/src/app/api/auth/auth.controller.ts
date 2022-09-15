import { Body, Controller, Post } from '@nestjs/common';
import { AuthEndpoints } from '@udao/api-interface';
import { User } from '@udao/backend-core';

import { AuthService } from './auth.service';

import { LoginUserDto } from './dto/login.dto';

@Controller(AuthEndpoints.ROOT)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(AuthEndpoints.LOGIN_URL.def)
  create(@Body() loginDto: LoginUserDto): Promise<User> {
    return this.authService.login(loginDto);
  }
}
