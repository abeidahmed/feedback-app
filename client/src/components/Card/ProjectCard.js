import React from 'react';
import { Link } from 'react-router-dom';
import { pluralize } from 'utils/pluralize';

function ProjectCard({ project }) {
  const { id, name, included: { feedbacks, members } = {} } = project;
  const {
    meta: { feedbacksCount },
  } = feedbacks;
  const {
    meta: { membersCount },
  } = members;

  return (
    <Link
      to={`/app/${id}`}
      className="block min-w-0 col-span-1 p-4 border border-gray-200 rounded-md shadow focus:outline-none focus:shadow-outline-blue focus:border-blue-600 hover:shadow-md"
    >
      <h2 className="text-lg truncate">{name}</h2>
      <div className="mt-2 space-y-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
          <p className="ml-2 text-sm leading-5 text-gray-500">
            <span className="font-medium text-gray-700">{feedbacksCount}</span>{' '}
            {pluralize(feedbacksCount, 'Feedback')}
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
          <p className="ml-2 text-sm leading-5 text-gray-500">
            <span className="font-medium text-gray-700">{membersCount}</span>{' '}
            {pluralize(membersCount, 'Member')}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
