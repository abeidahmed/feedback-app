import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';

function Dashboard() {
  return (
    <Switch>
      <Route path="/app" component={Home} />
    </Switch>
  );
}

export default Dashboard;
