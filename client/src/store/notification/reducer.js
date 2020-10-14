import { types } from './types';

export const initialState = {
  element: {},
};

export function notificationReducer(state = initialState, action) {
  switch (action.type) {
    case types.show:
      return {
        ...state,
        element: action.payload.element,
      };
    case types.hide:
      return {
        initialState,
      };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}
