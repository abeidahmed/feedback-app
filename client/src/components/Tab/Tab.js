import React from 'react';
import { Link } from 'react-router-dom';

function Tab() {
  return (
    <nav className="mt-6 overflow-hidden md:hidden">
      <ul className="flex items-center pb-3 overflow-x-auto">
        <Link to="/" className="block px-4 py-1 border-b-2 border-blue-500">
          All
        </Link>
        <Link to="/" className="block px-4 py-1 border-b-2 border-transparent">
          Issue
        </Link>
        <Link to="/" className="block px-4 py-1 border-b-2 border-transparent">
          Idea
        </Link>
        <Link to="/" className="block px-4 py-1 border-b-2 border-transparent">
          Other
        </Link>
      </ul>
    </nav>
  );
}

export default Tab;
