/** @jsx jsx */
import { jsx } from '@emotion/core';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { color } from 'global/theme';
import { Container } from 'components/Container';
import { Icon } from 'components/Icon';
import { H1, P } from 'components/Typography';

function PageHeader({
  backButton = true,
  pageTitle,
  pageDescription,
  children,
}) {
  const history = useHistory();
  const { url } = useRouteMatch('/app/:id');

  return (
    <main>
      <Container>
        <Section spaceY={32}>
          <Header>
            {backButton && (
              <StyledButton onClick={() => history.push(url)}>
                <Icon icon="chevron-left" />
                <span>Back</span>
              </StyledButton>
            )}
            <div
              css={{
                margin: '0 auto',
              }}
            >
              <H1 align="center">{pageTitle}</H1>
              {pageDescription && <P align="center">{pageDescription}</P>}
            </div>
            {backButton && (
              <span
                aria-hidden="true"
                css={{
                  display: 'inline-block',
                  width: 56,
                }}
              ></span>
            )}
          </Header>
          <Section spaceY={24}>{children}</Section>
        </Section>
      </Container>
    </main>
  );
}

const Section = styled.section`
  padding-top: ${(props) => props.spaceY}px;
  padding-bottom: ${(props) => props.spaceY}px;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledButton = styled.button`
  display: inline-flex;
  align-items: center;
  margin-left: 4px;
  font-size: 14px;
  color: ${color.gray500};
  width: 56px;

  &:hover {
    color: ${color.gray700};
  }

  &:focus {
    outline: none;
    color: ${color.gray900};
  }

  > svg {
    width: 16px;
    height: 16px;
  }

  > span {
    padding-left: 4px;
  }
`;

PageHeader.propTypes = {
  backButton: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
};

export default PageHeader;
