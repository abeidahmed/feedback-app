import React from 'react';
import { useModalType } from 'store/modal';
import { Icon } from 'components/Icon';

function AddProjectButton({ ...props }) {
  const { modalOn, types } = useModalType();

  function handleAddProject() {
    modalOn({
      modalType: types.ADD_PROJECT,
      modalProps: {},
    });
  }

  return (
    <button
      className="block col-span-1 p-4 border border-gray-200 rounded-md shadow focus:border-blue-600 focus:outline-none focus:shadow-outline-blue hover:shadow-md"
      onClick={handleAddProject}
      {...props}
    >
      <span className="inline-flex items-center justify-center w-10 h-10 border border-blue-500 border-dashed rounded-full border-1">
        <i>
          <Icon icon="plus" className="w-6 h-6 mx-auto text-blue-500" />
        </i>
      </span>
      <h2 className="mt-2 text-lg">Add new project</h2>
    </button>
  );
}

export default AddProjectButton;
