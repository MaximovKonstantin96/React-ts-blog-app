import { ActionType, createReducer } from 'typesafe-actions';

import * as types from './types';
import * as actions from './actions';

type RootAction = ActionType<typeof actions>;

interface UserData {
	user?: actions.User | null;
	isAuthorized: boolean;
}

export default createReducer<UserData, RootAction>({
  user: null,
	isAuthorized: false
})
  .handleType([types.SET_USER], (state, action) => ({
    ...state,
    user: action.payload,
		isAuthorized: true,
  }))
  .handleType([types.LOG_OUT], state => ({
    ...state,
   	isAuthorized: false
  }))
  