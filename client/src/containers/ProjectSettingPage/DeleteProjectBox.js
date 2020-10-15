import React from 'react';
import styled from '@emotion/styled';
import { color, media } from 'global/theme';
import { BoxContainer, BoxTop } from './components';
import { Button } from 'components/Button';

function DeleteProjectBox() {
  return (
    <BoxContainer>
      <BoxTop title="Delete Project">
        <InnerContainer>
          <p>
            Once you delete this project, there is no going back. Everything
            related to this project, your team, feedbacks, tags will be deleted.
          </p>
          <Button appearance="danger" size="sm">
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
