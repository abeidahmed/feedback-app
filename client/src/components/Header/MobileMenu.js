import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

function MobileMenu({ isActive }) {
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
        <Link to="/" className="block w-full px-4 py-3">
          Logout
        </Link>
      </ul>
    </nav>
  );
}

export default MobileMenu;
