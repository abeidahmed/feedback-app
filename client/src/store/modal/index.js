import React, { createContext, useReducer, useContext } from 'react';
import { initialState, modalReducer } from './reducer';
import { types as actionTypes } from './types';
import * as types from 'components/Modal/types';

const ModalContext = createContext(initialState);

function useModalType() {
  const [{ modalType, modalProps }, dispatch] = useContext(ModalContext);

  const modalOn = (payload) => dispatch({ type: actionTypes.open, payload });
  const modalOff = () => dispatch({ type: actionTypes.close });

  return { modalOn, modalOff, modalType, modalProps, types };
}

function ModalStore({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return (
    <ModalContext.Provider value={[state, dispatch]}>
      {children}
    </ModalContext.Provider>
  );
}

export { ModalStore, ModalContext, useModalType };
