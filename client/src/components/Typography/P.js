import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { color, media } from 'global/theme';

const StyledP = styled.p`
  font-size: 16px;
  color: ${(props) =>
    props.color === 'white' ? color.gray400 : color.gray500};
  text-align: ${(props) => (props.align === 'center' ? 'center' : 'left')};

  ${(props) =>
    props.size === 'display' &&
    css`
      ${media.md`
      font-size: 1.125rem;
    `}
    `};
`;

function P({ children, ...props }) {
  return <StyledP {...props}>{children}</StyledP>;
}

export default P;
