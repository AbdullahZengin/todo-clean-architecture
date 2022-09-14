import { IAuthRepository, LoginUser } from '@udao/backend-core';
import { IAuthDatabaseDatasource } from './datasources/auth-database.interface';
export class AuthRepository implements IAuthRepository{
    constructor(private authDatabaseDatasource:IAuthDatabaseDatasource ){}

    getUser(username: string): Promise<LoginUser | undefined> {       
        return this.authDatabaseDatasource.getUser(username);
    }
}