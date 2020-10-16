import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/LandingPage';
import { Signup, Login } from 'containers/Auth';
import { InitiatePage } from 'containers/PasswordReset';

function Guest() {
  return (
    <Switch>
      <Route path="/password_reset" component={InitiatePage} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Guest;
