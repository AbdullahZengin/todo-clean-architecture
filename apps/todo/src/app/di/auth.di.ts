import { Provider } from '@angular/core';
import {
  CheckLoggedInUsecase,
  IAuthRepository,
  ICheckLoggedInUsecase,
  ILoginUsecase,
  ILogoutUsecase,
  LoginUsecase,
  LogoutUsecase,
} from '@udao/presentation-core';
import {
  AuthRepository,
  IAuthApiDatasource,
  IAuthTokenDatasource,
} from '@udao/presentation-data';
import { AuthApiDatasource } from '../datasources/auth/auth-api-datasource';
import { AuthTokenDataSource } from '../datasources/auth/auth-token-datasource';

export const AUTH_PROVIDERS: Provider[] = [
  {
    provide: IAuthApiDatasource,
    useClass: AuthApiDatasource,
  },
  {
    provide: IAuthTokenDatasource,
    useClass: AuthTokenDataSource,
  },
  {
    provide: IAuthRepository,
    useFactory: (
      authApiDatasource: IAuthApiDatasource,
      authTokenDatasource: IAuthTokenDatasource
    ) => new AuthRepository(authApiDatasource, authTokenDatasource),
    deps: [IAuthApiDatasource, IAuthTokenDatasource],
  },
  {
    provide: ILoginUsecase,
    useFactory: (authRepository: IAuthRepository) =>
      new LoginUsecase(authRepository),
    deps: [IAuthRepository],
  },
  {
    provide: ILogoutUsecase,
    useFactory: (authRepository: IAuthRepository) =>
      new LogoutUsecase(authRepository),
    deps: [IAuthRepository],
  },
  {
    provide: ICheckLoggedInUsecase,
    useFactory: (authRepository: IAuthRepository) =>
      new CheckLoggedInUsecase(authRepository),
    deps: [IAuthRepository],
  },
];
