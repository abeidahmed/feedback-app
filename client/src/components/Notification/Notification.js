import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, boxShadow, media } from 'global/theme';
import { useNotification } from 'store/notification';
import { Icon } from 'components/Icon';

function Notification() {
  const { element = {}, hideNotification } = useNotification();
  const { id, appearance, content } = element;

  /* eslint-disable */
  useEffect(() => {
    const timer = setTimeout(() => {
      hideNotification();
    }, 2000);

    return () => clearTimeout(timer);
  }, [id]);
  /* eslint-enable */

  if (!id) return null;

  return (
    <Aside>
      <NotificationWrapper color={appearance}>
        <MetaWrapper>
          <CheckIconWrapper>
            <Icon
              icon="check-solid"
              width={20}
              height={20}
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="none"
            />
          </CheckIconWrapper>
          <MainContent>
            <p>{content}</p>
          </MainContent>
        </MetaWrapper>
      </NotificationWrapper>
    </Aside>
  );
}

const Aside = styled.aside`
  position: sticky;
  top: 0;
  z-index: 999;
`;

const NotificationWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  box-shadow: ${boxShadow.default};
  border-radius: 6px;
  margin-left: 10px;

  ${media.md`
    top: 20px;
  `}

  ${media.lg`
    right: 50px;
  `}

  ${(props) =>
    props.color === 'SUCCESS' &&
    css`
      background-color: ${color.green50};
      color: ${color.green700};
    `}
`;

const MainContent = styled.div`
  margin-left: 12px;

  p {
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
  }
`;

const MetaWrapper = styled.div`
  display: flex;
`;

const CheckIconWrapper = styled.div`
  > svg {
    color: ${color.green400};
  }
`;

export default Notification;
