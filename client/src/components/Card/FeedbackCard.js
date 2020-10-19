/** @jsx jsx */
import React from 'react';
import { jsx } from '@emotion/core';
import styled from '@emotion/styled';
import { useRefetchMutation } from 'utils/useRefetchMutation';
import { useNotification } from 'store/notification';
import { archiveFeedbackApi } from 'api/patchFeedback';
import { deleteFeedbackApi } from 'api/deleteFeedback';
import { simpleEmailValidation } from 'utils/simpleEmailValidation';
import * as q from 'global/queryKey';
import { boxShadow, color } from 'global/theme';
import { Button } from 'components/Button';
import { Badge } from 'components/Badge';
import { P } from 'components/Typography';

function FeedbackCard({ feedback, projectId }) {
  const {
    id,
    content,
    device,
    pageUrl,
    senderEmail,
    included: { tag },
    createdAt,
    archived,
  } = feedback;

  const { addNotification, states } = useNotification();

  const [
    archiveFeedback,
    { isLoading: archiving },
  ] = useRefetchMutation(archiveFeedbackApi, [
    q.GET_FEEDBACKS,
    q.GET_TAGS,
    q.GET_ARCHIVE_TAG,
  ]);

  async function handleArchive(content) {
    await archiveFeedback({
      id,
      projectId,
    });
    handleNotification({
      content,
      appearance: states.success,
    });
  }

  const [
    deleteFeedback,
    { isLoading: deleting },
  ] = useRefetchMutation(deleteFeedbackApi, [
    q.GET_ARCHIVE_TAG,
    q.GET_FEEDBACKS,
  ]);

  async function handleDelete() {
    await deleteFeedback({
      id,
      projectId,
    });
    handleNotification({
      content: 'Deleted feedback!',
      appearance: states.success,
    });
  }

  function handleNotification({ content, appearance }) {
    addNotification({
      element: {
        id,
        appearance,
        content,
      },
    });
  }

  return (
    <div
      css={{
        padding: 16,
        border: '1px solid',
        borderColor: color.gray200,
        borderRadius: 6,
        boxShadow: boxShadow.sm,
      }}
    >
      <div
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Badge color={tag.textColor} bgColor={tag.bgColor}>
          {tag.name}
        </Badge>
        <P as="span" fontSize={14} color={color.gray400}>
          {createdAt} ago
        </P>
      </div>
      <P marginTop={16}>{content}</P>
      <div className="mt-3">
        <div css={{ '> * + *': { marginTop: 8 } }}>
          {senderEmail && (
            <div>
              <StyledSpan>User</StyledSpan>
              <P fontSize={14} fontWeight={500}>
                {senderEmail}
              </P>
            </div>
          )}
          {device && (
            <div>
              <StyledSpan>Device</StyledSpan>
              <P fontSize={14} fontWeight={500}>
                {device}
              </P>
            </div>
          )}
          {pageUrl && (
            <div>
              <StyledSpan>Page</StyledSpan>
              <P fontSize={14} fontWeight={500}>
                {pageUrl}
              </P>
            </div>
          )}
        </div>
        <div
          css={{
            display: 'flex',
            justifyContent: 'flex-end',
            marginTop: 12,
            '> * + * ': {
              marginLeft: 8,
            },
          }}
        >
          {archived ? (
            <React.Fragment>
              <Button
                appearance="minimal"
                size="sm"
                onClick={() => handleArchive('Unarchived feedback!')}
                disabled={archiving}
              >
                Undo Archive
              </Button>
              <Button
                color="danger"
                appearance="minimal"
                size="sm"
                onClick={handleDelete}
                disabled={deleting}
              >
                Delete
              </Button>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Button
                appearance="minimal"
                size="sm"
                onClick={() => handleArchive('Archived feedback!')}
                disabled={archiving}
              >
                Archive
              </Button>
              {simpleEmailValidation(senderEmail) && (
                <Button
                  href={`mailto:${senderEmail}`}
                  color="primary"
                  appearance="minimal"
                  size="sm"
                >
                  Reply with mail
                </Button>
              )}
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
}

const StyledSpan = styled.span`
  text-transform: uppercase;
  font-size: 12px;
  color: ${color.gray400};
  letter-spacing: 0.025em;
`;

export default FeedbackCard;
