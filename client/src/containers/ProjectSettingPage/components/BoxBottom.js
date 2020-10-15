import styled from '@emotion/styled';
import { media, color } from 'global/theme';

const BoxBottom = styled.div`
  padding: 16px;
  background-color: ${color.gray100};

  ${media.md`
    padding-left: 20px;
    padding-right: 20px;
  `}
`;

export default BoxBottom;
