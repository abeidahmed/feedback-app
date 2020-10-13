import React, { useState } from 'react';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';

function TeamPage({ project }) {
  const [email, setEmail] = useState('');
  const {
    included: { teamMembers },
  } = project;

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
        <form className="flex items-center justify-between w-full space-x-4">
          <div className="w-full max-w-xs">
            <Input
              id="invite-email"
              type="email"
              label="Invite member"
              showLabel={false}
              placeholder="colleague@exmaple.com"
              required
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <Button
            size="sm"
            className="whitespace-no-wrap"
            disabled={!email.length}
          >
            Invite member
          </Button>
        </form>
      </BoxBottom>
    </BoxContainer>
  );
}

export default TeamPage;
