import React, { useState } from 'react';
import { useMutation } from 'react-query';
import { postInviteTeamMemberApi } from 'api/inviteTeamMember';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';

function TeamPage({ project }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);
  const {
    id,
    included: { teamMembers },
  } = project;

  const [mutate, { isLoading }] = useMutation(postInviteTeamMemberApi, {
    onSuccess: () => console.log('invited'),
    throwOnError: true,
  });

  async function handleInvite(e) {
    e.preventDefault();
    setError([]);
    try {
      await mutate({
        projectId: id,
        email,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <BoxContainer>
      <BoxTop title="Your team">
        <div className="space-y-2">
          {teamMembers.map(({ id, email }) => (
            <div
              key={id}
              className="flex items-center justify-between min-w-0 space-x-3"
            >
              <p className="text-sm text-gray-700 truncate md:text-base">
                {email}
              </p>
              <p className="text-sm text-gray-400 md:text-base">Member</p>
            </div>
          ))}
        </div>
      </BoxTop>
      <BoxBottom>
        <form
          onSubmit={handleInvite}
          className="flex items-center justify-between w-full space-x-4"
        >
          <div className="w-full max-w-xs">
            <Input
              id="invite-email"
              type="email"
              label="Invite member"
              showLabel={false}
              placeholder="colleague@example.com"
              autoComplete="off"
              errors={{
                error,
                errorType: 'email',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button disabled={isLoading || !email.length}>Invite member</Button>
        </form>
      </BoxBottom>
    </BoxContainer>
  );
}

export default TeamPage;
