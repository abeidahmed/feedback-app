import React from 'react';
import { Redirect, useRouteMatch } from 'react-router-dom';

function ProjectInvitation({ project }) {
  const { url } = useRouteMatch('/app/:id');
  const { name, pendingInvite } = project;

  if (!pendingInvite) return <Redirect to={{ pathname: url }} />;

  return (
    <div>
      <h1>hello inviteeessss for {name}</h1>
    </div>
  );
}

export default ProjectInvitation;
