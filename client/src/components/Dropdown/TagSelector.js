import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import cn from 'classnames';
import { Icon } from 'components/Icon';
import { ComboMenu } from './components';
import { OutsideClickHandler } from 'components/Container';

function TagSelector({ location }) {
  const [isActive, setIsActive] = useState(false);
  const [title, setTitle] = useState('Sand diver');

  const dropdownClass = cn([
    'absolute w-full mt-2 overflow-hidden bg-white rounded-md shadow-md',
    {
      hidden: !isActive,
      block: isActive,
    },
  ]);

  const setMenu = (title) => {
    setTitle(title);
    setIsActive(false);
  };

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
          <ComboMenu
            title="Sand diver"
            to="/"
            onClick={() => setMenu('Sand diver')}
          />
          <ComboMenu
            title="Meta broker"
            to="/"
            onClick={() => setMenu('Meta broker')}
          />
          <button className="inline-flex items-center justify-between w-full px-3 py-2 text-left text-gray-700 focus:outline-none focus:bg-gray-100 hover:bg-gray-100">
            <span>New Project</span>
            <Icon icon="plus" className="w-5 h-5 text-gray-400" />
          </button>
        </ul>
      </div>
    </OutsideClickHandler>
  );
}

export default withRouter(TagSelector);
