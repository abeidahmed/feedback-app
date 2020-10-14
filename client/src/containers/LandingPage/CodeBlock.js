import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { PostReqCode } from 'components/CodeBlock';
import { H2, P } from 'components/Typography';

function CodeBlock() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

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
          <pre className="p-4 text-sm bg-gray-100 rounded-md md:text-base">
            <code className="language-js">
              <PostReqCode />
            </code>
          </pre>
        </div>
      </div>
    </section>
  );
}

export default CodeBlock;
