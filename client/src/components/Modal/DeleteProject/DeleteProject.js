import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMutation } from 'react-query';
import { useModalType } from 'store/modal';
import { useNotification } from 'store/notification';
import { deleteProjectApi } from 'api/deleteProject';
import { color, media, boxShadow } from 'global/theme';
import ModalWrapper from '../ModalWrapper';
import { Input } from 'components/Field';

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
          <DangerButton disabled={projectName !== name || isLoading}>
            Delete this project
          </DangerButton>
        </form>
      </Instruction>
    </ModalWrapper>
  );
}

const DangerButton = styled.button`
  background-color: ${color.red600};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  margin-top: 8px;
  width: 100%;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;

  &:hover {
    background-color: ${color.red500};
  }

  &:focus {
    outline: none;
    box-shadow: ${boxShadow.outlineRed};
    border-color: ${color.red700};
  }

  ${media.sm`
    font-size: 14px;
    line-height: 20px;
  `}
`;

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
