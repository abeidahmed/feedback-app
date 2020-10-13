import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { Container } from 'components/Container';
import { Icon } from 'components/Icon';

function PageHeader({
  backButton = true,
  pageTitle,
  pageDescription,
  children,
}) {
  const history = useHistory();
  const { url } = useRouteMatch('/app/:id');

  return (
    <main>
      <Container>
        <section className="py-8">
          <header className="flex items-center justify-between">
            {backButton && (
              <button
                className="inline-flex items-center -ml-1 text-sm text-gray-500 w-14 hover:text-gray-700 focus:outline-none focus:text-gray-900"
                onClick={() => history.push(url)}
              >
                <Icon icon="chevron-left" className="w-4 h-4" />
                <span className="pl-1">Back</span>
              </button>
            )}
            <div className="mx-auto">
              <h1 className="text-2xl font-bold text-center sm:text-3xl lg:text-4xl">
                {pageTitle}
              </h1>
              {pageDescription && (
                <p className="text-sm text-center text-gray-500 md:text-base">
                  {pageDescription}
                </p>
              )}
            </div>
            {backButton && (
              <span aria-hidden="true" className="inline-block w-14"></span>
            )}
          </header>
          <section className="py-6">{children}</section>
        </section>
      </Container>
    </main>
  );
}

PageHeader.propTypes = {
  backButton: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
  pageDescription: PropTypes.string,
};

export default PageHeader;
