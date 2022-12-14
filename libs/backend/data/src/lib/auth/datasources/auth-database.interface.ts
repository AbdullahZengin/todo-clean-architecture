import { UserWithPassword } from '@udao/backend-core';
export abstract class IAuthDatabaseDatasource {

  abstract getUser(username: string): Promise<UserWithPassword | undefined>;
}
