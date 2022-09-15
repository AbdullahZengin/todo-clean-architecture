/* eslint-disable @typescript-eslint/no-namespace */

export namespace TodoEndpoints {
  const _ABSOLUTE_ROOT = 'api/todo';

  export const ROOT = 'todo';

  export const GET_ALL_TODOS = {
    def: '',
    call: () => `${_ABSOLUTE_ROOT}`,
  };

  export const CREATE_TODO = {
    def: '',
    call: () => `${_ABSOLUTE_ROOT}`,
  };

  export const UPDATE_TODO = {
    def: '',
    call: () => `${_ABSOLUTE_ROOT}`,
  };

  export const DELETE_TODO = {
    def: `:id`,
    call: (id: string) => `${_ABSOLUTE_ROOT}/${id}`,
  };

  export const UPDATE_TODO_STATUS = {
    def: `:id/status`,
    call: (id: string) => `${_ABSOLUTE_ROOT}/${id}/status`,
  };
}
