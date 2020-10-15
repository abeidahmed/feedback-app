import React from 'react';
import styled from '@emotion/styled';
import { useModalType } from 'store/modal';
import { color, media } from 'global/theme';
import { BoxContainer, BoxTop } from './components';
import { Button } from 'components/Button';

function DeleteProjectBox({ project }) {
  const { id, name } = project;
  const { modalOn, types } = useModalType();

  function handleDelete() {
    modalOn({
      modalType: types.DELETE_PROJECT,
      modalProps: {
        id,
        name,
      },
    });
  }

  return (
    <BoxContainer>
      <BoxTop title="Delete Project">
        <InnerContainer>
          <p>
            Once you delete this project, there is no going back. Everything
            related to this project, your team, feedbacks, tags will be deleted.
          </p>
          <Button appearance="danger" size="sm" onClick={handleDelete}>
            Delete project
          </Button>
        </InnerContainer>
      </BoxTop>
    </BoxContainer>
  );
}

const InnerContainer = styled.div`
  > button {
    margin-top: 12px;
  }
  ${media.sm`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

      > button {
        margin-top: 0;
      }

      > * + * {
        margin-left: 12px;
      }
  `}

  p {
    color: ${color.gray700};
    font-size: 14px;
    line-height: 20px;
  }
`;

export default DeleteProjectBox;
