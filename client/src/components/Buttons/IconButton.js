import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { handleLinkWrapping } from './utils';
import { boxShadow, color } from 'global/theme';
import { Icon } from 'components/Icon';

const StyledIconButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  box-shadow: ${boxShadow.sm};
  border-radius: 6px;
  position: relative;
  height: ${(props) => (props.size === 'sm' ? 34 : 38)}px;
  width: ${(props) => (props.size === 'sm' ? 34 : 38)}px;

  &:focus {
    outline: none;
  }

  > svg {
    width: 20px;
    height: 20px;
  }

  ${(props) => !props.color && defaultCls}
`;

const defaultCls = css`
  border-color: ${color.gray300};
  background-color: #fff;
  color: ${color.gray500};

  &:hover {
    color: ${color.gray700};
  }

  &:focus {
    border-color: ${color.blue700};
    box-shadow: ${boxShadow.outline};
  }
`;

function IconButtonComponent({ icon, ...props }) {
  return (
    <StyledIconButton {...props}>
      <Icon icon={icon} />
    </StyledIconButton>
  );
}

StyledIconButton.propTypes = {
  size: PropTypes.oneOf(['sm']),
};

IconButtonComponent.propTypes = {
  icon: PropTypes.string.isRequired,
};

export const IconButton = (props) =>
  handleLinkWrapping(IconButtonComponent, props);
