import styled from '@emotion/styled';
import { media } from 'global/theme';

const Wrapper = styled.div`
  width: 100%;

  ${media.sm`
    max-width: 28rem;
  `}
`;

export default Wrapper;
