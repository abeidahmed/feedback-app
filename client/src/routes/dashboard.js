import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from 'containers/FeedbackPage';
import Home from 'containers/Home';
import { DashboardHeader } from 'components/Header';
import { ModalStore } from 'store/modal';
import { ModalRoot } from 'components/Modal';

function Dashboard() {
  return (
    <ModalStore>
      <div>
        <ModalRoot />
        <DashboardHeader />
        <Switch>
          <Route exact path="/app" component={Home} />
          <Route path="/app/:id" component={FeedbackPage} />
        </Switch>
      </div>
    </ModalStore>
  );
}

export default Dashboard;
