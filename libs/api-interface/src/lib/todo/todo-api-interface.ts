export interface IApiEndpoint {
  def: string;
  call: (...args: any[]) => string;
}

export const TODO_API_ROOT = 'todo';
const TODO_API_CALL_ROOT = 'api/todo';

export const GET_ALL_TODOS_URL: IApiEndpoint = {
  def: '',
  call: () => `${TODO_API_CALL_ROOT}`,
};

export const CREATE_TODO_URL: IApiEndpoint = {
  def: '',
  call: () => `${TODO_API_CALL_ROOT}`,
};

export const UPDATE_TODO_URL: IApiEndpoint = {
  def: '',
  call: () => `${TODO_API_CALL_ROOT}`,
};

export const DELETE_TODO_URL: IApiEndpoint = {
  def: `:id`,
  call: (id: string) => `${TODO_API_ROOT}/${id}`,
};

export const UPDATE_TODO_STATUS_URL: IApiEndpoint = {
  def: `:id/status`,
  call: (id: string) => `${TODO_API_ROOT}/${id}/status`,
};
