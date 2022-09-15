import { IAuthRepository } from '../auth.repository.interface';
import { LoginInfo } from '../entities/login-info.entity';
import { User } from '../entities/user.entity';
import { CheckLoggedInUsecase } from './check-logged-in.usecase';
import { LoginUsecase } from './login.usecase';

class MockAuthRepository implements IAuthRepository {
  token: User | undefined;
  async login(loginUser: LoginInfo): Promise<User> {
    return { ...loginUser, id: '1', role: ['admin'] };
  }
  async removeToken(): Promise<void> {
    this.token = undefined;
  }

  async saveToken(user: User): Promise<void> {
    this.token = user;
  }
  async getToken(): Promise<User | undefined> {
    return this.token;
  }
}

describe('Login Test', () => {
  let loginUsecase: LoginUsecase;
  let checkLoggedInUsecase: CheckLoggedInUsecase;
  let mockAuthRepository: MockAuthRepository;

  beforeEach(() => {
    mockAuthRepository = new MockAuthRepository();
    loginUsecase = new LoginUsecase(mockAuthRepository);
    checkLoggedInUsecase = new CheckLoggedInUsecase(mockAuthRepository);
  });

  it('Logs in and returns true when checked', async () => {
    await loginUsecase.execute({ username: 'gizem', password: 'qwe123' });
    const isLoggedin = await checkLoggedInUsecase.execute();
    expect(isLoggedin).toBe(true);
  });
});
