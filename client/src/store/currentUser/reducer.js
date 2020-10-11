import Cookies from 'js-cookie';
import { types } from './types';
import * as c from './constants';

export const initialState = {
  currentUser: {},
  token: Cookies.get(c.TOKEN),
};

export function currentUserReducer(state = initialState, action) {
  switch (action.type) {
    case types.setUser:
      Cookies.set(c.TOKEN, action.payload.token, { expires: 7 });
      return {
        ...state,
        currentUser: action.payload.currentUser,
        token: action.payload.token,
      };
    case types.logout:
      Cookies.remove(c.TOKEN);
      return {
        currentUser: {},
        token: null,
      };
    default:
      throw new Error(`Unhandle type: ${action.type}`);
  }
}
