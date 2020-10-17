import styled from '@emotion/styled';
import { color } from 'global/theme';

const H3 = styled.h3`
  font-family: 'Inter';
  font-size: ${(props) => props.fontSize || 16}px;
  font-weight: 600;
  line-height: ${(props) => props.lineHeight || 24}px;
  color: ${(props) => props.color || color.gray700};
  text-align: ${(props) => props.align || 'left'};
`;

export default H3;
