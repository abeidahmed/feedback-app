import React from 'react';
import styled from '@emotion/styled';
import UserIcon from './UserIcon';
import LanguageIcon from './LanguageIcon';
import CameraIcon from './CameraIcon';
import TeamIcon from './TeamIcon';
import { media } from 'global/theme';
import { P, H3 } from 'components/Typography';

function Feature() {
  return (
    <Section>
      <Wrapper>
        <FeatureSection>
          <div>
            <UserIcon width="56" height="56" />
          </div>
          <div>
            <H3>User Identification</H3>
            <P marginTop={8}>
              Reply to their customers by attaching their email address.
            </P>
          </div>
        </FeatureSection>
        <FeatureSection>
          <div>
            <LanguageIcon width="56" height="56" />
          </div>
          <div>
            <H3>More than 40 languages</H3>
            <P marginTop={8}>
              We speak the same language as your users. The widget automatically
              adapts.
            </P>
          </div>
        </FeatureSection>
        <FeatureSection>
          <div>
            <CameraIcon width="56" height="56" />
          </div>
          <div>
            <H3>One-click screenshots</H3>
            <P marginTop={8}>
              See what your users see with screenshots. Device information is
              automatically attached.
            </P>
          </div>
        </FeatureSection>
        <FeatureSection>
          <div>
            <TeamIcon width="56" height="56" />
          </div>
          <div>
            <H3>Team Friendly</H3>
            <P marginTop={8}>
              Bring your team on the same page. Give your colleagues access to
              your feedback.
            </P>
          </div>
        </FeatureSection>
      </Wrapper>
    </Section>
  );
}

const Section = styled.section`
  padding: 40px 0;
`;

const Wrapper = styled.div`
  display: grid;
  grid-row-gap: 32px;

  ${media.md`
    grid-template-columns: repeat(2, minmax(0, 1fr));
    row-gap: 24px;
    column-gap: 48px;
    grid-row-gap: 24px;
    grid-column-gap: 48px;
  `}

  ${media.lg`
    row-gap: 28px;
    grid-row-gap: 28px;
  `}
`;

const FeatureSection = styled.div`
  grid-column: span 1 / span 1;
  display: flex;
  > * + * {
    margin-left: 16px;
  }
`;

export default Feature;
