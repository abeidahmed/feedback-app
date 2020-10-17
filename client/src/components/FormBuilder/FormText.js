import styled from '@emotion/styled';
import { color } from 'global/theme';

const FormText = styled.p`
  color: ${color.gray600};
  font-size: 14px;
  text-align: center;
  font-weight: 400;

  > span,
  a {
    color: ${color.gray700};
    font-weight: 500;
  }

  > a {
    text-decoration: underline;
  }
`;

export default FormText;
