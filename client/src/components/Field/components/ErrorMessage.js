import React from 'react';
import styled from '@emotion/styled';
import { color } from 'global/theme';
import { errorHandler } from '../utils';

function ErrorMessage({ errors }) {
  if (!errors) return null;
  const { error, errorType, showKey = true } = errors;

  if (errorHandler({ errors: error, type: errorType, showKey })) {
    return (
      <StyledP>
        {errorHandler({ errors: error, type: errorType, showKey })}
      </StyledP>
    );
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
