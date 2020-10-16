import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

function Badge({ tag, ...props }) {
  const { name, bgColor, textColor } = tag;

  return (
    <StyledBadge backgroundColor={bgColor} color={textColor} {...props}>
      {name}
    </StyledBadge>
  );
}

const StyledBadge = styled.span`
  display: block;
  padding: 6px 8px;
  font-size: 14px;
  line-height: 12px;
  border-radius: 9999px;
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
`;

Badge.propTypes = {
  tag: PropTypes.object.isRequired,
};

export default Badge;
