/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import { useCurrentUser } from 'store/currentUser';
import { Button } from 'components/Buttons';
import { Icon } from 'components/Icon';
import { H1, P } from 'components/Typography';

function Hero() {
  const { currentUser } = useCurrentUser();
  const buttonTitle =
    !Object.keys(currentUser).length && currentUser.constructor === Object
      ? 'Get started'
      : 'Go to dashboard';

  return (
    <section
      css={css`
        padding: 40px 0;
      `}
    >
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
      <div
        css={css`
          margin-top: 16px;
        `}
      >
        <Button to="/signup" color="primary" size="lg" rounded={9999} iconRight>
          {buttonTitle}
          <Icon icon="chevron-right" className="w-4 h-4 text-white" />
        </Button>
      </div>
    </section>
  );
}

export default Hero;
