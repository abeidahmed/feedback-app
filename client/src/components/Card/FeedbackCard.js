import React from 'react';
import { Button } from 'components/Button';
import { Badge } from 'components/Badge';

function FeedbackCard() {
  return (
    <div className="p-4 border border-gray-200 rounded-md shadow-sm md:col-span-2">
      <div className="flex items-center justify-between">
        <Badge title="Other" />
        <span className="text-sm text-gray-400">2 minutes ago</span>
      </div>
      <p className="mt-4 leading-7 text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia totam
        dicta iure. Adipisci, accusamus corrupti!
      </p>
      <div className="mt-3">
        <div className="space-y-2">
          <div>
            <span className="text-xs tracking-wide text-gray-400 uppercase">
              User
            </span>
            <p className="text-sm font-medium text-gray-700">abeid@gmail.com</p>
          </div>
          <div>
            <span className="text-xs tracking-wide text-gray-400 uppercase">
              Device
            </span>
            <p className="text-sm font-medium text-gray-700">
              Chrome 65, Windows 10
            </p>
          </div>
          <div>
            <span className="text-xs tracking-wide text-gray-400 uppercase">
              Page
            </span>
            <p className="text-sm font-medium text-gray-700">/about</p>
          </div>
        </div>
        <div className="flex justify-end space-x-2">
          <Button appearance="gray" size="xs">
            Archive
          </Button>
          <Button appearance="blue" size="xs">
            Reply with mail
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FeedbackCard;
