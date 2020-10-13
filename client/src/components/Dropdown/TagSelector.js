import React, { useState, useEffect } from 'react';
import { useLocation, Redirect, Link } from 'react-router-dom';
import cn from 'classnames';
import { useModalType } from 'store/modal';
import { Icon } from 'components/Icon';
import { OutsideClickHandler } from 'components/Container';

function TagSelector({ projects }) {
  const location = useLocation();
  const paramId = location.pathname.split('/')[2];
  const { name, id } = projects.find((project) => project.id === paramId) || {};
  const { modalOn, types } = useModalType();

  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState('');

  const dropdownClass = cn([
    'absolute w-full mt-2 overflow-hidden bg-white rounded-md shadow-md',
    {
      hidden: !isActive,
      block: isActive,
    },
  ]);

  useEffect(() => {
    setTitle(name);
  }, [id, name]);

  function handleAddProject() {
    modalOn({
      modalType: types.ADD_PROJECT,
      modalProps: {},
    });
    setIsActive(false);
  }

  if (location.pathname === '/app/')
    return <Redirect to={{ pathname: '/app' }} />;
  if (location.pathname === '/app') return null;

  return (
    <OutsideClickHandler
      onOutsideClick={() => setIsActive(false)}
      className="relative flex-1 w-full max-w-sm ml-3 md:ml-4"
    >
      <button
        onClick={() => setIsActive(!isActive)}
        className="flex shadow w-full bg-gray-50 py-1.5 px-3 border border-transparent focus:border-blue-600 hover:bg-gray-100 focus:shadow-outline-blue rounded-md items-center justify-between focus:outline-none"
      >
        <span>{title}</span>
        <Icon icon="selector" className="w-5 h-5 text-gray-600" />
      </button>
      <div className={dropdownClass}>
        <ul className="w-full py-1">
          {projects.map(({ id, name }) => (
            <Link
              key={id}
              to={`/app/${id}`}
              className="block px-3 py-2 text-gray-700 focus:bg-gray-100 hover:bg-gray-100 focus:outline-none"
              onClick={() => setIsActive(false)}
            >
              {name}
            </Link>
          ))}
          <hr className="my-1 border-gray-200" />
          <button
            className="inline-flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100"
            onClick={handleAddProject}
          >
            <span>New Project</span>
            <Icon icon="plus" className="w-5 h-5 text-gray-400" />
          </button>
        </ul>
      </div>
    </OutsideClickHandler>
  );
}

export default TagSelector;
