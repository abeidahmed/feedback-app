import React, { useState } from 'react';
import { queryCache, useMutation } from 'react-query';
import { useModalType } from 'store/modal';
import ModalWrapper from '../ModalWrapper';
import { postProjectApi } from 'api/postProject';
import * as q from 'global/queryKey';
import { Input } from 'components/Field';
import { Button } from 'components/Button';

function AddProject() {
  const [name, setName] = useState('');
  const [error, setError] = useState([]);
  const { modalOff } = useModalType();

  const [mutate, { isLoading }] = useMutation(postProjectApi, {
    onSuccess: () => {
      modalOff();
      queryCache.refetchQueries(q.GET_PROJECTS);
    },
    throwOnError: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await mutate({
        name,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <ModalWrapper modalTitle="Add new project">
      <form onSubmit={handleSubmit} className="space-y-5">
        <Input
          id="add-project-name"
          label="Project name"
          placeholder="Note taking app"
          errors={{
            error,
            errorType: 'name',
          }}
          autoComplete="off"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="flex justify-end">
          <Button color="primary" disabled={isLoading}>
            Add project
          </Button>
        </div>
      </form>
    </ModalWrapper>
  );
}

export default AddProject;
