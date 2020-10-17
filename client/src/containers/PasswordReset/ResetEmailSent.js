/** @jsx jsx */
import { Link } from 'react-router-dom';
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useAddQuery } from 'utils/useAddQuery';
import { color, media, boxShadow } from 'global/theme';
import { H1 } from 'components/Typography';
import { EmailSentSvg, Logo } from 'assets/svg';

function ResetEmailSent() {
  const {
    queryString: { receiver },
  } = useAddQuery();

  return (
    <Main>
      <Wrapper>
        <div>
          <Header>
            <div>
              <Logo width="48" height="48" />
            </div>
            <H1 align="center">Check your inbox</H1>
          </Header>
          <MainArea>
            <ContentWrapper>
              <EmailSentSvg />
              <div>
                <p>
                  Account recovery email sent to <span>{receiver}</span> (valid
                  for the next 2 hours).
                </p>
                <p>
                  If you don’t see this email in your inbox, look for it in your
                  junk mail folder.
                </p>
              </div>
            </ContentWrapper>
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

const ContentWrapper = styled.div`
  text-align: center;
  font-size: 15px;
  color: ${color.gray600};

  > svg {
    margin: 0 auto;
    width: 200px;
    height: auto;
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

export default ResetEmailSent;
