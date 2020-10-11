import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useQuery } from 'react-query';
import { useCurrentUser } from 'store/currentUser';
import { getCurrentUserApi } from 'api/getCurrentUser';
import { GuestRoute, DashboardRoute } from 'routes';
import { Spinner } from 'components/Loader';

function App() {
  const { setUser, token } = useCurrentUser();
  const { isLoading, isError } = useQuery(
    'fetchCurrentUser',
    getCurrentUserApi,
    {
      onSuccess: ({ data }) => {
        if (token) {
          setUser(data);
        }
      },
    }
  );

  if (isError) window.location.href = '/login';
  if (isLoading) return <Spinner />;

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
