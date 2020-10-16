import React from 'react';
import styled from '@emotion/styled';
import { color } from 'global/theme';
import { findError } from '../utils';

function ErrorMessage({ error, errorType }) {
  if (findError(error, errorType)) {
    return <StyledP>{findError(error, errorType)}</StyledP>;
  }
  return null;
}

const StyledP = styled.p`
  margin-top: 4px;
  font-size: 14px;
  font-weight: 500;
  color: ${color.red700};
`;

export default ErrorMessage;
