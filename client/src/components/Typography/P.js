import styled from '@emotion/styled';
import { color } from 'global/theme';

const P = styled.p`
  font-size: ${(props) => props.fontSize || 16}px;
  text-align: ${(props) => props.align || 'left'};
  margin-top: ${(props) => props.marginTop}px;
  margin-left: ${(props) => props.marginLeft}px;
  color: ${(props) => props.color || color.gray600};
  line-height: ${(props) => props.lineHeight || 24}px;
  font-weight: ${(props) => props.fontWeight || 400};
`;

export default P;
