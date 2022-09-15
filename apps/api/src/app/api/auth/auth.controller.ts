import { LoginUserDto } from './dto/login.dto';
import { AuthService } from './auth.service';
import { User } from '@udao/backend-core'; 
import { Body, Controller, Post } from '@nestjs/common';
import { AUTH_API_ROOT, LOGIN_API_URL } from '@udao/api-interface';

@Controller(AUTH_API_ROOT)
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post(LOGIN_API_URL.def)
  create(@Body() loginDto: LoginUserDto): Promise<User> {
    return this.authService.login(loginDto);
  }
}
