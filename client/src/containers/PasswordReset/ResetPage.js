/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { Link, Redirect, useHistory, useRouteMatch } from 'react-router-dom';
import styled from '@emotion/styled';
import { useMutation, useQuery } from 'react-query';
import { useAddQuery } from 'utils/useAddQuery';
import { useCurrentUser } from 'store/currentUser';
import { patchPasswordApi } from 'api/patchPasswordReset';
import { showPasswordResetterApi } from 'api/showPasswordResetter';
import Logo from 'assets/Logo';
import { boxShadow, color, media } from 'global/theme';
import { H1 } from 'components/Typography';
import { Input } from 'components/Field';
import { Button } from 'components/Button';
import { Spinner } from 'components/Loader';
import PasswordChanged from './PasswordChanged';

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
    <Main>
      <Wrapper>
        <div>
          <Header>
            <div>
              <Logo width="48" height="48" />
            </div>
            <H1 align="center">Update your password</H1>
          </Header>
          <MainArea>
            <StyledP>
              Set your new password having <span>5 characters</span> or more.
            </StyledP>
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
          </MainArea>
          <footer
            css={css`
              margin-top: 16px;
              text-align: center;
            `}
          >
            <StyledP>
              Nevermind take be back to <Link to="/login">login page</Link>
            </StyledP>
          </footer>
        </div>
      </Wrapper>
    </Main>
  );
}

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 48px 0;
  background-color: ${color.gray50};

  ${media.sm`
    padding-left: 24px;
    padding-right: 24px;
  `}

  ${media.lg`
    padding-left: 32px;
    padding-right: 32px;
  `}
`;

const Wrapper = styled.div`
  width: 100%;

  ${media.sm`
    max-width: 28rem;
  `}
`;

const Header = styled.header`
  padding: 0 16px;

  > div {
    display: flex;
    justify-content: center;
  }
`;

const MainArea = styled.div`
  padding: 32px 40px;
  margin-top: 32px;
  background-color: #fff;
  box-shadow: ${boxShadow.default};

  ${media.sm`
    border-radius: 6px;
  `}
`;

const Form = styled.form`
  margin-top: 16px;
  > * + * {
    margin-top: 12px;
  }
`;

const StyledP = styled.p`
  color: ${color.gray600};
  font-size: 14px;

  > span,
  a {
    color: ${color.gray700};
    text-decoration: underline;
  }

  > a:hover {
    color: ${color.gray900};
  }
`;

export default ResetPage;
