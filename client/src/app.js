import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { GuestRoute, DashboardRoute } from 'routes';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/app" component={DashboardRoute} />
        <Route path="/" component={GuestRoute} />
      </Switch>
    </Router>
  );
}

export default App;
