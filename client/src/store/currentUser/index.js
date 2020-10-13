import React, { createContext, useReducer, useContext } from 'react';
import { currentUserReducer, initialState } from './reducer';
import { types } from './types';
import { TOKEN } from './constants';

const CurrentUserContext = createContext(initialState);

function useCurrentUser() {
  const [{ currentUser, token }, dispatch] = useContext(CurrentUserContext);

  const logout = () => dispatch({ type: types.logout });
  const setUser = (payload) => dispatch({ type: types.setUser, payload });

  return { logout, setUser, currentUser, token };
}

function CurrentUserStore({ children }) {
  const [state, dispatch] = useReducer(currentUserReducer, initialState);

  return (
    <CurrentUserContext.Provider value={[state, dispatch]}>
      {children}
    </CurrentUserContext.Provider>
  );
}

export { CurrentUserContext, CurrentUserStore, useCurrentUser, TOKEN };
