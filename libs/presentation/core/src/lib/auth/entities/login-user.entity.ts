import { User } from './user.entity';

export class LoginUser extends User {
  password!: string;
}
