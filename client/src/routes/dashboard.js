import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
import { DashboardHeader } from 'components/Header';

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <Switch>
        <Route path="/app" component={Home} />
      </Switch>
    </div>
  );
}

export default Dashboard;
