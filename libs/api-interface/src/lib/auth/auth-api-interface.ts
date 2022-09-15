/* eslint-disable @typescript-eslint/no-namespace */
export namespace AuthEndpoints {
  const _ABSOLUTE_ROOT = 'api/auth';

  export const ROOT = 'auth';

  export const LOGIN_URL = {
    def: '/login',
    call: () => `${_ABSOLUTE_ROOT}/login`,
  };
}
