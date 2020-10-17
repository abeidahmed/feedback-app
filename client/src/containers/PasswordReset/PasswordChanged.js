import React from 'react';
import styled from '@emotion/styled';
import Logo from 'assets/Logo';
import { color, media, boxShadow } from 'global/theme';
import { H1 } from 'components/Typography';
import { Icon } from 'components/Icon';
import { Button } from 'components/Button';

function PasswordChanged() {
  return (
    <Main>
      <Wrapper>
        <div>
          <Header>
            <div>
              <Logo width="48" height="48" />
            </div>
            <H1 align="center">Password changed</H1>
          </Header>
          <MainArea>
            <ContentWrapper>
              <Icon
                icon="check-solid"
                stroke="none"
                fill="currentColor"
                viewBox="0 0 20 20"
              />
              <div>
                <p>
                  Your password has been updated successfully. Please login with
                  your new password to continue using the app.
                </p>
                <div>
                  <Button
                    to="/login"
                    size="lg"
                    color="primary"
                    rounded={9999}
                    iconRight
                  >
                    Go to login page
                    <Icon icon="chevron-right" width="16" height="16" />
                  </Button>
                </div>
              </div>
            </ContentWrapper>
          </MainArea>
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

const ContentWrapper = styled.div`
  text-align: center;
  font-size: 15px;
  color: ${color.gray600};

  > svg {
    color: ${color.green400};
    margin: 0 auto;
    width: 48px;
    height: 48px;
  }

  > div {
    margin-top: 16px;

    span {
      color: ${color.gray700};
      font-weight: 500;
      text-decoration: underline;
    }

    > * + * {
      margin-top: 8px;
    }
  }
`;

export default PasswordChanged;
