import React, { useState } from 'react';
import { queryCache, useMutation } from 'react-query';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { postInviteTeamMemberApi } from 'api/inviteTeamMember';
import { color, maxWidth, media, truncate } from 'global/theme';
import * as q from 'global/queryKey';
import { Button } from 'components/Button';
import { Input } from 'components/Field';
import { BoxContainer, BoxTop, BoxBottom } from './components';

function TeamPage({ project }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);
  const {
    id,
    included: { teamMembers },
  } = project;

  const [mutate, { isLoading }] = useMutation(postInviteTeamMemberApi, {
    onSuccess: () => {
      queryCache.refetchQueries(q.SHOW_PROJECT);
      setEmail('');
    },
    throwOnError: true,
  });

  async function handleInvite(e) {
    e.preventDefault();
    setError([]);
    try {
      await mutate({
        projectId: id,
        email,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
    <BoxContainer>
      <BoxTop title="Your team">
        <div>
          {teamMembers.map(({ id, email, invited }) => (
            <MemberDetail key={id}>
              <StyledP primary>{email}</StyledP>
              <StyledP>{invited ? 'Invited' : 'Member'}</StyledP>
            </MemberDetail>
          ))}
        </div>
      </BoxTop>
      <BoxBottom>
        <Form onSubmit={handleInvite}>
          <InputWrapper>
            <Input
              id="invite-email"
              type="email"
              label="Invite member"
              showLabel={false}
              placeholder="colleague@example.com"
              autoComplete="off"
              errors={{
                error,
                errorType: 'email',
              }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </InputWrapper>
          <Button disabled={isLoading || !email.length}>Invite member</Button>
        </Form>
      </BoxBottom>
    </BoxContainer>
  );
}

const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  > * + * {
    margin-left: 16px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  max-width: ${maxWidth.xs};
`;

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

export default TeamPage;
