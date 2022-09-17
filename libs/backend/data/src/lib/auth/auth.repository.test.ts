import { AuthRepository } from './auth.repository';
import { IAuthDatabaseDatasource } from './datasources/auth-database.interface';
import {UserWithPassword} from '@udao/backend-core'
const mockUsers: UserWithPassword[] = [
  {
    id: '1',
    username: 'demo',
    roles: ['admin'],
    password: '1234',
  },
];

class MockAuthDatasource implements IAuthDatabaseDatasource {
  async getUser(username: string): Promise<UserWithPassword | undefined> {
    return mockUsers.find((user) => user.username === username);
  }
}

describe('Auth Repository Test', () => {
  let authRepository: AuthRepository;
  let mockAuthDatasource: IAuthDatabaseDatasource;

  beforeEach(() => {
    mockAuthDatasource = new MockAuthDatasource();
    authRepository = new AuthRepository(mockAuthDatasource);
  });

  it('Returns a user with given username', async () => {
    const user = await authRepository.getUser(mockUsers[0].username);

    expect(user).toBeDefined();
    expect(user?.id).toBe(mockUsers[0].id);
    expect(user?.username).toBe(mockUsers[0].username);
    expect(user?.password).toBe(mockUsers[0].password);
    expect(user?.roles).toEqual(mockUsers[0].roles);
    expect(Object.keys(user || {}).length).toEqual(
      Object.keys(mockUsers[0]).length
    );
  });

  it('Returns undefined when could not find user with given username', async () => {
    const wrongUserName = 'wrong_username';
    const user = await authRepository.getUser(wrongUserName);
    expect(user).toBeUndefined();
  });
});
