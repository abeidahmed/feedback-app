import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { TOKEN, useCurrentUser } from 'store/currentUser';
import { Spinner } from 'components/Loader';

function ProtectedRoute({ component: Component, currentUser, ...rest }) {
  const { token, isLoading, isError } = currentUser;
  const { clearAll } = useCurrentUser();

  if (!Cookies.get(TOKEN) || isError) {
    clearAll();
    window.location.href = '/login';
  }
  if (isLoading) return <Spinner />;

  return (
    <Route
      {...rest}
      render={(props) => {
        if (token) {
          return <Component {...props} />;
        }
        return (
          <Redirect
            to={{
              pathname: '/login',
            }}
          />
        );
      }}
    />
  );
}

export default ProtectedRoute;
