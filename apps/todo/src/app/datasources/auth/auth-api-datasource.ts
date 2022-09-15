import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LOGIN_URL } from '@udao/api-interface';
import { LoginInfo, User } from '@udao/presentation-core';
import { IAuthApiDatasource } from '@udao/presentation-data';
import { firstValueFrom } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthApiDatasource implements IAuthApiDatasource {
  private readonly SERVER_URL = environment.apiUrl;
  constructor(private http: HttpClient) {}

  async login(loginUser: LoginInfo): Promise<User> {
    return firstValueFrom(this.http.post<User>(`${this.SERVER_URL}/${LOGIN_URL.call()}`, loginUser));
  }
}
