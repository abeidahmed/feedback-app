import React from 'react';
import { useRefetchMutation } from 'utils/useRefetchMutation';
import { archiveFeedbackApi } from 'api/patchFeedback';
import * as q from 'global/queryKey';
import { Button } from 'components/Button';
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

  const [
    mutate,
    { isLoading: archiving },
  ] = useRefetchMutation(archiveFeedbackApi, [
    q.GET_FEEDBACKS,
    q.GET_TAGS,
    q.GET_ARCHIVE_TAG,
  ]);

  async function handleArchive() {
    await mutate({
      id,
      projectId,
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
        <div className="flex justify-end space-x-2">
          {archived ? (
            <>
              <Button
                appearance="gray"
                size="xs"
                onClick={handleArchive}
                disabled={archiving}
              >
                Undo Archive
              </Button>
              <Button appearance="danger" size="xs">
                Delete
              </Button>
            </>
          ) : (
            <>
              <Button
                appearance="gray"
                size="xs"
                onClick={handleArchive}
                disabled={archiving}
              >
                Archive
              </Button>
              {senderEmail && (
                <Button appearance="blue" size="xs">
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
