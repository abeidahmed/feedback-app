import { types } from './types';

export const initialState = {
  modalType: null,
  modalProps: {},
};

export function modalReducer(state = initialState, action) {
  switch (action.type) {
    case types.open:
      return {
        modalType: action.payload.modalType,
        modalProps: action.payload.modalProps,
      };
    case types.close:
      return {
        initialState,
      };
    default:
      throw new Error(`Unhandled type: ${action.type}`);
  }
}
