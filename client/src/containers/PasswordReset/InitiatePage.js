/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import Logo from 'assets/Logo';
import { boxShadow, color, media } from 'global/theme';
import { H1 } from 'components/Typography';
import { Input } from 'components/Field';

function InitiatePage() {
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
            <Form>
              <Input id="password-reset-in-email" label="Email address" />
              <div>
                <Button>Get reset link</Button>
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

const Button = styled.button`
  background-color: ${color.blue500};
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 12px;
  width: 100%;
  line-height: 24px;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid transparent;

  &:hover {
    background-color: ${color.blue600};
  }

  &:focus {
    outline: none;
    box-shadow: ${boxShadow.outline};
    border-color: ${color.blue700};
  }

  ${media.sm`
    font-size: 14px;
    line-height: 20px;
  `}
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