import React from 'react';
import { Route, Redirect, useRouteMatch } from 'react-router-dom';

function ProtectedProject({ pendingInvite, children, ...rest }) {
  const { url } = useRouteMatch();

  return (
    <Route {...rest}>
      {pendingInvite ? (
        <Redirect to={{ pathname: `${url}/invitations` }} />
      ) : (
        children
      )}
    </Route>
  );
}

export default ProtectedProject;
