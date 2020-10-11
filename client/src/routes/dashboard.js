import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from 'containers/FeedbackPage';
import Home from 'containers/Home';
import { DashboardHeader } from 'components/Header';

function Dashboard() {
  return (
    <div>
      <DashboardHeader />
      <Switch>
        <Route exact path="/app" component={Home} />
        <Route path="/app/:id" component={FeedbackPage} />
      </Switch>
    </div>
  );
}

export default Dashboard;
