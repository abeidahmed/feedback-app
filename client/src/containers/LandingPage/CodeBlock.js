import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { PostReqCode } from 'components/CodeBlock';

function CodeBlock() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <section className="py-10">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-snug text-gray-700 md:text-4xl">
          Integrating is easy
        </h2>
        <p className="mt-2 text-base text-gray-500 md:text-lg">
          The API is friendly and fast.
        </p>
      </div>
      <div
        className="px-4 py-12 mt-8 -mx-4 bg-gray-800 md:px-12 sm:-mx-0"
        style={{ borderTopRightRadius: 55, borderBottomLeftRadius: 55 }}
      >
        <div>
          <h2 className="text-3xl font-bold leading-snug text-gray-100">
            Here is the API
          </h2>
          <p className="mt-2 text-base text-gray-400">
            Make a POST request to this API endpoint and we will handle the
            rest.
          </p>
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
