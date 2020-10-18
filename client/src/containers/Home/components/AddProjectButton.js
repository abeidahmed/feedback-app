import React from 'react';
import styled from '@emotion/styled';
import { useModalType } from 'store/modal';
import { color, boxShadow } from 'global/theme';
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
    <StyledButton onClick={handleAddProject} {...props}>
      <IconWrapper>
        <Icon icon="plus" />
      </IconWrapper>
      <StyledH3>Add new project</StyledH3>
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: block;
  min-width: 0;
  grid-column: span 1 / span 1;
  padding: 16px;
  border: 1px solid ${color.gray200};
  border-radius: 6px;
  box-shadow: ${boxShadow.default};

  &:hover {
    box-shadow: ${boxShadow.md};
  }

  &:focus {
    outline: none;
    box-shadow: ${boxShadow.outline};
    border-color: ${color.blue700};
  }
`;

const IconWrapper = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 1px dashed ${color.blue500};
  border-radius: 9999px;

  > svg {
    width: 24px;
    height: 24px;
    margin: 0 auto;
    color: ${color.blue500};
  }
`;

const StyledH3 = styled.h3`
  margin-top: 8px;
  font-size: 18px;
`;

export default AddProjectButton;
