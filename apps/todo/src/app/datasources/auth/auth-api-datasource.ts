import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginUser, User } from '@udao/presentation-core';
import { IAuthApiDatasource } from '@udao/presentation-data';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthApiDatasource implements IAuthApiDatasource {
  constructor(private http: HttpClient) {}

  async login(loginUser: LoginUser): Promise<User> {
    return firstValueFrom(this.http.post<User>('', loginUser));
  }
}
