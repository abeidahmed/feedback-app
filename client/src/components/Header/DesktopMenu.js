import React from 'react';
import { Link } from 'react-router-dom';

function DesktopMenu() {
  return (
    <nav className="items-center hidden space-x-4 md:flex md:space-x-8">
      <Link to="/" className="text-gray-600 hover:text-gray-900">
        Give your feedback
      </Link>
      <Link to="/" className="text-gray-600 hover:text-gray-900">
        Help
      </Link>
      <Link to="/" className="text-gray-600 hover:text-gray-900">
        Logout
      </Link>
    </nav>
  );
}

export default DesktopMenu;
