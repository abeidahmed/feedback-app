import React from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';
import { PageHeader } from 'components/Header';

function ProjectInvitation({ project }) {
  const { url } = useRouteMatch('/app/:id');
  const { name, pendingInvite } = project;

  if (!pendingInvite) return <Redirect to={{ pathname: url }} />;

  return (
    <PageHeader pageTitle={`Invitation for ${name}`} backButton={false}>
      <div>hello</div>
    </PageHeader>
  );
}

export default ProjectInvitation;
