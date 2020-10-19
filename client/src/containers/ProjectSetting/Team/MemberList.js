import React from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, media, truncate } from 'global/theme';

function MemberList({ teamMembers }) {
  return (
    <div>
      {teamMembers.map(({ id, email, invited }) => (
        <MemberDetail key={id}>
          <StyledP primary>{email}</StyledP>
          <StyledP>{invited ? 'Invited' : 'Member'}</StyledP>
        </MemberDetail>
      ))}
    </div>
  );
}

const StyledP = styled.p`
  font-size: 14px;
  color: ${color.gray400};

  ${(props) =>
    props.primary &&
    css`
      color: ${color.gray700};
      ${truncate};
    `}

  ${media.md`
    font-size: 16px;
  `}
`;

const MemberDetail = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 0;
  padding: 8px 0;

  &:not(:first-of-type) {
    border-top: 1px solid ${color.gray200};
  }

  > * + * {
    margin-left: 12px;
  }
`;

export default MemberList;
