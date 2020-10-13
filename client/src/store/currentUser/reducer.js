import Cookies from 'js-cookie';
import { types } from './types';
import * as c from './constants';

const TOKEN = Cookies.get(c.TOKEN);

export const initialState = {
  currentUser: {},
  token: TOKEN ? TOKEN : undefined,
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
        token: undefined,
      };
    default:
      throw new Error(`Unhandle type: ${action.type}`);
  }
}
