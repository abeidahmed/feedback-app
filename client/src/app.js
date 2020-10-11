import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useCurrentUser } from 'store/currentUser';
import { getCurrentUserApi } from 'api/getCurrentUser';
import { GuestRoute, DashboardRoute } from 'routes';
import * as q from 'global/queryKey';
import { ProtectedRoute } from 'components/ProtectedRoute';

function App() {
  const { setUser } = useCurrentUser();
  const { data: { data: { token } = {} } = {}, isLoading, isError } = useQuery(
    q.GET_CURRENT_USER,
    getCurrentUserApi,
    {
      onSuccess: ({ data }) => {
        setUser(data);
      },
    }
  );

  return (
    <Router>
      <Switch>
        <ProtectedRoute
          path="/app"
          component={DashboardRoute}
          currentUser={{ token, isError, isLoading }}
        />
        <Route path="/" component={GuestRoute} />
      </Switch>
    </Router>
  );
}

export default App;
