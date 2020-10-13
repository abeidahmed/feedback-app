import React from 'react';
import { useModalType } from 'store/modal';
import { IconButton, Button } from 'components/Button';
import { Icon } from 'components/Icon';

function ActionButtonGroup({ project }) {
  const { id, name } = project;
  const { modalOn, types } = useModalType();

  function handleAddWidget() {
    modalOn({
      modalType: types.ADD_WIDGET,
      modalProps: {
        id,
        name,
      },
    });
  }

  return (
    <div className="flex justify-end mb-4">
      <div className="flex items-center space-x-4 sm:hidden">
        <IconButton appearance="white" size="sm" to={`/app/${id}/settings`}>
          <Icon icon="cog" className="w-5 h-5" />
        </IconButton>
        <IconButton
          appearance="primary"
          size="sm"
          className="sm:hidden"
          onClick={handleAddWidget}
        >
          <Icon icon="plus" className="w-5 h-5 text-white" />
        </IconButton>
      </div>
      <div className="hidden space-x-4 sm:items-center sm:flex">
        <IconButton appearance="white" size="sm" to={`/app/${id}/settings`}>
          <Icon icon="cog" className="w-5 h-5" />
        </IconButton>
        <Button appearance="primary" size="sm" onClick={handleAddWidget}>
          Add Widget
        </Button>
      </div>
    </div>
  );
}

export default ActionButtonGroup;
