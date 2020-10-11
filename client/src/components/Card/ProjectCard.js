import React from 'react';
import { Link } from 'react-router-dom';

function ProjectCard() {
  return (
    <Link
      to="/app/helloworld"
      className="block min-w-0 col-span-1 p-4 border border-gray-200 rounded-md shadow focus:outline-none focus:shadow-outline-blue focus:border-blue-600 hover:shadow-md"
    >
      <h2 className="text-lg truncate">Google.com</h2>
      <div className="mt-2 space-y-2">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
          <p className="ml-2 text-sm leading-5 text-gray-500">
            <span className="font-medium text-gray-700">3</span> Feedbacks
          </p>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
          <p className="ml-2 text-sm leading-5 text-gray-500">
            <span className="font-medium text-gray-700">1</span> Member
          </p>
        </div>
      </div>
    </Link>
  );
}

export default ProjectCard;
