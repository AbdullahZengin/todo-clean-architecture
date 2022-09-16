
import { IAuthRepository, LoginInfo, LoginUsecase, UserWithPassword } from '..';

const users: UserWithPassword[] = [
  {
    id: '1',
    username: 'demo',
    password: 'demopass',
    roles: ['admin'],
  },
];

class MockLoginRepository implements IAuthRepository {
  async getUser(username: string): Promise<UserWithPassword | undefined> {
    return users.find((user) => user.username === username);
  }
}

describe('Login Test', () => {
  let loginUsecase: LoginUsecase;
  let mockRepository: IAuthRepository;

  beforeEach(() => {
    mockRepository = new MockLoginRepository();
    loginUsecase = new LoginUsecase(mockRepository);
  });

  it('Logs in successfully', async () => {
    const userLoginInfo: LoginInfo = {
      username: users[0].username,
      password: users[0].password,
    };
    const user = await loginUsecase.execute(userLoginInfo);

    expect(user.id).toEqual(users[0].id);
    expect(user.username).toEqual(userLoginInfo.username);
    expect(user.roles).toEqual(users[0].roles);
    expect((user as any).password).toBeUndefined();

    expect(typeof user).toBe('object');
  });

  it('Logs in with wrong username', async () => {
    const userLoginInfoWithInvalidUsername: LoginInfo = {
      username: 'invalid_username',
      password: users[0].password,
    };
    const loginUsecaseExceptionTest = async () => {
      return await loginUsecase.execute(userLoginInfoWithInvalidUsername);
    };

    expect(loginUsecaseExceptionTest).rejects.toThrow(
      'Username or password is wrong!'
    );
  });

  it('Logs in with wrong password', async () => {
    const userLoginInfoWithInvalidPassword: LoginInfo = {
      username: users[0].username,
      password: 'invalid_password',
    };
    const loginUsecaseExceptionTest = async () => {
      return await loginUsecase.execute(userLoginInfoWithInvalidPassword);
    };

    expect(loginUsecaseExceptionTest).rejects.toThrow(
      'Username or password is wrong!'
    );
  });
});
