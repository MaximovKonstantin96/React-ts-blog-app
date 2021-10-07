import { createSelector } from 'reselect';
import rootReducer from '../rootReducer';

export const getIsAuthorized = (state: ReturnType<typeof rootReducer>) => state.auth.isAuthorized;
