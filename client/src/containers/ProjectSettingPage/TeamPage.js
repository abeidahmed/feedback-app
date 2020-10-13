import React from 'react';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';

function TeamPage() {
  return (
    <BoxContainer>
      <BoxTop title="Your team">
        <div className="space-y-2">
          <div className="flex items-center justify-between min-w-0 space-x-3">
            <p className="text-sm text-gray-700 truncate md:text-base">
              abeidmama@gmail.com
            </p>
            <p className="text-sm text-gray-400 md:text-base">Member</p>
          </div>
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
            />
          </div>
          <Button size="sm" className="whitespace-no-wrap">
            Invite member
          </Button>
        </form>
      </BoxBottom>
    </BoxContainer>
  );
}

export default TeamPage;
