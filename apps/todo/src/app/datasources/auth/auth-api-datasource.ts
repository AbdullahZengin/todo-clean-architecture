import { firstValueFrom } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthEndpoints } from '@udao/api-interface';
import { LoginInfo, User } from '@udao/presentation-core';
import { IAuthApiDatasource } from '@udao/presentation-data';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthApiDatasource implements IAuthApiDatasource {
  private readonly SERVER_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async login(loginUser: LoginInfo): Promise<User> {
    return firstValueFrom(
      this.http.post<User>(
        `${this.SERVER_URL}/${AuthEndpoints.LOGIN_URL.call()}`,
        loginUser
      )
    );
  }
}
