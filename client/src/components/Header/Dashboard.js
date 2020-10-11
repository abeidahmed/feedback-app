import React, { useState } from 'react';
import cn from 'classnames';
import { Icon } from 'components/Icon';
import Logo from 'assets/Logo';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { TagSelector } from 'components/Dropdown';

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  const overlayClass = cn([
    'fixed inset-0 md:hidden',
    {
      hidden: !isActive,
      block: isActive,
    },
  ]);

  const toggleBtnIconClass = cn([
    'w-5 h-5 text-gray-700 transition duration-150 ease-in-out',
    {
      'transform rotate-180': isActive,
    },
  ]);

  return (
    <header className="relative bg-white">
      <div className={overlayClass}>
        <div className="absolute inset-0 bg-gray-300 opacity-75 "></div>
      </div>
      <div className="relative z-10 w-full max-w-5xl px-4 mx-auto bg-white">
        <div className="flex items-center justify-between h-16 border-b border-gray-200">
          <div className="flex items-center flex-1">
            <Logo width="48" height="48" />
            <TagSelector />
          </div>
          <DesktopMenu />
          <button
            onClick={() => setIsActive(!isActive)}
            className="p-1.5 ml-3 -mr-1.5 rounded-md focus:outline-none focus:shadow-outline-blue focus:bg-gray-50 md:hidden"
          >
            <Icon icon="chevron-down" className={toggleBtnIconClass} />
          </button>
        </div>
      </div>
      <MobileMenu isActive={isActive} />
    </header>
  );
}

export default Dashboard;
