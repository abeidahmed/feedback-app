import React from 'react';
import { Switch, Route } from 'react-router-dom';
import FeedbackPage from 'containers/FeedbackPage';
import Home from 'containers/Home';
import ProjectSettingPage from 'containers/ProjectSettingPage';
import { DashboardHeader } from 'components/Header';
import { ModalStore } from 'store/modal';
import { ModalRoot } from 'components/Modal';
import { Notification } from 'components/Notification';
import AppContainer from 'containers/App';

function Dashboard() {
  return (
    <ModalStore>
      <div>
        <Notification />
        <ModalRoot />
        <DashboardHeader />
        <Switch>
          <Route exact path="/app" component={Home} />
          <Route path="/app/:id" component={AppContainer} />
          {/* <Route path="/app/:id/settings" component={ProjectSettingPage} /> */}
        </Switch>
      </div>
    </ModalStore>
  );
}

export default Dashboard;
