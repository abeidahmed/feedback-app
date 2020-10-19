import React from 'react';
import styled from '@emotion/styled';
import { useModalType } from 'store/modal';
import { media } from 'global/theme';
import { PSContainerBox, PSBoxTop } from 'components/ProjectSettingBox';
import { Button } from 'components/Button';
import { P } from 'components/Typography';

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
    <PSContainerBox>
      <PSBoxTop title="Delete Project">
        <InnerContainer>
          <P fontSize={14}>
            Once you delete this project, there is no going back. Everything
            related to this project, your team, feedbacks, tags will be deleted.
          </P>
          <Button color="danger" appearance="minimal" onClick={handleDelete}>
            Delete project
          </Button>
        </InnerContainer>
      </PSBoxTop>
    </PSContainerBox>
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
`;

export default DeleteProjectBox;
