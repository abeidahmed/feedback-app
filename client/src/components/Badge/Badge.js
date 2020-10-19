import styled from '@emotion/styled';

const Badge = styled.span`
  display: inline-block;
  padding: ${(props) => (props.size === 'sm' ? '4px 8px' : '6px 8px')};
  font-size: ${(props) => (props.size === 'sm' ? 12 : 14)}px;
  font-weight: ${(props) => props.fontWeight || 500};
  line-height: ${(props) => props.lineHeight || 12}px;
  border-radius: 9999px;
  background-color: ${(props) => props.bgColor};
  color: ${(props) => props.color};
`;

export default Badge;
