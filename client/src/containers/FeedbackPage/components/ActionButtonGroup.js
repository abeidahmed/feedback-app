import React from 'react';
import { IconButton, Button } from 'components/Button';
import { Icon } from 'components/Icon';

function ActionButtonGroup({ projectId }) {
  return (
    <div className="flex justify-end my-4">
      <div className="flex items-center space-x-4 sm:hidden">
        <IconButton
          appearance="white"
          size="sm"
          to={`/app/${projectId}/settings`}
        >
          <Icon icon="cog" className="w-5 h-5" />
        </IconButton>
        <IconButton appearance="primary" size="sm" className="sm:hidden">
          <Icon icon="plus" className="w-5 h-5 text-white" />
        </IconButton>
      </div>
      <div className="hidden space-x-4 sm:items-center sm:flex">
        <IconButton
          appearance="white"
          size="sm"
          to={`/app/${projectId}/settings`}
        >
          <Icon icon="cog" className="w-5 h-5" />
        </IconButton>
        <Button appearance="primary" size="sm">
          Add Widget
        </Button>
      </div>
    </div>
  );
}

export default ActionButtonGroup;
