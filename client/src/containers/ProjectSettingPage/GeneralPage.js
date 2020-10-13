import React from 'react';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';

function GeneralPage() {
  return (
    <BoxContainer>
      <form>
        <BoxTop title="Project Settings">
          <Input id="project-settings-name" label="Name" />
        </BoxTop>
        <BoxBottom>
          <div>
            <p className="text-sm text-gray-500">Project ID:</p>
            <p className="text-sm text-gray-700">325agsgawy2626</p>
          </div>
          <Button size="sm">Save</Button>
        </BoxBottom>
      </form>
    </BoxContainer>
  );
}

export default GeneralPage;
