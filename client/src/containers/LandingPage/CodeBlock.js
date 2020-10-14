import React from 'react';
import { postCode, CodeBlock as CodeWrapper } from 'components/CodeBlock';
import { H2, P } from 'components/Typography';

function CodeBlock() {
  return (
    <section className="py-10">
      <div>
        <H2 align="center">Integrating is easy</H2>
        <P size="display" align="center">
          The API is friendly and fast.
        </P>
      </div>
      <div
        className="px-4 py-12 mt-8 -mx-4 bg-gray-800 md:px-12 sm:-mx-0"
        style={{ borderTopRightRadius: 55, borderBottomLeftRadius: 55 }}
      >
        <div>
          <H2 color="white">Here is the API</H2>
          <P color="white">
            Make a POST request to this API endpoint and we will handle the
            rest.
          </P>
        </div>
        <div className="mt-4">
          <CodeWrapper lang="js" code={postCode} />
        </div>
      </div>
    </section>
  );
}

export default CodeBlock;
