import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/LandingPage';
import { Signup, Login } from 'containers/Auth';

function Guest() {
  return (
    <Switch>
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
      <Route path="/" component={Home} />
    </Switch>
  );
}

export default Guest;
