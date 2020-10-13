import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import cn from 'classnames';
import { useCurrentUser } from 'store/currentUser';

function MobileMenu({ isActive }) {
  const { logout } = useCurrentUser();
  const history = useHistory();

  function handleLogout() {
    logout();
    history.push('/');
  }

  const mobileMenuClass = cn([
    'absolute w-full bg-white shadow md:hidden z-10',
    {
      block: isActive,
      hidden: !isActive,
    },
  ]);

  return (
    <nav className={mobileMenuClass}>
      <ul className="w-full py-2">
        <Link to="/" className="block w-full px-4 py-3">
          Give your feedback
        </Link>
        <Link to="/" className="block w-full px-4 py-3">
          Help
        </Link>
        <button
          className="block w-full px-4 py-3 text-left"
          onClick={handleLogout}
        >
          Logout
        </button>
      </ul>
    </nav>
  );
}

export default MobileMenu;
