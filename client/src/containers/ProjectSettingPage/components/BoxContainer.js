import styled from '@emotion/styled';
import { color, boxShadow } from 'global/theme';

const BoxContainer = styled.div`
  overflow: hidden;
  border: 1px solid ${color.gray200};
  border-radius: 6px;
  box-shadow: ${boxShadow.default};
`;

export default BoxContainer;
