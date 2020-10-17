import styled from '@emotion/styled';
import { color, media } from 'global/theme';

const H2 = styled.h2`
  font-size: ${(props) => props.fontSize || 30}px;
  font-weight: bold;
  line-height: ${(props) => props.lineHeight || 50}px;
  color: ${(props) => props.color || color.gray700};
  text-align: ${(props) => props.align || 'left'};

  ${media.md`
    font-size: 2.25rem;
  `};
`;

export default H2;
