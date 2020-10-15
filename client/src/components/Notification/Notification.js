import React, { useEffect } from 'react';
import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { color, boxShadow } from 'global/theme';
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
          <p>{content}</p>
          <button onClick={hideNotification}>
            <XIcon icon="x" />
          </button>
        </MetaWrapper>
      </NotificationWrapper>
    </Aside>
  );
}

const Aside = styled.aside`
  position: sticky;
  top: 0;
  z-index: 999;
  > * + * {
    margin-top: 64px;
  }
`;

const NotificationWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 50px;
  padding: 16px;
  border-left: 4px solid ${color.green700};
  box-shadow: ${boxShadow.default};

  p {
    font-size: 14px;
    line-height: 20px;
  }

  ${(props) =>
    props.color === 'SUCCESS' &&
    css`
      background-color: ${color.green50};
      color: ${color.green700};
      font-weight: 500;

      button {
        padding: 2px;
        border-radius: 6px;

        &:focus {
          outline: none;
          background-color: ${color.green100};
        }
      }
    `}
`;

const MetaWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  > * + * {
    margin-left: 24px;
  }
`;

const XIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;

export default Notification;
