import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useShowProject } from 'api/showProject';
import FeedbackContainer from 'containers/Feedback';
import ProjectSettingContainer from 'containers/ProjectSetting';
import { Spinner } from 'components/Loader';

function AppContainer() {
  const { id } = useParams();

  const { project, isLoading, isError } = useShowProject({ id });

  return (
    <Switch>
      {isLoading || isError ? (
        <Spinner />
      ) : (
        <Route
          exact
          path="/app/:id"
          render={(props) => <FeedbackContainer project={project} {...props} />}
        />
      )}
      <Route path="/app/:id/settings" component={ProjectSettingContainer} />
    </Switch>
  );
}

export default AppContainer;
