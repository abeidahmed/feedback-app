import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'containers/Home';
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
        </Switch>
      </div>
    </ModalStore>
  );
}

export default Dashboard;
