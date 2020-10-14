import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, media } from 'global/theme';

const StyledH1 = styled.h1`
  color: ${color.gray800};
  font-weight: bold;
  text-align: ${(props) => (props.align === 'center' ? 'center' : 'left')};
  font-size: 1.5rem;

  ${media.sm`
    font-size: 1.875rem;
  `}

  ${media.lg`
    font-size: 2.25rem;
  `}

  ${(props) =>
    props.size === 'display' &&
    css`
      font-size: 2.25rem;
      line-height: 1.375;

      ${media.sm`
        font-size: 2.25rem;
      `}

      ${media.md`
      font-size: 3rem;
    `}
    `}
`;

function H1({ children, ...props }) {
  return <StyledH1 {...props}>{children}</StyledH1>;
}

export default H1;
