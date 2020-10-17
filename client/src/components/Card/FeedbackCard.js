import React from 'react';
import { useRefetchMutation } from 'utils/useRefetchMutation';
import { useNotification } from 'store/notification';
import { archiveFeedbackApi } from 'api/patchFeedback';
import { deleteFeedbackApi } from 'api/deleteFeedback';
import { simpleEmailValidation } from 'utils/simpleEmailValidation';
import * as q from 'global/queryKey';
import { Button } from 'components/Buttons';
import { Badge } from 'components/Badge';

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
    <div className="p-4 border border-gray-200 rounded-md shadow-sm">
      <div className="flex items-center justify-between">
        <Badge tag={tag} />
        <span className="text-sm text-gray-400">{createdAt} ago</span>
      </div>
      <p className="mt-4 leading-7 text-gray-600">{content}</p>
      <div className="mt-3">
        <div className="space-y-2">
          {senderEmail && (
            <div>
              <span className="text-xs tracking-wide text-gray-400 uppercase">
                User
              </span>
              <p className="text-sm font-medium text-gray-700">{senderEmail}</p>
            </div>
          )}
          {device && (
            <div>
              <span className="text-xs tracking-wide text-gray-400 uppercase">
                Device
              </span>
              <p className="text-sm font-medium text-gray-700">{device}</p>
            </div>
          )}
          {pageUrl && (
            <div>
              <span className="text-xs tracking-wide text-gray-400 uppercase">
                Page
              </span>
              <p className="text-sm font-medium text-gray-700">{pageUrl}</p>
            </div>
          )}
        </div>
        <div className="flex justify-end mt-3 space-x-2">
          {archived ? (
            <>
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
            </>
          ) : (
            <>
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
