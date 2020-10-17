import React from 'react';
import styled from '@emotion/styled';
import { color } from 'global/theme';
import { Icon } from 'components/Icon';
import { P } from 'components/Typography';

function Footer() {
  return (
    <StyledFooter>
      <div>
        <FooterInner>
          <SocialContainer>
            <StyledLink href="/">
              <Icon
                icon="twitter"
                className="w-6 h-6"
                fill="currentColor"
                stroke="none"
              />
            </StyledLink>
            <StyledLink href="/">
              <Icon
                icon="github"
                className="w-6 h-6"
                fill="currentColor"
                stroke="none"
              />
            </StyledLink>
          </SocialContainer>
        </FooterInner>
        <P marginTop={12}>&#169; 2020 Feeder, Inc. All rights reserved.</P>
      </div>
    </StyledFooter>
  );
}

const StyledFooter = styled.footer`
  padding: 40px;
  border-top: 1px solid ${color.gray200};
  display: flex;
  justify-content: center;
`;

const FooterInner = styled.div`
  display: flex;
  justify-content: center;
`;

const SocialContainer = styled.ul`
  display: flex;
  align-items: center;
  > * + * {
    margin-left: 20px;
  }
`;

const StyledLink = styled.a`
  color: ${color.gray500};
  transition: 150ms all ease-in-out;

  &:hover {
    color: ${color.gray800};
  }
`;

export default Footer;
