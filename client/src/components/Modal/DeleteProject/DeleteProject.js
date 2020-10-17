/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMutation } from 'react-query';
import { useModalType } from 'store/modal';
import { useNotification } from 'store/notification';
import { deleteProjectApi } from 'api/deleteProject';
import { color } from 'global/theme';
import ModalWrapper from '../ModalWrapper';
import { Input } from 'components/Field';
import { Button } from 'components/Button';

function DeleteProject() {
  const {
    modalProps: { id, name },
    modalOff,
  } = useModalType();
  const [projectName, setProjectName] = useState('');

  const history = useHistory();
  const { addNotification, states } = useNotification();

  const [mutate, { isLoading }] = useMutation(deleteProjectApi, {
    onSuccess: () => {
      modalOff();
      history.push('/app');
      handleNotification();
    },
  });

  async function handleDelete(e) {
    e.preventDefault();
    await mutate({
      projectId: id,
    });
  }

  function handleNotification() {
    addNotification({
      element: {
        id,
        content: 'Successfully deleted project!',
        appearance: states.success,
      },
    });
  }

  return (
    <ModalWrapper modalTitle="Are you absolutely sure?">
      <Instruction>
        <p>
          This action <span>cannot</span> be undone. This will permanently
          delete the <span>{name}</span> project, related team, tags, and
          feedbacks.
        </p>
        <p>
          Please type <span>{name}</span> to confirm.
        </p>
        <form onSubmit={handleDelete}>
          <Input
            id="delete-project-verify"
            showLabel={false}
            label={`Verify by typing ${name}`}
            autoComplete="off"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
          />
          <Button
            color="danger"
            width="100%"
            disabled={projectName !== name || isLoading}
            css={css`
              margin-top: 8px;
            `}
          >
            Delete this project
          </Button>
        </form>
      </Instruction>
    </ModalWrapper>
  );
}

const Instruction = styled.div`
  p {
    color: ${color.gray600};
  }

  span {
    color: ${color.gray800};
    font-weight: 500;
  }

  > * + * {
    margin-top: 12px;
  }
`;

export default DeleteProject;
