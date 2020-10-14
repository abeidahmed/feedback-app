import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { useModalType } from 'store/modal';
import ModalWrapper from '../ModalWrapper';
import { CodeBlock, postCode } from 'components/CodeBlock';

function AddWidget() {
  const {
    modalProps: { id, name },
  } = useModalType();

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  return (
    <ModalWrapper size="lg">
      <section>
        <h2 className="text-2xl font-bold text-center sm:text-3xl">
          Get started with Feeder
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600 md:text-base">
          Build your own form and submit the feedback to our API endpoint. Send
          a POST request to{' '}
          <span className="font-medium text-gray-900 underline">
            https://feeder.com/v1/projects/:projectId/feedbacks
          </span>{' '}
          that looks like this:
        </p>
      </section>
      <section className="mt-4 space-y-4">
        <CodeBlock lang="js" code={postCode} />
        <footer className="text-sm leading-6 text-gray-600 md:text-base">
          <span className="font-medium text-gray-900 underline">PS:</span> The
          projectId varies with your project. Here is the projectId:{' '}
          <span className="font-medium text-gray-900">{id}</span> for your{' '}
          <span className="font-medium text-gray-900">{name}</span> project.
        </footer>
      </section>
    </ModalWrapper>
  );
}

export default AddWidget;
