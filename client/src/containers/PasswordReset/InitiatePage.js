import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import { useAddQuery } from 'utils/useAddQuery';
import { postPasswordReset } from 'api/postPasswordReset';
import ResetEmailSent from './ResetEmailSent';
import Logo from 'assets/Logo';
import { H1 } from 'components/Typography';
import { Input } from 'components/Field';
import { Button } from 'components/Button';
import {
  FormMain,
  FormMainArea,
  FormWrapper,
  Form,
  FormHeader,
  FormText,
  FormFooter,
} from 'components/FormBuilder';

function InitiatePage() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState([]);
  const history = useHistory();
  const {
    queryString: { email_sent },
  } = useAddQuery();

  const [mutate, { isLoading }] = useMutation(postPasswordReset, {
    onSuccess: () => {
      history.push(
        encodeURI(`/password_reset?email_sent=true&receiver=${email}`)
      );
    },
    throwOnError: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    setError([]);
    try {
      await mutate({
        email,
      });
    } catch (err) {
      setError(err.response.data.message.split());
    }
  }

  if (email_sent) return <ResetEmailSent />;

  return (
    <FormMain>
      <FormWrapper>
        <div>
          <FormHeader>
            <div>
              <Logo width="48" height="48" />
            </div>
            <H1 align="center">Reset your password</H1>
          </FormHeader>
          <FormMainArea>
            <FormText>
              To reset your password, enter the <span>email address</span> that
              your used to sign in.
            </FormText>
            <Form onSubmit={handleSubmit}>
              <Input
                id="password-reset-in-email"
                label="Email address"
                type="email"
                required
                error={error}
                errorType="invalid"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <Button
                  disabled={isLoading || !email.length}
                  color="primary"
                  width="100%"
                >
                  Get reset link
                </Button>
              </div>
            </Form>
          </FormMainArea>
          <FormFooter>
            <FormText>
              Nevermind take be back to <Link to="/login">login page</Link>
            </FormText>
          </FormFooter>
        </div>
      </FormWrapper>
    </FormMain>
  );
}

export default InitiatePage;
