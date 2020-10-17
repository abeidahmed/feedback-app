import React, { useState } from 'react';
import { useRefetchMutation } from 'utils/useRefetchMutation';
import { patchProjectApi } from 'api/patchProject';
import * as q from 'global/queryKey';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';

function EditProjectBox({ project }) {
  const { name, id } = project;
  const [projectName, setProjectName] = useState(name);
  const [error, setError] = useState([]);
  const isValueValid = name === projectName || !projectName.length;

  const [mutate, { isLoading }] = useRefetchMutation(patchProjectApi, [
    q.SHOW_PROJECT,
    q.GET_PROJECTS,
  ]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      mutate({
        id,
        name: projectName,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  return (
    <BoxContainer>
      <form onSubmit={handleSubmit}>
        <BoxTop title="Project Settings">
          <Input
            id="project-settings-name"
            label="Name"
            error={error}
            errorType="name"
            value={projectName}
            autoComplete="off"
            onChange={(e) => setProjectName(e.target.value)}
          />
        </BoxTop>
        <BoxBottom>
          <div className="flex items-center justify-between w-full space-x-3">
            <div>
              <p className="text-sm text-gray-500">Project ID:</p>
              <p className="text-sm text-gray-700">{id}</p>
            </div>
            <Button disabled={isValueValid || isLoading}>Save</Button>
          </div>
        </BoxBottom>
      </form>
    </BoxContainer>
  );
}

export default EditProjectBox;
