/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/core';
import { Link, useHistory } from 'react-router-dom';
import { useMutation } from 'react-query';
import styled from '@emotion/styled';
import { useAddQuery } from 'utils/useAddQuery';
import { postPasswordReset } from 'api/postPasswordReset';
import { boxShadow, color, media } from 'global/theme';
import ResetEmailSent from './ResetEmailSent';
import Logo from 'assets/Logo';
import { H1 } from 'components/Typography';
import { Input } from 'components/Field';
import { Button } from 'components/Button';

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
    <Main>
      <Wrapper>
        <div>
          <Header>
            <div>
              <Logo width="48" height="48" />
            </div>
            <H1 align="center">Reset your password</H1>
          </Header>
          <MainArea>
            <StyledP>
              To reset your password, enter the <span>email address</span> that
              you used to use to sign in.
            </StyledP>
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

export default InitiatePage;
