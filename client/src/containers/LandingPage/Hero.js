/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useCurrentUser } from 'store/currentUser';
import { Button } from 'components/Button';
import { Icon } from 'components/Icon';
import { H1, P } from 'components/Typography';

function Hero() {
  const { currentUser } = useCurrentUser();
  const buttonTitle =
    !Object.keys(currentUser).length && currentUser.constructor === Object
      ? 'Get started'
      : 'Go to dashboard';

  return (
    <section className="py-10">
      <H1 size="display">
        Get feedback. <br /> Make your customers happy.
      </H1>
      <P
        size="display"
        css={css`
          margin-top: 12px;
          max-width: 28rem;
          line-height: 28px;
        `}
      >
        Collect issues, ideas and compliments with a simple widget. Receive them
        as email. Dive deep with the dashboard.
      </P>
      <div className="mt-4">
        <Button
          to="/signup"
          appearance="primary"
          size="sm"
          className="rounded-full md:hidden"
        >
          {buttonTitle}
          <Icon
            icon="chevron-right"
            className="w-4 h-5 ml-1 -mr-1 text-white"
          />
        </Button>
        <Button
          to="/signup"
          appearance="primary"
          size="md"
          className="hidden rounded-full md:inline-flex"
        >
          {buttonTitle}
          <Icon
            icon="chevron-right"
            className="w-4 h-5 ml-1 -mr-1 text-white"
          />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
