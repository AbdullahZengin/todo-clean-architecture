export interface IAuthApiEndpoint {
    def: string;
    call: (...args: any[]) => string;
  }

  export const AUTH_API_ROOT = 'auth';
  const AUTH_API_CALL_ROOT = 'api/auth';

  export const LOGIN_API_URL: IAuthApiEndpoint = {
    def: '/login',
    call: () => `${AUTH_API_CALL_ROOT}/login`,
  }