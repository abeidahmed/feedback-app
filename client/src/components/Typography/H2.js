import React from 'react';
import styled from '@emotion/styled';
import { color, media } from 'global/theme';

const StyledH2 = styled.h2`
  font-size: 1.875rem;
  font-weight: bold;
  line-height: 1.375;
  color: ${(props) => (props.color === 'white' ? 'white' : color.gray700)};
  text-align: ${(props) => (props.align === 'center' ? 'center' : 'left')};

  ${media.md`
    font-size: 2.25rem;
  `};
`;

function H2({ children, ...props }) {
  return <StyledH2 {...props}>{children}</StyledH2>;
}

export default H2;
