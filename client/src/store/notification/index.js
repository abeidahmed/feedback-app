import React, { createContext, useReducer, useContext } from 'react';
import { initialState, notificationReducer } from './reducer';
import { types } from './types';
import { states } from './constants';

const NotificationContext = createContext(initialState);

function useNotification() {
  const [{ element }, dispatch] = useContext(NotificationContext);

  const addNotification = (payload) => dispatch({ type: types.show, payload });
  const hideNotification = (payload) => dispatch({ type: types.hide, payload });

  return { element, addNotification, hideNotification, types, states };
}

function NotificationStore({ children }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  return (
    <NotificationContext.Provider value={[state, dispatch]}>
      {children}
    </NotificationContext.Provider>
  );
}

export { NotificationStore, NotificationContext, useNotification };
