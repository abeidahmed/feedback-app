import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from 'containers/FeedbackPage';
import Home from 'containers/Home';
import ProjectSettingPage from 'containers/ProjectSettingPage';
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
          <Route exact path="/app/:id" component={FeedbackPage} />
          <Route path="/app/:id/settings" component={ProjectSettingPage} />
        </Switch>
      </div>
    </ModalStore>
  );
}

export default Dashboard;
