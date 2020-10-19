import React from 'react';
import { Switch } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useShowProject } from 'api/showProject';
import { ProtectedProject } from 'components/ProtectedRoute';
import FeedbackContainer from 'containers/Feedback';
import ProjectSettingContainer from 'containers/ProjectSetting';
import { Spinner } from 'components/Loader';

function AppContainer() {
  const { id } = useParams();

  const { project, isLoading, isError } = useShowProject({ id });

  if (isLoading || isError) return <Spinner />;

  return (
    <Switch>
      <ProtectedProject
        exact
        path="/app/:id"
        pendingInvite={project.pendingInvite}
        children={<FeedbackContainer project={project} />}
      />
      <ProtectedProject
        path="/app/:id/settings"
        pendingInvite={project.pendingInvite}
        children={<ProjectSettingContainer project={project} />}
      />
    </Switch>
  );
}

export default AppContainer;
