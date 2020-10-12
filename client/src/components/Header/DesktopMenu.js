import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useCurrentUser } from 'store/currentUser';

function DesktopMenu() {
  const history = useHistory();
  const { logout } = useCurrentUser();

  function handleLogout() {
    logout();
    history.push('/');
  }

  return (
    <nav className="items-center hidden space-x-4 md:flex md:space-x-8">
      <Link to="/" className="text-gray-600 hover:text-gray-900">
        Give your feedback
      </Link>
      <Link to="/" className="text-gray-600 hover:text-gray-900">
        Help
      </Link>
      <button
        className="text-gray-600 hover:text-gray-900"
        onClick={handleLogout}
      >
        Logout
      </button>
    </nav>
  );
}

export default DesktopMenu;
