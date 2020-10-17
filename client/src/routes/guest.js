import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/LandingPage';
import { Signup, Login } from 'containers/Auth';
import PasswordReset from 'containers/PasswordReset';

function Guest() {
  return (
    <Switch>
      <Route path="/password_reset" component={PasswordReset} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Home} />
    </Switch>
  );
}

export default Guest;
