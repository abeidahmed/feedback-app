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
            <div>
              <Icon icon="check" width={16} height={16} />
            </div>
          </CheckIconWrapper>
          <MainContent>
            <p>{content}</p>
            <div>
              <button onClick={hideNotification}>
                <XIcon icon="x" />
              </button>
            </div>
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

const MainContent = styled.div`
  margin-left: 12px;
  display: flex;

  > * + * {
    margin-left: 16px;
  }
`;

const MetaWrapper = styled.div`
  display: flex;
`;

const CheckIconWrapper = styled.div`
  border-radius: 9999px;

  > div {
    background-color: ${color.green400};
    border-radius: 9999px;
    flex-shrink: 0;
    padding: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 2px;

    > svg {
      color: #fff;
    }
  }
`;

const XIcon = styled(Icon)`
  width: 20px;
  height: 20px;
`;

export default Notification;
