/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { postCode, CodeBlock as CodeWrapper } from 'components/CodeBlock';
import { H2, P } from 'components/Typography';
import { color, media } from 'global/theme';

function CodeBlock() {
  return (
    <Section>
      <div>
        <H2 align="center">Integrating is easy</H2>
        <P size="display" align="center">
          The API is friendly and fast.
        </P>
      </div>
      <CodeBlockWrapper>
        <div>
          <H2 color="white">Here is the API</H2>
          <P color="white">
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
`;

const CodeBlockWrapper = styled.div`
  padding: 48px 16px;
  margin: 32px -16px 0px -16px;
  background-color: ${color.gray800};
  border-top-right-radius: 56px;
  border-bottom-left-radius: 56px;

  ${media.sm`
    margin-left: 0;
    margin-right: 0;
  `}

  ${media.md`
    padding: 48px;
  `}
`;

export default CodeBlock;
