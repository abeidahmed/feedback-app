import React, { useState } from 'react';
import { Link, Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import { useMutation, useQuery } from 'react-query';
import { useAddQuery } from 'utils/useAddQuery';
import { useCurrentUser } from 'store/currentUser';
import { patchPasswordApi } from 'api/patchPasswordReset';
import { showPasswordResetterApi } from 'api/showPasswordResetter';
import Logo from 'assets/Logo';
import { H1 } from 'components/Typography';
import { Input } from 'components/Field';
import { Button } from 'components/Button';
import { Spinner } from 'components/Loader';
import PasswordChanged from './PasswordChanged';
import {
  FormMain,
  FormMainArea,
  FormWrapper,
  Form,
  FormHeader,
  FormFooter,
  FormText,
} from 'components/FormBuilder';

function ResetPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState([]);
  const history = useHistory();
  const { url } = useRouteMatch();
  const { logout } = useCurrentUser();

  const {
    queryString: { token, reset_state },
  } = useAddQuery();

  const [mutate, { isLoading }] = useMutation(patchPasswordApi, {
    onSuccess: () => {
      logout(); // we do not want old instances of the user.
      history.push(`${url}?reset_state=success`);
    },
    throwOnError: true,
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await mutate({
        token,
        password,
      });
    } catch (err) {
      setError(err.response.data.message);
    }
  }

  const { isLoading: fetchingUser, isError } = useQuery(
    ['passwordReset', { token }],
    showPasswordResetterApi,
    {
      enabled: token,
    }
  );

  if (reset_state) return <PasswordChanged />;
  if (fetchingUser) return <Spinner />;
  if (isError)
    return (
      <Redirect
        to={{ pathname: '/password_reset', search: '?token=invalid' }}
      />
    );

  return (
    <FormMain>
      <FormWrapper>
        <div>
          <FormHeader>
            <div>
              <Logo width="48" height="48" />
            </div>
            <H1 align="center">Update your password</H1>
          </FormHeader>
          <FormMainArea>
            <FormText>
              Set your new password having <span>5 characters</span> or more.
            </FormText>
            <Form onSubmit={handleSubmit}>
              <Input
                id="password-update"
                label="Password"
                type="password"
                required
                error={error}
                errorType="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <div>
                <Button disabled={isLoading} color="primary" width="100%">
                  Update password
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

export default ResetPage;
