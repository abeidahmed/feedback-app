import React from 'react';
import { useModalType } from 'store/modal';
import { Button, IconButton } from 'components/Button';

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
      <div className="flex items-center space-x-4">
        <IconButton icon="cog" to={`/app/${id}/settings`} />
        <Button color="primary" onClick={handleAddWidget}>
          Add Widget
        </Button>
      </div>
    </div>
  );
}

export default ActionButtonGroup;
