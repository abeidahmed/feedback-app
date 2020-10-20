import React, { useState } from 'react';
import { queryCache, useMutation } from 'react-query';
import { postInviteTeamMemberApi } from 'api/projectInvitation';
import * as q from 'global/queryKey';
import { Input } from 'components/Field';
import { Button } from 'components/Button';
import styled from '@emotion/styled';
import { maxWidth } from 'global/theme';

function InviteForm({ projectId }) {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);

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
        projectId,
        email,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  return (
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

export default InviteForm;
