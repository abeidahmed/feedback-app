import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import { useGetProjects } from 'api/allProjects';
import Logo from 'assets/Logo';
import MobileMenu from './MobileMenu';
import DesktopMenu from './DesktopMenu';
import { TagSelector } from 'components/Dropdown';
import { IconButton } from 'components/Button';
import { Container } from 'components/Container';

function Dashboard() {
  const [isActive, setIsActive] = useState(false);

  const { projects, isLoading, isError } = useGetProjects();

  const overlayClass = cn([
    'fixed inset-0 md:hidden z-10',
    {
      hidden: !isActive,
      block: isActive,
    },
  ]);

  return (
    <header className="relative bg-white">
      <div className={overlayClass}>
        <div className="absolute inset-0 bg-gray-300 opacity-75 "></div>
      </div>
      <Container className="relative z-10 bg-white">
        <div className="flex items-center justify-between h-16 border-b border-gray-200">
          <div className="flex items-center flex-1">
            <Link to="/app">
              <Logo width="48" height="48" />
            </Link>
            {isLoading || isError ? null : <TagSelector projects={projects} />}
          </div>
          <DesktopMenu />
          <div className="flex items-center justify-center ml-3 -mr-1.5 md:hidden">
            <IconButton
              icon={`${isActive ? 'chevron-up' : 'chevron-down'}`}
              appearance="minimal"
              onClick={() => setIsActive(!isActive)}
            />
          </div>
        </div>
      </Container>
      <MobileMenu isActive={isActive} />
    </header>
  );
}

export default Dashboard;
