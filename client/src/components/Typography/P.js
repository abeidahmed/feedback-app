import styled from '@emotion/styled';
import { color } from 'global/theme';

const P = styled.p`
  font-size: ${(props) => props.fontSize || 16}px;
  text-align: ${(props) => props.align || 'left'};
  margin-top: ${(props) => props.marginTop}px;
  color: ${(props) => props.color || color.gray600};
  line-height: ${(props) => props.lineHeight || 24}px;
`;

export default P;
