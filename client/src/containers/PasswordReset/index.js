import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import InitiatePage from './InitiatePage';
import ResetPage from './ResetPage';

function PasswordReset() {
  const { path } = useRouteMatch();

  return (
    <Switch>
      <Route exact path={path} component={InitiatePage} />
      <Route path={`${path}/update`} component={ResetPage} />
    </Switch>
  );
}

export default PasswordReset;
