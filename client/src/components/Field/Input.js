import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, boxShadow } from 'global/theme';
import { ErrorMessage } from './components';

function Input({
  label,
  to,
  error,
  errorType,
  showLabel = true,
  id,
  appearance,
  ...props
}) {
  let pathname, title;
  if (to) {
    pathname = to.pathname;
    title = to.title;
  }

  return (
    <div>
      <Wrapper>
        <Label htmlFor={id} showLabel={showLabel}>
          {label}
        </Label>
        {to && <StyledLink to={pathname}>{title}</StyledLink>}
      </Wrapper>
      <StyledInput
        id={id}
        showLabel={showLabel}
        appearance={appearance}
        {...props}
      />
      <ErrorMessage error={error} errorType={errorType} />
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Label = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: ${color.gray700};

  ${(props) =>
    !props.showLabel &&
    css`
      position: absolute;
      width: 1px;
      height: 1px;
      padding: 0;
      margin: -1px;
      overflow: hidden;
      clip: rect(0, 0, 0, 0);
      white-space: nowrap;
      border-width: 0;
    `}
`;

const StyledInput = styled.input`
  display: block;
  width: 100%;
  font-size: 14px;
  line-height: 20px;
  appearance: none;
  background-color: #fff;
  border: 1px solid ${color.gray300};
  border-radius: 0.375rem;
  padding: 8px 12px;
  box-shadow: ${boxShadow.sm};

  ${(props) =>
    props.showLabel &&
    css`
      margin-top: 4px;
    `}

  &:focus {
    outline: none;
    border-color: ${color.blue600};
    box-shadow: ${boxShadow.outline};
  }

  ${(props) =>
    props.appearance === 'gray' &&
    css`
      background-color: ${color.gray100};

      &:focus {
        background-color: #fff;
      }
    `}
`;

const StyledLink = styled(Link)`
  font-size: 14px;
  font-weight: 500;
  color: ${color.blue600};

  &:hover {
    color: ${color.blue500};
  }
`;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.exact({
    pathname: PropTypes.string,
    title: PropTypes.string,
  }),
  error: PropTypes.array,
  errorType: PropTypes.string,
  showLabel: PropTypes.bool,
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  appearance: PropTypes.oneOf(['gray']),
};

export default Input;
