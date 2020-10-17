import React from 'react';
import { useModalType } from 'store/modal';
import ModalWrapper from '../ModalWrapper';
import { CodeBlock, postCode } from 'components/CodeBlock';
import { H2, P } from 'components/Typography';
import { color, media } from 'global/theme';
import styled from '@emotion/styled';

function AddWidget() {
  const {
    modalProps: { id, name },
  } = useModalType();

  return (
    <ModalWrapper size="lg">
      <section>
        <H2 align="center">Get started with Feeder</H2>
        <P marginTop={8}>
          Build your own form and submit the feedback to our API endpoint. Send
          a POST request to{' '}
          <Highlight underline breakWord>
            https://feeder-fish.herokuapp.com/v1/projects/:projectId/feedbacks?type=your_tag_name
          </Highlight>{' '}
          that looks like this:
        </P>
      </section>
      <MainContent>
        <CodeBlock lang="js" code={postCode} />
        <Footer>
          <Highlight underline>PS:</Highlight> The projectId varies with your
          project. Here is the projectId: <Highlight>{id}</Highlight> for your{' '}
          <Highlight>{name}</Highlight> project.
        </Footer>
      </MainContent>
    </ModalWrapper>
  );
}

const MainContent = styled.section`
  margin-top: 16px;
  > * + * {
    margin-top: 16px;
  }
`;

const Highlight = styled.span`
  font-weight: medium;
  color: ${color.gray900};
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  overflow-wrap: ${(props) => (props.breakWord ? 'break-word' : 'normal')};
`;

const Footer = styled.footer`
  font-size: 14px;
  line-height: 24px;
  color: ${color.gray600};

  ${media.md`
    font-size: 16px;
  `}
`;

export default AddWidget;
