import React from 'react';
import UserIcon from './UserIcon';
import LanguageIcon from './LanguageIcon';
import CameraIcon from './CameraIcon';
import TeamIcon from './TeamIcon';

function Feature() {
  return (
    <section className="py-10">
      <div className="grid gap-y-8 md:grid-cols-2 md:gap-x-4 lg:gap-x-5 md:gap-y-12">
        <div className="flex space-x-4 md:col-span-1">
          <div>
            <UserIcon className="w-14 h-14" />
          </div>
          <div>
            <h4 className="font-sans font-semibold text-gray-700">
              User Identification
            </h4>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Reply to their customers by attaching their email address.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 md:col-span-1">
          <div>
            <LanguageIcon className="w-14 h-14" />
          </div>
          <div>
            <h4 className="font-sans font-semibold text-gray-700">
              More than 40 languages
            </h4>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              We speak the same language as your users. The widget automatically
              adapts.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 md:col-span-1">
          <div>
            <CameraIcon className="w-14 h-14" />
          </div>
          <div>
            <h4 className="font-sans font-semibold text-gray-700">
              One-click screenshots
            </h4>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              See what your users see with screenshots. Device information is
              automatically attached.
            </p>
          </div>
        </div>
        <div className="flex space-x-4 md:col-span-1">
          <div>
            <TeamIcon className="w-14 h-14" />
          </div>
          <div>
            <h4 className="font-sans font-semibold text-gray-700">
              Team Friendly
            </h4>
            <p className="mt-2 text-sm text-gray-600 md:text-base">
              Bring your team on the same page. Give your colleagues access to
              your feedback.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Feature;
