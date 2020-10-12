import React from 'react';
import { Button } from 'components/Button';
import { Badge } from 'components/Badge';

function FeedbackCard({ feedback }) {
  const { content, device, pageUrl, senderEmail, tag, createdAt } = feedback;

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
          <Button appearance="gray" size="xs">
            Archive
          </Button>
          {senderEmail && (
            <Button appearance="blue" size="xs">
              Reply with mail
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
