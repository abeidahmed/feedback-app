import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { color, media } from 'global/theme';

function BoxTop({ title, children }) {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div>{children}</div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 16px;

  ${media.md`
    padding-left: 20px;
    padding-right: 20px;
  `}

  > h2 {
    font-size: 18px;
    font-weight: 700;
    color: ${color.gray700};

    ${media.md`
      font-size: 1.125rem;
    `}
  }

  > div {
    margin-top: 12px;
  }
`;

BoxTop.propTypes = {
  title: PropTypes.string.isRequired,
};

export default BoxTop;
