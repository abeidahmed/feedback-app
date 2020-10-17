/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { color, media } from 'global/theme';
import { postCode, CodeBlock as CodeWrapper } from 'components/CodeBlock';
import { H2, P } from 'components/Typography';
import { BrandFeedbackForm } from 'components/FeedbackForm';

function CodeBlock() {
  return (
    <Section>
      <HeadWrapper>
        <H2 align="center">Integrating is easy</H2>
        <P align="center">The API is friendly and fast.</P>
        <Pattern large></Pattern>
        <Pattern></Pattern>
        <WidgetWrapper>
          <BrandFeedbackForm isActive={true} onClose={() => {}} />
        </WidgetWrapper>
      </HeadWrapper>
      <CodeBlockWrapper>
        <div>
          <H2 color="white">Here is the API</H2>
          <P color={color.gray400}>
            Make a POST request to this API endpoint and we will handle the
            rest.
          </P>
        </div>
        <div
          css={css`
            margin-top: 16px;
          `}
        >
          <CodeWrapper lang="js" code={postCode} />
        </div>
      </CodeBlockWrapper>
    </Section>
  );
}

const Section = styled.section`
  padding: 40px 0;
  margin: 0 -16px;

  ${media.sm`
    margin: 0;
  `}
`;

const HeadWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const Pattern = styled.div`
  background-color: #f96700;
  position: absolute;
  bottom: 0;
  border-top-left-radius: 1000px;
  border-top-right-radius: 1000px;
  height: 225px;
  width: 450px;
  left: 50%;
  transform: translateX(-50%);

  ${(props) =>
    props.large &&
    css`
      border-top-left-radius: 1200px;
      border-top-right-radius: 1200px;
      height: 285px;
      width: 600px;
      background-color: #ffe1cc;
    `}
`;

const WidgetWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 48px 0;
`;

const CodeBlockWrapper = styled.div`
  padding: 48px 16px;
  background-color: ${color.gray800};

  ${media.sm`
    border-top-right-radius: 56px;
    border-bottom-left-radius: 56px;

  `}

  ${media.md`
    padding: 48px;
  `}
`;

export default CodeBlock;
