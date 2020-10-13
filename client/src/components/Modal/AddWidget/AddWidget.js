import React, { useEffect } from 'react';
import Prism from 'prismjs';
import { useModalType } from 'store/modal';
import ModalWrapper from '../ModalWrapper';

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
        <pre className="p-4 text-sm bg-gray-100 rounded-md">
          <code className="language-js">
            <CodeBlock />
          </code>
        </pre>
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

function CodeBlock() {
  return `fetch('https://api.feedback.fish/feedback', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    projectId: 'ae77fce6b9fb09',
    text: feedbackText,
    category: '', // Either "issue", "idea" or "other",
    userId: currentUser.email,
    metadata: {},
  }),
})`;
}

export default AddWidget;