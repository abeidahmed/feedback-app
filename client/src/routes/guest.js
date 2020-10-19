import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/LandingPage';
import { Signup, Login } from 'containers/Auth';
import PasswordReset from 'containers/PasswordReset';

function Guest() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/password_reset">
        <PasswordReset />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  );
}

export default Guest;
