import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useCurrentUser } from 'store/currentUser';
import { getCurrentUserApi } from 'api/getCurrentUser';
import { GuestRoute, DashboardRoute } from 'routes';
import * as q from 'global/queryKey';
import { ProtectedRoute } from 'components/ProtectedRoute';

function App() {
  const { setUser, token: authToken } = useCurrentUser();
  const { data: { token } = {}, isLoading, isError } = useQuery(
    q.GET_CURRENT_USER,
    getCurrentUserApi,
    {
      enabled: authToken,
      onSuccess: (data) => {
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
        <Route path="/">
          <GuestRoute />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
