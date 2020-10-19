import React from 'react';
import InviteForm from './InviteForm';
import MemberList from './MemberList';
import {
  PSContainerBox,
  PSBoxTop,
  PSBoxBottom,
} from 'components/ProjectSettingBox';

function TeamPage({ project }) {
  const {
    id,
    included: { teamMembers },
  } = project;

  return (
    <PSContainerBox>
      <PSBoxTop title="Your team">
        <MemberList teamMembers={teamMembers} />
      </PSBoxTop>
      <PSBoxBottom>
        <InviteForm projectId={id} />
      </PSBoxBottom>
    </PSContainerBox>
  );
}

export default TeamPage;
