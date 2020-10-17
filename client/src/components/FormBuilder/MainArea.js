import styled from '@emotion/styled';
import { boxShadow, media } from 'global/theme';

const MainArea = styled.div`
  padding: 32px 40px;
  margin-top: 32px;
  background-color: #fff;
  box-shadow: ${boxShadow.default};

  ${media.sm`
    border-radius: 6px;
  `}
`;

export default MainArea;
