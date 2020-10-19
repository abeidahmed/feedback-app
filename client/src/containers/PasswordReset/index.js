import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InitiatePage from './InitiatePage';
import ResetPage from './ResetPage';

function PasswordReset() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path}>
        <InitiatePage />
      </Route>
      <Route path={`${path}/update`}>
        <ResetPage />
      </Route>
    </Switch>
  );
}

export default PasswordReset;
