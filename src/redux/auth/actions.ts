import * as types from './types';

//В будущем добавится автогенерация типов через сервер
export interface User {
	login: string;
	token?: string;
	avatarUrl?: string;
}

export const setUser = (user: User) =>
  ({
    type: types.SET_USER,
    payload: user,
  } as const);

export const logout = () => ({ type: types.LOG_OUT } as const);