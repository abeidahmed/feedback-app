import React from 'react';
import { Link } from 'react-router-dom';
import { IconButton } from 'components/Button';
import { Icon } from 'components/Icon';

function FilterList() {
  return (
    <div className="hidden md:block md:col-span-1">
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-medium text-gray-500 uppercase">Filter</p>
        <IconButton size="sm" appearance="white" size="xs">
          <Icon icon="plus" className="w-5 h-5" />
        </IconButton>
      </div>
      <nav className="flex flex-col h-full -ml-3 space-y-2 overflow-hidden max-h-72">
        <ul className="mt-4 space-y-2 overflow-y-auto">
          <Link
            to="/"
            className="flex items-center justify-between px-3 py-2 font-medium leading-5 text-blue-500 bg-blue-100 rounded-md"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="ml-2">All</span>
            </div>
            1
          </Link>
          <Link
            to="/"
            className="flex items-center justify-between px-3 py-2 leading-5 text-gray-500 bg-transparent rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="ml-2">Issue</span>
            </div>
            1
          </Link>
          <Link
            to="/"
            className="flex items-center justify-between px-3 py-2 leading-5 text-gray-500 bg-transparent rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-orange-500 rounded-full"></div>
              <span className="ml-2">Idea</span>
            </div>
            1
          </Link>
          <Link
            to="/"
            className="flex items-center justify-between px-3 py-2 leading-5 text-gray-500 bg-transparent rounded-md hover:bg-gray-100"
          >
            <div className="flex items-center">
              <div className="flex-shrink-0 w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="ml-2">Other</span>
            </div>
            1
          </Link>
        </ul>
        <hr className="border-gray-200" />
        <Link
          to="/"
          className="flex items-center justify-between px-3 py-2 leading-5 text-gray-500 bg-transparent rounded-md hover:bg-gray-100"
        >
          <div className="flex items-center">
            <div className="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full"></div>
            <span className="ml-2">Archive</span>
          </div>
          1
        </Link>
      </nav>
    </div>
  );
}

export default FilterList;
